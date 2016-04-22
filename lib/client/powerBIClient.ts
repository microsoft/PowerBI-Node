'use strict';

import AutorestClient = require('../autorest/powerBIClient');
import * as operations from './operations';
import {ServiceClientCredentials, ServiceClientOptions} from 'ms-rest';

export class PowerBIClient extends AutorestClient {
    public imports:operations.Imports;
    
    constructor(credentials: ServiceClientCredentials, baseUri: string, options?: ServiceClientOptions) {
        super(credentials, baseUri, options);
        this.imports = new operations.Imports(this);
    }
}