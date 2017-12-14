//******************************************************************************************************
//  queryOptions_ctrl.js - Gbtc
//
//  Copyright © 2017, Grid Protection Alliance.  All Rights Reserved.
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
//  10/31/2017 - Billy Ernest
//       Generated original version of source code.
//
//******************************************************************************************************
import _ from "lodash";
import { DefaultFlags, MeasurementStateFlags } from './../js/openHistorianConstants'

export class OpenHistorianQueryOptionsCtrl{
    dataFlags: Array<any>;
    return: any;
    flagArray: Array<any>;

    constructor(private $scope,private $compile) {
        // #region Members

        this.$scope = $scope;
        this.dataFlags = JSON.parse(JSON.stringify(($scope.flags == undefined ? DefaultFlags : _.merge(DefaultFlags, $scope.flags))));
        this.return = $scope.return;

        this.flagArray = _.map(Object.keys(this.dataFlags), a => {
            return { key: a, order: this.dataFlags[a].Order };
        }).sort((a, b) => {
            return a.order - b.order;
        });

        this.calculateInitialFlags();
    // #endregion
    }

    // #region Methods
    calculateFlags(flag, type) {
        var ctrl = this;

        var flagVarIncluded = 0;
        var flagVarExcluded = 0;

        if (flag == 'Select All') {
            _.each(Object.keys(ctrl.dataFlags), function (key, index, list) {
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

            _.each(Object.keys(ctrl.dataFlags), function (key, index, list) {
                if (key == 'Select All') return;

                if (type == 'Included') {
                    ctrl.dataFlags[key].Excluded = !ctrl.dataFlags[key].Included
                }
                else if (type == 'Excluded') {
                    ctrl.dataFlags[key].Included = !ctrl.dataFlags[key].Excluded
                }


                flagVarIncluded = flagVarIncluded | (ctrl.dataFlags[key].Included ? MeasurementStateFlags[key] : 0);
                flagVarExcluded = flagVarExcluded | (ctrl.dataFlags[key].Excluded ? MeasurementStateFlags[key] : 0);
            });
        }

        ctrl.return.Included = '0x' + ctrl.padDigits(this.dec2hex(flagVarIncluded), 8);
        ctrl.return.Excluded = '0x' + ctrl.padDigits(this.dec2hex(flagVarExcluded), 8);
        ctrl.return.Normal = ctrl.dataFlags['Normal'].Included
        ctrl.$scope.flags = ctrl.dataFlags;
    }

    calculateInitialFlags(){
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
        ctrl.return.Normal = ctrl.dataFlags['Normal'].Included

    }

    dec2hex(number) {
        if (number < 0) {
            number = 0xFFFFFFFF + number + 1;
        }

        return number.toString(16).toUpperCase();
    }

    padDigits(number, digits) {
        return Array(Math.max(digits - String(number).length + 1, 0)).join('0') + number;
    }

    // #endregion

}
