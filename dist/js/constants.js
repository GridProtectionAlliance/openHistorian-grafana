'use strict';

System.register([], function (_export, _context) {
    "use strict";

    var DefaultFlags, MeasurementStateFlags, FunctionList, WhereOperators, Booleans, AngleUnits, TimeUnits;
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

            _export('FunctionList', FunctionList = {
                Set: { Function: 'Set', Parameters: [] },
                Slice: { Function: 'Slice', Parameters: [{ Default: 1, Type: 'double', Description: 'A floating-point value that must be greater than or equal to zero that represents the desired time tolerance, in seconds, for the time slice.' }] },
                Average: { Function: 'Average', Parameters: [] },
                Minimum: { Function: 'Minimum', Parameters: [] },
                Maximum: { Function: 'Maximum', Parameters: [] },
                Total: { Function: 'Total', Parameters: [] },
                Range: { Function: 'Range', Parameters: [] },
                Count: { Function: 'Count', Parameters: [] },
                Distinct: { Function: 'Distinct', Parameters: [] },
                AbsoluteValute: { Function: 'AbsoluteValue', Parameters: [] },
                Add: { Function: 'Add', Parameters: [{ Default: 0, Type: 'string', Description: 'A floating point value representing an additive offset to be applied to each value the source series.' }] },
                Subtract: { Function: 'Subtract', Parameters: [{ Default: 0, Type: 'string', Description: 'A floating point value representing an additive offset to be applied to each value the source series.' }] },
                Multiply: { Function: 'Multiply', Parameters: [{ Default: 1, Type: 'string', Description: 'A floating point value representing an additive offset to be applied to each value the source series.' }] },
                Divide: { Function: 'Multiply', Parameters: [{ Default: 1, Type: 'string', Description: 'A floating point value representing an additive offset to be applied to each value the source series.' }] },
                Round: { Function: 'Round', Parameters: [{ Default: 0, Type: 'double', Description: 'A positive integer value representing the number of decimal places in the return value - defaults to 0.' }] },
                Floor: { Function: 'Floor', Parameters: [] },
                Ceiling: { Function: 'Ceiling', Parameters: [] },
                Truncate: { Function: 'Truncate', Parameters: [] },
                StandardDeviation: { Function: 'StandardDeviation', Parameters: [{ Default: false, Type: 'boolean', Description: 'A boolean flag representing if the sample based calculation should be used - defaults to false, which means the population based calculation should be used.' }] },
                Median: { Function: 'Median', Parameters: [] },
                Mode: { Function: 'Mode', Parameters: [] },
                Top: { Function: 'Top', Parameters: [{ Default: '100%', Type: 'string', Description: 'A positive integer value, representing a total, that is greater than zero - or - a floating point value, suffixed with \' %\' representing a percentage, that must range from greater than 0 to less than or equal to 100.' }, { Default: true, Type: 'boolean', Description: 'A boolean flag representing if time in dataset should be normalized - defaults to true.' }] },
                Bottom: { Function: 'Bottom', Parameters: [{ Default: '100%', Type: 'string', Description: 'A positive integer value, representing a total, that is greater than zero - or - a floating point value, suffixed with \' %\' representing a percentage, that must range from greater than 0 to less than or equal to 100.' }, { Default: true, Type: 'boolean', Description: 'A boolean flag representing if time in dataset should be normalized - defaults to true.' }] },
                Random: { Function: 'Random', Parameters: [{ Default: '100%', Type: 'string', Description: 'A positive integer value, representing a total, that is greater than zero - or - a floating point value, suffixed with \' %\' representing a percentage, that must range from greater than 0 to less than or equal to 100.' }, { Default: true, Type: 'boolean', Description: 'A boolean flag representing if time in dataset should be normalized - defaults to true.' }] },
                First: { Function: 'First', Parameters: [{ Default: '1', Type: 'string', Description: 'A positive integer value, representing a total, that is greater than zero - or - a floating point value, suffixed with \' %\' representing a percentage, that must range from greater than 0 to less than or equal to 100 - defaults to 1.' }] },
                Last: { Function: 'Last', Parameters: [{ Default: '1', Type: 'string', Description: 'A positive integer value, representing a total, that is greater than zero - or - a floating point value, suffixed with \' %\' representing a percentage, that must range from greater than 0 to less than or equal to 100 - defaults to 1.' }] },
                Percentile: { Function: 'Percentile', Parameters: [{ Default: '100%', Type: 'string', Description: 'A floating point value, representing a percentage, that must range from 0 to 100.' }] },
                Difference: { Function: 'Difference', Parameters: [] },
                TimeDifference: { Function: 'TimeDifference', Parameters: [{ Default: 'Seconds', Type: 'time', Description: 'Specifies the type of time units and must be one of the following: Seconds, Nanoseconds, Microseconds, Milliseconds, Minutes, Hours, Days, Weeks, Ke (i.e., traditional Chinese unit of decimal time), Ticks (i.e., 100-nanosecond intervals), PlanckTime or AtomicUnitsOfTime - defaults to Seconds.' }] },
                Derivative: { Function: 'Derivative', Parameters: [{ Default: 'Seconds', Type: 'time', Description: 'Specifies the type of time units and must be one of the following: Seconds, Nanoseconds, Microseconds, Milliseconds, Minutes, Hours, Days, Weeks, Ke (i.e., traditional Chinese unit of decimal time), Ticks (i.e., 100-nanosecond intervals), PlanckTime or AtomicUnitsOfTime - defaults to Seconds.' }] },
                TimeIntegration: { Function: 'TimeIntegration', Parameters: [{ Default: 'Hours', Type: 'time', Description: 'Specifies the type of time units and must be one of the following: Seconds, Nanoseconds, Microseconds, Milliseconds, Minutes, Hours, Days, Weeks, Ke (i.e., traditional Chinese unit of decimal time), Ticks (i.e., 100-nanosecond intervals), PlanckTime or AtomicUnitsOfTime - defaults to Hours.' }] },
                Interval: { Function: 'Interval', Parameters: [{ Default: 0, Type: 'double', Description: 'A floating-point value that must be greater than or equal to zero that represents the desired time interval, in time units, for the returned data. ' }, { Default: 'Seconds', Type: 'time', Description: 'Specifies the type of time units and must be one of the following: Seconds, Nanoseconds, Microseconds, Milliseconds, Minutes, Hours, Days, Weeks, Ke (i.e., traditional Chinese unit of decimal time), Ticks (i.e., 100-nanosecond intervals), PlanckTime or AtomicUnitsOfTime - defaults to Seconds.' }] },
                IncludeRange: { Function: 'IncludeRange', Parameters: [{ Default: 0, Type: 'double', Description: 'Floating-point number that represents the low range of values allowed in the return series.' }, { Default: 0, Type: 'double', Description: 'Floating-point number that represents the high range of values allowed in the return series.' }, { Default: false, Type: 'boolean', Description: 'A boolean flag that determines if range values are inclusive, i.e., allowed values are >= low and <= high - defaults to false, which means values are exclusive, i.e., allowed values are > low and < high.' }, { Default: false, Type: 'boolean', Description: 'A boolean flag - when four parameters are provided, third parameter determines if low value is inclusive and forth parameter determines if high value is inclusive.' }] },
                ExcludeRange: { Function: 'ExcludeRange', Parameters: [{ Default: 0, Type: 'double', Description: 'Floating-point number that represents the low range of values allowed in the return series.' }, { Default: 0, Type: 'double', Description: 'Floating-point number that represents the high range of values allowed in the return series.' }, { Default: false, Type: 'boolean', Description: 'A boolean flag that determines if range values are inclusive, i.e., allowed values are >= low and <= high - defaults to false, which means values are exclusive, i.e., allowed values are > low and < high.' }, { Default: false, Type: 'boolean', Description: 'A boolean flag - when four parameters are provided, third parameter determines if low value is inclusive and forth parameter determines if high value is inclusive.' }] },
                FilterNaN: { Function: 'FilterNaN', Parameters: [{ Default: true, Type: 'boolean', Description: 'A boolean flag that determines if infinite values should also be excluded - defaults to true.' }] },
                UnwrapAngle: { Function: 'UnwrapAngle', Parameters: [{ Default: 'Degrees', Type: 'angleUnits', Description: 'Specifies the type of angle units and must be one of the following: Degrees, Radians, Grads, ArcMinutes, ArcSeconds or AngularMil - defaults to Degrees.' }] },
                WrapAngle: { Function: 'WrapAngle', Parameters: [{ Default: 'Degrees', Type: 'angleUnits', Description: 'Specifies the type of angle units and must be one of the following: Degrees, Radians, Grads, ArcMinutes, ArcSeconds or AngularMil - defaults to Degrees.' }] },
                Label: { Function: 'Label', Parameters: [{ Default: 'Name', Type: 'string', Description: 'Renames a series with the specified label value.' }] }
            });

            _export('FunctionList', FunctionList);

            _export('WhereOperators', WhereOperators = ['=', '<>', '<', '<=', '>', '>=', 'LIKE', 'NOT LIKE', 'IN', 'NOT IN', 'IS', 'IS NOT']);

            _export('WhereOperators', WhereOperators);

            _export('Booleans', Booleans = ['true', 'false']);

            _export('Booleans', Booleans);

            _export('AngleUnits', AngleUnits = ['Degrees', 'Radians', 'Grads', 'ArcMinutes', 'ArcSeconds', 'AngularMil']);

            _export('AngleUnits', AngleUnits);

            _export('TimeUnits', TimeUnits = ['Weeks', 'Days', 'Hours', 'Minutes', 'Seconds', 'Milliseconds', 'Microseconds', 'Nanoseconds', 'Ticks', 'PlankTime', 'AtomicUnitsOfTime', 'Ke']);

            _export('TimeUnits', TimeUnits);
        }
    };
});
//# sourceMappingURL=constants.js.map
