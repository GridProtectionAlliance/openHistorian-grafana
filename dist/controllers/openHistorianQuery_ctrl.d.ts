import { QueryCtrl } from 'app/plugins/sdk';
export declare class OpenHistorianDataSourceQueryCtrl extends QueryCtrl {
    private $scope;
    private $injector;
    private uiSegmentSrv;
    private templateSrv;
    private $compile;
    static templateUrl: string;
    queryTypes: Array<string>;
    queryType: string;
    constructor($scope: any, $injector: any, uiSegmentSrv: any, templateSrv: any, $compile: any);
    onChangeInternal(): void;
    changeQueryType(): void;
}
