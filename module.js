define(function() { return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./module.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./controllers/openHistorianAnnotations_ctrl.ts":
/*!******************************************************!*\
  !*** ./controllers/openHistorianAnnotations_ctrl.ts ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var OpenHistorianAnnotationsQueryCtrl = (function () {
    function OpenHistorianAnnotationsQueryCtrl() {
    }
    OpenHistorianAnnotationsQueryCtrl.templateUrl = 'partial/annotations.editor.html';
    return OpenHistorianAnnotationsQueryCtrl;
}());
exports.default = OpenHistorianAnnotationsQueryCtrl;


/***/ }),

/***/ "./controllers/openHistorianConfig_ctrl.ts":
/*!*************************************************!*\
  !*** ./controllers/openHistorianConfig_ctrl.ts ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var OpenHistorianConfigCtrl = (function () {
    function OpenHistorianConfigCtrl($scope) {
        var ctrl = this;
        ctrl.current.jsonData.Excluded = this.current.jsonData.Excluded || 0;
        ctrl.current.jsonData.Normal = this.current.jsonData.Normal || false;
    }
    OpenHistorianConfigCtrl.templateUrl = 'partial/config.html';
    return OpenHistorianConfigCtrl;
}());
exports.default = OpenHistorianConfigCtrl;


/***/ }),

/***/ "./controllers/openHistorianElementPicker_ctrl.ts":
/*!********************************************************!*\
  !*** ./controllers/openHistorianElementPicker_ctrl.ts ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var openHistorianConstants_1 = __webpack_require__(/*! ./../js/openHistorianConstants */ "./js/openHistorianConstants.ts");
var OpenHistorianElementPickerCtrl = (function () {
    function OpenHistorianElementPickerCtrl($scope, uiSegmentSrv) {
        this.$scope = $scope;
        this.uiSegmentSrv = uiSegmentSrv;
        var ctrl = this;
        this.$scope = $scope;
        this.uiSegmentSrv = uiSegmentSrv;
        this.segments = (this.$scope.target.segments == undefined ? [] : this.$scope.target.segments.map(function (a) { return ctrl.uiSegmentSrv.newSegment({ value: a.text, expandable: true }); }));
        this.functionSegments = (this.$scope.target.functionSegments == undefined ? [] : this.$scope.target.functionSegments);
        this.functions = [];
        this.elementSegment = this.uiSegmentSrv.newPlusButton();
        this.functionSegment = this.uiSegmentSrv.newPlusButton();
        this.buildFunctionArray();
        this.setTargetWithElements();
        delete $scope.target.wheres;
        delete $scope.target.topNSegment;
        delete $scope.target.orderBys;
        delete $scope.target.whereSegment;
        delete $scope.target.filterSegment;
        delete $scope.target.orderBySegment;
        delete $scope.target.targetText;
    }
    OpenHistorianElementPickerCtrl.prototype.getElementSegments = function (newSegment) {
        var ctrl = this;
        var option = null;
        if (event.target['value'] != "")
            option = event.target['value'];
        return ctrl.$scope.datasource.metricFindQuery(option).then(function (data) {
            var altSegments = _.map(data, function (item) {
                return ctrl.uiSegmentSrv.newSegment({ value: item.text, expandable: item.expandable });
            });
            altSegments.sort(function (a, b) {
                if (a.value < b.value)
                    return -1;
                if (a.value > b.value)
                    return 1;
                return 0;
            });
            _.each(ctrl.$scope.datasource.templateSrv.variables, function (item, index, list) {
                if (item.type == "query")
                    altSegments.unshift(ctrl.uiSegmentSrv.newCondition('$' + item.name));
            });
            if (!newSegment)
                altSegments.unshift(ctrl.uiSegmentSrv.newSegment('-REMOVE-'));
            return _.filter(altSegments, function (segment) {
                return _.find(ctrl.segments, function (x) {
                    return x.value == segment.value;
                }) == undefined;
            });
        });
    };
    OpenHistorianElementPickerCtrl.prototype.addElementSegment = function () {
        if (event.target['text'] != null) {
            this.segments.push(this.uiSegmentSrv.newSegment({ value: event.target['text'], expandable: true }));
            this.setTargetWithElements();
        }
        var plusButton = this.uiSegmentSrv.newPlusButton();
        this.elementSegment.value = plusButton.value;
        this.elementSegment.html = plusButton.html;
        this.$scope.panel.refresh();
    };
    OpenHistorianElementPickerCtrl.prototype.segmentValueChanged = function (segment, index) {
        if (segment.value == "-REMOVE-") {
            this.segments.splice(index, 1);
        }
        else {
            this.segments[index] = segment;
        }
        this.setTargetWithElements();
    };
    OpenHistorianElementPickerCtrl.prototype.setTargetWithElements = function () {
        var functions = '';
        var ctrl = this;
        _.each(ctrl.functions, function (element, index, list) {
            if (element.value == 'QUERY')
                functions += ctrl.segments.map(function (a) { return a.value; }).join(';');
            else
                functions += element.value;
        });
        ctrl.$scope.target.target = (functions != "" ? functions : ctrl.segments.map(function (a) {
            return a.value;
        }).join(';'));
        ctrl.$scope.target.functionSegments = ctrl.functionSegments;
        ctrl.$scope.target.segments = ctrl.segments;
        ctrl.$scope.target.queryType = 'Element List';
        this.$scope.panel.refresh();
    };
    OpenHistorianElementPickerCtrl.prototype.getFunctionsToAddNew = function () {
        var _this = this;
        var ctrl = this;
        var array = [];
        _.each(Object.keys(openHistorianConstants_1.FunctionList), function (element, index, list) {
            array.push(ctrl.uiSegmentSrv.newSegment(element));
        });
        if (this.functions.length == 0)
            array = array.slice(2, array.length);
        array.sort(function (a, b) {
            var nameA = a.value.toUpperCase();
            var nameB = b.value.toUpperCase();
            if (nameA < nameB) {
                return -1;
            }
            if (nameA > nameB) {
                return 1;
            }
            return 0;
        });
        return Promise.resolve(_.filter(array, function (segment) {
            return _.find(_this.functions, function (x) {
                return x.value == segment.value;
            }) == undefined;
        }));
    };
    OpenHistorianElementPickerCtrl.prototype.getFunctionsToEdit = function (func, index) {
        var ctrl = this;
        var remove = [this.uiSegmentSrv.newSegment('-REMOVE-')];
        if (func.type == 'Operator')
            return Promise.resolve();
        else if (func.value == 'Set')
            return Promise.resolve(remove);
        return Promise.resolve(remove);
    };
    OpenHistorianElementPickerCtrl.prototype.functionValueChanged = function (func, index) {
        var funcSeg = openHistorianConstants_1.FunctionList[func.Function];
        if (func.value == "-REMOVE-") {
            var l = 1;
            var fi = _.findIndex(this.functionSegments, function (segment) { return segment.Function == func.Function; });
            if (func.Function == 'Slice')
                this.functionSegments[fi + 1].Parameters = this.functionSegments[fi + 1].Parameters.slice(1, this.functionSegments[fi + 1].Parameters.length);
            else if (fi > 0 && (this.functionSegments[fi - 1].Function == 'Set' || this.functionSegments[fi - 1].Function == 'Slice')) {
                --fi;
                ++l;
            }
            this.functionSegments.splice(fi, l);
        }
        else if (func.Type != 'Function') {
            var fi = _.findIndex(this.functionSegments, function (segment) { return segment.Function == func.Function; });
            this.functionSegments[fi].Parameters[func.Index].Default = func.value;
        }
        this.buildFunctionArray();
        this.setTargetWithElements();
    };
    OpenHistorianElementPickerCtrl.prototype.addFunctionSegment = function () {
        var func = openHistorianConstants_1.FunctionList[event.target['text']];
        if (func.Function == 'Slice') {
            this.functionSegments[0].Parameters.unshift(func.Parameters[0]);
        }
        this.functionSegments.unshift(JSON.parse(JSON.stringify(func)));
        this.buildFunctionArray();
        var plusButton = this.uiSegmentSrv.newPlusButton();
        this.functionSegment.value = plusButton.value;
        this.functionSegment.html = plusButton.html;
        this.setTargetWithElements();
    };
    OpenHistorianElementPickerCtrl.prototype.buildFunctionArray = function () {
        var ctrl = this;
        ctrl.functions = [];
        if (this.functionSegments.length == 0)
            return;
        _.each(ctrl.functionSegments, function (element, index, list) {
            var newElement = ctrl.uiSegmentSrv.newSegment(element.Function);
            newElement.Type = 'Function';
            newElement.Function = element.Function;
            ctrl.functions.push(newElement);
            if (newElement.value == 'Set' || newElement.value == 'Slice')
                return;
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
    };
    OpenHistorianElementPickerCtrl.prototype.getBooleans = function () {
        var _this = this;
        return Promise.resolve(openHistorianConstants_1.Booleans.map(function (value) { return _this.uiSegmentSrv.newSegment(value); }));
    };
    OpenHistorianElementPickerCtrl.prototype.getAngleUnits = function () {
        var _this = this;
        return Promise.resolve(openHistorianConstants_1.AngleUnits.map(function (value) { return _this.uiSegmentSrv.newSegment(value); }));
    };
    OpenHistorianElementPickerCtrl.prototype.getTimeSelect = function () {
        var _this = this;
        return Promise.resolve(openHistorianConstants_1.TimeUnits.map(function (value) { return _this.uiSegmentSrv.newSegment(value); }));
    };
    OpenHistorianElementPickerCtrl.prototype.inputChange = function (func, index) {
        var ctrl = this;
        clearTimeout(this.typingTimer);
        this.typingTimer = setTimeout(function () { ctrl.functionValueChanged(func, index); }, 3000);
        event.target['focus']();
    };
    return OpenHistorianElementPickerCtrl;
}());
exports.default = OpenHistorianElementPickerCtrl;


/***/ }),

/***/ "./controllers/openHistorianFilterExpression_ctrl.ts":
/*!***********************************************************!*\
  !*** ./controllers/openHistorianFilterExpression_ctrl.ts ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var openHistorianConstants_1 = __webpack_require__(/*! ./../js/openHistorianConstants */ "./js/openHistorianConstants.ts");
var OpenHistorianFilterExpressionCtrl = (function () {
    function OpenHistorianFilterExpressionCtrl($scope, $injector, uiSegmentSrv) {
        this.uiSegmentSrv = uiSegmentSrv;
        this.uiSegmentSrv = uiSegmentSrv;
        this.$scope = $scope;
        this.target = $scope.target;
        this.datasource = $scope.datasource;
        this.panelCtrl = $scope.panel;
        var ctrl = this;
        this.wheres = (this.target.wheres == undefined ? [] : this.target.wheres.map(function (a) {
            if (a.type == 'operator')
                return ctrl.uiSegmentSrv.newOperator(a.text);
            else if (a.type == 'condition')
                return ctrl.uiSegmentSrv.newCondition(a.text);
            else
                return ctrl.uiSegmentSrv.newSegment(a.value);
        }));
        this.functionSegments = (this.target.functionSegments == undefined ? [] : this.target.functionSegments);
        this.topNSegment = (this.target.topNSegment == undefined ? null : this.target.topNSegment);
        this.functions = [];
        this.orderBys = (this.target.orderBys == undefined ? [] : this.target.orderBys.map(function (a) {
            if (a.type == 'condition')
                return ctrl.uiSegmentSrv.newCondition(a.value);
            else
                return ctrl.uiSegmentSrv.newSegment(a.value);
        }));
        this.whereSegment = this.uiSegmentSrv.newPlusButton();
        this.filterSegment = (this.target.filterSegment == undefined ? this.uiSegmentSrv.newSegment('ActiveMeasurements') : this.uiSegmentSrv.newSegment(this.target.filterSegment.value));
        this.orderBySegment = this.uiSegmentSrv.newPlusButton();
        this.functionSegment = this.uiSegmentSrv.newPlusButton();
        this.typingTimer;
        delete $scope.target.segments;
        delete $scope.target.targetText;
        this.setTargetWithQuery();
    }
    OpenHistorianFilterExpressionCtrl.prototype.setTargetWithQuery = function () {
        if (this.wheres.length == 0) {
            this.target.target = '';
            this.panelCtrl.refresh();
            return;
        }
        var filter = this.filterSegment.value + ' ';
        var topn = (this.topNSegment ? 'TOP ' + this.topNSegment + ' ' : '');
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
            if (element.value == 'QUERY')
                functions += query;
            else
                functions += element.value;
        });
        this.target.target = (functions != "" ? functions : query);
        this.target.topNSegment = this.topNSegment;
        this.target.filterSegment = this.filterSegment;
        this.target.orderBys = this.orderBys;
        this.target.wheres = this.wheres;
        this.target.functionSegments = this.functionSegments;
        this.target.queryType = 'Filter Expression';
        this.panelCtrl.refresh();
    };
    OpenHistorianFilterExpressionCtrl.prototype.topNValueChanged = function () {
        var ctrl = this;
        clearTimeout(ctrl.typingTimer);
        ctrl.typingTimer = setTimeout(function () { ctrl.setTargetWithQuery(); }, 1000);
        event.target['focus']();
    };
    OpenHistorianFilterExpressionCtrl.prototype.getWheresToEdit = function (where, index) {
        var _this = this;
        if (where.type === 'operator') {
            return Promise.resolve(this.uiSegmentSrv.newOperators(openHistorianConstants_1.WhereOperators));
        }
        else if (where.type === 'value') {
            return Promise.resolve(null);
        }
        else if (where.type === 'condition') {
            return Promise.resolve([this.uiSegmentSrv.newCondition('AND'), this.uiSegmentSrv.newCondition('OR')]);
        }
        else {
            return this.datasource.whereFindQuery(this.filterSegment.value).then(function (data) {
                var altSegments = _.map(data, function (item) {
                    return _this.uiSegmentSrv.newSegment({ value: item.text, expandable: item.expandable });
                });
                altSegments.sort(function (a, b) {
                    if (a.value < b.value)
                        return -1;
                    if (a.value > b.value)
                        return 1;
                    return 0;
                });
                altSegments.unshift(_this.uiSegmentSrv.newSegment('-REMOVE-'));
                return altSegments;
            });
        }
    };
    OpenHistorianFilterExpressionCtrl.prototype.whereValueChanged = function (where, index) {
        if (where.value == "-REMOVE-") {
            if (index == 0 && this.wheres.length > 3 && this.wheres[index + 3].type == 'condition')
                this.wheres.splice(index, 4);
            else if (index > 0 && this.wheres[index - 1].type == 'condition')
                this.wheres.splice(index - 1, 4);
            else
                this.wheres.splice(index, 3);
        }
        if (where.type == 'operator')
            this.wheres[index] = this.uiSegmentSrv.newOperator(where.value);
        else if (where.type == 'condition')
            this.wheres[index] = this.uiSegmentSrv.newCondition(where.value);
        else if (where.type == 'value' && !$.isNumeric(where.value) && where.value.toUpperCase() != 'NULL')
            this.wheres[index] = this.uiSegmentSrv.newSegment("'" + where.value + "'");
        this.setTargetWithQuery();
    };
    OpenHistorianFilterExpressionCtrl.prototype.getWheresToAddNew = function () {
        var ctrl = this;
        return this.datasource.whereFindQuery(ctrl.filterSegment.value).then(function (data) {
            var altSegments = _.map(data, function (item) {
                return ctrl.uiSegmentSrv.newSegment({ value: item.text, expandable: item.expandable });
            });
            altSegments.sort(function (a, b) {
                if (a.value < b.value)
                    return -1;
                if (a.value > b.value)
                    return 1;
                return 0;
            });
            return altSegments;
        });
    };
    OpenHistorianFilterExpressionCtrl.prototype.addWhere = function () {
        if (this.wheres.length > 0)
            this.wheres.push(this.uiSegmentSrv.newCondition('AND'));
        this.wheres.push(this.uiSegmentSrv.newSegment(event.target['text']));
        this.wheres.push(this.uiSegmentSrv.newOperator('NOT LIKE'));
        this.wheres.push(this.uiSegmentSrv.newFake("''", 'value', 'query-segment-value'));
        var plusButton = this.uiSegmentSrv.newPlusButton();
        this.whereSegment.value = plusButton.value;
        this.whereSegment.html = plusButton.html;
        this.setTargetWithQuery();
    };
    OpenHistorianFilterExpressionCtrl.prototype.getFilterToEdit = function () {
        var ctrl = this;
        return this.datasource.filterFindQuery().then(function (data) {
            var altSegments = _.map(data, function (item) {
                return ctrl.uiSegmentSrv.newSegment({ value: item.text, expandable: item.expandable });
            });
            altSegments.sort(function (a, b) {
                if (a.value < b.value)
                    return -1;
                if (a.value > b.value)
                    return 1;
                return 0;
            });
            return altSegments;
        });
    };
    OpenHistorianFilterExpressionCtrl.prototype.filterValueChanged = function () {
        this.orderBySegment = this.uiSegmentSrv.newPlusButton();
        this.wheres = [];
        this.setTargetWithQuery();
        this.panelCtrl.refresh();
    };
    OpenHistorianFilterExpressionCtrl.prototype.getOrderBysToAddNew = function () {
        var ctrl = this;
        return this.datasource.orderByFindQuery(ctrl.filterSegment.value).then(function (data) {
            var altSegments = _.map(data, function (item) {
                return ctrl.uiSegmentSrv.newSegment({ value: item.text, expandable: item.expandable });
            });
            altSegments.sort(function (a, b) {
                if (a.value < b.value)
                    return -1;
                if (a.value > b.value)
                    return 1;
                return 0;
            });
            return _.filter(altSegments, function (segment) {
                return _.find(ctrl.orderBys, function (x) {
                    return x.value == segment.value;
                }) == undefined;
            });
        });
    };
    OpenHistorianFilterExpressionCtrl.prototype.getOrderBysToEdit = function (orderBy) {
        var _this = this;
        var ctrl = this;
        if (orderBy.type == 'condition')
            return Promise.resolve([this.uiSegmentSrv.newCondition('ASC'), this.uiSegmentSrv.newCondition('DESC')]);
        if (orderBy.type == 'condition')
            return Promise.resolve([this.uiSegmentSrv.newCondition('ASC'), this.uiSegmentSrv.newCondition('DESC')]);
        return this.datasource.orderByFindQuery(ctrl.filterSegment.value).then(function (data) {
            var altSegments = _.map(data, function (item) {
                return ctrl.uiSegmentSrv.newSegment({ value: item.text, expandable: item.expandable });
            });
            altSegments.sort(function (a, b) {
                if (a.value < b.value)
                    return -1;
                if (a.value > b.value)
                    return 1;
                return 0;
            });
            if (orderBy.type !== 'plus-button')
                altSegments.unshift(_this.uiSegmentSrv.newSegment('-REMOVE-'));
            return _.filter(altSegments, function (segment) {
                return _.find(ctrl.orderBys, function (x) {
                    return x.value == segment.value;
                }) == undefined;
            });
        });
    };
    OpenHistorianFilterExpressionCtrl.prototype.addOrderBy = function () {
        this.orderBys.push(this.uiSegmentSrv.newSegment(event.target['text']));
        this.orderBys.push(this.uiSegmentSrv.newCondition('ASC'));
        var plusButton = this.uiSegmentSrv.newPlusButton();
        this.orderBySegment.value = plusButton.value;
        this.orderBySegment.html = plusButton.html;
        this.setTargetWithQuery();
    };
    OpenHistorianFilterExpressionCtrl.prototype.orderByValueChanged = function (orderBy, index) {
        if (event.target['text'] == "-REMOVE-")
            this.orderBys.splice(index, 2);
        else {
            if (orderBy.type == 'condition')
                this.orderBys[index] = this.uiSegmentSrv.newCondition(event.target['text']);
            else
                this.orderBys[index] = this.uiSegmentSrv.newSegment(event.target['text']);
        }
        this.setTargetWithQuery();
    };
    OpenHistorianFilterExpressionCtrl.prototype.getFunctionsToAddNew = function () {
        var _this = this;
        var ctrl = this;
        var array = [];
        _.each(Object.keys(openHistorianConstants_1.FunctionList), function (element, index, list) {
            array.push(ctrl.uiSegmentSrv.newSegment(element));
        });
        if (this.functions.length == 0)
            array = array.slice(2, array.length);
        array.sort(function (a, b) {
            var nameA = a.value.toUpperCase();
            var nameB = b.value.toUpperCase();
            if (nameA < nameB) {
                return -1;
            }
            if (nameA > nameB) {
                return 1;
            }
            return 0;
        });
        return Promise.resolve(_.filter(array, function (segment) {
            return _.find(_this.functions, function (x) {
                return x.value == segment.value;
            }) == undefined;
        }));
    };
    OpenHistorianFilterExpressionCtrl.prototype.getFunctionsToEdit = function (func, index) {
        var ctrl = this;
        var remove = [this.uiSegmentSrv.newSegment('-REMOVE-')];
        if (func.type == 'Operator')
            return Promise.resolve();
        else if (func.value == 'Set')
            return Promise.resolve(remove);
        return Promise.resolve(remove);
    };
    OpenHistorianFilterExpressionCtrl.prototype.functionValueChanged = function (func, index) {
        var funcSeg = openHistorianConstants_1.FunctionList[func.Function];
        if (func.value == "-REMOVE-") {
            var l = 1;
            var fi = _.findIndex(this.functionSegments, function (segment) { return segment.Function == func.Function; });
            if (func.Function == 'Slice')
                this.functionSegments[fi + 1].Parameters = this.functionSegments[fi + 1].Parameters.slice(1, this.functionSegments[fi + 1].Parameters.length);
            else if (fi > 0 && (this.functionSegments[fi - 1].Function == 'Set' || this.functionSegments[fi - 1].Function == 'Slice')) {
                --fi;
                ++l;
            }
            this.functionSegments.splice(fi, l);
        }
        else if (func.Type != 'Function') {
            var fi = _.findIndex(this.functionSegments, function (segment) { return segment.Function == func.Function; });
            this.functionSegments[fi].Parameters[func.Index].Default = func.value;
        }
        this.buildFunctionArray();
        this.setTargetWithQuery();
    };
    OpenHistorianFilterExpressionCtrl.prototype.addFunctionSegment = function () {
        var func = openHistorianConstants_1.FunctionList[event.target['text']];
        if (func.Function == 'Slice') {
            this.functionSegments[0].Parameters.unshift(func.Parameters[0]);
        }
        this.functionSegments.unshift(JSON.parse(JSON.stringify(func)));
        this.buildFunctionArray();
        var plusButton = this.uiSegmentSrv.newPlusButton();
        this.functionSegment.value = plusButton.value;
        this.functionSegment.html = plusButton.html;
        this.setTargetWithQuery();
    };
    OpenHistorianFilterExpressionCtrl.prototype.buildFunctionArray = function () {
        var ctrl = this;
        ctrl.functions = [];
        if (this.functionSegments.length == 0)
            return;
        _.each(ctrl.functionSegments, function (element, index, list) {
            var newElement = ctrl.uiSegmentSrv.newSegment(element.Function);
            newElement.Type = 'Function';
            newElement.Function = element.Function;
            ctrl.functions.push(newElement);
            if (newElement.value == 'Set' || newElement.value == 'Slice')
                return;
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
    };
    OpenHistorianFilterExpressionCtrl.prototype.getBooleans = function () {
        var _this = this;
        return Promise.resolve(openHistorianConstants_1.Booleans.map(function (value) { return _this.uiSegmentSrv.newSegment(value); }));
    };
    OpenHistorianFilterExpressionCtrl.prototype.getAngleUnits = function () {
        var _this = this;
        return Promise.resolve(openHistorianConstants_1.AngleUnits.map(function (value) { return _this.uiSegmentSrv.newSegment(value); }));
    };
    OpenHistorianFilterExpressionCtrl.prototype.getTimeSelect = function () {
        var _this = this;
        return Promise.resolve(openHistorianConstants_1.TimeUnits.map(function (value) { return _this.uiSegmentSrv.newSegment(value); }));
    };
    OpenHistorianFilterExpressionCtrl.prototype.inputChange = function (func, index) {
        var ctrl = this;
        clearTimeout(this.typingTimer);
        this.typingTimer = setTimeout(function () { ctrl.functionValueChanged(func, index); }, 3000);
        event.target['focus']();
    };
    return OpenHistorianFilterExpressionCtrl;
}());
exports.default = OpenHistorianFilterExpressionCtrl;


/***/ }),

/***/ "./controllers/openHistorianQueryOptions_ctrl.ts":
/*!*******************************************************!*\
  !*** ./controllers/openHistorianQueryOptions_ctrl.ts ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var openHistorianConstants_1 = __webpack_require__(/*! ./../js/openHistorianConstants */ "./js/openHistorianConstants.ts");
var OpenHistorianQueryOptionsCtrl = (function () {
    function OpenHistorianQueryOptionsCtrl($scope, $compile) {
        var _this = this;
        this.$scope = $scope;
        this.$compile = $compile;
        this.$scope = $scope;
        var value = JSON.parse(JSON.stringify($scope.return));
        this.dataFlags = this.hex2flags(parseInt(value.Excluded));
        this.dataFlags['Normal'].Value = value.Normal;
        this.return = $scope.return;
        this.flagArray = _.map(Object.keys(this.dataFlags), function (a) {
            return { key: a, order: _this.dataFlags[a].Order };
        }).sort(function (a, b) {
            return a.order - b.order;
        });
    }
    OpenHistorianQueryOptionsCtrl.prototype.calculateFlags = function (flag) {
        var ctrl = this;
        var flagVarExcluded = ctrl.return.Excluded;
        if (flag == 'Select All') {
            _.each(Object.keys(ctrl.dataFlags), function (key, index, list) {
                if (key == "Normal")
                    ctrl.dataFlags[key].Value = false;
                else
                    ctrl.dataFlags[key].Value = ctrl.dataFlags['Select All'].Value;
            });
            if (ctrl.dataFlags['Select All'].Value)
                flagVarExcluded = 0xFFFFFFFF;
            else
                flagVarExcluded = 0;
        }
        else {
            ctrl.dataFlags['Select All'].Value = false;
            flagVarExcluded ^= ctrl.dataFlags[flag].Flag;
        }
        ctrl.return.Excluded = flagVarExcluded;
        ctrl.return.Normal = ctrl.dataFlags['Normal'].Value;
    };
    OpenHistorianQueryOptionsCtrl.prototype.hex2flags = function (hex) {
        var ctrl = this;
        var flag = hex;
        var flags = JSON.parse(JSON.stringify(openHistorianConstants_1.DefaultFlags));
        _.each(Object.keys(flags), function (key, index, list) {
            if (key == 'Select All')
                return;
            flags[key].Value = (flags[key].Flag & flag) != 0;
        });
        return flags;
    };
    return OpenHistorianQueryOptionsCtrl;
}());
exports.default = OpenHistorianQueryOptionsCtrl;


/***/ }),

/***/ "./controllers/openHistorianQuery_ctrl.ts":
/*!************************************************!*\
  !*** ./controllers/openHistorianQuery_ctrl.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var sdk_1 = __webpack_require__(/*! ../node_modules/grafana-sdk-mocks/app/plugins/sdk */ "./node_modules/grafana-sdk-mocks/app/plugins/sdk.ts");
__webpack_require__(/*! ./../css/query-editor.css */ "./css/query-editor.css");
var OpenHistorianDataSourceQueryCtrl = (function (_super) {
    __extends(OpenHistorianDataSourceQueryCtrl, _super);
    function OpenHistorianDataSourceQueryCtrl($scope, $injector, uiSegmentSrv, templateSrv, $compile) {
        var _this = _super.call(this, $scope, $injector) || this;
        _this.uiSegmentSrv = uiSegmentSrv;
        _this.templateSrv = templateSrv;
        _this.$compile = $compile;
        _this.$scope = $scope;
        _this.$compile = $compile;
        var ctrl = _this;
        _this.uiSegmentSrv = uiSegmentSrv;
        _this.queryTypes = [
            "Element List", "Filter Expression", "Text Editor"
        ];
        _this.queryType = (_this.target.queryType == undefined ? "Element List" : _this.target.queryType);
        _this.queryOptionsOpen = false;
        if (ctrl.target.queryOptions == undefined)
            ctrl.target.queryOptions = { Excluded: ctrl.datasource.options.excludedDataFlags, Normal: ctrl.datasource.options.excludeNormalData };
        return _this;
    }
    OpenHistorianDataSourceQueryCtrl.prototype.toggleQueryOptions = function () {
        this.queryOptionsOpen = !this.queryOptionsOpen;
    };
    OpenHistorianDataSourceQueryCtrl.prototype.onChangeInternal = function () {
        this.panelCtrl.refresh();
    };
    OpenHistorianDataSourceQueryCtrl.prototype.changeQueryType = function () {
        if (this.queryType == 'Text Editor') {
            this.target.targetText = this.target.target;
        }
        else {
            this.target.target = '';
            delete this.target.functionSegments;
        }
    };
    OpenHistorianDataSourceQueryCtrl.templateUrl = 'partial/query.editor.html';
    return OpenHistorianDataSourceQueryCtrl;
}(sdk_1.QueryCtrl));
exports.default = OpenHistorianDataSourceQueryCtrl;


/***/ }),

/***/ "./controllers/openHistorianTextEditor_ctrl.ts":
/*!*****************************************************!*\
  !*** ./controllers/openHistorianTextEditor_ctrl.ts ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var OpenHistorianTextEditorCtrl = (function () {
    function OpenHistorianTextEditorCtrl($scope, templateSrv) {
        this.$scope = $scope;
        this.templateSrv = templateSrv;
        this.$scope = $scope;
        this.targetText = ($scope.target.targetText == undefined ? '' : $scope.target.targetText);
        this.setTargetWithText();
        delete $scope.target.segments;
        delete $scope.target.functionSegments;
        delete $scope.target.wheres;
        delete $scope.target.topNSegment;
        delete $scope.target.functions;
        delete $scope.target.orderBys;
        delete $scope.target.whereSegment;
        delete $scope.target.filterSegment;
        delete $scope.target.orderBySegment;
        delete $scope.target.functionSegment;
    }
    OpenHistorianTextEditorCtrl.prototype.setTargetWithText = function () {
        this.$scope.target.targetText = this.targetText;
        this.$scope.target.target = this.targetText;
        this.$scope.target.queryType = 'Text Editor';
        this.$scope.panel.refresh();
    };
    return OpenHistorianTextEditorCtrl;
}());
exports.default = OpenHistorianTextEditorCtrl;


/***/ }),

/***/ "./css/query-editor.css":
/*!******************************!*\
  !*** ./css/query-editor.css ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!./query-editor.css */ "./node_modules/css-loader/dist/cjs.js!./css/query-editor.css");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}


/***/ }),

/***/ "./js/openHistorianConstants.ts":
/*!**************************************!*\
  !*** ./js/openHistorianConstants.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.DefaultFlags = {
    'Select All': { Value: false, Order: -1, Flag: 0 },
    Normal: { Value: false, Order: 0, Flag: 0 },
    BadData: { Value: false, Order: 1, Flag: 1 << 0 },
    SuspectData: { Value: false, Order: 2, Flag: 1 << 1 },
    OverRangeError: { Value: false, Order: 3, Flag: 1 << 2 },
    UnderRangeError: { Value: false, Order: 4, Flag: 1 << 3 },
    AlarmHigh: { Value: false, Order: 5, Flag: 1 << 4 },
    AlarmLow: { Value: false, Order: 6, Flag: 1 << 5 },
    WarningHigh: { Value: false, Order: 7, Flag: 1 << 6 },
    WarningLow: { Value: false, Order: 8, Flag: 1 << 7 },
    FlatlineAlarm: { Value: false, Order: 9, Flag: 1 << 8 },
    ComparisonAlarm: { Value: false, Order: 10, Flag: 1 << 9 },
    ROCAlarm: { Value: false, Order: 11, Flag: 1 << 10 },
    ReceivedAsBad: { Value: false, Order: 12, Flag: 1 << 11 },
    CalculatedValue: { Value: false, Order: 13, Flag: 1 << 12 },
    CalculationError: { Value: false, Order: 14, Flag: 1 << 13 },
    CalculationWarning: { Value: false, Order: 15, Flag: 1 << 14 },
    ReservedQualityFlag: { Value: false, Order: 16, Flag: 1 << 15 },
    BadTime: { Value: false, Order: 17, Flag: 1 << 16 },
    SuspectTime: { Value: false, Order: 18, Flag: 1 << 17 },
    LateTimeAlarm: { Value: false, Order: 19, Flag: 1 << 18 },
    FutureTimeAlarm: { Value: false, Order: 20, Flag: 1 << 19 },
    UpSampled: { Value: false, Order: 21, Flag: 1 << 20 },
    DownSampled: { Value: false, Order: 22, Flag: 1 << 21 },
    DiscardedValue: { Value: false, Order: 23, Flag: 1 << 22 },
    ReservedTimeFlag: { Value: false, Order: 24, Flag: 1 << 23 },
    UserDefinedFlag1: { Value: false, Order: 25, Flag: 1 << 24 },
    UserDefinedFlag2: { Value: false, Order: 26, Flag: 1 << 25 },
    UserDefinedFlag3: { Value: false, Order: 27, Flag: 1 << 26 },
    UserDefinedFlag4: { Value: false, Order: 28, Flag: 1 << 27 },
    UserDefinedFlag5: { Value: false, Order: 29, Flag: 1 << 28 },
    SystemError: { Value: false, Order: 30, Flag: 1 << 29 },
    SystemWarning: { Value: false, Order: 31, Flag: 1 << 30 },
    MeasurementError: { Value: false, Order: 32, Flag: 1 << 31 }
};
exports.FunctionList = {
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
    Add: { Function: 'Add', Parameters: [{ Default: 0, Type: 'string', Description: 'A floating point value representing an additive offset to be applied to each value the source series.' }] },
    Subtract: { Function: 'Subtract', Parameters: [{ Default: 0, Type: 'string', Description: 'A floating point value representing an additive offset to be applied to each value the source series.' }] },
    Multiply: { Function: 'Multiply', Parameters: [{ Default: 1, Type: 'string', Description: 'A floating point value representing an additive offset to be applied to each value the source series.' }] },
    Divide: { Function: 'Multiply', Parameters: [{ Default: 1, Type: 'string', Description: 'A floating point value representing an additive offset to be applied to each value the source series.' }] },
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
    Label: { Function: 'Label', Parameters: [{ Default: 'Name', Type: 'string', Description: 'Renames a series with the specified label value.' }] },
};
exports.WhereOperators = ['=', '<>', '<', '<=', '>', '>=', 'LIKE', 'NOT LIKE', 'IN', 'NOT IN', 'IS', 'IS NOT'];
exports.Booleans = ['true', 'false'];
exports.AngleUnits = ['Degrees', 'Radians', 'Grads', 'ArcMinutes', 'ArcSeconds', 'AngularMil'];
exports.TimeUnits = ['Weeks', 'Days', 'Hours', 'Minutes', 'Seconds', 'Milliseconds', 'Microseconds', 'Nanoseconds', 'Ticks', 'PlankTime', 'AtomicUnitsOfTime', 'Ke'];


/***/ }),

/***/ "./module.ts":
/*!*******************!*\
  !*** ./module.ts ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var openHistorianDatasource_1 = __webpack_require__(/*! ./openHistorianDatasource */ "./openHistorianDatasource.ts");
exports.Datasource = openHistorianDatasource_1.default;
var openHistorianQuery_ctrl_1 = __webpack_require__(/*! ./controllers/openHistorianQuery_ctrl */ "./controllers/openHistorianQuery_ctrl.ts");
exports.QueryCtrl = openHistorianQuery_ctrl_1.default;
var openHistorianConfig_ctrl_1 = __webpack_require__(/*! ./controllers/openHistorianConfig_ctrl */ "./controllers/openHistorianConfig_ctrl.ts");
exports.ConfigCtrl = openHistorianConfig_ctrl_1.default;
var openHistorianQueryOptions_ctrl_1 = __webpack_require__(/*! ./controllers/openHistorianQueryOptions_ctrl */ "./controllers/openHistorianQueryOptions_ctrl.ts");
exports.QueryOptionsCtrl = openHistorianQueryOptions_ctrl_1.default;
var openHistorianAnnotations_ctrl_1 = __webpack_require__(/*! ./controllers/openHistorianAnnotations_ctrl */ "./controllers/openHistorianAnnotations_ctrl.ts");
exports.AnnotationsQueryCtrl = openHistorianAnnotations_ctrl_1.default;
var openHistorianElementPicker_ctrl_1 = __webpack_require__(/*! ./controllers/openHistorianElementPicker_ctrl */ "./controllers/openHistorianElementPicker_ctrl.ts");
var openHistorianTextEditor_ctrl_1 = __webpack_require__(/*! ./controllers/openHistorianTextEditor_ctrl */ "./controllers/openHistorianTextEditor_ctrl.ts");
var openHistorianFilterExpression_ctrl_1 = __webpack_require__(/*! ./controllers/openHistorianFilterExpression_ctrl */ "./controllers/openHistorianFilterExpression_ctrl.ts");
angular.module('grafana.directives').directive("queryOptions", function () {
    return {
        templateUrl: 'public/plugins/gridprotectionalliance-openhistorian-datasource/partial/query.options.html',
        restrict: 'E',
        controller: openHistorianQueryOptions_ctrl_1.default,
        controllerAs: 'queryOptionCtrl',
        scope: {
            flags: "=",
            return: "=",
        }
    };
});
angular.module('grafana.directives').directive("elementPicker", function () {
    return {
        templateUrl: 'public/plugins/gridprotectionalliance-openhistorian-datasource/partial/query.elementPicker.html',
        restrict: 'E',
        controller: openHistorianElementPicker_ctrl_1.default,
        controllerAs: 'openHistorianElementPickerCtrl',
        scope: {
            target: "=",
            datasource: "=",
            panel: "="
        }
    };
});
angular.module('grafana.directives').directive("textEditor", function () {
    return {
        templateUrl: 'public/plugins/gridprotectionalliance-openhistorian-datasource/partial/query.textEditor.html',
        restrict: 'E',
        controller: openHistorianTextEditor_ctrl_1.default,
        controllerAs: 'openHistorianTextEditorCtrl',
        scope: {
            target: "=",
            datasource: "=",
            panel: "="
        }
    };
});
angular.module('grafana.directives').directive("filterExpression", function () {
    return {
        templateUrl: 'public/plugins/gridprotectionalliance-openhistorian-datasource/partial/query.filterExpression.html',
        restrict: 'E',
        controller: openHistorianFilterExpression_ctrl_1.default,
        controllerAs: 'openHistorianFilterExpressionCtrl',
        scope: {
            target: "=",
            datasource: "=",
            panel: "="
        }
    };
});


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./css/query-editor.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./css/query-editor.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".generic-datasource-query-row .query-keyword {\n  width: 75px;\n}", ""]);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], "{").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      // eslint-disable-next-line prefer-destructuring
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = modules[_i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = "(".concat(item[2], ") and (").concat(mediaQuery, ")");
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot).concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/grafana-sdk-mocks/app/features/panel/metrics_panel_ctrl.ts":
/*!*********************************************************************************!*\
  !*** ./node_modules/grafana-sdk-mocks/app/features/panel/metrics_panel_ctrl.ts ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var panel_ctrl_1 = __webpack_require__(/*! ./panel_ctrl */ "./node_modules/grafana-sdk-mocks/app/features/panel/panel_ctrl.ts");
var MetricsPanelCtrl = (function (_super) {
    __extends(MetricsPanelCtrl, _super);
    function MetricsPanelCtrl($scope, $injector) {
        var _this = _super.call(this, $scope, $injector) || this;
        _this.editorTabIndex = 1;
        if (!_this.panel.targets) {
            _this.panel.targets = [{}];
        }
        return _this;
    }
    MetricsPanelCtrl.prototype.onPanelTearDown = function () {
    };
    MetricsPanelCtrl.prototype.onInitMetricsPanelEditMode = function () {
    };
    MetricsPanelCtrl.prototype.onMetricsPanelRefresh = function () {
    };
    MetricsPanelCtrl.prototype.setTimeQueryStart = function () {
    };
    MetricsPanelCtrl.prototype.setTimeQueryEnd = function () {
    };
    MetricsPanelCtrl.prototype.updateTimeRange = function (datasource) {
    };
    MetricsPanelCtrl.prototype.calculateInterval = function () {
    };
    MetricsPanelCtrl.prototype.applyPanelTimeOverrides = function () {
    };
    MetricsPanelCtrl.prototype.issueQueries = function (datasource) {
    };
    MetricsPanelCtrl.prototype.handleQueryResult = function (result) {
    };
    MetricsPanelCtrl.prototype.handleDataStream = function (stream) {
    };
    MetricsPanelCtrl.prototype.setDatasource = function (datasource) {
    };
    MetricsPanelCtrl.prototype.addQuery = function (target) {
    };
    MetricsPanelCtrl.prototype.removeQuery = function (target) {
    };
    MetricsPanelCtrl.prototype.moveQuery = function (target, direction) {
    };
    return MetricsPanelCtrl;
}(panel_ctrl_1.PanelCtrl));
exports.MetricsPanelCtrl = MetricsPanelCtrl;


/***/ }),

/***/ "./node_modules/grafana-sdk-mocks/app/features/panel/panel_ctrl.ts":
/*!*************************************************************************!*\
  !*** ./node_modules/grafana-sdk-mocks/app/features/panel/panel_ctrl.ts ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var PanelCtrl = (function () {
    function PanelCtrl($scope, $injector) {
    }
    PanelCtrl.prototype.init = function () {
    };
    PanelCtrl.prototype.renderingCompleted = function () {
    };
    PanelCtrl.prototype.refresh = function () {
    };
    PanelCtrl.prototype.publishAppEvent = function (evtName, evt) {
    };
    PanelCtrl.prototype.changeView = function (fullscreen, edit) {
    };
    PanelCtrl.prototype.viewPanel = function () {
        this.changeView(true, false);
    };
    PanelCtrl.prototype.editPanel = function () {
        this.changeView(true, true);
    };
    PanelCtrl.prototype.exitFullscreen = function () {
        this.changeView(false, false);
    };
    PanelCtrl.prototype.initEditMode = function () {
    };
    PanelCtrl.prototype.changeTab = function (newIndex) {
    };
    PanelCtrl.prototype.addEditorTab = function (title, directiveFn, index) {
    };
    PanelCtrl.prototype.getMenu = function () {
        return [];
    };
    PanelCtrl.prototype.getExtendedMenu = function () {
        return [];
    };
    PanelCtrl.prototype.otherPanelInFullscreenMode = function () {
        return false;
    };
    PanelCtrl.prototype.calculatePanelHeight = function () {
    };
    PanelCtrl.prototype.render = function (payload) {
    };
    PanelCtrl.prototype.toggleEditorHelp = function (index) {
    };
    PanelCtrl.prototype.duplicate = function () {
    };
    PanelCtrl.prototype.updateColumnSpan = function (span) {
    };
    PanelCtrl.prototype.removePanel = function () {
    };
    PanelCtrl.prototype.editPanelJson = function () {
    };
    PanelCtrl.prototype.replacePanel = function (newPanel, oldPanel) {
    };
    PanelCtrl.prototype.sharePanel = function () {
    };
    PanelCtrl.prototype.getInfoMode = function () {
    };
    PanelCtrl.prototype.getInfoContent = function (options) {
    };
    PanelCtrl.prototype.openInspector = function () {
    };
    return PanelCtrl;
}());
exports.PanelCtrl = PanelCtrl;


/***/ }),

/***/ "./node_modules/grafana-sdk-mocks/app/features/panel/query_ctrl.ts":
/*!*************************************************************************!*\
  !*** ./node_modules/grafana-sdk-mocks/app/features/panel/query_ctrl.ts ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var QueryCtrl = (function () {
    function QueryCtrl($scope, $injector) {
        this.$scope = $scope;
        this.$injector = $injector;
        this.panelCtrl = this.panelCtrl || { panel: {} };
        this.target = this.target || { target: '' };
        this.panel = this.panelCtrl.panel;
    }
    QueryCtrl.prototype.refresh = function () { };
    return QueryCtrl;
}());
exports.QueryCtrl = QueryCtrl;


/***/ }),

/***/ "./node_modules/grafana-sdk-mocks/app/plugins/sdk.ts":
/*!***********************************************************!*\
  !*** ./node_modules/grafana-sdk-mocks/app/plugins/sdk.ts ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var panel_ctrl_1 = __webpack_require__(/*! ../features/panel/panel_ctrl */ "./node_modules/grafana-sdk-mocks/app/features/panel/panel_ctrl.ts");
exports.PanelCtrl = panel_ctrl_1.PanelCtrl;
var metrics_panel_ctrl_1 = __webpack_require__(/*! ../features/panel/metrics_panel_ctrl */ "./node_modules/grafana-sdk-mocks/app/features/panel/metrics_panel_ctrl.ts");
exports.MetricsPanelCtrl = metrics_panel_ctrl_1.MetricsPanelCtrl;
var query_ctrl_1 = __webpack_require__(/*! ../features/panel/query_ctrl */ "./node_modules/grafana-sdk-mocks/app/features/panel/query_ctrl.ts");
exports.QueryCtrl = query_ctrl_1.QueryCtrl;
function loadPluginCss(options) {
}
exports.loadPluginCss = loadPluginCss;


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var stylesInDom = {};

var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

function listToStyles(list, options) {
  var styles = [];
  var newStyles = {};

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var css = item[1];
    var media = item[2];
    var sourceMap = item[3];
    var part = {
      css: css,
      media: media,
      sourceMap: sourceMap
    };

    if (!newStyles[id]) {
      styles.push(newStyles[id] = {
        id: id,
        parts: [part]
      });
    } else {
      newStyles[id].parts.push(part);
    }
  }

  return styles;
}

function addStylesToDom(styles, options) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i];
    var domStyle = stylesInDom[item.id];
    var j = 0;

    if (domStyle) {
      domStyle.refs++;

      for (; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j]);
      }

      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j], options));
      }
    } else {
      var parts = [];

      for (; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j], options));
      }

      stylesInDom[item.id] = {
        id: item.id,
        refs: 1,
        parts: parts
      };
    }
  }
}

function insertStyleElement(options) {
  var style = document.createElement('style');

  if (typeof options.attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      options.attributes.nonce = nonce;
    }
  }

  Object.keys(options.attributes).forEach(function (key) {
    style.setAttribute(key, options.attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {};
  options.attributes = typeof options.attributes === 'object' ? options.attributes : {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  var styles = listToStyles(list, options);
  addStylesToDom(styles, options);
  return function update(newList) {
    var mayRemove = [];

    for (var i = 0; i < styles.length; i++) {
      var item = styles[i];
      var domStyle = stylesInDom[item.id];

      if (domStyle) {
        domStyle.refs--;
        mayRemove.push(domStyle);
      }
    }

    if (newList) {
      var newStyles = listToStyles(newList, options);
      addStylesToDom(newStyles, options);
    }

    for (var _i = 0; _i < mayRemove.length; _i++) {
      var _domStyle = mayRemove[_i];

      if (_domStyle.refs === 0) {
        for (var j = 0; j < _domStyle.parts.length; j++) {
          _domStyle.parts[j]();
        }

        delete stylesInDom[_domStyle.id];
      }
    }
  };
};

/***/ }),

/***/ "./openHistorianDatasource.ts":
/*!************************************!*\
  !*** ./openHistorianDatasource.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var OpenHistorianDataSource = (function () {
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
            excludedDataFlags: (instanceSettings.jsonData.Excluded == undefined ? 0 : instanceSettings.jsonData.Excluded),
            excludeNormalData: (instanceSettings.jsonData.Normal == undefined ? false : instanceSettings.jsonData.Normal)
        };
    }
    OpenHistorianDataSource.prototype.query = function (options) {
        var query = this.buildQueryParameters(options);
        query.targets = query.targets.filter(function (t) {
            return !t.hide;
        });
        query.options = JSON.parse(JSON.stringify(this.options));
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
    OpenHistorianDataSource.prototype.metricFindQuery = function (options, optionalOptions) {
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
        return _.map(result.data, function (d, i) {
            return { text: d, value: d };
        });
    };
    OpenHistorianDataSource.prototype.buildQueryParameters = function (options) {
        var _this = this;
        options.targets = _.filter(options.targets, function (target) {
            return target.target !== 'select metric';
        });
        var targets = _.map(options.targets, function (target) {
            return {
                target: _this.fixTemplates(target),
                refId: target.refId,
                hide: target.hide,
                excludedFlags: ((target || {}).queryOptions || {}).Excluded || 0,
                excludeNormalFlags: ((target || {}).queryOptions || {}).Normal || false,
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
    OpenHistorianDataSource.prototype.getAlarmStates = function (options) {
        var interpolated = {
            target: this.templateSrv.replace(options, null, 'regex')
        };
        return this.backendSrv.datasourceRequest({
            url: this.url + '/GetAlarmState',
            data: interpolated,
            method: 'POST',
            headers: { 'Content-Type': 'application/json' }
        });
    };
    OpenHistorianDataSource.prototype.getDataAvailability = function (options) {
        var interpolated = {
            target: this.templateSrv.replace(options, null, 'regex')
        };
        return this.backendSrv.datasourceRequest({
            url: this.url + '/GetDataAvailability',
            data: interpolated,
            method: 'POST',
            headers: { 'Content-Type': 'application/json' }
        });
    };
    OpenHistorianDataSource.prototype.fixTemplates = function (target) {
        if (target.target == undefined)
            return '';
        var ctrl = this;
        var sep = ' ';
        if (target.queryType == 'Element List')
            sep = ';';
        return target.target.split(sep).map(function (a) {
            if (ctrl.templateSrv.variableExists(a)) {
                return ctrl.templateSrv.replaceWithText(a);
            }
            else
                return a;
        }).join(sep);
    };
    return OpenHistorianDataSource;
}());
exports.default = OpenHistorianDataSource;


/***/ })

/******/ })});;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29udHJvbGxlcnMvb3Blbkhpc3RvcmlhbkFubm90YXRpb25zX2N0cmwudHMiLCJ3ZWJwYWNrOi8vLy4vY29udHJvbGxlcnMvb3Blbkhpc3RvcmlhbkNvbmZpZ19jdHJsLnRzIiwid2VicGFjazovLy8uL2NvbnRyb2xsZXJzL29wZW5IaXN0b3JpYW5FbGVtZW50UGlja2VyX2N0cmwudHMiLCJ3ZWJwYWNrOi8vLy4vY29udHJvbGxlcnMvb3Blbkhpc3RvcmlhbkZpbHRlckV4cHJlc3Npb25fY3RybC50cyIsIndlYnBhY2s6Ly8vLi9jb250cm9sbGVycy9vcGVuSGlzdG9yaWFuUXVlcnlPcHRpb25zX2N0cmwudHMiLCJ3ZWJwYWNrOi8vLy4vY29udHJvbGxlcnMvb3Blbkhpc3RvcmlhblF1ZXJ5X2N0cmwudHMiLCJ3ZWJwYWNrOi8vLy4vY29udHJvbGxlcnMvb3Blbkhpc3RvcmlhblRleHRFZGl0b3JfY3RybC50cyIsIndlYnBhY2s6Ly8vLi9jc3MvcXVlcnktZWRpdG9yLmNzcz9lYzM5Iiwid2VicGFjazovLy8uL2pzL29wZW5IaXN0b3JpYW5Db25zdGFudHMudHMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlLnRzIiwid2VicGFjazovLy8uL2Nzcy9xdWVyeS1lZGl0b3IuY3NzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2dyYWZhbmEtc2RrLW1vY2tzL2FwcC9mZWF0dXJlcy9wYW5lbC9tZXRyaWNzX3BhbmVsX2N0cmwudHMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2dyYWZhbmEtc2RrLW1vY2tzL2FwcC9mZWF0dXJlcy9wYW5lbC9wYW5lbF9jdHJsLnRzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9ncmFmYW5hLXNkay1tb2Nrcy9hcHAvZmVhdHVyZXMvcGFuZWwvcXVlcnlfY3RybC50cyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZ3JhZmFuYS1zZGstbW9ja3MvYXBwL3BsdWdpbnMvc2RrLnRzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly8vLi9vcGVuSGlzdG9yaWFuRGF0YXNvdXJjZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUMzREE7SUFBQTtJQUVBLENBQUM7SUFEUyw2Q0FBVyxHQUFHLGlDQUFpQyxDQUFDO0lBQzFELHdDQUFDO0NBQUE7a0JBRm9CLGlDQUFpQzs7Ozs7Ozs7Ozs7Ozs7O0FDR3REO0lBSUksaUNBQVksTUFBTTtRQUNkLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQztRQUVoQixJQUFJLENBQUMsT0FBTyxDQUFDLFFB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SUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUU7SUFDekQsU0FBUyxFQUFFLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFO0lBQ25ELFFBQVEsRUFBRSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRTtJQUNsRCxXQUFXLEVBQUUsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUU7SUFDckQsVUFBVSxFQUFFLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFO0lBQ3BELGFBQWEsRUFBRSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRTtJQUN2RCxlQUFlLEVBQUUsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUU7SUFDMUQsUUFBUSxFQUFFLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxDQUFDLElBQUksRUFBRSxFQUFFO0lBQ3BELGFBQWEsRUFBRSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUUsQ0FBQyxJQUFJLEVBQUUsRUFBRTtJQUN6RCxlQUFlLEVBQUUsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLENBQUMsSUFBSSxFQUFFLEVBQUU7SUFDM0QsZ0JBQWdCLEVBQUUsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLENBQUMsSUFBSSxFQUFFLEVBQUU7SUFDNUQsa0JBQWtCLEVBQUUsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLENBQUMsSUFBSSxFQUFFLEVBQUU7SUFDOUQsbUJBQW1CLEVBQUUsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLENBQUMsSUFBSSxFQUFFLEVBQUU7SUFDL0QsT0FBTyxFQUFFLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxDQUFDLElBQUksRUFBRSxFQUFFO0lBQ25ELFdBQVcsRUFBRSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUUsQ0FBQyxJQUFJLEVBQUUsRUFBRTtJQUN2RCxhQUFhLEVBQUUsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLENBQUMsSUFBSSxFQUFFLEVBQUU7SUFDekQsZUFBZSxFQUFFLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxDQUFDLElBQUksRUFBRSxFQUFFO0lBQzNELFNBQVMsRUFBRSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUUsQ0FBQyxJQUFJLEVBQUUsRUFBRTtJQUNyRCxXQUFXLEVBQUUsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLENBQUMsSUFBSSxFQUFFLEVBQUU7SUFDdkQsY0FBYyxFQUFFLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxDQUFDLElBQUksRUFBRSxFQUFFO0lBQzFELGdCQUFnQixFQUFFLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxDQUFDLElBQUksRUFBRSxFQUFFO0lBQzVELGdCQUFnQixFQUFFLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxDQUFDLElBQUksRUFBRSxFQUFFO0lBQzVELGdCQUFnQixFQUFFLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxDQUFDLElBQUksRUFBRSxFQUFFO0lBQzVELGdCQUFnQixFQUFFLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxDQUFDLElBQUksRUFBRSxFQUFFO0lBQzVELGdCQUFnQixFQUFFLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxDQUFDLElBQUksRUFBRSxFQUFFO0lBQzVELGdCQUFnQixFQUFFLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxDQUFDLElBQUksRUFBRSxFQUFFO0lBQzVELFdBQVcsRUFBRSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUUsQ0FBQyxJQUFJLEVBQUUsRUFBRTtJQUN2RCxhQUFhLEVBQUUsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLENBQUMsSUFBSSxFQUFFLEVBQUU7SUFDekQsZ0JBQWdCLEVBQUUsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLENBQUMsSUFBSSxFQUFFLEVBQUU7Q0FDL0Q7QUFFWSxvQkFBWSxHQUFHO0lBQ3hCLEdBQUcsRUFBRSxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFLEVBQUUsRUFBRTtJQUN4QyxLQUFLLEVBQUUsRUFB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QUVELHFEQUFtQixHQUFuQixVQUFvQixPQUFPO1FBQ3ZCLElBQUksWUFBWSxHQUFHO1lBQ2YsTUFBTSxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxJQUFJLEVBQUUsT0FBTyxDQUFDO1NBQzNELENBQUM7UUFFRixPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsaUJBQWlCLENBQUM7WUFDckMsR0FBRyxFQUFFLElBQUksQ0FBQyxHQUFHLEdBQUcsc0JBQXNCO1lBQ3RDLElBQUksRUFBRSxZQUFZO1lBQ2xCLE1BQU0sRUFBRSxNQUFNO1lBQ2QsT0FBTyxFQUFFLEVBQUUsY0FBYyxFQUFFLGtCQUFrQixFQUFFO1NBQ2xELENBQUMsQ0FBQztJQUVQLENBQUM7SUFFRCw4Q0FBWSxHQUFaLFVBQWEsTUFBTTtRQUNmLElBQUksTUFBTSxDQUFDLE1BQU0sSUFBSSxTQUFTO1lBQUUsT0FBTyxFQUFFLENBQUM7UUFFMUMsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBRWhCLElBQUksR0FBRyxHQUFHLEdBQUcsQ0FBQztRQUNkLElBQUcsTUFBTSxDQUFDLFNBQVMsSUFBSSxjQUFjO1lBQ2pDLEdBQUcsR0FBRyxHQUFHO1FBRWIsT0FBTyxNQUFNLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDO1lBQzNDLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLEVBQUU7Z0JBQ3BDLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDOUM7O2dCQUVHLE9BQU8sQ0FBQztRQUNoQixDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDakIsQ0FBQztJQUNMLDhCQUFDO0FBQUQsQ0FBQyIsImZpbGUiOiJtb2R1bGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL21vZHVsZS50c1wiKTtcbiIsIi8vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4vLyAgb3Blbkhpc3RvcmlhbkFubm90YXRpb25zX2N0cmwudHMgLSBHYnRjXG4vL1xuLy8gIENvcHlyaWdodCDvv70gMjAxOSwgR3JpZCBQcm90ZWN0aW9uIEFsbGlhbmNlLiAgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbi8vXG4vLyAgTGljZW5zZWQgdG8gdGhlIEdyaWQgUHJvdGVjdGlvbiBBbGxpYW5jZSAoR1BBKSB1bmRlciBvbmUgb3IgbW9yZSBjb250cmlidXRvciBsaWNlbnNlIGFncmVlbWVudHMuIFNlZVxuLy8gIHRoZSBOT1RJQ0UgZmlsZSBkaXN0cmlidXRlZCB3aXRoIHRoaXMgd29yayBmb3IgYWRkaXRpb25hbCBpbmZvcm1hdGlvbiByZWdhcmRpbmcgY29weXJpZ2h0IG93bmVyc2hpcC5cbi8vICBUaGUgR1BBIGxpY2Vuc2VzIHRoaXMgZmlsZSB0byB5b3UgdW5kZXIgdGhlIE1JVCBMaWNlbnNlIChNSVQpLCB0aGUgXCJMaWNlbnNlXCI7IHlvdSBtYXkgbm90IHVzZSB0aGlzXG4vLyAgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXQ6XG4vL1xuLy8gICAgICBodHRwOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXG4vL1xuLy8gIFVubGVzcyBhZ3JlZWQgdG8gaW4gd3JpdGluZywgdGhlIHN1YmplY3Qgc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW5cbi8vICBcIkFTLUlTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLiBSZWZlciB0byB0aGVcbi8vICBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9ucy5cbi8vXG4vLyAgQ29kZSBNb2RpZmljYXRpb24gSGlzdG9yeTpcbi8vICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyAgMDgvMTkvMjAxOSAtIEJpbGx5IEVybmVzdFxuLy8gICAgICAgR2VuZXJhdGVkIG9yaWdpbmFsIHZlcnNpb24gb2Ygc291cmNlIGNvZGUuXG4vL1xuLy8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgT3Blbkhpc3RvcmlhbkFubm90YXRpb25zUXVlcnlDdHJse1xuICAgc3RhdGljIHRlbXBsYXRlVXJsID0gJ3BhcnRpYWwvYW5ub3RhdGlvbnMuZWRpdG9yLmh0bWwnO1xufVxuIiwiLy8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbi8vICBjb25maWdfY3RybC5qcyAtIEdidGNcbi8vXG4vLyAgQ29weXJpZ2h0IO+/vSAyMDE3LCBHcmlkIFByb3RlY3Rpb24gQWxsaWFuY2UuICBBbGwgUmlnaHRzIFJlc2VydmVkLlxuLy9cbi8vICBMaWNlbnNlZCB0byB0aGUgR3JpZCBQcm90ZWN0aW9uIEFsbGlhbmNlIChHUEEpIHVuZGVyIG9uZSBvciBtb3JlIGNvbnRyaWJ1dG9yIGxpY2Vuc2UgYWdyZWVtZW50cy4gU2VlXG4vLyAgdGhlIE5PVElDRSBmaWxlIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyB3b3JrIGZvciBhZGRpdGlvbmFsIGluZm9ybWF0aW9uIHJlZ2FyZGluZyBjb3B5cmlnaHQgb3duZXJzaGlwLlxuLy8gIFRoZSBHUEEgbGljZW5zZXMgdGhpcyBmaWxlIHRvIHlvdSB1bmRlciB0aGUgTUlUIExpY2Vuc2UgKE1JVCksIHRoZSBcIkxpY2Vuc2VcIjsgeW91IG1heSBub3QgdXNlIHRoaXNcbi8vICBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdDpcbi8vXG4vLyAgICAgIGh0dHA6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcbi8vXG4vLyAgVW5sZXNzIGFncmVlZCB0byBpbiB3cml0aW5nLCB0aGUgc3ViamVjdCBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhblxuLy8gIFwiQVMtSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuIFJlZmVyIHRvIHRoZVxuLy8gIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zLlxuLy9cbi8vICBDb2RlIE1vZGlmaWNhdGlvbiBIaXN0b3J5OlxuLy8gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vICAxMC8zMC8yMDE3IC0gQmlsbHkgRXJuZXN0XG4vLyAgICAgICBHZW5lcmF0ZWQgb3JpZ2luYWwgdmVyc2lvbiBvZiBzb3VyY2UgY29kZS5cbi8vXG4vLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuXG5kZWNsYXJlIHZhciBfOiBhbnk7XG5pbXBvcnQgeyBEZWZhdWx0RmxhZ3MgfSBmcm9tICcuLy4uL2pzL29wZW5IaXN0b3JpYW5Db25zdGFudHMnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE9wZW5IaXN0b3JpYW5Db25maWdDdHJse1xuICAgIHN0YXRpYyB0ZW1wbGF0ZVVybDpzdHJpbmcgPSAncGFydGlhbC9jb25maWcuaHRtbCc7XG4gICAgY3VycmVudDogYW55O1xuICAgIGZsYWdBcnJheTogQXJyYXk8YW55PjtcbiAgICBjb25zdHJ1Y3Rvcigkc2NvcGUpIHtcbiAgICAgICAgdmFyIGN0cmwgPSB0aGlzO1xuXG4gICAgICAgIGN0cmwuY3VycmVudC5qc29uRGF0YS5FeGNsdWRlZCA9IHRoaXMuY3VycmVudC5qc29uRGF0YS5FeGNsdWRlZCB8fCAwO1xuICAgICAgICBjdHJsLmN1cnJlbnQuanNvbkRhdGEuTm9ybWFsID0gdGhpcy5jdXJyZW50Lmpzb25EYXRhLk5vcm1hbCB8fCBmYWxzZTtcblxuICAgIH1cbn1cblxuIiwiLy8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbi8vICBvcGVuSGlzdG9yaWFuRWxlbWVudFBpY2tlcl9jdHJsLnRzIC0gR2J0Y1xuLy9cbi8vICBDb3B5cmlnaHQgwqkgMjAxNywgR3JpZCBQcm90ZWN0aW9uIEFsbGlhbmNlLiAgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbi8vXG4vLyAgTGljZW5zZWQgdG8gdGhlIEdyaWQgUHJvdGVjdGlvbiBBbGxpYW5jZSAoR1BBKSB1bmRlciBvbmUgb3IgbW9yZSBjb250cmlidXRvciBsaWNlbnNlIGFncmVlbWVudHMuIFNlZVxuLy8gIHRoZSBOT1RJQ0UgZmlsZSBkaXN0cmlidXRlZCB3aXRoIHRoaXMgd29yayBmb3IgYWRkaXRpb25hbCBpbmZvcm1hdGlvbiByZWdhcmRpbmcgY29weXJpZ2h0IG93bmVyc2hpcC5cbi8vICBUaGUgR1BBIGxpY2Vuc2VzIHRoaXMgZmlsZSB0byB5b3UgdW5kZXIgdGhlIE1JVCBMaWNlbnNlIChNSVQpLCB0aGUgXCJMaWNlbnNlXCI7IHlvdSBtYXkgbm90IHVzZSB0aGlzXG4vLyAgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXQ6XG4vL1xuLy8gICAgICBodHRwOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXG4vL1xuLy8gIFVubGVzcyBhZ3JlZWQgdG8gaW4gd3JpdGluZywgdGhlIHN1YmplY3Qgc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW5cbi8vICBcIkFTLUlTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLiBSZWZlciB0byB0aGVcbi8vICBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9ucy5cbi8vXG4vLyAgQ29kZSBNb2RpZmljYXRpb24gSGlzdG9yeTpcbi8vICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyAgMTIvMTIvMjAxNyAtIEJpbGx5IEVybmVzdFxuLy8gICAgICAgR2VuZXJhdGVkIG9yaWdpbmFsIHZlcnNpb24gb2Ygc291cmNlIGNvZGUuXG4vL1xuLy8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi9tb2R1bGUuZC50c1wiLz5cblxuaW1wb3J0IHsgRnVuY3Rpb25MaXN0LCBCb29sZWFucywgQW5nbGVVbml0cywgVGltZVVuaXRzLCBXaGVyZU9wZXJhdG9ycyB9IGZyb20gJy4vLi4vanMvb3Blbkhpc3RvcmlhbkNvbnN0YW50cydcbmltcG9ydCBPcGVuSGlzdG9yaWFuRGF0YVNvdXJjZSBmcm9tICcuLi9vcGVuSGlzdG9yaWFuRGF0YXNvdXJjZSc7XHJcbmRlY2xhcmUgdmFyIF86IGFueTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgT3Blbkhpc3RvcmlhbkVsZW1lbnRQaWNrZXJDdHJse1xuICAgIGVsZW1lbnRTZWdtZW50OiBpU2VnbWVudDtcbiAgICBzZWdtZW50czogQXJyYXk8aVNlZ21lbnQ+O1xuICAgIGZ1bmN0aW9uU2VnbWVudDogaUZ1bmN0aW9uU2VnbWVudDtcbiAgICBmdW5jdGlvblNlZ21lbnRzOiBBcnJheTxpRnVuY3Rpb25TZWdtZW50PjtcbiAgICBmdW5jdGlvbnM6IEFycmF5PGlGdW5jdGlvblNlZ21lbnQ+O1xuICAgIHR5cGluZ1RpbWVyOiBOb2RlSlMuVGltZW91dDtcbiAgICB0YXJnZXQ6IGlUYXJnZXQ7XG4gICAgZGF0YXNvdXJjZTogT3Blbkhpc3RvcmlhbkRhdGFTb3VyY2U7XG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSAkc2NvcGUsIHByaXZhdGUgdWlTZWdtZW50U3J2KSB7XG4gICAgICAgIHZhciBjdHJsID0gdGhpcztcblxuICAgICAgICB0aGlzLiRzY29wZSA9ICRzY29wZTtcbiAgICAgICAgdGhpcy51aVNlZ21lbnRTcnYgPSB1aVNlZ21lbnRTcnY7XG5cbiAgICAgICAgdGhpcy5zZWdtZW50cyA9ICh0aGlzLiRzY29wZS50YXJnZXQuc2VnbWVudHMgPT0gdW5kZWZpbmVkID8gW10gOiB0aGlzLiRzY29wZS50YXJnZXQuc2VnbWVudHMubWFwKGZ1bmN0aW9uIChhKSB7IHJldHVybiBjdHJsLnVpU2VnbWVudFNydi5uZXdTZWdtZW50KHsgdmFsdWU6IGEudGV4dCwgZXhwYW5kYWJsZTogdHJ1ZSB9KSB9KSk7XG4gICAgICAgIHRoaXMuZnVuY3Rpb25TZWdtZW50cyA9ICh0aGlzLiRzY29wZS50YXJnZXQuZnVuY3Rpb25TZWdtZW50cyA9PSB1bmRlZmluZWQgPyBbXSA6IHRoaXMuJHNjb3BlLnRhcmdldC5mdW5jdGlvblNlZ21lbnRzKTtcbiAgICAgICAgdGhpcy5mdW5jdGlvbnMgPSBbXTtcbiAgICAgICAgdGhpcy5lbGVtZW50U2VnbWVudCA9IHRoaXMudWlTZWdtZW50U3J2Lm5ld1BsdXNCdXR0b24oKTtcbiAgICAgICAgdGhpcy5mdW5jdGlvblNlZ21lbnQgPSB0aGlzLnVpU2VnbWVudFNydi5uZXdQbHVzQnV0dG9uKCk7XG5cbiAgICAgICAgdGhpcy5idWlsZEZ1bmN0aW9uQXJyYXkoKTtcblxuICAgICAgICB0aGlzLnNldFRhcmdldFdpdGhFbGVtZW50cygpO1xuXG4gICAgICAgIGRlbGV0ZSAkc2NvcGUudGFyZ2V0LndoZXJlcztcbiAgICAgICAgZGVsZXRlICRzY29wZS50YXJnZXQudG9wTlNlZ21lbnQ7XG4gICAgICAgIGRlbGV0ZSAkc2NvcGUudGFyZ2V0Lm9yZGVyQnlzO1xuICAgICAgICBkZWxldGUgJHNjb3BlLnRhcmdldC53aGVyZVNlZ21lbnQ7XG4gICAgICAgIGRlbGV0ZSAkc2NvcGUudGFyZ2V0LmZpbHRlclNlZ21lbnQ7XG4gICAgICAgIGRlbGV0ZSAkc2NvcGUudGFyZ2V0Lm9yZGVyQnlTZWdtZW50O1xuICAgICAgICBkZWxldGUgJHNjb3BlLnRhcmdldC50YXJnZXRUZXh0O1xuXG4gICAgfVxuXG4gICAgZ2V0RWxlbWVudFNlZ21lbnRzKG5ld1NlZ21lbnQpIHtcbiAgICAgICAgdmFyIGN0cmwgPSB0aGlzO1xuICAgICAgICB2YXIgb3B0aW9uID0gbnVsbDtcbiAgICAgICAgaWYgKGV2ZW50LnRhcmdldFsndmFsdWUnXSAhPSBcIlwiKSBvcHRpb24gPSBldmVudC50YXJnZXRbJ3ZhbHVlJ107XG5cbiAgICAgICAgcmV0dXJuIGN0cmwuJHNjb3BlLmRhdGFzb3VyY2UubWV0cmljRmluZFF1ZXJ5KG9wdGlvbikudGhlbihkYXRhID0+IHtcbiAgICAgICAgICAgIHZhciBhbHRTZWdtZW50cyA9IF8ubWFwKGRhdGEsIGl0ZW0gPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiBjdHJsLnVpU2VnbWVudFNydi5uZXdTZWdtZW50KHsgdmFsdWU6IGl0ZW0udGV4dCwgZXhwYW5kYWJsZTogaXRlbS5leHBhbmRhYmxlIH0pXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGFsdFNlZ21lbnRzLnNvcnQoKGEsIGIpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoYS52YWx1ZSA8IGIudmFsdWUpXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAtMTtcbiAgICAgICAgICAgICAgICBpZiAoYS52YWx1ZSA+IGIudmFsdWUpXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAxO1xuICAgICAgICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIF8uZWFjaChjdHJsLiRzY29wZS5kYXRhc291cmNlLnRlbXBsYXRlU3J2LnZhcmlhYmxlcywgKGl0ZW0sIGluZGV4LCBsaXN0KSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGl0ZW0udHlwZSA9PSBcInF1ZXJ5XCIpXG4gICAgICAgICAgICAgICAgICAgIGFsdFNlZ21lbnRzLnVuc2hpZnQoY3RybC51aVNlZ21lbnRTcnYubmV3Q29uZGl0aW9uKCckJyArIGl0ZW0ubmFtZSkpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGlmICghbmV3U2VnbWVudClcbiAgICAgICAgICAgICAgICBhbHRTZWdtZW50cy51bnNoaWZ0KGN0cmwudWlTZWdtZW50U3J2Lm5ld1NlZ21lbnQoJy1SRU1PVkUtJykpO1xuXG4gICAgICAgICAgICByZXR1cm4gXy5maWx0ZXIoYWx0U2VnbWVudHMsIHNlZ21lbnQgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiBfLmZpbmQoY3RybC5zZWdtZW50cywgeCA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB4LnZhbHVlID09IHNlZ21lbnQudmFsdWVcbiAgICAgICAgICAgICAgICB9KSA9PSB1bmRlZmluZWQ7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG5cbiAgICB9XG5cbiAgICBhZGRFbGVtZW50U2VnbWVudCgpIHtcbiAgICAgICAgLy8gaWYgdmFsdWUgaXMgbm90IGVtcHR5LCBhZGQgbmV3IGF0dHJpYnV0ZSBzZWdtZW50XG4gICAgICAgIGlmIChldmVudC50YXJnZXRbJ3RleHQnXSAhPSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLnNlZ21lbnRzLnB1c2godGhpcy51aVNlZ21lbnRTcnYubmV3U2VnbWVudCh7IHZhbHVlOiBldmVudC50YXJnZXRbJ3RleHQnXSwgZXhwYW5kYWJsZTogdHJ1ZSB9KSlcbiAgICAgICAgICAgIHRoaXMuc2V0VGFyZ2V0V2l0aEVsZW1lbnRzKClcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHJlc2V0IHRoZSArIGJ1dHRvblxuICAgICAgICB2YXIgcGx1c0J1dHRvbiA9IHRoaXMudWlTZWdtZW50U3J2Lm5ld1BsdXNCdXR0b24oKVxuICAgICAgICB0aGlzLmVsZW1lbnRTZWdtZW50LnZhbHVlID0gcGx1c0J1dHRvbi52YWx1ZVxuICAgICAgICB0aGlzLmVsZW1lbnRTZWdtZW50Lmh0bWwgPSBwbHVzQnV0dG9uLmh0bWxcbiAgICAgICAgdGhpcy4kc2NvcGUucGFuZWwucmVmcmVzaCgpXG5cbiAgICB9XG5cbiAgICBzZWdtZW50VmFsdWVDaGFuZ2VkKHNlZ21lbnQsIGluZGV4KSB7XG4gICAgICAgIGlmIChzZWdtZW50LnZhbHVlID09IFwiLVJFTU9WRS1cIikge1xuICAgICAgICAgICAgdGhpcy5zZWdtZW50cy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zZWdtZW50c1tpbmRleF0gPSBzZWdtZW50O1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5zZXRUYXJnZXRXaXRoRWxlbWVudHMoKVxuICAgIH1cblxuICAgIHNldFRhcmdldFdpdGhFbGVtZW50cygpIHtcbiAgICAgICAgdmFyIGZ1bmN0aW9ucyA9ICcnO1xuICAgICAgICB2YXIgY3RybCA9IHRoaXM7XG4gICAgICAgIF8uZWFjaChjdHJsLmZ1bmN0aW9ucywgZnVuY3Rpb24gKGVsZW1lbnQsIGluZGV4LCBsaXN0KSB7XG4gICAgICAgICAgICBpZiAoZWxlbWVudC52YWx1ZSA9PSAnUVVFUlknKSBmdW5jdGlvbnMgKz0gY3RybC5zZWdtZW50cy5tYXAoZnVuY3Rpb24gKGEpIHsgcmV0dXJuIGEudmFsdWUgfSkuam9pbignOycpXG4gICAgICAgICAgICBlbHNlIGZ1bmN0aW9ucyArPSBlbGVtZW50LnZhbHVlO1xuICAgICAgICB9KTtcblxuICAgICAgICBjdHJsLiRzY29wZS50YXJnZXQudGFyZ2V0ID0gKGZ1bmN0aW9ucyAhPSBcIlwiID8gZnVuY3Rpb25zIDogY3RybC5zZWdtZW50cy5tYXAoZnVuY3Rpb24gKGEpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYS52YWx1ZVxuICAgICAgICB9KS5qb2luKCc7JykpO1xuXG4gICAgICAgIGN0cmwuJHNjb3BlLnRhcmdldC5mdW5jdGlvblNlZ21lbnRzID0gY3RybC5mdW5jdGlvblNlZ21lbnRzO1xuICAgICAgICBjdHJsLiRzY29wZS50YXJnZXQuc2VnbWVudHMgPSBjdHJsLnNlZ21lbnRzO1xuICAgICAgICBjdHJsLiRzY29wZS50YXJnZXQucXVlcnlUeXBlID0gJ0VsZW1lbnQgTGlzdCc7XG4gICAgICAgIHRoaXMuJHNjb3BlLnBhbmVsLnJlZnJlc2goKVxuXG4gICAgfVxuXG4gICAgZ2V0RnVuY3Rpb25zVG9BZGROZXcoKSB7XG4gICAgICAgIHZhciBjdHJsID0gdGhpcztcbiAgICAgICAgdmFyIGFycmF5ID0gW11cbiAgICAgICAgXy5lYWNoKE9iamVjdC5rZXlzKEZ1bmN0aW9uTGlzdCksIGZ1bmN0aW9uIChlbGVtZW50LCBpbmRleCwgbGlzdCkge1xuICAgICAgICAgICAgYXJyYXkucHVzaChjdHJsLnVpU2VnbWVudFNydi5uZXdTZWdtZW50KGVsZW1lbnQpKTtcbiAgICAgICAgfSk7XG5cblxuICAgICAgICBpZiAodGhpcy5mdW5jdGlvbnMubGVuZ3RoID09IDApIGFycmF5ID0gYXJyYXkuc2xpY2UoMiwgYXJyYXkubGVuZ3RoKTtcblxuICAgICAgICBhcnJheS5zb3J0KGZ1bmN0aW9uKGEsIGIpIHtcbiAgICAgICAgICAgIHZhciBuYW1lQSA9IGEudmFsdWUudG9VcHBlckNhc2UoKTsgLy8gaWdub3JlIHVwcGVyIGFuZCBsb3dlcmNhc2VcbiAgICAgICAgICAgIHZhciBuYW1lQiA9IGIudmFsdWUudG9VcHBlckNhc2UoKTsgLy8gaWdub3JlIHVwcGVyIGFuZCBsb3dlcmNhc2VcbiAgICAgICAgICAgIGlmKG5hbWVBIDwgbmFtZUIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gLTE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGlmIChuYW1lQSA+IG5hbWVCKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIDE7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgLy8gbmFtZXMgbXVzdCBiZSBlcXVhbFxuICAgICAgICAgICAgICByZXR1cm4gMDsgICAgICAgIFxuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKF8uZmlsdGVyKGFycmF5LCBzZWdtZW50ID0+IHtcbiAgICAgICAgICAgIHJldHVybiBfLmZpbmQodGhpcy5mdW5jdGlvbnMsIHggPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiB4LnZhbHVlID09IHNlZ21lbnQudmFsdWU7XG4gICAgICAgICAgICB9KSA9PSB1bmRlZmluZWQ7XG4gICAgICAgIH0pKTtcbiAgICB9XG5cbiAgICBnZXRGdW5jdGlvbnNUb0VkaXQoZnVuYywgaW5kZXgpOiBhbnkge1xuICAgICAgICB2YXIgY3RybCA9IHRoaXM7XG4gICAgICAgIHZhciByZW1vdmUgPSBbdGhpcy51aVNlZ21lbnRTcnYubmV3U2VnbWVudCgnLVJFTU9WRS0nKV07XG4gICAgICAgIGlmIChmdW5jLnR5cGUgPT0gJ09wZXJhdG9yJykgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuICAgICAgICBlbHNlIGlmIChmdW5jLnZhbHVlID09ICdTZXQnKSByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHJlbW92ZSlcblxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHJlbW92ZSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb25WYWx1ZUNoYW5nZWQoZnVuYywgaW5kZXgpIHtcbiAgICAgICAgdmFyIGZ1bmNTZWcgPSBGdW5jdGlvbkxpc3RbZnVuYy5GdW5jdGlvbl07XG5cbiAgICAgICAgaWYgKGZ1bmMudmFsdWUgPT0gXCItUkVNT1ZFLVwiKSB7XG4gICAgICAgICAgICB2YXIgbCA9IDE7XG4gICAgICAgICAgICB2YXIgZmkgPSBfLmZpbmRJbmRleCh0aGlzLmZ1bmN0aW9uU2VnbWVudHMsIGZ1bmN0aW9uIChzZWdtZW50KSB7IHJldHVybiBzZWdtZW50LkZ1bmN0aW9uID09IGZ1bmMuRnVuY3Rpb24gfSk7XG4gICAgICAgICAgICBpZiAoZnVuYy5GdW5jdGlvbiA9PSAnU2xpY2UnKVxuICAgICAgICAgICAgICAgIHRoaXMuZnVuY3Rpb25TZWdtZW50c1tmaSArIDFdLlBhcmFtZXRlcnMgPSB0aGlzLmZ1bmN0aW9uU2VnbWVudHNbZmkgKyAxXS5QYXJhbWV0ZXJzLnNsaWNlKDEsIHRoaXMuZnVuY3Rpb25TZWdtZW50c1tmaSArIDFdLlBhcmFtZXRlcnMubGVuZ3RoKTtcbiAgICAgICAgICAgIGVsc2UgaWYgKGZpID4gMCAmJiAodGhpcy5mdW5jdGlvblNlZ21lbnRzW2ZpIC0gMV0uRnVuY3Rpb24gPT0gJ1NldCcgfHwgdGhpcy5mdW5jdGlvblNlZ21lbnRzW2ZpIC0gMV0uRnVuY3Rpb24gPT0gJ1NsaWNlJykpIHtcbiAgICAgICAgICAgICAgICAtLWZpO1xuICAgICAgICAgICAgICAgICsrbDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5mdW5jdGlvblNlZ21lbnRzLnNwbGljZShmaSwgbCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoZnVuYy5UeXBlICE9ICdGdW5jdGlvbicpIHtcbiAgICAgICAgICAgIHZhciBmaSA9IF8uZmluZEluZGV4KHRoaXMuZnVuY3Rpb25TZWdtZW50cywgZnVuY3Rpb24gKHNlZ21lbnQpIHsgcmV0dXJuIHNlZ21lbnQuRnVuY3Rpb24gPT0gZnVuYy5GdW5jdGlvbiB9KTtcbiAgICAgICAgICAgIHRoaXMuZnVuY3Rpb25TZWdtZW50c1tmaV0uUGFyYW1ldGVyc1tmdW5jLkluZGV4XS5EZWZhdWx0ID0gZnVuYy52YWx1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuYnVpbGRGdW5jdGlvbkFycmF5KClcblxuICAgICAgICB0aGlzLnNldFRhcmdldFdpdGhFbGVtZW50cygpXG5cbiAgICB9XG5cbiAgICBhZGRGdW5jdGlvblNlZ21lbnQoKSB7XG4gICAgICAgIHZhciBmdW5jID0gRnVuY3Rpb25MaXN0W2V2ZW50LnRhcmdldFsndGV4dCddXTtcblxuICAgICAgICBpZiAoZnVuYy5GdW5jdGlvbiA9PSAnU2xpY2UnKSB7XG4gICAgICAgICAgICB0aGlzLmZ1bmN0aW9uU2VnbWVudHNbMF0uUGFyYW1ldGVycy51bnNoaWZ0KGZ1bmMuUGFyYW1ldGVyc1swXSlcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuZnVuY3Rpb25TZWdtZW50cy51bnNoaWZ0KEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoZnVuYykpKTtcbiAgICAgICAgdGhpcy5idWlsZEZ1bmN0aW9uQXJyYXkoKTtcblxuICAgICAgICAvLyByZXNldCB0aGUgKyBidXR0b25cbiAgICAgICAgdmFyIHBsdXNCdXR0b24gPSB0aGlzLnVpU2VnbWVudFNydi5uZXdQbHVzQnV0dG9uKClcbiAgICAgICAgdGhpcy5mdW5jdGlvblNlZ21lbnQudmFsdWUgPSBwbHVzQnV0dG9uLnZhbHVlXG4gICAgICAgIHRoaXMuZnVuY3Rpb25TZWdtZW50Lmh0bWwgPSBwbHVzQnV0dG9uLmh0bWxcblxuICAgICAgICB0aGlzLnNldFRhcmdldFdpdGhFbGVtZW50cygpXG4gICAgfVxuXG4gICAgYnVpbGRGdW5jdGlvbkFycmF5KCkge1xuICAgICAgICB2YXIgY3RybCA9IHRoaXM7XG4gICAgICAgIGN0cmwuZnVuY3Rpb25zID0gW107XG5cbiAgICAgICAgaWYgKHRoaXMuZnVuY3Rpb25TZWdtZW50cy5sZW5ndGggPT0gMCkgcmV0dXJuO1xuXG4gICAgICAgIF8uZWFjaChjdHJsLmZ1bmN0aW9uU2VnbWVudHMsIGZ1bmN0aW9uIChlbGVtZW50LCBpbmRleCwgbGlzdCkge1xuICAgICAgICAgICAgdmFyIG5ld0VsZW1lbnQgPSBjdHJsLnVpU2VnbWVudFNydi5uZXdTZWdtZW50KGVsZW1lbnQuRnVuY3Rpb24pXG4gICAgICAgICAgICBuZXdFbGVtZW50LlR5cGUgPSAnRnVuY3Rpb24nO1xuICAgICAgICAgICAgbmV3RWxlbWVudC5GdW5jdGlvbiA9IGVsZW1lbnQuRnVuY3Rpb247XG5cbiAgICAgICAgICAgIGN0cmwuZnVuY3Rpb25zLnB1c2gobmV3RWxlbWVudClcblxuICAgICAgICAgICAgaWYgKG5ld0VsZW1lbnQudmFsdWUgPT0gJ1NldCcgfHwgbmV3RWxlbWVudC52YWx1ZSA9PSAnU2xpY2UnKSByZXR1cm47XG5cbiAgICAgICAgICAgIHZhciBvcGVyYXRvciA9IGN0cmwudWlTZWdtZW50U3J2Lm5ld09wZXJhdG9yKCcoJyk7XG4gICAgICAgICAgICBvcGVyYXRvci5UeXBlID0gJ09wZXJhdG9yJztcbiAgICAgICAgICAgIGN0cmwuZnVuY3Rpb25zLnB1c2gob3BlcmF0b3IpO1xuXG4gICAgICAgICAgICBfLmVhY2goZWxlbWVudC5QYXJhbWV0ZXJzLCBmdW5jdGlvbiAocGFyYW0sIGksIGopIHtcbiAgICAgICAgICAgICAgICB2YXIgZCA9IGN0cmwudWlTZWdtZW50U3J2Lm5ld0Zha2UocGFyYW0uRGVmYXVsdC50b1N0cmluZygpKTtcbiAgICAgICAgICAgICAgICBkLlR5cGUgPSBwYXJhbS5UeXBlO1xuICAgICAgICAgICAgICAgIGQuRnVuY3Rpb24gPSBlbGVtZW50LkZ1bmN0aW9uO1xuICAgICAgICAgICAgICAgIGQuRGVzY3JpcHRpb24gPSBwYXJhbS5EZXNjcmlwdGlvbjtcbiAgICAgICAgICAgICAgICBkLkluZGV4ID0gaTtcbiAgICAgICAgICAgICAgICBjdHJsLmZ1bmN0aW9ucy5wdXNoKGQpO1xuXG4gICAgICAgICAgICAgICAgdmFyIG9wZXJhdG9yID0gY3RybC51aVNlZ21lbnRTcnYubmV3T3BlcmF0b3IoJywnKTtcbiAgICAgICAgICAgICAgICBvcGVyYXRvci5UeXBlID0gJ09wZXJhdG9yJztcbiAgICAgICAgICAgICAgICBjdHJsLmZ1bmN0aW9ucy5wdXNoKG9wZXJhdG9yKTtcbiAgICAgICAgICAgIH0pXG5cbiAgICAgICAgfSk7XG5cbiAgICAgICAgdmFyIHF1ZXJ5ID0gY3RybC51aVNlZ21lbnRTcnYubmV3Q29uZGl0aW9uKCdRVUVSWScpO1xuICAgICAgICBxdWVyeS5UeXBlID0gJ1F1ZXJ5JztcbiAgICAgICAgY3RybC5mdW5jdGlvbnMucHVzaChxdWVyeSk7XG5cbiAgICAgICAgZm9yICh2YXIgaSBpbiBjdHJsLmZ1bmN0aW9uU2VnbWVudHMpIHtcbiAgICAgICAgICAgIGlmIChjdHJsLmZ1bmN0aW9uU2VnbWVudHNbaV0uRnVuY3Rpb24gIT0gJ1NldCcgJiYgY3RybC5mdW5jdGlvblNlZ21lbnRzW2ldLkZ1bmN0aW9uICE9ICdTbGljZScpIHtcbiAgICAgICAgICAgICAgICB2YXIgb3BlcmF0b3IgPSBjdHJsLnVpU2VnbWVudFNydi5uZXdPcGVyYXRvcignKScpO1xuICAgICAgICAgICAgICAgIG9wZXJhdG9yLlR5cGUgPSAnT3BlcmF0b3InO1xuICAgICAgICAgICAgICAgIGN0cmwuZnVuY3Rpb25zLnB1c2gob3BlcmF0b3IpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIGdldEJvb2xlYW5zKCkge1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKEJvb2xlYW5zLm1hcCh2YWx1ZSA9PiB7IHJldHVybiB0aGlzLnVpU2VnbWVudFNydi5uZXdTZWdtZW50KHZhbHVlKSB9KSk7XG4gICAgfVxuXG4gICAgZ2V0QW5nbGVVbml0cygpIHtcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShBbmdsZVVuaXRzLm1hcCh2YWx1ZSA9PiB7IHJldHVybiB0aGlzLnVpU2VnbWVudFNydi5uZXdTZWdtZW50KHZhbHVlKSB9KSk7XG4gICAgfVxuXG4gICAgZ2V0VGltZVNlbGVjdCgpIHtcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShUaW1lVW5pdHMubWFwKHZhbHVlID0+IHsgcmV0dXJuIHRoaXMudWlTZWdtZW50U3J2Lm5ld1NlZ21lbnQodmFsdWUpIH0pKTtcbiAgICB9XG5cbiAgICBpbnB1dENoYW5nZShmdW5jLCBpbmRleCkge1xuICAgICAgICB2YXIgY3RybCA9IHRoaXM7XG4gICAgICAgIGNsZWFyVGltZW91dCh0aGlzLnR5cGluZ1RpbWVyKTtcbiAgICAgICAgdGhpcy50eXBpbmdUaW1lciA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkgeyBjdHJsLmZ1bmN0aW9uVmFsdWVDaGFuZ2VkKGZ1bmMsIGluZGV4KSB9LCAzMDAwKTtcbiAgICAgICAgZXZlbnQudGFyZ2V0Wydmb2N1cyddKCk7XG5cbiAgICB9XG5cbn0iLCIvLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuLy8gIG9wZW5IaXN0b3JpYW5GaWx0ZXJFeHByZXNzaW9uX2N0cmwudHMgLSBHYnRjXG4vL1xuLy8gIENvcHlyaWdodCDCqSAyMDE3LCBHcmlkIFByb3RlY3Rpb24gQWxsaWFuY2UuICBBbGwgUmlnaHRzIFJlc2VydmVkLlxuLy9cbi8vICBMaWNlbnNlZCB0byB0aGUgR3JpZCBQcm90ZWN0aW9uIEFsbGlhbmNlIChHUEEpIHVuZGVyIG9uZSBvciBtb3JlIGNvbnRyaWJ1dG9yIGxpY2Vuc2UgYWdyZWVtZW50cy4gU2VlXG4vLyAgdGhlIE5PVElDRSBmaWxlIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyB3b3JrIGZvciBhZGRpdGlvbmFsIGluZm9ybWF0aW9uIHJlZ2FyZGluZyBjb3B5cmlnaHQgb3duZXJzaGlwLlxuLy8gIFRoZSBHUEEgbGljZW5zZXMgdGhpcyBmaWxlIHRvIHlvdSB1bmRlciB0aGUgTUlUIExpY2Vuc2UgKE1JVCksIHRoZSBcIkxpY2Vuc2VcIjsgeW91IG1heSBub3QgdXNlIHRoaXNcbi8vICBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdDpcbi8vXG4vLyAgICAgIGh0dHA6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcbi8vXG4vLyAgVW5sZXNzIGFncmVlZCB0byBpbiB3cml0aW5nLCB0aGUgc3ViamVjdCBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhblxuLy8gIFwiQVMtSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuIFJlZmVyIHRvIHRoZVxuLy8gIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zLlxuLy9cbi8vICBDb2RlIE1vZGlmaWNhdGlvbiBIaXN0b3J5OlxuLy8gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vICAxMi8xMi8yMDE3IC0gQmlsbHkgRXJuZXN0XG4vLyAgICAgICBHZW5lcmF0ZWQgb3JpZ2luYWwgdmVyc2lvbiBvZiBzb3VyY2UgY29kZS5cbi8vXG4vLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL21vZHVsZS5kLnRzXCIvPlxuXG5pbXBvcnQgeyBGdW5jdGlvbkxpc3QsIEJvb2xlYW5zLCBBbmdsZVVuaXRzLCBUaW1lVW5pdHMsIFdoZXJlT3BlcmF0b3JzIH0gZnJvbSAnLi8uLi9qcy9vcGVuSGlzdG9yaWFuQ29uc3RhbnRzJ1xuXG5pbXBvcnQgT3Blbkhpc3RvcmlhbkRhdGFTb3VyY2UgZnJvbSAnLi4vb3Blbkhpc3RvcmlhbkRhdGFzb3VyY2UnO1xyXG5pbXBvcnQgeyBQYW5lbEN0cmwgfSBmcm9tICdncmFmYW5hLXNkay1tb2Nrcy9hcHAvcGx1Z2lucy9zZGsnO1xyXG5pbXBvcnQgeyBRdWVyeUN0cmwgfSBmcm9tICdncmFmYW5hLXNkay1tb2Nrcy9hcHAvcGx1Z2lucy9zZGsnO1xyXG5kZWNsYXJlIHZhciBfOiBhbnk7XG5kZWNsYXJlIHZhciAkOiBhbnk7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE9wZW5IaXN0b3JpYW5GaWx0ZXJFeHByZXNzaW9uQ3RybCB7XG4gICAgd2hlcmVzOiBBcnJheTxpU2VnbWVudD47XG4gICAgZnVuY3Rpb25TZWdtZW50czogQXJyYXk8aUZ1bmN0aW9uU2VnbWVudD47XG4gICAgdG9wTlNlZ21lbnQ6IG51bWJlcjtcbiAgICBmdW5jdGlvbnM6IEFycmF5PGlGdW5jdGlvblNlZ21lbnQ+O1xuICAgIG9yZGVyQnlzOiBBcnJheTxpU2VnbWVudD47XG4gICAgd2hlcmVTZWdtZW50OiBpU2VnbWVudDtcbiAgICBmaWx0ZXJTZWdtZW50OiBpU2VnbWVudDtcbiAgICBvcmRlckJ5U2VnbWVudDogaVNlZ21lbnQ7XG4gICAgZnVuY3Rpb25TZWdtZW50OiBpRnVuY3Rpb25TZWdtZW50O1xuICAgIHR5cGluZ1RpbWVyOiBOb2RlSlMuVGltZW91dDtcbiAgICB0YXJnZXQ6IGlUYXJnZXQ7XG4gICAgZGF0YXNvdXJjZTogT3Blbkhpc3RvcmlhbkRhdGFTb3VyY2U7XG4gICAgcGFuZWxDdHJsOiBQYW5lbEN0cmw7XG4gICAgJHNjb3BlOiBhbnk7XG4gICAgY29uc3RydWN0b3IoJHNjb3BlLCAkaW5qZWN0b3IsIHByaXZhdGUgdWlTZWdtZW50U3J2OiBhbnkpIHtcbiAgICAgICAgdGhpcy51aVNlZ21lbnRTcnYgPSB1aVNlZ21lbnRTcnY7XG4gICAgICAgIHRoaXMuJHNjb3BlID0gJHNjb3BlO1xuICAgICAgICB0aGlzLnRhcmdldCA9ICRzY29wZS50YXJnZXQ7XG4gICAgICAgIHRoaXMuZGF0YXNvdXJjZSA9ICRzY29wZS5kYXRhc291cmNlO1xuICAgICAgICB0aGlzLnBhbmVsQ3RybCA9ICRzY29wZS5wYW5lbDtcblxuICAgICAgICB2YXIgY3RybCA9IHRoaXM7XG5cbiAgICAgICAgdGhpcy53aGVyZXMgPSAodGhpcy50YXJnZXQud2hlcmVzID09IHVuZGVmaW5lZCA/IFtdIDogdGhpcy50YXJnZXQud2hlcmVzLm1hcChmdW5jdGlvbiAoYSkge1xuICAgICAgICAgICAgaWYgKGEudHlwZSA9PSAnb3BlcmF0b3InKSByZXR1cm4gY3RybC51aVNlZ21lbnRTcnYubmV3T3BlcmF0b3IoYS50ZXh0KTtcbiAgICAgICAgICAgIGVsc2UgaWYgKGEudHlwZSA9PSAnY29uZGl0aW9uJykgcmV0dXJuIGN0cmwudWlTZWdtZW50U3J2Lm5ld0NvbmRpdGlvbihhLnRleHQpO1xuICAgICAgICAgICAgZWxzZSByZXR1cm4gY3RybC51aVNlZ21lbnRTcnYubmV3U2VnbWVudChhLnZhbHVlKTtcbiAgICAgICAgfSkpO1xuICAgICAgICB0aGlzLmZ1bmN0aW9uU2VnbWVudHMgPSAodGhpcy50YXJnZXQuZnVuY3Rpb25TZWdtZW50cyA9PSB1bmRlZmluZWQgPyBbXSA6IHRoaXMudGFyZ2V0LmZ1bmN0aW9uU2VnbWVudHMpO1xuICAgICAgICB0aGlzLnRvcE5TZWdtZW50ID0gKHRoaXMudGFyZ2V0LnRvcE5TZWdtZW50ID09IHVuZGVmaW5lZCA/IG51bGwgOiB0aGlzLnRhcmdldC50b3BOU2VnbWVudCk7XG4gICAgICAgIHRoaXMuZnVuY3Rpb25zID0gW107XG4gICAgICAgIHRoaXMub3JkZXJCeXMgPSAodGhpcy50YXJnZXQub3JkZXJCeXMgPT0gdW5kZWZpbmVkID8gW10gOiB0aGlzLnRhcmdldC5vcmRlckJ5cy5tYXAoZnVuY3Rpb24gKGEpIHtcbiAgICAgICAgICAgIGlmIChhLnR5cGUgPT0gJ2NvbmRpdGlvbicpXG4gICAgICAgICAgICAgICAgcmV0dXJuIGN0cmwudWlTZWdtZW50U3J2Lm5ld0NvbmRpdGlvbihhLnZhbHVlKTtcbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICByZXR1cm4gY3RybC51aVNlZ21lbnRTcnYubmV3U2VnbWVudChhLnZhbHVlKTtcbiAgICAgICAgfSkpO1xuICAgICAgICB0aGlzLndoZXJlU2VnbWVudCA9IHRoaXMudWlTZWdtZW50U3J2Lm5ld1BsdXNCdXR0b24oKTtcbiAgICAgICAgdGhpcy5maWx0ZXJTZWdtZW50ID0gKHRoaXMudGFyZ2V0LmZpbHRlclNlZ21lbnQgPT0gdW5kZWZpbmVkID8gdGhpcy51aVNlZ21lbnRTcnYubmV3U2VnbWVudCgnQWN0aXZlTWVhc3VyZW1lbnRzJykgOiB0aGlzLnVpU2VnbWVudFNydi5uZXdTZWdtZW50KHRoaXMudGFyZ2V0LmZpbHRlclNlZ21lbnQudmFsdWUpKTtcbiAgICAgICAgdGhpcy5vcmRlckJ5U2VnbWVudCA9IHRoaXMudWlTZWdtZW50U3J2Lm5ld1BsdXNCdXR0b24oKTtcbiAgICAgICAgdGhpcy5mdW5jdGlvblNlZ21lbnQgPSB0aGlzLnVpU2VnbWVudFNydi5uZXdQbHVzQnV0dG9uKCk7XG4gICAgICAgIHRoaXMudHlwaW5nVGltZXI7XG5cbiAgICAgICAgZGVsZXRlICRzY29wZS50YXJnZXQuc2VnbWVudHM7XG4gICAgICAgIGRlbGV0ZSAkc2NvcGUudGFyZ2V0LnRhcmdldFRleHQ7XG4gICAgICAgIHRoaXMuc2V0VGFyZ2V0V2l0aFF1ZXJ5KClcbiAgICB9XG5cblxuICAgIHNldFRhcmdldFdpdGhRdWVyeSgpIHtcbiAgICAgICAgaWYgKHRoaXMud2hlcmVzLmxlbmd0aCA9PSAwKSB7XG4gICAgICAgICAgICB0aGlzLnRhcmdldC50YXJnZXQgPSAnJztcbiAgICAgICAgICAgIHRoaXMucGFuZWxDdHJsLnJlZnJlc2goKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGZpbHRlciA9IHRoaXMuZmlsdGVyU2VnbWVudC52YWx1ZSArICcgJztcbiAgICAgICAgdmFyIHRvcG4gPSAodGhpcy50b3BOU2VnbWVudCA/ICdUT1AgJyArIHRoaXMudG9wTlNlZ21lbnQgKyAnICcgOiAnJyk7XG4gICAgICAgIHZhciB3aGVyZSA9ICdXSEVSRSAnO1xuXG4gICAgICAgIF8uZWFjaCh0aGlzLndoZXJlcywgZnVuY3Rpb24gKGVsZW1lbnQsIGluZGV4LCBsaXN0KSB7XG4gICAgICAgICAgICB3aGVyZSArPSBlbGVtZW50LnZhbHVlICsgJyAnXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHZhciBvcmRlcmJ5ID0gJyc7XG4gICAgICAgIF8uZWFjaCh0aGlzLm9yZGVyQnlzLCBmdW5jdGlvbiAoZWxlbWVudCwgaW5kZXgsIGxpc3QpIHtcbiAgICAgICAgICAgIG9yZGVyYnkgKz0gKGluZGV4ID09IDAgPyAnT1JERVIgQlkgJyA6ICcnKSArIGVsZW1lbnQudmFsdWUgKyAoZWxlbWVudC50eXBlID09ICdjb25kaXRpb24nICYmIGluZGV4IDwgbGlzdC5sZW5ndGggLSAxID8gJywnIDogJycpICsgJyAnO1xuICAgICAgICB9KTtcblxuICAgICAgICB2YXIgcXVlcnkgPSAnRklMVEVSICcgKyB0b3BuICsgZmlsdGVyICsgd2hlcmUgKyBvcmRlcmJ5O1xuICAgICAgICB2YXIgZnVuY3Rpb25zID0gJyc7XG5cbiAgICAgICAgXy5lYWNoKHRoaXMuZnVuY3Rpb25zLCBmdW5jdGlvbiAoZWxlbWVudCwgaW5kZXgsIGxpc3QpIHtcbiAgICAgICAgICAgIGlmIChlbGVtZW50LnZhbHVlID09ICdRVUVSWScpIGZ1bmN0aW9ucyArPSBxdWVyeTtcbiAgICAgICAgICAgIGVsc2UgZnVuY3Rpb25zICs9IGVsZW1lbnQudmFsdWU7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMudGFyZ2V0LnRhcmdldCA9IChmdW5jdGlvbnMgIT0gXCJcIiA/IGZ1bmN0aW9ucyA6IHF1ZXJ5KTtcbiAgICAgICAgdGhpcy50YXJnZXQudG9wTlNlZ21lbnQgPSB0aGlzLnRvcE5TZWdtZW50O1xuICAgICAgICB0aGlzLnRhcmdldC5maWx0ZXJTZWdtZW50ID0gdGhpcy5maWx0ZXJTZWdtZW50O1xuICAgICAgICB0aGlzLnRhcmdldC5vcmRlckJ5cyA9IHRoaXMub3JkZXJCeXM7XG4gICAgICAgIHRoaXMudGFyZ2V0LndoZXJlcyA9IHRoaXMud2hlcmVzO1xuICAgICAgICB0aGlzLnRhcmdldC5mdW5jdGlvblNlZ21lbnRzID0gdGhpcy5mdW5jdGlvblNlZ21lbnRzO1xuICAgICAgICB0aGlzLnRhcmdldC5xdWVyeVR5cGUgPSAnRmlsdGVyIEV4cHJlc3Npb24nO1xuICAgICAgICB0aGlzLnBhbmVsQ3RybC5yZWZyZXNoKClcblxuICAgIH1cblxuICAgIC8vICNyZWdpb24gVE9QIE5cbiAgICB0b3BOVmFsdWVDaGFuZ2VkKCkge1xuICAgICAgICB2YXIgY3RybCA9IHRoaXM7XG5cbiAgICAgICAgY2xlYXJUaW1lb3V0KGN0cmwudHlwaW5nVGltZXIpO1xuICAgICAgICBjdHJsLnR5cGluZ1RpbWVyID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7IGN0cmwuc2V0VGFyZ2V0V2l0aFF1ZXJ5KCkgfSwgMTAwMCk7XG4gICAgICAgIGV2ZW50LnRhcmdldFsnZm9jdXMnXSgpO1xuXG4gICAgfVxuICAgIC8vICNlbmRyZWdpb25cblxuICAgIC8vICNyZWdpb24gV2hlcmVzXG4gICAgZ2V0V2hlcmVzVG9FZGl0KHdoZXJlLCBpbmRleCkge1xuXG4gICAgICAgIGlmICh3aGVyZS50eXBlID09PSAnb3BlcmF0b3InKSB7XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHRoaXMudWlTZWdtZW50U3J2Lm5ld09wZXJhdG9ycyhXaGVyZU9wZXJhdG9ycykpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHdoZXJlLnR5cGUgPT09ICd2YWx1ZScpIHtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUobnVsbCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAod2hlcmUudHlwZSA9PT0gJ2NvbmRpdGlvbicpIHtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoW3RoaXMudWlTZWdtZW50U3J2Lm5ld0NvbmRpdGlvbignQU5EJyksIHRoaXMudWlTZWdtZW50U3J2Lm5ld0NvbmRpdGlvbignT1InKV0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZGF0YXNvdXJjZS53aGVyZUZpbmRRdWVyeSh0aGlzLmZpbHRlclNlZ21lbnQudmFsdWUpLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgICAgICAgICAgdmFyIGFsdFNlZ21lbnRzID0gXy5tYXAoZGF0YSwgaXRlbSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnVpU2VnbWVudFNydi5uZXdTZWdtZW50KHsgdmFsdWU6IGl0ZW0udGV4dCwgZXhwYW5kYWJsZTogaXRlbS5leHBhbmRhYmxlIH0pXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgYWx0U2VnbWVudHMuc29ydCgoYSwgYikgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoYS52YWx1ZSA8IGIudmFsdWUpXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gLTE7XG4gICAgICAgICAgICAgICAgICAgIGlmIChhLnZhbHVlID4gYi52YWx1ZSlcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAxO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBhbHRTZWdtZW50cy51bnNoaWZ0KHRoaXMudWlTZWdtZW50U3J2Lm5ld1NlZ21lbnQoJy1SRU1PVkUtJykpO1xuICAgICAgICAgICAgICAgIHJldHVybiBhbHRTZWdtZW50cztcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICB3aGVyZVZhbHVlQ2hhbmdlZCh3aGVyZSwgaW5kZXgpIHtcblxuICAgICAgICBpZiAod2hlcmUudmFsdWUgPT0gXCItUkVNT1ZFLVwiKSB7XG4gICAgICAgICAgICBpZiAoaW5kZXggPT0gMCAmJiB0aGlzLndoZXJlcy5sZW5ndGggPiAzICYmIHRoaXMud2hlcmVzW2luZGV4ICsgM10udHlwZSA9PSAnY29uZGl0aW9uJylcbiAgICAgICAgICAgICAgICB0aGlzLndoZXJlcy5zcGxpY2UoaW5kZXgsIDQpXG4gICAgICAgICAgICBlbHNlIGlmIChpbmRleCA+IDAgJiYgdGhpcy53aGVyZXNbaW5kZXggLSAxXS50eXBlID09ICdjb25kaXRpb24nKVxuICAgICAgICAgICAgICAgIHRoaXMud2hlcmVzLnNwbGljZShpbmRleCAtIDEsIDQpXG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgdGhpcy53aGVyZXMuc3BsaWNlKGluZGV4LCAzKVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHdoZXJlLnR5cGUgPT0gJ29wZXJhdG9yJylcbiAgICAgICAgICAgIHRoaXMud2hlcmVzW2luZGV4XSA9IHRoaXMudWlTZWdtZW50U3J2Lm5ld09wZXJhdG9yKHdoZXJlLnZhbHVlKVxuICAgICAgICBlbHNlIGlmICh3aGVyZS50eXBlID09ICdjb25kaXRpb24nKVxuICAgICAgICAgICAgdGhpcy53aGVyZXNbaW5kZXhdID0gdGhpcy51aVNlZ21lbnRTcnYubmV3Q29uZGl0aW9uKHdoZXJlLnZhbHVlKVxuICAgICAgICBlbHNlIGlmICh3aGVyZS50eXBlID09ICd2YWx1ZScgJiYgISQuaXNOdW1lcmljKHdoZXJlLnZhbHVlKSAmJiB3aGVyZS52YWx1ZS50b1VwcGVyQ2FzZSgpICE9ICdOVUxMJylcbiAgICAgICAgICAgIHRoaXMud2hlcmVzW2luZGV4XSA9IHRoaXMudWlTZWdtZW50U3J2Lm5ld1NlZ21lbnQoXCInXCIgKyB3aGVyZS52YWx1ZSArIFwiJ1wiKTtcblxuICAgICAgICB0aGlzLnNldFRhcmdldFdpdGhRdWVyeSgpO1xuICAgIH1cblxuICAgIGdldFdoZXJlc1RvQWRkTmV3KCkge1xuICAgICAgICB2YXIgY3RybCA9IHRoaXM7XG4gICAgICAgIHJldHVybiB0aGlzLmRhdGFzb3VyY2Uud2hlcmVGaW5kUXVlcnkoY3RybC5maWx0ZXJTZWdtZW50LnZhbHVlKS50aGVuKGRhdGEgPT4ge1xuICAgICAgICAgICAgdmFyIGFsdFNlZ21lbnRzID0gXy5tYXAoZGF0YSwgaXRlbSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGN0cmwudWlTZWdtZW50U3J2Lm5ld1NlZ21lbnQoeyB2YWx1ZTogaXRlbS50ZXh0LCBleHBhbmRhYmxlOiBpdGVtLmV4cGFuZGFibGUgfSlcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgYWx0U2VnbWVudHMuc29ydCgoYSwgYikgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChhLnZhbHVlIDwgYi52YWx1ZSlcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgICAgICAgICAgIGlmIChhLnZhbHVlID4gYi52YWx1ZSlcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDE7XG4gICAgICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiBhbHRTZWdtZW50c1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBhZGRXaGVyZSgpIHtcbiAgICAgICAgaWYgKHRoaXMud2hlcmVzLmxlbmd0aCA+IDApXG4gICAgICAgICAgICB0aGlzLndoZXJlcy5wdXNoKHRoaXMudWlTZWdtZW50U3J2Lm5ld0NvbmRpdGlvbignQU5EJykpO1xuXG4gICAgICAgIHRoaXMud2hlcmVzLnB1c2godGhpcy51aVNlZ21lbnRTcnYubmV3U2VnbWVudChldmVudC50YXJnZXRbJ3RleHQnXSkpO1xuICAgICAgICB0aGlzLndoZXJlcy5wdXNoKHRoaXMudWlTZWdtZW50U3J2Lm5ld09wZXJhdG9yKCdOT1QgTElLRScpKTtcbiAgICAgICAgdGhpcy53aGVyZXMucHVzaCh0aGlzLnVpU2VnbWVudFNydi5uZXdGYWtlKFwiJydcIiwgJ3ZhbHVlJywgJ3F1ZXJ5LXNlZ21lbnQtdmFsdWUnKSk7XG5cbiAgICAgICAgLy8gcmVzZXQgdGhlICsgYnV0dG9uXG4gICAgICAgIHZhciBwbHVzQnV0dG9uID0gdGhpcy51aVNlZ21lbnRTcnYubmV3UGx1c0J1dHRvbigpXG4gICAgICAgIHRoaXMud2hlcmVTZWdtZW50LnZhbHVlID0gcGx1c0J1dHRvbi52YWx1ZVxuICAgICAgICB0aGlzLndoZXJlU2VnbWVudC5odG1sID0gcGx1c0J1dHRvbi5odG1sXG4gICAgICAgIHRoaXMuc2V0VGFyZ2V0V2l0aFF1ZXJ5KCk7XG5cbiAgICB9XG5cbiAgICAvLyAjZW5kcmVnaW9uXG5cbiAgICAvLyAjcmVnaW9uIEZpbHRlcnNcbiAgICBnZXRGaWx0ZXJUb0VkaXQoKSB7XG4gICAgICAgIHZhciBjdHJsID0gdGhpcztcbiAgICAgICAgcmV0dXJuIHRoaXMuZGF0YXNvdXJjZS5maWx0ZXJGaW5kUXVlcnkoKS50aGVuKGRhdGEgPT4ge1xuICAgICAgICAgICAgdmFyIGFsdFNlZ21lbnRzID0gXy5tYXAoZGF0YSwgaXRlbSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGN0cmwudWlTZWdtZW50U3J2Lm5ld1NlZ21lbnQoeyB2YWx1ZTogaXRlbS50ZXh0LCBleHBhbmRhYmxlOiBpdGVtLmV4cGFuZGFibGUgfSlcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgYWx0U2VnbWVudHMuc29ydCgoYSwgYikgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChhLnZhbHVlIDwgYi52YWx1ZSlcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgICAgICAgICAgIGlmIChhLnZhbHVlID4gYi52YWx1ZSlcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDE7XG4gICAgICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgcmV0dXJuIGFsdFNlZ21lbnRzO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBmaWx0ZXJWYWx1ZUNoYW5nZWQoKSB7XG4gICAgICAgIC8vdGhpcy50YXJnZXQucG9saWN5ID0gdGhpcy50b3BOU2VnbWVudDtcbiAgICAgICAgdGhpcy5vcmRlckJ5U2VnbWVudCA9IHRoaXMudWlTZWdtZW50U3J2Lm5ld1BsdXNCdXR0b24oKTtcbiAgICAgICAgdGhpcy53aGVyZXMgPSBbXTtcbiAgICAgICAgdGhpcy5zZXRUYXJnZXRXaXRoUXVlcnkoKTtcblxuICAgICAgICB0aGlzLnBhbmVsQ3RybC5yZWZyZXNoKCk7XG4gICAgfVxuXG4gICAgLy8gI2VuZHJlZ2lvblxuXG4gICAgLy8gI3JlZ2lvbiBPcmRlckJ5c1xuICAgIGdldE9yZGVyQnlzVG9BZGROZXcoKSB7XG4gICAgICAgIHZhciBjdHJsID0gdGhpcztcbiAgICAgICAgcmV0dXJuIHRoaXMuZGF0YXNvdXJjZS5vcmRlckJ5RmluZFF1ZXJ5KGN0cmwuZmlsdGVyU2VnbWVudC52YWx1ZSkudGhlbihkYXRhID0+IHtcbiAgICAgICAgICAgIHZhciBhbHRTZWdtZW50cyA9IF8ubWFwKGRhdGEsIGl0ZW0gPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiBjdHJsLnVpU2VnbWVudFNydi5uZXdTZWdtZW50KHsgdmFsdWU6IGl0ZW0udGV4dCwgZXhwYW5kYWJsZTogaXRlbS5leHBhbmRhYmxlIH0pXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGFsdFNlZ21lbnRzLnNvcnQoKGEsIGIpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoYS52YWx1ZSA8IGIudmFsdWUpXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAtMTtcbiAgICAgICAgICAgICAgICBpZiAoYS52YWx1ZSA+IGIudmFsdWUpXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAxO1xuICAgICAgICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHJldHVybiBfLmZpbHRlcihhbHRTZWdtZW50cywgc2VnbWVudCA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF8uZmluZChjdHJsLm9yZGVyQnlzLCB4ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHgudmFsdWUgPT0gc2VnbWVudC52YWx1ZVxuICAgICAgICAgICAgICAgIH0pID09IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBnZXRPcmRlckJ5c1RvRWRpdChvcmRlckJ5KSB7XG4gICAgICAgIHZhciBjdHJsID0gdGhpcztcbiAgICAgICAgaWYgKG9yZGVyQnkudHlwZSA9PSAnY29uZGl0aW9uJykgcmV0dXJuIFByb21pc2UucmVzb2x2ZShbdGhpcy51aVNlZ21lbnRTcnYubmV3Q29uZGl0aW9uKCdBU0MnKSwgdGhpcy51aVNlZ21lbnRTcnYubmV3Q29uZGl0aW9uKCdERVNDJyldKTtcbiAgICAgICAgaWYgKG9yZGVyQnkudHlwZSA9PSAnY29uZGl0aW9uJykgcmV0dXJuIFByb21pc2UucmVzb2x2ZShbdGhpcy51aVNlZ21lbnRTcnYubmV3Q29uZGl0aW9uKCdBU0MnKSwgdGhpcy51aVNlZ21lbnRTcnYubmV3Q29uZGl0aW9uKCdERVNDJyldKTtcblxuICAgICAgICByZXR1cm4gdGhpcy5kYXRhc291cmNlLm9yZGVyQnlGaW5kUXVlcnkoY3RybC5maWx0ZXJTZWdtZW50LnZhbHVlKS50aGVuKGRhdGEgPT4ge1xuICAgICAgICAgICAgdmFyIGFsdFNlZ21lbnRzID0gXy5tYXAoZGF0YSwgaXRlbSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGN0cmwudWlTZWdtZW50U3J2Lm5ld1NlZ21lbnQoeyB2YWx1ZTogaXRlbS50ZXh0LCBleHBhbmRhYmxlOiBpdGVtLmV4cGFuZGFibGUgfSlcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgYWx0U2VnbWVudHMuc29ydCgoYSwgYikgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChhLnZhbHVlIDwgYi52YWx1ZSlcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgICAgICAgICAgIGlmIChhLnZhbHVlID4gYi52YWx1ZSlcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDE7XG4gICAgICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgaWYgKG9yZGVyQnkudHlwZSAhPT0gJ3BsdXMtYnV0dG9uJylcbiAgICAgICAgICAgICAgICBhbHRTZWdtZW50cy51bnNoaWZ0KHRoaXMudWlTZWdtZW50U3J2Lm5ld1NlZ21lbnQoJy1SRU1PVkUtJykpO1xuXG4gICAgICAgICAgICByZXR1cm4gXy5maWx0ZXIoYWx0U2VnbWVudHMsIHNlZ21lbnQgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiBfLmZpbmQoY3RybC5vcmRlckJ5cywgeCA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB4LnZhbHVlID09IHNlZ21lbnQudmFsdWVcbiAgICAgICAgICAgICAgICB9KSA9PSB1bmRlZmluZWQ7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgYWRkT3JkZXJCeSgpIHtcbiAgICAgICAgdGhpcy5vcmRlckJ5cy5wdXNoKHRoaXMudWlTZWdtZW50U3J2Lm5ld1NlZ21lbnQoZXZlbnQudGFyZ2V0Wyd0ZXh0J10pKTtcbiAgICAgICAgdGhpcy5vcmRlckJ5cy5wdXNoKHRoaXMudWlTZWdtZW50U3J2Lm5ld0NvbmRpdGlvbignQVNDJykpO1xuXG4gICAgICAgIC8vIHJlc2V0IHRoZSArIGJ1dHRvblxuICAgICAgICB2YXIgcGx1c0J1dHRvbiA9IHRoaXMudWlTZWdtZW50U3J2Lm5ld1BsdXNCdXR0b24oKVxuICAgICAgICB0aGlzLm9yZGVyQnlTZWdtZW50LnZhbHVlID0gcGx1c0J1dHRvbi52YWx1ZVxuICAgICAgICB0aGlzLm9yZGVyQnlTZWdtZW50Lmh0bWwgPSBwbHVzQnV0dG9uLmh0bWxcblxuICAgICAgICB0aGlzLnNldFRhcmdldFdpdGhRdWVyeSgpO1xuICAgIH1cblxuXG4gICAgb3JkZXJCeVZhbHVlQ2hhbmdlZChvcmRlckJ5LCBpbmRleCkge1xuICAgICAgICBpZiAoZXZlbnQudGFyZ2V0Wyd0ZXh0J10gPT0gXCItUkVNT1ZFLVwiKVxuICAgICAgICAgICAgdGhpcy5vcmRlckJ5cy5zcGxpY2UoaW5kZXgsIDIpO1xuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGlmIChvcmRlckJ5LnR5cGUgPT0gJ2NvbmRpdGlvbicpXG4gICAgICAgICAgICAgICAgdGhpcy5vcmRlckJ5c1tpbmRleF0gPSB0aGlzLnVpU2VnbWVudFNydi5uZXdDb25kaXRpb24oZXZlbnQudGFyZ2V0Wyd0ZXh0J10pO1xuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgIHRoaXMub3JkZXJCeXNbaW5kZXhdID0gdGhpcy51aVNlZ21lbnRTcnYubmV3U2VnbWVudChldmVudC50YXJnZXRbJ3RleHQnXSk7XG5cbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNldFRhcmdldFdpdGhRdWVyeSgpO1xuXG4gICAgfVxuXG4gICAgLy8gI2VuZHJlZ2lvblxuXG4gICAgLy8gI3JlZ2lvbiBGdW5jdGlvbnNcbiAgICBnZXRGdW5jdGlvbnNUb0FkZE5ldygpIHtcbiAgICAgICAgdmFyIGN0cmwgPSB0aGlzO1xuICAgICAgICB2YXIgYXJyYXkgPSBbXVxuICAgICAgICBfLmVhY2goT2JqZWN0LmtleXMoRnVuY3Rpb25MaXN0KSwgZnVuY3Rpb24gKGVsZW1lbnQsIGluZGV4LCBsaXN0KSB7XG4gICAgICAgICAgICBhcnJheS5wdXNoKGN0cmwudWlTZWdtZW50U3J2Lm5ld1NlZ21lbnQoZWxlbWVudCkpO1xuICAgICAgICB9KTtcblxuICAgICAgICBpZiAodGhpcy5mdW5jdGlvbnMubGVuZ3RoID09IDApIGFycmF5ID0gYXJyYXkuc2xpY2UoMiwgYXJyYXkubGVuZ3RoKTtcblxuICAgICAgICBhcnJheS5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICAgICAgICB2YXIgbmFtZUEgPSBhLnZhbHVlLnRvVXBwZXJDYXNlKCk7IC8vIGlnbm9yZSB1cHBlciBhbmQgbG93ZXJjYXNlXG4gICAgICAgICAgICB2YXIgbmFtZUIgPSBiLnZhbHVlLnRvVXBwZXJDYXNlKCk7IC8vIGlnbm9yZSB1cHBlciBhbmQgbG93ZXJjYXNlXG4gICAgICAgICAgICBpZiAobmFtZUEgPCBuYW1lQikge1xuICAgICAgICAgICAgICAgIHJldHVybiAtMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChuYW1lQSA+IG5hbWVCKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIDE7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIG5hbWVzIG11c3QgYmUgZXF1YWxcbiAgICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKF8uZmlsdGVyKGFycmF5LCBzZWdtZW50ID0+IHtcbiAgICAgICAgICAgIHJldHVybiBfLmZpbmQodGhpcy5mdW5jdGlvbnMsIHggPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiB4LnZhbHVlID09IHNlZ21lbnQudmFsdWU7XG4gICAgICAgICAgICB9KSA9PSB1bmRlZmluZWQ7XG4gICAgICAgIH0pKTtcbiAgICB9XG5cbiAgICBnZXRGdW5jdGlvbnNUb0VkaXQoZnVuYywgaW5kZXgpOiBhbnkge1xuICAgICAgICB2YXIgY3RybCA9IHRoaXM7XG4gICAgICAgIHZhciByZW1vdmUgPSBbdGhpcy51aVNlZ21lbnRTcnYubmV3U2VnbWVudCgnLVJFTU9WRS0nKV07XG4gICAgICAgIGlmIChmdW5jLnR5cGUgPT0gJ09wZXJhdG9yJykgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuICAgICAgICBlbHNlIGlmIChmdW5jLnZhbHVlID09ICdTZXQnKSByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHJlbW92ZSlcblxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHJlbW92ZSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb25WYWx1ZUNoYW5nZWQoZnVuYywgaW5kZXgpIHtcbiAgICAgICAgdmFyIGZ1bmNTZWcgPSBGdW5jdGlvbkxpc3RbZnVuYy5GdW5jdGlvbl07XG5cbiAgICAgICAgaWYgKGZ1bmMudmFsdWUgPT0gXCItUkVNT1ZFLVwiKSB7XG4gICAgICAgICAgICB2YXIgbCA9IDE7XG4gICAgICAgICAgICB2YXIgZmkgPSBfLmZpbmRJbmRleCh0aGlzLmZ1bmN0aW9uU2VnbWVudHMsIGZ1bmN0aW9uIChzZWdtZW50KSB7IHJldHVybiBzZWdtZW50LkZ1bmN0aW9uID09IGZ1bmMuRnVuY3Rpb24gfSk7XG4gICAgICAgICAgICBpZiAoZnVuYy5GdW5jdGlvbiA9PSAnU2xpY2UnKVxuICAgICAgICAgICAgICAgIHRoaXMuZnVuY3Rpb25TZWdtZW50c1tmaSArIDFdLlBhcmFtZXRlcnMgPSB0aGlzLmZ1bmN0aW9uU2VnbWVudHNbZmkgKyAxXS5QYXJhbWV0ZXJzLnNsaWNlKDEsIHRoaXMuZnVuY3Rpb25TZWdtZW50c1tmaSArIDFdLlBhcmFtZXRlcnMubGVuZ3RoKTtcbiAgICAgICAgICAgIGVsc2UgaWYgKGZpID4gMCAmJiAodGhpcy5mdW5jdGlvblNlZ21lbnRzW2ZpIC0gMV0uRnVuY3Rpb24gPT0gJ1NldCcgfHwgdGhpcy5mdW5jdGlvblNlZ21lbnRzW2ZpIC0gMV0uRnVuY3Rpb24gPT0gJ1NsaWNlJykpIHtcbiAgICAgICAgICAgICAgICAtLWZpO1xuICAgICAgICAgICAgICAgICsrbDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5mdW5jdGlvblNlZ21lbnRzLnNwbGljZShmaSwgbCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoZnVuYy5UeXBlICE9ICdGdW5jdGlvbicpIHtcbiAgICAgICAgICAgIHZhciBmaSA9IF8uZmluZEluZGV4KHRoaXMuZnVuY3Rpb25TZWdtZW50cywgZnVuY3Rpb24gKHNlZ21lbnQpIHsgcmV0dXJuIHNlZ21lbnQuRnVuY3Rpb24gPT0gZnVuYy5GdW5jdGlvbiB9KTtcbiAgICAgICAgICAgIHRoaXMuZnVuY3Rpb25TZWdtZW50c1tmaV0uUGFyYW1ldGVyc1tmdW5jLkluZGV4XS5EZWZhdWx0ID0gZnVuYy52YWx1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuYnVpbGRGdW5jdGlvbkFycmF5KClcbiAgICAgICAgdGhpcy5zZXRUYXJnZXRXaXRoUXVlcnkoKTtcblxuICAgIH1cblxuICAgIGFkZEZ1bmN0aW9uU2VnbWVudCgpIHtcbiAgICAgICAgdmFyIGZ1bmMgPSBGdW5jdGlvbkxpc3RbZXZlbnQudGFyZ2V0Wyd0ZXh0J11dO1xuXG4gICAgICAgIGlmIChmdW5jLkZ1bmN0aW9uID09ICdTbGljZScpIHtcbiAgICAgICAgICAgIHRoaXMuZnVuY3Rpb25TZWdtZW50c1swXS5QYXJhbWV0ZXJzLnVuc2hpZnQoZnVuYy5QYXJhbWV0ZXJzWzBdKVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5mdW5jdGlvblNlZ21lbnRzLnVuc2hpZnQoSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShmdW5jKSkpO1xuICAgICAgICB0aGlzLmJ1aWxkRnVuY3Rpb25BcnJheSgpO1xuXG4gICAgICAgIC8vIHJlc2V0IHRoZSArIGJ1dHRvblxuICAgICAgICB2YXIgcGx1c0J1dHRvbiA9IHRoaXMudWlTZWdtZW50U3J2Lm5ld1BsdXNCdXR0b24oKVxuICAgICAgICB0aGlzLmZ1bmN0aW9uU2VnbWVudC52YWx1ZSA9IHBsdXNCdXR0b24udmFsdWVcbiAgICAgICAgdGhpcy5mdW5jdGlvblNlZ21lbnQuaHRtbCA9IHBsdXNCdXR0b24uaHRtbFxuXG4gICAgICAgIHRoaXMuc2V0VGFyZ2V0V2l0aFF1ZXJ5KCk7XG4gICAgfVxuXG4gICAgYnVpbGRGdW5jdGlvbkFycmF5KCkge1xuICAgICAgICB2YXIgY3RybCA9IHRoaXM7XG4gICAgICAgIGN0cmwuZnVuY3Rpb25zID0gW107XG5cbiAgICAgICAgaWYgKHRoaXMuZnVuY3Rpb25TZWdtZW50cy5sZW5ndGggPT0gMCkgcmV0dXJuO1xuXG4gICAgICAgIF8uZWFjaChjdHJsLmZ1bmN0aW9uU2VnbWVudHMsIGZ1bmN0aW9uIChlbGVtZW50OiBpRnVuY3Rpb25TZWdtZW50LCBpbmRleCwgbGlzdCkge1xuICAgICAgICAgICAgdmFyIG5ld0VsZW1lbnQgPSBjdHJsLnVpU2VnbWVudFNydi5uZXdTZWdtZW50KGVsZW1lbnQuRnVuY3Rpb24pXG4gICAgICAgICAgICBuZXdFbGVtZW50LlR5cGUgPSAnRnVuY3Rpb24nO1xuICAgICAgICAgICAgbmV3RWxlbWVudC5GdW5jdGlvbiA9IGVsZW1lbnQuRnVuY3Rpb247XG5cbiAgICAgICAgICAgIGN0cmwuZnVuY3Rpb25zLnB1c2gobmV3RWxlbWVudClcblxuICAgICAgICAgICAgaWYgKG5ld0VsZW1lbnQudmFsdWUgPT0gJ1NldCcgfHwgbmV3RWxlbWVudC52YWx1ZSA9PSAnU2xpY2UnKSByZXR1cm47XG5cbiAgICAgICAgICAgIHZhciBvcGVyYXRvciA9IGN0cmwudWlTZWdtZW50U3J2Lm5ld09wZXJhdG9yKCcoJyk7XG4gICAgICAgICAgICBvcGVyYXRvci5UeXBlID0gJ09wZXJhdG9yJztcbiAgICAgICAgICAgIGN0cmwuZnVuY3Rpb25zLnB1c2gob3BlcmF0b3IpO1xuXG4gICAgICAgICAgICBfLmVhY2goZWxlbWVudC5QYXJhbWV0ZXJzLCBmdW5jdGlvbiAocGFyYW0sIGksIGopIHtcbiAgICAgICAgICAgICAgICB2YXIgZCA9IGN0cmwudWlTZWdtZW50U3J2Lm5ld0Zha2UocGFyYW0uRGVmYXVsdC50b1N0cmluZygpKTtcbiAgICAgICAgICAgICAgICBkLlR5cGUgPSBwYXJhbS5UeXBlO1xuICAgICAgICAgICAgICAgIGQuRnVuY3Rpb24gPSBlbGVtZW50LkZ1bmN0aW9uO1xuICAgICAgICAgICAgICAgIGQuRGVzY3JpcHRpb24gPSBwYXJhbS5EZXNjcmlwdGlvbjtcbiAgICAgICAgICAgICAgICBkLkluZGV4ID0gaTtcbiAgICAgICAgICAgICAgICBjdHJsLmZ1bmN0aW9ucy5wdXNoKGQpO1xuXG4gICAgICAgICAgICAgICAgdmFyIG9wZXJhdG9yID0gY3RybC51aVNlZ21lbnRTcnYubmV3T3BlcmF0b3IoJywnKTtcbiAgICAgICAgICAgICAgICBvcGVyYXRvci5UeXBlID0gJ09wZXJhdG9yJztcbiAgICAgICAgICAgICAgICBjdHJsLmZ1bmN0aW9ucy5wdXNoKG9wZXJhdG9yKTtcbiAgICAgICAgICAgIH0pXG5cbiAgICAgICAgfSk7XG5cbiAgICAgICAgdmFyIHF1ZXJ5ID0gY3RybC51aVNlZ21lbnRTcnYubmV3Q29uZGl0aW9uKCdRVUVSWScpO1xuICAgICAgICBxdWVyeS5UeXBlID0gJ1F1ZXJ5JztcbiAgICAgICAgY3RybC5mdW5jdGlvbnMucHVzaChxdWVyeSk7XG5cbiAgICAgICAgZm9yICh2YXIgaSBpbiBjdHJsLmZ1bmN0aW9uU2VnbWVudHMpIHtcbiAgICAgICAgICAgIGlmIChjdHJsLmZ1bmN0aW9uU2VnbWVudHNbaV0uRnVuY3Rpb24gIT0gJ1NldCcgJiYgY3RybC5mdW5jdGlvblNlZ21lbnRzW2ldLkZ1bmN0aW9uICE9ICdTbGljZScpIHtcbiAgICAgICAgICAgICAgICB2YXIgb3BlcmF0b3IgPSBjdHJsLnVpU2VnbWVudFNydi5uZXdPcGVyYXRvcignKScpO1xuICAgICAgICAgICAgICAgIG9wZXJhdG9yLlR5cGUgPSAnT3BlcmF0b3InO1xuICAgICAgICAgICAgICAgIGN0cmwuZnVuY3Rpb25zLnB1c2gob3BlcmF0b3IpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIGdldEJvb2xlYW5zKCkge1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKEJvb2xlYW5zLm1hcCh2YWx1ZSA9PiB7IHJldHVybiB0aGlzLnVpU2VnbWVudFNydi5uZXdTZWdtZW50KHZhbHVlKSB9KSk7XG4gICAgfVxuXG4gICAgZ2V0QW5nbGVVbml0cygpIHtcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShBbmdsZVVuaXRzLm1hcCh2YWx1ZSA9PiB7IHJldHVybiB0aGlzLnVpU2VnbWVudFNydi5uZXdTZWdtZW50KHZhbHVlKSB9KSk7XG4gICAgfVxuXG4gICAgZ2V0VGltZVNlbGVjdCgpIHtcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShUaW1lVW5pdHMubWFwKHZhbHVlID0+IHsgcmV0dXJuIHRoaXMudWlTZWdtZW50U3J2Lm5ld1NlZ21lbnQodmFsdWUpIH0pKTtcbiAgICB9XG5cbiAgICBpbnB1dENoYW5nZShmdW5jLCBpbmRleCkge1xuICAgICAgICB2YXIgY3RybCA9IHRoaXM7XG4gICAgICAgIGNsZWFyVGltZW91dCh0aGlzLnR5cGluZ1RpbWVyKTtcbiAgICAgICAgdGhpcy50eXBpbmdUaW1lciA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkgeyBjdHJsLmZ1bmN0aW9uVmFsdWVDaGFuZ2VkKGZ1bmMsIGluZGV4KSB9LCAzMDAwKTtcbiAgICAgICAgZXZlbnQudGFyZ2V0Wydmb2N1cyddKCk7XG5cbiAgICB9XG5cbiAgLy8gI2VuZHJlZ2lvblxuXG5cbn0iLCIvLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4vLyAgcXVlcnlPcHRpb25zX2N0cmwuanMgLSBHYnRjXHJcbi8vXHJcbi8vICBDb3B5cmlnaHQg77+9IDIwMTcsIEdyaWQgUHJvdGVjdGlvbiBBbGxpYW5jZS4gIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbi8vXHJcbi8vICBMaWNlbnNlZCB0byB0aGUgR3JpZCBQcm90ZWN0aW9uIEFsbGlhbmNlIChHUEEpIHVuZGVyIG9uZSBvciBtb3JlIGNvbnRyaWJ1dG9yIGxpY2Vuc2UgYWdyZWVtZW50cy4gU2VlXHJcbi8vICB0aGUgTk9USUNFIGZpbGUgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIHdvcmsgZm9yIGFkZGl0aW9uYWwgaW5mb3JtYXRpb24gcmVnYXJkaW5nIGNvcHlyaWdodCBvd25lcnNoaXAuXHJcbi8vICBUaGUgR1BBIGxpY2Vuc2VzIHRoaXMgZmlsZSB0byB5b3UgdW5kZXIgdGhlIE1JVCBMaWNlbnNlIChNSVQpLCB0aGUgXCJMaWNlbnNlXCI7IHlvdSBtYXkgbm90IHVzZSB0aGlzXHJcbi8vICBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdDpcclxuLy9cclxuLy8gICAgICBodHRwOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXHJcbi8vXHJcbi8vICBVbmxlc3MgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHRoZSBzdWJqZWN0IHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuXHJcbi8vICBcIkFTLUlTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLiBSZWZlciB0byB0aGVcclxuLy8gIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zLlxyXG4vL1xyXG4vLyAgQ29kZSBNb2RpZmljYXRpb24gSGlzdG9yeTpcclxuLy8gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gIDEwLzMxLzIwMTcgLSBCaWxseSBFcm5lc3RcclxuLy8gICAgICAgR2VuZXJhdGVkIG9yaWdpbmFsIHZlcnNpb24gb2Ygc291cmNlIGNvZGUuXHJcbi8vXHJcbi8vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbmRlY2xhcmUgdmFyIF86IGFueTtcclxuaW1wb3J0IHsgRGVmYXVsdEZsYWdzIH0gZnJvbSAnLi8uLi9qcy9vcGVuSGlzdG9yaWFuQ29uc3RhbnRzJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgT3Blbkhpc3RvcmlhblF1ZXJ5T3B0aW9uc0N0cmx7XHJcbiAgICBkYXRhRmxhZ3M6IGFueTtcclxuICAgIHJldHVybjogYW55O1xyXG4gICAgZmxhZ0FycmF5OiBBcnJheTxhbnk+O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgJHNjb3BlLHByaXZhdGUgJGNvbXBpbGUpIHtcclxuXHJcbiAgICAgICAgdGhpcy4kc2NvcGUgPSAkc2NvcGU7XHJcbiAgICAgICAgdmFyIHZhbHVlID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSgkc2NvcGUucmV0dXJuKSk7XHJcblxyXG4gICAgICAgIHRoaXMuZGF0YUZsYWdzID0gdGhpcy5oZXgyZmxhZ3MocGFyc2VJbnQodmFsdWUuRXhjbHVkZWQpKTtcclxuICAgICAgICB0aGlzLmRhdGFGbGFnc1snTm9ybWFsJ10uVmFsdWUgPSB2YWx1ZS5Ob3JtYWw7XHJcblxyXG4gICAgICAgIHRoaXMucmV0dXJuID0gJHNjb3BlLnJldHVybjtcclxuXHJcbiAgICAgICAgdGhpcy5mbGFnQXJyYXkgPSBfLm1hcChPYmplY3Qua2V5cyh0aGlzLmRhdGFGbGFncyksIGEgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4geyBrZXk6IGEsIG9yZGVyOiB0aGlzLmRhdGFGbGFnc1thXS5PcmRlciB9O1xyXG4gICAgICAgIH0pLnNvcnQoKGEsIGIpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIGEub3JkZXIgLSBiLm9yZGVyO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBjYWxjdWxhdGVGbGFncyhmbGFnKSB7XHJcbiAgICAgICAgdmFyIGN0cmwgPSB0aGlzO1xyXG4gICAgICAgIHZhciBmbGFnVmFyRXhjbHVkZWQgPSBjdHJsLnJldHVybi5FeGNsdWRlZDtcclxuXHJcbiAgICAgICAgaWYgKGZsYWcgPT0gJ1NlbGVjdCBBbGwnKSB7XHJcbiAgICAgICAgICAgIF8uZWFjaChPYmplY3Qua2V5cyhjdHJsLmRhdGFGbGFncyksIGZ1bmN0aW9uIChrZXksIGluZGV4LCBsaXN0KSB7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYoa2V5ID09IFwiTm9ybWFsXCIpIFxyXG4gICAgICAgICAgICAgICAgICAgIGN0cmwuZGF0YUZsYWdzW2tleV0uVmFsdWUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGVsc2UgXHJcbiAgICAgICAgICAgICAgICAgICAgY3RybC5kYXRhRmxhZ3Nba2V5XS5WYWx1ZSA9IGN0cmwuZGF0YUZsYWdzWydTZWxlY3QgQWxsJ10uVmFsdWU7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgaWYgKGN0cmwuZGF0YUZsYWdzWydTZWxlY3QgQWxsJ10uVmFsdWUpIFxyXG4gICAgICAgICAgICAgICAgZmxhZ1ZhckV4Y2x1ZGVkID0gMHhGRkZGRkZGRjtcclxuICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgZmxhZ1ZhckV4Y2x1ZGVkID0gMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGN0cmwuZGF0YUZsYWdzWydTZWxlY3QgQWxsJ10uVmFsdWUgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgICAgIGZsYWdWYXJFeGNsdWRlZCBePSBjdHJsLmRhdGFGbGFnc1tmbGFnXS5GbGFnO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY3RybC5yZXR1cm4uRXhjbHVkZWQgPSBmbGFnVmFyRXhjbHVkZWQ7XHJcbiAgICAgICAgY3RybC5yZXR1cm4uTm9ybWFsID0gY3RybC5kYXRhRmxhZ3NbJ05vcm1hbCddLlZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIFxyXG4gICAgaGV4MmZsYWdzKGhleCl7XHJcbiAgICAgICAgdmFyIGN0cmwgPSB0aGlzO1xyXG4gICAgICAgIHZhciBmbGFnID0gaGV4O1xyXG4gICAgICAgIHZhciBmbGFncyA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoRGVmYXVsdEZsYWdzKSk7XHJcblxyXG4gICAgICAgIF8uZWFjaChPYmplY3Qua2V5cyhmbGFncyksIGZ1bmN0aW9uIChrZXksIGluZGV4LCBsaXN0KSB7XHJcbiAgICAgICAgICAgIGlmIChrZXkgPT0gJ1NlbGVjdCBBbGwnKSByZXR1cm47XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBmbGFnc1trZXldLlZhbHVlID0gKGZsYWdzW2tleV0uRmxhZyAmIGZsYWcpICE9IDBcclxuICAgICAgICB9KTtcclxuICAgICAgICBcclxuICAgICAgICByZXR1cm4gZmxhZ3M7XHJcbiAgICB9XHJcbn1cclxuIiwiLy8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbi8vICBxdWVyeV9jdHJsLmpzIC0gR2J0Y1xuLy9cbi8vICBDb3B5cmlnaHQg77+9IDIwMTcsIEdyaWQgUHJvdGVjdGlvbiBBbGxpYW5jZS4gIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4vL1xuLy8gIExpY2Vuc2VkIHRvIHRoZSBHcmlkIFByb3RlY3Rpb24gQWxsaWFuY2UgKEdQQSkgdW5kZXIgb25lIG9yIG1vcmUgY29udHJpYnV0b3IgbGljZW5zZSBhZ3JlZW1lbnRzLiBTZWVcbi8vICB0aGUgTk9USUNFIGZpbGUgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIHdvcmsgZm9yIGFkZGl0aW9uYWwgaW5mb3JtYXRpb24gcmVnYXJkaW5nIGNvcHlyaWdodCBvd25lcnNoaXAuXG4vLyAgVGhlIEdQQSBsaWNlbnNlcyB0aGlzIGZpbGUgdG8geW91IHVuZGVyIHRoZSBNSVQgTGljZW5zZSAoTUlUKSwgdGhlIFwiTGljZW5zZVwiOyB5b3UgbWF5IG5vdCB1c2UgdGhpc1xuLy8gIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0OlxuLy9cbi8vICAgICAgaHR0cDovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxuLy9cbi8vICBVbmxlc3MgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHRoZSBzdWJqZWN0IHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuXG4vLyAgXCJBUy1JU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4gUmVmZXIgdG8gdGhlXG4vLyAgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmQgbGltaXRhdGlvbnMuXG4vL1xuLy8gIENvZGUgTW9kaWZpY2F0aW9uIEhpc3Rvcnk6XG4vLyAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gIDExLzAyLzIwMTcgLSBCaWxseSBFcm5lc3Rcbi8vICAgICAgIEdlbmVyYXRlZCBvcmlnaW5hbCB2ZXJzaW9uIG9mIHNvdXJjZSBjb2RlLlxuLy9cbi8vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG5cbmltcG9ydCB7IFF1ZXJ5Q3RybCB9IGZyb20gJy4uL25vZGVfbW9kdWxlcy9ncmFmYW5hLXNkay1tb2Nrcy9hcHAvcGx1Z2lucy9zZGsnXG5pbXBvcnQgJy4vLi4vY3NzL3F1ZXJ5LWVkaXRvci5jc3MnXG5kZWNsYXJlIHZhciBfOiBhbnk7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE9wZW5IaXN0b3JpYW5EYXRhU291cmNlUXVlcnlDdHJsIGV4dGVuZHMgUXVlcnlDdHJse1xuICAgIHN0YXRpYyB0ZW1wbGF0ZVVybCA9ICdwYXJ0aWFsL3F1ZXJ5LmVkaXRvci5odG1sJztcblxuICAgIHF1ZXJ5VHlwZXM6IEFycmF5PHN0cmluZz47XG4gICAgcXVlcnlUeXBlOiBzdHJpbmc7XG4gICAgcXVlcnlPcHRpb25zT3BlbjogYm9vbGVhbjtcblxuICAgIGNvbnN0cnVjdG9yKCRzY29wZSwgJGluamVjdG9yLCBwcml2YXRlIHVpU2VnbWVudFNydixwcml2YXRlIHRlbXBsYXRlU3J2LHByaXZhdGUgJGNvbXBpbGUpIHtcbiAgICAgICAgc3VwZXIoJHNjb3BlLCAkaW5qZWN0b3IpO1xuXG4gICAgICAgIHRoaXMuJHNjb3BlID0gJHNjb3BlO1xuICAgICAgICB0aGlzLiRjb21waWxlID0gJGNvbXBpbGU7XG5cbiAgICAgICAgdmFyIGN0cmwgPSB0aGlzO1xuICAgICAgICB0aGlzLnVpU2VnbWVudFNydiA9IHVpU2VnbWVudFNydjtcblxuICAgICAgICB0aGlzLnF1ZXJ5VHlwZXMgPSBbXG4gICAgICAgICAgICBcIkVsZW1lbnQgTGlzdFwiLCBcIkZpbHRlciBFeHByZXNzaW9uXCIsIFwiVGV4dCBFZGl0b3JcIlxuICAgICAgICBdO1xuXG4gICAgICAgIHRoaXMucXVlcnlUeXBlID0gKHRoaXMudGFyZ2V0LnF1ZXJ5VHlwZSA9PSB1bmRlZmluZWQgPyBcIkVsZW1lbnQgTGlzdFwiIDogdGhpcy50YXJnZXQucXVlcnlUeXBlKTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMucXVlcnlPcHRpb25zT3BlbiA9IGZhbHNlO1xuXG4gICAgICAgIGlmKGN0cmwudGFyZ2V0LnF1ZXJ5T3B0aW9ucyA9PSB1bmRlZmluZWQpIFxuICAgICAgICAgICAgY3RybC50YXJnZXQucXVlcnlPcHRpb25zID0ge0V4Y2x1ZGVkOiBjdHJsLmRhdGFzb3VyY2Uub3B0aW9ucy5leGNsdWRlZERhdGFGbGFncywgTm9ybWFsOiBjdHJsLmRhdGFzb3VyY2Uub3B0aW9ucy5leGNsdWRlTm9ybWFsRGF0YX07XG4gICAgfVxuXG4gICAgdG9nZ2xlUXVlcnlPcHRpb25zKCl7XG4gICAgICAgIHRoaXMucXVlcnlPcHRpb25zT3BlbiA9ICF0aGlzLnF1ZXJ5T3B0aW9uc09wZW47XG4gICAgfVxuXG4gIG9uQ2hhbmdlSW50ZXJuYWwoKSB7XG4gICAgdGhpcy5wYW5lbEN0cmwucmVmcmVzaCgpOyAvLyBBc2tzIHRoZSBwYW5lbCB0byByZWZyZXNoIGRhdGEuXG4gIH1cblxuICAvLyB1c2VkIHRvIGNoYW5nZSB0aGUgcXVlcnkgdHlwZSBmcm9tIGVsZW1lbnQgbGlzdCB0byBmaWx0ZXIgZXhwcmVzc2lvblxuICBjaGFuZ2VRdWVyeVR5cGUoKSB7XG4gICAgICBpZiAodGhpcy5xdWVyeVR5cGUgPT0gJ1RleHQgRWRpdG9yJykge1xuICAgICAgICAgIHRoaXMudGFyZ2V0LnRhcmdldFRleHQgPSB0aGlzLnRhcmdldC50YXJnZXQ7XG4gICAgICB9XG4gICAgICBlbHNle1xuICAgICAgICAgIHRoaXMudGFyZ2V0LnRhcmdldCA9ICcnO1xuICAgICAgICAgIGRlbGV0ZSB0aGlzLnRhcmdldC5mdW5jdGlvblNlZ21lbnRzXG4gICAgICB9XG4gIH1cblxufVxuXG5cbiIsIi8vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4vLyAgb3Blbkhpc3RvcmlhblRleHRFZGl0b3IudHMgLSBHYnRjXG4vL1xuLy8gIENvcHlyaWdodCDCqSAyMDE3LCBHcmlkIFByb3RlY3Rpb24gQWxsaWFuY2UuICBBbGwgUmlnaHRzIFJlc2VydmVkLlxuLy9cbi8vICBMaWNlbnNlZCB0byB0aGUgR3JpZCBQcm90ZWN0aW9uIEFsbGlhbmNlIChHUEEpIHVuZGVyIG9uZSBvciBtb3JlIGNvbnRyaWJ1dG9yIGxpY2Vuc2UgYWdyZWVtZW50cy4gU2VlXG4vLyAgdGhlIE5PVElDRSBmaWxlIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyB3b3JrIGZvciBhZGRpdGlvbmFsIGluZm9ybWF0aW9uIHJlZ2FyZGluZyBjb3B5cmlnaHQgb3duZXJzaGlwLlxuLy8gIFRoZSBHUEEgbGljZW5zZXMgdGhpcyBmaWxlIHRvIHlvdSB1bmRlciB0aGUgTUlUIExpY2Vuc2UgKE1JVCksIHRoZSBcIkxpY2Vuc2VcIjsgeW91IG1heSBub3QgdXNlIHRoaXNcbi8vICBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdDpcbi8vXG4vLyAgICAgIGh0dHA6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcbi8vXG4vLyAgVW5sZXNzIGFncmVlZCB0byBpbiB3cml0aW5nLCB0aGUgc3ViamVjdCBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhblxuLy8gIFwiQVMtSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuIFJlZmVyIHRvIHRoZVxuLy8gIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zLlxuLy9cbi8vICBDb2RlIE1vZGlmaWNhdGlvbiBIaXN0b3J5OlxuLy8gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vICAxMi8xMi8yMDE3IC0gQmlsbHkgRXJuZXN0XG4vLyAgICAgICBHZW5lcmF0ZWQgb3JpZ2luYWwgdmVyc2lvbiBvZiBzb3VyY2UgY29kZS5cbi8vXG4vLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuaW1wb3J0IHsgUGFuZWxDdHJsIH0gZnJvbSBcImdyYWZhbmEtc2RrLW1vY2tzL2FwcC9wbHVnaW5zL3Nka1wiO1xyXG5cbmRlY2xhcmUgdmFyIF86IGFueTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgT3Blbkhpc3RvcmlhblRleHRFZGl0b3JDdHJse1xuICAgIHRhcmdldFRleHQ6IHN0cmluZztcbiAgICB0YXJnZXQ6IGlUYXJnZXQ7XG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSAkc2NvcGU6IHt0YXJnZXQ6IGlUYXJnZXQsIHRoaXN0YXJnZXRUZXh0OiBzdHJpbmcsIHBhbmVsOiBQYW5lbEN0cmx9LCBwcml2YXRlIHRlbXBsYXRlU3J2KSB7XG5cbiAgICAgICAgdGhpcy4kc2NvcGUgPSAkc2NvcGU7XG4gICAgICAgIHRoaXMudGFyZ2V0VGV4dCA9ICgkc2NvcGUudGFyZ2V0LnRhcmdldFRleHQgPT0gdW5kZWZpbmVkID8gJycgOiAkc2NvcGUudGFyZ2V0LnRhcmdldFRleHQpO1xuXG4gICAgICAgIHRoaXMuc2V0VGFyZ2V0V2l0aFRleHQoKTtcblxuICAgICAgICBkZWxldGUgJHNjb3BlLnRhcmdldC5zZWdtZW50cztcbiAgICAgICAgZGVsZXRlICRzY29wZS50YXJnZXQuZnVuY3Rpb25TZWdtZW50cztcbiAgICAgICAgZGVsZXRlICRzY29wZS50YXJnZXQud2hlcmVzO1xuICAgICAgICBkZWxldGUgJHNjb3BlLnRhcmdldC50b3BOU2VnbWVudDtcbiAgICAgICAgZGVsZXRlICRzY29wZS50YXJnZXQuZnVuY3Rpb25zO1xuICAgICAgICBkZWxldGUgJHNjb3BlLnRhcmdldC5vcmRlckJ5cztcbiAgICAgICAgZGVsZXRlICRzY29wZS50YXJnZXQud2hlcmVTZWdtZW50O1xuICAgICAgICBkZWxldGUgJHNjb3BlLnRhcmdldC5maWx0ZXJTZWdtZW50O1xuICAgICAgICBkZWxldGUgJHNjb3BlLnRhcmdldC5vcmRlckJ5U2VnbWVudDtcbiAgICAgICAgZGVsZXRlICRzY29wZS50YXJnZXQuZnVuY3Rpb25TZWdtZW50O1xuICAgIH1cblxuICAgIHNldFRhcmdldFdpdGhUZXh0KCkge1xuICAgICAgICB0aGlzLiRzY29wZS50YXJnZXQudGFyZ2V0VGV4dCA9IHRoaXMudGFyZ2V0VGV4dDtcbiAgICAgICAgdGhpcy4kc2NvcGUudGFyZ2V0LnRhcmdldCA9IHRoaXMudGFyZ2V0VGV4dDtcbiAgICAgICAgdGhpcy4kc2NvcGUudGFyZ2V0LnF1ZXJ5VHlwZSA9ICdUZXh0IEVkaXRvcic7XG4gICAgICAgIHRoaXMuJHNjb3BlLnBhbmVsLnJlZnJlc2goKTsgLy8gQXNrcyB0aGUgcGFuZWwgdG8gcmVmcmVzaCBkYXRhLlxuICAgIH1cblxufSIsInZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9xdWVyeS1lZGl0b3IuY3NzXCIpO1xuXG5pZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbn1cblxudmFyIG9wdGlvbnMgPSB7fVxuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZiAoY29udGVudC5sb2NhbHMpIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbn1cbiIsIi8vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4vLyAgY29uc3RhbnRzLmpzIC0gR2J0Y1xuLy9cbi8vICBDb3B5cmlnaHQgwqkgMjAxNywgR3JpZCBQcm90ZWN0aW9uIEFsbGlhbmNlLiAgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbi8vXG4vLyAgTGljZW5zZWQgdG8gdGhlIEdyaWQgUHJvdGVjdGlvbiBBbGxpYW5jZSAoR1BBKSB1bmRlciBvbmUgb3IgbW9yZSBjb250cmlidXRvciBsaWNlbnNlIGFncmVlbWVudHMuIFNlZVxuLy8gIHRoZSBOT1RJQ0UgZmlsZSBkaXN0cmlidXRlZCB3aXRoIHRoaXMgd29yayBmb3IgYWRkaXRpb25hbCBpbmZvcm1hdGlvbiByZWdhcmRpbmcgY29weXJpZ2h0IG93bmVyc2hpcC5cbi8vICBUaGUgR1BBIGxpY2Vuc2VzIHRoaXMgZmlsZSB0byB5b3UgdW5kZXIgdGhlIE1JVCBMaWNlbnNlIChNSVQpLCB0aGUgXCJMaWNlbnNlXCI7IHlvdSBtYXkgbm90IHVzZSB0aGlzXG4vLyAgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXQ6XG4vL1xuLy8gICAgICBodHRwOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXG4vL1xuLy8gIFVubGVzcyBhZ3JlZWQgdG8gaW4gd3JpdGluZywgdGhlIHN1YmplY3Qgc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW5cbi8vICBcIkFTLUlTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLiBSZWZlciB0byB0aGVcbi8vICBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9ucy5cbi8vXG4vLyAgQ29kZSBNb2RpZmljYXRpb24gSGlzdG9yeTpcbi8vICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyAgMTEvMDEvMjAxNyAtIEJpbGx5IEVybmVzdFxuLy8gICAgICAgR2VuZXJhdGVkIG9yaWdpbmFsIHZlcnNpb24gb2Ygc291cmNlIGNvZGUuXG4vL1xuLy8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcblxuLy8gI3JlZ2lvbiBDb25zdGFudHNcbmV4cG9ydCBjb25zdCBEZWZhdWx0RmxhZ3MgPSB7XG4gICAgJ1NlbGVjdCBBbGwnOiB7IFZhbHVlOiBmYWxzZSwgT3JkZXI6IC0xLCBGbGFnOiAwIH0sXG4gICAgTm9ybWFsOiB7IFZhbHVlOiBmYWxzZSwgT3JkZXI6IDAsIEZsYWc6IDAgIH0sXG4gICAgQmFkRGF0YTogeyBWYWx1ZTogZmFsc2UsIE9yZGVyOiAxLCBGbGFnOiAxIDw8IDAgIH0sXG4gICAgU3VzcGVjdERhdGE6IHsgVmFsdWU6IGZhbHNlLCBPcmRlcjogMiwgRmxhZzogMSA8PCAxIH0sXG4gICAgT3ZlclJhbmdlRXJyb3I6IHsgVmFsdWU6IGZhbHNlLCBPcmRlcjogMywgRmxhZzogMSA8PCAyIH0sXG4gICAgVW5kZXJSYW5nZUVycm9yOiB7IFZhbHVlOiBmYWxzZSwgT3JkZXI6IDQsIEZsYWc6IDEgPDwgMyB9LFxuICAgIEFsYXJtSGlnaDogeyBWYWx1ZTogZmFsc2UsIE9yZGVyOiA1LCBGbGFnOiAxIDw8IDQgfSxcbiAgICBBbGFybUxvdzogeyBWYWx1ZTogZmFsc2UsIE9yZGVyOiA2LCBGbGFnOiAxIDw8IDUgfSxcbiAgICBXYXJuaW5nSGlnaDogeyBWYWx1ZTogZmFsc2UsIE9yZGVyOiA3LCBGbGFnOiAxIDw8IDYgfSxcbiAgICBXYXJuaW5nTG93OiB7IFZhbHVlOiBmYWxzZSwgT3JkZXI6IDgsIEZsYWc6IDEgPDwgNyB9LFxuICAgIEZsYXRsaW5lQWxhcm06IHsgVmFsdWU6IGZhbHNlLCBPcmRlcjogOSwgRmxhZzogMSA8PCA4IH0sXG4gICAgQ29tcGFyaXNvbkFsYXJtOiB7IFZhbHVlOiBmYWxzZSwgT3JkZXI6IDEwLCBGbGFnOiAxIDw8IDkgfSxcbiAgICBST0NBbGFybTogeyBWYWx1ZTogZmFsc2UsIE9yZGVyOiAxMSwgRmxhZzogMSA8PCAxMCB9LFxuICAgIFJlY2VpdmVkQXNCYWQ6IHsgVmFsdWU6IGZhbHNlLCBPcmRlcjogMTIsIEZsYWc6IDEgPDwgMTEgfSxcbiAgICBDYWxjdWxhdGVkVmFsdWU6IHsgVmFsdWU6IGZhbHNlLCBPcmRlcjogMTMsIEZsYWc6IDEgPDwgMTIgfSxcbiAgICBDYWxjdWxhdGlvbkVycm9yOiB7IFZhbHVlOiBmYWxzZSwgT3JkZXI6IDE0LCBGbGFnOiAxIDw8IDEzIH0sXG4gICAgQ2FsY3VsYXRpb25XYXJuaW5nOiB7IFZhbHVlOiBmYWxzZSwgT3JkZXI6IDE1LCBGbGFnOiAxIDw8IDE0IH0sXG4gICAgUmVzZXJ2ZWRRdWFsaXR5RmxhZzogeyBWYWx1ZTogZmFsc2UsIE9yZGVyOiAxNiwgRmxhZzogMSA8PCAxNSB9LFxuICAgIEJhZFRpbWU6IHsgVmFsdWU6IGZhbHNlLCBPcmRlcjogMTcsIEZsYWc6IDEgPDwgMTYgfSxcbiAgICBTdXNwZWN0VGltZTogeyBWYWx1ZTogZmFsc2UsIE9yZGVyOiAxOCwgRmxhZzogMSA8PCAxNyB9LFxuICAgIExhdGVUaW1lQWxhcm06IHsgVmFsdWU6IGZhbHNlLCBPcmRlcjogMTksIEZsYWc6IDEgPDwgMTggfSxcbiAgICBGdXR1cmVUaW1lQWxhcm06IHsgVmFsdWU6IGZhbHNlLCBPcmRlcjogMjAsIEZsYWc6IDEgPDwgMTkgfSxcbiAgICBVcFNhbXBsZWQ6IHsgVmFsdWU6IGZhbHNlLCBPcmRlcjogMjEsIEZsYWc6IDEgPDwgMjAgfSxcbiAgICBEb3duU2FtcGxlZDogeyBWYWx1ZTogZmFsc2UsIE9yZGVyOiAyMiwgRmxhZzogMSA8PCAyMSB9LFxuICAgIERpc2NhcmRlZFZhbHVlOiB7IFZhbHVlOiBmYWxzZSwgT3JkZXI6IDIzLCBGbGFnOiAxIDw8IDIyIH0sXG4gICAgUmVzZXJ2ZWRUaW1lRmxhZzogeyBWYWx1ZTogZmFsc2UsIE9yZGVyOiAyNCwgRmxhZzogMSA8PCAyMyB9LFxuICAgIFVzZXJEZWZpbmVkRmxhZzE6IHsgVmFsdWU6IGZhbHNlLCBPcmRlcjogMjUsIEZsYWc6IDEgPDwgMjQgfSxcbiAgICBVc2VyRGVmaW5lZEZsYWcyOiB7IFZhbHVlOiBmYWxzZSwgT3JkZXI6IDI2LCBGbGFnOiAxIDw8IDI1IH0sXG4gICAgVXNlckRlZmluZWRGbGFnMzogeyBWYWx1ZTogZmFsc2UsIE9yZGVyOiAyNywgRmxhZzogMSA8PCAyNiB9LFxuICAgIFVzZXJEZWZpbmVkRmxhZzQ6IHsgVmFsdWU6IGZhbHNlLCBPcmRlcjogMjgsIEZsYWc6IDEgPDwgMjcgfSxcbiAgICBVc2VyRGVmaW5lZEZsYWc1OiB7IFZhbHVlOiBmYWxzZSwgT3JkZXI6IDI5LCBGbGFnOiAxIDw8IDI4IH0sXG4gICAgU3lzdGVtRXJyb3I6IHsgVmFsdWU6IGZhbHNlLCBPcmRlcjogMzAsIEZsYWc6IDEgPDwgMjkgfSxcbiAgICBTeXN0ZW1XYXJuaW5nOiB7IFZhbHVlOiBmYWxzZSwgT3JkZXI6IDMxLCBGbGFnOiAxIDw8IDMwIH0sXG4gICAgTWVhc3VyZW1lbnRFcnJvcjogeyBWYWx1ZTogZmFsc2UsIE9yZGVyOiAzMiwgRmxhZzogMSA8PCAzMSB9XG59XG5cbmV4cG9ydCBjb25zdCBGdW5jdGlvbkxpc3QgPSB7XG4gICAgU2V0OiB7IEZ1bmN0aW9uOiAnU2V0JywgUGFyYW1ldGVyczogW10gfSxcbiAgICBTbGljZTogeyBGdW5jdGlvbjogJ1NsaWNlJywgUGFyYW1ldGVyczogW3sgRGVmYXVsdDogMSwgVHlwZTogJ2RvdWJsZScsIERlc2NyaXB0aW9uOiAnQSBmbG9hdGluZy1wb2ludCB2YWx1ZSB0aGF0IG11c3QgYmUgZ3JlYXRlciB0aGFuIG9yIGVxdWFsIHRvIHplcm8gdGhhdCByZXByZXNlbnRzIHRoZSBkZXNpcmVkIHRpbWUgdG9sZXJhbmNlLCBpbiBzZWNvbmRzLCBmb3IgdGhlIHRpbWUgc2xpY2UuJyB9XSB9LFxuICAgIEF2ZXJhZ2U6IHsgRnVuY3Rpb246ICdBdmVyYWdlJywgUGFyYW1ldGVyczogW10gfSxcbiAgICBNaW5pbXVtOiB7IEZ1bmN0aW9uOiAnTWluaW11bScsIFBhcmFtZXRlcnM6IFtdIH0sXG4gICAgTWF4aW11bTogeyBGdW5jdGlvbjogJ01heGltdW0nLCBQYXJhbWV0ZXJzOiBbXSB9LFxuICAgIFRvdGFsOiB7IEZ1bmN0aW9uOiAnVG90YWwnLCBQYXJhbWV0ZXJzOiBbXSB9LFxuICAgIFJhbmdlOiB7IEZ1bmN0aW9uOiAnUmFuZ2UnLCBQYXJhbWV0ZXJzOiBbXSB9LFxuICAgIENvdW50OiB7IEZ1bmN0aW9uOiAnQ291bnQnLCBQYXJhbWV0ZXJzOiBbXSB9LFxuICAgIERpc3RpbmN0OiB7IEZ1bmN0aW9uOiAnRGlzdGluY3QnLCBQYXJhbWV0ZXJzOiBbXSB9LFxuICAgIEFic29sdXRlVmFsdXRlOiB7IEZ1bmN0aW9uOiAnQWJzb2x1dGVWYWx1ZScsIFBhcmFtZXRlcnM6IFtdIH0sXG4gICAgQWRkOiB7IEZ1bmN0aW9uOiAnQWRkJywgUGFyYW1ldGVyczogW3sgRGVmYXVsdDogMCwgVHlwZTogJ3N0cmluZycsIERlc2NyaXB0aW9uOiAnQSBmbG9hdGluZyBwb2ludCB2YWx1ZSByZXByZXNlbnRpbmcgYW4gYWRkaXRpdmUgb2Zmc2V0IHRvIGJlIGFwcGxpZWQgdG8gZWFjaCB2YWx1ZSB0aGUgc291cmNlIHNlcmllcy4nIH1dIH0sXG4gICAgU3VidHJhY3Q6IHsgRnVuY3Rpb246ICdTdWJ0cmFjdCcsIFBhcmFtZXRlcnM6IFt7IERlZmF1bHQ6IDAsIFR5cGU6ICdzdHJpbmcnLCBEZXNjcmlwdGlvbjogJ0EgZmxvYXRpbmcgcG9pbnQgdmFsdWUgcmVwcmVzZW50aW5nIGFuIGFkZGl0aXZlIG9mZnNldCB0byBiZSBhcHBsaWVkIHRvIGVhY2ggdmFsdWUgdGhlIHNvdXJjZSBzZXJpZXMuJyB9XSB9LFxuICAgIE11bHRpcGx5OiB7IEZ1bmN0aW9uOiAnTXVsdGlwbHknLCBQYXJhbWV0ZXJzOiBbeyBEZWZhdWx0OiAxLCBUeXBlOiAnc3RyaW5nJywgRGVzY3JpcHRpb246ICdBIGZsb2F0aW5nIHBvaW50IHZhbHVlIHJlcHJlc2VudGluZyBhbiBhZGRpdGl2ZSBvZmZzZXQgdG8gYmUgYXBwbGllZCB0byBlYWNoIHZhbHVlIHRoZSBzb3VyY2Ugc2VyaWVzLicgfV0gfSxcbiAgICBEaXZpZGU6IHsgRnVuY3Rpb246ICdNdWx0aXBseScsIFBhcmFtZXRlcnM6IFt7IERlZmF1bHQ6IDEsIFR5cGU6ICdzdHJpbmcnLCBEZXNjcmlwdGlvbjogJ0EgZmxvYXRpbmcgcG9pbnQgdmFsdWUgcmVwcmVzZW50aW5nIGFuIGFkZGl0aXZlIG9mZnNldCB0byBiZSBhcHBsaWVkIHRvIGVhY2ggdmFsdWUgdGhlIHNvdXJjZSBzZXJpZXMuJyB9XSB9LFxuICAgIFJvdW5kOiB7IEZ1bmN0aW9uOiAnUm91bmQnLCBQYXJhbWV0ZXJzOiBbeyBEZWZhdWx0OiAwLCBUeXBlOiAnZG91YmxlJywgRGVzY3JpcHRpb246ICdBIHBvc2l0aXZlIGludGVnZXIgdmFsdWUgcmVwcmVzZW50aW5nIHRoZSBudW1iZXIgb2YgZGVjaW1hbCBwbGFjZXMgaW4gdGhlIHJldHVybiB2YWx1ZSAtIGRlZmF1bHRzIHRvIDAuJyB9XSB9LFxuICAgIEZsb29yOiB7IEZ1bmN0aW9uOiAnRmxvb3InLCBQYXJhbWV0ZXJzOiBbXSB9LFxuICAgIENlaWxpbmc6IHsgRnVuY3Rpb246ICdDZWlsaW5nJywgUGFyYW1ldGVyczogW10gfSxcbiAgICBUcnVuY2F0ZTogeyBGdW5jdGlvbjogJ1RydW5jYXRlJywgUGFyYW1ldGVyczogW10gfSxcbiAgICBTdGFuZGFyZERldmlhdGlvbjogeyBGdW5jdGlvbjogJ1N0YW5kYXJkRGV2aWF0aW9uJywgUGFyYW1ldGVyczogW3sgRGVmYXVsdDogZmFsc2UsIFR5cGU6ICdib29sZWFuJywgRGVzY3JpcHRpb246ICdBIGJvb2xlYW4gZmxhZyByZXByZXNlbnRpbmcgaWYgdGhlIHNhbXBsZSBiYXNlZCBjYWxjdWxhdGlvbiBzaG91bGQgYmUgdXNlZCAtIGRlZmF1bHRzIHRvIGZhbHNlLCB3aGljaCBtZWFucyB0aGUgcG9wdWxhdGlvbiBiYXNlZCBjYWxjdWxhdGlvbiBzaG91bGQgYmUgdXNlZC4nIH1dIH0sXG4gICAgTWVkaWFuOiB7IEZ1bmN0aW9uOiAnTWVkaWFuJywgUGFyYW1ldGVyczogW10gfSxcbiAgICBNb2RlOiB7IEZ1bmN0aW9uOiAnTW9kZScsIFBhcmFtZXRlcnM6IFtdIH0sXG4gICAgVG9wOiB7IEZ1bmN0aW9uOiAnVG9wJywgUGFyYW1ldGVyczogW3sgRGVmYXVsdDogJzEwMCUnLCBUeXBlOiAnc3RyaW5nJywgRGVzY3JpcHRpb246ICdBIHBvc2l0aXZlIGludGVnZXIgdmFsdWUsIHJlcHJlc2VudGluZyBhIHRvdGFsLCB0aGF0IGlzIGdyZWF0ZXIgdGhhbiB6ZXJvIC0gb3IgLSBhIGZsb2F0aW5nIHBvaW50IHZhbHVlLCBzdWZmaXhlZCB3aXRoIFxcJyAlXFwnIHJlcHJlc2VudGluZyBhIHBlcmNlbnRhZ2UsIHRoYXQgbXVzdCByYW5nZSBmcm9tIGdyZWF0ZXIgdGhhbiAwIHRvIGxlc3MgdGhhbiBvciBlcXVhbCB0byAxMDAuJyB9LCB7IERlZmF1bHQ6IHRydWUsIFR5cGU6ICdib29sZWFuJywgRGVzY3JpcHRpb246ICdBIGJvb2xlYW4gZmxhZyByZXByZXNlbnRpbmcgaWYgdGltZSBpbiBkYXRhc2V0IHNob3VsZCBiZSBub3JtYWxpemVkIC0gZGVmYXVsdHMgdG8gdHJ1ZS4nIH1dIH0sXG4gICAgQm90dG9tOiB7IEZ1bmN0aW9uOiAnQm90dG9tJywgUGFyYW1ldGVyczogW3sgRGVmYXVsdDogJzEwMCUnLCBUeXBlOiAnc3RyaW5nJywgRGVzY3JpcHRpb246ICdBIHBvc2l0aXZlIGludGVnZXIgdmFsdWUsIHJlcHJlc2VudGluZyBhIHRvdGFsLCB0aGF0IGlzIGdyZWF0ZXIgdGhhbiB6ZXJvIC0gb3IgLSBhIGZsb2F0aW5nIHBvaW50IHZhbHVlLCBzdWZmaXhlZCB3aXRoIFxcJyAlXFwnIHJlcHJlc2VudGluZyBhIHBlcmNlbnRhZ2UsIHRoYXQgbXVzdCByYW5nZSBmcm9tIGdyZWF0ZXIgdGhhbiAwIHRvIGxlc3MgdGhhbiBvciBlcXVhbCB0byAxMDAuJyB9LCB7IERlZmF1bHQ6IHRydWUsIFR5cGU6ICdib29sZWFuJywgRGVzY3JpcHRpb246ICdBIGJvb2xlYW4gZmxhZyByZXByZXNlbnRpbmcgaWYgdGltZSBpbiBkYXRhc2V0IHNob3VsZCBiZSBub3JtYWxpemVkIC0gZGVmYXVsdHMgdG8gdHJ1ZS4nIH1dIH0sXG4gICAgUmFuZG9tOiB7IEZ1bmN0aW9uOiAnUmFuZG9tJywgUGFyYW1ldGVyczogW3sgRGVmYXVsdDogJzEwMCUnLCBUeXBlOiAnc3RyaW5nJywgRGVzY3JpcHRpb246ICdBIHBvc2l0aXZlIGludGVnZXIgdmFsdWUsIHJlcHJlc2VudGluZyBhIHRvdGFsLCB0aGF0IGlzIGdyZWF0ZXIgdGhhbiB6ZXJvIC0gb3IgLSBhIGZsb2F0aW5nIHBvaW50IHZhbHVlLCBzdWZmaXhlZCB3aXRoIFxcJyAlXFwnIHJlcHJlc2VudGluZyBhIHBlcmNlbnRhZ2UsIHRoYXQgbXVzdCByYW5nZSBmcm9tIGdyZWF0ZXIgdGhhbiAwIHRvIGxlc3MgdGhhbiBvciBlcXVhbCB0byAxMDAuJyB9LCB7IERlZmF1bHQ6IHRydWUsIFR5cGU6ICdib29sZWFuJywgRGVzY3JpcHRpb246ICdBIGJvb2xlYW4gZmxhZyByZXByZXNlbnRpbmcgaWYgdGltZSBpbiBkYXRhc2V0IHNob3VsZCBiZSBub3JtYWxpemVkIC0gZGVmYXVsdHMgdG8gdHJ1ZS4nIH1dIH0sXG4gICAgRmlyc3Q6IHsgRnVuY3Rpb246ICdGaXJzdCcsIFBhcmFtZXRlcnM6IFt7IERlZmF1bHQ6ICcxJywgVHlwZTogJ3N0cmluZycsIERlc2NyaXB0aW9uOiAnQSBwb3NpdGl2ZSBpbnRlZ2VyIHZhbHVlLCByZXByZXNlbnRpbmcgYSB0b3RhbCwgdGhhdCBpcyBncmVhdGVyIHRoYW4gemVybyAtIG9yIC0gYSBmbG9hdGluZyBwb2ludCB2YWx1ZSwgc3VmZml4ZWQgd2l0aCBcXCcgJVxcJyByZXByZXNlbnRpbmcgYSBwZXJjZW50YWdlLCB0aGF0IG11c3QgcmFuZ2UgZnJvbSBncmVhdGVyIHRoYW4gMCB0byBsZXNzIHRoYW4gb3IgZXF1YWwgdG8gMTAwIC0gZGVmYXVsdHMgdG8gMS4nIH1dIH0sXG4gICAgTGFzdDogeyBGdW5jdGlvbjogJ0xhc3QnLCBQYXJhbWV0ZXJzOiBbeyBEZWZhdWx0OiAnMScsIFR5cGU6ICdzdHJpbmcnLCBEZXNjcmlwdGlvbjogJ0EgcG9zaXRpdmUgaW50ZWdlciB2YWx1ZSwgcmVwcmVzZW50aW5nIGEgdG90YWwsIHRoYXQgaXMgZ3JlYXRlciB0aGFuIHplcm8gLSBvciAtIGEgZmxvYXRpbmcgcG9pbnQgdmFsdWUsIHN1ZmZpeGVkIHdpdGggXFwnICVcXCcgcmVwcmVzZW50aW5nIGEgcGVyY2VudGFnZSwgdGhhdCBtdXN0IHJhbmdlIGZyb20gZ3JlYXRlciB0aGFuIDAgdG8gbGVzcyB0aGFuIG9yIGVxdWFsIHRvIDEwMCAtIGRlZmF1bHRzIHRvIDEuJyB9XSB9LFxuICAgIFBlcmNlbnRpbGU6IHsgRnVuY3Rpb246ICdQZXJjZW50aWxlJywgUGFyYW1ldGVyczogW3sgRGVmYXVsdDogJzEwMCUnLCBUeXBlOiAnc3RyaW5nJywgRGVzY3JpcHRpb246ICdBIGZsb2F0aW5nIHBvaW50IHZhbHVlLCByZXByZXNlbnRpbmcgYSBwZXJjZW50YWdlLCB0aGF0IG11c3QgcmFuZ2UgZnJvbSAwIHRvIDEwMC4nIH1dIH0sXG4gICAgRGlmZmVyZW5jZTogeyBGdW5jdGlvbjogJ0RpZmZlcmVuY2UnLCBQYXJhbWV0ZXJzOiBbXSB9LFxuICAgIFRpbWVEaWZmZXJlbmNlOiB7IEZ1bmN0aW9uOiAnVGltZURpZmZlcmVuY2UnLCBQYXJhbWV0ZXJzOiBbeyBEZWZhdWx0OiAnU2Vjb25kcycsIFR5cGU6ICd0aW1lJywgRGVzY3JpcHRpb246ICdTcGVjaWZpZXMgdGhlIHR5cGUgb2YgdGltZSB1bml0cyBhbmQgbXVzdCBiZSBvbmUgb2YgdGhlIGZvbGxvd2luZzogU2Vjb25kcywgTmFub3NlY29uZHMsIE1pY3Jvc2Vjb25kcywgTWlsbGlzZWNvbmRzLCBNaW51dGVzLCBIb3VycywgRGF5cywgV2Vla3MsIEtlIChpLmUuLCB0cmFkaXRpb25hbCBDaGluZXNlIHVuaXQgb2YgZGVjaW1hbCB0aW1lKSwgVGlja3MgKGkuZS4sIDEwMC1uYW5vc2Vjb25kIGludGVydmFscyksIFBsYW5ja1RpbWUgb3IgQXRvbWljVW5pdHNPZlRpbWUgLSBkZWZhdWx0cyB0byBTZWNvbmRzLicgfV0gfSxcbiAgICBEZXJpdmF0aXZlOiB7IEZ1bmN0aW9uOiAnRGVyaXZhdGl2ZScsIFBhcmFtZXRlcnM6IFt7IERlZmF1bHQ6ICdTZWNvbmRzJywgVHlwZTogJ3RpbWUnLCBEZXNjcmlwdGlvbjogJ1NwZWNpZmllcyB0aGUgdHlwZSBvZiB0aW1lIHVuaXRzIGFuZCBtdXN0IGJlIG9uZSBvZiB0aGUgZm9sbG93aW5nOiBTZWNvbmRzLCBOYW5vc2Vjb25kcywgTWljcm9zZWNvbmRzLCBNaWxsaXNlY29uZHMsIE1pbnV0ZXMsIEhvdXJzLCBEYXlzLCBXZWVrcywgS2UgKGkuZS4sIHRyYWRpdGlvbmFsIENoaW5lc2UgdW5pdCBvZiBkZWNpbWFsIHRpbWUpLCBUaWNrcyAoaS5lLiwgMTAwLW5hbm9zZWNvbmQgaW50ZXJ2YWxzKSwgUGxhbmNrVGltZSBvciBBdG9taWNVbml0c09mVGltZSAtIGRlZmF1bHRzIHRvIFNlY29uZHMuJyB9XSB9LFxuICAgIFRpbWVJbnRlZ3JhdGlvbjogeyBGdW5jdGlvbjogJ1RpbWVJbnRlZ3JhdGlvbicsIFBhcmFtZXRlcnM6IFt7IERlZmF1bHQ6ICdIb3VycycsIFR5cGU6ICd0aW1lJywgRGVzY3JpcHRpb246ICdTcGVjaWZpZXMgdGhlIHR5cGUgb2YgdGltZSB1bml0cyBhbmQgbXVzdCBiZSBvbmUgb2YgdGhlIGZvbGxvd2luZzogU2Vjb25kcywgTmFub3NlY29uZHMsIE1pY3Jvc2Vjb25kcywgTWlsbGlzZWNvbmRzLCBNaW51dGVzLCBIb3VycywgRGF5cywgV2Vla3MsIEtlIChpLmUuLCB0cmFkaXRpb25hbCBDaGluZXNlIHVuaXQgb2YgZGVjaW1hbCB0aW1lKSwgVGlja3MgKGkuZS4sIDEwMC1uYW5vc2Vjb25kIGludGVydmFscyksIFBsYW5ja1RpbWUgb3IgQXRvbWljVW5pdHNPZlRpbWUgLSBkZWZhdWx0cyB0byBIb3Vycy4nIH1dIH0sXG4gICAgSW50ZXJ2YWw6IHsgRnVuY3Rpb246ICdJbnRlcnZhbCcsIFBhcmFtZXRlcnM6IFt7IERlZmF1bHQ6IDAsIFR5cGU6ICdkb3VibGUnLCBEZXNjcmlwdGlvbjogJ0EgZmxvYXRpbmctcG9pbnQgdmFsdWUgdGhhdCBtdXN0IGJlIGdyZWF0ZXIgdGhhbiBvciBlcXVhbCB0byB6ZXJvIHRoYXQgcmVwcmVzZW50cyB0aGUgZGVzaXJlZCB0aW1lIGludGVydmFsLCBpbiB0aW1lIHVuaXRzLCBmb3IgdGhlIHJldHVybmVkIGRhdGEuICcgfSwgeyBEZWZhdWx0OiAnU2Vjb25kcycsIFR5cGU6ICd0aW1lJywgRGVzY3JpcHRpb246ICdTcGVjaWZpZXMgdGhlIHR5cGUgb2YgdGltZSB1bml0cyBhbmQgbXVzdCBiZSBvbmUgb2YgdGhlIGZvbGxvd2luZzogU2Vjb25kcywgTmFub3NlY29uZHMsIE1pY3Jvc2Vjb25kcywgTWlsbGlzZWNvbmRzLCBNaW51dGVzLCBIb3VycywgRGF5cywgV2Vla3MsIEtlIChpLmUuLCB0cmFkaXRpb25hbCBDaGluZXNlIHVuaXQgb2YgZGVjaW1hbCB0aW1lKSwgVGlja3MgKGkuZS4sIDEwMC1uYW5vc2Vjb25kIGludGVydmFscyksIFBsYW5ja1RpbWUgb3IgQXRvbWljVW5pdHNPZlRpbWUgLSBkZWZhdWx0cyB0byBTZWNvbmRzLicgfV0gfSxcbiAgICBJbmNsdWRlUmFuZ2U6IHsgRnVuY3Rpb246ICdJbmNsdWRlUmFuZ2UnLCBQYXJhbWV0ZXJzOiBbeyBEZWZhdWx0OiAwLCBUeXBlOiAnZG91YmxlJywgRGVzY3JpcHRpb246ICdGbG9hdGluZy1wb2ludCBudW1iZXIgdGhhdCByZXByZXNlbnRzIHRoZSBsb3cgcmFuZ2Ugb2YgdmFsdWVzIGFsbG93ZWQgaW4gdGhlIHJldHVybiBzZXJpZXMuJyB9LCB7IERlZmF1bHQ6IDAsIFR5cGU6ICdkb3VibGUnLCBEZXNjcmlwdGlvbjogJ0Zsb2F0aW5nLXBvaW50IG51bWJlciB0aGF0IHJlcHJlc2VudHMgdGhlIGhpZ2ggcmFuZ2Ugb2YgdmFsdWVzIGFsbG93ZWQgaW4gdGhlIHJldHVybiBzZXJpZXMuJyB9LCB7IERlZmF1bHQ6IGZhbHNlLCBUeXBlOiAnYm9vbGVhbicsIERlc2NyaXB0aW9uOiAnQSBib29sZWFuIGZsYWcgdGhhdCBkZXRlcm1pbmVzIGlmIHJhbmdlIHZhbHVlcyBhcmUgaW5jbHVzaXZlLCBpLmUuLCBhbGxvd2VkIHZhbHVlcyBhcmUgPj0gbG93IGFuZCA8PSBoaWdoIC0gZGVmYXVsdHMgdG8gZmFsc2UsIHdoaWNoIG1lYW5zIHZhbHVlcyBhcmUgZXhjbHVzaXZlLCBpLmUuLCBhbGxvd2VkIHZhbHVlcyBhcmUgPiBsb3cgYW5kIDwgaGlnaC4nIH0sIHsgRGVmYXVsdDogZmFsc2UsIFR5cGU6ICdib29sZWFuJywgRGVzY3JpcHRpb246ICdBIGJvb2xlYW4gZmxhZyAtIHdoZW4gZm91ciBwYXJhbWV0ZXJzIGFyZSBwcm92aWRlZCwgdGhpcmQgcGFyYW1ldGVyIGRldGVybWluZXMgaWYgbG93IHZhbHVlIGlzIGluY2x1c2l2ZSBhbmQgZm9ydGggcGFyYW1ldGVyIGRldGVybWluZXMgaWYgaGlnaCB2YWx1ZSBpcyBpbmNsdXNpdmUuJyB9XSB9LFxuICAgIEV4Y2x1ZGVSYW5nZTogeyBGdW5jdGlvbjogJ0V4Y2x1ZGVSYW5nZScsIFBhcmFtZXRlcnM6IFt7IERlZmF1bHQ6IDAsIFR5cGU6ICdkb3VibGUnLCBEZXNjcmlwdGlvbjogJ0Zsb2F0aW5nLXBvaW50IG51bWJlciB0aGF0IHJlcHJlc2VudHMgdGhlIGxvdyByYW5nZSBvZiB2YWx1ZXMgYWxsb3dlZCBpbiB0aGUgcmV0dXJuIHNlcmllcy4nIH0sIHsgRGVmYXVsdDogMCwgVHlwZTogJ2RvdWJsZScsIERlc2NyaXB0aW9uOiAnRmxvYXRpbmctcG9pbnQgbnVtYmVyIHRoYXQgcmVwcmVzZW50cyB0aGUgaGlnaCByYW5nZSBvZiB2YWx1ZXMgYWxsb3dlZCBpbiB0aGUgcmV0dXJuIHNlcmllcy4nIH0sIHsgRGVmYXVsdDogZmFsc2UsIFR5cGU6ICdib29sZWFuJywgRGVzY3JpcHRpb246ICdBIGJvb2xlYW4gZmxhZyB0aGF0IGRldGVybWluZXMgaWYgcmFuZ2UgdmFsdWVzIGFyZSBpbmNsdXNpdmUsIGkuZS4sIGFsbG93ZWQgdmFsdWVzIGFyZSA+PSBsb3cgYW5kIDw9IGhpZ2ggLSBkZWZhdWx0cyB0byBmYWxzZSwgd2hpY2ggbWVhbnMgdmFsdWVzIGFyZSBleGNsdXNpdmUsIGkuZS4sIGFsbG93ZWQgdmFsdWVzIGFyZSA+IGxvdyBhbmQgPCBoaWdoLicgfSwgeyBEZWZhdWx0OiBmYWxzZSwgVHlwZTogJ2Jvb2xlYW4nLCBEZXNjcmlwdGlvbjogJ0EgYm9vbGVhbiBmbGFnIC0gd2hlbiBmb3VyIHBhcmFtZXRlcnMgYXJlIHByb3ZpZGVkLCB0aGlyZCBwYXJhbWV0ZXIgZGV0ZXJtaW5lcyBpZiBsb3cgdmFsdWUgaXMgaW5jbHVzaXZlIGFuZCBmb3J0aCBwYXJhbWV0ZXIgZGV0ZXJtaW5lcyBpZiBoaWdoIHZhbHVlIGlzIGluY2x1c2l2ZS4nIH1dIH0sXG4gICAgRmlsdGVyTmFOOiB7IEZ1bmN0aW9uOiAnRmlsdGVyTmFOJywgUGFyYW1ldGVyczogW3sgRGVmYXVsdDogdHJ1ZSwgVHlwZTogJ2Jvb2xlYW4nLCBEZXNjcmlwdGlvbjogJ0EgYm9vbGVhbiBmbGFnIHRoYXQgZGV0ZXJtaW5lcyBpZiBpbmZpbml0ZSB2YWx1ZXMgc2hvdWxkIGFsc28gYmUgZXhjbHVkZWQgLSBkZWZhdWx0cyB0byB0cnVlLicgfV0gfSxcbiAgICBVbndyYXBBbmdsZTogeyBGdW5jdGlvbjogJ1Vud3JhcEFuZ2xlJywgUGFyYW1ldGVyczogW3sgRGVmYXVsdDogJ0RlZ3JlZXMnLCBUeXBlOiAnYW5nbGVVbml0cycsIERlc2NyaXB0aW9uOiAnU3BlY2lmaWVzIHRoZSB0eXBlIG9mIGFuZ2xlIHVuaXRzIGFuZCBtdXN0IGJlIG9uZSBvZiB0aGUgZm9sbG93aW5nOiBEZWdyZWVzLCBSYWRpYW5zLCBHcmFkcywgQXJjTWludXRlcywgQXJjU2Vjb25kcyBvciBBbmd1bGFyTWlsIC0gZGVmYXVsdHMgdG8gRGVncmVlcy4nIH1dIH0sXG4gICAgV3JhcEFuZ2xlOiB7IEZ1bmN0aW9uOiAnV3JhcEFuZ2xlJywgUGFyYW1ldGVyczogW3sgRGVmYXVsdDogJ0RlZ3JlZXMnLCBUeXBlOiAnYW5nbGVVbml0cycsIERlc2NyaXB0aW9uOiAnU3BlY2lmaWVzIHRoZSB0eXBlIG9mIGFuZ2xlIHVuaXRzIGFuZCBtdXN0IGJlIG9uZSBvZiB0aGUgZm9sbG93aW5nOiBEZWdyZWVzLCBSYWRpYW5zLCBHcmFkcywgQXJjTWludXRlcywgQXJjU2Vjb25kcyBvciBBbmd1bGFyTWlsIC0gZGVmYXVsdHMgdG8gRGVncmVlcy4nIH1dIH0sXG4gICAgTGFiZWw6IHsgRnVuY3Rpb246ICdMYWJlbCcsIFBhcmFtZXRlcnM6IFt7IERlZmF1bHQ6ICdOYW1lJywgVHlwZTogJ3N0cmluZycsIERlc2NyaXB0aW9uOiAnUmVuYW1lcyBhIHNlcmllcyB3aXRoIHRoZSBzcGVjaWZpZWQgbGFiZWwgdmFsdWUuJyB9XSB9LFxufTtcblxuZXhwb3J0IGNvbnN0IFdoZXJlT3BlcmF0b3JzID0gWyc9JywgJzw+JywgJzwnLCAnPD0nLCAnPicsICc+PScsICdMSUtFJywgJ05PVCBMSUtFJywgJ0lOJywgJ05PVCBJTicsICdJUycsICdJUyBOT1QnXTtcblxuZXhwb3J0IGNvbnN0IEJvb2xlYW5zID0gWyd0cnVlJywgJ2ZhbHNlJ107XG5cbmV4cG9ydCBjb25zdCBBbmdsZVVuaXRzID0gWydEZWdyZWVzJywgJ1JhZGlhbnMnLCAnR3JhZHMnLCAnQXJjTWludXRlcycsICdBcmNTZWNvbmRzJywgJ0FuZ3VsYXJNaWwnXVxuXG5leHBvcnQgY29uc3QgVGltZVVuaXRzID0gWydXZWVrcycsICdEYXlzJywgJ0hvdXJzJywgJ01pbnV0ZXMnLCAnU2Vjb25kcycsICdNaWxsaXNlY29uZHMnLCAnTWljcm9zZWNvbmRzJywgJ05hbm9zZWNvbmRzJywgJ1RpY2tzJywgJ1BsYW5rVGltZScsICdBdG9taWNVbml0c09mVGltZScsICdLZSddXG4vLyAjZW5kcmVnaW9uXG4iLCIvLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuLy8gIG1vZHVsZS5qcyAtIEdidGNcbi8vXG4vLyAgQ29weXJpZ2h0IO+/vSAyMDE3LCBHcmlkIFByb3RlY3Rpb24gQWxsaWFuY2UuICBBbGwgUmlnaHRzIFJlc2VydmVkLlxuLy9cbi8vICBMaWNlbnNlZCB0byB0aGUgR3JpZCBQcm90ZWN0aW9uIEFsbGlhbmNlIChHUEEpIHVuZGVyIG9uZSBvciBtb3JlIGNvbnRyaWJ1dG9yIGxpY2Vuc2UgYWdyZWVtZW50cy4gU2VlXG4vLyAgdGhlIE5PVElDRSBmaWxlIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyB3b3JrIGZvciBhZGRpdGlvbmFsIGluZm9ybWF0aW9uIHJlZ2FyZGluZyBjb3B5cmlnaHQgb3duZXJzaGlwLlxuLy8gIFRoZSBHUEEgbGljZW5zZXMgdGhpcyBmaWxlIHRvIHlvdSB1bmRlciB0aGUgTUlUIExpY2Vuc2UgKE1JVCksIHRoZSBcIkxpY2Vuc2VcIjsgeW91IG1heSBub3QgdXNlIHRoaXNcbi8vICBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdDpcbi8vXG4vLyAgICAgIGh0dHA6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcbi8vXG4vLyAgVW5sZXNzIGFncmVlZCB0byBpbiB3cml0aW5nLCB0aGUgc3ViamVjdCBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhblxuLy8gIFwiQVMtSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuIFJlZmVyIHRvIHRoZVxuLy8gIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zLlxuLy9cbi8vICBDb2RlIE1vZGlmaWNhdGlvbiBIaXN0b3J5OlxuLy8gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vICAxMS8wMi8yMDE3IC0gQmlsbHkgRXJuZXN0XG4vLyAgICAgICBHZW5lcmF0ZWQgb3JpZ2luYWwgdmVyc2lvbiBvZiBzb3VyY2UgY29kZS5cbi8vXG4vLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuZGVjbGFyZSB2YXIgYW5ndWxhcjogYW55O1xuaW1wb3J0IE9wZW5IaXN0b3JpYW5EYXRhU291cmNlIGZyb20gJy4vb3Blbkhpc3RvcmlhbkRhdGFzb3VyY2UnXG5pbXBvcnQgT3Blbkhpc3RvcmlhbkRhdGFTb3VyY2VRdWVyeUN0cmwgZnJvbSAnLi9jb250cm9sbGVycy9vcGVuSGlzdG9yaWFuUXVlcnlfY3RybCdcbmltcG9ydCBPcGVuSGlzdG9yaWFuQ29uZmlnQ3RybCBmcm9tICcuL2NvbnRyb2xsZXJzL29wZW5IaXN0b3JpYW5Db25maWdfY3RybCdcbmltcG9ydCBPcGVuSGlzdG9yaWFuUXVlcnlPcHRpb25zQ3RybCBmcm9tICcuL2NvbnRyb2xsZXJzL29wZW5IaXN0b3JpYW5RdWVyeU9wdGlvbnNfY3RybCdcbmltcG9ydCBPcGVuSGlzdG9yaWFuQW5ub3RhdGlvbnNRdWVyeUN0cmwgZnJvbSAnLi9jb250cm9sbGVycy9vcGVuSGlzdG9yaWFuQW5ub3RhdGlvbnNfY3RybCdcbmltcG9ydCBPcGVuSGlzdG9yaWFuRWxlbWVudFBpY2tlckN0cmwgZnJvbSAnLi9jb250cm9sbGVycy9vcGVuSGlzdG9yaWFuRWxlbWVudFBpY2tlcl9jdHJsJ1xuaW1wb3J0IE9wZW5IaXN0b3JpYW5UZXh0RWRpdG9yQ3RybCBmcm9tICcuL2NvbnRyb2xsZXJzL29wZW5IaXN0b3JpYW5UZXh0RWRpdG9yX2N0cmwnXG5pbXBvcnQgT3Blbkhpc3RvcmlhbkZpbHRlckV4cHJlc3Npb25DdHJsIGZyb20gJy4vY29udHJvbGxlcnMvb3Blbkhpc3RvcmlhbkZpbHRlckV4cHJlc3Npb25fY3RybCdcblxuLy9pbXBvcnQgYW5ndWxhciBmcm9tIFwiYW5ndWxhclwiXG5leHBvcnQge1xuICAgIE9wZW5IaXN0b3JpYW5EYXRhU291cmNlIGFzIERhdGFzb3VyY2UsXG4gICAgT3Blbkhpc3RvcmlhbkRhdGFTb3VyY2VRdWVyeUN0cmwgYXMgUXVlcnlDdHJsLFxuICAgIE9wZW5IaXN0b3JpYW5Db25maWdDdHJsIGFzIENvbmZpZ0N0cmwsXG4gICAgT3Blbkhpc3RvcmlhblF1ZXJ5T3B0aW9uc0N0cmwgYXMgUXVlcnlPcHRpb25zQ3RybCxcbiAgICBPcGVuSGlzdG9yaWFuQW5ub3RhdGlvbnNRdWVyeUN0cmwgYXMgQW5ub3RhdGlvbnNRdWVyeUN0cmxcbn1cblxuYW5ndWxhci5tb2R1bGUoJ2dyYWZhbmEuZGlyZWN0aXZlcycpLmRpcmVjdGl2ZShcInF1ZXJ5T3B0aW9uc1wiLCBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHtcbiAgICB0ZW1wbGF0ZVVybDogJ3B1YmxpYy9wbHVnaW5zL2dyaWRwcm90ZWN0aW9uYWxsaWFuY2Utb3Blbmhpc3Rvcmlhbi1kYXRhc291cmNlL3BhcnRpYWwvcXVlcnkub3B0aW9ucy5odG1sJyxcbiAgICByZXN0cmljdDogJ0UnLFxuICAgIGNvbnRyb2xsZXI6IE9wZW5IaXN0b3JpYW5RdWVyeU9wdGlvbnNDdHJsLFxuICAgIGNvbnRyb2xsZXJBczogJ3F1ZXJ5T3B0aW9uQ3RybCcsXG4gICAgc2NvcGU6IHtcbiAgICAgIGZsYWdzOiBcIj1cIixcbiAgICAgIHJldHVybjogXCI9XCIsXG4gICAgfVxuICB9O1xufSk7XG5cbmFuZ3VsYXIubW9kdWxlKCdncmFmYW5hLmRpcmVjdGl2ZXMnKS5kaXJlY3RpdmUoXCJlbGVtZW50UGlja2VyXCIsIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICB0ZW1wbGF0ZVVybDogJ3B1YmxpYy9wbHVnaW5zL2dyaWRwcm90ZWN0aW9uYWxsaWFuY2Utb3Blbmhpc3Rvcmlhbi1kYXRhc291cmNlL3BhcnRpYWwvcXVlcnkuZWxlbWVudFBpY2tlci5odG1sJyxcbiAgICAgICAgcmVzdHJpY3Q6ICdFJyxcbiAgICAgICAgY29udHJvbGxlcjogT3Blbkhpc3RvcmlhbkVsZW1lbnRQaWNrZXJDdHJsLFxuICAgICAgICBjb250cm9sbGVyQXM6ICdvcGVuSGlzdG9yaWFuRWxlbWVudFBpY2tlckN0cmwnLFxuICAgICAgICBzY29wZToge1xuICAgICAgICAgICAgdGFyZ2V0OiBcIj1cIixcbiAgICAgICAgICAgIGRhdGFzb3VyY2U6IFwiPVwiLFxuICAgICAgICAgICAgcGFuZWw6IFwiPVwiXG4gICAgICAgIH1cbiAgICB9O1xufSk7XG5cbmFuZ3VsYXIubW9kdWxlKCdncmFmYW5hLmRpcmVjdGl2ZXMnKS5kaXJlY3RpdmUoXCJ0ZXh0RWRpdG9yXCIsIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICB0ZW1wbGF0ZVVybDogJ3B1YmxpYy9wbHVnaW5zL2dyaWRwcm90ZWN0aW9uYWxsaWFuY2Utb3Blbmhpc3Rvcmlhbi1kYXRhc291cmNlL3BhcnRpYWwvcXVlcnkudGV4dEVkaXRvci5odG1sJyxcbiAgICAgICAgcmVzdHJpY3Q6ICdFJyxcbiAgICAgICAgY29udHJvbGxlcjogT3Blbkhpc3RvcmlhblRleHRFZGl0b3JDdHJsLFxuICAgICAgICBjb250cm9sbGVyQXM6ICdvcGVuSGlzdG9yaWFuVGV4dEVkaXRvckN0cmwnLFxuICAgICAgICBzY29wZToge1xuICAgICAgICAgICAgdGFyZ2V0OiBcIj1cIixcbiAgICAgICAgICAgIGRhdGFzb3VyY2U6IFwiPVwiLFxuICAgICAgICAgICAgcGFuZWw6IFwiPVwiXG4gICAgICAgIH1cbiAgICB9O1xufSk7XG5cbmFuZ3VsYXIubW9kdWxlKCdncmFmYW5hLmRpcmVjdGl2ZXMnKS5kaXJlY3RpdmUoXCJmaWx0ZXJFeHByZXNzaW9uXCIsIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICB0ZW1wbGF0ZVVybDogJ3B1YmxpYy9wbHVnaW5zL2dyaWRwcm90ZWN0aW9uYWxsaWFuY2Utb3Blbmhpc3Rvcmlhbi1kYXRhc291cmNlL3BhcnRpYWwvcXVlcnkuZmlsdGVyRXhwcmVzc2lvbi5odG1sJyxcbiAgICAgICAgcmVzdHJpY3Q6ICdFJyxcbiAgICAgICAgY29udHJvbGxlcjogT3Blbkhpc3RvcmlhbkZpbHRlckV4cHJlc3Npb25DdHJsLFxuICAgICAgICBjb250cm9sbGVyQXM6ICdvcGVuSGlzdG9yaWFuRmlsdGVyRXhwcmVzc2lvbkN0cmwnLFxuICAgICAgICBzY29wZToge1xuICAgICAgICAgICAgdGFyZ2V0OiBcIj1cIixcbiAgICAgICAgICAgIGRhdGFzb3VyY2U6IFwiPVwiLFxuICAgICAgICAgICAgcGFuZWw6IFwiPVwiXG4gICAgICAgIH1cbiAgICB9O1xufSk7IiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIikoZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuZ2VuZXJpYy1kYXRhc291cmNlLXF1ZXJ5LXJvdyAucXVlcnkta2V5d29yZCB7XFxuICB3aWR0aDogNzVweDtcXG59XCIsIFwiXCJdKTtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwie1wiKS5jb25jYXQoY29udGVudCwgXCJ9XCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKCcnKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5KSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSAnc3RyaW5nJykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCAnJ11dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBtb2R1bGVzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIGl0ZW0gPSBtb2R1bGVzW19pXTsgLy8gc2tpcCBhbHJlYWR5IGltcG9ydGVkIG1vZHVsZVxuICAgICAgLy8gdGhpcyBpbXBsZW1lbnRhdGlvbiBpcyBub3QgMTAwJSBwZXJmZWN0IGZvciB3ZWlyZCBtZWRpYSBxdWVyeSBjb21iaW5hdGlvbnNcbiAgICAgIC8vIHdoZW4gYSBtb2R1bGUgaXMgaW1wb3J0ZWQgbXVsdGlwbGUgdGltZXMgd2l0aCBkaWZmZXJlbnQgbWVkaWEgcXVlcmllcy5cbiAgICAgIC8vIEkgaG9wZSB0aGlzIHdpbGwgbmV2ZXIgb2NjdXIgKEhleSB0aGlzIHdheSB3ZSBoYXZlIHNtYWxsZXIgYnVuZGxlcylcblxuICAgICAgaWYgKGl0ZW1bMF0gPT0gbnVsbCB8fCAhYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBpZiAobWVkaWFRdWVyeSAmJiAhaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2UgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgICBpdGVtWzJdID0gXCIoXCIuY29uY2F0KGl0ZW1bMl0sIFwiKSBhbmQgKFwiKS5jb25jYXQobWVkaWFRdWVyeSwgXCIpXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07XG5cbmZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXSB8fCAnJzsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG5cbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHVzZVNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gdG9Db21tZW50KGNzc01hcHBpbmcpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oJ1xcbicpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKCdcXG4nKTtcbn0gLy8gQWRhcHRlZCBmcm9tIGNvbnZlcnQtc291cmNlLW1hcCAoTUlUKVxuXG5cbmZ1bmN0aW9uIHRvQ29tbWVudChzb3VyY2VNYXApIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpO1xuICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gIHJldHVybiBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG59IiwiLy8vPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vaGVhZGVycy9jb21tb24uZC50c1wiIC8+XG5cbmltcG9ydCB7UGFuZWxDdHJsfSBmcm9tICcuL3BhbmVsX2N0cmwnO1xuXG5jbGFzcyBNZXRyaWNzUGFuZWxDdHJsIGV4dGVuZHMgUGFuZWxDdHJsIHtcbiAgc2NvcGU6IGFueTtcbiAgZGF0YXNvdXJjZTogYW55O1xuICBkYXRhc291cmNlTmFtZTogYW55O1xuICAkcTogYW55O1xuICAkdGltZW91dDogYW55O1xuICBkYXRhc291cmNlU3J2OiBhbnk7XG4gIHRpbWVTcnY6IGFueTtcbiAgdGVtcGxhdGVTcnY6IGFueTtcbiAgdGltaW5nOiBhbnk7XG4gIHJhbmdlOiBhbnk7XG4gIGludGVydmFsOiBhbnk7XG4gIGludGVydmFsTXM6IGFueTtcbiAgcmVzb2x1dGlvbjogYW55O1xuICB0aW1lSW5mbzogYW55O1xuICBza2lwRGF0YU9uSW5pdDogYm9vbGVhbjtcbiAgZGF0YVN0cmVhbTogYW55O1xuICBkYXRhU3Vic2NyaXB0aW9uOiBhbnk7XG4gIGRhdGFMaXN0OiBhbnk7XG4gIG5leHRSZWZJZDogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKCRzY29wZSwgJGluamVjdG9yKSB7XG4gICAgc3VwZXIoJHNjb3BlLCAkaW5qZWN0b3IpO1xuXG4gICAgLy8gbWFrZSBtZXRyaWNzIHRhYiB0aGUgZGVmYXVsdFxuICAgIHRoaXMuZWRpdG9yVGFiSW5kZXggPSAxO1xuICAgIC8vIHRoaXMuJHEgPSAkaW5qZWN0b3IuZ2V0KCckcScpO1xuICAgIC8vIHRoaXMuZGF0YXNvdXJjZVNydiA9ICRpbmplY3Rvci5nZXQoJ2RhdGFzb3VyY2VTcnYnKTtcbiAgICAvLyB0aGlzLnRpbWVTcnYgPSAkaW5qZWN0b3IuZ2V0KCd0aW1lU3J2Jyk7XG4gICAgLy8gdGhpcy50ZW1wbGF0ZVNydiA9ICRpbmplY3Rvci5nZXQoJ3RlbXBsYXRlU3J2Jyk7XG5cbiAgICBpZiAoIXRoaXMucGFuZWwudGFyZ2V0cykge1xuICAgICAgdGhpcy5wYW5lbC50YXJnZXRzID0gW3t9XTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIG9uUGFuZWxUZWFyRG93bigpIHtcbiAgfVxuXG4gIHByaXZhdGUgb25Jbml0TWV0cmljc1BhbmVsRWRpdE1vZGUoKSB7XG4gIH1cblxuICBwcml2YXRlIG9uTWV0cmljc1BhbmVsUmVmcmVzaCgpIHtcbiAgfVxuXG5cbiAgc2V0VGltZVF1ZXJ5U3RhcnQoKSB7XG4gIH1cblxuICBzZXRUaW1lUXVlcnlFbmQoKSB7XG4gIH1cblxuICB1cGRhdGVUaW1lUmFuZ2UoZGF0YXNvdXJjZT8pIHtcbiAgfVxuXG4gIGNhbGN1bGF0ZUludGVydmFsKCkge1xuICB9XG5cbiAgYXBwbHlQYW5lbFRpbWVPdmVycmlkZXMoKSB7XG4gIH1cblxuICBpc3N1ZVF1ZXJpZXMoZGF0YXNvdXJjZSkge1xuICB9XG5cbiAgaGFuZGxlUXVlcnlSZXN1bHQocmVzdWx0KSB7XG4gIH1cblxuICBoYW5kbGVEYXRhU3RyZWFtKHN0cmVhbSkge1xuICB9XG5cbiAgc2V0RGF0YXNvdXJjZShkYXRhc291cmNlKSB7XG4gIH1cblxuICBhZGRRdWVyeSh0YXJnZXQpIHtcbiAgfVxuXG4gIHJlbW92ZVF1ZXJ5KHRhcmdldCkge1xuICB9XG5cbiAgbW92ZVF1ZXJ5KHRhcmdldCwgZGlyZWN0aW9uKSB7XG4gIH1cbn1cblxuZXhwb3J0IHtNZXRyaWNzUGFuZWxDdHJsfTtcbiIsIi8vLzxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uL2hlYWRlcnMvY29tbW9uLmQudHNcIiAvPlxuXG5leHBvcnQgY2xhc3MgUGFuZWxDdHJsIHtcbiAgcGFuZWw6IGFueTtcbiAgZXJyb3I6IGFueTtcbiAgcm93OiBhbnk7XG4gIGRhc2hib2FyZDogYW55O1xuICBlZGl0b3JUYWJJbmRleDogbnVtYmVyO1xuICBwbHVnaW5OYW1lOiBzdHJpbmc7XG4gIHBsdWdpbklkOiBzdHJpbmc7XG4gIGVkaXRvclRhYnM6IGFueTtcbiAgJHNjb3BlOiBhbnk7XG4gICRpbmplY3RvcjogYW55O1xuICAkdGltZW91dDogYW55O1xuICBmdWxsc2NyZWVuOiBib29sZWFuO1xuICBpbnNwZWN0b3I6IGFueTtcbiAgZWRpdE1vZGVJbml0aWF0ZWQ6IGJvb2xlYW47XG4gIGVkaXRvckhlbHBJbmRleDogbnVtYmVyO1xuICBlZGl0TW9kZTogYW55O1xuICBoZWlnaHQ6IGFueTtcbiAgY29udGFpbmVySGVpZ2h0OiBhbnk7XG4gIGV2ZW50czogYW55O1xuICB0aW1pbmc6IGFueTtcbiAgbG9hZGluZzogYm9vbGVhbjtcblxuICBjb25zdHJ1Y3Rvcigkc2NvcGUsICRpbmplY3Rvcikge1xuICB9XG5cbiAgaW5pdCgpIHtcbiAgfVxuXG4gIHJlbmRlcmluZ0NvbXBsZXRlZCgpIHtcbiAgfVxuXG4gIHJlZnJlc2goKSB7XG4gIH1cblxuICBwdWJsaXNoQXBwRXZlbnQoZXZ0TmFtZSwgZXZ0KSB7XG4gIH1cblxuICBjaGFuZ2VWaWV3KGZ1bGxzY3JlZW4sIGVkaXQpIHtcbiAgfVxuXG4gIHZpZXdQYW5lbCgpIHtcbiAgICB0aGlzLmNoYW5nZVZpZXcodHJ1ZSwgZmFsc2UpO1xuICB9XG5cbiAgZWRpdFBhbmVsKCkge1xuICAgIHRoaXMuY2hhbmdlVmlldyh0cnVlLCB0cnVlKTtcbiAgfVxuXG4gIGV4aXRGdWxsc2NyZWVuKCkge1xuICAgIHRoaXMuY2hhbmdlVmlldyhmYWxzZSwgZmFsc2UpO1xuICB9XG5cbiAgaW5pdEVkaXRNb2RlKCkge1xuICB9XG5cbiAgY2hhbmdlVGFiKG5ld0luZGV4KSB7XG4gIH1cblxuICBhZGRFZGl0b3JUYWIodGl0bGUsIGRpcmVjdGl2ZUZuLCBpbmRleD8pIHtcbiAgfVxuXG4gIGdldE1lbnUoKSB7XG4gICAgcmV0dXJuIFtdO1xuICB9XG5cbiAgZ2V0RXh0ZW5kZWRNZW51KCkge1xuICAgIHJldHVybiBbXTtcbiAgfVxuXG4gIG90aGVyUGFuZWxJbkZ1bGxzY3JlZW5Nb2RlKCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGNhbGN1bGF0ZVBhbmVsSGVpZ2h0KCkge1xuICB9XG5cbiAgcmVuZGVyKHBheWxvYWQ/KSB7XG4gIH1cblxuICB0b2dnbGVFZGl0b3JIZWxwKGluZGV4KSB7XG4gIH1cblxuICBkdXBsaWNhdGUoKSB7XG4gIH1cblxuICB1cGRhdGVDb2x1bW5TcGFuKHNwYW4pIHtcbiAgfVxuXG4gIHJlbW92ZVBhbmVsKCkge1xuICB9XG5cbiAgZWRpdFBhbmVsSnNvbigpIHtcbiAgfVxuXG4gIHJlcGxhY2VQYW5lbChuZXdQYW5lbCwgb2xkUGFuZWwpIHtcbiAgfVxuXG4gIHNoYXJlUGFuZWwoKSB7XG4gIH1cblxuICBnZXRJbmZvTW9kZSgpIHtcbiAgfVxuXG4gIGdldEluZm9Db250ZW50KG9wdGlvbnMpIHtcbiAgfVxuXG4gIG9wZW5JbnNwZWN0b3IoKSB7XG4gIH1cbn1cbiIsIi8vLzxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uL2hlYWRlcnMvY29tbW9uLmQudHNcIiAvPlxuXG5leHBvcnQgY2xhc3MgUXVlcnlDdHJsIHtcbiAgdGFyZ2V0OiBhbnk7XG4gIGRhdGFzb3VyY2U6IGFueTtcbiAgcGFuZWxDdHJsOiBhbnk7XG4gIHBhbmVsOiBhbnk7XG4gIGhhc1Jhd01vZGU6IGJvb2xlYW47XG4gIGVycm9yOiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IocHVibGljICRzY29wZSwgcHJpdmF0ZSAkaW5qZWN0b3IpIHtcbiAgICB0aGlzLnBhbmVsQ3RybCA9IHRoaXMucGFuZWxDdHJsIHx8IHtwYW5lbDoge319O1xuICAgIHRoaXMudGFyZ2V0ID0gdGhpcy50YXJnZXQgfHwge3RhcmdldDogJyd9O1xuICAgIHRoaXMucGFuZWwgPSB0aGlzLnBhbmVsQ3RybC5wYW5lbDtcbiAgfVxuXG4gIHJlZnJlc2goKSB7fVxufVxuIiwiaW1wb3J0IHtQYW5lbEN0cmx9IGZyb20gJy4uL2ZlYXR1cmVzL3BhbmVsL3BhbmVsX2N0cmwnO1xuaW1wb3J0IHtNZXRyaWNzUGFuZWxDdHJsfSBmcm9tICcuLi9mZWF0dXJlcy9wYW5lbC9tZXRyaWNzX3BhbmVsX2N0cmwnO1xuaW1wb3J0IHtRdWVyeUN0cmx9IGZyb20gJy4uL2ZlYXR1cmVzL3BhbmVsL3F1ZXJ5X2N0cmwnO1xuXG5leHBvcnQgZnVuY3Rpb24gbG9hZFBsdWdpbkNzcyhvcHRpb25zKSB7XG59XG5cbmV4cG9ydCB7XG4gIFBhbmVsQ3RybCxcbiAgTWV0cmljc1BhbmVsQ3RybCxcbiAgUXVlcnlDdHJsLFxufTtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5Eb20gPSB7fTtcblxudmFyIGlzT2xkSUUgPSBmdW5jdGlvbiBpc09sZElFKCkge1xuICB2YXIgbWVtbztcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKCkge1xuICAgIGlmICh0eXBlb2YgbWVtbyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG4gICAgICAvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG4gICAgICAvLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyXG4gICAgICAvLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcbiAgICAgIC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xuICAgICAgbWVtbyA9IEJvb2xlYW4od2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2IpO1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vO1xuICB9O1xufSgpO1xuXG52YXIgZ2V0VGFyZ2V0ID0gZnVuY3Rpb24gZ2V0VGFyZ2V0KCkge1xuICB2YXIgbWVtbyA9IHt9O1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUodGFyZ2V0KSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vW3RhcmdldF07XG4gIH07XG59KCk7XG5cbmZ1bmN0aW9uIGxpc3RUb1N0eWxlcyhsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBzdHlsZXMgPSBbXTtcbiAgdmFyIG5ld1N0eWxlcyA9IHt9O1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY3NzID0gaXRlbVsxXTtcbiAgICB2YXIgbWVkaWEgPSBpdGVtWzJdO1xuICAgIHZhciBzb3VyY2VNYXAgPSBpdGVtWzNdO1xuICAgIHZhciBwYXJ0ID0ge1xuICAgICAgY3NzOiBjc3MsXG4gICAgICBtZWRpYTogbWVkaWEsXG4gICAgICBzb3VyY2VNYXA6IHNvdXJjZU1hcFxuICAgIH07XG5cbiAgICBpZiAoIW5ld1N0eWxlc1tpZF0pIHtcbiAgICAgIHN0eWxlcy5wdXNoKG5ld1N0eWxlc1tpZF0gPSB7XG4gICAgICAgIGlkOiBpZCxcbiAgICAgICAgcGFydHM6IFtwYXJ0XVxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG5ld1N0eWxlc1tpZF0ucGFydHMucHVzaChwYXJ0KTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gc3R5bGVzO1xufVxuXG5mdW5jdGlvbiBhZGRTdHlsZXNUb0RvbShzdHlsZXMsIG9wdGlvbnMpIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IHN0eWxlc1tpXTtcbiAgICB2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXTtcbiAgICB2YXIgaiA9IDA7XG5cbiAgICBpZiAoZG9tU3R5bGUpIHtcbiAgICAgIGRvbVN0eWxlLnJlZnMrKztcblxuICAgICAgZm9yICg7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykge1xuICAgICAgICBkb21TdHlsZS5wYXJ0c1tqXShpdGVtLnBhcnRzW2pdKTtcbiAgICAgIH1cblxuICAgICAgZm9yICg7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgIGRvbVN0eWxlLnBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgcGFydHMgPSBbXTtcblxuICAgICAgZm9yICg7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgIHBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xuICAgICAgfVxuXG4gICAgICBzdHlsZXNJbkRvbVtpdGVtLmlkXSA9IHtcbiAgICAgICAgaWQ6IGl0ZW0uaWQsXG4gICAgICAgIHJlZnM6IDEsXG4gICAgICAgIHBhcnRzOiBwYXJ0c1xuICAgICAgfTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcblxuICBpZiAodHlwZW9mIG9wdGlvbnMuYXR0cmlidXRlcy5ub25jZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09ICd1bmRlZmluZWQnID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gICAgaWYgKG5vbmNlKSB7XG4gICAgICBvcHRpb25zLmF0dHJpYnV0ZXMubm9uY2UgPSBub25jZTtcbiAgICB9XG4gIH1cblxuICBPYmplY3Qua2V5cyhvcHRpb25zLmF0dHJpYnV0ZXMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShrZXksIG9wdGlvbnMuYXR0cmlidXRlc1trZXldKTtcbiAgfSk7XG5cbiAgaWYgKHR5cGVvZiBvcHRpb25zLmluc2VydCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIG9wdGlvbnMuaW5zZXJ0KHN0eWxlKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KG9wdGlvbnMuaW5zZXJ0IHx8ICdoZWFkJyk7XG5cbiAgICBpZiAoIXRhcmdldCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgICB9XG5cbiAgICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICB9XG5cbiAgcmV0dXJuIHN0eWxlO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG52YXIgcmVwbGFjZVRleHQgPSBmdW5jdGlvbiByZXBsYWNlVGV4dCgpIHtcbiAgdmFyIHRleHRTdG9yZSA9IFtdO1xuICByZXR1cm4gZnVuY3Rpb24gcmVwbGFjZShpbmRleCwgcmVwbGFjZW1lbnQpIHtcbiAgICB0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XG4gICAgcmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XG4gIH07XG59KCk7XG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcoc3R5bGUsIGluZGV4LCByZW1vdmUsIG9iaikge1xuICB2YXIgY3NzID0gcmVtb3ZlID8gJycgOiBvYmouY3NzOyAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xuICAgIHZhciBjaGlsZE5vZGVzID0gc3R5bGUuY2hpbGROb2RlcztcblxuICAgIGlmIChjaGlsZE5vZGVzW2luZGV4XSkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH1cblxuICAgIGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuICAgICAgc3R5bGUuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGUuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcoc3R5bGUsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gb2JqLmNzcztcbiAgdmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAobWVkaWEpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoJ21lZGlhJywgbWVkaWEpO1xuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiBidG9hKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZS5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG52YXIgc2luZ2xldG9uID0gbnVsbDtcbnZhciBzaW5nbGV0b25Db3VudGVyID0gMDtcblxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBzdHlsZTtcbiAgdmFyIHVwZGF0ZTtcbiAgdmFyIHJlbW92ZTtcblxuICBpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcbiAgICB2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcbiAgICBzdHlsZSA9IHNpbmdsZXRvbiB8fCAoc2luZ2xldG9uID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIGZhbHNlKTtcbiAgICByZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIHRydWUpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZSwgb3B0aW9ucyk7XG5cbiAgICByZW1vdmUgPSBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuICAgIH07XG4gIH1cblxuICB1cGRhdGUob2JqKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB1cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVtb3ZlKCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBvcHRpb25zLmF0dHJpYnV0ZXMgPSB0eXBlb2Ygb3B0aW9ucy5hdHRyaWJ1dGVzID09PSAnb2JqZWN0JyA/IG9wdGlvbnMuYXR0cmlidXRlcyA6IHt9OyAvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cbiAgLy8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuXG4gIGlmICghb3B0aW9ucy5zaW5nbGV0b24gJiYgdHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uICE9PSAnYm9vbGVhbicpIHtcbiAgICBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcbiAgfVxuXG4gIHZhciBzdHlsZXMgPSBsaXN0VG9TdHlsZXMobGlzdCwgb3B0aW9ucyk7XG4gIGFkZFN0eWxlc1RvRG9tKHN0eWxlcywgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIHZhciBtYXlSZW1vdmUgPSBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IHN0eWxlc1tpXTtcbiAgICAgIHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xuXG4gICAgICBpZiAoZG9tU3R5bGUpIHtcbiAgICAgICAgZG9tU3R5bGUucmVmcy0tO1xuICAgICAgICBtYXlSZW1vdmUucHVzaChkb21TdHlsZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKG5ld0xpc3QpIHtcbiAgICAgIHZhciBuZXdTdHlsZXMgPSBsaXN0VG9TdHlsZXMobmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgICBhZGRTdHlsZXNUb0RvbShuZXdTdHlsZXMsIG9wdGlvbnMpO1xuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBtYXlSZW1vdmUubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2RvbVN0eWxlID0gbWF5UmVtb3ZlW19pXTtcblxuICAgICAgaWYgKF9kb21TdHlsZS5yZWZzID09PSAwKSB7XG4gICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgX2RvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgX2RvbVN0eWxlLnBhcnRzW2pdKCk7XG4gICAgICAgIH1cblxuICAgICAgICBkZWxldGUgc3R5bGVzSW5Eb21bX2RvbVN0eWxlLmlkXTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG59OyIsIi8vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4vLyAgZGF0YXNvdXJjZS5qcyAtIEdidGNcbi8vXG4vLyAgQ29weXJpZ2h0IO+/vSAyMDE3LCBHcmlkIFByb3RlY3Rpb24gQWxsaWFuY2UuICBBbGwgUmlnaHRzIFJlc2VydmVkLlxuLy9cbi8vICBMaWNlbnNlZCB0byB0aGUgR3JpZCBQcm90ZWN0aW9uIEFsbGlhbmNlIChHUEEpIHVuZGVyIG9uZSBvciBtb3JlIGNvbnRyaWJ1dG9yIGxpY2Vuc2UgYWdyZWVtZW50cy4gU2VlXG4vLyAgdGhlIE5PVElDRSBmaWxlIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyB3b3JrIGZvciBhZGRpdGlvbmFsIGluZm9ybWF0aW9uIHJlZ2FyZGluZyBjb3B5cmlnaHQgb3duZXJzaGlwLlxuLy8gIFRoZSBHUEEgbGljZW5zZXMgdGhpcyBmaWxlIHRvIHlvdSB1bmRlciB0aGUgTUlUIExpY2Vuc2UgKE1JVCksIHRoZSBcIkxpY2Vuc2VcIjsgeW91IG1heSBub3QgdXNlIHRoaXNcbi8vICBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdDpcbi8vXG4vLyAgICAgIGh0dHA6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcbi8vXG4vLyAgVW5sZXNzIGFncmVlZCB0byBpbiB3cml0aW5nLCB0aGUgc3ViamVjdCBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhblxuLy8gIFwiQVMtSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuIFJlZmVyIHRvIHRoZVxuLy8gIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zLlxuLy9cbi8vICBDb2RlIE1vZGlmaWNhdGlvbiBIaXN0b3J5OlxuLy8gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vICAxMC8zMC8yMDE3IC0gQmlsbHkgRXJuZXN0XG4vLyAgICAgICBHZW5lcmF0ZWQgb3JpZ2luYWwgdmVyc2lvbiBvZiBzb3VyY2UgY29kZS5cbi8vXG4vLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuXG5kZWNsYXJlIHZhciBfOiBhbnk7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE9wZW5IaXN0b3JpYW5EYXRhU291cmNle1xuICAgIHR5cGU6IGFueTtcbiAgICB1cmw6IHN0cmluZztcbiAgICBuYW1lOiBzdHJpbmc7XG4gICAgcTogYW55O1xuICAgIGRhdGFGbGFnczogYW55O1xuICAgIG9wdGlvbnM6IGFueTtcblxuICAgIC8qKiBAbmdJbmplY3QgKi9cbiAgICBjb25zdHJ1Y3RvcihpbnN0YW5jZVNldHRpbmdzLCAkcSwgcHJpdmF0ZSBiYWNrZW5kU3J2LCBwcml2YXRlIHRlbXBsYXRlU3J2LCBwcml2YXRlIHVpU2VnbWVudFNydikge1xuICAgICAgICB0aGlzLnR5cGUgPSBpbnN0YW5jZVNldHRpbmdzLnR5cGU7XG4gICAgICAgIHRoaXMudXJsID0gaW5zdGFuY2VTZXR0aW5ncy51cmw7XG4gICAgICAgIHRoaXMubmFtZSA9IGluc3RhbmNlU2V0dGluZ3MubmFtZTtcbiAgICAgICAgdGhpcy5xID0gJHE7XG4gICAgICAgIHRoaXMuYmFja2VuZFNydiA9IGJhY2tlbmRTcnY7XG4gICAgICAgIHRoaXMudGVtcGxhdGVTcnYgPSB0ZW1wbGF0ZVNydjtcbiAgICAgICAgdGhpcy51aVNlZ21lbnRTcnYgPSB1aVNlZ21lbnRTcnY7XG5cbiAgICAgICAgdGhpcy5kYXRhRmxhZ3MgPSBpbnN0YW5jZVNldHRpbmdzLmpzb25EYXRhLmZsYWdzO1xuICAgICAgICB0aGlzLm9wdGlvbnMgPSB7XG4gICAgICAgICAgICAgZXhjbHVkZWREYXRhRmxhZ3M6IChpbnN0YW5jZVNldHRpbmdzLmpzb25EYXRhLkV4Y2x1ZGVkID09IHVuZGVmaW5lZCA/IDAgOiBpbnN0YW5jZVNldHRpbmdzLmpzb25EYXRhLkV4Y2x1ZGVkKSxcbiAgICAgICAgICAgICBleGNsdWRlTm9ybWFsRGF0YTogKGluc3RhbmNlU2V0dGluZ3MuanNvbkRhdGEuTm9ybWFsID09IHVuZGVmaW5lZCA/IGZhbHNlIDogaW5zdGFuY2VTZXR0aW5ncy5qc29uRGF0YS5Ob3JtYWwpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBxdWVyeShvcHRpb25zKSB7XG5cbiAgICAgICAgdmFyIHF1ZXJ5ID0gdGhpcy5idWlsZFF1ZXJ5UGFyYW1ldGVycyhvcHRpb25zKTtcbiAgICAgICAgICAgIHF1ZXJ5LnRhcmdldHMgPSBxdWVyeS50YXJnZXRzLmZpbHRlcihmdW5jdGlvbiAodCkge1xuICAgICAgICAgICAgcmV0dXJuICF0LmhpZGU7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHF1ZXJ5Lm9wdGlvbnMgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHRoaXMub3B0aW9ucykpO1xuXG4gICAgICAgIGlmIChxdWVyeS50YXJnZXRzLmxlbmd0aCA8PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHsgZGF0YTogW10gfSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5iYWNrZW5kU3J2LmRhdGFzb3VyY2VSZXF1ZXN0KHtcbiAgICAgICAgICAgIHVybDogdGhpcy51cmwgKyAnL3F1ZXJ5JyxcbiAgICAgICAgICAgIGRhdGE6IHF1ZXJ5LFxuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICBoZWFkZXJzOiB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICB0ZXN0RGF0YXNvdXJjZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYmFja2VuZFNydi5kYXRhc291cmNlUmVxdWVzdCh7XG4gICAgICAgICAgICB1cmw6IHRoaXMudXJsICsgJy8nLFxuICAgICAgICAgICAgbWV0aG9kOiAnR0VUJ1xuICAgICAgICB9KS50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gMjAwKSB7XG4gICAgICAgICAgICByZXR1cm4geyBzdGF0dXM6IFwic3VjY2Vzc1wiLCBtZXNzYWdlOiBcIkRhdGEgc291cmNlIGlzIHdvcmtpbmdcIiwgdGl0bGU6IFwiU3VjY2Vzc1wiIH07XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGFubm90YXRpb25RdWVyeShvcHRpb25zKSB7XG4gICAgICAgIHZhciBxdWVyeSA9IHRoaXMudGVtcGxhdGVTcnYucmVwbGFjZShvcHRpb25zLmFubm90YXRpb24ucXVlcnksIHt9LCAnZ2xvYicpO1xuICAgICAgICB2YXIgYW5ub3RhdGlvblF1ZXJ5ID0ge1xuICAgICAgICAgICAgcmFuZ2U6IG9wdGlvbnMucmFuZ2UsXG4gICAgICAgICAgICBhbm5vdGF0aW9uOiB7XG4gICAgICAgICAgICBuYW1lOiBvcHRpb25zLmFubm90YXRpb24ubmFtZSxcbiAgICAgICAgICAgIGRhdGFzb3VyY2U6IG9wdGlvbnMuYW5ub3RhdGlvbi5kYXRhc291cmNlLFxuICAgICAgICAgICAgZW5hYmxlOiBvcHRpb25zLmFubm90YXRpb24uZW5hYmxlLFxuICAgICAgICAgICAgaWNvbkNvbG9yOiBvcHRpb25zLmFubm90YXRpb24uaWNvbkNvbG9yLFxuICAgICAgICAgICAgcXVlcnk6IHF1ZXJ5XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcmFuZ2VSYXc6IG9wdGlvbnMucmFuZ2VSYXdcbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gdGhpcy5iYWNrZW5kU3J2LmRhdGFzb3VyY2VSZXF1ZXN0KHtcbiAgICAgICAgICAgIHVybDogdGhpcy51cmwgKyAnL2Fubm90YXRpb25zJyxcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgZGF0YTogYW5ub3RhdGlvblF1ZXJ5XG4gICAgICAgIH0pLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdC5kYXRhO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBtZXRyaWNGaW5kUXVlcnkob3B0aW9uczogc3RyaW5nLCBvcHRpb25hbE9wdGlvbnM6IGFueSkge1xuICAgICAgICB2YXIgaW50ZXJwb2xhdGVkID0ge1xuICAgICAgICAgICAgdGFyZ2V0OiB0aGlzLnRlbXBsYXRlU3J2LnJlcGxhY2Uob3B0aW9ucywgbnVsbCwgJ3JlZ2V4JylcbiAgICAgICAgfTtcblxuXG4gICAgICAgIHJldHVybiB0aGlzLmJhY2tlbmRTcnYuZGF0YXNvdXJjZVJlcXVlc3Qoe1xuICAgICAgICAgICAgdXJsOiB0aGlzLnVybCArICcvc2VhcmNoJyxcbiAgICAgICAgICAgIGRhdGE6IGludGVycG9sYXRlZCxcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgaGVhZGVyczogeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH1cbiAgICAgICAgfSkudGhlbih0aGlzLm1hcFRvVGV4dFZhbHVlKTtcbiAgICB9XG5cbiAgICB3aGVyZUZpbmRRdWVyeShvcHRpb25zKSB7XG5cbiAgICAgICAgdmFyIGludGVycG9sYXRlZCA9IHtcbiAgICAgICAgICAgIHRhcmdldDogdGhpcy50ZW1wbGF0ZVNydi5yZXBsYWNlKG9wdGlvbnMsIG51bGwsICdyZWdleCcpXG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuYmFja2VuZFNydi5kYXRhc291cmNlUmVxdWVzdCh7XG4gICAgICAgICAgICB1cmw6IHRoaXMudXJsICsgJy9TZWFyY2hGaWVsZHMnLFxuICAgICAgICAgICAgZGF0YTogaW50ZXJwb2xhdGVkLFxuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICBoZWFkZXJzOiB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfVxuICAgICAgICB9KS50aGVuKHRoaXMubWFwVG9UZXh0VmFsdWUpO1xuICAgIH1cblxuICAgIG1hcFRvVGV4dFZhbHVlKHJlc3VsdCkge1xuICAgICAgICByZXR1cm4gXy5tYXAocmVzdWx0LmRhdGEsIGZ1bmN0aW9uIChkLCBpKSB7XG4gICAgICAgICAgICByZXR1cm4geyB0ZXh0OiBkLCB2YWx1ZTogZCB9O1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBidWlsZFF1ZXJ5UGFyYW1ldGVycyhvcHRpb25zKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICAgICAgLy9yZW1vdmUgcGxhY2Vob2xkZXIgdGFyZ2V0c1xuICAgICAgICBvcHRpb25zLnRhcmdldHMgPSBfLmZpbHRlcihvcHRpb25zLnRhcmdldHMsIGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgICAgICAgICAgIHJldHVybiB0YXJnZXQudGFyZ2V0ICE9PSAnc2VsZWN0IG1ldHJpYyc7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHZhciB0YXJnZXRzID0gXy5tYXAob3B0aW9ucy50YXJnZXRzLCBmdW5jdGlvbiAodGFyZ2V0KSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdGFyZ2V0OiBfdGhpcy5maXhUZW1wbGF0ZXModGFyZ2V0KSxcbiAgICAgICAgICAgIHJlZklkOiB0YXJnZXQucmVmSWQsXG4gICAgICAgICAgICBoaWRlOiB0YXJnZXQuaGlkZSwgXG4gICAgICAgICAgICBleGNsdWRlZEZsYWdzOiAoKHRhcmdldHx8e30pLnF1ZXJ5T3B0aW9uc3x8e30pLkV4Y2x1ZGVkIHx8IDAsXG4gICAgICAgICAgICBleGNsdWRlTm9ybWFsRmxhZ3M6ICgodGFyZ2V0fHx7fSkucXVlcnlPcHRpb25zfHx7fSkuTm9ybWFsIHx8IGZhbHNlLFxuICAgICAgICAgICAgcXVlcnlUeXBlOiB0YXJnZXQucXVlcnlUeXBlLFxuICAgICAgICAgICAgcXVlcnlPcHRpb25zOiB0YXJnZXQucXVlcnlPcHRpb25zXG4gICAgICAgICAgICB9O1xuICAgICAgICB9KTtcblxuICAgICAgICBvcHRpb25zLnRhcmdldHMgPSB0YXJnZXRzO1xuXG4gICAgICAgIHJldHVybiBvcHRpb25zO1xuICAgIH1cblxuICAgIGZpbHRlckZpbmRRdWVyeSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYmFja2VuZFNydi5kYXRhc291cmNlUmVxdWVzdCh7XG4gICAgICAgICAgICB1cmw6IHRoaXMudXJsICsgJy9TZWFyY2hGaWx0ZXJzJyxcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgaGVhZGVyczogeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH1cbiAgICAgICAgfSkudGhlbih0aGlzLm1hcFRvVGV4dFZhbHVlKTtcbiAgICB9XG5cblxuICAgIG9yZGVyQnlGaW5kUXVlcnkob3B0aW9ucykge1xuICAgICAgICB2YXIgaW50ZXJwb2xhdGVkID0ge1xuICAgICAgICAgICAgdGFyZ2V0OiB0aGlzLnRlbXBsYXRlU3J2LnJlcGxhY2Uob3B0aW9ucywgbnVsbCwgJ3JlZ2V4JylcbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gdGhpcy5iYWNrZW5kU3J2LmRhdGFzb3VyY2VSZXF1ZXN0KHtcbiAgICAgICAgICAgIHVybDogdGhpcy51cmwgKyAnL1NlYXJjaE9yZGVyQnlzJyxcbiAgICAgICAgICAgIGRhdGE6IGludGVycG9sYXRlZCxcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgaGVhZGVyczogeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH1cbiAgICAgICAgfSkudGhlbih0aGlzLm1hcFRvVGV4dFZhbHVlKTtcbiAgICB9XG5cbiAgICBnZXRNZXRhRGF0YShvcHRpb25zKSB7XG4gICAgICAgIHZhciBpbnRlcnBvbGF0ZWQgPSB7XG4gICAgICAgICAgICB0YXJnZXQ6IHRoaXMudGVtcGxhdGVTcnYucmVwbGFjZShvcHRpb25zLCBudWxsLCAncmVnZXgnKVxuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiB0aGlzLmJhY2tlbmRTcnYuZGF0YXNvdXJjZVJlcXVlc3Qoe1xuICAgICAgICAgICAgdXJsOiB0aGlzLnVybCArICcvR2V0TWV0YWRhdGEnLFxuICAgICAgICAgICAgZGF0YTogaW50ZXJwb2xhdGVkLFxuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICBoZWFkZXJzOiB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfVxuICAgICAgICB9KTtcblxuICAgIH1cblxuICAgIGdldEFsYXJtU3RhdGVzKG9wdGlvbnMpIHtcbiAgICAgICAgdmFyIGludGVycG9sYXRlZCA9IHtcbiAgICAgICAgICAgIHRhcmdldDogdGhpcy50ZW1wbGF0ZVNydi5yZXBsYWNlKG9wdGlvbnMsIG51bGwsICdyZWdleCcpXG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuYmFja2VuZFNydi5kYXRhc291cmNlUmVxdWVzdCh7XG4gICAgICAgICAgICB1cmw6IHRoaXMudXJsICsgJy9HZXRBbGFybVN0YXRlJyxcbiAgICAgICAgICAgIGRhdGE6IGludGVycG9sYXRlZCxcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgaGVhZGVyczogeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH1cbiAgICAgICAgfSk7XG5cbiAgICB9XG5cbiAgICBnZXREYXRhQXZhaWxhYmlsaXR5KG9wdGlvbnMpIHtcbiAgICAgICAgdmFyIGludGVycG9sYXRlZCA9IHtcbiAgICAgICAgICAgIHRhcmdldDogdGhpcy50ZW1wbGF0ZVNydi5yZXBsYWNlKG9wdGlvbnMsIG51bGwsICdyZWdleCcpXG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuYmFja2VuZFNydi5kYXRhc291cmNlUmVxdWVzdCh7XG4gICAgICAgICAgICB1cmw6IHRoaXMudXJsICsgJy9HZXREYXRhQXZhaWxhYmlsaXR5JyxcbiAgICAgICAgICAgIGRhdGE6IGludGVycG9sYXRlZCxcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgaGVhZGVyczogeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH1cbiAgICAgICAgfSk7XG5cbiAgICB9XG5cbiAgICBmaXhUZW1wbGF0ZXModGFyZ2V0KSB7XG4gICAgICAgIGlmICh0YXJnZXQudGFyZ2V0ID09IHVuZGVmaW5lZCkgcmV0dXJuICcnO1xuXG4gICAgICAgIHZhciBjdHJsID0gdGhpcztcblxuICAgICAgICB2YXIgc2VwID0gJyAnO1xuICAgICAgICBpZih0YXJnZXQucXVlcnlUeXBlID09ICdFbGVtZW50IExpc3QnKVxuICAgICAgICAgICAgc2VwID0gJzsnXG5cbiAgICAgICAgcmV0dXJuIHRhcmdldC50YXJnZXQuc3BsaXQoc2VwKS5tYXAoZnVuY3Rpb24gKGEpIHtcbiAgICAgICAgICAgIGlmIChjdHJsLnRlbXBsYXRlU3J2LnZhcmlhYmxlRXhpc3RzKGEpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGN0cmwudGVtcGxhdGVTcnYucmVwbGFjZVdpdGhUZXh0KGEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgIHJldHVybiBhXG4gICAgICAgIH0pLmpvaW4oc2VwKTtcbiAgICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9