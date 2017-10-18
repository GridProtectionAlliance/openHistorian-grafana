'use strict';

System.register(['app/plugins/sdk', './../css/query-editor.css!', 'lodash'], function (_export, _context) {
    "use strict";

    var QueryCtrl, _, _createClass, OpenHistorianDataSourceQueryCtrl;

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

                function OpenHistorianDataSourceQueryCtrl($scope, $injector, uiSegmentSrv, templateSrv) {
                    _classCallCheck(this, OpenHistorianDataSourceQueryCtrl);

                    var _this = _possibleConstructorReturn(this, (OpenHistorianDataSourceQueryCtrl.__proto__ || Object.getPrototypeOf(OpenHistorianDataSourceQueryCtrl)).call(this, $scope, $injector));

                    _this.scope = $scope;
                    var ctrl = _this;
                    _this.uiSegmentSrv = uiSegmentSrv;
                    _this.target.target = '';
                    _this.target.textEditor = false;
                    _this.segments = _this.target.segments == undefined ? [] : _this.target.segments.map(function (a) {
                        return ctrl.uiSegmentSrv.newSegment({ value: a.text, expandable: true });
                    });
                    _this.queryType = _this.target.queryType == undefined ? 1 : _this.target.queryType;
                    _this.wheres = _this.target.wheres == undefined ? [] : _this.target.wheres.map(function (a) {
                        if (a.type == 'operator') return ctrl.uiSegmentSrv.newOperator(a.text);else if (a.type == 'condition') return ctrl.uiSegmentSrv.newCondition(a.text);else return ctrl.uiSegmentSrv.newSegment(a.value);
                    });
                    _this.functionSegments = _this.target.functionSegments == undefined ? [] : _this.target.functionSegments;
                    _this.topNSegment = _this.target.topNSegment == undefined ? null : _this.target.topNSegment;
                    _this.functions = [];
                    _this.elementSegment = _this.uiSegmentSrv.newPlusButton();
                    _this.whereSegment = _this.uiSegmentSrv.newPlusButton();
                    _this.filterSegment = _this.target.filterSegment == undefined ? _this.uiSegmentSrv.newSegment('ActiveMeasurement') : _this.uiSegmentSrv.newSegment(_this.target.filterSegment.value);
                    _this.orderBySegment = _this.target.orderBySegment == undefined ? _this.uiSegmentSrv.newPlusButton() : _this.target.orderBySegment;
                    _this.functionSegment = _this.uiSegmentSrv.newPlusButton();

                    _this.typingTimer;

                    _this.functionList = {
                        Set: { Function: 'Set', Parameters: [] },
                        Slice: { Function: 'Slice', Parameters: [{ Default: 1, Type: 'double', Description: 'A floating-point value that must be greater than or equal to zero that represents the desired time tolerance, in seconds, for the time slice.' }] },
                        Average: { Function: 'Average', Parameters: [] },
                        Minimum: { Function: 'Minimum', Parameters: [] },
                        Maximum: { Function: 'Maximum', Parameters: [] },
                        Total: { Function: 'Total', Parameters: [] },
                        Range: { Function: 'Range', Parameters: [] },
                        Count: { Function: 'Count', Parameters: [] },
                        Distinct: { Function: 'Distinct', Parameters: [] },
                        AbsoluteValute: { Function: 'AbsoluteValue', Parameters: [] },
                        Add: { Function: 'Add', Parameters: [{ Default: 0, Type: 'double', Description: 'A floating point value representing an additive offset to be applied to each value the source series.' }] },
                        Multiply: { Function: 'Multiply', Parameters: [{ Default: 1, Type: 'double', Description: 'A floating point value representing an additive offset to be applied to each value the source series.' }] },
                        Round: { Function: 'Round', Parameters: [{ Default: 0, Type: 'double', Description: 'A positive integer value representing the number of decimal places in the return value - defaults to 0.' }] },
                        Floor: { Function: 'Floor', Parameters: [] },
                        Ceiling: { Function: 'Ceiling', Parameters: [] },
                        Truncate: { Function: 'Truncate', Parameters: [] },
                        StandardDeviation: { Function: 'StandardDeviation', Parameters: [{ Default: false, Type: 'boolean', Description: 'A boolean flag representing if the sample based calculation should be used - defaults to false, which means the population based calculation should be used.' }] },
                        Median: { Function: 'Median', Parameters: [] },
                        Mode: { Function: 'Mode', Parameters: [] },
                        Top: { Function: 'Top', Parameters: [{ Default: '100%', Type: 'string', Description: 'A positive integer value, representing a total, that is greater than zero - or - a floating point value, suffixed with \' %\' representing a percentage, that must range from greater than 0 to less than or equal to 100.' }, { Default: true, Type: 'boolean', Description: 'A boolean flag representing if time in dataset should be normalized - defaults to true.' }] },
                        Bottom: { Function: 'Bottom', Parameters: [{ Default: '100%', Type: 'string', Description: 'A positive integer value, representing a total, that is greater than zero - or - a floating point value, suffixed with \' %\' representing a percentage, that must range from greater than 0 to less than or equal to 100.' }, { Default: true, Type: 'boolean', Description: 'A boolean flag representing if time in dataset should be normalized - defaults to true.' }] },
                        Random: { Function: 'Random', Parameters: [{ Default: '100%', Type: 'string', Description: 'A positive integer value, representing a total, that is greater than zero - or - a floating point value, suffixed with \' %\' representing a percentage, that must range from greater than 0 to less than or equal to 100.' }, { Default: true, Type: 'boolean', Description: 'A boolean flag representing if time in dataset should be normalized - defaults to true.' }] },
                        First: { Function: 'First', Parameters: [{ Default: '1', Type: 'string', Description: 'A positive integer value, representing a total, that is greater than zero - or - a floating point value, suffixed with \' %\' representing a percentage, that must range from greater than 0 to less than or equal to 100 - defaults to 1.' }] },
                        Last: { Function: 'Last', Parameters: [{ Default: '1', Type: 'string', Description: 'A positive integer value, representing a total, that is greater than zero - or - a floating point value, suffixed with \' %\' representing a percentage, that must range from greater than 0 to less than or equal to 100 - defaults to 1.' }] },
                        Percentile: { Function: 'Percentile', Parameters: [{ Default: '100%', Type: 'string', Description: 'A floating point value, representing a percentage, that must range from 0 to 100.' }] },
                        Difference: { Function: 'Difference', Parameters: [] },
                        TimeDifference: { Function: 'TimeDifference', Parameters: [{ Default: 'Seconds', Type: 'time', Description: 'Specifies the type of time units and must be one of the following: Seconds, Nanoseconds, Microseconds, Milliseconds, Minutes, Hours, Days, Weeks, Ke (i.e., traditional Chinese unit of decimal time), Ticks (i.e., 100-nanosecond intervals), PlanckTime or AtomicUnitsOfTime - defaults to Seconds.' }] },
                        Derivative: { Function: 'Derivative', Parameters: [{ Default: 'Seconds', Type: 'time', Description: 'Specifies the type of time units and must be one of the following: Seconds, Nanoseconds, Microseconds, Milliseconds, Minutes, Hours, Days, Weeks, Ke (i.e., traditional Chinese unit of decimal time), Ticks (i.e., 100-nanosecond intervals), PlanckTime or AtomicUnitsOfTime - defaults to Seconds.' }] },
                        TimeIntegration: { Function: 'TimeIntegration', Parameters: [{ Default: 'Hours', Type: 'time', Description: 'Specifies the type of time units and must be one of the following: Seconds, Nanoseconds, Microseconds, Milliseconds, Minutes, Hours, Days, Weeks, Ke (i.e., traditional Chinese unit of decimal time), Ticks (i.e., 100-nanosecond intervals), PlanckTime or AtomicUnitsOfTime - defaults to Hours.' }] },
                        Interval: { Function: 'Interval', Parameters: [{ Default: 0, Type: 'double', Description: 'A floating-point value that must be greater than or equal to zero that represents the desired time interval, in time units, for the returned data. ' }, { Default: 'Seconds', Type: 'time', Description: 'Specifies the type of time units and must be one of the following: Seconds, Nanoseconds, Microseconds, Milliseconds, Minutes, Hours, Days, Weeks, Ke (i.e., traditional Chinese unit of decimal time), Ticks (i.e., 100-nanosecond intervals), PlanckTime or AtomicUnitsOfTime - defaults to Seconds.' }] },
                        IncludeRange: { Function: 'IncludeRange', Parameters: [{ Default: 0, Type: 'double', Description: 'Floating-point number that represents the low range of values allowed in the return series.' }, { Default: 0, Type: 'double', Description: 'Floating-point number that represents the high range of values allowed in the return series.' }, { Default: false, Type: 'boolean', Description: 'A boolean flag that determines if range values are inclusive, i.e., allowed values are >= low and <= high - defaults to false, which means values are exclusive, i.e., allowed values are > low and < high.' }, { Default: false, Type: 'boolean', Description: 'A boolean flag - when four parameters are provided, third parameter determines if low value is inclusive and forth parameter determines if high value is inclusive.' }] },
                        ExcludeRange: { Function: 'ExcludeRange', Parameters: [{ Default: 0, Type: 'double', Description: 'Floating-point number that represents the low range of values allowed in the return series.' }, { Default: 0, Type: 'double', Description: 'Floating-point number that represents the high range of values allowed in the return series.' }, { Default: false, Type: 'boolean', Description: 'A boolean flag that determines if range values are inclusive, i.e., allowed values are >= low and <= high - defaults to false, which means values are exclusive, i.e., allowed values are > low and < high.' }, { Default: false, Type: 'boolean', Description: 'A boolean flag - when four parameters are provided, third parameter determines if low value is inclusive and forth parameter determines if high value is inclusive.' }] },
                        FilterNaN: { Function: 'FilterNaN', Parameters: [{ Default: true, Type: 'boolean', Description: 'A boolean flag that determines if infinite values should also be excluded - defaults to true.' }] },
                        UnwrapAngle: { Function: 'UnwrapAngle', Parameters: [{ Default: 'Degrees', Type: 'angleUnits', Description: 'Specifies the type of angle units and must be one of the following: Degrees, Radians, Grads, ArcMinutes, ArcSeconds or AngularMil - defaults to Degrees.' }] },
                        WrapAngle: { Function: 'WrapAngle', Parameters: [{ Default: 'Degrees', Type: 'angleUnits', Description: 'Specifies the type of angle units and must be one of the following: Degrees, Radians, Grads, ArcMinutes, ArcSeconds or AngularMil - defaults to Degrees.' }] },
                        Label: { Function: 'Label', Parameters: [{ Default: 'Name', Type: 'string', Description: 'Renames a series with the specified label value.' }] }
                    };

                    _this.buildFunctionArray();

                    if (_this.queryType == 2) _this.setTargetWithQuery();else _this.setTargetWithElements();
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

                        var query = 'FILTER ' + topn + filter + where + orderby;
                        var functions = '';

                        _.each(this.functions, function (element, index, list) {
                            if (element.value == 'QUERY') functions += query;else functions += element.value;
                        });

                        this.target.target = functions != "" ? functions : query;
                        this.target.topNSegment = this.topNSegment;
                        this.target.filterSegment = this.filterSegment;
                        this.target.orderBySegment = this.orderBySegment;
                        this.target.wheres = this.wheres;
                        this.target.functionSegments = this.functionSegments;
                        this.target.queryType = this.queryType;
                        this.panelCtrl.refresh();
                    }
                }, {
                    key: 'setTargetWithElements',
                    value: function setTargetWithElements() {
                        var functions = '';
                        var ctrl = this;
                        _.each(this.functions, function (element, index, list) {
                            if (element.value == 'QUERY') functions += ctrl.segments.map(function (a) {
                                return a.value;
                            }).join(';');else functions += element.value;
                        });

                        this.target.target = functions != "" ? functions : this.segments.map(function (a) {
                            return a.value;
                        }).join(';');

                        this.target.functionSegments = this.functionSegments;
                        this.target.segments = this.segments;
                        this.target.queryType = this.queryType;
                        this.panelCtrl.refresh();
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
                        this.panelCtrl.refresh(); // Asks the panel to refresh data.
                    }
                }, {
                    key: 'changeQueryType',
                    value: function changeQueryType() {
                        this.target.target = '';
                        this.segments = [];
                        this.wheres = [];
                        this.functions = [];
                        this.functionSegments = [];
                        this.topNSegment = '';
                        this.elementSegment = this.uiSegmentSrv.newPlusButton();
                        this.whereSegment = this.uiSegmentSrv.newPlusButton();
                        this.filterSegment = this.uiSegmentSrv.newSegment('ActiveMeasurements');
                        this.orderBySegment = this.uiSegmentSrv.newPlusButton();
                        this.functionSegment = this.uiSegmentSrv.newPlusButton();
                        this.panelCtrl.refresh();
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
                        if (event.target.text != null) {
                            this.segments.push(this.uiSegmentSrv.newSegment({ value: event.target.text, expandable: true }));
                            this.setTargetWithElements();
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
                }, {
                    key: 'getFunctionsToAddNew',
                    value: function getFunctionsToAddNew() {
                        var _this4 = this;

                        var ctrl = this;
                        var array = [];
                        _.each(Object.keys(this.functionList), function (element, index, list) {
                            array.push(ctrl.uiSegmentSrv.newSegment(element));
                        });

                        if (this.functions.length == 0) array = array.slice(2, array.length);

                        return this.datasource.q.when(_.filter(array, function (segment) {
                            return _.find(_this4.functions, function (x) {
                                return x.value == segment.value;
                            }) == undefined;
                        }));
                    }
                }, {
                    key: 'getFunctionsToEdit',
                    value: function getFunctionsToEdit(func, index) {
                        var ctrl = this;
                        var remove = [this.uiSegmentSrv.newSegment('-REMOVE-')];
                        if (func.type == 'Operator') return this.datasource.q.when();else if (func.value == 'Set') return this.datasource.q.when(remove);

                        return this.datasource.q.when(remove);
                    }
                }, {
                    key: 'functionValueChanged',
                    value: function functionValueChanged(func, index) {
                        var funcSeg = this.functionList[func.Function];

                        if (func.value == "-REMOVE-") {
                            var l = 1;
                            var fi = _.findIndex(this.functionSegments, function (segment) {
                                return segment.Function == func.Function;
                            });
                            if (func.Function == 'Slice') this.functionSegments[fi + 1].Parameters = this.functionSegments[fi + 1].Parameters.slice(1, this.functionSegments[fi + 1].Parameters.length);else if (fi > 0 && (this.functionSegments[fi - 1].Function == 'Set' || this.functionSegments[fi - 1].Function == 'Slice')) {
                                --fi;
                                ++l;
                            }

                            this.functionSegments.splice(fi, l);
                        } else if (func.Type != 'Function') {
                            var fi = _.findIndex(this.functionSegments, function (segment) {
                                return segment.Function == func.Function;
                            });
                            this.functionSegments[fi].Parameters[func.Index].Default = func.value;
                        }

                        this.buildFunctionArray();

                        if (this.queryType == 2) this.setTargetWithQuery();else this.setTargetWithElements();
                    }
                }, {
                    key: 'addFunctionSegment',
                    value: function addFunctionSegment() {
                        var func = this.functionList[event.target.text];

                        if (func.Function == 'Slice') {
                            this.functionSegments[0].Parameters.unshift(func.Parameters[0]);
                        }

                        this.functionSegments.unshift(JSON.parse(JSON.stringify(func)));
                        this.buildFunctionArray();

                        // reset the + button
                        var plusButton = this.uiSegmentSrv.newPlusButton();
                        this.functionSegment.value = plusButton.value;
                        this.functionSegment.html = plusButton.html;

                        if (this.queryType == 2) this.setTargetWithQuery();else this.setTargetWithElements();
                    }
                }, {
                    key: 'buildFunctionArray',
                    value: function buildFunctionArray() {
                        var ctrl = this;
                        ctrl.functions = [];

                        if (this.functionSegments.length == 0) return;

                        _.each(ctrl.functionSegments, function (element, index, list) {
                            var newElement = ctrl.uiSegmentSrv.newSegment(element.Function);
                            newElement.Type = 'Function';
                            newElement.Function = element.Function;

                            ctrl.functions.push(newElement);

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
                            });
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
                }, {
                    key: 'getBooleans',
                    value: function getBooleans() {
                        var array = [this.uiSegmentSrv.newSegment('true'), this.uiSegmentSrv.newSegment('false')];
                        return this.datasource.q.when(array);
                    }
                }, {
                    key: 'getAngleUnits',
                    value: function getAngleUnits() {
                        var array = [this.uiSegmentSrv.newSegment('Degrees'), this.uiSegmentSrv.newSegment('Radians'), this.uiSegmentSrv.newSegment('Grads'), this.uiSegmentSrv.newSegment('ArcMinutes'), this.uiSegmentSrv.newSegment('ArcSeconds'), this.uiSegmentSrv.newSegment('AngularMil')];
                        return this.datasource.q.when(array);
                    }
                }, {
                    key: 'getTimeSelect',
                    value: function getTimeSelect() {
                        var array = [this.uiSegmentSrv.newSegment('Weeks'), this.uiSegmentSrv.newSegment('Days'), this.uiSegmentSrv.newSegment('Hours'), this.uiSegmentSrv.newSegment('Minutes'), this.uiSegmentSrv.newSegment('Seconds'), this.uiSegmentSrv.newSegment('Milliseconds'), this.uiSegmentSrv.newSegment('Microseconds'), this.uiSegmentSrv.newSegment('Nanoseconds'), this.uiSegmentSrv.newSegment('Ticks'), this.uiSegmentSrv.newSegment('PlanckTime'), this.uiSegmentSrv.newSegment('AtomicUnitsOfTime'), this.uiSegmentSrv.newSegment('Ke')];
                        return this.datasource.q.when(array);
                    }
                }, {
                    key: 'inputChange',
                    value: function inputChange(func, index) {
                        var ctrl = this;
                        clearTimeout(this.typingTimer);
                        this.typingTimer = setTimeout(function () {
                            ctrl.functionValueChanged(func, index);
                        }, 1000);
                        event.target.focus();
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
