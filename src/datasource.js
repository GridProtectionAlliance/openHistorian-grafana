import _ from "lodash";

export class OpenHistorianDataSource {
  constructor(instanceSettings, $q, backendSrv, templateSrv) {
    this.type = instanceSettings.type;
    this.url = instanceSettings.url;
    this.name = instanceSettings.name;
    this.q = $q;
    this.backendSrv = backendSrv;
    this.templateSrv = templateSrv;
  }

  query(options) {
    var query = this.buildQueryParameters(options);
    query.targets = query.targets.filter(function (t) {
      return !t.hide;
    });

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

  testDatasource() {
    return this.backendSrv.datasourceRequest({
      url: this.url + '/',
      method: 'GET'
    }).then(function (response) {
      if (response.status === 200) {
        return { status: "success", message: "Data source is working", title: "Success" };
      }
    });
  }

  annotationQuery(options) {
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

  metricFindQuery(options) {
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

  whereFindQuery(options) {

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

  mapToTextValue(result) {
    return _.map(result.data, function (d, i) {
      return { text: d, value: i };
    });
  }

  buildQueryParameters(options) {
    var _this = this;

    //remove placeholder targets
    options.targets = _.filter(options.targets, function (target) {
      return target.target !== 'select metric';
    });

    var targets = _.map(options.targets, function (target) {
      return {
        target: _this.templateSrv.replace(target.target),
        refId: target.refId,
        hide: target.hide
      };
    });

    options.targets = targets;

    return options;
  }

  filterFindQuery() {

      return this.backendSrv.datasourceRequest({
          url: this.url + '/SearchFilters',
          method: 'POST',
          headers: { 'Content-Type': 'application/json' }
      }).then(this.mapToTextValue);
  }

  orderByFindQuery(options) {
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

}
