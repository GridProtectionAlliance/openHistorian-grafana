'use strict';

System.register(['lodash', './../js/constants.js'], function (_export, _context) {
    "use strict";

    var _, DefaultFlags, MeasurementStateFlags, _createClass, OpenHistorianConfigCtrl;

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    return {
        setters: [function (_lodash) {
            _ = _lodash.default;
        }, function (_jsConstantsJs) {
            DefaultFlags = _jsConstantsJs.DefaultFlags;
            MeasurementStateFlags = _jsConstantsJs.MeasurementStateFlags;
        }],
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

                    // #region Members
                    var ctrl = this;

                    ctrl.current.jsonData = ctrl.current.jsonData || {};
                    ctrl.current.jsonData.Included = ctrl.current.jsonData.Included == undefined ? 0xFFFFFFF : ctrl.current.jsonData.Included;
                    ctrl.current.jsonData.Excluded = ctrl.current.jsonData.Excluded == undefined ? 0x0000000 : ctrl.current.jsonData.Excluded;
                    ctrl.current.jsonData.IncludeNormal = ctrl.current.jsonData.IncludeNormal == undefined ? true : ctrl.current.jsonData.IncludeNormal;

                    ctrl.current.jsonData.flags = ctrl.current.jsonData.flags == undefined ? DefaultFlags : _.merge(DefaultFlags, ctrl.current.jsonData.flags);

                    ctrl.flagArray = _.map(Object.keys(ctrl.current.jsonData.flags), function (a) {
                        return { key: a, order: ctrl.current.jsonData.flags[a].Order };
                    }).sort(function (a, b) {
                        return a.order - b.order;
                    });

                    // #endregion

                }

                // #region Methods


                _createClass(OpenHistorianConfigCtrl, [{
                    key: 'calculateFlags',
                    value: function calculateFlags(flag, type) {
                        var ctrl = this;

                        var flagVarIncluded = 0;
                        var flagVarExcluded = 0;

                        if (flag == 'Select All') {
                            _.each(Object.keys(ctrl.current.jsonData.flags), function (key, index, list) {
                                if (type == 'Included') {
                                    ctrl.current.jsonData.flags[key].Excluded = false;
                                    ctrl.current.jsonData.flags[key].Included = true;
                                } else if (type == 'Excluded') {
                                    ctrl.current.jsonData.flags[key].Included = false;
                                    ctrl.current.jsonData.flags[key].Excluded = true;
                                }
                            });

                            if (type == 'Included') {
                                flagVarIncluded = 0xFFFFFFFF;
                                flagVarExcluded = 0x00000000;
                            } else if (type == 'Excluded') {
                                flagVarExcluded = 0xFFFFFFFF;
                                flagVarIncluded = 0x00000000;
                            }
                        } else {
                            ctrl.current.jsonData.flags['Select All'].Included = false;
                            ctrl.current.jsonData.flags['Select All'].Excluded = false;

                            _.each(Object.keys(ctrl.current.jsonData.flags), function (key, index, list) {
                                if (key == 'Select All') return;

                                if (type == 'Included') {
                                    ctrl.current.jsonData.flags[key].Excluded = !ctrl.current.jsonData.flags[key].Included;
                                } else if (type == 'Excluded') {
                                    ctrl.current.jsonData.flags[key].Included = !ctrl.current.jsonData.flags[key].Excluded;
                                }

                                flagVarIncluded = flagVarIncluded | (ctrl.current.jsonData.flags[key].Included ? MeasurementStateFlags[key] : 0);
                                flagVarExcluded = flagVarExcluded | (ctrl.current.jsonData.flags[key].Excluded ? MeasurementStateFlags[key] : 0);
                            });
                        }

                        ctrl.current.jsonData.Included = '0x' + ctrl.padDigits(this.dec2hex(flagVarIncluded), 8);
                        ctrl.current.jsonData.Excluded = '0x' + ctrl.padDigits(this.dec2hex(flagVarExcluded), 8);
                        ctrl.current.jsonData.IncludeNormal = ctrl.current.jsonData.flags['Normal'].Included;
                    }
                }, {
                    key: 'dec2hex',
                    value: function dec2hex(number) {
                        if (number < 0) {
                            number = 0xFFFFFFFF + number + 1;
                        }

                        return number.toString(16).toUpperCase();
                    }
                }, {
                    key: 'padDigits',
                    value: function padDigits(number, digits) {
                        return Array(Math.max(digits - String(number).length + 1, 0)).join(0) + number;
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
