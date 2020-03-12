//******************************************************************************************************
//  datasource.js - Gbtc
//
//  Copyright © 2017, Grid Protection Alliance.  All Rights Reserved.
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

declare var _: any;

export default class OpenHistorianDataSource{
    type: any;
    url: string;
    name: string;
    q: any;
    dataFlags: any;
    options: any;

    /** @ngInject */
    constructor(instanceSettings, $q, private backendSrv, private templateSrv, private uiSegmentSrv) {
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
            excludeNormalData: (instanceSettings.jsonData.Normal == undefined ? false : instanceSettings.jsonData.Normal),
            updateAlarms: (instanceSettings.jsonData.Alarms == undefined ? false : instanceSettings.jsonData.Alarms),
        }

    }

    query(options) {

        
        var query = this.buildQueryParameters(options);
            query.targets = query.targets.filter(function (t) {
            return !t.hide;
        });

        query.options = JSON.parse(JSON.stringify(this.options));

        if (query.targets.length <= 0) {
            return Promise.resolve({ data: [] });
        }

        let ctrl = this;

        if (this.options.updateAlarms) {
            // Get Alerts and Dashboard Information
            this.backendSrv.datasourceRequest({
                url: this.url + '/GetAlarms',
                data: query,
                method: 'POST',
                headers: { 'Content-Type': 'application/json' }
            }).then(function (data) {
                ctrl.GetDashboard(data.data, query, ctrl)
            }).catch(function (data) {
            });
        }
        //3 cases: If Alerts are empty and Alarms are not -> Create Alerts -> Save
        // If Alarms are empty and Alerts are not -> Remove Alerts -> Save
        // If Alarms and Alerts exist -> ensure each Alarm has corresponding Condition and remove all others -> Save

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

    metricFindQuery(options: string, optionalOptions: any) {
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
            return { text: d, value: d };
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
            target: _this.fixTemplates(target),
            refId: target.refId,
            hide: target.hide, 
            excludedFlags: ((target||{}).queryOptions||{}).Excluded || 0,
            excludeNormalFlags: ((target||{}).queryOptions||{}).Normal || false,
            queryType: target.queryType,
            queryOptions: target.queryOptions
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

    getMetaData(options) {
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

    getAlarmStates(options) {
        var interpolated = {
            target: this.templateSrv.replace(options, null, 'regex')
        };

        return this.backendSrv.datasourceRequest({
            url: this.url + '/GetAlarmState',
            data: interpolated,
            method: 'POST',
            headers: { 'Content-Type': 'application/json' }
        });

    }

    getPossibleAlarmStates(options) {
        var interpolated = {
            target: this.templateSrv.replace(options, null, 'regex')
        };

        return this.backendSrv.datasourceRequest({
            url: this.url + '/GetDeviceAlarms',
            data: interpolated,
            method: 'POST',
            headers: { 'Content-Type': 'application/json' }
        });

    }

    getDataAvailability(options) {
        var interpolated = {
            target: this.templateSrv.replace(options, null, 'regex')
        };

        return this.backendSrv.datasourceRequest({
            url: this.url + '/GetDataAvailability',
            data: interpolated,
            method: 'POST',
            headers: { 'Content-Type': 'application/json' }
        });

    }

    fixTemplates(target) {
        if (target.target == undefined) return '';

        var ctrl = this;

        var sep = ' ';
        if(target.queryType == 'Element List')
            sep = ';'

        return target.target.split(sep).map(function (a) {
            if (ctrl.templateSrv.variableExists(a)) {
                return ctrl.templateSrv.replaceWithText(a);
            }
            else
                return a
        }).join(sep);
    }

    queryLocation(target) {

        if ((target.target == null) || (target.target == undefined))
        {
            target.target = {};
        }

        if ((target.radius == null) || (target.radius == undefined) || (target.zoom == null) || (target.zoom == undefined)) {
            return this.backendSrv.datasourceRequest({
                method: "POST",
                url: this.url + '/GetLocationData',
                data: JSON.stringify(target.target),
                headers: { 'Content-Type': 'application/json' }
            });

        }

        return this.backendSrv.datasourceRequest({
            method: "POST",
            url: this.url + '/GetLocationData?radius=' + target.radius + '&zoom=' + target.zoom,
            data: JSON.stringify(target.target),
            headers: { 'Content-Type': 'application/json' }
        });


    }

    // These Fuctions update the dashboard if an OH Alarm is neccesary.
    GetDashboard(alarms, query, ctrl) {

        ctrl.backendSrv.datasourceRequest({
            url: ctrl.url + '/QueryAlarms',
            method: 'POST',
            data: query,
            headers: { 'Content-Type': 'application/json' }
        }).then(function (data) {
            //console.log(data);
        }).catch(function (data) {
            //console.log(data);
        });



        ctrl.backendSrv.datasourceRequest({
            url: 'api/search?dashboardIds=' + query.dashboardId,
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }
        }).then(function (data) {
            ctrl.backendSrv.datasourceRequest({
                url: 'api/dashboards/uid/' + data.data[0]["uid"],
                method: 'GET',
                headers: { 'Content-Type': 'application/json' }
            }).then(function (data) {
                ctrl.CheckPanel(alarms, query, data.data, ctrl)
            });
        });
    }

    CheckPanel(alarms, query, dashboard, ctrl)
    {
        //Get Alaerts from Panel
        let alerts = dashboard.dashboard.panels;
        if (alerts === undefined)
            return;

        alerts = alerts.find(item => item.id == query.panelId);
        if (alerts == undefined || alerts == null)
            return;

        alerts = alerts.thresholds;

        // Check Case No alerts and No Alarms in the OH
        if ((alerts == undefined || alerts == null || alerts.length == 0) && (alarms.length == 0)) 
            return

        // Check case no Alerts but we have Alarms
        if ((alerts == undefined || alerts == null || alerts.length == 0) && (alarms.length > 0)) {
            ctrl.UpdateAlarms(alarms, dashboard.dashboard.uid, query, ctrl)
            return;
        }

        // make sure this is not a GPA PhasorMap Panel
        let threshholds = []

        try {
            // Last Check if every alarm has corresponding threshhold
            threshholds = alerts.map(item => item.value);
        }
        catch {
            return;
        }

        let needsUpdate = false;

        alarms.forEach(item => {
            if (!threshholds.includes(item.SetPoint))
                needsUpdate = true;
            });

        if (needsUpdate) {
            ctrl.UpdateAlarms(alarms, dashboard.dashboard.uid, query, ctrl)
        }

    }

    UpdateAlarms(alarms, dashboardUid, query, ctrl) {

        
        ctrl.backendSrv.datasourceRequest({
            url: 'api/dashboards/uid/' + dashboardUid,
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }
        }).then(function (data) {

            let dashboard = data.data.dashboard;
            let panelIndex = dashboard.panels.findIndex(item => item.id == query.panelId);
            dashboard.panels[panelIndex].thresholds = alarms.map(item => {
                let op = "gt";
                if (item.Operation == 21 || item.Operation == 22)
                    op = "lt"

                let fill = true;
                if (item.Operation == 1 || item.Operation == 2)
                    fill = false;

                return {
                    colorMode: "critical",
                    fill: fill,
                    line: true,
                    op: op,
                    value: item.SetPoint
                }
            });

            ctrl.backendSrv.datasourceRequest({
                url: 'api/dashboards/db',
                method: 'POST',
                data: { overwrite: true, dashboard: dashboard},
                headers: { 'Content-Type': 'application/json' }
            }).catch(function (data) { console.log(data); })
        });

    }

}
