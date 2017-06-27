'use strict';

import AutorestClient = require('../autorest/powerBIClient');
import AutorestClientV2 = require('../autorest/V2/powerBIClient');
import * as operations from './operations';
import {ServiceClientCredentials, ServiceClientOptions} from 'ms-rest';

export class PowerBIClient extends AutorestClient {
    public imports:operations.Imports;
    
    constructor(credentials: ServiceClientCredentials, baseUri: string='https://api.powerbi.com', options?: ServiceClientOptions) {
        super(credentials, baseUri, options);
        this.imports = new operations.Imports(this);
    }
}

export class PowerBIClientV2 extends AutorestClientV2 {
    constructor(credentials: ServiceClientCredentials, baseUri: string='https://api.powerbi.com', options?: ServiceClientOptions) {
        super(credentials, baseUri, options);
    }
}