//******************************************************************************************************
//  config_ctrl.js - Gbtc
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
System.register(["lodash", './../js/openHistorianConstants'], function(exports_1) {
    var lodash_1, openHistorianConstants_1;
    var OpenHistorianConfigCtrl;
    return {
        setters:[
            function (lodash_1_1) {
                lodash_1 = lodash_1_1;
            },
            function (openHistorianConstants_1_1) {
                openHistorianConstants_1 = openHistorianConstants_1_1;
            }],
        execute: function() {
            OpenHistorianConfigCtrl = (function () {
                function OpenHistorianConfigCtrl($scope) {
                    var ctrl = this;
                    ctrl.current.jsonData = this.current.jsonData || {};
                    ctrl.current.jsonData.flags = (ctrl.current.jsonData.flags == undefined ? openHistorianConstants_1.DefaultFlags : lodash_1.default.merge(openHistorianConstants_1.DefaultFlags, ctrl.current.jsonData.flags));
                }
                OpenHistorianConfigCtrl.templateUrl = 'partial/config.html';
                return OpenHistorianConfigCtrl;
            })();
            exports_1("OpenHistorianConfigCtrl", OpenHistorianConfigCtrl);
        }
    }
});
//# sourceMappingURL=openHistorianConfig_ctrl.js.map