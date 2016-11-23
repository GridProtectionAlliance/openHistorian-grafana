//
// # prunk
// ## A mocking utility for node.js require
//
//     Author: Daniel Koch
//     Version: 1.2.1
//
//     Copyright 2016 Daniel Koch
//
//     Licensed under the Apache License, Version 2.0 (the "License");
//     you may not use this file except in compliance with the License.
//     You may obtain a copy of the License at
//
//         http://www.apache.org/licenses/LICENSE-2.0
//
//     Unless required by applicable law or agreed to in writing, software
//     distributed under the License is distributed on an "AS IS" BASIS,
//     WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
//     See the License for the specific language governing permissions and
//     limitations under the License.

// Require node's `module` module that provides
// access to all the things `require()` uses
var Module = require('module');

// ## _load
// The original `module._load` function
var _load = void 0;

// ## cache
// The cache that contains mocks and suppressed imports
var cache = [];

// ## init
// Overwrites `Module._load` with a function that either
// returns a mocked value from the cache or whatever the original
// function returns if nothing has been mocked.
var init = function() {
    _load = Module._load;

    // Overwrite the original `_load` function
    // The important argument for us is `req` because its the
    // name of whatever was required.
    Module._load = function(req, parent, isMain) {

        // Take the cache...
        var mock = cache
                        // Find the tests that match
                        .filter(function(mockDef) {
                            var test = mockDef.test;

                            // If we have a regex we match it against the string
                            if( test instanceof RegExp )
                                return null !== req.match( test );

                            // If we have a function we let the
                            // function decide
                            if( 'function' === typeof test )
                                return !! test(req, parent, isMain);

                            // If there is an alias we check if the string starts
                            // with the desired test
                            if( 'alias' === mockDef._type )
                                return req.startsWith( mockDef.test );

                            // Last case: we simply have no idea
                            // Thus, we use a strict equal
                            return test === req;
                        });

        // If we found a mocked import we return it.
        // We only use the first mock we find. Since the `createMock()` function
        // uses `Array.prototype.unshift` we always use the mock added at last.
        if( mock.length ) {
            mock = mock[0];
            value = mock.value;

            // Aliases are a bit special
            if( 'alias' !== mock._type )
                return value;

            // If the alias is a function we let that function do the
            // transformation of the path
            if( 'function' === typeof value )
                req = value(req);
            // If it is not a function we use string replacement
            else
                req = req.replace(mock.test, value);
        }

        // No mock; let the load system do its work
        return _load.call(Module, req, parent, isMain);
    };
};

// ## createMock
// Creates a mock with the given test, mocking with the given
// value and use the given type.
//
// - `test`  - Something that is used to compare. Might be a string, a function or something else
// - `value` - The mock value that replaces the original import
// - `type`  - Type, either `'mock'` or `'sup'`. This is used to remove it later on.
//
var createMock = function(test, value, type) {
    // Initialize the cache if not done already
    if( ! _load )
        init.call(this);

    // Push the new item to the front
    cache.unshift({
        test: test,
        value: value,
        _type: type
    })
};

// ## remove
// Removes a mock definition from the collection.
//
// - `test`  - Something that is used to compare. Might be a string, a function or something else
// - `type`  - Type, either `'mock'` or `'sup'`.
//
var remove = function(test, type) {
    // We want to use strict equals below thus
    // we use the string representation of RegExp's
    if( test instanceof RegExp )
            test = ('' + test);

    cache = cache.filter( function(def) {
            // If the type does not match we ignore it
            if( type !== def._type )
                return true;

            // Again, convert RegExp's if found
            var cmp = (def.test instanceof RegExp) ? '' + def.test : def.test;

            return test !== cmp;
        });
};

// ## removeAll
// Removes all mocks of the given type
//
// - `type`  - Type, either `'mock'` or `'sup'`.
//
var removeAll = function(type) {
    cache = cache.filter( function(item) {
        return item._type !== type;
    });
};

// ## The prunk object
var prunk = {

    // Provide access to the cache.
    // This is done to make the testing more reliable.
    get _cache() {
        return cache;
    },

    set _cache(what) {
        cache = what;
    },

    // ### mock
    // Mocks the given import with the given value.
    // `test` can be a **function** that is used to compare
    // whatever is required and returns `true` or `false`.
    // If the return value is truthy the import will be
    // mocked with the given value.
    //
    // The function's arguments are the same as with `Module._load`.
    // Most of the time you will look at the first argument, a `string`.
    //
    //     var mockStyles = (req) => 'style.css' === req;
    //     prunk.mock( mockStyles, 'no css, dude.');
    //
    // `test` can also be a `RegExp` that is matched agains the name
    // of the import or a string. It can be anything else, too, if your
    // imports are gone totally crazy.
    //
    //     prunk.mock( 'style.css', 'no css, dude.' );
    //     prunk.mock( /\.(css|scss|sass|less)/, 'no styles, dude.');
    //
    // It returns the prunk object so that you can chain calls.
    mock: function(test, value) {
        createMock(test, value, 'mock');
        return prunk;
    },

    // ### suppress
    // Suppresses the given import. A suppressed import always
    // returns `undefined`.
    // The `test` argument is the same as used by [mock()](#section-25).
    //
    // It returns the prunk object so that you can chain calls.
    suppress: function(test) {
        createMock(test, void 0, 'sup');
        return prunk;
    },

    // ### unmock
    // Removes the mock registered for the given `test`.
    // `unmock()` uses strict equal to compare the registered
    // mocks.
    // It returns the prunk object so that you can chain calls.
    unmock: function(test) {
        remove(test, 'mock');
        return prunk;
    },

    // ### unsuppress
    // Removes the mock registered for the given `test`.
    // `unsuppress()` uses strict equal to compare the suppressed
    // imports.
    // It returns the prunk object so that you can chain calls.
    unsuppress: function(test) {
        remove(test, 'sup');
        return prunk;
    },

    // ### unmockAll
    // Removes all mocks for imports
    // It returns the prunk object so that you can chain calls.
    unmockAll: function() {
        removeAll('mock');
        return prunk;
    },

    // ### unsuppressAll
    // Removes all suppressed imports
    // It returns the prunk object so that you can chain calls.
    unsuppressAll: function() {
        removeAll('sup');
        return prunk;
    },

    // ### alias
    // Aliases a path that begins with the given
    // string or matches the given regex.
    // This basically performs a string replacement if
    // you provide a simple string or a regex.
    // The regular expressions **must contain** at least
    // one grouping expression `(...)` so that the replacement
    // actually happens.
    // `alias` can also be a function that gets the path and
    // returns an updated one.
    // You can only provide a predicate function for `test`
    // if `alias` is also a function returning a modified path.
    // This method will throw if arguments are invalid.
    alias: function(test, alias) {

        if( 'undefined' === typeof alias )
            throw new Error('prunk.alias needs a second argument');

        if( 'function' === typeof test && 'function' !== typeof alias )
            throw new Error('prunk.alias has been passed a function as test but not as alias');

        if( test instanceof RegExp && ! test.toString().includes('(') )
            throw new Error('prunk.alias has been passed a RegExp without a grouping expression');

        createMock(test, alias, 'alias');
        return prunk;
    },

    // ### unalias
    // Removes the alias for the given test
    // It returns the prunk object so that you can chain calls.
    unalias: function(test) {
        remove(test, 'alias');
        return prunk;
    },

    // ### unaliasAll
    // Removes all aliases
    // It returns the prunk object so that you can chain calls.
    unaliasAll: function() {
        removeAll('alias');
        return prunk;
    }

};

// ## Exports
module.exports = prunk;