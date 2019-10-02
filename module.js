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
/* WEBPACK VAR INJECTION */(function(global) {
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
        this.typingTimer = global.setTimeout(function () { ctrl.functionValueChanged(func, index); }, 3000);
        event.target['focus']();
    };
    return OpenHistorianElementPickerCtrl;
}());
exports.default = OpenHistorianElementPickerCtrl;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./controllers/openHistorianFilterExpression_ctrl.ts":
/*!***********************************************************!*\
  !*** ./controllers/openHistorianFilterExpression_ctrl.ts ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {
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
        ctrl.typingTimer = global.setTimeout(function () { ctrl.setTargetWithQuery(); }, 1000);
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
        this.typingTimer = global.setTimeout(function () { ctrl.functionValueChanged(func, index); }, 3000);
        event.target['focus']();
    };
    return OpenHistorianFilterExpressionCtrl;
}());
exports.default = OpenHistorianFilterExpressionCtrl;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

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
exports.push([module.i, ".generic-datasource-query-row .query-keyword {\r\n  width: 75px;\r\n}", ""]);


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

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29udHJvbGxlcnMvb3Blbkhpc3RvcmlhbkFubm90YXRpb25zX2N0cmwudHMiLCJ3ZWJwYWNrOi8vLy4vY29udHJvbGxlcnMvb3Blbkhpc3RvcmlhbkNvbmZpZ19jdHJsLnRzIiwid2VicGFjazovLy8uL2NvbnRyb2xsZXJzL29wZW5IaXN0b3JpYW5FbGVtZW50UGlja2VyX2N0cmwudHMiLCJ3ZWJwYWNrOi8vLy4vY29udHJvbGxlcnMvb3Blbkhpc3RvcmlhbkZpbHRlckV4cHJlc3Npb25fY3RybC50cyIsIndlYnBhY2s6Ly8vLi9jb250cm9sbGVycy9vcGVuSGlzdG9yaWFuUXVlcnlPcHRpb25zX2N0cmwudHMiLCJ3ZWJwYWNrOi8vLy4vY29udHJvbGxlcnMvb3Blbkhpc3RvcmlhblF1ZXJ5X2N0cmwudHMiLCJ3ZWJwYWNrOi8vLy4vY29udHJvbGxlcnMvb3Blbkhpc3RvcmlhblRleHRFZGl0b3JfY3RybC50cyIsIndlYnBhY2s6Ly8vLi9jc3MvcXVlcnktZWRpdG9yLmNzcz9lYzM5Iiwid2VicGFjazovLy8uL2pzL29wZW5IaXN0b3JpYW5Db25zdGFudHMudHMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlLnRzIiwid2VicGFjazovLy8uL2Nzcy9xdWVyeS1lZGl0b3IuY3NzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2dyYWZhbmEtc2RrLW1vY2tzL2FwcC9mZWF0dXJlcy9wYW5lbC9tZXRyaWNzX3BhbmVsX2N0cmwudHMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2dyYWZhbmEtc2RrLW1vY2tzL2FwcC9mZWF0dXJlcy9wYW5lbC9wYW5lbF9jdHJsLnRzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9ncmFmYW5hLXNkay1tb2Nrcy9hcHAvZmVhdHVyZXMvcGFuZWwvcXVlcnlfY3RybC50cyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZ3JhZmFuYS1zZGstbW9ja3MvYXBwL3BsdWdpbnMvc2RrLnRzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly8vKHdlYnBhY2spL2J1aWxkaW4vZ2xvYmFsLmpzIiwid2VicGFjazovLy8uL29wZW5IaXN0b3JpYW5EYXRhc291cmNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQzNEQTtJQUFBO0lBRUEsQ0FBQztJQURTLDZDQUFXLEdBQUcsaUNBQWlDLENBQUM7SUFDMUQsd0NBQUM7Q0FBQTtrQkFGb0IsaUNBQWlDOzs7Ozs7Ozs7Ozs7Ozs7QUNHdEQ7SUFJSSxpQ0FBWSxNQUFNO1FBQ2QsSUFBSSxJQUFJLEdB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SSxDQUFDLEVBQUU7SUFDeEQsZUFBZSxFQUFFLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFO0lBQ3pELFNBQVMsRUFBRSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRTtJQUNuRCxRQUFRLEVBQUUsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUU7SUFDbEQsV0FBVyxFQUFFLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFO0lBQ3JELFVBQVUsRUFBRSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRTtJQUNwRCxhQUFhLEVBQUUsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUU7SUFDdkQsZUFBZSxFQUFFLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFO0lBQzFELFFBQVEsRUFBRSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUUsQ0FBQyxJQUFJLEVBQUUsRUFBRTtJQUNwRCxhQUFhLEVBQUUsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLENBQUMsSUFBSSxFQUFFLEVBQUU7SUFDekQsZUFBZSxFQUFFLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLElBQUksRUFB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QUM7YUFDOUM7O2dCQUVHLE9BQU8sQ0FBQztRQUNoQixDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDakIsQ0FBQztJQUNMLDhCQUFDO0FBQUQsQ0FBQyIsImZpbGUiOiJtb2R1bGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL21vZHVsZS50c1wiKTtcbiIsIi8vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbi8vICBvcGVuSGlzdG9yaWFuQW5ub3RhdGlvbnNfY3RybC50cyAtIEdidGNcclxuLy9cclxuLy8gIENvcHlyaWdodCDvv70gMjAxOSwgR3JpZCBQcm90ZWN0aW9uIEFsbGlhbmNlLiAgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuLy9cclxuLy8gIExpY2Vuc2VkIHRvIHRoZSBHcmlkIFByb3RlY3Rpb24gQWxsaWFuY2UgKEdQQSkgdW5kZXIgb25lIG9yIG1vcmUgY29udHJpYnV0b3IgbGljZW5zZSBhZ3JlZW1lbnRzLiBTZWVcclxuLy8gIHRoZSBOT1RJQ0UgZmlsZSBkaXN0cmlidXRlZCB3aXRoIHRoaXMgd29yayBmb3IgYWRkaXRpb25hbCBpbmZvcm1hdGlvbiByZWdhcmRpbmcgY29weXJpZ2h0IG93bmVyc2hpcC5cclxuLy8gIFRoZSBHUEEgbGljZW5zZXMgdGhpcyBmaWxlIHRvIHlvdSB1bmRlciB0aGUgTUlUIExpY2Vuc2UgKE1JVCksIHRoZSBcIkxpY2Vuc2VcIjsgeW91IG1heSBub3QgdXNlIHRoaXNcclxuLy8gIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0OlxyXG4vL1xyXG4vLyAgICAgIGh0dHA6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcclxuLy9cclxuLy8gIFVubGVzcyBhZ3JlZWQgdG8gaW4gd3JpdGluZywgdGhlIHN1YmplY3Qgc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW5cclxuLy8gIFwiQVMtSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuIFJlZmVyIHRvIHRoZVxyXG4vLyAgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmQgbGltaXRhdGlvbnMuXHJcbi8vXHJcbi8vICBDb2RlIE1vZGlmaWNhdGlvbiBIaXN0b3J5OlxyXG4vLyAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyAgMDgvMTkvMjAxOSAtIEJpbGx5IEVybmVzdFxyXG4vLyAgICAgICBHZW5lcmF0ZWQgb3JpZ2luYWwgdmVyc2lvbiBvZiBzb3VyY2UgY29kZS5cclxuLy9cclxuLy8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE9wZW5IaXN0b3JpYW5Bbm5vdGF0aW9uc1F1ZXJ5Q3RybHtcclxuICAgc3RhdGljIHRlbXBsYXRlVXJsID0gJ3BhcnRpYWwvYW5ub3RhdGlvbnMuZWRpdG9yLmh0bWwnO1xyXG59XHJcbiIsIi8vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbi8vICBjb25maWdfY3RybC5qcyAtIEdidGNcclxuLy9cclxuLy8gIENvcHlyaWdodCDvv70gMjAxNywgR3JpZCBQcm90ZWN0aW9uIEFsbGlhbmNlLiAgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuLy9cclxuLy8gIExpY2Vuc2VkIHRvIHRoZSBHcmlkIFByb3RlY3Rpb24gQWxsaWFuY2UgKEdQQSkgdW5kZXIgb25lIG9yIG1vcmUgY29udHJpYnV0b3IgbGljZW5zZSBhZ3JlZW1lbnRzLiBTZWVcclxuLy8gIHRoZSBOT1RJQ0UgZmlsZSBkaXN0cmlidXRlZCB3aXRoIHRoaXMgd29yayBmb3IgYWRkaXRpb25hbCBpbmZvcm1hdGlvbiByZWdhcmRpbmcgY29weXJpZ2h0IG93bmVyc2hpcC5cclxuLy8gIFRoZSBHUEEgbGljZW5zZXMgdGhpcyBmaWxlIHRvIHlvdSB1bmRlciB0aGUgTUlUIExpY2Vuc2UgKE1JVCksIHRoZSBcIkxpY2Vuc2VcIjsgeW91IG1heSBub3QgdXNlIHRoaXNcclxuLy8gIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0OlxyXG4vL1xyXG4vLyAgICAgIGh0dHA6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcclxuLy9cclxuLy8gIFVubGVzcyBhZ3JlZWQgdG8gaW4gd3JpdGluZywgdGhlIHN1YmplY3Qgc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW5cclxuLy8gIFwiQVMtSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuIFJlZmVyIHRvIHRoZVxyXG4vLyAgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmQgbGltaXRhdGlvbnMuXHJcbi8vXHJcbi8vICBDb2RlIE1vZGlmaWNhdGlvbiBIaXN0b3J5OlxyXG4vLyAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyAgMTAvMzAvMjAxNyAtIEJpbGx5IEVybmVzdFxyXG4vLyAgICAgICBHZW5lcmF0ZWQgb3JpZ2luYWwgdmVyc2lvbiBvZiBzb3VyY2UgY29kZS5cclxuLy9cclxuLy8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuXHJcbmRlY2xhcmUgdmFyIF86IGFueTtcclxuaW1wb3J0IHsgRGVmYXVsdEZsYWdzIH0gZnJvbSAnLi8uLi9qcy9vcGVuSGlzdG9yaWFuQ29uc3RhbnRzJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgT3Blbkhpc3RvcmlhbkNvbmZpZ0N0cmx7XHJcbiAgICBzdGF0aWMgdGVtcGxhdGVVcmw6c3RyaW5nID0gJ3BhcnRpYWwvY29uZmlnLmh0bWwnO1xyXG4gICAgY3VycmVudDogYW55O1xyXG4gICAgZmxhZ0FycmF5OiBBcnJheTxhbnk+O1xyXG4gICAgY29uc3RydWN0b3IoJHNjb3BlKSB7XHJcbiAgICAgICAgdmFyIGN0cmwgPSB0aGlzO1xyXG5cclxuICAgICAgICBjdHJsLmN1cnJlbnQuanNvbkRhdGEuRXhjbHVkZWQgPSB0aGlzLmN1cnJlbnQuanNvbkRhdGEuRXhjbHVkZWQgfHwgMDtcclxuICAgICAgICBjdHJsLmN1cnJlbnQuanNvbkRhdGEuTm9ybWFsID0gdGhpcy5jdXJyZW50Lmpzb25EYXRhLk5vcm1hbCB8fCBmYWxzZTtcclxuXHJcbiAgICB9XHJcbn1cclxuXHJcbiIsIi8vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbi8vICBvcGVuSGlzdG9yaWFuRWxlbWVudFBpY2tlcl9jdHJsLnRzIC0gR2J0Y1xyXG4vL1xyXG4vLyAgQ29weXJpZ2h0IMKpIDIwMTcsIEdyaWQgUHJvdGVjdGlvbiBBbGxpYW5jZS4gIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbi8vXHJcbi8vICBMaWNlbnNlZCB0byB0aGUgR3JpZCBQcm90ZWN0aW9uIEFsbGlhbmNlIChHUEEpIHVuZGVyIG9uZSBvciBtb3JlIGNvbnRyaWJ1dG9yIGxpY2Vuc2UgYWdyZWVtZW50cy4gU2VlXHJcbi8vICB0aGUgTk9USUNFIGZpbGUgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIHdvcmsgZm9yIGFkZGl0aW9uYWwgaW5mb3JtYXRpb24gcmVnYXJkaW5nIGNvcHlyaWdodCBvd25lcnNoaXAuXHJcbi8vICBUaGUgR1BBIGxpY2Vuc2VzIHRoaXMgZmlsZSB0byB5b3UgdW5kZXIgdGhlIE1JVCBMaWNlbnNlIChNSVQpLCB0aGUgXCJMaWNlbnNlXCI7IHlvdSBtYXkgbm90IHVzZSB0aGlzXHJcbi8vICBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdDpcclxuLy9cclxuLy8gICAgICBodHRwOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXHJcbi8vXHJcbi8vICBVbmxlc3MgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHRoZSBzdWJqZWN0IHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuXHJcbi8vICBcIkFTLUlTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLiBSZWZlciB0byB0aGVcclxuLy8gIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zLlxyXG4vL1xyXG4vLyAgQ29kZSBNb2RpZmljYXRpb24gSGlzdG9yeTpcclxuLy8gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gIDEyLzEyLzIwMTcgLSBCaWxseSBFcm5lc3RcclxuLy8gICAgICAgR2VuZXJhdGVkIG9yaWdpbmFsIHZlcnNpb24gb2Ygc291cmNlIGNvZGUuXHJcbi8vXHJcbi8vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi9tb2R1bGUuZC50c1wiLz5cclxuXHJcbmltcG9ydCB7IEZ1bmN0aW9uTGlzdCwgQm9vbGVhbnMsIEFuZ2xlVW5pdHMsIFRpbWVVbml0cywgV2hlcmVPcGVyYXRvcnMgfSBmcm9tICcuLy4uL2pzL29wZW5IaXN0b3JpYW5Db25zdGFudHMnXHJcbmltcG9ydCBPcGVuSGlzdG9yaWFuRGF0YVNvdXJjZSBmcm9tICcuLi9vcGVuSGlzdG9yaWFuRGF0YXNvdXJjZSc7XHJcbmRlY2xhcmUgdmFyIF86IGFueTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE9wZW5IaXN0b3JpYW5FbGVtZW50UGlja2VyQ3RybHtcclxuICAgIGVsZW1lbnRTZWdtZW50OiBpU2VnbWVudDtcclxuICAgIHNlZ21lbnRzOiBBcnJheTxpU2VnbWVudD47XHJcbiAgICBmdW5jdGlvblNlZ21lbnQ6IGlGdW5jdGlvblNlZ21lbnQ7XHJcbiAgICBmdW5jdGlvblNlZ21lbnRzOiBBcnJheTxpRnVuY3Rpb25TZWdtZW50PjtcclxuICAgIGZ1bmN0aW9uczogQXJyYXk8aUZ1bmN0aW9uU2VnbWVudD47XHJcbiAgICB0eXBpbmdUaW1lcjogTm9kZUpTLlRpbWVvdXQ7XHJcbiAgICB0YXJnZXQ6IGlUYXJnZXQ7XHJcbiAgICBkYXRhc291cmNlOiBPcGVuSGlzdG9yaWFuRGF0YVNvdXJjZTtcclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgJHNjb3BlLCBwcml2YXRlIHVpU2VnbWVudFNydikge1xyXG4gICAgICAgIHZhciBjdHJsID0gdGhpcztcclxuXHJcbiAgICAgICAgdGhpcy4kc2NvcGUgPSAkc2NvcGU7XHJcbiAgICAgICAgdGhpcy51aVNlZ21lbnRTcnYgPSB1aVNlZ21lbnRTcnY7XHJcblxyXG4gICAgICAgIHRoaXMuc2VnbWVudHMgPSAodGhpcy4kc2NvcGUudGFyZ2V0LnNlZ21lbnRzID09IHVuZGVmaW5lZCA/IFtdIDogdGhpcy4kc2NvcGUudGFyZ2V0LnNlZ21lbnRzLm1hcChmdW5jdGlvbiAoYSkgeyByZXR1cm4gY3RybC51aVNlZ21lbnRTcnYubmV3U2VnbWVudCh7IHZhbHVlOiBhLnRleHQsIGV4cGFuZGFibGU6IHRydWUgfSkgfSkpO1xyXG4gICAgICAgIHRoaXMuZnVuY3Rpb25TZWdtZW50cyA9ICh0aGlzLiRzY29wZS50YXJnZXQuZnVuY3Rpb25TZWdtZW50cyA9PSB1bmRlZmluZWQgPyBbXSA6IHRoaXMuJHNjb3BlLnRhcmdldC5mdW5jdGlvblNlZ21lbnRzKTtcclxuICAgICAgICB0aGlzLmZ1bmN0aW9ucyA9IFtdO1xyXG4gICAgICAgIHRoaXMuZWxlbWVudFNlZ21lbnQgPSB0aGlzLnVpU2VnbWVudFNydi5uZXdQbHVzQnV0dG9uKCk7XHJcbiAgICAgICAgdGhpcy5mdW5jdGlvblNlZ21lbnQgPSB0aGlzLnVpU2VnbWVudFNydi5uZXdQbHVzQnV0dG9uKCk7XHJcblxyXG4gICAgICAgIHRoaXMuYnVpbGRGdW5jdGlvbkFycmF5KCk7XHJcblxyXG4gICAgICAgIHRoaXMuc2V0VGFyZ2V0V2l0aEVsZW1lbnRzKCk7XHJcblxyXG4gICAgICAgIGRlbGV0ZSAkc2NvcGUudGFyZ2V0LndoZXJlcztcclxuICAgICAgICBkZWxldGUgJHNjb3BlLnRhcmdldC50b3BOU2VnbWVudDtcclxuICAgICAgICBkZWxldGUgJHNjb3BlLnRhcmdldC5vcmRlckJ5cztcclxuICAgICAgICBkZWxldGUgJHNjb3BlLnRhcmdldC53aGVyZVNlZ21lbnQ7XHJcbiAgICAgICAgZGVsZXRlICRzY29wZS50YXJnZXQuZmlsdGVyU2VnbWVudDtcclxuICAgICAgICBkZWxldGUgJHNjb3BlLnRhcmdldC5vcmRlckJ5U2VnbWVudDtcclxuICAgICAgICBkZWxldGUgJHNjb3BlLnRhcmdldC50YXJnZXRUZXh0O1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBnZXRFbGVtZW50U2VnbWVudHMobmV3U2VnbWVudCkge1xyXG4gICAgICAgIHZhciBjdHJsID0gdGhpcztcclxuICAgICAgICB2YXIgb3B0aW9uID0gbnVsbDtcclxuICAgICAgICBpZiAoZXZlbnQudGFyZ2V0Wyd2YWx1ZSddICE9IFwiXCIpIG9wdGlvbiA9IGV2ZW50LnRhcmdldFsndmFsdWUnXTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGN0cmwuJHNjb3BlLmRhdGFzb3VyY2UubWV0cmljRmluZFF1ZXJ5KG9wdGlvbikudGhlbihkYXRhID0+IHtcclxuICAgICAgICAgICAgdmFyIGFsdFNlZ21lbnRzID0gXy5tYXAoZGF0YSwgaXRlbSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gY3RybC51aVNlZ21lbnRTcnYubmV3U2VnbWVudCh7IHZhbHVlOiBpdGVtLnRleHQsIGV4cGFuZGFibGU6IGl0ZW0uZXhwYW5kYWJsZSB9KVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgYWx0U2VnbWVudHMuc29ydCgoYSwgYikgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGEudmFsdWUgPCBiLnZhbHVlKVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAtMTtcclxuICAgICAgICAgICAgICAgIGlmIChhLnZhbHVlID4gYi52YWx1ZSlcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gMTtcclxuICAgICAgICAgICAgICAgIHJldHVybiAwO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIF8uZWFjaChjdHJsLiRzY29wZS5kYXRhc291cmNlLnRlbXBsYXRlU3J2LnZhcmlhYmxlcywgKGl0ZW0sIGluZGV4LCBsaXN0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoaXRlbS50eXBlID09IFwicXVlcnlcIilcclxuICAgICAgICAgICAgICAgICAgICBhbHRTZWdtZW50cy51bnNoaWZ0KGN0cmwudWlTZWdtZW50U3J2Lm5ld0NvbmRpdGlvbignJCcgKyBpdGVtLm5hbWUpKTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBpZiAoIW5ld1NlZ21lbnQpXHJcbiAgICAgICAgICAgICAgICBhbHRTZWdtZW50cy51bnNoaWZ0KGN0cmwudWlTZWdtZW50U3J2Lm5ld1NlZ21lbnQoJy1SRU1PVkUtJykpO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIF8uZmlsdGVyKGFsdFNlZ21lbnRzLCBzZWdtZW50ID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBfLmZpbmQoY3RybC5zZWdtZW50cywgeCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHgudmFsdWUgPT0gc2VnbWVudC52YWx1ZVxyXG4gICAgICAgICAgICAgICAgfSkgPT0gdW5kZWZpbmVkO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgYWRkRWxlbWVudFNlZ21lbnQoKSB7XHJcbiAgICAgICAgLy8gaWYgdmFsdWUgaXMgbm90IGVtcHR5LCBhZGQgbmV3IGF0dHJpYnV0ZSBzZWdtZW50XHJcbiAgICAgICAgaWYgKGV2ZW50LnRhcmdldFsndGV4dCddICE9IG51bGwpIHtcclxuICAgICAgICAgICAgdGhpcy5zZWdtZW50cy5wdXNoKHRoaXMudWlTZWdtZW50U3J2Lm5ld1NlZ21lbnQoeyB2YWx1ZTogZXZlbnQudGFyZ2V0Wyd0ZXh0J10sIGV4cGFuZGFibGU6IHRydWUgfSkpXHJcbiAgICAgICAgICAgIHRoaXMuc2V0VGFyZ2V0V2l0aEVsZW1lbnRzKClcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIHJlc2V0IHRoZSArIGJ1dHRvblxyXG4gICAgICAgIHZhciBwbHVzQnV0dG9uID0gdGhpcy51aVNlZ21lbnRTcnYubmV3UGx1c0J1dHRvbigpXHJcbiAgICAgICAgdGhpcy5lbGVtZW50U2VnbWVudC52YWx1ZSA9IHBsdXNCdXR0b24udmFsdWVcclxuICAgICAgICB0aGlzLmVsZW1lbnRTZWdtZW50Lmh0bWwgPSBwbHVzQnV0dG9uLmh0bWxcclxuICAgICAgICB0aGlzLiRzY29wZS5wYW5lbC5yZWZyZXNoKClcclxuXHJcbiAgICB9XHJcblxyXG4gICAgc2VnbWVudFZhbHVlQ2hhbmdlZChzZWdtZW50LCBpbmRleCkge1xyXG4gICAgICAgIGlmIChzZWdtZW50LnZhbHVlID09IFwiLVJFTU9WRS1cIikge1xyXG4gICAgICAgICAgICB0aGlzLnNlZ21lbnRzLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnNlZ21lbnRzW2luZGV4XSA9IHNlZ21lbnQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnNldFRhcmdldFdpdGhFbGVtZW50cygpXHJcbiAgICB9XHJcblxyXG4gICAgc2V0VGFyZ2V0V2l0aEVsZW1lbnRzKCkge1xyXG4gICAgICAgIHZhciBmdW5jdGlvbnMgPSAnJztcclxuICAgICAgICB2YXIgY3RybCA9IHRoaXM7XHJcbiAgICAgICAgXy5lYWNoKGN0cmwuZnVuY3Rpb25zLCBmdW5jdGlvbiAoZWxlbWVudCwgaW5kZXgsIGxpc3QpIHtcclxuICAgICAgICAgICAgaWYgKGVsZW1lbnQudmFsdWUgPT0gJ1FVRVJZJykgZnVuY3Rpb25zICs9IGN0cmwuc2VnbWVudHMubWFwKGZ1bmN0aW9uIChhKSB7IHJldHVybiBhLnZhbHVlIH0pLmpvaW4oJzsnKVxyXG4gICAgICAgICAgICBlbHNlIGZ1bmN0aW9ucyArPSBlbGVtZW50LnZhbHVlO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBjdHJsLiRzY29wZS50YXJnZXQudGFyZ2V0ID0gKGZ1bmN0aW9ucyAhPSBcIlwiID8gZnVuY3Rpb25zIDogY3RybC5zZWdtZW50cy5tYXAoZnVuY3Rpb24gKGEpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBhLnZhbHVlXHJcbiAgICAgICAgfSkuam9pbignOycpKTtcclxuXHJcbiAgICAgICAgY3RybC4kc2NvcGUudGFyZ2V0LmZ1bmN0aW9uU2VnbWVudHMgPSBjdHJsLmZ1bmN0aW9uU2VnbWVudHM7XHJcbiAgICAgICAgY3RybC4kc2NvcGUudGFyZ2V0LnNlZ21lbnRzID0gY3RybC5zZWdtZW50cztcclxuICAgICAgICBjdHJsLiRzY29wZS50YXJnZXQucXVlcnlUeXBlID0gJ0VsZW1lbnQgTGlzdCc7XHJcbiAgICAgICAgdGhpcy4kc2NvcGUucGFuZWwucmVmcmVzaCgpXHJcblxyXG4gICAgfVxyXG5cclxuICAgIGdldEZ1bmN0aW9uc1RvQWRkTmV3KCkge1xyXG4gICAgICAgIHZhciBjdHJsID0gdGhpcztcclxuICAgICAgICB2YXIgYXJyYXkgPSBbXVxyXG4gICAgICAgIF8uZWFjaChPYmplY3Qua2V5cyhGdW5jdGlvbkxpc3QpLCBmdW5jdGlvbiAoZWxlbWVudCwgaW5kZXgsIGxpc3QpIHtcclxuICAgICAgICAgICAgYXJyYXkucHVzaChjdHJsLnVpU2VnbWVudFNydi5uZXdTZWdtZW50KGVsZW1lbnQpKTtcclxuICAgICAgICB9KTtcclxuXHJcblxyXG4gICAgICAgIGlmICh0aGlzLmZ1bmN0aW9ucy5sZW5ndGggPT0gMCkgYXJyYXkgPSBhcnJheS5zbGljZSgyLCBhcnJheS5sZW5ndGgpO1xyXG5cclxuICAgICAgICBhcnJheS5zb3J0KGZ1bmN0aW9uKGEsIGIpIHtcclxuICAgICAgICAgICAgdmFyIG5hbWVBID0gYS52YWx1ZS50b1VwcGVyQ2FzZSgpOyAvLyBpZ25vcmUgdXBwZXIgYW5kIGxvd2VyY2FzZVxyXG4gICAgICAgICAgICB2YXIgbmFtZUIgPSBiLnZhbHVlLnRvVXBwZXJDYXNlKCk7IC8vIGlnbm9yZSB1cHBlciBhbmQgbG93ZXJjYXNlXHJcbiAgICAgICAgICAgIGlmKG5hbWVBIDwgbmFtZUIpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAtMTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIGlmIChuYW1lQSA+IG5hbWVCKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gMTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAvLyBuYW1lcyBtdXN0IGJlIGVxdWFsXHJcbiAgICAgICAgICAgICAgcmV0dXJuIDA7ICAgICAgICBcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShfLmZpbHRlcihhcnJheSwgc2VnbWVudCA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiBfLmZpbmQodGhpcy5mdW5jdGlvbnMsIHggPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHgudmFsdWUgPT0gc2VnbWVudC52YWx1ZTtcclxuICAgICAgICAgICAgfSkgPT0gdW5kZWZpbmVkO1xyXG4gICAgICAgIH0pKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRGdW5jdGlvbnNUb0VkaXQoZnVuYywgaW5kZXgpOiBhbnkge1xyXG4gICAgICAgIHZhciBjdHJsID0gdGhpcztcclxuICAgICAgICB2YXIgcmVtb3ZlID0gW3RoaXMudWlTZWdtZW50U3J2Lm5ld1NlZ21lbnQoJy1SRU1PVkUtJyldO1xyXG4gICAgICAgIGlmIChmdW5jLnR5cGUgPT0gJ09wZXJhdG9yJykgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xyXG4gICAgICAgIGVsc2UgaWYgKGZ1bmMudmFsdWUgPT0gJ1NldCcpIHJldHVybiBQcm9taXNlLnJlc29sdmUocmVtb3ZlKVxyXG5cclxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHJlbW92ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb25WYWx1ZUNoYW5nZWQoZnVuYywgaW5kZXgpIHtcclxuICAgICAgICB2YXIgZnVuY1NlZyA9IEZ1bmN0aW9uTGlzdFtmdW5jLkZ1bmN0aW9uXTtcclxuXHJcbiAgICAgICAgaWYgKGZ1bmMudmFsdWUgPT0gXCItUkVNT1ZFLVwiKSB7XHJcbiAgICAgICAgICAgIHZhciBsID0gMTtcclxuICAgICAgICAgICAgdmFyIGZpID0gXy5maW5kSW5kZXgodGhpcy5mdW5jdGlvblNlZ21lbnRzLCBmdW5jdGlvbiAoc2VnbWVudCkgeyByZXR1cm4gc2VnbWVudC5GdW5jdGlvbiA9PSBmdW5jLkZ1bmN0aW9uIH0pO1xyXG4gICAgICAgICAgICBpZiAoZnVuYy5GdW5jdGlvbiA9PSAnU2xpY2UnKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5mdW5jdGlvblNlZ21lbnRzW2ZpICsgMV0uUGFyYW1ldGVycyA9IHRoaXMuZnVuY3Rpb25TZWdtZW50c1tmaSArIDFdLlBhcmFtZXRlcnMuc2xpY2UoMSwgdGhpcy5mdW5jdGlvblNlZ21lbnRzW2ZpICsgMV0uUGFyYW1ldGVycy5sZW5ndGgpO1xyXG4gICAgICAgICAgICBlbHNlIGlmIChmaSA+IDAgJiYgKHRoaXMuZnVuY3Rpb25TZWdtZW50c1tmaSAtIDFdLkZ1bmN0aW9uID09ICdTZXQnIHx8IHRoaXMuZnVuY3Rpb25TZWdtZW50c1tmaSAtIDFdLkZ1bmN0aW9uID09ICdTbGljZScpKSB7XHJcbiAgICAgICAgICAgICAgICAtLWZpO1xyXG4gICAgICAgICAgICAgICAgKytsO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB0aGlzLmZ1bmN0aW9uU2VnbWVudHMuc3BsaWNlKGZpLCBsKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoZnVuYy5UeXBlICE9ICdGdW5jdGlvbicpIHtcclxuICAgICAgICAgICAgdmFyIGZpID0gXy5maW5kSW5kZXgodGhpcy5mdW5jdGlvblNlZ21lbnRzLCBmdW5jdGlvbiAoc2VnbWVudCkgeyByZXR1cm4gc2VnbWVudC5GdW5jdGlvbiA9PSBmdW5jLkZ1bmN0aW9uIH0pO1xyXG4gICAgICAgICAgICB0aGlzLmZ1bmN0aW9uU2VnbWVudHNbZmldLlBhcmFtZXRlcnNbZnVuYy5JbmRleF0uRGVmYXVsdCA9IGZ1bmMudmFsdWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmJ1aWxkRnVuY3Rpb25BcnJheSgpXHJcblxyXG4gICAgICAgIHRoaXMuc2V0VGFyZ2V0V2l0aEVsZW1lbnRzKClcclxuXHJcbiAgICB9XHJcblxyXG4gICAgYWRkRnVuY3Rpb25TZWdtZW50KCkge1xyXG4gICAgICAgIHZhciBmdW5jID0gRnVuY3Rpb25MaXN0W2V2ZW50LnRhcmdldFsndGV4dCddXTtcclxuXHJcbiAgICAgICAgaWYgKGZ1bmMuRnVuY3Rpb24gPT0gJ1NsaWNlJykge1xyXG4gICAgICAgICAgICB0aGlzLmZ1bmN0aW9uU2VnbWVudHNbMF0uUGFyYW1ldGVycy51bnNoaWZ0KGZ1bmMuUGFyYW1ldGVyc1swXSlcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuZnVuY3Rpb25TZWdtZW50cy51bnNoaWZ0KEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoZnVuYykpKTtcclxuICAgICAgICB0aGlzLmJ1aWxkRnVuY3Rpb25BcnJheSgpO1xyXG5cclxuICAgICAgICAvLyByZXNldCB0aGUgKyBidXR0b25cclxuICAgICAgICB2YXIgcGx1c0J1dHRvbiA9IHRoaXMudWlTZWdtZW50U3J2Lm5ld1BsdXNCdXR0b24oKVxyXG4gICAgICAgIHRoaXMuZnVuY3Rpb25TZWdtZW50LnZhbHVlID0gcGx1c0J1dHRvbi52YWx1ZVxyXG4gICAgICAgIHRoaXMuZnVuY3Rpb25TZWdtZW50Lmh0bWwgPSBwbHVzQnV0dG9uLmh0bWxcclxuXHJcbiAgICAgICAgdGhpcy5zZXRUYXJnZXRXaXRoRWxlbWVudHMoKVxyXG4gICAgfVxyXG5cclxuICAgIGJ1aWxkRnVuY3Rpb25BcnJheSgpIHtcclxuICAgICAgICB2YXIgY3RybCA9IHRoaXM7XHJcbiAgICAgICAgY3RybC5mdW5jdGlvbnMgPSBbXTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuZnVuY3Rpb25TZWdtZW50cy5sZW5ndGggPT0gMCkgcmV0dXJuO1xyXG5cclxuICAgICAgICBfLmVhY2goY3RybC5mdW5jdGlvblNlZ21lbnRzLCBmdW5jdGlvbiAoZWxlbWVudCwgaW5kZXgsIGxpc3QpIHtcclxuICAgICAgICAgICAgdmFyIG5ld0VsZW1lbnQgPSBjdHJsLnVpU2VnbWVudFNydi5uZXdTZWdtZW50KGVsZW1lbnQuRnVuY3Rpb24pXHJcbiAgICAgICAgICAgIG5ld0VsZW1lbnQuVHlwZSA9ICdGdW5jdGlvbic7XHJcbiAgICAgICAgICAgIG5ld0VsZW1lbnQuRnVuY3Rpb24gPSBlbGVtZW50LkZ1bmN0aW9uO1xyXG5cclxuICAgICAgICAgICAgY3RybC5mdW5jdGlvbnMucHVzaChuZXdFbGVtZW50KVxyXG5cclxuICAgICAgICAgICAgaWYgKG5ld0VsZW1lbnQudmFsdWUgPT0gJ1NldCcgfHwgbmV3RWxlbWVudC52YWx1ZSA9PSAnU2xpY2UnKSByZXR1cm47XHJcblxyXG4gICAgICAgICAgICB2YXIgb3BlcmF0b3IgPSBjdHJsLnVpU2VnbWVudFNydi5uZXdPcGVyYXRvcignKCcpO1xyXG4gICAgICAgICAgICBvcGVyYXRvci5UeXBlID0gJ09wZXJhdG9yJztcclxuICAgICAgICAgICAgY3RybC5mdW5jdGlvbnMucHVzaChvcGVyYXRvcik7XHJcblxyXG4gICAgICAgICAgICBfLmVhY2goZWxlbWVudC5QYXJhbWV0ZXJzLCBmdW5jdGlvbiAocGFyYW0sIGksIGopIHtcclxuICAgICAgICAgICAgICAgIHZhciBkID0gY3RybC51aVNlZ21lbnRTcnYubmV3RmFrZShwYXJhbS5EZWZhdWx0LnRvU3RyaW5nKCkpO1xyXG4gICAgICAgICAgICAgICAgZC5UeXBlID0gcGFyYW0uVHlwZTtcclxuICAgICAgICAgICAgICAgIGQuRnVuY3Rpb24gPSBlbGVtZW50LkZ1bmN0aW9uO1xyXG4gICAgICAgICAgICAgICAgZC5EZXNjcmlwdGlvbiA9IHBhcmFtLkRlc2NyaXB0aW9uO1xyXG4gICAgICAgICAgICAgICAgZC5JbmRleCA9IGk7XHJcbiAgICAgICAgICAgICAgICBjdHJsLmZ1bmN0aW9ucy5wdXNoKGQpO1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBvcGVyYXRvciA9IGN0cmwudWlTZWdtZW50U3J2Lm5ld09wZXJhdG9yKCcsJyk7XHJcbiAgICAgICAgICAgICAgICBvcGVyYXRvci5UeXBlID0gJ09wZXJhdG9yJztcclxuICAgICAgICAgICAgICAgIGN0cmwuZnVuY3Rpb25zLnB1c2gob3BlcmF0b3IpO1xyXG4gICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdmFyIHF1ZXJ5ID0gY3RybC51aVNlZ21lbnRTcnYubmV3Q29uZGl0aW9uKCdRVUVSWScpO1xyXG4gICAgICAgIHF1ZXJ5LlR5cGUgPSAnUXVlcnknO1xyXG4gICAgICAgIGN0cmwuZnVuY3Rpb25zLnB1c2gocXVlcnkpO1xyXG5cclxuICAgICAgICBmb3IgKHZhciBpIGluIGN0cmwuZnVuY3Rpb25TZWdtZW50cykge1xyXG4gICAgICAgICAgICBpZiAoY3RybC5mdW5jdGlvblNlZ21lbnRzW2ldLkZ1bmN0aW9uICE9ICdTZXQnICYmIGN0cmwuZnVuY3Rpb25TZWdtZW50c1tpXS5GdW5jdGlvbiAhPSAnU2xpY2UnKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgb3BlcmF0b3IgPSBjdHJsLnVpU2VnbWVudFNydi5uZXdPcGVyYXRvcignKScpO1xyXG4gICAgICAgICAgICAgICAgb3BlcmF0b3IuVHlwZSA9ICdPcGVyYXRvcic7XHJcbiAgICAgICAgICAgICAgICBjdHJsLmZ1bmN0aW9ucy5wdXNoKG9wZXJhdG9yKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGdldEJvb2xlYW5zKCkge1xyXG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoQm9vbGVhbnMubWFwKHZhbHVlID0+IHsgcmV0dXJuIHRoaXMudWlTZWdtZW50U3J2Lm5ld1NlZ21lbnQodmFsdWUpIH0pKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRBbmdsZVVuaXRzKCkge1xyXG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoQW5nbGVVbml0cy5tYXAodmFsdWUgPT4geyByZXR1cm4gdGhpcy51aVNlZ21lbnRTcnYubmV3U2VnbWVudCh2YWx1ZSkgfSkpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFRpbWVTZWxlY3QoKSB7XHJcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShUaW1lVW5pdHMubWFwKHZhbHVlID0+IHsgcmV0dXJuIHRoaXMudWlTZWdtZW50U3J2Lm5ld1NlZ21lbnQodmFsdWUpIH0pKTtcclxuICAgIH1cclxuXHJcbiAgICBpbnB1dENoYW5nZShmdW5jLCBpbmRleCkge1xyXG4gICAgICAgIHZhciBjdHJsID0gdGhpcztcclxuICAgICAgICBjbGVhclRpbWVvdXQodGhpcy50eXBpbmdUaW1lcik7XHJcbiAgICAgICAgdGhpcy50eXBpbmdUaW1lciA9IGdsb2JhbC5zZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHsgY3RybC5mdW5jdGlvblZhbHVlQ2hhbmdlZChmdW5jLCBpbmRleCkgfSwgMzAwMCk7XHJcbiAgICAgICAgZXZlbnQudGFyZ2V0Wydmb2N1cyddKCk7XHJcblxyXG4gICAgfVxyXG5cclxufSIsIi8vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbi8vICBvcGVuSGlzdG9yaWFuRmlsdGVyRXhwcmVzc2lvbl9jdHJsLnRzIC0gR2J0Y1xyXG4vL1xyXG4vLyAgQ29weXJpZ2h0IMKpIDIwMTcsIEdyaWQgUHJvdGVjdGlvbiBBbGxpYW5jZS4gIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbi8vXHJcbi8vICBMaWNlbnNlZCB0byB0aGUgR3JpZCBQcm90ZWN0aW9uIEFsbGlhbmNlIChHUEEpIHVuZGVyIG9uZSBvciBtb3JlIGNvbnRyaWJ1dG9yIGxpY2Vuc2UgYWdyZWVtZW50cy4gU2VlXHJcbi8vICB0aGUgTk9USUNFIGZpbGUgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIHdvcmsgZm9yIGFkZGl0aW9uYWwgaW5mb3JtYXRpb24gcmVnYXJkaW5nIGNvcHlyaWdodCBvd25lcnNoaXAuXHJcbi8vICBUaGUgR1BBIGxpY2Vuc2VzIHRoaXMgZmlsZSB0byB5b3UgdW5kZXIgdGhlIE1JVCBMaWNlbnNlIChNSVQpLCB0aGUgXCJMaWNlbnNlXCI7IHlvdSBtYXkgbm90IHVzZSB0aGlzXHJcbi8vICBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdDpcclxuLy9cclxuLy8gICAgICBodHRwOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXHJcbi8vXHJcbi8vICBVbmxlc3MgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHRoZSBzdWJqZWN0IHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuXHJcbi8vICBcIkFTLUlTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLiBSZWZlciB0byB0aGVcclxuLy8gIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zLlxyXG4vL1xyXG4vLyAgQ29kZSBNb2RpZmljYXRpb24gSGlzdG9yeTpcclxuLy8gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gIDEyLzEyLzIwMTcgLSBCaWxseSBFcm5lc3RcclxuLy8gICAgICAgR2VuZXJhdGVkIG9yaWdpbmFsIHZlcnNpb24gb2Ygc291cmNlIGNvZGUuXHJcbi8vXHJcbi8vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi9tb2R1bGUuZC50c1wiLz5cclxuXHJcbmltcG9ydCB7IEZ1bmN0aW9uTGlzdCwgQm9vbGVhbnMsIEFuZ2xlVW5pdHMsIFRpbWVVbml0cywgV2hlcmVPcGVyYXRvcnMgfSBmcm9tICcuLy4uL2pzL29wZW5IaXN0b3JpYW5Db25zdGFudHMnXHJcblxyXG5pbXBvcnQgT3Blbkhpc3RvcmlhbkRhdGFTb3VyY2UgZnJvbSAnLi4vb3Blbkhpc3RvcmlhbkRhdGFzb3VyY2UnO1xyXG5pbXBvcnQgeyBQYW5lbEN0cmwgfSBmcm9tICdncmFmYW5hLXNkay1tb2Nrcy9hcHAvcGx1Z2lucy9zZGsnO1xyXG5pbXBvcnQgeyBRdWVyeUN0cmwgfSBmcm9tICdncmFmYW5hLXNkay1tb2Nrcy9hcHAvcGx1Z2lucy9zZGsnO1xyXG5kZWNsYXJlIHZhciBfOiBhbnk7XHJcbmRlY2xhcmUgdmFyICQ6IGFueTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE9wZW5IaXN0b3JpYW5GaWx0ZXJFeHByZXNzaW9uQ3RybCB7XHJcbiAgICB3aGVyZXM6IEFycmF5PGlTZWdtZW50PjtcclxuICAgIGZ1bmN0aW9uU2VnbWVudHM6IEFycmF5PGlGdW5jdGlvblNlZ21lbnQ+O1xyXG4gICAgdG9wTlNlZ21lbnQ6IG51bWJlcjtcclxuICAgIGZ1bmN0aW9uczogQXJyYXk8aUZ1bmN0aW9uU2VnbWVudD47XHJcbiAgICBvcmRlckJ5czogQXJyYXk8aVNlZ21lbnQ+O1xyXG4gICAgd2hlcmVTZWdtZW50OiBpU2VnbWVudDtcclxuICAgIGZpbHRlclNlZ21lbnQ6IGlTZWdtZW50O1xyXG4gICAgb3JkZXJCeVNlZ21lbnQ6IGlTZWdtZW50O1xyXG4gICAgZnVuY3Rpb25TZWdtZW50OiBpRnVuY3Rpb25TZWdtZW50O1xyXG4gICAgdHlwaW5nVGltZXI6IE5vZGVKUy5UaW1lb3V0O1xyXG4gICAgdGFyZ2V0OiBpVGFyZ2V0O1xyXG4gICAgZGF0YXNvdXJjZTogT3Blbkhpc3RvcmlhbkRhdGFTb3VyY2U7XHJcbiAgICBwYW5lbEN0cmw6IFBhbmVsQ3RybDtcclxuICAgICRzY29wZTogYW55O1xyXG4gICAgY29uc3RydWN0b3IoJHNjb3BlLCAkaW5qZWN0b3IsIHByaXZhdGUgdWlTZWdtZW50U3J2OiBhbnkpIHtcclxuICAgICAgICB0aGlzLnVpU2VnbWVudFNydiA9IHVpU2VnbWVudFNydjtcclxuICAgICAgICB0aGlzLiRzY29wZSA9ICRzY29wZTtcclxuICAgICAgICB0aGlzLnRhcmdldCA9ICRzY29wZS50YXJnZXQ7XHJcbiAgICAgICAgdGhpcy5kYXRhc291cmNlID0gJHNjb3BlLmRhdGFzb3VyY2U7XHJcbiAgICAgICAgdGhpcy5wYW5lbEN0cmwgPSAkc2NvcGUucGFuZWw7XHJcblxyXG4gICAgICAgIHZhciBjdHJsID0gdGhpcztcclxuXHJcbiAgICAgICAgdGhpcy53aGVyZXMgPSAodGhpcy50YXJnZXQud2hlcmVzID09IHVuZGVmaW5lZCA/IFtdIDogdGhpcy50YXJnZXQud2hlcmVzLm1hcChmdW5jdGlvbiAoYSkge1xyXG4gICAgICAgICAgICBpZiAoYS50eXBlID09ICdvcGVyYXRvcicpIHJldHVybiBjdHJsLnVpU2VnbWVudFNydi5uZXdPcGVyYXRvcihhLnRleHQpO1xyXG4gICAgICAgICAgICBlbHNlIGlmIChhLnR5cGUgPT0gJ2NvbmRpdGlvbicpIHJldHVybiBjdHJsLnVpU2VnbWVudFNydi5uZXdDb25kaXRpb24oYS50ZXh0KTtcclxuICAgICAgICAgICAgZWxzZSByZXR1cm4gY3RybC51aVNlZ21lbnRTcnYubmV3U2VnbWVudChhLnZhbHVlKTtcclxuICAgICAgICB9KSk7XHJcbiAgICAgICAgdGhpcy5mdW5jdGlvblNlZ21lbnRzID0gKHRoaXMudGFyZ2V0LmZ1bmN0aW9uU2VnbWVudHMgPT0gdW5kZWZpbmVkID8gW10gOiB0aGlzLnRhcmdldC5mdW5jdGlvblNlZ21lbnRzKTtcclxuICAgICAgICB0aGlzLnRvcE5TZWdtZW50ID0gKHRoaXMudGFyZ2V0LnRvcE5TZWdtZW50ID09IHVuZGVmaW5lZCA/IG51bGwgOiB0aGlzLnRhcmdldC50b3BOU2VnbWVudCk7XHJcbiAgICAgICAgdGhpcy5mdW5jdGlvbnMgPSBbXTtcclxuICAgICAgICB0aGlzLm9yZGVyQnlzID0gKHRoaXMudGFyZ2V0Lm9yZGVyQnlzID09IHVuZGVmaW5lZCA/IFtdIDogdGhpcy50YXJnZXQub3JkZXJCeXMubWFwKGZ1bmN0aW9uIChhKSB7XHJcbiAgICAgICAgICAgIGlmIChhLnR5cGUgPT0gJ2NvbmRpdGlvbicpXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gY3RybC51aVNlZ21lbnRTcnYubmV3Q29uZGl0aW9uKGEudmFsdWUpO1xyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gY3RybC51aVNlZ21lbnRTcnYubmV3U2VnbWVudChhLnZhbHVlKTtcclxuICAgICAgICB9KSk7XHJcbiAgICAgICAgdGhpcy53aGVyZVNlZ21lbnQgPSB0aGlzLnVpU2VnbWVudFNydi5uZXdQbHVzQnV0dG9uKCk7XHJcbiAgICAgICAgdGhpcy5maWx0ZXJTZWdtZW50ID0gKHRoaXMudGFyZ2V0LmZpbHRlclNlZ21lbnQgPT0gdW5kZWZpbmVkID8gdGhpcy51aVNlZ21lbnRTcnYubmV3U2VnbWVudCgnQWN0aXZlTWVhc3VyZW1lbnRzJykgOiB0aGlzLnVpU2VnbWVudFNydi5uZXdTZWdtZW50KHRoaXMudGFyZ2V0LmZpbHRlclNlZ21lbnQudmFsdWUpKTtcclxuICAgICAgICB0aGlzLm9yZGVyQnlTZWdtZW50ID0gdGhpcy51aVNlZ21lbnRTcnYubmV3UGx1c0J1dHRvbigpO1xyXG4gICAgICAgIHRoaXMuZnVuY3Rpb25TZWdtZW50ID0gdGhpcy51aVNlZ21lbnRTcnYubmV3UGx1c0J1dHRvbigpO1xyXG4gICAgICAgIHRoaXMudHlwaW5nVGltZXI7XHJcblxyXG4gICAgICAgIGRlbGV0ZSAkc2NvcGUudGFyZ2V0LnNlZ21lbnRzO1xyXG4gICAgICAgIGRlbGV0ZSAkc2NvcGUudGFyZ2V0LnRhcmdldFRleHQ7XHJcbiAgICAgICAgdGhpcy5zZXRUYXJnZXRXaXRoUXVlcnkoKVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBzZXRUYXJnZXRXaXRoUXVlcnkoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMud2hlcmVzLmxlbmd0aCA9PSAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMudGFyZ2V0LnRhcmdldCA9ICcnO1xyXG4gICAgICAgICAgICB0aGlzLnBhbmVsQ3RybC5yZWZyZXNoKClcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdmFyIGZpbHRlciA9IHRoaXMuZmlsdGVyU2VnbWVudC52YWx1ZSArICcgJztcclxuICAgICAgICB2YXIgdG9wbiA9ICh0aGlzLnRvcE5TZWdtZW50ID8gJ1RPUCAnICsgdGhpcy50b3BOU2VnbWVudCArICcgJyA6ICcnKTtcclxuICAgICAgICB2YXIgd2hlcmUgPSAnV0hFUkUgJztcclxuXHJcbiAgICAgICAgXy5lYWNoKHRoaXMud2hlcmVzLCBmdW5jdGlvbiAoZWxlbWVudCwgaW5kZXgsIGxpc3QpIHtcclxuICAgICAgICAgICAgd2hlcmUgKz0gZWxlbWVudC52YWx1ZSArICcgJ1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB2YXIgb3JkZXJieSA9ICcnO1xyXG4gICAgICAgIF8uZWFjaCh0aGlzLm9yZGVyQnlzLCBmdW5jdGlvbiAoZWxlbWVudCwgaW5kZXgsIGxpc3QpIHtcclxuICAgICAgICAgICAgb3JkZXJieSArPSAoaW5kZXggPT0gMCA/ICdPUkRFUiBCWSAnIDogJycpICsgZWxlbWVudC52YWx1ZSArIChlbGVtZW50LnR5cGUgPT0gJ2NvbmRpdGlvbicgJiYgaW5kZXggPCBsaXN0Lmxlbmd0aCAtIDEgPyAnLCcgOiAnJykgKyAnICc7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHZhciBxdWVyeSA9ICdGSUxURVIgJyArIHRvcG4gKyBmaWx0ZXIgKyB3aGVyZSArIG9yZGVyYnk7XHJcbiAgICAgICAgdmFyIGZ1bmN0aW9ucyA9ICcnO1xyXG5cclxuICAgICAgICBfLmVhY2godGhpcy5mdW5jdGlvbnMsIGZ1bmN0aW9uIChlbGVtZW50LCBpbmRleCwgbGlzdCkge1xyXG4gICAgICAgICAgICBpZiAoZWxlbWVudC52YWx1ZSA9PSAnUVVFUlknKSBmdW5jdGlvbnMgKz0gcXVlcnk7XHJcbiAgICAgICAgICAgIGVsc2UgZnVuY3Rpb25zICs9IGVsZW1lbnQudmFsdWU7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMudGFyZ2V0LnRhcmdldCA9IChmdW5jdGlvbnMgIT0gXCJcIiA/IGZ1bmN0aW9ucyA6IHF1ZXJ5KTtcclxuICAgICAgICB0aGlzLnRhcmdldC50b3BOU2VnbWVudCA9IHRoaXMudG9wTlNlZ21lbnQ7XHJcbiAgICAgICAgdGhpcy50YXJnZXQuZmlsdGVyU2VnbWVudCA9IHRoaXMuZmlsdGVyU2VnbWVudDtcclxuICAgICAgICB0aGlzLnRhcmdldC5vcmRlckJ5cyA9IHRoaXMub3JkZXJCeXM7XHJcbiAgICAgICAgdGhpcy50YXJnZXQud2hlcmVzID0gdGhpcy53aGVyZXM7XHJcbiAgICAgICAgdGhpcy50YXJnZXQuZnVuY3Rpb25TZWdtZW50cyA9IHRoaXMuZnVuY3Rpb25TZWdtZW50cztcclxuICAgICAgICB0aGlzLnRhcmdldC5xdWVyeVR5cGUgPSAnRmlsdGVyIEV4cHJlc3Npb24nO1xyXG4gICAgICAgIHRoaXMucGFuZWxDdHJsLnJlZnJlc2goKVxyXG5cclxuICAgIH1cclxuXHJcbiAgICAvLyAjcmVnaW9uIFRPUCBOXHJcbiAgICB0b3BOVmFsdWVDaGFuZ2VkKCkge1xyXG4gICAgICAgIHZhciBjdHJsID0gdGhpcztcclxuXHJcbiAgICAgICAgY2xlYXJUaW1lb3V0KGN0cmwudHlwaW5nVGltZXIpO1xyXG4gICAgICAgIGN0cmwudHlwaW5nVGltZXIgPSBnbG9iYWwuc2V0VGltZW91dChmdW5jdGlvbiAoKSB7IGN0cmwuc2V0VGFyZ2V0V2l0aFF1ZXJ5KCkgfSwgMTAwMCk7XHJcbiAgICAgICAgZXZlbnQudGFyZ2V0Wydmb2N1cyddKCk7XHJcblxyXG4gICAgfVxyXG4gICAgLy8gI2VuZHJlZ2lvblxyXG5cclxuICAgIC8vICNyZWdpb24gV2hlcmVzXHJcbiAgICBnZXRXaGVyZXNUb0VkaXQod2hlcmUsIGluZGV4KSB7XHJcblxyXG4gICAgICAgIGlmICh3aGVyZS50eXBlID09PSAnb3BlcmF0b3InKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodGhpcy51aVNlZ21lbnRTcnYubmV3T3BlcmF0b3JzKFdoZXJlT3BlcmF0b3JzKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHdoZXJlLnR5cGUgPT09ICd2YWx1ZScpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShudWxsKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAod2hlcmUudHlwZSA9PT0gJ2NvbmRpdGlvbicpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShbdGhpcy51aVNlZ21lbnRTcnYubmV3Q29uZGl0aW9uKCdBTkQnKSwgdGhpcy51aVNlZ21lbnRTcnYubmV3Q29uZGl0aW9uKCdPUicpXSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5kYXRhc291cmNlLndoZXJlRmluZFF1ZXJ5KHRoaXMuZmlsdGVyU2VnbWVudC52YWx1ZSkudGhlbihkYXRhID0+IHtcclxuICAgICAgICAgICAgICAgIHZhciBhbHRTZWdtZW50cyA9IF8ubWFwKGRhdGEsIGl0ZW0gPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnVpU2VnbWVudFNydi5uZXdTZWdtZW50KHsgdmFsdWU6IGl0ZW0udGV4dCwgZXhwYW5kYWJsZTogaXRlbS5leHBhbmRhYmxlIH0pXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIGFsdFNlZ21lbnRzLnNvcnQoKGEsIGIpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoYS52YWx1ZSA8IGIudmFsdWUpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAtMTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoYS52YWx1ZSA+IGIudmFsdWUpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAxO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAwO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBhbHRTZWdtZW50cy51bnNoaWZ0KHRoaXMudWlTZWdtZW50U3J2Lm5ld1NlZ21lbnQoJy1SRU1PVkUtJykpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGFsdFNlZ21lbnRzO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHdoZXJlVmFsdWVDaGFuZ2VkKHdoZXJlLCBpbmRleCkge1xyXG5cclxuICAgICAgICBpZiAod2hlcmUudmFsdWUgPT0gXCItUkVNT1ZFLVwiKSB7XHJcbiAgICAgICAgICAgIGlmIChpbmRleCA9PSAwICYmIHRoaXMud2hlcmVzLmxlbmd0aCA+IDMgJiYgdGhpcy53aGVyZXNbaW5kZXggKyAzXS50eXBlID09ICdjb25kaXRpb24nKVxyXG4gICAgICAgICAgICAgICAgdGhpcy53aGVyZXMuc3BsaWNlKGluZGV4LCA0KVxyXG4gICAgICAgICAgICBlbHNlIGlmIChpbmRleCA+IDAgJiYgdGhpcy53aGVyZXNbaW5kZXggLSAxXS50eXBlID09ICdjb25kaXRpb24nKVxyXG4gICAgICAgICAgICAgICAgdGhpcy53aGVyZXMuc3BsaWNlKGluZGV4IC0gMSwgNClcclxuICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgdGhpcy53aGVyZXMuc3BsaWNlKGluZGV4LCAzKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHdoZXJlLnR5cGUgPT0gJ29wZXJhdG9yJylcclxuICAgICAgICAgICAgdGhpcy53aGVyZXNbaW5kZXhdID0gdGhpcy51aVNlZ21lbnRTcnYubmV3T3BlcmF0b3Iod2hlcmUudmFsdWUpXHJcbiAgICAgICAgZWxzZSBpZiAod2hlcmUudHlwZSA9PSAnY29uZGl0aW9uJylcclxuICAgICAgICAgICAgdGhpcy53aGVyZXNbaW5kZXhdID0gdGhpcy51aVNlZ21lbnRTcnYubmV3Q29uZGl0aW9uKHdoZXJlLnZhbHVlKVxyXG4gICAgICAgIGVsc2UgaWYgKHdoZXJlLnR5cGUgPT0gJ3ZhbHVlJyAmJiAhJC5pc051bWVyaWMod2hlcmUudmFsdWUpICYmIHdoZXJlLnZhbHVlLnRvVXBwZXJDYXNlKCkgIT0gJ05VTEwnKVxyXG4gICAgICAgICAgICB0aGlzLndoZXJlc1tpbmRleF0gPSB0aGlzLnVpU2VnbWVudFNydi5uZXdTZWdtZW50KFwiJ1wiICsgd2hlcmUudmFsdWUgKyBcIidcIik7XHJcblxyXG4gICAgICAgIHRoaXMuc2V0VGFyZ2V0V2l0aFF1ZXJ5KCk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0V2hlcmVzVG9BZGROZXcoKSB7XHJcbiAgICAgICAgdmFyIGN0cmwgPSB0aGlzO1xyXG4gICAgICAgIHJldHVybiB0aGlzLmRhdGFzb3VyY2Uud2hlcmVGaW5kUXVlcnkoY3RybC5maWx0ZXJTZWdtZW50LnZhbHVlKS50aGVuKGRhdGEgPT4ge1xyXG4gICAgICAgICAgICB2YXIgYWx0U2VnbWVudHMgPSBfLm1hcChkYXRhLCBpdGVtID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBjdHJsLnVpU2VnbWVudFNydi5uZXdTZWdtZW50KHsgdmFsdWU6IGl0ZW0udGV4dCwgZXhwYW5kYWJsZTogaXRlbS5leHBhbmRhYmxlIH0pXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBhbHRTZWdtZW50cy5zb3J0KChhLCBiKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoYS52YWx1ZSA8IGIudmFsdWUpXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIC0xO1xyXG4gICAgICAgICAgICAgICAgaWYgKGEudmFsdWUgPiBiLnZhbHVlKVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAxO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIDA7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICByZXR1cm4gYWx0U2VnbWVudHNcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBhZGRXaGVyZSgpIHtcclxuICAgICAgICBpZiAodGhpcy53aGVyZXMubGVuZ3RoID4gMClcclxuICAgICAgICAgICAgdGhpcy53aGVyZXMucHVzaCh0aGlzLnVpU2VnbWVudFNydi5uZXdDb25kaXRpb24oJ0FORCcpKTtcclxuXHJcbiAgICAgICAgdGhpcy53aGVyZXMucHVzaCh0aGlzLnVpU2VnbWVudFNydi5uZXdTZWdtZW50KGV2ZW50LnRhcmdldFsndGV4dCddKSk7XHJcbiAgICAgICAgdGhpcy53aGVyZXMucHVzaCh0aGlzLnVpU2VnbWVudFNydi5uZXdPcGVyYXRvcignTk9UIExJS0UnKSk7XHJcbiAgICAgICAgdGhpcy53aGVyZXMucHVzaCh0aGlzLnVpU2VnbWVudFNydi5uZXdGYWtlKFwiJydcIiwgJ3ZhbHVlJywgJ3F1ZXJ5LXNlZ21lbnQtdmFsdWUnKSk7XHJcblxyXG4gICAgICAgIC8vIHJlc2V0IHRoZSArIGJ1dHRvblxyXG4gICAgICAgIHZhciBwbHVzQnV0dG9uID0gdGhpcy51aVNlZ21lbnRTcnYubmV3UGx1c0J1dHRvbigpXHJcbiAgICAgICAgdGhpcy53aGVyZVNlZ21lbnQudmFsdWUgPSBwbHVzQnV0dG9uLnZhbHVlXHJcbiAgICAgICAgdGhpcy53aGVyZVNlZ21lbnQuaHRtbCA9IHBsdXNCdXR0b24uaHRtbFxyXG4gICAgICAgIHRoaXMuc2V0VGFyZ2V0V2l0aFF1ZXJ5KCk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIC8vICNlbmRyZWdpb25cclxuXHJcbiAgICAvLyAjcmVnaW9uIEZpbHRlcnNcclxuICAgIGdldEZpbHRlclRvRWRpdCgpIHtcclxuICAgICAgICB2YXIgY3RybCA9IHRoaXM7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZGF0YXNvdXJjZS5maWx0ZXJGaW5kUXVlcnkoKS50aGVuKGRhdGEgPT4ge1xyXG4gICAgICAgICAgICB2YXIgYWx0U2VnbWVudHMgPSBfLm1hcChkYXRhLCBpdGVtID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBjdHJsLnVpU2VnbWVudFNydi5uZXdTZWdtZW50KHsgdmFsdWU6IGl0ZW0udGV4dCwgZXhwYW5kYWJsZTogaXRlbS5leHBhbmRhYmxlIH0pXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBhbHRTZWdtZW50cy5zb3J0KChhLCBiKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoYS52YWx1ZSA8IGIudmFsdWUpXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIC0xO1xyXG4gICAgICAgICAgICAgICAgaWYgKGEudmFsdWUgPiBiLnZhbHVlKVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAxO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIDA7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIGFsdFNlZ21lbnRzO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGZpbHRlclZhbHVlQ2hhbmdlZCgpIHtcclxuICAgICAgICAvL3RoaXMudGFyZ2V0LnBvbGljeSA9IHRoaXMudG9wTlNlZ21lbnQ7XHJcbiAgICAgICAgdGhpcy5vcmRlckJ5U2VnbWVudCA9IHRoaXMudWlTZWdtZW50U3J2Lm5ld1BsdXNCdXR0b24oKTtcclxuICAgICAgICB0aGlzLndoZXJlcyA9IFtdO1xyXG4gICAgICAgIHRoaXMuc2V0VGFyZ2V0V2l0aFF1ZXJ5KCk7XHJcblxyXG4gICAgICAgIHRoaXMucGFuZWxDdHJsLnJlZnJlc2goKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyAjZW5kcmVnaW9uXHJcblxyXG4gICAgLy8gI3JlZ2lvbiBPcmRlckJ5c1xyXG4gICAgZ2V0T3JkZXJCeXNUb0FkZE5ldygpIHtcclxuICAgICAgICB2YXIgY3RybCA9IHRoaXM7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZGF0YXNvdXJjZS5vcmRlckJ5RmluZFF1ZXJ5KGN0cmwuZmlsdGVyU2VnbWVudC52YWx1ZSkudGhlbihkYXRhID0+IHtcclxuICAgICAgICAgICAgdmFyIGFsdFNlZ21lbnRzID0gXy5tYXAoZGF0YSwgaXRlbSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gY3RybC51aVNlZ21lbnRTcnYubmV3U2VnbWVudCh7IHZhbHVlOiBpdGVtLnRleHQsIGV4cGFuZGFibGU6IGl0ZW0uZXhwYW5kYWJsZSB9KVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgYWx0U2VnbWVudHMuc29ydCgoYSwgYikgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGEudmFsdWUgPCBiLnZhbHVlKVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAtMTtcclxuICAgICAgICAgICAgICAgIGlmIChhLnZhbHVlID4gYi52YWx1ZSlcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gMTtcclxuICAgICAgICAgICAgICAgIHJldHVybiAwO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiBfLmZpbHRlcihhbHRTZWdtZW50cywgc2VnbWVudCA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gXy5maW5kKGN0cmwub3JkZXJCeXMsIHggPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB4LnZhbHVlID09IHNlZ21lbnQudmFsdWVcclxuICAgICAgICAgICAgICAgIH0pID09IHVuZGVmaW5lZDtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0T3JkZXJCeXNUb0VkaXQob3JkZXJCeSkge1xyXG4gICAgICAgIHZhciBjdHJsID0gdGhpcztcclxuICAgICAgICBpZiAob3JkZXJCeS50eXBlID09ICdjb25kaXRpb24nKSByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKFt0aGlzLnVpU2VnbWVudFNydi5uZXdDb25kaXRpb24oJ0FTQycpLCB0aGlzLnVpU2VnbWVudFNydi5uZXdDb25kaXRpb24oJ0RFU0MnKV0pO1xyXG4gICAgICAgIGlmIChvcmRlckJ5LnR5cGUgPT0gJ2NvbmRpdGlvbicpIHJldHVybiBQcm9taXNlLnJlc29sdmUoW3RoaXMudWlTZWdtZW50U3J2Lm5ld0NvbmRpdGlvbignQVNDJyksIHRoaXMudWlTZWdtZW50U3J2Lm5ld0NvbmRpdGlvbignREVTQycpXSk7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLmRhdGFzb3VyY2Uub3JkZXJCeUZpbmRRdWVyeShjdHJsLmZpbHRlclNlZ21lbnQudmFsdWUpLnRoZW4oZGF0YSA9PiB7XHJcbiAgICAgICAgICAgIHZhciBhbHRTZWdtZW50cyA9IF8ubWFwKGRhdGEsIGl0ZW0gPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGN0cmwudWlTZWdtZW50U3J2Lm5ld1NlZ21lbnQoeyB2YWx1ZTogaXRlbS50ZXh0LCBleHBhbmRhYmxlOiBpdGVtLmV4cGFuZGFibGUgfSlcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGFsdFNlZ21lbnRzLnNvcnQoKGEsIGIpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChhLnZhbHVlIDwgYi52YWx1ZSlcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gLTE7XHJcbiAgICAgICAgICAgICAgICBpZiAoYS52YWx1ZSA+IGIudmFsdWUpXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDE7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gMDtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBpZiAob3JkZXJCeS50eXBlICE9PSAncGx1cy1idXR0b24nKVxyXG4gICAgICAgICAgICAgICAgYWx0U2VnbWVudHMudW5zaGlmdCh0aGlzLnVpU2VnbWVudFNydi5uZXdTZWdtZW50KCctUkVNT1ZFLScpKTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiBfLmZpbHRlcihhbHRTZWdtZW50cywgc2VnbWVudCA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gXy5maW5kKGN0cmwub3JkZXJCeXMsIHggPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB4LnZhbHVlID09IHNlZ21lbnQudmFsdWVcclxuICAgICAgICAgICAgICAgIH0pID09IHVuZGVmaW5lZDtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgYWRkT3JkZXJCeSgpIHtcclxuICAgICAgICB0aGlzLm9yZGVyQnlzLnB1c2godGhpcy51aVNlZ21lbnRTcnYubmV3U2VnbWVudChldmVudC50YXJnZXRbJ3RleHQnXSkpO1xyXG4gICAgICAgIHRoaXMub3JkZXJCeXMucHVzaCh0aGlzLnVpU2VnbWVudFNydi5uZXdDb25kaXRpb24oJ0FTQycpKTtcclxuXHJcbiAgICAgICAgLy8gcmVzZXQgdGhlICsgYnV0dG9uXHJcbiAgICAgICAgdmFyIHBsdXNCdXR0b24gPSB0aGlzLnVpU2VnbWVudFNydi5uZXdQbHVzQnV0dG9uKClcclxuICAgICAgICB0aGlzLm9yZGVyQnlTZWdtZW50LnZhbHVlID0gcGx1c0J1dHRvbi52YWx1ZVxyXG4gICAgICAgIHRoaXMub3JkZXJCeVNlZ21lbnQuaHRtbCA9IHBsdXNCdXR0b24uaHRtbFxyXG5cclxuICAgICAgICB0aGlzLnNldFRhcmdldFdpdGhRdWVyeSgpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBvcmRlckJ5VmFsdWVDaGFuZ2VkKG9yZGVyQnksIGluZGV4KSB7XHJcbiAgICAgICAgaWYgKGV2ZW50LnRhcmdldFsndGV4dCddID09IFwiLVJFTU9WRS1cIilcclxuICAgICAgICAgICAgdGhpcy5vcmRlckJ5cy5zcGxpY2UoaW5kZXgsIDIpO1xyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAob3JkZXJCeS50eXBlID09ICdjb25kaXRpb24nKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5vcmRlckJ5c1tpbmRleF0gPSB0aGlzLnVpU2VnbWVudFNydi5uZXdDb25kaXRpb24oZXZlbnQudGFyZ2V0Wyd0ZXh0J10pO1xyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICB0aGlzLm9yZGVyQnlzW2luZGV4XSA9IHRoaXMudWlTZWdtZW50U3J2Lm5ld1NlZ21lbnQoZXZlbnQudGFyZ2V0Wyd0ZXh0J10pO1xyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zZXRUYXJnZXRXaXRoUXVlcnkoKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgLy8gI2VuZHJlZ2lvblxyXG5cclxuICAgIC8vICNyZWdpb24gRnVuY3Rpb25zXHJcbiAgICBnZXRGdW5jdGlvbnNUb0FkZE5ldygpIHtcclxuICAgICAgICB2YXIgY3RybCA9IHRoaXM7XHJcbiAgICAgICAgdmFyIGFycmF5ID0gW11cclxuICAgICAgICBfLmVhY2goT2JqZWN0LmtleXMoRnVuY3Rpb25MaXN0KSwgZnVuY3Rpb24gKGVsZW1lbnQsIGluZGV4LCBsaXN0KSB7XHJcbiAgICAgICAgICAgIGFycmF5LnB1c2goY3RybC51aVNlZ21lbnRTcnYubmV3U2VnbWVudChlbGVtZW50KSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmZ1bmN0aW9ucy5sZW5ndGggPT0gMCkgYXJyYXkgPSBhcnJheS5zbGljZSgyLCBhcnJheS5sZW5ndGgpO1xyXG5cclxuICAgICAgICBhcnJheS5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7XHJcbiAgICAgICAgICAgIHZhciBuYW1lQSA9IGEudmFsdWUudG9VcHBlckNhc2UoKTsgLy8gaWdub3JlIHVwcGVyIGFuZCBsb3dlcmNhc2VcclxuICAgICAgICAgICAgdmFyIG5hbWVCID0gYi52YWx1ZS50b1VwcGVyQ2FzZSgpOyAvLyBpZ25vcmUgdXBwZXIgYW5kIGxvd2VyY2FzZVxyXG4gICAgICAgICAgICBpZiAobmFtZUEgPCBuYW1lQikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIC0xO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChuYW1lQSA+IG5hbWVCKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gMTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gbmFtZXMgbXVzdCBiZSBlcXVhbFxyXG4gICAgICAgICAgICByZXR1cm4gMDtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShfLmZpbHRlcihhcnJheSwgc2VnbWVudCA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiBfLmZpbmQodGhpcy5mdW5jdGlvbnMsIHggPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHgudmFsdWUgPT0gc2VnbWVudC52YWx1ZTtcclxuICAgICAgICAgICAgfSkgPT0gdW5kZWZpbmVkO1xyXG4gICAgICAgIH0pKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRGdW5jdGlvbnNUb0VkaXQoZnVuYywgaW5kZXgpOiBhbnkge1xyXG4gICAgICAgIHZhciBjdHJsID0gdGhpcztcclxuICAgICAgICB2YXIgcmVtb3ZlID0gW3RoaXMudWlTZWdtZW50U3J2Lm5ld1NlZ21lbnQoJy1SRU1PVkUtJyldO1xyXG4gICAgICAgIGlmIChmdW5jLnR5cGUgPT0gJ09wZXJhdG9yJykgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xyXG4gICAgICAgIGVsc2UgaWYgKGZ1bmMudmFsdWUgPT0gJ1NldCcpIHJldHVybiBQcm9taXNlLnJlc29sdmUocmVtb3ZlKVxyXG5cclxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHJlbW92ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb25WYWx1ZUNoYW5nZWQoZnVuYywgaW5kZXgpIHtcclxuICAgICAgICB2YXIgZnVuY1NlZyA9IEZ1bmN0aW9uTGlzdFtmdW5jLkZ1bmN0aW9uXTtcclxuXHJcbiAgICAgICAgaWYgKGZ1bmMudmFsdWUgPT0gXCItUkVNT1ZFLVwiKSB7XHJcbiAgICAgICAgICAgIHZhciBsID0gMTtcclxuICAgICAgICAgICAgdmFyIGZpID0gXy5maW5kSW5kZXgodGhpcy5mdW5jdGlvblNlZ21lbnRzLCBmdW5jdGlvbiAoc2VnbWVudCkgeyByZXR1cm4gc2VnbWVudC5GdW5jdGlvbiA9PSBmdW5jLkZ1bmN0aW9uIH0pO1xyXG4gICAgICAgICAgICBpZiAoZnVuYy5GdW5jdGlvbiA9PSAnU2xpY2UnKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5mdW5jdGlvblNlZ21lbnRzW2ZpICsgMV0uUGFyYW1ldGVycyA9IHRoaXMuZnVuY3Rpb25TZWdtZW50c1tmaSArIDFdLlBhcmFtZXRlcnMuc2xpY2UoMSwgdGhpcy5mdW5jdGlvblNlZ21lbnRzW2ZpICsgMV0uUGFyYW1ldGVycy5sZW5ndGgpO1xyXG4gICAgICAgICAgICBlbHNlIGlmIChmaSA+IDAgJiYgKHRoaXMuZnVuY3Rpb25TZWdtZW50c1tmaSAtIDFdLkZ1bmN0aW9uID09ICdTZXQnIHx8IHRoaXMuZnVuY3Rpb25TZWdtZW50c1tmaSAtIDFdLkZ1bmN0aW9uID09ICdTbGljZScpKSB7XHJcbiAgICAgICAgICAgICAgICAtLWZpO1xyXG4gICAgICAgICAgICAgICAgKytsO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB0aGlzLmZ1bmN0aW9uU2VnbWVudHMuc3BsaWNlKGZpLCBsKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoZnVuYy5UeXBlICE9ICdGdW5jdGlvbicpIHtcclxuICAgICAgICAgICAgdmFyIGZpID0gXy5maW5kSW5kZXgodGhpcy5mdW5jdGlvblNlZ21lbnRzLCBmdW5jdGlvbiAoc2VnbWVudCkgeyByZXR1cm4gc2VnbWVudC5GdW5jdGlvbiA9PSBmdW5jLkZ1bmN0aW9uIH0pO1xyXG4gICAgICAgICAgICB0aGlzLmZ1bmN0aW9uU2VnbWVudHNbZmldLlBhcmFtZXRlcnNbZnVuYy5JbmRleF0uRGVmYXVsdCA9IGZ1bmMudmFsdWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmJ1aWxkRnVuY3Rpb25BcnJheSgpXHJcbiAgICAgICAgdGhpcy5zZXRUYXJnZXRXaXRoUXVlcnkoKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgYWRkRnVuY3Rpb25TZWdtZW50KCkge1xyXG4gICAgICAgIHZhciBmdW5jID0gRnVuY3Rpb25MaXN0W2V2ZW50LnRhcmdldFsndGV4dCddXTtcclxuXHJcbiAgICAgICAgaWYgKGZ1bmMuRnVuY3Rpb24gPT0gJ1NsaWNlJykge1xyXG4gICAgICAgICAgICB0aGlzLmZ1bmN0aW9uU2VnbWVudHNbMF0uUGFyYW1ldGVycy51bnNoaWZ0KGZ1bmMuUGFyYW1ldGVyc1swXSlcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuZnVuY3Rpb25TZWdtZW50cy51bnNoaWZ0KEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoZnVuYykpKTtcclxuICAgICAgICB0aGlzLmJ1aWxkRnVuY3Rpb25BcnJheSgpO1xyXG5cclxuICAgICAgICAvLyByZXNldCB0aGUgKyBidXR0b25cclxuICAgICAgICB2YXIgcGx1c0J1dHRvbiA9IHRoaXMudWlTZWdtZW50U3J2Lm5ld1BsdXNCdXR0b24oKVxyXG4gICAgICAgIHRoaXMuZnVuY3Rpb25TZWdtZW50LnZhbHVlID0gcGx1c0J1dHRvbi52YWx1ZVxyXG4gICAgICAgIHRoaXMuZnVuY3Rpb25TZWdtZW50Lmh0bWwgPSBwbHVzQnV0dG9uLmh0bWxcclxuXHJcbiAgICAgICAgdGhpcy5zZXRUYXJnZXRXaXRoUXVlcnkoKTtcclxuICAgIH1cclxuXHJcbiAgICBidWlsZEZ1bmN0aW9uQXJyYXkoKSB7XHJcbiAgICAgICAgdmFyIGN0cmwgPSB0aGlzO1xyXG4gICAgICAgIGN0cmwuZnVuY3Rpb25zID0gW107XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmZ1bmN0aW9uU2VnbWVudHMubGVuZ3RoID09IDApIHJldHVybjtcclxuXHJcbiAgICAgICAgXy5lYWNoKGN0cmwuZnVuY3Rpb25TZWdtZW50cywgZnVuY3Rpb24gKGVsZW1lbnQ6IGlGdW5jdGlvblNlZ21lbnQsIGluZGV4LCBsaXN0KSB7XHJcbiAgICAgICAgICAgIHZhciBuZXdFbGVtZW50ID0gY3RybC51aVNlZ21lbnRTcnYubmV3U2VnbWVudChlbGVtZW50LkZ1bmN0aW9uKVxyXG4gICAgICAgICAgICBuZXdFbGVtZW50LlR5cGUgPSAnRnVuY3Rpb24nO1xyXG4gICAgICAgICAgICBuZXdFbGVtZW50LkZ1bmN0aW9uID0gZWxlbWVudC5GdW5jdGlvbjtcclxuXHJcbiAgICAgICAgICAgIGN0cmwuZnVuY3Rpb25zLnB1c2gobmV3RWxlbWVudClcclxuXHJcbiAgICAgICAgICAgIGlmIChuZXdFbGVtZW50LnZhbHVlID09ICdTZXQnIHx8IG5ld0VsZW1lbnQudmFsdWUgPT0gJ1NsaWNlJykgcmV0dXJuO1xyXG5cclxuICAgICAgICAgICAgdmFyIG9wZXJhdG9yID0gY3RybC51aVNlZ21lbnRTcnYubmV3T3BlcmF0b3IoJygnKTtcclxuICAgICAgICAgICAgb3BlcmF0b3IuVHlwZSA9ICdPcGVyYXRvcic7XHJcbiAgICAgICAgICAgIGN0cmwuZnVuY3Rpb25zLnB1c2gob3BlcmF0b3IpO1xyXG5cclxuICAgICAgICAgICAgXy5lYWNoKGVsZW1lbnQuUGFyYW1ldGVycywgZnVuY3Rpb24gKHBhcmFtLCBpLCBqKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgZCA9IGN0cmwudWlTZWdtZW50U3J2Lm5ld0Zha2UocGFyYW0uRGVmYXVsdC50b1N0cmluZygpKTtcclxuICAgICAgICAgICAgICAgIGQuVHlwZSA9IHBhcmFtLlR5cGU7XHJcbiAgICAgICAgICAgICAgICBkLkZ1bmN0aW9uID0gZWxlbWVudC5GdW5jdGlvbjtcclxuICAgICAgICAgICAgICAgIGQuRGVzY3JpcHRpb24gPSBwYXJhbS5EZXNjcmlwdGlvbjtcclxuICAgICAgICAgICAgICAgIGQuSW5kZXggPSBpO1xyXG4gICAgICAgICAgICAgICAgY3RybC5mdW5jdGlvbnMucHVzaChkKTtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgb3BlcmF0b3IgPSBjdHJsLnVpU2VnbWVudFNydi5uZXdPcGVyYXRvcignLCcpO1xyXG4gICAgICAgICAgICAgICAgb3BlcmF0b3IuVHlwZSA9ICdPcGVyYXRvcic7XHJcbiAgICAgICAgICAgICAgICBjdHJsLmZ1bmN0aW9ucy5wdXNoKG9wZXJhdG9yKTtcclxuICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHZhciBxdWVyeSA9IGN0cmwudWlTZWdtZW50U3J2Lm5ld0NvbmRpdGlvbignUVVFUlknKTtcclxuICAgICAgICBxdWVyeS5UeXBlID0gJ1F1ZXJ5JztcclxuICAgICAgICBjdHJsLmZ1bmN0aW9ucy5wdXNoKHF1ZXJ5KTtcclxuXHJcbiAgICAgICAgZm9yICh2YXIgaSBpbiBjdHJsLmZ1bmN0aW9uU2VnbWVudHMpIHtcclxuICAgICAgICAgICAgaWYgKGN0cmwuZnVuY3Rpb25TZWdtZW50c1tpXS5GdW5jdGlvbiAhPSAnU2V0JyAmJiBjdHJsLmZ1bmN0aW9uU2VnbWVudHNbaV0uRnVuY3Rpb24gIT0gJ1NsaWNlJykge1xyXG4gICAgICAgICAgICAgICAgdmFyIG9wZXJhdG9yID0gY3RybC51aVNlZ21lbnRTcnYubmV3T3BlcmF0b3IoJyknKTtcclxuICAgICAgICAgICAgICAgIG9wZXJhdG9yLlR5cGUgPSAnT3BlcmF0b3InO1xyXG4gICAgICAgICAgICAgICAgY3RybC5mdW5jdGlvbnMucHVzaChvcGVyYXRvcik7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBnZXRCb29sZWFucygpIHtcclxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKEJvb2xlYW5zLm1hcCh2YWx1ZSA9PiB7IHJldHVybiB0aGlzLnVpU2VnbWVudFNydi5uZXdTZWdtZW50KHZhbHVlKSB9KSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0QW5nbGVVbml0cygpIHtcclxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKEFuZ2xlVW5pdHMubWFwKHZhbHVlID0+IHsgcmV0dXJuIHRoaXMudWlTZWdtZW50U3J2Lm5ld1NlZ21lbnQodmFsdWUpIH0pKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRUaW1lU2VsZWN0KCkge1xyXG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoVGltZVVuaXRzLm1hcCh2YWx1ZSA9PiB7IHJldHVybiB0aGlzLnVpU2VnbWVudFNydi5uZXdTZWdtZW50KHZhbHVlKSB9KSk7XHJcbiAgICB9XHJcblxyXG4gICAgaW5wdXRDaGFuZ2UoZnVuYywgaW5kZXgpIHtcclxuICAgICAgICB2YXIgY3RybCA9IHRoaXM7XHJcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMudHlwaW5nVGltZXIpO1xyXG4gICAgICAgIHRoaXMudHlwaW5nVGltZXIgPSBnbG9iYWwuc2V0VGltZW91dChmdW5jdGlvbiAoKSB7IGN0cmwuZnVuY3Rpb25WYWx1ZUNoYW5nZWQoZnVuYywgaW5kZXgpIH0sIDMwMDApO1xyXG4gICAgICAgIGV2ZW50LnRhcmdldFsnZm9jdXMnXSgpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgLy8gI2VuZHJlZ2lvblxyXG5cclxuXHJcbn0iLCIvLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4vLyAgcXVlcnlPcHRpb25zX2N0cmwuanMgLSBHYnRjXHJcbi8vXHJcbi8vICBDb3B5cmlnaHQg77+9IDIwMTcsIEdyaWQgUHJvdGVjdGlvbiBBbGxpYW5jZS4gIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbi8vXHJcbi8vICBMaWNlbnNlZCB0byB0aGUgR3JpZCBQcm90ZWN0aW9uIEFsbGlhbmNlIChHUEEpIHVuZGVyIG9uZSBvciBtb3JlIGNvbnRyaWJ1dG9yIGxpY2Vuc2UgYWdyZWVtZW50cy4gU2VlXHJcbi8vICB0aGUgTk9USUNFIGZpbGUgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIHdvcmsgZm9yIGFkZGl0aW9uYWwgaW5mb3JtYXRpb24gcmVnYXJkaW5nIGNvcHlyaWdodCBvd25lcnNoaXAuXHJcbi8vICBUaGUgR1BBIGxpY2Vuc2VzIHRoaXMgZmlsZSB0byB5b3UgdW5kZXIgdGhlIE1JVCBMaWNlbnNlIChNSVQpLCB0aGUgXCJMaWNlbnNlXCI7IHlvdSBtYXkgbm90IHVzZSB0aGlzXHJcbi8vICBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdDpcclxuLy9cclxuLy8gICAgICBodHRwOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXHJcbi8vXHJcbi8vICBVbmxlc3MgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHRoZSBzdWJqZWN0IHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuXHJcbi8vICBcIkFTLUlTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLiBSZWZlciB0byB0aGVcclxuLy8gIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zLlxyXG4vL1xyXG4vLyAgQ29kZSBNb2RpZmljYXRpb24gSGlzdG9yeTpcclxuLy8gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gIDEwLzMxLzIwMTcgLSBCaWxseSBFcm5lc3RcclxuLy8gICAgICAgR2VuZXJhdGVkIG9yaWdpbmFsIHZlcnNpb24gb2Ygc291cmNlIGNvZGUuXHJcbi8vXHJcbi8vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbmRlY2xhcmUgdmFyIF86IGFueTtcclxuaW1wb3J0IHsgRGVmYXVsdEZsYWdzIH0gZnJvbSAnLi8uLi9qcy9vcGVuSGlzdG9yaWFuQ29uc3RhbnRzJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgT3Blbkhpc3RvcmlhblF1ZXJ5T3B0aW9uc0N0cmx7XHJcbiAgICBkYXRhRmxhZ3M6IGFueTtcclxuICAgIHJldHVybjogYW55O1xyXG4gICAgZmxhZ0FycmF5OiBBcnJheTxhbnk+O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgJHNjb3BlLHByaXZhdGUgJGNvbXBpbGUpIHtcclxuXHJcbiAgICAgICAgdGhpcy4kc2NvcGUgPSAkc2NvcGU7XHJcbiAgICAgICAgdmFyIHZhbHVlID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSgkc2NvcGUucmV0dXJuKSk7XHJcblxyXG4gICAgICAgIHRoaXMuZGF0YUZsYWdzID0gdGhpcy5oZXgyZmxhZ3MocGFyc2VJbnQodmFsdWUuRXhjbHVkZWQpKTtcclxuICAgICAgICB0aGlzLmRhdGFGbGFnc1snTm9ybWFsJ10uVmFsdWUgPSB2YWx1ZS5Ob3JtYWw7XHJcblxyXG4gICAgICAgIHRoaXMucmV0dXJuID0gJHNjb3BlLnJldHVybjtcclxuXHJcbiAgICAgICAgdGhpcy5mbGFnQXJyYXkgPSBfLm1hcChPYmplY3Qua2V5cyh0aGlzLmRhdGFGbGFncyksIGEgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4geyBrZXk6IGEsIG9yZGVyOiB0aGlzLmRhdGFGbGFnc1thXS5PcmRlciB9O1xyXG4gICAgICAgIH0pLnNvcnQoKGEsIGIpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIGEub3JkZXIgLSBiLm9yZGVyO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBjYWxjdWxhdGVGbGFncyhmbGFnKSB7XHJcbiAgICAgICAgdmFyIGN0cmwgPSB0aGlzO1xyXG4gICAgICAgIHZhciBmbGFnVmFyRXhjbHVkZWQgPSBjdHJsLnJldHVybi5FeGNsdWRlZDtcclxuXHJcbiAgICAgICAgaWYgKGZsYWcgPT0gJ1NlbGVjdCBBbGwnKSB7XHJcbiAgICAgICAgICAgIF8uZWFjaChPYmplY3Qua2V5cyhjdHJsLmRhdGFGbGFncyksIGZ1bmN0aW9uIChrZXksIGluZGV4LCBsaXN0KSB7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYoa2V5ID09IFwiTm9ybWFsXCIpIFxyXG4gICAgICAgICAgICAgICAgICAgIGN0cmwuZGF0YUZsYWdzW2tleV0uVmFsdWUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGVsc2UgXHJcbiAgICAgICAgICAgICAgICAgICAgY3RybC5kYXRhRmxhZ3Nba2V5XS5WYWx1ZSA9IGN0cmwuZGF0YUZsYWdzWydTZWxlY3QgQWxsJ10uVmFsdWU7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgaWYgKGN0cmwuZGF0YUZsYWdzWydTZWxlY3QgQWxsJ10uVmFsdWUpIFxyXG4gICAgICAgICAgICAgICAgZmxhZ1ZhckV4Y2x1ZGVkID0gMHhGRkZGRkZGRjtcclxuICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgZmxhZ1ZhckV4Y2x1ZGVkID0gMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGN0cmwuZGF0YUZsYWdzWydTZWxlY3QgQWxsJ10uVmFsdWUgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgICAgIGZsYWdWYXJFeGNsdWRlZCBePSBjdHJsLmRhdGFGbGFnc1tmbGFnXS5GbGFnO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY3RybC5yZXR1cm4uRXhjbHVkZWQgPSBmbGFnVmFyRXhjbHVkZWQ7XHJcbiAgICAgICAgY3RybC5yZXR1cm4uTm9ybWFsID0gY3RybC5kYXRhRmxhZ3NbJ05vcm1hbCddLlZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIFxyXG4gICAgaGV4MmZsYWdzKGhleCl7XHJcbiAgICAgICAgdmFyIGN0cmwgPSB0aGlzO1xyXG4gICAgICAgIHZhciBmbGFnID0gaGV4O1xyXG4gICAgICAgIHZhciBmbGFncyA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoRGVmYXVsdEZsYWdzKSk7XHJcblxyXG4gICAgICAgIF8uZWFjaChPYmplY3Qua2V5cyhmbGFncyksIGZ1bmN0aW9uIChrZXksIGluZGV4LCBsaXN0KSB7XHJcbiAgICAgICAgICAgIGlmIChrZXkgPT0gJ1NlbGVjdCBBbGwnKSByZXR1cm47XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBmbGFnc1trZXldLlZhbHVlID0gKGZsYWdzW2tleV0uRmxhZyAmIGZsYWcpICE9IDBcclxuICAgICAgICB9KTtcclxuICAgICAgICBcclxuICAgICAgICByZXR1cm4gZmxhZ3M7XHJcbiAgICB9XHJcbn1cclxuIiwiLy8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuLy8gIHF1ZXJ5X2N0cmwuanMgLSBHYnRjXHJcbi8vXHJcbi8vICBDb3B5cmlnaHQg77+9IDIwMTcsIEdyaWQgUHJvdGVjdGlvbiBBbGxpYW5jZS4gIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbi8vXHJcbi8vICBMaWNlbnNlZCB0byB0aGUgR3JpZCBQcm90ZWN0aW9uIEFsbGlhbmNlIChHUEEpIHVuZGVyIG9uZSBvciBtb3JlIGNvbnRyaWJ1dG9yIGxpY2Vuc2UgYWdyZWVtZW50cy4gU2VlXHJcbi8vICB0aGUgTk9USUNFIGZpbGUgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIHdvcmsgZm9yIGFkZGl0aW9uYWwgaW5mb3JtYXRpb24gcmVnYXJkaW5nIGNvcHlyaWdodCBvd25lcnNoaXAuXHJcbi8vICBUaGUgR1BBIGxpY2Vuc2VzIHRoaXMgZmlsZSB0byB5b3UgdW5kZXIgdGhlIE1JVCBMaWNlbnNlIChNSVQpLCB0aGUgXCJMaWNlbnNlXCI7IHlvdSBtYXkgbm90IHVzZSB0aGlzXHJcbi8vICBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdDpcclxuLy9cclxuLy8gICAgICBodHRwOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXHJcbi8vXHJcbi8vICBVbmxlc3MgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHRoZSBzdWJqZWN0IHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuXHJcbi8vICBcIkFTLUlTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLiBSZWZlciB0byB0aGVcclxuLy8gIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zLlxyXG4vL1xyXG4vLyAgQ29kZSBNb2RpZmljYXRpb24gSGlzdG9yeTpcclxuLy8gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gIDExLzAyLzIwMTcgLSBCaWxseSBFcm5lc3RcclxuLy8gICAgICAgR2VuZXJhdGVkIG9yaWdpbmFsIHZlcnNpb24gb2Ygc291cmNlIGNvZGUuXHJcbi8vXHJcbi8vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcblxyXG5pbXBvcnQgeyBRdWVyeUN0cmwgfSBmcm9tICcuLi9ub2RlX21vZHVsZXMvZ3JhZmFuYS1zZGstbW9ja3MvYXBwL3BsdWdpbnMvc2RrJ1xyXG5pbXBvcnQgJy4vLi4vY3NzL3F1ZXJ5LWVkaXRvci5jc3MnXHJcbmRlY2xhcmUgdmFyIF86IGFueTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE9wZW5IaXN0b3JpYW5EYXRhU291cmNlUXVlcnlDdHJsIGV4dGVuZHMgUXVlcnlDdHJse1xyXG4gICAgc3RhdGljIHRlbXBsYXRlVXJsID0gJ3BhcnRpYWwvcXVlcnkuZWRpdG9yLmh0bWwnO1xyXG5cclxuICAgIHF1ZXJ5VHlwZXM6IEFycmF5PHN0cmluZz47XHJcbiAgICBxdWVyeVR5cGU6IHN0cmluZztcclxuICAgIHF1ZXJ5T3B0aW9uc09wZW46IGJvb2xlYW47XHJcblxyXG4gICAgY29uc3RydWN0b3IoJHNjb3BlLCAkaW5qZWN0b3IsIHByaXZhdGUgdWlTZWdtZW50U3J2LHByaXZhdGUgdGVtcGxhdGVTcnYscHJpdmF0ZSAkY29tcGlsZSkge1xyXG4gICAgICAgIHN1cGVyKCRzY29wZSwgJGluamVjdG9yKTtcclxuXHJcbiAgICAgICAgdGhpcy4kc2NvcGUgPSAkc2NvcGU7XHJcbiAgICAgICAgdGhpcy4kY29tcGlsZSA9ICRjb21waWxlO1xyXG5cclxuICAgICAgICB2YXIgY3RybCA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy51aVNlZ21lbnRTcnYgPSB1aVNlZ21lbnRTcnY7XHJcblxyXG4gICAgICAgIHRoaXMucXVlcnlUeXBlcyA9IFtcclxuICAgICAgICAgICAgXCJFbGVtZW50IExpc3RcIiwgXCJGaWx0ZXIgRXhwcmVzc2lvblwiLCBcIlRleHQgRWRpdG9yXCJcclxuICAgICAgICBdO1xyXG5cclxuICAgICAgICB0aGlzLnF1ZXJ5VHlwZSA9ICh0aGlzLnRhcmdldC5xdWVyeVR5cGUgPT0gdW5kZWZpbmVkID8gXCJFbGVtZW50IExpc3RcIiA6IHRoaXMudGFyZ2V0LnF1ZXJ5VHlwZSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5xdWVyeU9wdGlvbnNPcGVuID0gZmFsc2U7XHJcblxyXG4gICAgICAgIGlmKGN0cmwudGFyZ2V0LnF1ZXJ5T3B0aW9ucyA9PSB1bmRlZmluZWQpIFxyXG4gICAgICAgICAgICBjdHJsLnRhcmdldC5xdWVyeU9wdGlvbnMgPSB7RXhjbHVkZWQ6IGN0cmwuZGF0YXNvdXJjZS5vcHRpb25zLmV4Y2x1ZGVkRGF0YUZsYWdzLCBOb3JtYWw6IGN0cmwuZGF0YXNvdXJjZS5vcHRpb25zLmV4Y2x1ZGVOb3JtYWxEYXRhfTtcclxuICAgIH1cclxuXHJcbiAgICB0b2dnbGVRdWVyeU9wdGlvbnMoKXtcclxuICAgICAgICB0aGlzLnF1ZXJ5T3B0aW9uc09wZW4gPSAhdGhpcy5xdWVyeU9wdGlvbnNPcGVuO1xyXG4gICAgfVxyXG5cclxuICBvbkNoYW5nZUludGVybmFsKCkge1xyXG4gICAgdGhpcy5wYW5lbEN0cmwucmVmcmVzaCgpOyAvLyBBc2tzIHRoZSBwYW5lbCB0byByZWZyZXNoIGRhdGEuXHJcbiAgfVxyXG5cclxuICAvLyB1c2VkIHRvIGNoYW5nZSB0aGUgcXVlcnkgdHlwZSBmcm9tIGVsZW1lbnQgbGlzdCB0byBmaWx0ZXIgZXhwcmVzc2lvblxyXG4gIGNoYW5nZVF1ZXJ5VHlwZSgpIHtcclxuICAgICAgaWYgKHRoaXMucXVlcnlUeXBlID09ICdUZXh0IEVkaXRvcicpIHtcclxuICAgICAgICAgIHRoaXMudGFyZ2V0LnRhcmdldFRleHQgPSB0aGlzLnRhcmdldC50YXJnZXQ7XHJcbiAgICAgIH1cclxuICAgICAgZWxzZXtcclxuICAgICAgICAgIHRoaXMudGFyZ2V0LnRhcmdldCA9ICcnO1xyXG4gICAgICAgICAgZGVsZXRlIHRoaXMudGFyZ2V0LmZ1bmN0aW9uU2VnbWVudHNcclxuICAgICAgfVxyXG4gIH1cclxuXHJcbn1cclxuXHJcblxyXG4iLCIvLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4vLyAgb3Blbkhpc3RvcmlhblRleHRFZGl0b3IudHMgLSBHYnRjXHJcbi8vXHJcbi8vICBDb3B5cmlnaHQgwqkgMjAxNywgR3JpZCBQcm90ZWN0aW9uIEFsbGlhbmNlLiAgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuLy9cclxuLy8gIExpY2Vuc2VkIHRvIHRoZSBHcmlkIFByb3RlY3Rpb24gQWxsaWFuY2UgKEdQQSkgdW5kZXIgb25lIG9yIG1vcmUgY29udHJpYnV0b3IgbGljZW5zZSBhZ3JlZW1lbnRzLiBTZWVcclxuLy8gIHRoZSBOT1RJQ0UgZmlsZSBkaXN0cmlidXRlZCB3aXRoIHRoaXMgd29yayBmb3IgYWRkaXRpb25hbCBpbmZvcm1hdGlvbiByZWdhcmRpbmcgY29weXJpZ2h0IG93bmVyc2hpcC5cclxuLy8gIFRoZSBHUEEgbGljZW5zZXMgdGhpcyBmaWxlIHRvIHlvdSB1bmRlciB0aGUgTUlUIExpY2Vuc2UgKE1JVCksIHRoZSBcIkxpY2Vuc2VcIjsgeW91IG1heSBub3QgdXNlIHRoaXNcclxuLy8gIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0OlxyXG4vL1xyXG4vLyAgICAgIGh0dHA6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcclxuLy9cclxuLy8gIFVubGVzcyBhZ3JlZWQgdG8gaW4gd3JpdGluZywgdGhlIHN1YmplY3Qgc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW5cclxuLy8gIFwiQVMtSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuIFJlZmVyIHRvIHRoZVxyXG4vLyAgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmQgbGltaXRhdGlvbnMuXHJcbi8vXHJcbi8vICBDb2RlIE1vZGlmaWNhdGlvbiBIaXN0b3J5OlxyXG4vLyAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyAgMTIvMTIvMjAxNyAtIEJpbGx5IEVybmVzdFxyXG4vLyAgICAgICBHZW5lcmF0ZWQgb3JpZ2luYWwgdmVyc2lvbiBvZiBzb3VyY2UgY29kZS5cclxuLy9cclxuLy8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuaW1wb3J0IHsgUGFuZWxDdHJsIH0gZnJvbSBcImdyYWZhbmEtc2RrLW1vY2tzL2FwcC9wbHVnaW5zL3Nka1wiO1xyXG5cclxuZGVjbGFyZSB2YXIgXzogYW55O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgT3Blbkhpc3RvcmlhblRleHRFZGl0b3JDdHJse1xyXG4gICAgdGFyZ2V0VGV4dDogc3RyaW5nO1xyXG4gICAgdGFyZ2V0OiBpVGFyZ2V0O1xyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSAkc2NvcGU6IHt0YXJnZXQ6IGlUYXJnZXQsIHRoaXN0YXJnZXRUZXh0OiBzdHJpbmcsIHBhbmVsOiBQYW5lbEN0cmx9LCBwcml2YXRlIHRlbXBsYXRlU3J2KSB7XHJcblxyXG4gICAgICAgIHRoaXMuJHNjb3BlID0gJHNjb3BlO1xyXG4gICAgICAgIHRoaXMudGFyZ2V0VGV4dCA9ICgkc2NvcGUudGFyZ2V0LnRhcmdldFRleHQgPT0gdW5kZWZpbmVkID8gJycgOiAkc2NvcGUudGFyZ2V0LnRhcmdldFRleHQpO1xyXG5cclxuICAgICAgICB0aGlzLnNldFRhcmdldFdpdGhUZXh0KCk7XHJcblxyXG4gICAgICAgIGRlbGV0ZSAkc2NvcGUudGFyZ2V0LnNlZ21lbnRzO1xyXG4gICAgICAgIGRlbGV0ZSAkc2NvcGUudGFyZ2V0LmZ1bmN0aW9uU2VnbWVudHM7XHJcbiAgICAgICAgZGVsZXRlICRzY29wZS50YXJnZXQud2hlcmVzO1xyXG4gICAgICAgIGRlbGV0ZSAkc2NvcGUudGFyZ2V0LnRvcE5TZWdtZW50O1xyXG4gICAgICAgIGRlbGV0ZSAkc2NvcGUudGFyZ2V0LmZ1bmN0aW9ucztcclxuICAgICAgICBkZWxldGUgJHNjb3BlLnRhcmdldC5vcmRlckJ5cztcclxuICAgICAgICBkZWxldGUgJHNjb3BlLnRhcmdldC53aGVyZVNlZ21lbnQ7XHJcbiAgICAgICAgZGVsZXRlICRzY29wZS50YXJnZXQuZmlsdGVyU2VnbWVudDtcclxuICAgICAgICBkZWxldGUgJHNjb3BlLnRhcmdldC5vcmRlckJ5U2VnbWVudDtcclxuICAgICAgICBkZWxldGUgJHNjb3BlLnRhcmdldC5mdW5jdGlvblNlZ21lbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0VGFyZ2V0V2l0aFRleHQoKSB7XHJcbiAgICAgICAgdGhpcy4kc2NvcGUudGFyZ2V0LnRhcmdldFRleHQgPSB0aGlzLnRhcmdldFRleHQ7XHJcbiAgICAgICAgdGhpcy4kc2NvcGUudGFyZ2V0LnRhcmdldCA9IHRoaXMudGFyZ2V0VGV4dDtcclxuICAgICAgICB0aGlzLiRzY29wZS50YXJnZXQucXVlcnlUeXBlID0gJ1RleHQgRWRpdG9yJztcclxuICAgICAgICB0aGlzLiRzY29wZS5wYW5lbC5yZWZyZXNoKCk7IC8vIEFza3MgdGhlIHBhbmVsIHRvIHJlZnJlc2ggZGF0YS5cclxuICAgIH1cclxuXHJcbn0iLCJ2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vcXVlcnktZWRpdG9yLmNzc1wiKTtcblxuaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG59XG5cbnZhciBvcHRpb25zID0ge31cblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYgKGNvbnRlbnQubG9jYWxzKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG59XG4iLCIvLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4vLyAgY29uc3RhbnRzLmpzIC0gR2J0Y1xyXG4vL1xyXG4vLyAgQ29weXJpZ2h0IMKpIDIwMTcsIEdyaWQgUHJvdGVjdGlvbiBBbGxpYW5jZS4gIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbi8vXHJcbi8vICBMaWNlbnNlZCB0byB0aGUgR3JpZCBQcm90ZWN0aW9uIEFsbGlhbmNlIChHUEEpIHVuZGVyIG9uZSBvciBtb3JlIGNvbnRyaWJ1dG9yIGxpY2Vuc2UgYWdyZWVtZW50cy4gU2VlXHJcbi8vICB0aGUgTk9USUNFIGZpbGUgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIHdvcmsgZm9yIGFkZGl0aW9uYWwgaW5mb3JtYXRpb24gcmVnYXJkaW5nIGNvcHlyaWdodCBvd25lcnNoaXAuXHJcbi8vICBUaGUgR1BBIGxpY2Vuc2VzIHRoaXMgZmlsZSB0byB5b3UgdW5kZXIgdGhlIE1JVCBMaWNlbnNlIChNSVQpLCB0aGUgXCJMaWNlbnNlXCI7IHlvdSBtYXkgbm90IHVzZSB0aGlzXHJcbi8vICBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdDpcclxuLy9cclxuLy8gICAgICBodHRwOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXHJcbi8vXHJcbi8vICBVbmxlc3MgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHRoZSBzdWJqZWN0IHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuXHJcbi8vICBcIkFTLUlTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLiBSZWZlciB0byB0aGVcclxuLy8gIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zLlxyXG4vL1xyXG4vLyAgQ29kZSBNb2RpZmljYXRpb24gSGlzdG9yeTpcclxuLy8gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gIDExLzAxLzIwMTcgLSBCaWxseSBFcm5lc3RcclxuLy8gICAgICAgR2VuZXJhdGVkIG9yaWdpbmFsIHZlcnNpb24gb2Ygc291cmNlIGNvZGUuXHJcbi8vXHJcbi8vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcblxyXG4vLyAjcmVnaW9uIENvbnN0YW50c1xyXG5leHBvcnQgY29uc3QgRGVmYXVsdEZsYWdzID0ge1xyXG4gICAgJ1NlbGVjdCBBbGwnOiB7IFZhbHVlOiBmYWxzZSwgT3JkZXI6IC0xLCBGbGFnOiAwIH0sXHJcbiAgICBOb3JtYWw6IHsgVmFsdWU6IGZhbHNlLCBPcmRlcjogMCwgRmxhZzogMCAgfSxcclxuICAgIEJhZERhdGE6IHsgVmFsdWU6IGZhbHNlLCBPcmRlcjogMSwgRmxhZzogMSA8PCAwICB9LFxyXG4gICAgU3VzcGVjdERhdGE6IHsgVmFsdWU6IGZhbHNlLCBPcmRlcjogMiwgRmxhZzogMSA8PCAxIH0sXHJcbiAgICBPdmVyUmFuZ2VFcnJvcjogeyBWYWx1ZTogZmFsc2UsIE9yZGVyOiAzLCBGbGFnOiAxIDw8IDIgfSxcclxuICAgIFVuZGVyUmFuZ2VFcnJvcjogeyBWYWx1ZTogZmFsc2UsIE9yZGVyOiA0LCBGbGFnOiAxIDw8IDMgfSxcclxuICAgIEFsYXJtSGlnaDogeyBWYWx1ZTogZmFsc2UsIE9yZGVyOiA1LCBGbGFnOiAxIDw8IDQgfSxcclxuICAgIEFsYXJtTG93OiB7IFZhbHVlOiBmYWxzZSwgT3JkZXI6IDYsIEZsYWc6IDEgPDwgNSB9LFxyXG4gICAgV2FybmluZ0hpZ2g6IHsgVmFsdWU6IGZhbHNlLCBPcmRlcjogNywgRmxhZzogMSA8PCA2IH0sXHJcbiAgICBXYXJuaW5nTG93OiB7IFZhbHVlOiBmYWxzZSwgT3JkZXI6IDgsIEZsYWc6IDEgPDwgNyB9LFxyXG4gICAgRmxhdGxpbmVBbGFybTogeyBWYWx1ZTogZmFsc2UsIE9yZGVyOiA5LCBGbGFnOiAxIDw8IDggfSxcclxuICAgIENvbXBhcmlzb25BbGFybTogeyBWYWx1ZTogZmFsc2UsIE9yZGVyOiAxMCwgRmxhZzogMSA8PCA5IH0sXHJcbiAgICBST0NBbGFybTogeyBWYWx1ZTogZmFsc2UsIE9yZGVyOiAxMSwgRmxhZzogMSA8PCAxMCB9LFxyXG4gICAgUmVjZWl2ZWRBc0JhZDogeyBWYWx1ZTogZmFsc2UsIE9yZGVyOiAxMiwgRmxhZzogMSA8PCAxMSB9LFxyXG4gICAgQ2FsY3VsYXRlZFZhbHVlOiB7IFZhbHVlOiBmYWxzZSwgT3JkZXI6IDEzLCBGbGFnOiAxIDw8IDEyIH0sXHJcbiAgICBDYWxjdWxhdGlvbkVycm9yOiB7IFZhbHVlOiBmYWxzZSwgT3JkZXI6IDE0LCBGbGFnOiAxIDw8IDEzIH0sXHJcbiAgICBDYWxjdWxhdGlvbldhcm5pbmc6IHsgVmFsdWU6IGZhbHNlLCBPcmRlcjogMTUsIEZsYWc6IDEgPDwgMTQgfSxcclxuICAgIFJlc2VydmVkUXVhbGl0eUZsYWc6IHsgVmFsdWU6IGZhbHNlLCBPcmRlcjogMTYsIEZsYWc6IDEgPDwgMTUgfSxcclxuICAgIEJhZFRpbWU6IHsgVmFsdWU6IGZhbHNlLCBPcmRlcjogMTcsIEZsYWc6IDEgPDwgMTYgfSxcclxuICAgIFN1c3BlY3RUaW1lOiB7IFZhbHVlOiBmYWxzZSwgT3JkZXI6IDE4LCBGbGFnOiAxIDw8IDE3IH0sXHJcbiAgICBMYXRlVGltZUFsYXJtOiB7IFZhbHVlOiBmYWxzZSwgT3JkZXI6IDE5LCBGbGFnOiAxIDw8IDE4IH0sXHJcbiAgICBGdXR1cmVUaW1lQWxhcm06IHsgVmFsdWU6IGZhbHNlLCBPcmRlcjogMjAsIEZsYWc6IDEgPDwgMTkgfSxcclxuICAgIFVwU2FtcGxlZDogeyBWYWx1ZTogZmFsc2UsIE9yZGVyOiAyMSwgRmxhZzogMSA8PCAyMCB9LFxyXG4gICAgRG93blNhbXBsZWQ6IHsgVmFsdWU6IGZhbHNlLCBPcmRlcjogMjIsIEZsYWc6IDEgPDwgMjEgfSxcclxuICAgIERpc2NhcmRlZFZhbHVlOiB7IFZhbHVlOiBmYWxzZSwgT3JkZXI6IDIzLCBGbGFnOiAxIDw8IDIyIH0sXHJcbiAgICBSZXNlcnZlZFRpbWVGbGFnOiB7IFZhbHVlOiBmYWxzZSwgT3JkZXI6IDI0LCBGbGFnOiAxIDw8IDIzIH0sXHJcbiAgICBVc2VyRGVmaW5lZEZsYWcxOiB7IFZhbHVlOiBmYWxzZSwgT3JkZXI6IDI1LCBGbGFnOiAxIDw8IDI0IH0sXHJcbiAgICBVc2VyRGVmaW5lZEZsYWcyOiB7IFZhbHVlOiBmYWxzZSwgT3JkZXI6IDI2LCBGbGFnOiAxIDw8IDI1IH0sXHJcbiAgICBVc2VyRGVmaW5lZEZsYWczOiB7IFZhbHVlOiBmYWxzZSwgT3JkZXI6IDI3LCBGbGFnOiAxIDw8IDI2IH0sXHJcbiAgICBVc2VyRGVmaW5lZEZsYWc0OiB7IFZhbHVlOiBmYWxzZSwgT3JkZXI6IDI4LCBGbGFnOiAxIDw8IDI3IH0sXHJcbiAgICBVc2VyRGVmaW5lZEZsYWc1OiB7IFZhbHVlOiBmYWxzZSwgT3JkZXI6IDI5LCBGbGFnOiAxIDw8IDI4IH0sXHJcbiAgICBTeXN0ZW1FcnJvcjogeyBWYWx1ZTogZmFsc2UsIE9yZGVyOiAzMCwgRmxhZzogMSA8PCAyOSB9LFxyXG4gICAgU3lzdGVtV2FybmluZzogeyBWYWx1ZTogZmFsc2UsIE9yZGVyOiAzMSwgRmxhZzogMSA8PCAzMCB9LFxyXG4gICAgTWVhc3VyZW1lbnRFcnJvcjogeyBWYWx1ZTogZmFsc2UsIE9yZGVyOiAzMiwgRmxhZzogMSA8PCAzMSB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBGdW5jdGlvbkxpc3QgPSB7XHJcbiAgICBTZXQ6IHsgRnVuY3Rpb246ICdTZXQnLCBQYXJhbWV0ZXJzOiBbXSB9LFxyXG4gICAgU2xpY2U6IHsgRnVuY3Rpb246ICdTbGljZScsIFBhcmFtZXRlcnM6IFt7IERlZmF1bHQ6IDEsIFR5cGU6ICdkb3VibGUnLCBEZXNjcmlwdGlvbjogJ0EgZmxvYXRpbmctcG9pbnQgdmFsdWUgdGhhdCBtdXN0IGJlIGdyZWF0ZXIgdGhhbiBvciBlcXVhbCB0byB6ZXJvIHRoYXQgcmVwcmVzZW50cyB0aGUgZGVzaXJlZCB0aW1lIHRvbGVyYW5jZSwgaW4gc2Vjb25kcywgZm9yIHRoZSB0aW1lIHNsaWNlLicgfV0gfSxcclxuICAgIEF2ZXJhZ2U6IHsgRnVuY3Rpb246ICdBdmVyYWdlJywgUGFyYW1ldGVyczogW10gfSxcclxuICAgIE1pbmltdW06IHsgRnVuY3Rpb246ICdNaW5pbXVtJywgUGFyYW1ldGVyczogW10gfSxcclxuICAgIE1heGltdW06IHsgRnVuY3Rpb246ICdNYXhpbXVtJywgUGFyYW1ldGVyczogW10gfSxcclxuICAgIFRvdGFsOiB7IEZ1bmN0aW9uOiAnVG90YWwnLCBQYXJhbWV0ZXJzOiBbXSB9LFxyXG4gICAgUmFuZ2U6IHsgRnVuY3Rpb246ICdSYW5nZScsIFBhcmFtZXRlcnM6IFtdIH0sXHJcbiAgICBDb3VudDogeyBGdW5jdGlvbjogJ0NvdW50JywgUGFyYW1ldGVyczogW10gfSxcclxuICAgIERpc3RpbmN0OiB7IEZ1bmN0aW9uOiAnRGlzdGluY3QnLCBQYXJhbWV0ZXJzOiBbXSB9LFxyXG4gICAgQWJzb2x1dGVWYWx1dGU6IHsgRnVuY3Rpb246ICdBYnNvbHV0ZVZhbHVlJywgUGFyYW1ldGVyczogW10gfSxcclxuICAgIEFkZDogeyBGdW5jdGlvbjogJ0FkZCcsIFBhcmFtZXRlcnM6IFt7IERlZmF1bHQ6IDAsIFR5cGU6ICdzdHJpbmcnLCBEZXNjcmlwdGlvbjogJ0EgZmxvYXRpbmcgcG9pbnQgdmFsdWUgcmVwcmVzZW50aW5nIGFuIGFkZGl0aXZlIG9mZnNldCB0byBiZSBhcHBsaWVkIHRvIGVhY2ggdmFsdWUgdGhlIHNvdXJjZSBzZXJpZXMuJyB9XSB9LFxyXG4gICAgU3VidHJhY3Q6IHsgRnVuY3Rpb246ICdTdWJ0cmFjdCcsIFBhcmFtZXRlcnM6IFt7IERlZmF1bHQ6IDAsIFR5cGU6ICdzdHJpbmcnLCBEZXNjcmlwdGlvbjogJ0EgZmxvYXRpbmcgcG9pbnQgdmFsdWUgcmVwcmVzZW50aW5nIGFuIGFkZGl0aXZlIG9mZnNldCB0byBiZSBhcHBsaWVkIHRvIGVhY2ggdmFsdWUgdGhlIHNvdXJjZSBzZXJpZXMuJyB9XSB9LFxyXG4gICAgTXVsdGlwbHk6IHsgRnVuY3Rpb246ICdNdWx0aXBseScsIFBhcmFtZXRlcnM6IFt7IERlZmF1bHQ6IDEsIFR5cGU6ICdzdHJpbmcnLCBEZXNjcmlwdGlvbjogJ0EgZmxvYXRpbmcgcG9pbnQgdmFsdWUgcmVwcmVzZW50aW5nIGFuIGFkZGl0aXZlIG9mZnNldCB0byBiZSBhcHBsaWVkIHRvIGVhY2ggdmFsdWUgdGhlIHNvdXJjZSBzZXJpZXMuJyB9XSB9LFxyXG4gICAgRGl2aWRlOiB7IEZ1bmN0aW9uOiAnTXVsdGlwbHknLCBQYXJhbWV0ZXJzOiBbeyBEZWZhdWx0OiAxLCBUeXBlOiAnc3RyaW5nJywgRGVzY3JpcHRpb246ICdBIGZsb2F0aW5nIHBvaW50IHZhbHVlIHJlcHJlc2VudGluZyBhbiBhZGRpdGl2ZSBvZmZzZXQgdG8gYmUgYXBwbGllZCB0byBlYWNoIHZhbHVlIHRoZSBzb3VyY2Ugc2VyaWVzLicgfV0gfSxcclxuICAgIFJvdW5kOiB7IEZ1bmN0aW9uOiAnUm91bmQnLCBQYXJhbWV0ZXJzOiBbeyBEZWZhdWx0OiAwLCBUeXBlOiAnZG91YmxlJywgRGVzY3JpcHRpb246ICdBIHBvc2l0aXZlIGludGVnZXIgdmFsdWUgcmVwcmVzZW50aW5nIHRoZSBudW1iZXIgb2YgZGVjaW1hbCBwbGFjZXMgaW4gdGhlIHJldHVybiB2YWx1ZSAtIGRlZmF1bHRzIHRvIDAuJyB9XSB9LFxyXG4gICAgRmxvb3I6IHsgRnVuY3Rpb246ICdGbG9vcicsIFBhcmFtZXRlcnM6IFtdIH0sXHJcbiAgICBDZWlsaW5nOiB7IEZ1bmN0aW9uOiAnQ2VpbGluZycsIFBhcmFtZXRlcnM6IFtdIH0sXHJcbiAgICBUcnVuY2F0ZTogeyBGdW5jdGlvbjogJ1RydW5jYXRlJywgUGFyYW1ldGVyczogW10gfSxcclxuICAgIFN0YW5kYXJkRGV2aWF0aW9uOiB7IEZ1bmN0aW9uOiAnU3RhbmRhcmREZXZpYXRpb24nLCBQYXJhbWV0ZXJzOiBbeyBEZWZhdWx0OiBmYWxzZSwgVHlwZTogJ2Jvb2xlYW4nLCBEZXNjcmlwdGlvbjogJ0EgYm9vbGVhbiBmbGFnIHJlcHJlc2VudGluZyBpZiB0aGUgc2FtcGxlIGJhc2VkIGNhbGN1bGF0aW9uIHNob3VsZCBiZSB1c2VkIC0gZGVmYXVsdHMgdG8gZmFsc2UsIHdoaWNoIG1lYW5zIHRoZSBwb3B1bGF0aW9uIGJhc2VkIGNhbGN1bGF0aW9uIHNob3VsZCBiZSB1c2VkLicgfV0gfSxcclxuICAgIE1lZGlhbjogeyBGdW5jdGlvbjogJ01lZGlhbicsIFBhcmFtZXRlcnM6IFtdIH0sXHJcbiAgICBNb2RlOiB7IEZ1bmN0aW9uOiAnTW9kZScsIFBhcmFtZXRlcnM6IFtdIH0sXHJcbiAgICBUb3A6IHsgRnVuY3Rpb246ICdUb3AnLCBQYXJhbWV0ZXJzOiBbeyBEZWZhdWx0OiAnMTAwJScsIFR5cGU6ICdzdHJpbmcnLCBEZXNjcmlwdGlvbjogJ0EgcG9zaXRpdmUgaW50ZWdlciB2YWx1ZSwgcmVwcmVzZW50aW5nIGEgdG90YWwsIHRoYXQgaXMgZ3JlYXRlciB0aGFuIHplcm8gLSBvciAtIGEgZmxvYXRpbmcgcG9pbnQgdmFsdWUsIHN1ZmZpeGVkIHdpdGggXFwnICVcXCcgcmVwcmVzZW50aW5nIGEgcGVyY2VudGFnZSwgdGhhdCBtdXN0IHJhbmdlIGZyb20gZ3JlYXRlciB0aGFuIDAgdG8gbGVzcyB0aGFuIG9yIGVxdWFsIHRvIDEwMC4nIH0sIHsgRGVmYXVsdDogdHJ1ZSwgVHlwZTogJ2Jvb2xlYW4nLCBEZXNjcmlwdGlvbjogJ0EgYm9vbGVhbiBmbGFnIHJlcHJlc2VudGluZyBpZiB0aW1lIGluIGRhdGFzZXQgc2hvdWxkIGJlIG5vcm1hbGl6ZWQgLSBkZWZhdWx0cyB0byB0cnVlLicgfV0gfSxcclxuICAgIEJvdHRvbTogeyBGdW5jdGlvbjogJ0JvdHRvbScsIFBhcmFtZXRlcnM6IFt7IERlZmF1bHQ6ICcxMDAlJywgVHlwZTogJ3N0cmluZycsIERlc2NyaXB0aW9uOiAnQSBwb3NpdGl2ZSBpbnRlZ2VyIHZhbHVlLCByZXByZXNlbnRpbmcgYSB0b3RhbCwgdGhhdCBpcyBncmVhdGVyIHRoYW4gemVybyAtIG9yIC0gYSBmbG9hdGluZyBwb2ludCB2YWx1ZSwgc3VmZml4ZWQgd2l0aCBcXCcgJVxcJyByZXByZXNlbnRpbmcgYSBwZXJjZW50YWdlLCB0aGF0IG11c3QgcmFuZ2UgZnJvbSBncmVhdGVyIHRoYW4gMCB0byBsZXNzIHRoYW4gb3IgZXF1YWwgdG8gMTAwLicgfSwgeyBEZWZhdWx0OiB0cnVlLCBUeXBlOiAnYm9vbGVhbicsIERlc2NyaXB0aW9uOiAnQSBib29sZWFuIGZsYWcgcmVwcmVzZW50aW5nIGlmIHRpbWUgaW4gZGF0YXNldCBzaG91bGQgYmUgbm9ybWFsaXplZCAtIGRlZmF1bHRzIHRvIHRydWUuJyB9XSB9LFxyXG4gICAgUmFuZG9tOiB7IEZ1bmN0aW9uOiAnUmFuZG9tJywgUGFyYW1ldGVyczogW3sgRGVmYXVsdDogJzEwMCUnLCBUeXBlOiAnc3RyaW5nJywgRGVzY3JpcHRpb246ICdBIHBvc2l0aXZlIGludGVnZXIgdmFsdWUsIHJlcHJlc2VudGluZyBhIHRvdGFsLCB0aGF0IGlzIGdyZWF0ZXIgdGhhbiB6ZXJvIC0gb3IgLSBhIGZsb2F0aW5nIHBvaW50IHZhbHVlLCBzdWZmaXhlZCB3aXRoIFxcJyAlXFwnIHJlcHJlc2VudGluZyBhIHBlcmNlbnRhZ2UsIHRoYXQgbXVzdCByYW5nZSBmcm9tIGdyZWF0ZXIgdGhhbiAwIHRvIGxlc3MgdGhhbiBvciBlcXVhbCB0byAxMDAuJyB9LCB7IERlZmF1bHQ6IHRydWUsIFR5cGU6ICdib29sZWFuJywgRGVzY3JpcHRpb246ICdBIGJvb2xlYW4gZmxhZyByZXByZXNlbnRpbmcgaWYgdGltZSBpbiBkYXRhc2V0IHNob3VsZCBiZSBub3JtYWxpemVkIC0gZGVmYXVsdHMgdG8gdHJ1ZS4nIH1dIH0sXHJcbiAgICBGaXJzdDogeyBGdW5jdGlvbjogJ0ZpcnN0JywgUGFyYW1ldGVyczogW3sgRGVmYXVsdDogJzEnLCBUeXBlOiAnc3RyaW5nJywgRGVzY3JpcHRpb246ICdBIHBvc2l0aXZlIGludGVnZXIgdmFsdWUsIHJlcHJlc2VudGluZyBhIHRvdGFsLCB0aGF0IGlzIGdyZWF0ZXIgdGhhbiB6ZXJvIC0gb3IgLSBhIGZsb2F0aW5nIHBvaW50IHZhbHVlLCBzdWZmaXhlZCB3aXRoIFxcJyAlXFwnIHJlcHJlc2VudGluZyBhIHBlcmNlbnRhZ2UsIHRoYXQgbXVzdCByYW5nZSBmcm9tIGdyZWF0ZXIgdGhhbiAwIHRvIGxlc3MgdGhhbiBvciBlcXVhbCB0byAxMDAgLSBkZWZhdWx0cyB0byAxLicgfV0gfSxcclxuICAgIExhc3Q6IHsgRnVuY3Rpb246ICdMYXN0JywgUGFyYW1ldGVyczogW3sgRGVmYXVsdDogJzEnLCBUeXBlOiAnc3RyaW5nJywgRGVzY3JpcHRpb246ICdBIHBvc2l0aXZlIGludGVnZXIgdmFsdWUsIHJlcHJlc2VudGluZyBhIHRvdGFsLCB0aGF0IGlzIGdyZWF0ZXIgdGhhbiB6ZXJvIC0gb3IgLSBhIGZsb2F0aW5nIHBvaW50IHZhbHVlLCBzdWZmaXhlZCB3aXRoIFxcJyAlXFwnIHJlcHJlc2VudGluZyBhIHBlcmNlbnRhZ2UsIHRoYXQgbXVzdCByYW5nZSBmcm9tIGdyZWF0ZXIgdGhhbiAwIHRvIGxlc3MgdGhhbiBvciBlcXVhbCB0byAxMDAgLSBkZWZhdWx0cyB0byAxLicgfV0gfSxcclxuICAgIFBlcmNlbnRpbGU6IHsgRnVuY3Rpb246ICdQZXJjZW50aWxlJywgUGFyYW1ldGVyczogW3sgRGVmYXVsdDogJzEwMCUnLCBUeXBlOiAnc3RyaW5nJywgRGVzY3JpcHRpb246ICdBIGZsb2F0aW5nIHBvaW50IHZhbHVlLCByZXByZXNlbnRpbmcgYSBwZXJjZW50YWdlLCB0aGF0IG11c3QgcmFuZ2UgZnJvbSAwIHRvIDEwMC4nIH1dIH0sXHJcbiAgICBEaWZmZXJlbmNlOiB7IEZ1bmN0aW9uOiAnRGlmZmVyZW5jZScsIFBhcmFtZXRlcnM6IFtdIH0sXHJcbiAgICBUaW1lRGlmZmVyZW5jZTogeyBGdW5jdGlvbjogJ1RpbWVEaWZmZXJlbmNlJywgUGFyYW1ldGVyczogW3sgRGVmYXVsdDogJ1NlY29uZHMnLCBUeXBlOiAndGltZScsIERlc2NyaXB0aW9uOiAnU3BlY2lmaWVzIHRoZSB0eXBlIG9mIHRpbWUgdW5pdHMgYW5kIG11c3QgYmUgb25lIG9mIHRoZSBmb2xsb3dpbmc6IFNlY29uZHMsIE5hbm9zZWNvbmRzLCBNaWNyb3NlY29uZHMsIE1pbGxpc2Vjb25kcywgTWludXRlcywgSG91cnMsIERheXMsIFdlZWtzLCBLZSAoaS5lLiwgdHJhZGl0aW9uYWwgQ2hpbmVzZSB1bml0IG9mIGRlY2ltYWwgdGltZSksIFRpY2tzIChpLmUuLCAxMDAtbmFub3NlY29uZCBpbnRlcnZhbHMpLCBQbGFuY2tUaW1lIG9yIEF0b21pY1VuaXRzT2ZUaW1lIC0gZGVmYXVsdHMgdG8gU2Vjb25kcy4nIH1dIH0sXHJcbiAgICBEZXJpdmF0aXZlOiB7IEZ1bmN0aW9uOiAnRGVyaXZhdGl2ZScsIFBhcmFtZXRlcnM6IFt7IERlZmF1bHQ6ICdTZWNvbmRzJywgVHlwZTogJ3RpbWUnLCBEZXNjcmlwdGlvbjogJ1NwZWNpZmllcyB0aGUgdHlwZSBvZiB0aW1lIHVuaXRzIGFuZCBtdXN0IGJlIG9uZSBvZiB0aGUgZm9sbG93aW5nOiBTZWNvbmRzLCBOYW5vc2Vjb25kcywgTWljcm9zZWNvbmRzLCBNaWxsaXNlY29uZHMsIE1pbnV0ZXMsIEhvdXJzLCBEYXlzLCBXZWVrcywgS2UgKGkuZS4sIHRyYWRpdGlvbmFsIENoaW5lc2UgdW5pdCBvZiBkZWNpbWFsIHRpbWUpLCBUaWNrcyAoaS5lLiwgMTAwLW5hbm9zZWNvbmQgaW50ZXJ2YWxzKSwgUGxhbmNrVGltZSBvciBBdG9taWNVbml0c09mVGltZSAtIGRlZmF1bHRzIHRvIFNlY29uZHMuJyB9XSB9LFxyXG4gICAgVGltZUludGVncmF0aW9uOiB7IEZ1bmN0aW9uOiAnVGltZUludGVncmF0aW9uJywgUGFyYW1ldGVyczogW3sgRGVmYXVsdDogJ0hvdXJzJywgVHlwZTogJ3RpbWUnLCBEZXNjcmlwdGlvbjogJ1NwZWNpZmllcyB0aGUgdHlwZSBvZiB0aW1lIHVuaXRzIGFuZCBtdXN0IGJlIG9uZSBvZiB0aGUgZm9sbG93aW5nOiBTZWNvbmRzLCBOYW5vc2Vjb25kcywgTWljcm9zZWNvbmRzLCBNaWxsaXNlY29uZHMsIE1pbnV0ZXMsIEhvdXJzLCBEYXlzLCBXZWVrcywgS2UgKGkuZS4sIHRyYWRpdGlvbmFsIENoaW5lc2UgdW5pdCBvZiBkZWNpbWFsIHRpbWUpLCBUaWNrcyAoaS5lLiwgMTAwLW5hbm9zZWNvbmQgaW50ZXJ2YWxzKSwgUGxhbmNrVGltZSBvciBBdG9taWNVbml0c09mVGltZSAtIGRlZmF1bHRzIHRvIEhvdXJzLicgfV0gfSxcclxuICAgIEludGVydmFsOiB7IEZ1bmN0aW9uOiAnSW50ZXJ2YWwnLCBQYXJhbWV0ZXJzOiBbeyBEZWZhdWx0OiAwLCBUeXBlOiAnZG91YmxlJywgRGVzY3JpcHRpb246ICdBIGZsb2F0aW5nLXBvaW50IHZhbHVlIHRoYXQgbXVzdCBiZSBncmVhdGVyIHRoYW4gb3IgZXF1YWwgdG8gemVybyB0aGF0IHJlcHJlc2VudHMgdGhlIGRlc2lyZWQgdGltZSBpbnRlcnZhbCwgaW4gdGltZSB1bml0cywgZm9yIHRoZSByZXR1cm5lZCBkYXRhLiAnIH0sIHsgRGVmYXVsdDogJ1NlY29uZHMnLCBUeXBlOiAndGltZScsIERlc2NyaXB0aW9uOiAnU3BlY2lmaWVzIHRoZSB0eXBlIG9mIHRpbWUgdW5pdHMgYW5kIG11c3QgYmUgb25lIG9mIHRoZSBmb2xsb3dpbmc6IFNlY29uZHMsIE5hbm9zZWNvbmRzLCBNaWNyb3NlY29uZHMsIE1pbGxpc2Vjb25kcywgTWludXRlcywgSG91cnMsIERheXMsIFdlZWtzLCBLZSAoaS5lLiwgdHJhZGl0aW9uYWwgQ2hpbmVzZSB1bml0IG9mIGRlY2ltYWwgdGltZSksIFRpY2tzIChpLmUuLCAxMDAtbmFub3NlY29uZCBpbnRlcnZhbHMpLCBQbGFuY2tUaW1lIG9yIEF0b21pY1VuaXRzT2ZUaW1lIC0gZGVmYXVsdHMgdG8gU2Vjb25kcy4nIH1dIH0sXHJcbiAgICBJbmNsdWRlUmFuZ2U6IHsgRnVuY3Rpb246ICdJbmNsdWRlUmFuZ2UnLCBQYXJhbWV0ZXJzOiBbeyBEZWZhdWx0OiAwLCBUeXBlOiAnZG91YmxlJywgRGVzY3JpcHRpb246ICdGbG9hdGluZy1wb2ludCBudW1iZXIgdGhhdCByZXByZXNlbnRzIHRoZSBsb3cgcmFuZ2Ugb2YgdmFsdWVzIGFsbG93ZWQgaW4gdGhlIHJldHVybiBzZXJpZXMuJyB9LCB7IERlZmF1bHQ6IDAsIFR5cGU6ICdkb3VibGUnLCBEZXNjcmlwdGlvbjogJ0Zsb2F0aW5nLXBvaW50IG51bWJlciB0aGF0IHJlcHJlc2VudHMgdGhlIGhpZ2ggcmFuZ2Ugb2YgdmFsdWVzIGFsbG93ZWQgaW4gdGhlIHJldHVybiBzZXJpZXMuJyB9LCB7IERlZmF1bHQ6IGZhbHNlLCBUeXBlOiAnYm9vbGVhbicsIERlc2NyaXB0aW9uOiAnQSBib29sZWFuIGZsYWcgdGhhdCBkZXRlcm1pbmVzIGlmIHJhbmdlIHZhbHVlcyBhcmUgaW5jbHVzaXZlLCBpLmUuLCBhbGxvd2VkIHZhbHVlcyBhcmUgPj0gbG93IGFuZCA8PSBoaWdoIC0gZGVmYXVsdHMgdG8gZmFsc2UsIHdoaWNoIG1lYW5zIHZhbHVlcyBhcmUgZXhjbHVzaXZlLCBpLmUuLCBhbGxvd2VkIHZhbHVlcyBhcmUgPiBsb3cgYW5kIDwgaGlnaC4nIH0sIHsgRGVmYXVsdDogZmFsc2UsIFR5cGU6ICdib29sZWFuJywgRGVzY3JpcHRpb246ICdBIGJvb2xlYW4gZmxhZyAtIHdoZW4gZm91ciBwYXJhbWV0ZXJzIGFyZSBwcm92aWRlZCwgdGhpcmQgcGFyYW1ldGVyIGRldGVybWluZXMgaWYgbG93IHZhbHVlIGlzIGluY2x1c2l2ZSBhbmQgZm9ydGggcGFyYW1ldGVyIGRldGVybWluZXMgaWYgaGlnaCB2YWx1ZSBpcyBpbmNsdXNpdmUuJyB9XSB9LFxyXG4gICAgRXhjbHVkZVJhbmdlOiB7IEZ1bmN0aW9uOiAnRXhjbHVkZVJhbmdlJywgUGFyYW1ldGVyczogW3sgRGVmYXVsdDogMCwgVHlwZTogJ2RvdWJsZScsIERlc2NyaXB0aW9uOiAnRmxvYXRpbmctcG9pbnQgbnVtYmVyIHRoYXQgcmVwcmVzZW50cyB0aGUgbG93IHJhbmdlIG9mIHZhbHVlcyBhbGxvd2VkIGluIHRoZSByZXR1cm4gc2VyaWVzLicgfSwgeyBEZWZhdWx0OiAwLCBUeXBlOiAnZG91YmxlJywgRGVzY3JpcHRpb246ICdGbG9hdGluZy1wb2ludCBudW1iZXIgdGhhdCByZXByZXNlbnRzIHRoZSBoaWdoIHJhbmdlIG9mIHZhbHVlcyBhbGxvd2VkIGluIHRoZSByZXR1cm4gc2VyaWVzLicgfSwgeyBEZWZhdWx0OiBmYWxzZSwgVHlwZTogJ2Jvb2xlYW4nLCBEZXNjcmlwdGlvbjogJ0EgYm9vbGVhbiBmbGFnIHRoYXQgZGV0ZXJtaW5lcyBpZiByYW5nZSB2YWx1ZXMgYXJlIGluY2x1c2l2ZSwgaS5lLiwgYWxsb3dlZCB2YWx1ZXMgYXJlID49IGxvdyBhbmQgPD0gaGlnaCAtIGRlZmF1bHRzIHRvIGZhbHNlLCB3aGljaCBtZWFucyB2YWx1ZXMgYXJlIGV4Y2x1c2l2ZSwgaS5lLiwgYWxsb3dlZCB2YWx1ZXMgYXJlID4gbG93IGFuZCA8IGhpZ2guJyB9LCB7IERlZmF1bHQ6IGZhbHNlLCBUeXBlOiAnYm9vbGVhbicsIERlc2NyaXB0aW9uOiAnQSBib29sZWFuIGZsYWcgLSB3aGVuIGZvdXIgcGFyYW1ldGVycyBhcmUgcHJvdmlkZWQsIHRoaXJkIHBhcmFtZXRlciBkZXRlcm1pbmVzIGlmIGxvdyB2YWx1ZSBpcyBpbmNsdXNpdmUgYW5kIGZvcnRoIHBhcmFtZXRlciBkZXRlcm1pbmVzIGlmIGhpZ2ggdmFsdWUgaXMgaW5jbHVzaXZlLicgfV0gfSxcclxuICAgIEZpbHRlck5hTjogeyBGdW5jdGlvbjogJ0ZpbHRlck5hTicsIFBhcmFtZXRlcnM6IFt7IERlZmF1bHQ6IHRydWUsIFR5cGU6ICdib29sZWFuJywgRGVzY3JpcHRpb246ICdBIGJvb2xlYW4gZmxhZyB0aGF0IGRldGVybWluZXMgaWYgaW5maW5pdGUgdmFsdWVzIHNob3VsZCBhbHNvIGJlIGV4Y2x1ZGVkIC0gZGVmYXVsdHMgdG8gdHJ1ZS4nIH1dIH0sXHJcbiAgICBVbndyYXBBbmdsZTogeyBGdW5jdGlvbjogJ1Vud3JhcEFuZ2xlJywgUGFyYW1ldGVyczogW3sgRGVmYXVsdDogJ0RlZ3JlZXMnLCBUeXBlOiAnYW5nbGVVbml0cycsIERlc2NyaXB0aW9uOiAnU3BlY2lmaWVzIHRoZSB0eXBlIG9mIGFuZ2xlIHVuaXRzIGFuZCBtdXN0IGJlIG9uZSBvZiB0aGUgZm9sbG93aW5nOiBEZWdyZWVzLCBSYWRpYW5zLCBHcmFkcywgQXJjTWludXRlcywgQXJjU2Vjb25kcyBvciBBbmd1bGFyTWlsIC0gZGVmYXVsdHMgdG8gRGVncmVlcy4nIH1dIH0sXHJcbiAgICBXcmFwQW5nbGU6IHsgRnVuY3Rpb246ICdXcmFwQW5nbGUnLCBQYXJhbWV0ZXJzOiBbeyBEZWZhdWx0OiAnRGVncmVlcycsIFR5cGU6ICdhbmdsZVVuaXRzJywgRGVzY3JpcHRpb246ICdTcGVjaWZpZXMgdGhlIHR5cGUgb2YgYW5nbGUgdW5pdHMgYW5kIG11c3QgYmUgb25lIG9mIHRoZSBmb2xsb3dpbmc6IERlZ3JlZXMsIFJhZGlhbnMsIEdyYWRzLCBBcmNNaW51dGVzLCBBcmNTZWNvbmRzIG9yIEFuZ3VsYXJNaWwgLSBkZWZhdWx0cyB0byBEZWdyZWVzLicgfV0gfSxcclxuICAgIExhYmVsOiB7IEZ1bmN0aW9uOiAnTGFiZWwnLCBQYXJhbWV0ZXJzOiBbeyBEZWZhdWx0OiAnTmFtZScsIFR5cGU6ICdzdHJpbmcnLCBEZXNjcmlwdGlvbjogJ1JlbmFtZXMgYSBzZXJpZXMgd2l0aCB0aGUgc3BlY2lmaWVkIGxhYmVsIHZhbHVlLicgfV0gfSxcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBXaGVyZU9wZXJhdG9ycyA9IFsnPScsICc8PicsICc8JywgJzw9JywgJz4nLCAnPj0nLCAnTElLRScsICdOT1QgTElLRScsICdJTicsICdOT1QgSU4nLCAnSVMnLCAnSVMgTk9UJ107XHJcblxyXG5leHBvcnQgY29uc3QgQm9vbGVhbnMgPSBbJ3RydWUnLCAnZmFsc2UnXTtcclxuXHJcbmV4cG9ydCBjb25zdCBBbmdsZVVuaXRzID0gWydEZWdyZWVzJywgJ1JhZGlhbnMnLCAnR3JhZHMnLCAnQXJjTWludXRlcycsICdBcmNTZWNvbmRzJywgJ0FuZ3VsYXJNaWwnXVxyXG5cclxuZXhwb3J0IGNvbnN0IFRpbWVVbml0cyA9IFsnV2Vla3MnLCAnRGF5cycsICdIb3VycycsICdNaW51dGVzJywgJ1NlY29uZHMnLCAnTWlsbGlzZWNvbmRzJywgJ01pY3Jvc2Vjb25kcycsICdOYW5vc2Vjb25kcycsICdUaWNrcycsICdQbGFua1RpbWUnLCAnQXRvbWljVW5pdHNPZlRpbWUnLCAnS2UnXVxyXG4vLyAjZW5kcmVnaW9uXHJcbiIsIi8vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbi8vICBtb2R1bGUuanMgLSBHYnRjXHJcbi8vXHJcbi8vICBDb3B5cmlnaHQg77+9IDIwMTcsIEdyaWQgUHJvdGVjdGlvbiBBbGxpYW5jZS4gIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbi8vXHJcbi8vICBMaWNlbnNlZCB0byB0aGUgR3JpZCBQcm90ZWN0aW9uIEFsbGlhbmNlIChHUEEpIHVuZGVyIG9uZSBvciBtb3JlIGNvbnRyaWJ1dG9yIGxpY2Vuc2UgYWdyZWVtZW50cy4gU2VlXHJcbi8vICB0aGUgTk9USUNFIGZpbGUgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIHdvcmsgZm9yIGFkZGl0aW9uYWwgaW5mb3JtYXRpb24gcmVnYXJkaW5nIGNvcHlyaWdodCBvd25lcnNoaXAuXHJcbi8vICBUaGUgR1BBIGxpY2Vuc2VzIHRoaXMgZmlsZSB0byB5b3UgdW5kZXIgdGhlIE1JVCBMaWNlbnNlIChNSVQpLCB0aGUgXCJMaWNlbnNlXCI7IHlvdSBtYXkgbm90IHVzZSB0aGlzXHJcbi8vICBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdDpcclxuLy9cclxuLy8gICAgICBodHRwOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXHJcbi8vXHJcbi8vICBVbmxlc3MgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHRoZSBzdWJqZWN0IHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuXHJcbi8vICBcIkFTLUlTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLiBSZWZlciB0byB0aGVcclxuLy8gIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zLlxyXG4vL1xyXG4vLyAgQ29kZSBNb2RpZmljYXRpb24gSGlzdG9yeTpcclxuLy8gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gIDExLzAyLzIwMTcgLSBCaWxseSBFcm5lc3RcclxuLy8gICAgICAgR2VuZXJhdGVkIG9yaWdpbmFsIHZlcnNpb24gb2Ygc291cmNlIGNvZGUuXHJcbi8vXHJcbi8vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbmRlY2xhcmUgdmFyIGFuZ3VsYXI6IGFueTtcclxuaW1wb3J0IE9wZW5IaXN0b3JpYW5EYXRhU291cmNlIGZyb20gJy4vb3Blbkhpc3RvcmlhbkRhdGFzb3VyY2UnXHJcbmltcG9ydCBPcGVuSGlzdG9yaWFuRGF0YVNvdXJjZVF1ZXJ5Q3RybCBmcm9tICcuL2NvbnRyb2xsZXJzL29wZW5IaXN0b3JpYW5RdWVyeV9jdHJsJ1xyXG5pbXBvcnQgT3Blbkhpc3RvcmlhbkNvbmZpZ0N0cmwgZnJvbSAnLi9jb250cm9sbGVycy9vcGVuSGlzdG9yaWFuQ29uZmlnX2N0cmwnXHJcbmltcG9ydCBPcGVuSGlzdG9yaWFuUXVlcnlPcHRpb25zQ3RybCBmcm9tICcuL2NvbnRyb2xsZXJzL29wZW5IaXN0b3JpYW5RdWVyeU9wdGlvbnNfY3RybCdcclxuaW1wb3J0IE9wZW5IaXN0b3JpYW5Bbm5vdGF0aW9uc1F1ZXJ5Q3RybCBmcm9tICcuL2NvbnRyb2xsZXJzL29wZW5IaXN0b3JpYW5Bbm5vdGF0aW9uc19jdHJsJ1xyXG5pbXBvcnQgT3Blbkhpc3RvcmlhbkVsZW1lbnRQaWNrZXJDdHJsIGZyb20gJy4vY29udHJvbGxlcnMvb3Blbkhpc3RvcmlhbkVsZW1lbnRQaWNrZXJfY3RybCdcclxuaW1wb3J0IE9wZW5IaXN0b3JpYW5UZXh0RWRpdG9yQ3RybCBmcm9tICcuL2NvbnRyb2xsZXJzL29wZW5IaXN0b3JpYW5UZXh0RWRpdG9yX2N0cmwnXHJcbmltcG9ydCBPcGVuSGlzdG9yaWFuRmlsdGVyRXhwcmVzc2lvbkN0cmwgZnJvbSAnLi9jb250cm9sbGVycy9vcGVuSGlzdG9yaWFuRmlsdGVyRXhwcmVzc2lvbl9jdHJsJ1xyXG5cclxuLy9pbXBvcnQgYW5ndWxhciBmcm9tIFwiYW5ndWxhclwiXHJcbmV4cG9ydCB7XHJcbiAgICBPcGVuSGlzdG9yaWFuRGF0YVNvdXJjZSBhcyBEYXRhc291cmNlLFxyXG4gICAgT3Blbkhpc3RvcmlhbkRhdGFTb3VyY2VRdWVyeUN0cmwgYXMgUXVlcnlDdHJsLFxyXG4gICAgT3Blbkhpc3RvcmlhbkNvbmZpZ0N0cmwgYXMgQ29uZmlnQ3RybCxcclxuICAgIE9wZW5IaXN0b3JpYW5RdWVyeU9wdGlvbnNDdHJsIGFzIFF1ZXJ5T3B0aW9uc0N0cmwsXHJcbiAgICBPcGVuSGlzdG9yaWFuQW5ub3RhdGlvbnNRdWVyeUN0cmwgYXMgQW5ub3RhdGlvbnNRdWVyeUN0cmxcclxufVxyXG5cclxuYW5ndWxhci5tb2R1bGUoJ2dyYWZhbmEuZGlyZWN0aXZlcycpLmRpcmVjdGl2ZShcInF1ZXJ5T3B0aW9uc1wiLCBmdW5jdGlvbigpIHtcclxuICByZXR1cm4ge1xyXG4gICAgdGVtcGxhdGVVcmw6ICdwdWJsaWMvcGx1Z2lucy9ncmlkcHJvdGVjdGlvbmFsbGlhbmNlLW9wZW5oaXN0b3JpYW4tZGF0YXNvdXJjZS9wYXJ0aWFsL3F1ZXJ5Lm9wdGlvbnMuaHRtbCcsXHJcbiAgICByZXN0cmljdDogJ0UnLFxyXG4gICAgY29udHJvbGxlcjogT3Blbkhpc3RvcmlhblF1ZXJ5T3B0aW9uc0N0cmwsXHJcbiAgICBjb250cm9sbGVyQXM6ICdxdWVyeU9wdGlvbkN0cmwnLFxyXG4gICAgc2NvcGU6IHtcclxuICAgICAgZmxhZ3M6IFwiPVwiLFxyXG4gICAgICByZXR1cm46IFwiPVwiLFxyXG4gICAgfVxyXG4gIH07XHJcbn0pO1xyXG5cclxuYW5ndWxhci5tb2R1bGUoJ2dyYWZhbmEuZGlyZWN0aXZlcycpLmRpcmVjdGl2ZShcImVsZW1lbnRQaWNrZXJcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICB0ZW1wbGF0ZVVybDogJ3B1YmxpYy9wbHVnaW5zL2dyaWRwcm90ZWN0aW9uYWxsaWFuY2Utb3Blbmhpc3Rvcmlhbi1kYXRhc291cmNlL3BhcnRpYWwvcXVlcnkuZWxlbWVudFBpY2tlci5odG1sJyxcclxuICAgICAgICByZXN0cmljdDogJ0UnLFxyXG4gICAgICAgIGNvbnRyb2xsZXI6IE9wZW5IaXN0b3JpYW5FbGVtZW50UGlja2VyQ3RybCxcclxuICAgICAgICBjb250cm9sbGVyQXM6ICdvcGVuSGlzdG9yaWFuRWxlbWVudFBpY2tlckN0cmwnLFxyXG4gICAgICAgIHNjb3BlOiB7XHJcbiAgICAgICAgICAgIHRhcmdldDogXCI9XCIsXHJcbiAgICAgICAgICAgIGRhdGFzb3VyY2U6IFwiPVwiLFxyXG4gICAgICAgICAgICBwYW5lbDogXCI9XCJcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59KTtcclxuXHJcbmFuZ3VsYXIubW9kdWxlKCdncmFmYW5hLmRpcmVjdGl2ZXMnKS5kaXJlY3RpdmUoXCJ0ZXh0RWRpdG9yXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgdGVtcGxhdGVVcmw6ICdwdWJsaWMvcGx1Z2lucy9ncmlkcHJvdGVjdGlvbmFsbGlhbmNlLW9wZW5oaXN0b3JpYW4tZGF0YXNvdXJjZS9wYXJ0aWFsL3F1ZXJ5LnRleHRFZGl0b3IuaHRtbCcsXHJcbiAgICAgICAgcmVzdHJpY3Q6ICdFJyxcclxuICAgICAgICBjb250cm9sbGVyOiBPcGVuSGlzdG9yaWFuVGV4dEVkaXRvckN0cmwsXHJcbiAgICAgICAgY29udHJvbGxlckFzOiAnb3Blbkhpc3RvcmlhblRleHRFZGl0b3JDdHJsJyxcclxuICAgICAgICBzY29wZToge1xyXG4gICAgICAgICAgICB0YXJnZXQ6IFwiPVwiLFxyXG4gICAgICAgICAgICBkYXRhc291cmNlOiBcIj1cIixcclxuICAgICAgICAgICAgcGFuZWw6IFwiPVwiXHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxufSk7XHJcblxyXG5hbmd1bGFyLm1vZHVsZSgnZ3JhZmFuYS5kaXJlY3RpdmVzJykuZGlyZWN0aXZlKFwiZmlsdGVyRXhwcmVzc2lvblwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHRlbXBsYXRlVXJsOiAncHVibGljL3BsdWdpbnMvZ3JpZHByb3RlY3Rpb25hbGxpYW5jZS1vcGVuaGlzdG9yaWFuLWRhdGFzb3VyY2UvcGFydGlhbC9xdWVyeS5maWx0ZXJFeHByZXNzaW9uLmh0bWwnLFxyXG4gICAgICAgIHJlc3RyaWN0OiAnRScsXHJcbiAgICAgICAgY29udHJvbGxlcjogT3Blbkhpc3RvcmlhbkZpbHRlckV4cHJlc3Npb25DdHJsLFxyXG4gICAgICAgIGNvbnRyb2xsZXJBczogJ29wZW5IaXN0b3JpYW5GaWx0ZXJFeHByZXNzaW9uQ3RybCcsXHJcbiAgICAgICAgc2NvcGU6IHtcclxuICAgICAgICAgICAgdGFyZ2V0OiBcIj1cIixcclxuICAgICAgICAgICAgZGF0YXNvdXJjZTogXCI9XCIsXHJcbiAgICAgICAgICAgIHBhbmVsOiBcIj1cIlxyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn0pOyIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLmdlbmVyaWMtZGF0YXNvdXJjZS1xdWVyeS1yb3cgLnF1ZXJ5LWtleXdvcmQge1xcclxcbiAgd2lkdGg6IDc1cHg7XFxyXFxufVwiLCBcIlwiXSk7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXNlU291cmNlTWFwKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuIFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIntcIikuY29uY2F0KGNvbnRlbnQsIFwifVwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbignJyk7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgJyddXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcbiAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbW9kdWxlcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBpdGVtID0gbW9kdWxlc1tfaV07IC8vIHNraXAgYWxyZWFkeSBpbXBvcnRlZCBtb2R1bGVcbiAgICAgIC8vIHRoaXMgaW1wbGVtZW50YXRpb24gaXMgbm90IDEwMCUgcGVyZmVjdCBmb3Igd2VpcmQgbWVkaWEgcXVlcnkgY29tYmluYXRpb25zXG4gICAgICAvLyB3aGVuIGEgbW9kdWxlIGlzIGltcG9ydGVkIG11bHRpcGxlIHRpbWVzIHdpdGggZGlmZmVyZW50IG1lZGlhIHF1ZXJpZXMuXG4gICAgICAvLyBJIGhvcGUgdGhpcyB3aWxsIG5ldmVyIG9jY3VyIChIZXkgdGhpcyB3YXkgd2UgaGF2ZSBzbWFsbGVyIGJ1bmRsZXMpXG5cbiAgICAgIGlmIChpdGVtWzBdID09IG51bGwgfHwgIWFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgaWYgKG1lZGlhUXVlcnkgJiYgIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgICAgaXRlbVsyXSA9IFwiKFwiLmNvbmNhdChpdGVtWzJdLCBcIikgYW5kIChcIikuY29uY2F0KG1lZGlhUXVlcnksIFwiKVwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59O1xuXG5mdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV0gfHwgJyc7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuXG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh1c2VTb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgPT09ICdmdW5jdGlvbicpIHtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IHRvQ29tbWVudChjc3NNYXBwaW5nKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290KS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKCdcXG4nKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbignXFxuJyk7XG59IC8vIEFkYXB0ZWQgZnJvbSBjb252ZXJ0LXNvdXJjZS1tYXAgKE1JVClcblxuXG5mdW5jdGlvbiB0b0NvbW1lbnQoc291cmNlTWFwKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKTtcbiAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICByZXR1cm4gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xufSIsIi8vLzxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uL2hlYWRlcnMvY29tbW9uLmQudHNcIiAvPlxyXG5cclxuaW1wb3J0IHtQYW5lbEN0cmx9IGZyb20gJy4vcGFuZWxfY3RybCc7XHJcblxyXG5jbGFzcyBNZXRyaWNzUGFuZWxDdHJsIGV4dGVuZHMgUGFuZWxDdHJsIHtcclxuICBzY29wZTogYW55O1xyXG4gIGRhdGFzb3VyY2U6IGFueTtcclxuICBkYXRhc291cmNlTmFtZTogYW55O1xyXG4gICRxOiBhbnk7XHJcbiAgJHRpbWVvdXQ6IGFueTtcclxuICBkYXRhc291cmNlU3J2OiBhbnk7XHJcbiAgdGltZVNydjogYW55O1xyXG4gIHRlbXBsYXRlU3J2OiBhbnk7XHJcbiAgdGltaW5nOiBhbnk7XHJcbiAgcmFuZ2U6IGFueTtcclxuICBpbnRlcnZhbDogYW55O1xyXG4gIGludGVydmFsTXM6IGFueTtcclxuICByZXNvbHV0aW9uOiBhbnk7XHJcbiAgdGltZUluZm86IGFueTtcclxuICBza2lwRGF0YU9uSW5pdDogYm9vbGVhbjtcclxuICBkYXRhU3RyZWFtOiBhbnk7XHJcbiAgZGF0YVN1YnNjcmlwdGlvbjogYW55O1xyXG4gIGRhdGFMaXN0OiBhbnk7XHJcbiAgbmV4dFJlZklkOiBzdHJpbmc7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCRzY29wZSwgJGluamVjdG9yKSB7XHJcbiAgICBzdXBlcigkc2NvcGUsICRpbmplY3Rvcik7XHJcblxyXG4gICAgLy8gbWFrZSBtZXRyaWNzIHRhYiB0aGUgZGVmYXVsdFxyXG4gICAgdGhpcy5lZGl0b3JUYWJJbmRleCA9IDE7XHJcbiAgICAvLyB0aGlzLiRxID0gJGluamVjdG9yLmdldCgnJHEnKTtcclxuICAgIC8vIHRoaXMuZGF0YXNvdXJjZVNydiA9ICRpbmplY3Rvci5nZXQoJ2RhdGFzb3VyY2VTcnYnKTtcclxuICAgIC8vIHRoaXMudGltZVNydiA9ICRpbmplY3Rvci5nZXQoJ3RpbWVTcnYnKTtcclxuICAgIC8vIHRoaXMudGVtcGxhdGVTcnYgPSAkaW5qZWN0b3IuZ2V0KCd0ZW1wbGF0ZVNydicpO1xyXG5cclxuICAgIGlmICghdGhpcy5wYW5lbC50YXJnZXRzKSB7XHJcbiAgICAgIHRoaXMucGFuZWwudGFyZ2V0cyA9IFt7fV07XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIG9uUGFuZWxUZWFyRG93bigpIHtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgb25Jbml0TWV0cmljc1BhbmVsRWRpdE1vZGUoKSB7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIG9uTWV0cmljc1BhbmVsUmVmcmVzaCgpIHtcclxuICB9XHJcblxyXG5cclxuICBzZXRUaW1lUXVlcnlTdGFydCgpIHtcclxuICB9XHJcblxyXG4gIHNldFRpbWVRdWVyeUVuZCgpIHtcclxuICB9XHJcblxyXG4gIHVwZGF0ZVRpbWVSYW5nZShkYXRhc291cmNlPykge1xyXG4gIH1cclxuXHJcbiAgY2FsY3VsYXRlSW50ZXJ2YWwoKSB7XHJcbiAgfVxyXG5cclxuICBhcHBseVBhbmVsVGltZU92ZXJyaWRlcygpIHtcclxuICB9XHJcblxyXG4gIGlzc3VlUXVlcmllcyhkYXRhc291cmNlKSB7XHJcbiAgfVxyXG5cclxuICBoYW5kbGVRdWVyeVJlc3VsdChyZXN1bHQpIHtcclxuICB9XHJcblxyXG4gIGhhbmRsZURhdGFTdHJlYW0oc3RyZWFtKSB7XHJcbiAgfVxyXG5cclxuICBzZXREYXRhc291cmNlKGRhdGFzb3VyY2UpIHtcclxuICB9XHJcblxyXG4gIGFkZFF1ZXJ5KHRhcmdldCkge1xyXG4gIH1cclxuXHJcbiAgcmVtb3ZlUXVlcnkodGFyZ2V0KSB7XHJcbiAgfVxyXG5cclxuICBtb3ZlUXVlcnkodGFyZ2V0LCBkaXJlY3Rpb24pIHtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCB7TWV0cmljc1BhbmVsQ3RybH07XHJcbiIsIi8vLzxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uL2hlYWRlcnMvY29tbW9uLmQudHNcIiAvPlxyXG5cclxuZXhwb3J0IGNsYXNzIFBhbmVsQ3RybCB7XHJcbiAgcGFuZWw6IGFueTtcclxuICBlcnJvcjogYW55O1xyXG4gIHJvdzogYW55O1xyXG4gIGRhc2hib2FyZDogYW55O1xyXG4gIGVkaXRvclRhYkluZGV4OiBudW1iZXI7XHJcbiAgcGx1Z2luTmFtZTogc3RyaW5nO1xyXG4gIHBsdWdpbklkOiBzdHJpbmc7XHJcbiAgZWRpdG9yVGFiczogYW55O1xyXG4gICRzY29wZTogYW55O1xyXG4gICRpbmplY3RvcjogYW55O1xyXG4gICR0aW1lb3V0OiBhbnk7XHJcbiAgZnVsbHNjcmVlbjogYm9vbGVhbjtcclxuICBpbnNwZWN0b3I6IGFueTtcclxuICBlZGl0TW9kZUluaXRpYXRlZDogYm9vbGVhbjtcclxuICBlZGl0b3JIZWxwSW5kZXg6IG51bWJlcjtcclxuICBlZGl0TW9kZTogYW55O1xyXG4gIGhlaWdodDogYW55O1xyXG4gIGNvbnRhaW5lckhlaWdodDogYW55O1xyXG4gIGV2ZW50czogYW55O1xyXG4gIHRpbWluZzogYW55O1xyXG4gIGxvYWRpbmc6IGJvb2xlYW47XHJcblxyXG4gIGNvbnN0cnVjdG9yKCRzY29wZSwgJGluamVjdG9yKSB7XHJcbiAgfVxyXG5cclxuICBpbml0KCkge1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyaW5nQ29tcGxldGVkKCkge1xyXG4gIH1cclxuXHJcbiAgcmVmcmVzaCgpIHtcclxuICB9XHJcblxyXG4gIHB1Ymxpc2hBcHBFdmVudChldnROYW1lLCBldnQpIHtcclxuICB9XHJcblxyXG4gIGNoYW5nZVZpZXcoZnVsbHNjcmVlbiwgZWRpdCkge1xyXG4gIH1cclxuXHJcbiAgdmlld1BhbmVsKCkge1xyXG4gICAgdGhpcy5jaGFuZ2VWaWV3KHRydWUsIGZhbHNlKTtcclxuICB9XHJcblxyXG4gIGVkaXRQYW5lbCgpIHtcclxuICAgIHRoaXMuY2hhbmdlVmlldyh0cnVlLCB0cnVlKTtcclxuICB9XHJcblxyXG4gIGV4aXRGdWxsc2NyZWVuKCkge1xyXG4gICAgdGhpcy5jaGFuZ2VWaWV3KGZhbHNlLCBmYWxzZSk7XHJcbiAgfVxyXG5cclxuICBpbml0RWRpdE1vZGUoKSB7XHJcbiAgfVxyXG5cclxuICBjaGFuZ2VUYWIobmV3SW5kZXgpIHtcclxuICB9XHJcblxyXG4gIGFkZEVkaXRvclRhYih0aXRsZSwgZGlyZWN0aXZlRm4sIGluZGV4Pykge1xyXG4gIH1cclxuXHJcbiAgZ2V0TWVudSgpIHtcclxuICAgIHJldHVybiBbXTtcclxuICB9XHJcblxyXG4gIGdldEV4dGVuZGVkTWVudSgpIHtcclxuICAgIHJldHVybiBbXTtcclxuICB9XHJcblxyXG4gIG90aGVyUGFuZWxJbkZ1bGxzY3JlZW5Nb2RlKCkge1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgY2FsY3VsYXRlUGFuZWxIZWlnaHQoKSB7XHJcbiAgfVxyXG5cclxuICByZW5kZXIocGF5bG9hZD8pIHtcclxuICB9XHJcblxyXG4gIHRvZ2dsZUVkaXRvckhlbHAoaW5kZXgpIHtcclxuICB9XHJcblxyXG4gIGR1cGxpY2F0ZSgpIHtcclxuICB9XHJcblxyXG4gIHVwZGF0ZUNvbHVtblNwYW4oc3Bhbikge1xyXG4gIH1cclxuXHJcbiAgcmVtb3ZlUGFuZWwoKSB7XHJcbiAgfVxyXG5cclxuICBlZGl0UGFuZWxKc29uKCkge1xyXG4gIH1cclxuXHJcbiAgcmVwbGFjZVBhbmVsKG5ld1BhbmVsLCBvbGRQYW5lbCkge1xyXG4gIH1cclxuXHJcbiAgc2hhcmVQYW5lbCgpIHtcclxuICB9XHJcblxyXG4gIGdldEluZm9Nb2RlKCkge1xyXG4gIH1cclxuXHJcbiAgZ2V0SW5mb0NvbnRlbnQob3B0aW9ucykge1xyXG4gIH1cclxuXHJcbiAgb3Blbkluc3BlY3RvcigpIHtcclxuICB9XHJcbn1cclxuIiwiLy8vPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vaGVhZGVycy9jb21tb24uZC50c1wiIC8+XHJcblxyXG5leHBvcnQgY2xhc3MgUXVlcnlDdHJsIHtcclxuICB0YXJnZXQ6IGFueTtcclxuICBkYXRhc291cmNlOiBhbnk7XHJcbiAgcGFuZWxDdHJsOiBhbnk7XHJcbiAgcGFuZWw6IGFueTtcclxuICBoYXNSYXdNb2RlOiBib29sZWFuO1xyXG4gIGVycm9yOiBzdHJpbmc7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyAkc2NvcGUsIHByaXZhdGUgJGluamVjdG9yKSB7XHJcbiAgICB0aGlzLnBhbmVsQ3RybCA9IHRoaXMucGFuZWxDdHJsIHx8IHtwYW5lbDoge319O1xyXG4gICAgdGhpcy50YXJnZXQgPSB0aGlzLnRhcmdldCB8fCB7dGFyZ2V0OiAnJ307XHJcbiAgICB0aGlzLnBhbmVsID0gdGhpcy5wYW5lbEN0cmwucGFuZWw7XHJcbiAgfVxyXG5cclxuICByZWZyZXNoKCkge31cclxufVxyXG4iLCJpbXBvcnQge1BhbmVsQ3RybH0gZnJvbSAnLi4vZmVhdHVyZXMvcGFuZWwvcGFuZWxfY3RybCc7XHJcbmltcG9ydCB7TWV0cmljc1BhbmVsQ3RybH0gZnJvbSAnLi4vZmVhdHVyZXMvcGFuZWwvbWV0cmljc19wYW5lbF9jdHJsJztcclxuaW1wb3J0IHtRdWVyeUN0cmx9IGZyb20gJy4uL2ZlYXR1cmVzL3BhbmVsL3F1ZXJ5X2N0cmwnO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGxvYWRQbHVnaW5Dc3Mob3B0aW9ucykge1xyXG59XHJcblxyXG5leHBvcnQge1xyXG4gIFBhbmVsQ3RybCxcclxuICBNZXRyaWNzUGFuZWxDdHJsLFxyXG4gIFF1ZXJ5Q3RybCxcclxufTtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRvbSA9IHt9O1xuXG52YXIgaXNPbGRJRSA9IGZ1bmN0aW9uIGlzT2xkSUUoKSB7XG4gIHZhciBtZW1vO1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUoKSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vID09PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gVGVzdCBmb3IgSUUgPD0gOSBhcyBwcm9wb3NlZCBieSBCcm93c2VyaGFja3NcbiAgICAgIC8vIEBzZWUgaHR0cDovL2Jyb3dzZXJoYWNrcy5jb20vI2hhY2stZTcxZDg2OTJmNjUzMzQxNzNmZWU3MTVjMjIyY2I4MDVcbiAgICAgIC8vIFRlc3RzIGZvciBleGlzdGVuY2Ugb2Ygc3RhbmRhcmQgZ2xvYmFscyBpcyB0byBhbGxvdyBzdHlsZS1sb2FkZXJcbiAgICAgIC8vIHRvIG9wZXJhdGUgY29ycmVjdGx5IGludG8gbm9uLXN0YW5kYXJkIGVudmlyb25tZW50c1xuICAgICAgLy8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlci9pc3N1ZXMvMTc3XG4gICAgICBtZW1vID0gQm9vbGVhbih3aW5kb3cgJiYgZG9jdW1lbnQgJiYgZG9jdW1lbnQuYWxsICYmICF3aW5kb3cuYXRvYik7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW87XG4gIH07XG59KCk7XG5cbnZhciBnZXRUYXJnZXQgPSBmdW5jdGlvbiBnZXRUYXJnZXQoKSB7XG4gIHZhciBtZW1vID0ge307XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSh0YXJnZXQpIHtcbiAgICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbiAgfTtcbn0oKTtcblxuZnVuY3Rpb24gbGlzdFRvU3R5bGVzKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlcyA9IFtdO1xuICB2YXIgbmV3U3R5bGVzID0ge307XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjc3MgPSBpdGVtWzFdO1xuICAgIHZhciBtZWRpYSA9IGl0ZW1bMl07XG4gICAgdmFyIHNvdXJjZU1hcCA9IGl0ZW1bM107XG4gICAgdmFyIHBhcnQgPSB7XG4gICAgICBjc3M6IGNzcyxcbiAgICAgIG1lZGlhOiBtZWRpYSxcbiAgICAgIHNvdXJjZU1hcDogc291cmNlTWFwXG4gICAgfTtcblxuICAgIGlmICghbmV3U3R5bGVzW2lkXSkge1xuICAgICAgc3R5bGVzLnB1c2gobmV3U3R5bGVzW2lkXSA9IHtcbiAgICAgICAgaWQ6IGlkLFxuICAgICAgICBwYXJ0czogW3BhcnRdXG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgbmV3U3R5bGVzW2lkXS5wYXJ0cy5wdXNoKHBhcnQpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBzdHlsZXM7XG59XG5cbmZ1bmN0aW9uIGFkZFN0eWxlc1RvRG9tKHN0eWxlcywgb3B0aW9ucykge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gc3R5bGVzW2ldO1xuICAgIHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xuICAgIHZhciBqID0gMDtcblxuICAgIGlmIChkb21TdHlsZSkge1xuICAgICAgZG9tU3R5bGUucmVmcysrO1xuXG4gICAgICBmb3IgKDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgIGRvbVN0eWxlLnBhcnRzW2pdKGl0ZW0ucGFydHNbal0pO1xuICAgICAgfVxuXG4gICAgICBmb3IgKDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgZG9tU3R5bGUucGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdLCBvcHRpb25zKSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBwYXJ0cyA9IFtdO1xuXG4gICAgICBmb3IgKDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgcGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdLCBvcHRpb25zKSk7XG4gICAgICB9XG5cbiAgICAgIHN0eWxlc0luRG9tW2l0ZW0uaWRdID0ge1xuICAgICAgICBpZDogaXRlbS5pZCxcbiAgICAgICAgcmVmczogMSxcbiAgICAgICAgcGFydHM6IHBhcnRzXG4gICAgICB9O1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuXG4gIGlmICh0eXBlb2Ygb3B0aW9ucy5hdHRyaWJ1dGVzLm5vbmNlID09PSAndW5kZWZpbmVkJykge1xuICAgIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gJ3VuZGVmaW5lZCcgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgICBpZiAobm9uY2UpIHtcbiAgICAgIG9wdGlvbnMuYXR0cmlidXRlcy5ub25jZSA9IG5vbmNlO1xuICAgIH1cbiAgfVxuXG4gIE9iamVjdC5rZXlzKG9wdGlvbnMuYXR0cmlidXRlcykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKGtleSwgb3B0aW9ucy5hdHRyaWJ1dGVzW2tleV0pO1xuICB9KTtcblxuICBpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgb3B0aW9ucy5pbnNlcnQoc3R5bGUpO1xuICB9IGVsc2Uge1xuICAgIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQob3B0aW9ucy5pbnNlcnQgfHwgJ2hlYWQnKTtcblxuICAgIGlmICghdGFyZ2V0KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICAgIH1cblxuICAgIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG4gIH1cblxuICByZXR1cm4gc3R5bGU7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbnZhciByZXBsYWNlVGV4dCA9IGZ1bmN0aW9uIHJlcGxhY2VUZXh0KCkge1xuICB2YXIgdGV4dFN0b3JlID0gW107XG4gIHJldHVybiBmdW5jdGlvbiByZXBsYWNlKGluZGV4LCByZXBsYWNlbWVudCkge1xuICAgIHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcbiAgICByZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcbiAgfTtcbn0oKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyhzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG4gIHZhciBjc3MgPSByZW1vdmUgPyAnJyA6IG9iai5jc3M7IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG4gICAgdmFyIGNoaWxkTm9kZXMgPSBzdHlsZS5jaGlsZE5vZGVzO1xuXG4gICAgaWYgKGNoaWxkTm9kZXNbaW5kZXhdKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfVxuXG4gICAgaWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG4gICAgICBzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyhzdHlsZSwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzO1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZSgnbWVkaWEnLCBtZWRpYSk7XG4gIH1cblxuICBpZiAoc291cmNlTWFwICYmIGJ0b2EpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlLmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xudmFyIHNpbmdsZXRvbkNvdW50ZXIgPSAwO1xuXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlO1xuICB2YXIgdXBkYXRlO1xuICB2YXIgcmVtb3ZlO1xuXG4gIGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuICAgIHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuICAgIHN0eWxlID0gc2luZ2xldG9uIHx8IChzaW5nbGV0b24gPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuICAgIHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUgPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlLCBvcHRpb25zKTtcblxuICAgIHJlbW92ZSA9IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG4gICAgfTtcbiAgfVxuXG4gIHVwZGF0ZShvYmopO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICByZW1vdmUoKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIG9wdGlvbnMuYXR0cmlidXRlcyA9IHR5cGVvZiBvcHRpb25zLmF0dHJpYnV0ZXMgPT09ICdvYmplY3QnID8gb3B0aW9ucy5hdHRyaWJ1dGVzIDoge307IC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuICAvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cbiAgaWYgKCFvcHRpb25zLnNpbmdsZXRvbiAmJiB0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gIT09ICdib29sZWFuJykge1xuICAgIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuICB9XG5cbiAgdmFyIHN0eWxlcyA9IGxpc3RUb1N0eWxlcyhsaXN0LCBvcHRpb25zKTtcbiAgYWRkU3R5bGVzVG9Eb20oc3R5bGVzLCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgdmFyIG1heVJlbW92ZSA9IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpdGVtID0gc3R5bGVzW2ldO1xuICAgICAgdmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF07XG5cbiAgICAgIGlmIChkb21TdHlsZSkge1xuICAgICAgICBkb21TdHlsZS5yZWZzLS07XG4gICAgICAgIG1heVJlbW92ZS5wdXNoKGRvbVN0eWxlKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAobmV3TGlzdCkge1xuICAgICAgdmFyIG5ld1N0eWxlcyA9IGxpc3RUb1N0eWxlcyhuZXdMaXN0LCBvcHRpb25zKTtcbiAgICAgIGFkZFN0eWxlc1RvRG9tKG5ld1N0eWxlcywgb3B0aW9ucyk7XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1heVJlbW92ZS5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfZG9tU3R5bGUgPSBtYXlSZW1vdmVbX2ldO1xuXG4gICAgICBpZiAoX2RvbVN0eWxlLnJlZnMgPT09IDApIHtcbiAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBfZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICBfZG9tU3R5bGUucGFydHNbal0oKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGRlbGV0ZSBzdHlsZXNJbkRvbVtfZG9tU3R5bGUuaWRdO1xuICAgICAgfVxuICAgIH1cbiAgfTtcbn07IiwidmFyIGc7XG5cbi8vIFRoaXMgd29ya3MgaW4gbm9uLXN0cmljdCBtb2RlXG5nID0gKGZ1bmN0aW9uKCkge1xuXHRyZXR1cm4gdGhpcztcbn0pKCk7XG5cbnRyeSB7XG5cdC8vIFRoaXMgd29ya3MgaWYgZXZhbCBpcyBhbGxvd2VkIChzZWUgQ1NQKVxuXHRnID0gZyB8fCBuZXcgRnVuY3Rpb24oXCJyZXR1cm4gdGhpc1wiKSgpO1xufSBjYXRjaCAoZSkge1xuXHQvLyBUaGlzIHdvcmtzIGlmIHRoZSB3aW5kb3cgcmVmZXJlbmNlIGlzIGF2YWlsYWJsZVxuXHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gXCJvYmplY3RcIikgZyA9IHdpbmRvdztcbn1cblxuLy8gZyBjYW4gc3RpbGwgYmUgdW5kZWZpbmVkLCBidXQgbm90aGluZyB0byBkbyBhYm91dCBpdC4uLlxuLy8gV2UgcmV0dXJuIHVuZGVmaW5lZCwgaW5zdGVhZCBvZiBub3RoaW5nIGhlcmUsIHNvIGl0J3Ncbi8vIGVhc2llciB0byBoYW5kbGUgdGhpcyBjYXNlLiBpZighZ2xvYmFsKSB7IC4uLn1cblxubW9kdWxlLmV4cG9ydHMgPSBnO1xuIiwiLy8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuLy8gIGRhdGFzb3VyY2UuanMgLSBHYnRjXHJcbi8vXHJcbi8vICBDb3B5cmlnaHQg77+9IDIwMTcsIEdyaWQgUHJvdGVjdGlvbiBBbGxpYW5jZS4gIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbi8vXHJcbi8vICBMaWNlbnNlZCB0byB0aGUgR3JpZCBQcm90ZWN0aW9uIEFsbGlhbmNlIChHUEEpIHVuZGVyIG9uZSBvciBtb3JlIGNvbnRyaWJ1dG9yIGxpY2Vuc2UgYWdyZWVtZW50cy4gU2VlXHJcbi8vICB0aGUgTk9USUNFIGZpbGUgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIHdvcmsgZm9yIGFkZGl0aW9uYWwgaW5mb3JtYXRpb24gcmVnYXJkaW5nIGNvcHlyaWdodCBvd25lcnNoaXAuXHJcbi8vICBUaGUgR1BBIGxpY2Vuc2VzIHRoaXMgZmlsZSB0byB5b3UgdW5kZXIgdGhlIE1JVCBMaWNlbnNlIChNSVQpLCB0aGUgXCJMaWNlbnNlXCI7IHlvdSBtYXkgbm90IHVzZSB0aGlzXHJcbi8vICBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdDpcclxuLy9cclxuLy8gICAgICBodHRwOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXHJcbi8vXHJcbi8vICBVbmxlc3MgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHRoZSBzdWJqZWN0IHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuXHJcbi8vICBcIkFTLUlTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLiBSZWZlciB0byB0aGVcclxuLy8gIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zLlxyXG4vL1xyXG4vLyAgQ29kZSBNb2RpZmljYXRpb24gSGlzdG9yeTpcclxuLy8gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gIDEwLzMwLzIwMTcgLSBCaWxseSBFcm5lc3RcclxuLy8gICAgICAgR2VuZXJhdGVkIG9yaWdpbmFsIHZlcnNpb24gb2Ygc291cmNlIGNvZGUuXHJcbi8vXHJcbi8vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcblxyXG5kZWNsYXJlIHZhciBfOiBhbnk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBPcGVuSGlzdG9yaWFuRGF0YVNvdXJjZXtcclxuICAgIHR5cGU6IGFueTtcclxuICAgIHVybDogc3RyaW5nO1xyXG4gICAgbmFtZTogc3RyaW5nO1xyXG4gICAgcTogYW55O1xyXG4gICAgZGF0YUZsYWdzOiBhbnk7XHJcbiAgICBvcHRpb25zOiBhbnk7XHJcblxyXG4gICAgLyoqIEBuZ0luamVjdCAqL1xyXG4gICAgY29uc3RydWN0b3IoaW5zdGFuY2VTZXR0aW5ncywgJHEsIHByaXZhdGUgYmFja2VuZFNydiwgcHJpdmF0ZSB0ZW1wbGF0ZVNydiwgcHJpdmF0ZSB1aVNlZ21lbnRTcnYpIHtcclxuICAgICAgICB0aGlzLnR5cGUgPSBpbnN0YW5jZVNldHRpbmdzLnR5cGU7XHJcbiAgICAgICAgdGhpcy51cmwgPSBpbnN0YW5jZVNldHRpbmdzLnVybDtcclxuICAgICAgICB0aGlzLm5hbWUgPSBpbnN0YW5jZVNldHRpbmdzLm5hbWU7XHJcbiAgICAgICAgdGhpcy5xID0gJHE7XHJcbiAgICAgICAgdGhpcy5iYWNrZW5kU3J2ID0gYmFja2VuZFNydjtcclxuICAgICAgICB0aGlzLnRlbXBsYXRlU3J2ID0gdGVtcGxhdGVTcnY7XHJcbiAgICAgICAgdGhpcy51aVNlZ21lbnRTcnYgPSB1aVNlZ21lbnRTcnY7XHJcblxyXG4gICAgICAgIHRoaXMuZGF0YUZsYWdzID0gaW5zdGFuY2VTZXR0aW5ncy5qc29uRGF0YS5mbGFncztcclxuICAgICAgICB0aGlzLm9wdGlvbnMgPSB7XHJcbiAgICAgICAgICAgICBleGNsdWRlZERhdGFGbGFnczogKGluc3RhbmNlU2V0dGluZ3MuanNvbkRhdGEuRXhjbHVkZWQgPT0gdW5kZWZpbmVkID8gMCA6IGluc3RhbmNlU2V0dGluZ3MuanNvbkRhdGEuRXhjbHVkZWQpLFxyXG4gICAgICAgICAgICAgZXhjbHVkZU5vcm1hbERhdGE6IChpbnN0YW5jZVNldHRpbmdzLmpzb25EYXRhLk5vcm1hbCA9PSB1bmRlZmluZWQgPyBmYWxzZSA6IGluc3RhbmNlU2V0dGluZ3MuanNvbkRhdGEuTm9ybWFsKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBxdWVyeShvcHRpb25zKSB7XHJcblxyXG4gICAgICAgIHZhciBxdWVyeSA9IHRoaXMuYnVpbGRRdWVyeVBhcmFtZXRlcnMob3B0aW9ucyk7XHJcbiAgICAgICAgICAgIHF1ZXJ5LnRhcmdldHMgPSBxdWVyeS50YXJnZXRzLmZpbHRlcihmdW5jdGlvbiAodCkge1xyXG4gICAgICAgICAgICByZXR1cm4gIXQuaGlkZTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcXVlcnkub3B0aW9ucyA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkodGhpcy5vcHRpb25zKSk7XHJcblxyXG4gICAgICAgIGlmIChxdWVyeS50YXJnZXRzLmxlbmd0aCA8PSAwKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoeyBkYXRhOiBbXSB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLmJhY2tlbmRTcnYuZGF0YXNvdXJjZVJlcXVlc3Qoe1xyXG4gICAgICAgICAgICB1cmw6IHRoaXMudXJsICsgJy9xdWVyeScsXHJcbiAgICAgICAgICAgIGRhdGE6IHF1ZXJ5LFxyXG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgICAgaGVhZGVyczogeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICB0ZXN0RGF0YXNvdXJjZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5iYWNrZW5kU3J2LmRhdGFzb3VyY2VSZXF1ZXN0KHtcclxuICAgICAgICAgICAgdXJsOiB0aGlzLnVybCArICcvJyxcclxuICAgICAgICAgICAgbWV0aG9kOiAnR0VUJ1xyXG4gICAgICAgIH0pLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDIwMCkge1xyXG4gICAgICAgICAgICByZXR1cm4geyBzdGF0dXM6IFwic3VjY2Vzc1wiLCBtZXNzYWdlOiBcIkRhdGEgc291cmNlIGlzIHdvcmtpbmdcIiwgdGl0bGU6IFwiU3VjY2Vzc1wiIH07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBhbm5vdGF0aW9uUXVlcnkob3B0aW9ucykge1xyXG4gICAgICAgIHZhciBxdWVyeSA9IHRoaXMudGVtcGxhdGVTcnYucmVwbGFjZShvcHRpb25zLmFubm90YXRpb24ucXVlcnksIHt9LCAnZ2xvYicpO1xyXG4gICAgICAgIHZhciBhbm5vdGF0aW9uUXVlcnkgPSB7XHJcbiAgICAgICAgICAgIHJhbmdlOiBvcHRpb25zLnJhbmdlLFxyXG4gICAgICAgICAgICBhbm5vdGF0aW9uOiB7XHJcbiAgICAgICAgICAgIG5hbWU6IG9wdGlvbnMuYW5ub3RhdGlvbi5uYW1lLFxyXG4gICAgICAgICAgICBkYXRhc291cmNlOiBvcHRpb25zLmFubm90YXRpb24uZGF0YXNvdXJjZSxcclxuICAgICAgICAgICAgZW5hYmxlOiBvcHRpb25zLmFubm90YXRpb24uZW5hYmxlLFxyXG4gICAgICAgICAgICBpY29uQ29sb3I6IG9wdGlvbnMuYW5ub3RhdGlvbi5pY29uQ29sb3IsXHJcbiAgICAgICAgICAgIHF1ZXJ5OiBxdWVyeVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICByYW5nZVJhdzogb3B0aW9ucy5yYW5nZVJhd1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLmJhY2tlbmRTcnYuZGF0YXNvdXJjZVJlcXVlc3Qoe1xyXG4gICAgICAgICAgICB1cmw6IHRoaXMudXJsICsgJy9hbm5vdGF0aW9ucycsXHJcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgICAgICBkYXRhOiBhbm5vdGF0aW9uUXVlcnlcclxuICAgICAgICB9KS50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdC5kYXRhO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIG1ldHJpY0ZpbmRRdWVyeShvcHRpb25zOiBzdHJpbmcsIG9wdGlvbmFsT3B0aW9uczogYW55KSB7XHJcbiAgICAgICAgdmFyIGludGVycG9sYXRlZCA9IHtcclxuICAgICAgICAgICAgdGFyZ2V0OiB0aGlzLnRlbXBsYXRlU3J2LnJlcGxhY2Uob3B0aW9ucywgbnVsbCwgJ3JlZ2V4JylcclxuICAgICAgICB9O1xyXG5cclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYmFja2VuZFNydi5kYXRhc291cmNlUmVxdWVzdCh7XHJcbiAgICAgICAgICAgIHVybDogdGhpcy51cmwgKyAnL3NlYXJjaCcsXHJcbiAgICAgICAgICAgIGRhdGE6IGludGVycG9sYXRlZCxcclxuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9XHJcbiAgICAgICAgfSkudGhlbih0aGlzLm1hcFRvVGV4dFZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICB3aGVyZUZpbmRRdWVyeShvcHRpb25zKSB7XHJcblxyXG4gICAgICAgIHZhciBpbnRlcnBvbGF0ZWQgPSB7XHJcbiAgICAgICAgICAgIHRhcmdldDogdGhpcy50ZW1wbGF0ZVNydi5yZXBsYWNlKG9wdGlvbnMsIG51bGwsICdyZWdleCcpXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYmFja2VuZFNydi5kYXRhc291cmNlUmVxdWVzdCh7XHJcbiAgICAgICAgICAgIHVybDogdGhpcy51cmwgKyAnL1NlYXJjaEZpZWxkcycsXHJcbiAgICAgICAgICAgIGRhdGE6IGludGVycG9sYXRlZCxcclxuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9XHJcbiAgICAgICAgfSkudGhlbih0aGlzLm1hcFRvVGV4dFZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBtYXBUb1RleHRWYWx1ZShyZXN1bHQpIHtcclxuICAgICAgICByZXR1cm4gXy5tYXAocmVzdWx0LmRhdGEsIGZ1bmN0aW9uIChkLCBpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7IHRleHQ6IGQsIHZhbHVlOiBkIH07XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgYnVpbGRRdWVyeVBhcmFtZXRlcnMob3B0aW9ucykge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcblxyXG4gICAgICAgIC8vcmVtb3ZlIHBsYWNlaG9sZGVyIHRhcmdldHNcclxuICAgICAgICBvcHRpb25zLnRhcmdldHMgPSBfLmZpbHRlcihvcHRpb25zLnRhcmdldHMsIGZ1bmN0aW9uICh0YXJnZXQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRhcmdldC50YXJnZXQgIT09ICdzZWxlY3QgbWV0cmljJztcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdmFyIHRhcmdldHMgPSBfLm1hcChvcHRpb25zLnRhcmdldHMsIGZ1bmN0aW9uICh0YXJnZXQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgdGFyZ2V0OiBfdGhpcy5maXhUZW1wbGF0ZXModGFyZ2V0KSxcclxuICAgICAgICAgICAgcmVmSWQ6IHRhcmdldC5yZWZJZCxcclxuICAgICAgICAgICAgaGlkZTogdGFyZ2V0LmhpZGUsIFxyXG4gICAgICAgICAgICBleGNsdWRlZEZsYWdzOiAoKHRhcmdldHx8e30pLnF1ZXJ5T3B0aW9uc3x8e30pLkV4Y2x1ZGVkIHx8IDAsXHJcbiAgICAgICAgICAgIGV4Y2x1ZGVOb3JtYWxGbGFnczogKCh0YXJnZXR8fHt9KS5xdWVyeU9wdGlvbnN8fHt9KS5Ob3JtYWwgfHwgZmFsc2UsXHJcbiAgICAgICAgICAgIHF1ZXJ5VHlwZTogdGFyZ2V0LnF1ZXJ5VHlwZSxcclxuICAgICAgICAgICAgcXVlcnlPcHRpb25zOiB0YXJnZXQucXVlcnlPcHRpb25zXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIG9wdGlvbnMudGFyZ2V0cyA9IHRhcmdldHM7XHJcblxyXG4gICAgICAgIHJldHVybiBvcHRpb25zO1xyXG4gICAgfVxyXG5cclxuICAgIGZpbHRlckZpbmRRdWVyeSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5iYWNrZW5kU3J2LmRhdGFzb3VyY2VSZXF1ZXN0KHtcclxuICAgICAgICAgICAgdXJsOiB0aGlzLnVybCArICcvU2VhcmNoRmlsdGVycycsXHJcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfVxyXG4gICAgICAgIH0pLnRoZW4odGhpcy5tYXBUb1RleHRWYWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIG9yZGVyQnlGaW5kUXVlcnkob3B0aW9ucykge1xyXG4gICAgICAgIHZhciBpbnRlcnBvbGF0ZWQgPSB7XHJcbiAgICAgICAgICAgIHRhcmdldDogdGhpcy50ZW1wbGF0ZVNydi5yZXBsYWNlKG9wdGlvbnMsIG51bGwsICdyZWdleCcpXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYmFja2VuZFNydi5kYXRhc291cmNlUmVxdWVzdCh7XHJcbiAgICAgICAgICAgIHVybDogdGhpcy51cmwgKyAnL1NlYXJjaE9yZGVyQnlzJyxcclxuICAgICAgICAgICAgZGF0YTogaW50ZXJwb2xhdGVkLFxyXG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgICAgaGVhZGVyczogeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH1cclxuICAgICAgICB9KS50aGVuKHRoaXMubWFwVG9UZXh0VmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldE1ldGFEYXRhKG9wdGlvbnMpIHtcclxuICAgICAgICB2YXIgaW50ZXJwb2xhdGVkID0ge1xyXG4gICAgICAgICAgICB0YXJnZXQ6IHRoaXMudGVtcGxhdGVTcnYucmVwbGFjZShvcHRpb25zLCBudWxsLCAncmVnZXgnKVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLmJhY2tlbmRTcnYuZGF0YXNvdXJjZVJlcXVlc3Qoe1xyXG4gICAgICAgICAgICB1cmw6IHRoaXMudXJsICsgJy9HZXRNZXRhZGF0YScsXHJcbiAgICAgICAgICAgIGRhdGE6IGludGVycG9sYXRlZCxcclxuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGdldEFsYXJtU3RhdGVzKG9wdGlvbnMpIHtcclxuICAgICAgICB2YXIgaW50ZXJwb2xhdGVkID0ge1xyXG4gICAgICAgICAgICB0YXJnZXQ6IHRoaXMudGVtcGxhdGVTcnYucmVwbGFjZShvcHRpb25zLCBudWxsLCAncmVnZXgnKVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLmJhY2tlbmRTcnYuZGF0YXNvdXJjZVJlcXVlc3Qoe1xyXG4gICAgICAgICAgICB1cmw6IHRoaXMudXJsICsgJy9HZXRBbGFybVN0YXRlJyxcclxuICAgICAgICAgICAgZGF0YTogaW50ZXJwb2xhdGVkLFxyXG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgICAgaGVhZGVyczogeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgZ2V0RGF0YUF2YWlsYWJpbGl0eShvcHRpb25zKSB7XHJcbiAgICAgICAgdmFyIGludGVycG9sYXRlZCA9IHtcclxuICAgICAgICAgICAgdGFyZ2V0OiB0aGlzLnRlbXBsYXRlU3J2LnJlcGxhY2Uob3B0aW9ucywgbnVsbCwgJ3JlZ2V4JylcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5iYWNrZW5kU3J2LmRhdGFzb3VyY2VSZXF1ZXN0KHtcclxuICAgICAgICAgICAgdXJsOiB0aGlzLnVybCArICcvR2V0RGF0YUF2YWlsYWJpbGl0eScsXHJcbiAgICAgICAgICAgIGRhdGE6IGludGVycG9sYXRlZCxcclxuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGZpeFRlbXBsYXRlcyh0YXJnZXQpIHtcclxuICAgICAgICBpZiAodGFyZ2V0LnRhcmdldCA9PSB1bmRlZmluZWQpIHJldHVybiAnJztcclxuXHJcbiAgICAgICAgdmFyIGN0cmwgPSB0aGlzO1xyXG5cclxuICAgICAgICB2YXIgc2VwID0gJyAnO1xyXG4gICAgICAgIGlmKHRhcmdldC5xdWVyeVR5cGUgPT0gJ0VsZW1lbnQgTGlzdCcpXHJcbiAgICAgICAgICAgIHNlcCA9ICc7J1xyXG5cclxuICAgICAgICByZXR1cm4gdGFyZ2V0LnRhcmdldC5zcGxpdChzZXApLm1hcChmdW5jdGlvbiAoYSkge1xyXG4gICAgICAgICAgICBpZiAoY3RybC50ZW1wbGF0ZVNydi52YXJpYWJsZUV4aXN0cyhhKSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGN0cmwudGVtcGxhdGVTcnYucmVwbGFjZVdpdGhUZXh0KGEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgIHJldHVybiBhXHJcbiAgICAgICAgfSkuam9pbihzZXApO1xyXG4gICAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=