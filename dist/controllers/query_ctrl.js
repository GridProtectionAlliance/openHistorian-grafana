'use strict';

System.register(['app/plugins/sdk', './../css/query-editor.css!', 'lodash', 'angular'], function (_export, _context) {
  "use strict";

  var QueryCtrl, _, angular, _createClass, OpenHistorianDataSourceQueryCtrl;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return call && (typeof call === "object" || typeof call === "function") ? call : self;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  }

  return {
    setters: [function (_appPluginsSdk) {
      QueryCtrl = _appPluginsSdk.QueryCtrl;
    }, function (_cssQueryEditorCss) {}, function (_lodash) {
      _ = _lodash.default;
    }, function (_angular) {
      angular = _angular.default;
    }],
    execute: function () {
      _createClass = function () {
        function defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
          }
        }

        return function (Constructor, protoProps, staticProps) {
          if (protoProps) defineProperties(Constructor.prototype, protoProps);
          if (staticProps) defineProperties(Constructor, staticProps);
          return Constructor;
        };
      }();

      _export('OpenHistorianDataSourceQueryCtrl', OpenHistorianDataSourceQueryCtrl = function (_QueryCtrl) {
        _inherits(OpenHistorianDataSourceQueryCtrl, _QueryCtrl);

        function OpenHistorianDataSourceQueryCtrl($scope, $injector, uiSegmentSrv) {
          _classCallCheck(this, OpenHistorianDataSourceQueryCtrl);

          var _this = _possibleConstructorReturn(this, (OpenHistorianDataSourceQueryCtrl.__proto__ || Object.getPrototypeOf(OpenHistorianDataSourceQueryCtrl)).call(this, $scope, $injector));

          _this.scope = $scope;
          _this.uiSegmentSrv = uiSegmentSrv;
          _this.target.target = '';
          _this.target.textEditor = false;
          _this.segments = [];

          _this.elementSegment = _this.uiSegmentSrv.newPlusButton();
          //this.getInitialSegments();
          return _this;
        }

        _createClass(OpenHistorianDataSourceQueryCtrl, [{
          key: 'getInitialSegments',
          value: function getInitialSegments() {
            var ctrl = this;
            this.datasource.metricFindQuery(ctrl.target).then(function (data) {
              var altSegments = _.map(data, function (item) {
                return ctrl.uiSegmentSrv.newSegment({ value: item.text, expandable: item.expandable });
              });
              console.log(altSegments);

              return altSegments;
            });
          }
        }, {
          key: 'onChangeInternal',
          value: function onChangeInternal() {
            this.panelCtrl.refresh(); // Asks the panel to refresh data.
          }
        }, {
          key: 'toggleEditorMode',
          value: function toggleEditorMode() {
            this.target.textEditor = !this.target.textEditor;
          }
        }, {
          key: 'textEditorChanged',
          value: function textEditorChanged() {
            var ctrl = this;
          }
        }, {
          key: 'getElementSegmentsToEdit',
          value: function getElementSegmentsToEdit() {
            var ctrl = this;
            return this.datasource.metricFindQuery().then(function (data) {
              var altSegments = _.map(data, function (item) {
                return ctrl.uiSegmentSrv.newSegment({ value: item.text, expandable: item.expandable });
              });
              altSegments.unshift(ctrl.uiSegmentSrv.newSegment('-REMOVE-'));
              //console.log(altSegments);

              return altSegments;
            });
          }
        }, {
          key: 'getElementSegmentsToAddNew',
          value: function getElementSegmentsToAddNew() {
            var ctrl = this;
            return this.datasource.metricFindQuery().then(function (data) {
              var altSegments = _.map(data, function (item) {
                return ctrl.uiSegmentSrv.newSegment({ value: item.text, expandable: item.expandable });
              });
              //console.log(altSegments);

              return altSegments;
            });
          }
        }, {
          key: 'addElementSegment',
          value: function addElementSegment() {
            // if value is not empty, add new attribute segment
            if (this.elementSegment.value != null) {
              this.segments.push(this.uiSegmentSrv.newSegment({ value: this.elementSegment.value, expandable: true }));
              this.target.target += (this.target.target == "" ? '' : ';') + this.elementSegment.value;
            }

            // reset the + button
            var plusButton = this.uiSegmentSrv.newPlusButton();
            this.elementSegment.value = plusButton.value;
            this.elementSegment.html = plusButton.html;
            this.panelCtrl.refresh();
          }
        }, {
          key: 'segmentValueChanged',
          value: function segmentValueChanged(segment, index) {
            if (segment.value == "-REMOVE-") {
              var targets = this.target.target.split(';');
              this.segments.splice(index, 1);
              targets.splice(index, 1);
              this.target.target = targets.join(';');
            } else {
              var targets = this.target.target.split(';');
              this.segments[index] = segment;
              targets[index] = segment.value;
              this.target.target = targets.join(';');
            }
          }
        }]);

        return OpenHistorianDataSourceQueryCtrl;
      }(QueryCtrl));

      _export('OpenHistorianDataSourceQueryCtrl', OpenHistorianDataSourceQueryCtrl);

      OpenHistorianDataSourceQueryCtrl.templateUrl = 'partial/query.editor.html';
    }
  };
});
//# sourceMappingURL=query_ctrl.js.map
