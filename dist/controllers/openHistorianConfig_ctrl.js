//******************************************************************************************************
//  config_ctrl.js - Gbtc
//
//  Copyright � 2017, Grid Protection Alliance.  All Rights Reserved.
//
//  Licensed to the Grid Protection Alliance (GPA) under one or more contributor license agreements. See
//  the NOTICE file distributed with this work for additional information regarding copyright ownership.
//  The GPA licenses this file to you under the MIT License (MIT), the "License"; you may not use this
//  file except in compliance with the License. You may obtain a copy of the License at:
//
//      http://opensource.org/licenses/MIT
//
//  Unless agreed to in writing, the subject software distributed under the License is distributed on an
//  "AS-IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. Refer to the
//  License for the specific language governing permissions and limitations.
//
//  Code Modification History:
//  ----------------------------------------------------------------------------------------------------
//  10/30/2017 - Billy Ernest
//       Generated original version of source code.
//
//******************************************************************************************************
System.register(["lodash", './../js/openHistorianConstants'], function(exports_1) {
    var lodash_1, openHistorianConstants_1;
    var OpenHistorianConfigCtrl;
    return {
        setters:[
            function (lodash_1_1) {
                lodash_1 = lodash_1_1;
            },
            function (openHistorianConstants_1_1) {
                openHistorianConstants_1 = openHistorianConstants_1_1;
            }],
        execute: function() {
            OpenHistorianConfigCtrl = (function () {
                function OpenHistorianConfigCtrl($scope) {
                    // #region Members
                    var ctrl = this;
                    ctrl.current.jsonData = ctrl.current.jsonData || {};
                    ctrl.current.jsonData.Included = (ctrl.current.jsonData.Included == undefined ? '0xFFFFFFF' : ctrl.current.jsonData.Included);
                    ctrl.current.jsonData.Excluded = (ctrl.current.jsonData.Excluded == undefined ? '0x0000000' : ctrl.current.jsonData.Excluded);
                    ctrl.current.jsonData.IncludeNormal = (ctrl.current.jsonData.IncludeNormal == undefined ? true : ctrl.current.jsonData.IncludeNormal);
                    ctrl.current.jsonData.flags = (ctrl.current.jsonData.flags == undefined ? openHistorianConstants_1.DefaultFlags : lodash_1.default.merge(openHistorianConstants_1.DefaultFlags, ctrl.current.jsonData.flags));
                    ctrl.flagArray = lodash_1.default.map(Object.keys(ctrl.current.jsonData.flags), function (a) {
                        return { key: a, order: ctrl.current.jsonData.flags[a].Order };
                    }).sort(function (a, b) {
                        return a.order - b.order;
                    });
                    // #endregion
                }
                // #region Methods
                OpenHistorianConfigCtrl.prototype.calculateFlags = function (flag, type) {
                    var ctrl = this;
                    var flagVarIncluded = 0;
                    var flagVarExcluded = 0;
                    if (flag == 'Select All') {
                        lodash_1.default.each(Object.keys(ctrl.current.jsonData.flags), function (key, index, list) {
                            if (type == 'Included') {
                                ctrl.current.jsonData.flags[key].Excluded = false;
                                ctrl.current.jsonData.flags[key].Included = true;
                            }
                            else if (type == 'Excluded') {
                                ctrl.current.jsonData.flags[key].Included = false;
                                ctrl.current.jsonData.flags[key].Excluded = true;
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
                        ctrl.current.jsonData.flags['Select All'].Included = false;
                        ctrl.current.jsonData.flags['Select All'].Excluded = false;
                        lodash_1.default.each(Object.keys(ctrl.current.jsonData.flags), function (key, index, list) {
                            if (key == 'Select All')
                                return;
                            if (type == 'Included') {
                                ctrl.current.jsonData.flags[key].Excluded = !ctrl.current.jsonData.flags[key].Included;
                            }
                            else if (type == 'Excluded') {
                                ctrl.current.jsonData.flags[key].Included = !ctrl.current.jsonData.flags[key].Excluded;
                            }
                            flagVarIncluded = flagVarIncluded | (ctrl.current.jsonData.flags[key].Included ? openHistorianConstants_1.MeasurementStateFlags[key] : 0);
                            flagVarExcluded = flagVarExcluded | (ctrl.current.jsonData.flags[key].Excluded ? openHistorianConstants_1.MeasurementStateFlags[key] : 0);
                        });
                    }
                    ctrl.current.jsonData.Included = '0x' + ctrl.padDigits(this.dec2hex(flagVarIncluded), 8);
                    ctrl.current.jsonData.Excluded = '0x' + ctrl.padDigits(this.dec2hex(flagVarExcluded), 8);
                    ctrl.current.jsonData.IncludeNormal = ctrl.current.jsonData.flags['Normal'].Included;
                };
                OpenHistorianConfigCtrl.prototype.dec2hex = function (number) {
                    if (number < 0) {
                        number = 0xFFFFFFFF + number + 1;
                    }
                    return number.toString(16).toUpperCase();
                };
                OpenHistorianConfigCtrl.prototype.padDigits = function (number, digits) {
                    return Array(Math.max(digits - String(number).length + 1, 0)).join('0') + number;
                };
                OpenHistorianConfigCtrl.templateUrl = 'partial/config.html';
                return OpenHistorianConfigCtrl;
            })();
            exports_1("OpenHistorianConfigCtrl", OpenHistorianConfigCtrl);
        }
    }
});
//# sourceMappingURL=openHistorianConfig_ctrl.js.map