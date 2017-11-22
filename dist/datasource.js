'use strict';

System.register(['lodash'], function (_export, _context) {
    "use strict";

    var _, _createClass, OpenHistorianDataSource;

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    return {
        setters: [function (_lodash) {
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

            _export('OpenHistorianDataSource', OpenHistorianDataSource = function () {
                function OpenHistorianDataSource(instanceSettings, $q, backendSrv, templateSrv, uiSegmentSrv) {
                    _classCallCheck(this, OpenHistorianDataSource);

                    this.type = instanceSettings.type;
                    this.url = instanceSettings.url;
                    this.name = instanceSettings.name;
                    this.q = $q;
                    this.backendSrv = backendSrv;
                    this.templateSrv = templateSrv;
                    this.uiSegmentSrv = uiSegmentSrv;

                    this.dataFlags = instanceSettings.jsonData.flags;
                    this.options = {
                        includedDataFlags: instanceSettings.jsonData.Included == undefined ? 0xFFFFFFFF : instanceSettings.jsonData.Included,
                        excludedDataFlags: instanceSettings.jsonData.Excluded == undefined ? 0x00000000 : instanceSettings.jsonData.Excluded,
                        includeNormalData: instanceSettings.jsonData.IncludeNormal == undefined ? true : instanceSettings.jsonData.IncludeNormal
                    };
                }

                _createClass(OpenHistorianDataSource, [{
                    key: 'query',
                    value: function query(options) {
                        var _this2 = this;

                        _.each(options.targets, function (element, index, list) {
                            if (element.queryType == 'Element List') _this2.setTargetWithElements(element);
                        });

                        var query = this.buildQueryParameters(options);
                        query.targets = query.targets.filter(function (t) {
                            return !t.hide;
                        });

                        query.options = JSON.parse(JSON.stringify(this.options));

                        if (options.targets[0].queryOptions != undefined) {
                            query.options.includedDataFlags = options.targets[0].queryOptions.Included != undefined ? options.targets[0].queryOptions.Included : query.options.includedDataFlags;
                            query.options.excludedDataFlags = options.targets[0].queryOptions.Excluded != undefined ? options.targets[0].queryOptions.Excluded : query.options.excludedDataFlags;
                            query.options.includeNormalData = options.targets[0].queryOptions.Normal != undefined ? options.targets[0].queryOptions.Normal : query.options.includeNormalData;
                        }

                        if (query.targets.length <= 0) {
                            return Promise.resolve({ data: [] });
                        }

                        return this.backendSrv.datasourceRequest({
                            url: this.url + '/query',
                            data: query,
                            method: 'POST',
                            headers: { 'Content-Type': 'application/json' }
                        });
                    }
                }, {
                    key: 'testDatasource',
                    value: function testDatasource() {
                        return this.backendSrv.datasourceRequest({
                            url: this.url + '/',
                            method: 'GET'
                        }).then(function (response) {
                            if (response.status === 200) {
                                return { status: "success", message: "Data source is working", title: "Success" };
                            }
                        });
                    }
                }, {
                    key: 'annotationQuery',
                    value: function annotationQuery(options) {
                        var query = this.templateSrv.replace(options.annotation.query, {}, 'glob');
                        var annotationQuery = {
                            range: options.range,
                            annotation: {
                                name: options.annotation.name,
                                datasource: options.annotation.datasource,
                                enable: options.annotation.enable,
                                iconColor: options.annotation.iconColor,
                                query: query
                            },
                            rangeRaw: options.rangeRaw
                        };

                        return this.backendSrv.datasourceRequest({
                            url: this.url + '/annotations',
                            method: 'POST',
                            data: annotationQuery
                        }).then(function (result) {
                            return result.data;
                        });
                    }
                }, {
                    key: 'metricFindQuery',
                    value: function metricFindQuery(options) {
                        var interpolated = {
                            target: this.templateSrv.replace(options, null, 'regex')
                        };

                        return this.backendSrv.datasourceRequest({
                            url: this.url + '/search',
                            data: interpolated,
                            method: 'POST',
                            headers: { 'Content-Type': 'application/json' }
                        }).then(this.mapToTextValue);
                    }
                }, {
                    key: 'whereFindQuery',
                    value: function whereFindQuery(options) {

                        var interpolated = {
                            target: this.templateSrv.replace(options, null, 'regex')
                        };

                        return this.backendSrv.datasourceRequest({
                            url: this.url + '/SearchFields',
                            data: interpolated,
                            method: 'POST',
                            headers: { 'Content-Type': 'application/json' }
                        }).then(this.mapToTextValue);
                    }
                }, {
                    key: 'mapToTextValue',
                    value: function mapToTextValue(result) {
                        return _.map(result.data, function (d, i) {
                            return { text: d, value: i };
                        });
                    }
                }, {
                    key: 'buildQueryParameters',
                    value: function buildQueryParameters(options) {
                        var _this = this;

                        //remove placeholder targets
                        options.targets = _.filter(options.targets, function (target) {
                            return target.target !== 'select metric';
                        });

                        var targets = _.map(options.targets, function (target) {
                            return {
                                target: _this.templateSrv.replace(target.target),
                                refId: target.refId,
                                hide: target.hide,
                                queryType: target.queryType,
                                queryOptions: target.queryOptions
                            };
                        });

                        options.targets = targets;

                        return options;
                    }
                }, {
                    key: 'filterFindQuery',
                    value: function filterFindQuery() {
                        return this.backendSrv.datasourceRequest({
                            url: this.url + '/SearchFilters',
                            method: 'POST',
                            headers: { 'Content-Type': 'application/json' }
                        }).then(this.mapToTextValue);
                    }
                }, {
                    key: 'phasorFindQuery',
                    value: function phasorFindQuery(options) {

                        var interpolated = {
                            target: this.templateSrv.replace(options, null, 'regex')
                        };

                        return this.backendSrv.datasourceRequest({
                            url: this.url + '/SearchPhasors',
                            data: interpolated,
                            method: 'POST',
                            headers: { 'Content-Type': 'application/json' }
                        }).then(this.mapToTextValue);
                    }
                }, {
                    key: 'orderByFindQuery',
                    value: function orderByFindQuery(options) {
                        var interpolated = {
                            target: this.templateSrv.replace(options, null, 'regex')
                        };

                        return this.backendSrv.datasourceRequest({
                            url: this.url + '/SearchOrderBys',
                            data: interpolated,
                            method: 'POST',
                            headers: { 'Content-Type': 'application/json' }
                        }).then(this.mapToTextValue);
                    }
                }, {
                    key: 'getMetaData',
                    value: function getMetaData(options) {
                        var interpolated = {
                            target: this.templateSrv.replace(options, null, 'regex')
                        };

                        return this.backendSrv.datasourceRequest({
                            url: this.url + '/GetMetadata',
                            data: interpolated,
                            method: 'POST',
                            headers: { 'Content-Type': 'application/json' }
                        });
                    }
                }, {
                    key: 'setTargetWithQuery',
                    value: function setTargetWithQuery() {
                        if (this.wheres.length == 0) return;
                        var filter = this.filterSegment.value + ' ';
                        var topn = this.topNSegment ? 'TOP ' + this.topNSegment + ' ' : '';
                        var where = 'WHERE ';

                        _.each(this.wheres, function (element, index, list) {
                            where += element.value + ' ';
                        });

                        var orderby = '';
                        _.each(this.orderBys, function (element, index, list) {
                            orderby += (index == 0 ? 'ORDER BY ' : '') + element.value + (element.type == 'condition' && index < list.length - 1 ? ',' : '') + ' ';
                        });

                        var query = 'FILTER ' + topn + filter + where + orderby;
                        var functions = '';

                        _.each(this.functions, function (element, index, list) {
                            if (element.value == 'QUERY') functions += query;else functions += element.value;
                        });

                        this.target.target = functions != "" ? functions : query;
                        this.target.topNSegment = this.topNSegment;
                        this.target.filterSegment = this.filterSegment;
                        this.target.orderBys = this.orderBys;
                        this.target.wheres = this.wheres;
                        this.target.functionSegments = this.functionSegments;
                        this.target.queryType = this.queryType;
                        this.panelCtrl.refresh();
                    }
                }, {
                    key: 'setTargetWithElements',
                    value: function setTargetWithElements(target) {
                        var functions = this.buildFunctionArray(target);
                        var functionsString = '';
                        var ctrl = this;
                        _.each(functions, function (element, index, list) {
                            if (element.value == 'QUERY') functionsString += target.segments.map(function (a) {
                                if (ctrl.templateSrv.variableExists(a.text)) {
                                    return ctrl.templateSrv.replaceWithText(a.text);
                                } else return a.value;
                            }).join(';');else if (ctrl.templateSrv.variableExists(element.value)) functionsString += ctrl.templateSrv.replaceWithText(element.text);else functionsString += element.value;
                        });

                        target.target = functionsString != "" ? functionsString : target.segments.map(function (a) {
                            if (ctrl.templateSrv.variableExists(a.text)) {
                                return ctrl.templateSrv.replaceWithText(a.text);
                            } else return a.value;
                        }).join(';');
                    }
                }, {
                    key: 'buildFunctionArray',
                    value: function buildFunctionArray(target) {
                        var ctrl = this;
                        var functions = [];

                        if (target.functionSegments.length == 0) return;

                        _.each(target.functionSegments, function (element, index, list) {
                            var newElement = ctrl.uiSegmentSrv.newSegment(element.Function);
                            newElement.Type = 'Function';
                            newElement.Function = element.Function;

                            functions.push(newElement);

                            if (newElement.value == 'Set' || newElement.value == 'Slice') return;

                            var operator = ctrl.uiSegmentSrv.newOperator('(');
                            operator.Type = 'Operator';
                            functions.push(operator);

                            _.each(element.Parameters, function (param, i, j) {
                                var d = ctrl.uiSegmentSrv.newFake(param.Default.toString());
                                d.Type = param.Type;
                                d.Function = element.Function;
                                d.Description = param.Description;
                                d.Index = i;
                                functions.push(d);

                                var operator = ctrl.uiSegmentSrv.newOperator(',');
                                operator.Type = 'Operator';
                                functions.push(operator);
                            });
                        });

                        var query = ctrl.uiSegmentSrv.newCondition('QUERY');
                        query.Type = 'Query';
                        functions.push(query);

                        for (var i in target.functionSegments) {
                            if (target.functionSegments[i].Function != 'Set' && target.functionSegments[i].Function != 'Slice') {
                                var operator = ctrl.uiSegmentSrv.newOperator(')');
                                operator.Type = 'Operator';
                                functions.push(operator);
                            }
                        }

                        return functions;
                    }
                }]);

                return OpenHistorianDataSource;
            }());

            _export('OpenHistorianDataSource', OpenHistorianDataSource);
        }
    };
});
//# sourceMappingURL=datasource.js.map
