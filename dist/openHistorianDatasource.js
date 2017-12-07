//******************************************************************************************************
//  datasource.js - Gbtc
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
//  10/30/2017 - Billy Ernest
//       Generated original version of source code.
//
//******************************************************************************************************
System.register(["lodash"], function(exports_1) {
    var lodash_1;
    var OpenHistorianDataSource;
    return {
        setters:[
            function (lodash_1_1) {
                lodash_1 = lodash_1_1;
            }],
        execute: function() {
            OpenHistorianDataSource = (function () {
                /** @ngInject */
                function OpenHistorianDataSource(instanceSettings, $q, backendSrv, templateSrv, uiSegmentSrv) {
                    this.backendSrv = backendSrv;
                    this.templateSrv = templateSrv;
                    this.uiSegmentSrv = uiSegmentSrv;
                    this.type = instanceSettings.type;
                    this.url = instanceSettings.url;
                    this.name = instanceSettings.name;
                    this.q = $q;
                    this.backendSrv = backendSrv;
                    this.templateSrv = templateSrv;
                    this.uiSegmentSrv = uiSegmentSrv;
                    this.dataFlags = instanceSettings.jsonData.flags;
                    this.options = {
                        includedDataFlags: (instanceSettings.jsonData.Included == undefined ? '0xFFFFFFFF' : instanceSettings.jsonData.Included),
                        excludedDataFlags: (instanceSettings.jsonData.Excluded == undefined ? '0x00000000' : instanceSettings.jsonData.Excluded),
                        includeNormalData: (instanceSettings.jsonData.IncludeNormal == undefined ? true : instanceSettings.jsonData.IncludeNormal)
                    };
                }
                OpenHistorianDataSource.prototype.query = function (options) {
                    for (var _i = 0, _a = options.targets; _i < _a.length; _i++) {
                        var element = _a[_i];
                        if (element.queryType == 'Element List')
                            this.setTargetWithElements(element);
                    }
                    var query = this.buildQueryParameters(options);
                    query.targets = query.targets.filter(function (t) {
                        return !t.hide;
                    });
                    query.options = JSON.parse(JSON.stringify(this.options));
                    if (options.targets[0].queryOptions != undefined) {
                        query.options.includedDataFlags = (options.targets[0].queryOptions.Included != undefined ? options.targets[0].queryOptions.Included : query.options.includedDataFlags);
                        query.options.excludedDataFlags = (options.targets[0].queryOptions.Excluded != undefined ? options.targets[0].queryOptions.Excluded : query.options.excludedDataFlags);
                        query.options.includeNormalData = (options.targets[0].queryOptions.Normal != undefined ? options.targets[0].queryOptions.Normal : query.options.includeNormalData);
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
                };
                OpenHistorianDataSource.prototype.testDatasource = function () {
                    return this.backendSrv.datasourceRequest({
                        url: this.url + '/',
                        method: 'GET'
                    }).then(function (response) {
                        if (response.status === 200) {
                            return { status: "success", message: "Data source is working", title: "Success" };
                        }
                    });
                };
                OpenHistorianDataSource.prototype.annotationQuery = function (options) {
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
                };
                OpenHistorianDataSource.prototype.metricFindQuery = function (options) {
                    var interpolated = {
                        target: this.templateSrv.replace(options, null, 'regex')
                    };
                    return this.backendSrv.datasourceRequest({
                        url: this.url + '/search',
                        data: interpolated,
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' }
                    }).then(this.mapToTextValue);
                };
                OpenHistorianDataSource.prototype.whereFindQuery = function (options) {
                    var interpolated = {
                        target: this.templateSrv.replace(options, null, 'regex')
                    };
                    return this.backendSrv.datasourceRequest({
                        url: this.url + '/SearchFields',
                        data: interpolated,
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' }
                    }).then(this.mapToTextValue);
                };
                OpenHistorianDataSource.prototype.mapToTextValue = function (result) {
                    return lodash_1.default.map(result.data, function (d, i) {
                        return { text: d, value: i };
                    });
                };
                OpenHistorianDataSource.prototype.buildQueryParameters = function (options) {
                    var _this = this;
                    //remove placeholder targets
                    options.targets = lodash_1.default.filter(options.targets, function (target) {
                        return target.target !== 'select metric';
                    });
                    var targets = lodash_1.default.map(options.targets, function (target) {
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
                };
                OpenHistorianDataSource.prototype.filterFindQuery = function () {
                    return this.backendSrv.datasourceRequest({
                        url: this.url + '/SearchFilters',
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' }
                    }).then(this.mapToTextValue);
                };
                OpenHistorianDataSource.prototype.phasorFindQuery = function (options) {
                    var interpolated = {
                        target: this.templateSrv.replace(options, null, 'regex')
                    };
                    return this.backendSrv.datasourceRequest({
                        url: this.url + '/SearchPhasors',
                        data: interpolated,
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' }
                    }).then(this.mapToTextValue);
                };
                OpenHistorianDataSource.prototype.orderByFindQuery = function (options) {
                    var interpolated = {
                        target: this.templateSrv.replace(options, null, 'regex')
                    };
                    return this.backendSrv.datasourceRequest({
                        url: this.url + '/SearchOrderBys',
                        data: interpolated,
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' }
                    }).then(this.mapToTextValue);
                };
                OpenHistorianDataSource.prototype.getMetaData = function (options) {
                    var interpolated = {
                        target: this.templateSrv.replace(options, null, 'regex')
                    };
                    return this.backendSrv.datasourceRequest({
                        url: this.url + '/GetMetadata',
                        data: interpolated,
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' }
                    });
                };
                // #region Target Compilation
                //setTargetWithQuery() {
                //    if (this.wheres.length == 0) return;
                //    var filter = this.filterSegment.value + ' ';
                //    var topn = (this.topNSegment ? 'TOP ' + this.topNSegment + ' ' : '');
                //    var where = 'WHERE ';
                //    _.each(this.wheres, function (element, index, list) {
                //        where += element.value + ' '
                //    });
                //    var orderby = '';
                //    _.each(this.orderBys, function (element, index, list) {
                //        orderby += (index == 0 ? 'ORDER BY ' : '') + element.value + (element.type == 'condition' && index < list.length - 1 ? ',' : '') + ' ';
                //    });
                //    var query = 'FILTER ' + topn + filter + where + orderby;
                //    var functions = '';
                //    _.each(this.functions, function (element, index, list) {
                //        if (element.value == 'QUERY') functions += query;
                //        else functions += element.value;
                //    });
                //    this.target.target = (functions != "" ? functions : query);
                //    this.target.topNSegment = this.topNSegment;
                //    this.target.filterSegment = this.filterSegment;
                //    this.target.orderBys = this.orderBys;
                //    this.target.wheres = this.wheres;
                //    this.target.functionSegments = this.functionSegments;
                //    this.target.queryType = this.queryType;
                //    this.panelCtrl.refresh()
                //}
                OpenHistorianDataSource.prototype.setTargetWithElements = function (target) {
                    var functions = this.buildFunctionArray(target);
                    var functionsString = '';
                    var ctrl = this;
                    lodash_1.default.each(functions, function (element, index, list) {
                        if (element.value == 'QUERY')
                            functionsString += target.segments.map(function (a) {
                                if (ctrl.templateSrv.variableExists(a.text)) {
                                    return ctrl.templateSrv.replaceWithText(a.text);
                                }
                                else
                                    return a.value;
                            }).join(';');
                        else if (ctrl.templateSrv.variableExists(element.value))
                            functionsString += ctrl.templateSrv.replaceWithText(element.text);
                        else
                            functionsString += element.value;
                    });
                    target.target = (functionsString != "" ? functionsString : target.segments.map(function (a) {
                        if (ctrl.templateSrv.variableExists(a.text)) {
                            return ctrl.templateSrv.replaceWithText(a.text);
                        }
                        else
                            return a.value;
                    }).join(';'));
                };
                OpenHistorianDataSource.prototype.buildFunctionArray = function (target) {
                    var ctrl = this;
                    var functions = [];
                    if (target.functionSegments.length == 0)
                        return;
                    lodash_1.default.each(target.functionSegments, function (element, index, list) {
                        var newElement = ctrl.uiSegmentSrv.newSegment(element.Function);
                        newElement.Type = 'Function';
                        newElement.Function = element.Function;
                        functions.push(newElement);
                        if (newElement.value == 'Set' || newElement.value == 'Slice')
                            return;
                        var operator = ctrl.uiSegmentSrv.newOperator('(');
                        operator.Type = 'Operator';
                        functions.push(operator);
                        lodash_1.default.each(element.Parameters, function (param, i, j) {
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
                };
                return OpenHistorianDataSource;
            })();
            exports_1("OpenHistorianDataSource", OpenHistorianDataSource);
        }
    }
});
//# sourceMappingURL=openHistorianDatasource.js.map