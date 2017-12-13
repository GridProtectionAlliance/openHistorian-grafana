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

import { QueryCtrl } from 'app/plugins/sdk'
import { FunctionList, Booleans, AngleUnits, TimeUnits, WhereOperators } from './../js/openHistorianConstants'
import './../css/query-editor.css!'
import _ from 'lodash'
import $ from 'jquery'

export class OpenHistorianDataSourceQueryCtrl extends QueryCtrl{
    static templateUrl = 'partial/query.editor.html';

    queryTypes: Array<string>;
    queryType: string;

    constructor(private $scope,private $injector, private uiSegmentSrv,private templateSrv,private $compile) {
        super($scope, $injector);

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


        $('panel-editor-tab .gf-form-group .gf-form-inline a.gf-form-label:contains("Options")').on('click', function (event) {
            if ($($('panel-editor-tab .gf-form-group div')[6]).children().first()[0] != $('query-troubleshooter')[0]) {
                var string = '<query-options flags="ctrl.target.overriddenDataFlags" return="ctrl.target.queryOptions"></query-options>';
                $($('panel-editor-tab .gf-form-group div')[6]).children().first().append(ctrl.$compile(string)(ctrl.$scope))
            }

        });

    }

  onChangeInternal() {
    this.panelCtrl.refresh(); // Asks the panel to refresh data.
  }

  // used to change the query type from element list to filter expression
  changeQueryType() {
      if (this.queryType == 'Text Editor') {
          this.target.targetText = this.target.target;
      }
  }

}


