'use strict';

System.register(['lodash', './../js/constants.js'], function (_export, _context) {
    "use strict";

    var _, DefaultFlags, MeasurementStateFlags, _createClass, OpenHistorianQueryOptionsCtrl;

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

            _export('OpenHistorianQueryOptionsCtrl', OpenHistorianQueryOptionsCtrl = function () {
                function OpenHistorianQueryOptionsCtrl($scope, $compile) {
                    var _this = this;

                    _classCallCheck(this, OpenHistorianQueryOptionsCtrl);

                    // #region Members

                    this.$scope = $scope;
                    this.dataFlags = $scope.flags == undefined ? DefaultFlags : _.merge(DefaultFlags, $scope.flags);
                    this.return = $scope.return;

                    this.flagArray = _.map(Object.keys(this.dataFlags), function (a) {
                        return { key: a, order: _this.dataFlags[a].Order };
                    }).sort(function (a, b) {
                        return a.order - b.order;
                    });

                    this.calculateInitialFlags();
                    // #endregion
                }

                // #region Methods


                _createClass(OpenHistorianQueryOptionsCtrl, [{
                    key: 'calculateFlags',
                    value: function calculateFlags(flag, type) {
                        var ctrl = this;

                        var flagVarIncluded = 0;
                        var flagVarExcluded = 0;

                        if (flag == 'Select All') {
                            _.each(Object.keys(ctrl.dataFlags), function (key, index, list) {
                                if (type == 'Included') {
                                    ctrl.dataFlags[key].Excluded = false;
                                    ctrl.dataFlags[key].Included = true;
                                } else if (type == 'Excluded') {
                                    ctrl.dataFlags[key].Included = false;
                                    ctrl.dataFlags[key].Excluded = true;
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
                            ctrl.dataFlags['Select All'].Included = false;
                            ctrl.dataFlags['Select All'].Excluded = false;

                            _.each(Object.keys(ctrl.dataFlags), function (key, index, list) {
                                if (key == 'Select All') return;

                                if (type == 'Included') {
                                    ctrl.dataFlags[key].Excluded = !ctrl.dataFlags[key].Included;
                                } else if (type == 'Excluded') {
                                    ctrl.dataFlags[key].Included = !ctrl.dataFlags[key].Excluded;
                                }

                                flagVarIncluded = flagVarIncluded | (ctrl.dataFlags[key].Included ? MeasurementStateFlags[key] : 0);
                                flagVarExcluded = flagVarExcluded | (ctrl.dataFlags[key].Excluded ? MeasurementStateFlags[key] : 0);
                            });
                        }

                        ctrl.return.Included = '0x' + ctrl.padDigits(this.dec2hex(flagVarIncluded), 8);
                        ctrl.return.Excluded = '0x' + ctrl.padDigits(this.dec2hex(flagVarExcluded), 8);
                        ctrl.return.Normal = ctrl.dataFlags.Normal.Included;
                        ctrl.$scope.flags = ctrl.dataFlags;
                    }
                }, {
                    key: 'calculateInitialFlags',
                    value: function calculateInitialFlags() {
                        var ctrl = this;
                        var flagVarIncluded = 0;
                        var flagVarExcluded = 0;

                        _.each(Object.keys(ctrl.dataFlags), function (key, index, list) {
                            if (key == 'Select All') return;

                            flagVarIncluded = flagVarIncluded | (ctrl.dataFlags[key].Included ? MeasurementStateFlags[key] : 0);
                            flagVarExcluded = flagVarExcluded | (ctrl.dataFlags[key].Excluded ? MeasurementStateFlags[key] : 0);
                        });

                        ctrl.return.Included = '0x' + ctrl.padDigits(this.dec2hex(flagVarIncluded), 8);
                        ctrl.return.Excluded = '0x' + ctrl.padDigits(this.dec2hex(flagVarExcluded), 8);
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

                return OpenHistorianQueryOptionsCtrl;
            }());

            _export('OpenHistorianQueryOptionsCtrl', OpenHistorianQueryOptionsCtrl);
        }
    };
});
//# sourceMappingURL=queryOptions_ctrl.js.map
