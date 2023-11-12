export const QuerySelectOptions = [
    { label: 'Elements', value: 'Elements' },
    { label: 'Text Editor', value: 'Text' },
];

export const VariableQuerySelectOptions = [
    { label: 'All Points', value: 'All' },
    { label: 'Elements', value: 'Elements' },
    { label: 'Text Editor', value: 'Text' },
];


export const DefaultFlags = {
    'Select All': { Value: false, Order: -1, Flag: 0 },
    Normal: { Value: false, Order: 0, Flag: 0  },
    BadData: { Value: false, Order: 1, Flag: 1 << 0  },
    SuspectData: { Value: false, Order: 2, Flag: 1 << 1 },
    OverRangeError: { Value: false, Order: 3, Flag: 1 << 2 },
    UnderRangeError: { Value: false, Order: 4, Flag: 1 << 3 },
    AlarmHigh: { Value: false, Order: 5, Flag: 1 << 4 },
    AlarmLow: { Value: false, Order: 6, Flag: 1 << 5 },
    WarningHigh: { Value: false, Order: 7, Flag: 1 << 6 },
    WarningLow: { Value: false, Order: 8, Flag: 1 << 7 },
    FlatlineAlarm: { Value: false, Order: 9, Flag: 1 << 8 },
    ComparisonAlarm: { Value: false, Order: 10, Flag: 1 << 9 },
    ROCAlarm: { Value: false, Order: 11, Flag: 1 << 10 },
    ReceivedAsBad: { Value: false, Order: 12, Flag: 1 << 11 },
    CalculatedValue: { Value: false, Order: 13, Flag: 1 << 12 },
    CalculationError: { Value: false, Order: 14, Flag: 1 << 13 },
    CalculationWarning: { Value: false, Order: 15, Flag: 1 << 14 },
    ReservedQualityFlag: { Value: false, Order: 16, Flag: 1 << 15 },
    BadTime: { Value: false, Order: 17, Flag: 1 << 16 },
    SuspectTime: { Value: false, Order: 18, Flag: 1 << 17 },
    LateTimeAlarm: { Value: false, Order: 19, Flag: 1 << 18 },
    FutureTimeAlarm: { Value: false, Order: 20, Flag: 1 << 19 },
    UpSampled: { Value: false, Order: 21, Flag: 1 << 20 },
    DownSampled: { Value: false, Order: 22, Flag: 1 << 21 },
    DiscardedValue: { Value: false, Order: 23, Flag: 1 << 22 },
    ReservedTimeFlag: { Value: false, Order: 24, Flag: 1 << 23 },
    UserDefinedFlag1: { Value: false, Order: 25, Flag: 1 << 24 },
    UserDefinedFlag2: { Value: false, Order: 26, Flag: 1 << 25 },
    UserDefinedFlag3: { Value: false, Order: 27, Flag: 1 << 26 },
    UserDefinedFlag4: { Value: false, Order: 28, Flag: 1 << 27 },
    UserDefinedFlag5: { Value: false, Order: 29, Flag: 1 << 28 },
    SystemError: { Value: false, Order: 30, Flag: 1 << 29 },
    SystemWarning: { Value: false, Order: 31, Flag: 1 << 30 },
    MeasurementError: { Value: false, Order: 32, Flag: 1 << 31 }
}

export const WhereOperators = ['=', '<>', '<', '<=', '>', '>=', 'LIKE', 'NOT LIKE', 'IN', 'NOT IN', 'IS', 'IS NOT'];

export const Booleans = ['true', 'false'];

export const AngleUnits = ['Radians', 'Degrees', 'Grads', 'ArcMinutes', 'ArcSeconds', 'AngularMil']

export const TimeUnits = ['Weeks', 'Days', 'Hours', 'Minutes', 'Seconds', 'Milliseconds', 'Microseconds', 'Nanoseconds', 'Ticks', 'PlankTime', 'AtomicUnitsOfTime', 'Ke']

export const DefaultTimeUnits = ['Seconds', 'Minutes', 'Hours', 'Days', 'Weeks', 'Ticks', 'AtomicUnitsOfTime', 'PlanckTime', 'Ke']
