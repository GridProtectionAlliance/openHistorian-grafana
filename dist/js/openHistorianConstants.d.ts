export declare const DefaultFlags: {
    'Select All': {
        Included: boolean;
        Excluded: boolean;
        Order: number;
    };
    Normal: {
        Included: boolean;
        Excluded: boolean;
        Order: number;
    };
    BadData: {
        Included: boolean;
        Excluded: boolean;
        Order: number;
    };
    SuspectData: {
        Included: boolean;
        Excluded: boolean;
        Order: number;
    };
    OverRangeError: {
        Included: boolean;
        Excluded: boolean;
        Order: number;
    };
    UnderRangeError: {
        Included: boolean;
        Excluded: boolean;
        Order: number;
    };
    AlarmHigh: {
        Included: boolean;
        Excluded: boolean;
        Order: number;
    };
    AlarmLow: {
        Included: boolean;
        Excluded: boolean;
        Order: number;
    };
    WarningHigh: {
        Included: boolean;
        Excluded: boolean;
        Order: number;
    };
    WarningLow: {
        Included: boolean;
        Excluded: boolean;
        Order: number;
    };
    FlatlineAlarm: {
        Included: boolean;
        Excluded: boolean;
        Order: number;
    };
    ComparisonAlarm: {
        Included: boolean;
        Excluded: boolean;
        Order: number;
    };
    ROCAlarm: {
        Included: boolean;
        Excluded: boolean;
        Order: number;
    };
    ReceivedAsBad: {
        Included: boolean;
        Excluded: boolean;
        Order: number;
    };
    CalculatedValue: {
        Included: boolean;
        Excluded: boolean;
        Order: number;
    };
    CalculationError: {
        Included: boolean;
        Excluded: boolean;
        Order: number;
    };
    CalculationWarning: {
        Included: boolean;
        Excluded: boolean;
        Order: number;
    };
    ReservedQualityFlag: {
        Included: boolean;
        Excluded: boolean;
        Order: number;
    };
    BadTime: {
        Included: boolean;
        Excluded: boolean;
        Order: number;
    };
    SuspectTime: {
        Included: boolean;
        Excluded: boolean;
        Order: number;
    };
    LateTimeAlarm: {
        Included: boolean;
        Excluded: boolean;
        Order: number;
    };
    FutureTimeAlarm: {
        Included: boolean;
        Excluded: boolean;
        Order: number;
    };
    UpSampled: {
        Included: boolean;
        Excluded: boolean;
        Order: number;
    };
    DownSampled: {
        Included: boolean;
        Excluded: boolean;
        Order: number;
    };
    DiscardedValue: {
        Included: boolean;
        Excluded: boolean;
        Order: number;
    };
    ReservedTimeFlag: {
        Included: boolean;
        Excluded: boolean;
        Order: number;
    };
    UserDefinedFlag1: {
        Included: boolean;
        Excluded: boolean;
        Order: number;
    };
    UserDefinedFlag2: {
        Included: boolean;
        Excluded: boolean;
        Order: number;
    };
    UserDefinedFlag3: {
        Included: boolean;
        Excluded: boolean;
        Order: number;
    };
    UserDefinedFlag4: {
        Included: boolean;
        Excluded: boolean;
        Order: number;
    };
    UserDefinedFlag5: {
        Included: boolean;
        Excluded: boolean;
        Order: number;
    };
    SystemError: {
        Included: boolean;
        Excluded: boolean;
        Order: number;
    };
    SystemWarning: {
        Included: boolean;
        Excluded: boolean;
        Order: number;
    };
    MeasurementError: {
        Included: boolean;
        Excluded: boolean;
        Order: number;
    };
};
export declare const MeasurementStateFlags: {
    Normal: number;
    BadData: number;
    SuspectData: number;
    OverRangeError: number;
    UnderRangeError: number;
    AlarmHigh: number;
    AlarmLow: number;
    WarningHigh: number;
    WarningLow: number;
    FlatlineAlarm: number;
    ComparisonAlarm: number;
    ROCAlarm: number;
    ReceivedAsBad: number;
    CalculatedValue: number;
    CalculationError: number;
    CalculationWarning: number;
    ReservedQualityFlag: number;
    BadTime: number;
    SuspectTime: number;
    LateTimeAlarm: number;
    FutureTimeAlarm: number;
    UpSampled: number;
    DownSampled: number;
    DiscardedValue: number;
    ReservedTimeFlag: number;
    UserDefinedFlag1: number;
    UserDefinedFlag2: number;
    UserDefinedFlag3: number;
    UserDefinedFlag4: number;
    UserDefinedFlag5: number;
    SystemError: number;
    SystemWarning: number;
    MeasurementError: number;
};
export declare const FunctionList: {
    Set: {
        Function: string;
        Parameters: any[];
    };
    Slice: {
        Function: string;
        Parameters: {
            Default: number;
            Type: string;
            Description: string;
        }[];
    };
    Average: {
        Function: string;
        Parameters: any[];
    };
    Minimum: {
        Function: string;
        Parameters: any[];
    };
    Maximum: {
        Function: string;
        Parameters: any[];
    };
    Total: {
        Function: string;
        Parameters: any[];
    };
    Range: {
        Function: string;
        Parameters: any[];
    };
    Count: {
        Function: string;
        Parameters: any[];
    };
    Distinct: {
        Function: string;
        Parameters: any[];
    };
    AbsoluteValute: {
        Function: string;
        Parameters: any[];
    };
    Add: {
        Function: string;
        Parameters: {
            Default: number;
            Type: string;
            Description: string;
        }[];
    };
    Subtract: {
        Function: string;
        Parameters: {
            Default: number;
            Type: string;
            Description: string;
        }[];
    };
    Multiply: {
        Function: string;
        Parameters: {
            Default: number;
            Type: string;
            Description: string;
        }[];
    };
    Divide: {
        Function: string;
        Parameters: {
            Default: number;
            Type: string;
            Description: string;
        }[];
    };
    Round: {
        Function: string;
        Parameters: {
            Default: number;
            Type: string;
            Description: string;
        }[];
    };
    Floor: {
        Function: string;
        Parameters: any[];
    };
    Ceiling: {
        Function: string;
        Parameters: any[];
    };
    Truncate: {
        Function: string;
        Parameters: any[];
    };
    StandardDeviation: {
        Function: string;
        Parameters: {
            Default: boolean;
            Type: string;
            Description: string;
        }[];
    };
    Median: {
        Function: string;
        Parameters: any[];
    };
    Mode: {
        Function: string;
        Parameters: any[];
    };
    Top: {
        Function: string;
        Parameters: ({
            Default: string;
            Type: string;
            Description: string;
        } | {
            Default: boolean;
            Type: string;
            Description: string;
        })[];
    };
    Bottom: {
        Function: string;
        Parameters: ({
            Default: string;
            Type: string;
            Description: string;
        } | {
            Default: boolean;
            Type: string;
            Description: string;
        })[];
    };
    Random: {
        Function: string;
        Parameters: ({
            Default: string;
            Type: string;
            Description: string;
        } | {
            Default: boolean;
            Type: string;
            Description: string;
        })[];
    };
    First: {
        Function: string;
        Parameters: {
            Default: string;
            Type: string;
            Description: string;
        }[];
    };
    Last: {
        Function: string;
        Parameters: {
            Default: string;
            Type: string;
            Description: string;
        }[];
    };
    Percentile: {
        Function: string;
        Parameters: {
            Default: string;
            Type: string;
            Description: string;
        }[];
    };
    Difference: {
        Function: string;
        Parameters: any[];
    };
    TimeDifference: {
        Function: string;
        Parameters: {
            Default: string;
            Type: string;
            Description: string;
        }[];
    };
    Derivative: {
        Function: string;
        Parameters: {
            Default: string;
            Type: string;
            Description: string;
        }[];
    };
    TimeIntegration: {
        Function: string;
        Parameters: {
            Default: string;
            Type: string;
            Description: string;
        }[];
    };
    Interval: {
        Function: string;
        Parameters: ({
            Default: number;
            Type: string;
            Description: string;
        } | {
            Default: string;
            Type: string;
            Description: string;
        })[];
    };
    IncludeRange: {
        Function: string;
        Parameters: ({
            Default: number;
            Type: string;
            Description: string;
        } | {
            Default: boolean;
            Type: string;
            Description: string;
        })[];
    };
    ExcludeRange: {
        Function: string;
        Parameters: ({
            Default: number;
            Type: string;
            Description: string;
        } | {
            Default: boolean;
            Type: string;
            Description: string;
        })[];
    };
    FilterNaN: {
        Function: string;
        Parameters: {
            Default: boolean;
            Type: string;
            Description: string;
        }[];
    };
    UnwrapAngle: {
        Function: string;
        Parameters: {
            Default: string;
            Type: string;
            Description: string;
        }[];
    };
    WrapAngle: {
        Function: string;
        Parameters: {
            Default: string;
            Type: string;
            Description: string;
        }[];
    };
    Label: {
        Function: string;
        Parameters: {
            Default: string;
            Type: string;
            Description: string;
        }[];
    };
};
export declare const WhereOperators: string[];
export declare const Booleans: string[];
export declare const AngleUnits: string[];
export declare const TimeUnits: string[];
