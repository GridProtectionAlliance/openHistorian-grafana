export declare class OpenHistorianQueryOptionsCtrl {
    private $scope;
    private $compile;
    dataFlags: Array<any>;
    return: any;
    flagArray: Array<any>;
    constructor($scope: any, $compile: any);
    calculateFlags(flag: any, type: any): void;
    calculateInitialFlags(): void;
    dec2hex(number: any): any;
    padDigits(number: any, digits: any): string;
}
