import { PowerBIClient } from '../powerBIClient';
import { ServiceClientOptions, RequestOptions, ServiceCallback, WebResource } from 'ms-rest';
import fs = require('fs');
import util = require('util');
import * as operations from '../../autorest/operations';
import * as models from '../models';
let AuorestImports = require('../../autorest/operations/imports');
let msRest = require('ms-rest');

export class Imports implements operations.Imports {
    private client: any;
    private base: operations.Imports;

    constructor(client: PowerBIClient) {
        this.base = new AuorestImports(this);
        this.client = client;
    }

    public getImports(collectionName: string, workspaceId: string, callback: ServiceCallback<models.ODataResponseListImport>): void;
    public getImports(collectionName: string, workspaceId: string, options: { customHeaders?: { [headerName: string]: string; } }, callback: ServiceCallback<models.ODataResponseListImport>): void;

    public getImports(collectionName: string, workspaceId: string, options: any, callback?: ServiceCallback<models.ODataResponseListImport>): void {
        this.base.getImports(collectionName, workspaceId, options, callback);
    }

    public postImport(collectionName: string, workspaceId: string, importInfo: models.ImportInfo, callback: ServiceCallback<models.ImportModel>): void;
    public postImport(collectionName: string, workspaceId: string, importInfo: models.ImportInfo, options: models.ImportFileOptions, callback: ServiceCallback<models.ImportModel>): void;

    public postImport(collectionName: string, workspaceId: string, importInfo: models.ImportInfo, options: any, callback?: ServiceCallback<models.ImportModel>): void {
        this.base.postImport.apply(this, arguments);
    }

    public getImportById(collectionName: string, workspaceId: string, importId: string, options: models.ImportFileOptions, callback: ServiceCallback<models.ImportModel>): void;
    public getImportById(collectionName: string, workspaceId: string, importId: string, callback: ServiceCallback<models.ImportModel>): void;

    public getImportById(collectionName: string, workspaceId: string, importId: string, options: any, callback?: ServiceCallback<models.ImportModel>): void {
        this.base.getImportById.apply(this, arguments);
    }

    public uploadFile(collectionName: string, workspaceId: string, filePath: string, callback: ServiceCallback<models.ImportModel>): void;
    public uploadFile(collectionName: string, workspaceId: string, filePath: string, options: models.ImportFileOptions, callback: ServiceCallback<models.ImportModel>): void;

    public uploadFile(collectionName: string, workspaceId: string, filePath: string, options: any, callback?: ServiceCallback<models.ImportModel>): void {
        if (!callback && typeof options === 'function') {
            callback = options;
            options = null;
        }
        if (!callback) {
            throw new Error('callback cannot be null.');
        }

        var datasetDisplayName = (options && options.datasetDisplayName !== undefined) ? options.datasetDisplayName : undefined;
        var nameConflict = (options && options.nameConflict !== undefined) ? options.nameConflict : undefined;
        // Validate
        try {
            if (collectionName === null || collectionName === undefined || typeof collectionName.valueOf() !== 'string') {
                throw new Error('collectionName cannot be null or undefined and it must be of type string.');
            }
            if (workspaceId === null || workspaceId === undefined || typeof workspaceId.valueOf() !== 'string') {
                throw new Error('workspaceId cannot be null or undefined and it must be of type string.');
            }
            if (datasetDisplayName !== null && datasetDisplayName !== undefined && typeof datasetDisplayName.valueOf() !== 'string') {
                throw new Error('datasetDisplayName must be of type string.');
            }
            if (nameConflict !== null && nameConflict !== undefined && typeof nameConflict.valueOf() !== 'string') {
                throw new Error('nameConflict must be of type string.');
            }
            if (filePath === null || filePath === undefined) {
                throw new Error('filePath cannot be null or undefined.');
            }
        } catch (error) {
            return callback(error, null, null, null);
        }

        // Construct URL
        var requestUrl = this.client['baseUri'] + '//beta/collections/{collectionName}/workspaces/{workspaceId}/imports';
        requestUrl = requestUrl.replace('{collectionName}', encodeURIComponent(collectionName));
        requestUrl = requestUrl.replace('{workspaceId}', encodeURIComponent(workspaceId));

        var queryParameters = [];
        if (datasetDisplayName !== null && datasetDisplayName !== undefined) {
            queryParameters.push('datasetDisplayName=' + encodeURIComponent(datasetDisplayName));
        }
        if (nameConflict !== null && nameConflict !== undefined) {
            queryParameters.push('nameConflict=' + encodeURIComponent(nameConflict));
        }
        if (queryParameters.length > 0) {
            requestUrl += '?' + queryParameters.join('&');
        }
        // trim all duplicate forward slashes in the url
        var regex = /([^:]\/)\/+/gi;
        requestUrl = requestUrl.replace(regex, '$1');

        var formData = {
            file: fs.createReadStream(filePath)
        };

        // Create HTTP transport objects
        var httpRequest = WebResource.post(requestUrl);
        httpRequest['url'] = requestUrl;
        httpRequest['method'] = 'POST';
        httpRequest['formData'] = formData;
        httpRequest['headers'] = {};

        // Set Headers
        if (options) {
            for (var headerName in options.customHeaders) {
                if (options.customHeaders.hasOwnProperty(headerName)) {
                    httpRequest.withHeader(headerName, options.customHeaders[headerName]);
                }
            }
        }

        // Send Request
        return this.client.pipeline(httpRequest, (err, response, responseBody) => {
            if (err) {
                return callback(err, null, null, null);
            }

            var statusCode = response.statusCode;
            if (statusCode !== 202) {
                var error: any = new Error(responseBody);
                error.statusCode = response.statusCode;
                error.request = msRest.stripRequest(httpRequest);
                error.response = msRest.stripResponse(response);
                if (responseBody === '') responseBody = null;
                var parsedErrorResponse;
                try {
                    parsedErrorResponse = JSON.parse(responseBody);
                    if (parsedErrorResponse) {
                        if (parsedErrorResponse.error) parsedErrorResponse = parsedErrorResponse.error;
                        if (parsedErrorResponse.code) error.code = parsedErrorResponse.code;
                        if (parsedErrorResponse.message) error.message = parsedErrorResponse.message;
                    }
                } catch (defaultError) {
                    error.message = util.format('Error "%s" occurred in deserializing the responseBody ' +
                        '- "%s" for the default response.', defaultError.message, responseBody);
                    return callback(error, null, null, null);
                }
                return callback(error, null, null, null);
            }
            // Create Result
            var result = null;
            if (responseBody === '') responseBody = null;
            // Deserialize Response
            if (statusCode === 202) {
                var parsedResponse = null;
                try {
                    parsedResponse = JSON.parse(responseBody);
                    result = JSON.parse(responseBody);
                    if (parsedResponse !== null && parsedResponse !== undefined) {
                        var resultMapper = new this.client.models['ImportModel']().mapper();
                        result = this.client.deserialize(resultMapper, parsedResponse, 'result');
                    }
                } catch (error) {
                    var deserializationError: any = new Error(util.format('Error "%s" occurred in deserializing the responseBody - "%s"', error, responseBody));
                    deserializationError.request = msRest.stripRequest(httpRequest);
                    deserializationError.response = msRest.stripResponse(response);
                    return callback(deserializationError, null, null, null);
                }
            }

            return callback(null, result, httpRequest, response);
        });
    }
}