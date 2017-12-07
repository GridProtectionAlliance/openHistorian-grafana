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

    segments: Array<any>;
    queryTypes: Array<string>;
    queryType: string;
    wheres: Array<any>;
    functionSegments: Array<any>;
    topNSegment: number;
    functions: Array<any>;
    orderBys: Array<any>;
    elementSegment: any;
    whereSegment: any;
    filterSegment: any;
    orderBySegment: any;
    functionSegment: any;
    typingTimer: any;

    constructor(private $scope,private $injector, private uiSegmentSrv,private templateSrv,private $compile) {
        super($scope, $injector);

        this.$scope = $scope;
        this.$compile = $compile;

        var ctrl = this;
        this.uiSegmentSrv = uiSegmentSrv;
        this.target.target = '';
        this.target.textEditor = false;
        this.segments = (this.target.segments == undefined ? [] : this.target.segments.map(function (a) { return ctrl.uiSegmentSrv.newSegment({ value: a.text, expandable: true }) }));
        this.queryTypes = [
            "Element List", "Filter Expression", "Text Editor"/*, "Phasor List"*/
        ];
        this.queryType = (this.target.queryType == undefined ? "Element List" : this.target.queryType);
        this.wheres = (this.target.wheres == undefined ? [] : this.target.wheres.map(function (a) {
            if (a.type == 'operator') return ctrl.uiSegmentSrv.newOperator(a.text);
            else if (a.type == 'condition') return ctrl.uiSegmentSrv.newCondition(a.text);
            else return ctrl.uiSegmentSrv.newSegment(a.value);
        }));
        this.functionSegments = (this.target.functionSegments == undefined ? [] : this.target.functionSegments);
        this.topNSegment = (this.target.topNSegment == undefined ? null : this.target.topNSegment);
        this.functions = [];
        this.orderBys = (this.target.orderBys == undefined ? [] : this.target.orderBys.map(function (a)
        {
            if (a.type == 'condition')
                return ctrl.uiSegmentSrv.newCondition(a.value);
            else
                return ctrl.uiSegmentSrv.newSegment(a.value);
        }));
        this.elementSegment = this.uiSegmentSrv.newPlusButton();
        this.whereSegment = this.uiSegmentSrv.newPlusButton();
        this.filterSegment = (this.target.filterSegment == undefined ? this.uiSegmentSrv.newSegment('ActiveMeasurement') : this.uiSegmentSrv.newSegment(this.target.filterSegment.value));
        this.orderBySegment =  this.uiSegmentSrv.newPlusButton();
        this.functionSegment = this.uiSegmentSrv.newPlusButton();
        this.typingTimer;
        
        ctrl.target.overriddenDataFlags = (ctrl.target.overriddenDataFlags != undefined ? ctrl.target.overriddenDataFlags : ctrl.datasource.dataFlags);

        ctrl.target.queryOptions = {};

        this.buildFunctionArray();

        if (this.queryType == 'Filter Expression')
            this.setTargetWithQuery();
        else if (this.queryType == 'Element List')
            this.setTargetWithElements();
        else
            this.setTargetWithText();


        $('panel-editor-tab .gf-form-group .gf-form-inline a.gf-form-label:contains("Options")').on('click', function (event) {
            if ($($('panel-editor-tab .gf-form-group div')[6]).children().first()[0] != $('query-troubleshooter')[0]) {
                var string = '<query-options flags="ctrl.target.overriddenDataFlags" return="ctrl.target.queryOptions"></query-options>';
                $($('panel-editor-tab .gf-form-group div')[6]).children().first().append(ctrl.$compile(string)(ctrl.$scope))
            }

        });

    }

  // #region Target Compilation
    setTargetWithQuery() {
        if (this.wheres.length == 0) return;
        var filter = this.filterSegment.value + ' ';
        var topn = (this.topNSegment ? 'TOP ' + this.topNSegment + ' ' : '');
        var where = 'WHERE ';
      
        _.each(this.wheres, function (element, index, list) {
            where += element.value + ' '
        });

        var orderby = '';
        _.each(this.orderBys, function (element, index, list) {
            orderby += (index == 0 ? 'ORDER BY ' : '') + element.value + (element.type == 'condition' && index < list.length - 1? ',' : '') +' ';
        });

        var query = 'FILTER ' + topn + filter + where + orderby;
        var functions = '';

        _.each(this.functions, function (element, index, list) {
            if (element.value == 'QUERY') functions += query;
            else functions += element.value;
        });

        this.target.target = (functions != "" ? functions : query);
        this.target.topNSegment = this.topNSegment;
        this.target.filterSegment = this.filterSegment;
        this.target.orderBys = this.orderBys;
        this.target.wheres = this.wheres;
        this.target.functionSegments = this.functionSegments;
        this.target.queryType = this.queryType;
        this.panelCtrl.refresh()

    }

  setTargetWithElements() {
      var functions = '';
      var ctrl = this;
      _.each(ctrl.functions, function (element, index, list) {
          if (element.value == 'QUERY') functions += ctrl.segments.map(function (a) {
              if (ctrl.datasource.templateSrv.variableExists(a.text)) {
                  return ctrl.datasource.templateSrv.replaceWithText(a.text);
              }
              else
                  return a.value
          }).join(';')
          else if (ctrl.datasource.templateSrv.variableExists(element.value)) functions += ctrl.datasource.templateSrv.replaceWithText(element.text);
          else functions += element.value;
      });

      ctrl.target.target = (functions != "" ? functions : ctrl.segments.map(function (a) {
          if (ctrl.datasource.templateSrv.variableExists(a.text)) {
                return ctrl.datasource.templateSrv.replaceWithText(a.text);
          }
          else
            return a.value
      }).join(';'));

      ctrl.target.functionSegments = ctrl.functionSegments;
      ctrl.target.segments = ctrl.segments;
      ctrl.target.queryType = ctrl.queryType;
      ctrl.panelCtrl.refresh()

  }

  setTargetWithText() {
      this.target.target = this.target.targettext;
      this.panelCtrl.refresh(); // Asks the panel to refresh data.
  }
  // #endregion

  onChangeInternal() {
    this.panelCtrl.refresh(); // Asks the panel to refresh data.
  }

  // used to change the query type from element list to filter expression
  changeQueryType() {
      if (this.queryType != 'Text Editor') {
          this.target.target = '';
          this.segments = [];
          this.wheres = [];
          this.functions = [];
          this.functionSegments = [];
          this.orderBys = [];
          this.topNSegment = null;
          this.elementSegment = this.uiSegmentSrv.newPlusButton();
          this.whereSegment = this.uiSegmentSrv.newPlusButton();
          this.filterSegment = this.uiSegmentSrv.newSegment('ActiveMeasurements');
          this.orderBySegment = this.uiSegmentSrv.newPlusButton();
          this.functionSegment = this.uiSegmentSrv.newPlusButton();
          this.panelCtrl.refresh(); // Asks the panel to refresh data.

      }
      else {
          this.target.targettext = this.target.target;
          this.setTargetWithText();
      }


  }


  // #region Elements
  getElementSegments(newSegment) {
      var ctrl = this;
      var option = null;
      if (event.target['value'] != "") option = event.target['value']; 

    return this.datasource.metricFindQuery(option).then( data => {
        var altSegments = _.map(data, item => {
            return ctrl.uiSegmentSrv.newSegment({value: item.text, expandable: item.expandable})
        });
        altSegments.sort((a,b)=>{           
          if(a.value < b.value)
            return -1;
          if(a.value > b.value)
            return 1;
          return 0;
        });

        _.each(ctrl.datasource.templateSrv.variables, (item, index, list) => {
            if(item.type == "query")
                altSegments.unshift(ctrl.uiSegmentSrv.newCondition('$' + item.name));
        });

        if(!newSegment)
            altSegments.unshift(ctrl.uiSegmentSrv.newSegment('-REMOVE-'));

        return _.filter(altSegments, segment => {
          return _.find(ctrl.segments, x => {
            return x.value == segment.value
          }) == undefined;
        });
    });
    
  }

  addElementSegment(){
          // if value is not empty, add new attribute segment
    if (event.target['text'] != null) {
        this.segments.push(this.uiSegmentSrv.newSegment({ value: event.target['text'], expandable: true}))
      this.setTargetWithElements()
    }

    // reset the + button
    var plusButton = this.uiSegmentSrv.newPlusButton()
    this.elementSegment.value = plusButton.value
    this.elementSegment.html = plusButton.html
    this.panelCtrl.refresh()

  }

  segmentValueChanged(segment, index) {
    if(segment.value== "-REMOVE-"){
      var targets = this.target.target.split(';');
      this.segments.splice(index, 1);
      targets.splice(index, 1);
      this.target.target = targets.join(';');
    }
    else{
      var targets = this.target.target.split(';');
      this.segments[index] = segment;
      targets[index] = segment.value;
      this.target.target = targets.join(';');
    }
    
    
  }
  // #endregion

  // #region TOP N
  topNValueChanged() {
      var ctrl = this;

      clearTimeout(ctrl.typingTimer);
      ctrl.typingTimer = setTimeout(function () { ctrl.setTargetWithQuery() }, 1000);
      event.target['focus']();

  }
  // #endregion

  // #region Wheres
  getWheresToEdit(where, index) {

      if (where.type === 'operator') {
          return Promise.resolve(this.uiSegmentSrv.newOperators(WhereOperators));
      }
      else if (where.type === 'value') {
          return Promise.resolve(null);
      }
      else if (where.type === 'condition') {
          return Promise.resolve([this.uiSegmentSrv.newCondition('AND'), this.uiSegmentSrv.newCondition('OR')]);
      }
      else {
          return this.datasource.whereFindQuery(this.filterSegment.value).then(data => {
              var altSegments = _.map(data, item => {
                  return this.uiSegmentSrv.newSegment({ value: item.text, expandable: item.expandable })
              });
              altSegments.sort((a, b) => {
                  if (a.value < b.value)
                      return -1;
                  if (a.value > b.value)
                      return 1;
                  return 0;
              });
              altSegments.unshift(this.uiSegmentSrv.newSegment('-REMOVE-'));
              return _.filter(altSegments, segment => {
                  return _.find(this.segments, x => {
                      return x.value == segment.value
                  }) == undefined;
              });
          });
      }

  }

  whereValueChanged(where, index) {

      if (where.value == "-REMOVE-") {
          if (index == 0 && this.wheres.length > 3 && this.wheres[index + 3].type == 'condition') 
              this.wheres.splice(index, 4)
          else if (index > 0 && this.wheres[index - 1].type == 'condition')
              this.wheres.splice(index - 1, 4)
          else
              this.wheres.splice(index, 3)
      }

      if (where.type == 'operator')
          this.wheres[index] = this.uiSegmentSrv.newOperator(where.value)
      else if (where.type == 'condition')
          this.wheres[index] = this.uiSegmentSrv.newCondition(where.value)

      this.setTargetWithQuery();
  }

  getWheresToAddNew() {
      var ctrl = this;
      return this.datasource.whereFindQuery(ctrl.filterSegment.value).then(data => {
          var altSegments = _.map(data, item => {
              return ctrl.uiSegmentSrv.newSegment({ value: item.text, expandable: item.expandable })
          });
          altSegments.sort((a, b) => {
              if (a.value < b.value)
                  return -1;
              if (a.value > b.value)
                  return 1;
              return 0;
          });
          return _.filter(altSegments, segment => {
              return _.find(ctrl.segments, x => {
                  return x.value == segment.value
              }) == undefined;
          });
      });
  }

  addWhere() {
      if (this.wheres.length > 0) 
          this.wheres.push(this.uiSegmentSrv.newCondition('AND'));

      this.wheres.push(this.uiSegmentSrv.newSegment(event.target['text']));
      this.wheres.push(this.uiSegmentSrv.newOperator('NOT LIKE'));
      this.wheres.push(this.uiSegmentSrv.newFake("''", 'value', 'query-segment-value'));

      // reset the + button
      var plusButton = this.uiSegmentSrv.newPlusButton()
      this.whereSegment.value = plusButton.value
      this.whereSegment.html = plusButton.html
      this.setTargetWithQuery();

  }

  // #endregion

  // #region Filters
  getFilterToEdit() {
      var ctrl = this;
      return this.datasource.filterFindQuery().then(data => {
          var altSegments = _.map(data, item => {
              return ctrl.uiSegmentSrv.newSegment({ value: item.text, expandable: item.expandable })
          });
          altSegments.sort((a, b) => {
              if (a.value < b.value)
                  return -1;
              if (a.value > b.value)
                  return 1;
              return 0;
          });

          return _.filter(altSegments, segment => {
              return _.find(ctrl.segments, x => {
                  return x.value == segment.value
              }) == undefined;
          });
      });
  }

  filterValueChanged() {
      //this.target.policy = this.topNSegment;
      this.orderBySegment = this.uiSegmentSrv.newPlusButton();
      this.wheres = [];
      this.setTargetWithQuery();

      this.panelCtrl.refresh();
  }

  // #endregion

  // #region OrderBys
  getOrderBysToAddNew() {
      var ctrl = this;
      return this.datasource.orderByFindQuery(ctrl.filterSegment.value).then(data => {
          var altSegments = _.map(data, item => {
              return ctrl.uiSegmentSrv.newSegment({ value: item.text, expandable: item.expandable })
          });
          altSegments.sort((a, b) => {
              if (a.value < b.value)
                  return -1;
              if (a.value > b.value)
                  return 1;
              return 0;
          });

          return _.filter(altSegments, segment => {
              return _.find(ctrl.orderBys, x => {
                  return x.value == segment.value
              }) == undefined;
          });
      });
  }

  getOrderBysToEdit(orderBy) {
      var ctrl = this;
      if (orderBy.type == 'condition') return Promise.resolve([this.uiSegmentSrv.newCondition('ASC'), this.uiSegmentSrv.newCondition('DESC')]);
      if (orderBy.type == 'condition') return Promise.resolve([this.uiSegmentSrv.newCondition('ASC'), this.uiSegmentSrv.newCondition('DESC')]);

      return this.datasource.orderByFindQuery(ctrl.filterSegment.value).then(data => {
          var altSegments = _.map(data, item => {
              return ctrl.uiSegmentSrv.newSegment({ value: item.text, expandable: item.expandable })
          });
          altSegments.sort((a, b) => {
              if (a.value < b.value)
                  return -1;
              if (a.value > b.value)
                  return 1;
              return 0;
          });

          if (orderBy.type !== 'plus-button')
              altSegments.unshift(this.uiSegmentSrv.newSegment('-REMOVE-'));

          return _.filter(altSegments, segment => {
              return _.find(ctrl.orderBys, x => {
                  return x.value == segment.value
              }) == undefined;
          });
      });
  }

  addOrderBy() {
      this.orderBys.push(this.uiSegmentSrv.newSegment(event.target['text']));
      this.orderBys.push(this.uiSegmentSrv.newCondition('ASC'));

      // reset the + button
      var plusButton = this.uiSegmentSrv.newPlusButton()
      this.orderBySegment.value = plusButton.value
      this.orderBySegment.html = plusButton.html

      this.setTargetWithQuery();

      if (this.queryType == 'Filter Expression')
          this.setTargetWithQuery();
      else
          this.setTargetWithElements()

  }


  orderByValueChanged(orderBy, index) {
      if (event.target['text'] == "-REMOVE-")
          this.orderBys.splice(index, 2);
      else
      {
          if (orderBy.type == 'condition')
              this.orderBys[index] = this.uiSegmentSrv.newCondition(event.target['text']);
          else
              this.orderBys[index] = this.uiSegmentSrv.newSegment(event.target['text']);

      }
      this.setTargetWithQuery();

  }

  // #endregion

  // #region Functions
  getFunctionsToAddNew() {
      var ctrl = this;
      var array = []
      _.each(Object.keys(FunctionList), function (element, index, list) {
          array.push(ctrl.uiSegmentSrv.newSegment(element));
      });

      if (this.functions.length == 0) array = array.slice(2,array.length);

      return Promise.resolve(_.filter( array, segment => {
          return _.find(this.functions, x => {
              return x.value == segment.value;
          }) == undefined;
      }));
  }

  getFunctionsToEdit(func, index):any {
      var ctrl = this;
      var remove = [this.uiSegmentSrv.newSegment('-REMOVE-')];
      if (func.type == 'Operator') return Promise.resolve();
      else if (func.value == 'Set') return Promise.resolve(remove)

      return Promise.resolve(remove);
  }

  functionValueChanged(func, index) {
      var funcSeg = FunctionList[func.Function];

      if (func.value == "-REMOVE-") {
          var l = 1;
          var fi = _.findIndex(this.functionSegments, function (segment) { return segment.Function == func.Function });
          if (func.Function == 'Slice')
              this.functionSegments[fi + 1].Parameters = this.functionSegments[fi + 1].Parameters.slice(1, this.functionSegments[fi + 1].Parameters.length);
          else if (fi > 0 && (this.functionSegments[fi - 1].Function == 'Set' || this.functionSegments[fi - 1].Function == 'Slice')) {
              --fi;
                ++l;
          }

          this.functionSegments.splice(fi,l);
      }
      else if (func.Type != 'Function') {
          var fi = _.findIndex(this.functionSegments, function (segment) { return segment.Function == func.Function });
          this.functionSegments[fi].Parameters[func.Index].Default = func.value;
      }

      this.buildFunctionArray()

      if (this.queryType == 'Filter Expression')
          this.setTargetWithQuery();
      else
          this.setTargetWithElements() 

  }

  addFunctionSegment() {
      var func = FunctionList[event.target['text']];

      if (func.Function == 'Slice') {
          this.functionSegments[0].Parameters.unshift(func.Parameters[0])
      }

      this.functionSegments.unshift(JSON.parse(JSON.stringify(func)));
      this.buildFunctionArray();

      // reset the + button
      var plusButton = this.uiSegmentSrv.newPlusButton()
      this.functionSegment.value = plusButton.value
      this.functionSegment.html = plusButton.html

      if (this.queryType == 'Filter Expression')
          this.setTargetWithQuery();
      else
          this.setTargetWithElements()
  }

  buildFunctionArray() {
      var ctrl = this;
      ctrl.functions = [];

      if (this.functionSegments.length == 0) return;

      _.each(ctrl.functionSegments, function (element, index, list) {
          var newElement = ctrl.uiSegmentSrv.newSegment(element.Function)
          newElement.Type = 'Function';
          newElement.Function = element.Function;

          ctrl.functions.push(newElement)

          if (newElement.value == 'Set' || newElement.value == 'Slice') return;

          var operator = ctrl.uiSegmentSrv.newOperator('(');
          operator.Type = 'Operator';
          ctrl.functions.push(operator);

          _.each(element.Parameters, function (param, i, j) {
              var d = ctrl.uiSegmentSrv.newFake(param.Default.toString());
              d.Type = param.Type;
              d.Function = element.Function;
              d.Description = param.Description;
              d.Index = i;
              ctrl.functions.push(d);

              var operator = ctrl.uiSegmentSrv.newOperator(',');
              operator.Type = 'Operator';
              ctrl.functions.push(operator);
          })

      });

      var query = ctrl.uiSegmentSrv.newCondition('QUERY');
      query.Type = 'Query';
      ctrl.functions.push(query);

      for (var i in ctrl.functionSegments) {
          if (ctrl.functionSegments[i].Function != 'Set' && ctrl.functionSegments[i].Function != 'Slice') {
              var operator = ctrl.uiSegmentSrv.newOperator(')');
              operator.Type = 'Operator';
              ctrl.functions.push(operator);
          }

      }

  }

  getBooleans() {    
      return Promise.resolve(Booleans.map(value => { return this.uiSegmentSrv.newSegment(value)}));
  }

  getAngleUnits() {
      return Promise.resolve(AngleUnits.map(value => { return this.uiSegmentSrv.newSegment(value) }));
  }

  getTimeSelect() {
      return Promise.resolve(TimeUnits.map(value => { return this.uiSegmentSrv.newSegment(value) }));
  }

  inputChange(func, index) {
      var ctrl = this;
      clearTimeout(this.typingTimer);
      this.typingTimer = setTimeout(function () { ctrl.functionValueChanged(func, index) }, 1000);
      event.target['focus']();
      
  }

  // #endregion

}


