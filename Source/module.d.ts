//******************************************************************************************************
//  module.d.ts - Gbtc
//
//  Copyright © 2019, Grid Protection Alliance.  All Rights Reserved.
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
//  08/19/2019 - Billy Ernest
//       Generated original version of source code.
//
//******************************************************************************************************

declare interface iTarget {
    queryOptions: any;
    queryType: string;
    refId: string;
    segments: Array<any>;
    target: string;
    wheres: Array<iSegment>;
    functionSegments: Array<any>;
    topNSegment: number;
    orderBys: Array<any>;
    filterSegment: any;
    functions: Array<iSegment>;
    whereSegment: iSegment;
    targetText: string;
    orderBySegment: iSegment;
    functionSegment: iSegment;
}
declare interface iSegment {
    cssClass: string;
    html: {};
    text: string;
    type: string;
    value: string;
    fake: boolean;
}

declare interface iFunctionSegment extends iSegment {
    Function: any;
    Parameters: any;
}
