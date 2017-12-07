export declare class OpenHistorianConfigCtrl {
    static templateUrl: string;
    current: any;
    flagArray: Array<any>;
    constructor($scope: any);
    calculateFlags(flag: any, type: any): void;
    dec2hex(number: any): any;
    padDigits(number: any, digits: any): string;
}
