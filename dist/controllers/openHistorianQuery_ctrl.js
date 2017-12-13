//******************************************************************************************************
//  query_ctrl.js - Gbtc
//
//  Copyright � 2017, Grid Protection Alliance.  All Rights Reserved.
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
//  11/02/2017 - Billy Ernest
//       Generated original version of source code.
//
//******************************************************************************************************
System.register(['app/plugins/sdk', './../css/query-editor.css!', 'jquery'], function(exports_1) {
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var sdk_1, jquery_1;
    var OpenHistorianDataSourceQueryCtrl;
    return {
        setters:[
            function (sdk_1_1) {
                sdk_1 = sdk_1_1;
            },
            function (_1) {},
            function (jquery_1_1) {
                jquery_1 = jquery_1_1;
            }],
        execute: function() {
            OpenHistorianDataSourceQueryCtrl = (function (_super) {
                __extends(OpenHistorianDataSourceQueryCtrl, _super);
                function OpenHistorianDataSourceQueryCtrl($scope, $injector, uiSegmentSrv, templateSrv, $compile) {
                    _super.call(this, $scope, $injector);
                    this.$scope = $scope;
                    this.$injector = $injector;
                    this.uiSegmentSrv = uiSegmentSrv;
                    this.templateSrv = templateSrv;
                    this.$compile = $compile;
                    this.$scope = $scope;
                    this.$compile = $compile;
                    var ctrl = this;
                    this.uiSegmentSrv = uiSegmentSrv;
                    this.queryTypes = [
                        "Element List", "Filter Expression", "Text Editor"
                    ];
                    this.queryType = (this.target.queryType == undefined ? "Element List" : this.target.queryType);
                    ctrl.target.overriddenDataFlags = (ctrl.target.overriddenDataFlags != undefined ? ctrl.target.overriddenDataFlags : ctrl.datasource.dataFlags);
                    ctrl.target.queryOptions = {};
                    jquery_1.default('panel-editor-tab .gf-form-group .gf-form-inline a.gf-form-label:contains("Options")').on('click', function (event) {
                        if (jquery_1.default(jquery_1.default('panel-editor-tab .gf-form-group div')[6]).children().first()[0] != jquery_1.default('query-troubleshooter')[0]) {
                            var string = '<query-options flags="ctrl.target.overriddenDataFlags" return="ctrl.target.queryOptions"></query-options>';
                            jquery_1.default(jquery_1.default('panel-editor-tab .gf-form-group div')[6]).children().first().append(ctrl.$compile(string)(ctrl.$scope));
                        }
                    });
                }
                OpenHistorianDataSourceQueryCtrl.prototype.onChangeInternal = function () {
                    this.panelCtrl.refresh(); // Asks the panel to refresh data.
                };
                // used to change the query type from element list to filter expression
                OpenHistorianDataSourceQueryCtrl.prototype.changeQueryType = function () {
                    if (this.queryType == 'Text Editor') {
                        this.target.targetText = this.target.target;
                    }
                };
                OpenHistorianDataSourceQueryCtrl.templateUrl = 'partial/query.editor.html';
                return OpenHistorianDataSourceQueryCtrl;
            })(sdk_1.QueryCtrl);
            exports_1("OpenHistorianDataSourceQueryCtrl", OpenHistorianDataSourceQueryCtrl);
        }
    }
});
//# sourceMappingURL=openHistorianQuery_ctrl.js.map