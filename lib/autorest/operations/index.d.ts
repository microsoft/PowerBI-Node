/*
 * Code generated by Microsoft (R) AutoRest Code Generator 0.16.0.0
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
*/

import { ServiceClientOptions, RequestOptions, ServiceCallback } from 'ms-rest';
import * as models from '../models';


/**
 * @class
 * Datasets
 * __NOTE__: An instance of this class is automatically created for an
 * instance of the PowerBIClient.
 */
export interface Datasets {

    /**
     * @summary Returns the EntitySet datasets
     *
     * @param {string} collectionName The workspace collection name
     * 
     * @param {string} workspaceId The workspace id
     * 
     * @param {object} [options] Optional Parameters.
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    getDatasets(collectionName: string, workspaceId: string, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.ODataResponseListDataset>): void;
    getDatasets(collectionName: string, workspaceId: string, callback: ServiceCallback<models.ODataResponseListDataset>): void;

    /**
     * @summary Post a new entity to EntitySet datasets
     *
     * @param {string} collectionName The workspace collection name
     * 
     * @param {string} workspaceId The workspace id
     * 
     * @param {object} dataset The entity to post
     * 
     * @param {string} [dataset.id] The dataset id
     * 
     * @param {string} [dataset.name] The dataset name
     * 
     * @param {string} [dataset.defaultRetentionPolicy] The dataset default data
     * retention policy
     * 
     * @param {array} [dataset.tables] The dataset tables
     * 
     * @param {string} [dataset.webUrl] The dataset web url
     * 
     * @param {array} [dataset.datasources] The datasources associated with this
     * dataset
     * 
     * @param {object} [options] Optional Parameters.
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    postDataset(collectionName: string, workspaceId: string, dataset: models.Dataset, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<any>): void;
    postDataset(collectionName: string, workspaceId: string, dataset: models.Dataset, callback: ServiceCallback<any>): void;

    /**
     * @summary Posts new data rows into the specified table
     *
     * @param {string} collectionName The workspace collection name
     * 
     * @param {string} workspaceId The workspace id
     * 
     * @param {string} datasetKey The dataset id
     * 
     * @param {string} tableName The table name
     * 
     * @param {object} requestMessage The request message
     * 
     * @param {object} [options] Optional Parameters.
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    postRows(collectionName: string, workspaceId: string, datasetKey: string, tableName: string, requestMessage: any, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<any>): void;
    postRows(collectionName: string, workspaceId: string, datasetKey: string, tableName: string, requestMessage: any, callback: ServiceCallback<any>): void;

    /**
     * @summary Deletes all rows from the specified table
     *
     * @param {string} collectionName The workspace collection name
     * 
     * @param {string} workspaceId The workspace id
     * 
     * @param {string} datasetKey The dataset id
     * 
     * @param {string} tableName The table name
     * 
     * @param {object} [options] Optional Parameters.
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    deleteRows(collectionName: string, workspaceId: string, datasetKey: string, tableName: string, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<any>): void;
    deleteRows(collectionName: string, workspaceId: string, datasetKey: string, tableName: string, callback: ServiceCallback<any>): void;

    /**
     * @summary Gets all tables within the specified dataset
     *
     * @param {string} collectionName The workspace collection name
     * 
     * @param {string} workspaceId The workspace id
     * 
     * @param {string} datasetKey The dataset id
     * 
     * @param {object} [options] Optional Parameters.
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    getTables(collectionName: string, workspaceId: string, datasetKey: string, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.ODataResponseListTable>): void;
    getTables(collectionName: string, workspaceId: string, datasetKey: string, callback: ServiceCallback<models.ODataResponseListTable>): void;

    /**
     * @summary Updates a schema and metadata for the specified table
     *
     * @param {string} collectionName The workspace collection name
     * 
     * @param {string} workspaceId The workspace id
     * 
     * @param {string} datasetKey The dataset id
     * 
     * @param {string} tableName The table name
     * 
     * @param {object} requestMessage The request message
     * 
     * @param {object} [options] Optional Parameters.
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    putTable(collectionName: string, workspaceId: string, datasetKey: string, tableName: string, requestMessage: any, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<any>): void;
    putTable(collectionName: string, workspaceId: string, datasetKey: string, tableName: string, requestMessage: any, callback: ServiceCallback<any>): void;

    /**
     * @summary Gets the dataset metadata for the specifeid dataset id
     *
     * @param {string} collectionName The workspace collection name
     * 
     * @param {string} workspaceId The workspace id
     * 
     * @param {string} datasetKey The dataset id
     * 
     * @param {object} [options] Optional Parameters.
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    getDatasetById(collectionName: string, workspaceId: string, datasetKey: string, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.Dataset>): void;
    getDatasetById(collectionName: string, workspaceId: string, datasetKey: string, callback: ServiceCallback<models.Dataset>): void;

    /**
     * @summary Deletes the dataset with the specified id
     *
     * @param {string} collectionName The workspace collection name
     * 
     * @param {string} workspaceId The workspace id
     * 
     * @param {string} datasetKey The dataset id
     * 
     * @param {object} [options] Optional Parameters.
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    deleteDatasetById(collectionName: string, workspaceId: string, datasetKey: string, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<any>): void;
    deleteDatasetById(collectionName: string, workspaceId: string, datasetKey: string, callback: ServiceCallback<any>): void;

    /**
     * @summary Gets a list of bound gateway datasources for the specified dataset
     *
     * @param {string} collectionName The workspace collection name
     * 
     * @param {string} workspaceId The workspace id
     * 
     * @param {string} datasetKey The dataset id
     * 
     * @param {object} [options] Optional Parameters.
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    getGatewayDatasources(collectionName: string, workspaceId: string, datasetKey: string, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.ODataResponseListGatewayDatasource>): void;
    getGatewayDatasources(collectionName: string, workspaceId: string, datasetKey: string, callback: ServiceCallback<models.ODataResponseListGatewayDatasource>): void;

    /**
     * @summary Gets a list of datasource for the specified dataset
     *
     * @param {string} collectionName The workspace collection name
     * 
     * @param {string} workspaceId The workspace id
     * 
     * @param {string} datasetKey
     * 
     * @param {object} [options] Optional Parameters.
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    getDatasources(collectionName: string, workspaceId: string, datasetKey: string, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.ODataResponseListDatasource>): void;
    getDatasources(collectionName: string, workspaceId: string, datasetKey: string, callback: ServiceCallback<models.ODataResponseListDatasource>): void;

    /**
     * @summary Sets all connections for the specified dataset
     *
     * @param {string} collectionName The workspace collection name
     * 
     * @param {string} workspaceId The workspace id
     * 
     * @param {string} datasetKey The dataset id
     * 
     * @param {object} parameters The body
     * 
     * @param {object} [options] Optional Parameters.
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    setAllConnections(collectionName: string, workspaceId: string, datasetKey: string, parameters: { [propertyName: string]: string }, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<any>): void;
    setAllConnections(collectionName: string, workspaceId: string, datasetKey: string, parameters: { [propertyName: string]: string }, callback: ServiceCallback<any>): void;
}

/**
 * @class
 * Gateways
 * __NOTE__: An instance of this class is automatically created for an
 * instance of the PowerBIClient.
 */
export interface Gateways {

    /**
     * @summary Updates the credentials for the specified datasource
     *
     * @param {string} collectionName The workspace collection name
     * 
     * @param {string} workspaceId The workspace id
     * 
     * @param {string} gatewayId The gateway id
     * 
     * @param {string} datasourceId The datasource id
     * 
     * @param {object} datasourceDelta The datasource changes
     * 
     * @param {object} [options] Optional Parameters.
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    patchDatasource(collectionName: string, workspaceId: string, gatewayId: string, datasourceId: string, datasourceDelta: any, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<any>): void;
    patchDatasource(collectionName: string, workspaceId: string, gatewayId: string, datasourceId: string, datasourceDelta: any, callback: ServiceCallback<any>): void;

    /**
     * @summary Returns a list of gateways for the workspace collection
     *
     * @param {string} collectionName The workspace collection name
     * 
     * @param {object} [options] Optional Parameters.
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    getCollectionGateways(collectionName: string, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.ODataResponseListGateway>): void;
    getCollectionGateways(collectionName: string, callback: ServiceCallback<models.ODataResponseListGateway>): void;

    /**
     * @summary Creates a new gateway
     *
     * @param {string} collectionName The workspace collection name
     * 
     * @param {object} createGatewayRequest The gateway request to post
     * 
     * @param {string} [createGatewayRequest.name] The gateway name
     * 
     * @param {string} [createGatewayRequest.publicKey] The gateway public key
     * 
     * @param {string} [createGatewayRequest.annotation] The gateway annotation
     * 
     * @param {array} [createGatewayRequest.workspaces] The workspace id to add
     * the gateway to
     * 
     * @param {object} [options] Optional Parameters.
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    postGateway(collectionName: string, createGatewayRequest: models.CreateGatewayRequest, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.ODataResponseString>): void;
    postGateway(collectionName: string, createGatewayRequest: models.CreateGatewayRequest, callback: ServiceCallback<models.ODataResponseString>): void;

    /**
     * @summary Returns a list of gateways for the specified workspace
     *
     * @param {string} collectionName The workspace collection name
     * 
     * @param {string} workspaceId The workspace id
     * 
     * @param {object} [options] Optional Parameters.
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    getWorkspaceGateways(collectionName: string, workspaceId: string, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.ODataResponseListGateway>): void;
    getWorkspaceGateways(collectionName: string, workspaceId: string, callback: ServiceCallback<models.ODataResponseListGateway>): void;

    /**
     * @summary Returns the specified gateway
     *
     * @param {string} collectionName The workspace collection name
     * 
     * @param {string} gatewayId The gateway id
     * 
     * @param {object} [options] Optional Parameters.
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    getGatewayById(collectionName: string, gatewayId: string, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.Gateway>): void;
    getGatewayById(collectionName: string, gatewayId: string, callback: ServiceCallback<models.Gateway>): void;

    /**
     * @summary Delete a gateway by id
     *
     * @param {string} collectionName The workspace collection name
     * 
     * @param {string} gatewayId The gateway id
     * 
     * @param {object} [options] Optional Parameters.
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    deleteGatewayById(collectionName: string, gatewayId: string, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<any>): void;
    deleteGatewayById(collectionName: string, gatewayId: string, callback: ServiceCallback<any>): void;
}

/**
 * @class
 * Imports
 * __NOTE__: An instance of this class is automatically created for an
 * instance of the PowerBIClient.
 */
export interface Imports {

    /**
     * @summary Returns a list of imports for the specified workspace
     *
     * @param {string} collectionName The workspace collection name
     * 
     * @param {string} workspaceId The workspace id
     * 
     * @param {object} [options] Optional Parameters.
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    getImports(collectionName: string, workspaceId: string, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.ODataResponseListImport>): void;
    getImports(collectionName: string, workspaceId: string, callback: ServiceCallback<models.ODataResponseListImport>): void;

    /**
     * @summary Creates a new import using the specified import info
     *
     * @param {string} collectionName The workspace collection name
     * 
     * @param {string} workspaceId The workspace id
     * 
     * @param {string} datasetDisplayName The display name of the dataset
     * 
     * @param {object} importInfo The import to post
     * 
     * @param {string} [importInfo.filePath] The file path to import
     * 
     * @param {string} [importInfo.connectionType] The import connection type
     * 
     * @param {object} [options] Optional Parameters.
     * 
     * @param {string} [options.nameConflict] Determines what to do if a dataset
     * with the same name already exists
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    postImport(collectionName: string, workspaceId: string, datasetDisplayName: string, importInfo: models.ImportInfo, options: { nameConflict? : string, customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.ImportModel>): void;
    postImport(collectionName: string, workspaceId: string, datasetDisplayName: string, importInfo: models.ImportInfo, callback: ServiceCallback<models.ImportModel>): void;

    /**
     * @summary Gets the import metadata for the specifed import id
     *
     * @param {string} collectionName The workspace collection name
     * 
     * @param {string} workspaceId The workspace id
     * 
     * @param {string} importId The import id
     * 
     * @param {object} [options] Optional Parameters.
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    getImportById(collectionName: string, workspaceId: string, importId: string, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.ImportModel>): void;
    getImportById(collectionName: string, workspaceId: string, importId: string, callback: ServiceCallback<models.ImportModel>): void;
}

/**
 * @class
 * Workspaces
 * __NOTE__: An instance of this class is automatically created for an
 * instance of the PowerBIClient.
 */
export interface Workspaces {

    /**
     * @summary Returns a list of workspaces for the specified collection
     *
     * @param {string} collectionName The workspace collection name
     * 
     * @param {object} [options] Optional Parameters.
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    getWorkspacesByCollectionName(collectionName: string, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.ODataResponseListWorkspace>): void;
    getWorkspacesByCollectionName(collectionName: string, callback: ServiceCallback<models.ODataResponseListWorkspace>): void;

    /**
     * @summary Creates a new workspace within a workspace collection
     *
     * @param {string} collectionName The workspace collection name
     * 
     * @param {object} [options] Optional Parameters.
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    postWorkspace(collectionName: string, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.Workspace>): void;
    postWorkspace(collectionName: string, callback: ServiceCallback<models.Workspace>): void;
}

/**
 * @class
 * Reports
 * __NOTE__: An instance of this class is automatically created for an
 * instance of the PowerBIClient.
 */
export interface Reports {

    /**
     * @summary Gets a list of reports available within the specified workspace
     *
     * @param {string} collectionName The workspace collection name
     * 
     * @param {string} workspaceId The workspace id
     * 
     * @param {object} [options] Optional Parameters.
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    getReports(collectionName: string, workspaceId: string, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.ODataResponseListReport>): void;
    getReports(collectionName: string, workspaceId: string, callback: ServiceCallback<models.ODataResponseListReport>): void;
}
