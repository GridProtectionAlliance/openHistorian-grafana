# prunk

prunk is a mocking utility for node.js `require()`. It allows you to
mock, suppress or alias imports based on their name, regular expressions or
custom test functions.

[![Build Status](https://travis-ci.org/dak0rn/prunk.svg?branch=master)](https://travis-ci.org/dak0rn/prunk)
![Dependencies](https://img.shields.io/david/dak0rn/prunk.svg)
![Dev Dependencies](https://img.shields.io/david/dev/dak0rn/prunk.svg)

## Example

The great thing about testing React components is that you do not need
a web browser but can run tests and render components directly in node.
This can be a bit tricky if you use a development environment that allows
you to import non-JavaScript resources (e.g. templates or stylesheets) in your code.

Given you have a React component you want to test. This component imports a
SCSS files so that the import in node would fail.

```javascript
// MyComp.js
import { Component } from 'react';
import './style.scss';

export default class Mycomp extends Component {
    // ...
}
```

At this point, you either can introduce a pre-compiler, a loader or whatever
your test framework supports or you can simply make sure the stylesheet does not get imported.

```javascript
// MyComp.spec.js
const prunk = require('prunk');

prunk.mock('./style.scss', 'no scss, dude.');
// or
prunk.mock( req => './style.scss' === req, 'no scss, dude');
// or
prunk.mock( /\.(css|scss|sass)$/, 'no styles, dude');

const MyComp = require('./MyComp');
```

---

**Note:**

In this example, `require()` is used instead of `import` because some pre-compilers
move all imports to the top of the file and that would make the mocking impossible.
If you use mocha you can leverage it's [compiler](https://mochajs.org/#usage) configuration for that.
(You might also check out [this](https://65535th.com/testing-react-components/) post with an example).

---

The example above uses `.mock()` to replace the required module contents.
If you just want to make sure some things don't get imported at all you can suppress them.
Then, they will always return `undefined`.

```javascript
// MyComp.spec.js
const prunk = require('prunk');

prunk.suppress('./style.scss');
// or
prunk.suppress( req => './style.scss' === req );
// or
prunk.suppress( /\.(css|scss|sass)$/ );

const MyComp = require('./MyComp');
```

Maybe mocking an import is more than just a one-liner. You can then alias it to another file.

```javascript
const prunk = require('prunk');

prunk.alias('./style.scss', './style.js');
// or
prunk.alias(/style\.(scss)$/, 'js') // Replaces the first group
// or
prunk.alias( what => './style.scss' === what, () => './style.js' );
```

## API

### prunk.mock(test, value)

Mocks the given import with the given value.
`test` can be a predicate **function** that is used to compare
whatever is required and returns either `true` or `false`.
If the return value is truthy the import will be
mocked with the given value.

The function gets the required path as an argument.

```javascript
var mockStyles = req => 'style.css' === req;
prunk.mock( mockStyles, 'no css, dude.');
```

`test` can also be a `RegExp` that is matched agains the name
of the import or a string. It can be anything else, too, if your
imports are gone totally crazy.

```javascript
prunk.mock( 'style.css', 'no css, dude.' );
prunk.mock( /\.(css|scss|sass|less)/, 'no styles, dude.');
```

This function returns the prunk object so that you can chain calls.

```javascript
prunk.mock( ... )
     .mock( ... )
     .mock( ... );
```

### prunk.unmock(test)

Removes the mock registered for the given `test`.
`unmock()` uses strict equal to compare the registered
mocks.

This function returns the prunk object so that you can chain calls.

### prunk.unmockAll()

Removes all mocks.

This function returns the prunk object so that you can chain calls.

### prunk.suppress(test)

Suppresses all imports that match the given `test`.
`test` can be a **function** that is used to compare
whatever is required and returns `true` or `false`.
If the return value is truthy the import will be suppressed
and thus returns `undefined`.

The function gets the required path as an argument.

```javascript
var mockStyles = (req) => 'style.css' === req;
prunk.suppress( mockStyles );
```

`test` can also be a `RegExp` that is matched against the name
of the import or a string or something else.

```javascript
prunk.suppress( 'style.css' );
prunk.suppress( /\.(css|scss|sass|less)/ );
```

This function returns the prunk object so that you can chain calls.

### prunk.unsuppress(test)

Removes the mock registered for the given `test`.
`unsuppress()` uses strict equal to compare the suppressed
imports.

This function returns the prunk object so that you can chain calls.

### prunk.unsuppressAll()

Removes all suppressed imports.

This function returns the prunk object so that you can chain calls.

### prunk.alias(test, alias)

This function provides a simple way to alias paths when required. As the
other functions, it takes a test that can either be a string, a regular
expression or predicate function. Some special rules apply here, though.

If you pass a **string** as the first argument the required path will
match if it begins or equals your string. The `alias` parameter is meant
to be a string, too and simple string manipulation will be performed.
It will only replace the first occurrence of the search pattern.

```javascript
prunk.alias('foo', 'bar');
require('foo'); // aliased to require('bar')
require('foo/foofoo'); // aliased to require('bar/foofoo');
```

It is also possible to provide a **regular expression**. It has to contain a grouping
expression `( )` so that the replacement of the tested value works. `prunk.alias` will
**throw an error** if the regex does not contain a group.

```javascript
prunk.alias(/^(foo)/, 'bar');
require('foo'); // aliased to require('bar')
require('foo/foofoo'); // aliased to require('bar/foofoo');
```

Both, string and regexes also accept a **function** as the second argument. This function
gets the required path and is supposed to return a path which is then required.

```javascript
prunk.alias('foo', path => `my-foo-dir/${path}` );
require('foo'); // aliased to require('my-foo-dir/foo')
require('foo/foofoo'); // aliased to require('my-foo-dir/foo/foofoo');
```

The third possibility is to provide a predicate **function as test**. Since prunk cannot know
how to alias a path matched with a predicate you have to provide a function as second argument, too.
`prunk.alias` will throw if you don't.

```javascript
prunk.alias( path => path.startsWith('bar'), 'test' );  // will throw!

prunk.alias( path => path.startsWith('foo'), () => 'bar' );
require('foo'); // aliased to require('bar')
```

### prunk.unalias(test)

Removes the alias for the given test.

This function returns the prunk object so that you can chain calls.

### prunk.unaliasAll()

Removes all aliases.

This function returns the prunk object so that you can chain calls.

## More ocumentation

[Documented source](https://dak0rn.github.io/prunk/).