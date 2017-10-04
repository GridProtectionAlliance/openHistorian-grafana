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
                    _this.wheres = [];
                    _this.topNSegment = null;
                    _this.elementSegment = _this.uiSegmentSrv.newPlusButton();
                    _this.whereSegment = _this.uiSegmentSrv.newPlusButton();
                    _this.filterSegment = _this.uiSegmentSrv.newSegment('ActiveMeasurement');
                    _this.orderBySegment = _this.uiSegmentSrv.newPlusButton();
                    return _this;
                }

                _createClass(OpenHistorianDataSourceQueryCtrl, [{
                    key: 'setTargetWithQuery',
                    value: function setTargetWithQuery() {
                        var filter = this.filterSegment.value + ' ';
                        var topn = this.topNSegment ? 'TOP ' + this.topNSegment + ' ' : '';
                        var where = 'WHERE ';

                        _.each(this.wheres, function (element, index, list) {
                            where += element.value + ' ';
                        });

                        var orderby = this.orderBySegment.value ? 'ORDER BY ' + this.orderBySegment.value + ' ' : '';

                        this.target.target = 'FILTER ' + topn + filter + where + orderby;
                        this.panelCtrl.refresh();
                    }
                }, {
                    key: 'getInitialSegments',
                    value: function getInitialSegments() {
                        var ctrl = this;
                        this.datasource.metricFindQuery(ctrl.target).then(function (data) {
                            var altSegments = _.map(data, function (item) {
                                return ctrl.uiSegmentSrv.newSegment({ value: item.text, expandable: item.expandable });
                            });

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
                        var option = null;
                        if (event.target.value != "") option = event.target.value;

                        var ctrl = this;
                        return this.datasource.metricFindQuery(option).then(function (data) {
                            var altSegments = _.map(data, function (item) {
                                return ctrl.uiSegmentSrv.newSegment({ value: item.text, expandable: item.expandable });
                            });
                            altSegments.sort(function (a, b) {
                                if (a.value < b.value) return -1;
                                if (a.value > b.value) return 1;
                                return 0;
                            });
                            altSegments.unshift(ctrl.uiSegmentSrv.newSegment('-REMOVE-'));

                            return _.filter(altSegments, function (segment) {
                                return _.find(ctrl.segments, function (x) {
                                    return x.value == segment.value;
                                }) == undefined;
                            });
                        });
                    }
                }, {
                    key: 'getElementSegmentsToAddNew',
                    value: function getElementSegmentsToAddNew() {
                        var ctrl = this;
                        var option = null;
                        if (event.target.value != "") option = event.target.value;
                        return this.datasource.metricFindQuery(option).then(function (data) {
                            var altSegments = _.map(data, function (item) {
                                return ctrl.uiSegmentSrv.newSegment({ value: item.text, expandable: item.expandable });
                            });
                            altSegments.sort(function (a, b) {
                                if (a.value < b.value) return -1;
                                if (a.value > b.value) return 1;
                                return 0;
                            });

                            return _.filter(altSegments, function (segment) {
                                return _.find(ctrl.segments, function (x) {
                                    return x.value == segment.value;
                                }) == undefined;
                            });
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
                }, {
                    key: 'changeQueryType',
                    value: function changeQueryType() {
                        this.target.target = '';
                        this.segments = [];
                        this.wheres = [];
                        this.topNSegment = '';
                        this.elementSegment = this.uiSegmentSrv.newPlusButton();
                        this.whereSegment = this.uiSegmentSrv.newPlusButton();
                        this.filterSegment = this.uiSegmentSrv.newSegment('ActiveMeasurements');
                        this.orderBySegment = this.uiSegmentSrv.newPlusButton();
                    }
                }, {
                    key: 'topNValueChanged',
                    value: function topNValueChanged() {
                        this.setTargetWithQuery();
                    }
                }, {
                    key: 'getWheresToEdit',
                    value: function getWheresToEdit(where, index) {
                        var _this2 = this;

                        if (where.type === 'operator') {
                            return this.datasource.q.when(this.uiSegmentSrv.newOperators(['=', '<>', '<', '<=', '>', '>=', 'LIKE', 'NOT LIKE', 'IN', 'NOT IN']));
                        } else if (where.type === 'value') {
                            return this.datasource.q.when(null);
                        } else if (where.type === 'condition') {
                            return this.datasource.q.when([this.uiSegmentSrv.newCondition('AND'), this.uiSegmentSrv.newCondition('OR')]);
                        } else {
                            return this.datasource.whereFindQuery(this.filterSegment.value).then(function (data) {
                                var altSegments = _.map(data, function (item) {
                                    return _this2.uiSegmentSrv.newSegment({ value: item.text, expandable: item.expandable });
                                });
                                altSegments.sort(function (a, b) {
                                    if (a.value < b.value) return -1;
                                    if (a.value > b.value) return 1;
                                    return 0;
                                });
                                altSegments.unshift(_this2.uiSegmentSrv.newSegment('-REMOVE-'));
                                return _.filter(altSegments, function (segment) {
                                    return _.find(_this2.segments, function (x) {
                                        return x.value == segment.value;
                                    }) == undefined;
                                });
                            });
                        }
                    }
                }, {
                    key: 'whereValueChanged',
                    value: function whereValueChanged(where, index) {

                        if (where.value == "-REMOVE-") {
                            if (index == 0 && this.wheres.length > 3 && this.wheres[index + 3].type == 'condition') this.wheres.splice(index, 4);else if (index > 0 && this.wheres[index - 1].type == 'condition') this.wheres.splice(index - 1, 4);else this.wheres.splice(index, 3);
                        }

                        this.setTargetWithQuery();
                    }
                }, {
                    key: 'getWheresToAddNew',
                    value: function getWheresToAddNew() {
                        var ctrl = this;
                        return this.datasource.whereFindQuery(ctrl.filterSegment.value).then(function (data) {
                            var altSegments = _.map(data, function (item) {
                                return ctrl.uiSegmentSrv.newSegment({ value: item.text, expandable: item.expandable });
                            });
                            altSegments.sort(function (a, b) {
                                if (a.value < b.value) return -1;
                                if (a.value > b.value) return 1;
                                return 0;
                            });
                            return _.filter(altSegments, function (segment) {
                                return _.find(ctrl.segments, function (x) {
                                    return x.value == segment.value;
                                }) == undefined;
                            });
                        });
                    }
                }, {
                    key: 'addWhere',
                    value: function addWhere() {
                        if (this.wheres.length > 0) this.wheres.push(this.uiSegmentSrv.newCondition('AND'));

                        this.wheres.push(this.uiSegmentSrv.newSegment(event.target.text));
                        this.wheres.push(this.uiSegmentSrv.newOperator('NOT LIKE'));
                        this.wheres.push(this.uiSegmentSrv.newFake("''", 'value', 'query-segment-value'));

                        // reset the + button
                        var plusButton = this.uiSegmentSrv.newPlusButton();
                        this.whereSegment.value = plusButton.value;
                        this.whereSegment.html = plusButton.html;
                        this.setTargetWithQuery();
                    }
                }, {
                    key: 'getFilterToEdit',
                    value: function getFilterToEdit() {
                        var ctrl = this;
                        return this.datasource.filterFindQuery().then(function (data) {
                            var altSegments = _.map(data, function (item) {
                                return ctrl.uiSegmentSrv.newSegment({ value: item.text, expandable: item.expandable });
                            });
                            altSegments.sort(function (a, b) {
                                if (a.value < b.value) return -1;
                                if (a.value > b.value) return 1;
                                return 0;
                            });

                            return _.filter(altSegments, function (segment) {
                                return _.find(ctrl.segments, function (x) {
                                    return x.value == segment.value;
                                }) == undefined;
                            });
                        });
                    }
                }, {
                    key: 'filterValueChanged',
                    value: function filterValueChanged() {
                        //this.target.policy = this.topNSegment;
                        this.orderBySegment = this.uiSegmentSrv.newPlusButton();
                        this.wheres = [];
                        this.setTargetWithQuery();

                        this.panelCtrl.refresh();
                    }
                }, {
                    key: 'getOrderBysToAddNew',
                    value: function getOrderBysToAddNew() {
                        var _this3 = this;

                        var ctrl = this;
                        return this.datasource.orderByFindQuery(ctrl.filterSegment.value).then(function (data) {
                            var altSegments = _.map(data, function (item) {
                                return ctrl.uiSegmentSrv.newSegment({ value: item.text, expandable: item.expandable });
                            });
                            altSegments.sort(function (a, b) {
                                if (a.value < b.value) return -1;
                                if (a.value > b.value) return 1;
                                return 0;
                            });

                            if (_this3.orderBySegment.type !== 'plus-button') altSegments.unshift(_this3.uiSegmentSrv.newSegment('-REMOVE-'));

                            return _.filter(altSegments, function (segment) {
                                return _.find(ctrl.segments, function (x) {
                                    return x.value == segment.value;
                                }) == undefined;
                            });
                        });
                    }
                }, {
                    key: 'orderByValueChanged',
                    value: function orderByValueChanged() {
                        if (event.target.text == "-REMOVE-") this.orderBySegment = this.uiSegmentSrv.newPlusButton();else this.orderBySegment = this.uiSegmentSrv.newSegment(event.target.text);
                        this.setTargetWithQuery();
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
