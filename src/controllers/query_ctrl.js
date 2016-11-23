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

    this.elementSegment = this.uiSegmentSrv.newPlusButton();
    //this.getInitialSegments();
  }

  getInitialSegments(){
    var ctrl = this;
    this.datasource.metricFindQuery(ctrl.target)
      .then(function(data){
        var altSegments = _.map(data, item =>{
          return ctrl.uiSegmentSrv.newSegment({value: item.text, expandable: item.expandable});
        });
        console.log(altSegments);

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
  getElementSegmentsToEdit () {
    var ctrl = this;
    return this.datasource.metricFindQuery().then( data => {
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
    return this.datasource.metricFindQuery().then( data => {
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
}





OpenHistorianDataSourceQueryCtrl.templateUrl ='partial/query.editor.html';