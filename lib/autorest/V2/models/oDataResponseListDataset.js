/*
 * Code generated by Microsoft (R) AutoRest Code Generator 1.1.0.0
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

const models = require('./index');

/**
 * @class
 * Initializes a new instance of the ODataResponseListDataset class.
 * @constructor
 * A dataset odata list wrapper
 *
 * @member {string} [odatacontext] OData context
 *
 * @member {array} [value] The datasets
 *
 */
class ODataResponseListDataset {
  constructor() {
  }

  /**
   * Defines the metadata of ODataResponseListDataset
   *
   * @returns {object} metadata of ODataResponseListDataset
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'ODataResponse[List[Dataset]]',
      type: {
        name: 'Composite',
        className: 'ODataResponseListDataset',
        modelProperties: {
          odatacontext: {
            required: false,
            serializedName: 'odata\\.context',
            type: {
              name: 'String'
            }
          },
          value: {
            required: false,
            serializedName: 'value',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'DatasetElementType',
                  type: {
                    name: 'Composite',
                    className: 'Dataset'
                  }
              }
            }
          }
        }
      }
    };
  }
}

module.exports = ODataResponseListDataset;