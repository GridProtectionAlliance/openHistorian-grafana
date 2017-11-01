//******************************************************************************************************
//  config_ctrl.js - Gbtc
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
//  10/30/2017 - Billy Ernest
//       Generated original version of source code.
//
//******************************************************************************************************
import _ from "lodash";

export class OpenHistorianConfigCtrl{
    constructor($scope) {

    // #region Members
        var ctrl = this;

        ctrl.current.jsonData = ctrl.current.jsonData || {}
        ctrl.current.jsonData.Included = (ctrl.current.jsonData.Included == undefined ? 0xFFFFFFF : ctrl.current.jsonData.Included);
        ctrl.current.jsonData.Excluded = (ctrl.current.jsonData.Excluded == undefined ? 0x0000000 : ctrl.current.jsonData.Excluded);
        ctrl.current.jsonData.IncludeNormal = (ctrl.current.jsonData.IncludeNormal == undefined ? true : ctrl.current.jsonData.IncludeNormal);


        ctrl.current.jsonData.flags = (ctrl.current.jsonData.flags == undefined ?  DefaultFlags : _.merge(DefaultFlags, ctrl.current.jsonData.flags));

        ctrl.flagArray = _.map(Object.keys(ctrl.current.jsonData.flags), function (a) {
            return { key: a, order: ctrl.current.jsonData.flags[a].Order };
        }).sort(function (a, b) {
            return a.order - b.order;
        });

    // #endregion


    }

    // #region Methods
    calculateFlags(flag, type) {
        var ctrl = this;

        var flagVarIncluded = 0;
        var flagVarExcluded = 0;

        if (flag == 'Select All') {
            _.each(Object.keys(ctrl.current.jsonData.flags), function (key, index, list) {
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

            _.each(Object.keys(ctrl.current.jsonData.flags), function (key, index, list) {
                if (key == 'Select All') return;

                if (type == 'Included') {
                    ctrl.current.jsonData.flags[key].Excluded = !ctrl.current.jsonData.flags[key].Included
                }
                else if (type == 'Excluded') {
                    ctrl.current.jsonData.flags[key].Included = !ctrl.current.jsonData.flags[key].Excluded
                }


                flagVarIncluded = flagVarIncluded | (ctrl.current.jsonData.flags[key].Included ? MeasurementStateFlags[key] : 0);
                flagVarExcluded = flagVarExcluded | (ctrl.current.jsonData.flags[key].Excluded ? MeasurementStateFlags[key] : 0);
            });
        }

        ctrl.current.jsonData.Included = '0x' + ctrl.padDigits(this.dec2hex(flagVarIncluded), 8);
        ctrl.current.jsonData.Excluded = '0x' + ctrl.padDigits(this.dec2hex(flagVarExcluded), 8);
        ctrl.current.jsonData.IncludeNormal = ctrl.current.jsonData.flags['Normal'].Included;

    }

    dec2hex(number) {
        if (number < 0) {
            number = 0xFFFFFFFF + number + 1;
        }

        return number.toString(16).toUpperCase();
    }

    padDigits(number, digits) {
        return Array(Math.max(digits - String(number).length + 1, 0)).join(0) + number;
    }

    // #endregion
}
OpenHistorianConfigCtrl.templateUrl = 'partial/config.html';

// #region Constants
const DefaultFlags = {
    'Select All': { Included: true, Excluded: false, Order: -1 },
    Normal: { Included: true, Excluded: false, Order: 0 },
    BadData: { Included: true, Excluded: false, Order: 1 },
    SuspectData: { Included: true, Excluded: false, Order: 2 },
    OverRangeError: { Included: true, Excluded: false, Order: 3 },
    UnderRangeError: { Included: true, Excluded: false, Order: 4 },
    AlarmHigh: { Included: true, Excluded: false, Order: 5 },
    AlarmLow: { Included: true, Excluded: false, Order: 6 },
    WarningHigh: { Included: true, Excluded: false, Order: 7 },
    WarningLow: { Included: true, Excluded: false, Order: 8 },
    FlatlineAlarm: { Included: true, Excluded: false, Order: 9 },
    ComparisonAlarm: { Included: true, Excluded: false, Order: 10 },
    ROCAlarm: { Included: true, Excluded: false, Order: 11 },
    ReceivedAsBad: { Included: true, Excluded: false, Order: 12 },
    CalculatedValue: { Included: true, Excluded: false, Order: 13 },
    CalculationError: { Included: true, Excluded: false, Order: 14 },
    CalculationWarning: { Included: true, Excluded: false, Order: 15 },
    ReservedQualityFlag: { Included: true, Excluded: false, Order: 16 },
    BadTime: { Included: true, Excluded: false, Order: 17 },
    SuspectTime: { Included: true, Excluded: false, Order: 18 },
    LateTimeAlarm: { Included: true, Excluded: false, Order: 19 },
    FutureTimeAlarm: { Included: true, Excluded: false, Order: 20 },
    UpSampled: { Included: true, Excluded: false, Order: 21 },
    DownSampled: { Included: true, Excluded: false, Order: 22 },
    DiscardedValue: { Included: true, Excluded: false, Order: 23 },
    ReservedTimeFlag: { Included: true, Excluded: false, Order: 24 },
    UserDefinedFlag1: { Included: true, Excluded: false, Order: 25 },
    UserDefinedFlag2: { Included: true, Excluded: false, Order: 26 },
    UserDefinedFlag3: { Included: true, Excluded: false, Order: 27 },
    UserDefinedFlag4: { Included: true, Excluded: false, Order: 28 },
    UserDefinedFlag5: { Included: true, Excluded: false, Order: 29 },
    SystemError: { Included: true, Excluded: false, Order: 30 },
    SystemWarning: { Included: true, Excluded: false, Order: 31 },
    MeasurementError: { Included: true, Excluded: false, Order: 32 }
}

const MeasurementStateFlags =
{
    /// <summary>
    /// Defines normal state.
    /// </summary>
    Normal : 0,
    /// <summary>
    /// Defines bad data state.
    /// </summary>
    BadData : Math.pow(2,0),
    /// <summary>
    /// Defines suspect data state.
    /// </summary>
    SuspectData : Math.pow(2,1),
    /// <summary>
    /// Defines over range error, i.e., unreasonable high value.
    /// </summary>
    OverRangeError : Math.pow(2,2),
    /// <summary>
    /// Defines under range error, i.e., unreasonable low value.
    /// </summary>
    UnderRangeError : Math.pow(2,3),
    /// <summary>
    /// Defines alarm for high value.
    /// </summary>
    AlarmHigh : Math.pow(2,4),
    /// <summary>
    /// Defines alarm for low value.
    /// </summary>
    AlarmLow : Math.pow(2,5),
    /// <summary>
    /// Defines warning for high value.
    /// </summary>
    WarningHigh : Math.pow(2,6),
    /// <summary>
    /// Defines warning for low value.
    /// </summary>
    WarningLow : Math.pow(2,7),
    /// <summary>
    /// Defines alarm for flat-lined value, i.e., latched value test alarm.
    /// </summary>
    FlatlineAlarm : Math.pow(2,8),
    /// <summary>
    /// Defines comparison alarm, i.e., outside threshold of comparison with a real-time value.
    /// </summary>
    ComparisonAlarm : Math.pow(2,9),
    /// <summary>
    /// Defines rate-of-change alarm.
    /// </summary>
    ROCAlarm : Math.pow(2,10),
    /// <summary>
    /// Defines bad value received.
    /// </summary>
    ReceivedAsBad : Math.pow(2,11),
    /// <summary>
    /// Defines calculated value state.
    /// </summary>
    CalculatedValue : Math.pow(2,12),
    /// <summary>
    /// Defines calculation error with the value.
    /// </summary>
    CalculationError : Math.pow(2,13),
    /// <summary>
    /// Defines calculation warning with the value.
    /// </summary>
    CalculationWarning : Math.pow(2,14),
    /// <summary>
    /// Defines reserved quality flag.
    /// </summary>
    ReservedQualityFlag : Math.pow(2,15),
    /// <summary>
    /// Defines bad time state.
    /// </summary>
    BadTime : Math.pow(2,16),
    /// <summary>
    /// Defines suspect time state.
    /// </summary>
    SuspectTime : Math.pow(2,17),
    /// <summary>
    /// Defines late time alarm.
    /// </summary>
    LateTimeAlarm : Math.pow(2,18),
    /// <summary>
    /// Defines future time alarm.
    /// </summary>
    FutureTimeAlarm : Math.pow(2,19),
    /// <summary>
    /// Defines up-sampled state.
    /// </summary>
    UpSampled : Math.pow(2,20),
    /// <summary>
    /// Defines down-sampled state.
    /// </summary>
    DownSampled : Math.pow(2,21),
    /// <summary>
    /// Defines discarded value state.
    /// </summary>
    DiscardedValue : Math.pow(2,22),
    /// <summary>
    /// Defines reserved time flag.
    /// </summary>
    ReservedTimeFlag : Math.pow(2,23),
    /// <summary>
    /// Defines user defined flag 1.
    /// </summary>
    UserDefinedFlag1 : Math.pow(2,24),
    /// <summary>
    /// Defines user defined flag 2.
    /// </summary>
    UserDefinedFlag2 : Math.pow(2,25),
    /// <summary>
    /// Defines user defined flag 3.
    /// </summary>
    UserDefinedFlag3 : Math.pow(2,26),
    /// <summary>
    /// Defines user defined flag 4.
    /// </summary>
    UserDefinedFlag4 : Math.pow(2,27),
    /// <summary>
    /// Defines user defined flag 5.
    /// </summary>
    UserDefinedFlag5 : Math.pow(2,28),
    /// <summary>
    /// Defines system error state.
    /// </summary>
    SystemError : Math.pow(2,29),
    /// <summary>
    /// Defines system warning state.
    /// </summary>
    SystemWarning : Math.pow(2,30),
    /// <summary>
    /// Defines measurement error flag.
    /// </summary>
    MeasurementError : Math.pow(2,31)
}

// #endregion

