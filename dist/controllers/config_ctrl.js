'use strict';

System.register([], function (_export, _context) {
    "use strict";

    var _createClass, OpenHistorianConfigCtrl;

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    return {
        setters: [],
        execute: function () {
            _createClass = function () {
                function defineProperties(target, props) {
                    for (var i = 0; i < props.length; i++) {
                        var descriptor = props[i];
                        descriptor.enumerable = descriptor.enumerable || false;
                        descriptor.configurable = true;
                        if ("value" in descriptor) descriptor.writable = true;
                        Object.defineProperty(target, descriptor.key, descriptor);
                    }
                }

                return function (Constructor, protoProps, staticProps) {
                    if (protoProps) defineProperties(Constructor.prototype, protoProps);
                    if (staticProps) defineProperties(Constructor, staticProps);
                    return Constructor;
                };
            }();

            _export('OpenHistorianConfigCtrl', OpenHistorianConfigCtrl = function () {
                function OpenHistorianConfigCtrl($scope) {
                    _classCallCheck(this, OpenHistorianConfigCtrl);

                    this.current.jsonData = this.current.jsonData || {};
                    this.current.jsonData.excludeBadData = this.current.jsonData.excludeBadData == undefined ? false : this.current.jsonData.excludeBadData;
                    this.current.jsonData.excludeBadTime = this.current.jsonData.excludeBadTime == undefined ? false : this.current.jsonData.excludeBadTime;
                }

                _createClass(OpenHistorianConfigCtrl, [{
                    key: 'updateFlag',
                    value: function updateFlag(type) {
                        console.log(type);
                    }
                }]);

                return OpenHistorianConfigCtrl;
            }());

            _export('OpenHistorianConfigCtrl', OpenHistorianConfigCtrl);

            OpenHistorianConfigCtrl.templateUrl = 'partial/config.html';
        }
    };
});
//# sourceMappingURL=config_ctrl.js.map
