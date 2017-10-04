import {QueryCtrl} from 'app/plugins/sdk'
import './../css/query-editor.css!'
import _ from 'lodash'
import angular from 'angular'

export class OpenHistorianDataSourceQueryCtrl extends QueryCtrl{
  constructor($scope, $injector, uiSegmentSrv)  {
    super($scope, $injector);


    this.scope = $scope;
    this.uiSegmentSrv = uiSegmentSrv;
    this.target.target = '';
    this.target.textEditor = false;
    this.segments = [];
    this.wheres = [];
    this.topNSegment = null;
    this.elementSegment = this.uiSegmentSrv.newPlusButton();
    this.whereSegment = this.uiSegmentSrv.newPlusButton();
    this.filterSegment = this.uiSegmentSrv.newSegment('ActiveMeasurement');
    this.orderBySegment = this.uiSegmentSrv.newPlusButton();
  }

  setTargetWithQuery() {
      var filter = this.filterSegment.value + ' ';
      var topn = (this.topNSegment ? 'TOP ' + this.topNSegment + ' ' : '');
      var where = 'WHERE ';

      
      _.each(this.wheres, function (element, index, list) {
            where += element.value + ' '
      });

      var orderby = (this.orderBySegment.value ? 'ORDER BY ' + this.orderBySegment.value + ' ' : '');

      this.target.target = 'FILTER ' + topn + filter + where + orderby;
      this.panelCtrl.refresh()

  }

  getInitialSegments(){
    var ctrl = this;
    this.datasource.metricFindQuery(ctrl.target)
      .then(function(data){
        var altSegments = _.map(data, item =>{
          return ctrl.uiSegmentSrv.newSegment({value: item.text, expandable: item.expandable});
        });

        return altSegments;
      });
  }

  onChangeInternal() {
    this.panelCtrl.refresh(); // Asks the panel to refresh data.
  }

  toggleEditorMode(){
    this.target.textEditor = !this.target.textEditor;
  }

  textEditorChanged(){
    var ctrl = this;
  }

    // get a ui segment for the attributes
  getElementSegmentsToEdit() {
      var ctrl = this;
      var option = null;
      if (event.target.value != "") option = event.target.value; 

    var ctrl = this;
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
        altSegments.unshift(ctrl.uiSegmentSrv.newSegment('-REMOVE-'));

        return _.filter(altSegments, segment => {
          return _.find(ctrl.segments, x => {
            return x.value == segment.value
          }) == undefined;
        });
    });
    
  }

    getElementSegmentsToAddNew () {
        var ctrl = this;
        var option = null;
        if (event.target.value != "") option = event.target.value; 
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

            return _.filter(altSegments, segment => {
              return _.find(ctrl.segments, x => {
                return x.value == segment.value
              }) == undefined;
            });
        });
    
  }


  addElementSegment(){
          // if value is not empty, add new attribute segment
    if (this.elementSegment.value != null) {
      this.segments.push(this.uiSegmentSrv.newSegment({value: this.elementSegment.value, expandable: true}))
      this.target.target += (this.target.target == "" ? '' : ';') + this.elementSegment.value;
    }

    // reset the + button
    var plusButton = this.uiSegmentSrv.newPlusButton()
    this.elementSegment.value = plusButton.value
    this.elementSegment.html = plusButton.html
    this.panelCtrl.refresh()

  }
  // changes the selecte af element segment
  segmentValueChanged (segment, index) {
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

  // used to change the query type from element list to filter expression
  changeQueryType() {
      this.target.target = '';
      this.segments = [];
      this.wheres = [];
      this.topNSegment = '';
      this.elementSegment = this.uiSegmentSrv.newPlusButton();
      this.whereSegment = this.uiSegmentSrv.newPlusButton();
      this.filterSegment = this.uiSegmentSrv.newSegment('ActiveMeasurements');
      this.orderBySegment = this.uiSegmentSrv.newPlusButton();
  }

  topNValueChanged() {
      this.setTargetWithQuery();
  }

  getWheresToEdit(where, index) {

      if (where.type === 'operator') {
          return this.datasource.q.when(this.uiSegmentSrv.newOperators(['=', '<>', '<', '<=', '>', '>=', 'LIKE', 'NOT LIKE', 'IN', 'NOT IN']));
      }
      else if (where.type === 'value') {
          return this.datasource.q.when(null);
      }
      else if (where.type === 'condition') {
          return this.datasource.q.when([this.uiSegmentSrv.newCondition('AND'), this.uiSegmentSrv.newCondition('OR')]);
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

      this.wheres.push(this.uiSegmentSrv.newSegment(event.target.text));
      this.wheres.push(this.uiSegmentSrv.newOperator('NOT LIKE'));
      this.wheres.push(this.uiSegmentSrv.newFake("''", 'value', 'query-segment-value'));

      // reset the + button
      var plusButton = this.uiSegmentSrv.newPlusButton()
      this.whereSegment.value = plusButton.value
      this.whereSegment.html = plusButton.html
      this.setTargetWithQuery();

  }

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

          if(this.orderBySegment.type !== 'plus-button')
            altSegments.unshift(this.uiSegmentSrv.newSegment('-REMOVE-'));

          return _.filter(altSegments, segment => {
              return _.find(ctrl.segments, x => {
                  return x.value == segment.value
              }) == undefined;
          });
      });
  }

  orderByValueChanged() {
      if (event.target.text == "-REMOVE-")
          this.orderBySegment = this.uiSegmentSrv.newPlusButton();
      else
        this.orderBySegment = this.uiSegmentSrv.newSegment(event.target.text);
      this.setTargetWithQuery();

  }

}

OpenHistorianDataSourceQueryCtrl.templateUrl ='partial/query.editor.html';