'use strict';

System.register([], function (_export, _context) {
    "use strict";

    var DefaultFlags, MeasurementStateFlags;
    return {
        setters: [],
        execute: function () {
            _export('DefaultFlags', DefaultFlags = {
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
            });

            _export('DefaultFlags', DefaultFlags);

            _export('MeasurementStateFlags', MeasurementStateFlags = {
                Normal: 0,
                BadData: Math.pow(2, 0),
                SuspectData: Math.pow(2, 1),
                OverRangeError: Math.pow(2, 2),
                UnderRangeError: Math.pow(2, 3),
                AlarmHigh: Math.pow(2, 4),
                AlarmLow: Math.pow(2, 5),
                WarningHigh: Math.pow(2, 6),
                WarningLow: Math.pow(2, 7),
                FlatlineAlarm: Math.pow(2, 8),
                ComparisonAlarm: Math.pow(2, 9),
                ROCAlarm: Math.pow(2, 10),
                ReceivedAsBad: Math.pow(2, 11),
                CalculatedValue: Math.pow(2, 12),
                CalculationError: Math.pow(2, 13),
                CalculationWarning: Math.pow(2, 14),
                ReservedQualityFlag: Math.pow(2, 15),
                BadTime: Math.pow(2, 16),
                SuspectTime: Math.pow(2, 17),
                LateTimeAlarm: Math.pow(2, 18),
                FutureTimeAlarm: Math.pow(2, 19),
                UpSampled: Math.pow(2, 20),
                DownSampled: Math.pow(2, 21),
                DiscardedValue: Math.pow(2, 22),
                ReservedTimeFlag: Math.pow(2, 23),
                UserDefinedFlag1: Math.pow(2, 24),
                UserDefinedFlag2: Math.pow(2, 25),
                UserDefinedFlag3: Math.pow(2, 26),
                UserDefinedFlag4: Math.pow(2, 27),
                UserDefinedFlag5: Math.pow(2, 28),
                SystemError: Math.pow(2, 29),
                SystemWarning: Math.pow(2, 30),
                MeasurementError: Math.pow(2, 31)
            });

            _export('MeasurementStateFlags', MeasurementStateFlags);
        }
    };
});
//# sourceMappingURL=constants.js.map
