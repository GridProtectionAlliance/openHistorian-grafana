'use strict';

System.register(['./datasource', './controllers/query_ctrl', './controllers/config_ctrl', './controllers/queryOptions_ctrl', './controllers/annotations_ctrl'], function (_export, _context) {
  "use strict";

  var OpenHistorianDataSource, OpenHistorianDataSourceQueryCtrl, OpenHistorianConfigCtrl, OpenHistorianQueryOptionsCtrl, OpenHistorianAnnotaionsQueryCtrl;
  return {
    setters: [function (_datasource) {
      OpenHistorianDataSource = _datasource.OpenHistorianDataSource;
    }, function (_controllersQuery_ctrl) {
      OpenHistorianDataSourceQueryCtrl = _controllersQuery_ctrl.OpenHistorianDataSourceQueryCtrl;
    }, function (_controllersConfig_ctrl) {
      OpenHistorianConfigCtrl = _controllersConfig_ctrl.OpenHistorianConfigCtrl;
    }, function (_controllersQueryOptions_ctrl) {
      OpenHistorianQueryOptionsCtrl = _controllersQueryOptions_ctrl.OpenHistorianQueryOptionsCtrl;
    }, function (_controllersAnnotations_ctrl) {
      OpenHistorianAnnotaionsQueryCtrl = _controllersAnnotations_ctrl.OpenHistorianAnnotaionsQueryCtrl;
    }],
    execute: function () {
      _export('Datasource', OpenHistorianDataSource);

      _export('QueryCtrl', OpenHistorianDataSourceQueryCtrl);

      _export('ConfigCtrl', OpenHistorianConfigCtrl);

      _export('QueryOptionsCtrl', OpenHistorianQueryOptionsCtrl);

      _export('AnnotationsQueryCtrl', OpenHistorianAnnotaionsQueryCtrl);
    }
  };
});
//# sourceMappingURL=module.js.map
