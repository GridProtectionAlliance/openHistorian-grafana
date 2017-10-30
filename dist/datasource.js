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
        function OpenHistorianDataSource(instanceSettings, $q, backendSrv, templateSrv) {
          _classCallCheck(this, OpenHistorianDataSource);

          this.type = instanceSettings.type;
          this.url = instanceSettings.url;
          this.name = instanceSettings.name;
          this.q = $q;
          this.backendSrv = backendSrv;
          this.templateSrv = templateSrv;

          this.options = [{ ExcludeBadData: instanceSettings.jsonData.excludeBadData == undefined ? false : instanceSettings.jsonData.excludeBadData }, { ExcludeBadtime: instanceSettings.jsonData.excludeBadTime == undefined ? false : instanceSettings.jsonData.excludeBadTime }];
        }

        _createClass(OpenHistorianDataSource, [{
          key: 'query',
          value: function query(options) {
            var query = this.buildQueryParameters(options);
            query.targets = query.targets.filter(function (t) {
              return !t.hide;
            });

            query.options = this.options;

            if (query.targets.length <= 0) {
              return this.q.when({ data: [] });
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
                queryType: target.queryType
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
        }]);

        return OpenHistorianDataSource;
      }());

      _export('OpenHistorianDataSource', OpenHistorianDataSource);
    }
  };
});
//# sourceMappingURL=datasource.js.map
