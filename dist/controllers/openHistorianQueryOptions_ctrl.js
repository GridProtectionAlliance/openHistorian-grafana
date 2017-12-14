System.register(["lodash", './../js/openHistorianConstants'], function(exports_1) {
    var lodash_1, openHistorianConstants_1;
    var OpenHistorianQueryOptionsCtrl;
    return {
        setters:[
            function (lodash_1_1) {
                lodash_1 = lodash_1_1;
            },
            function (openHistorianConstants_1_1) {
                openHistorianConstants_1 = openHistorianConstants_1_1;
            }],
        execute: function() {
            OpenHistorianQueryOptionsCtrl = (function () {
                function OpenHistorianQueryOptionsCtrl($scope, $compile) {
                    // #region Members
                    var _this = this;
                    this.$scope = $scope;
                    this.$compile = $compile;
                    this.$scope = $scope;
                    this.dataFlags = JSON.parse(JSON.stringify(($scope.flags == undefined ? openHistorianConstants_1.DefaultFlags : lodash_1.default.merge(openHistorianConstants_1.DefaultFlags, $scope.flags))));
                    this.return = $scope.return;
                    this.flagArray = lodash_1.default.map(Object.keys(this.dataFlags), function (a) {
                        return { key: a, order: _this.dataFlags[a].Order };
                    }).sort(function (a, b) {
                        return a.order - b.order;
                    });
                    this.calculateInitialFlags();
                    // #endregion
                }
                // #region Methods
                OpenHistorianQueryOptionsCtrl.prototype.calculateFlags = function (flag, type) {
                    var ctrl = this;
                    var flagVarIncluded = 0;
                    var flagVarExcluded = 0;
                    if (flag == 'Select All') {
                        lodash_1.default.each(Object.keys(ctrl.dataFlags), function (key, index, list) {
                            if (type == 'Included') {
                                ctrl.dataFlags[key].Excluded = false;
                                ctrl.dataFlags[key].Included = true;
                            }
                            else if (type == 'Excluded') {
                                ctrl.dataFlags[key].Included = false;
                                ctrl.dataFlags[key].Excluded = true;
                            }
                        });
                        if (type == 'Included') {
                            flagVarIncluded = 0xFFFFFFFF;
                            flagVarExcluded = 0x00000000;
                        }
                        else if (type == 'Excluded') {
                            flagVarExcluded = 0xFFFFFFFF;
                            flagVarIncluded = 0x00000000;
                        }
                    }
                    else {
                        ctrl.dataFlags['Select All'].Included = false;
                        ctrl.dataFlags['Select All'].Excluded = false;
                        lodash_1.default.each(Object.keys(ctrl.dataFlags), function (key, index, list) {
                            if (key == 'Select All')
                                return;
                            if (type == 'Included') {
                                ctrl.dataFlags[key].Excluded = !ctrl.dataFlags[key].Included;
                            }
                            else if (type == 'Excluded') {
                                ctrl.dataFlags[key].Included = !ctrl.dataFlags[key].Excluded;
                            }
                            flagVarIncluded = flagVarIncluded | (ctrl.dataFlags[key].Included ? openHistorianConstants_1.MeasurementStateFlags[key] : 0);
                            flagVarExcluded = flagVarExcluded | (ctrl.dataFlags[key].Excluded ? openHistorianConstants_1.MeasurementStateFlags[key] : 0);
                        });
                    }
                    ctrl.return.Included = '0x' + ctrl.padDigits(this.dec2hex(flagVarIncluded), 8);
                    ctrl.return.Excluded = '0x' + ctrl.padDigits(this.dec2hex(flagVarExcluded), 8);
                    ctrl.return.Normal = ctrl.dataFlags['Normal'].Included;
                    ctrl.$scope.flags = ctrl.dataFlags;
                };
                OpenHistorianQueryOptionsCtrl.prototype.calculateInitialFlags = function () {
                    var ctrl = this;
                    var flagVarIncluded = 0;
                    var flagVarExcluded = 0;
                    lodash_1.default.each(Object.keys(ctrl.dataFlags), function (key, index, list) {
                        if (key == 'Select All')
                            return;
                        flagVarIncluded = flagVarIncluded | (ctrl.dataFlags[key].Included ? openHistorianConstants_1.MeasurementStateFlags[key] : 0);
                        flagVarExcluded = flagVarExcluded | (ctrl.dataFlags[key].Excluded ? openHistorianConstants_1.MeasurementStateFlags[key] : 0);
                    });
                    ctrl.return.Included = '0x' + ctrl.padDigits(this.dec2hex(flagVarIncluded), 8);
                    ctrl.return.Excluded = '0x' + ctrl.padDigits(this.dec2hex(flagVarExcluded), 8);
                };
                OpenHistorianQueryOptionsCtrl.prototype.dec2hex = function (number) {
                    if (number < 0) {
                        number = 0xFFFFFFFF + number + 1;
                    }
                    return number.toString(16).toUpperCase();
                };
                OpenHistorianQueryOptionsCtrl.prototype.padDigits = function (number, digits) {
                    return Array(Math.max(digits - String(number).length + 1, 0)).join('0') + number;
                };
                return OpenHistorianQueryOptionsCtrl;
            })();
            exports_1("OpenHistorianQueryOptionsCtrl", OpenHistorianQueryOptionsCtrl);
        }
    }
});
//# sourceMappingURL=openHistorianQueryOptions_ctrl.js.map