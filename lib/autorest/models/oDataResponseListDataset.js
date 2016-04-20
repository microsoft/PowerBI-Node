/*
 * Code generated by Microsoft (R) AutoRest Code Generator 0.15.0.0
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

var models = require('./index');

var util = require('util');

/**
 * @class
 * Initializes a new instance of the ODataResponseListDataset class.
 * @constructor
 * A dataset odata list wrapper
 * @member {string} [odatacontext]
 * 
 * @member {array} [value] The datasets
 * 
 */
function ODataResponseListDataset() {
}

/**
 * Defines the metadata of ODataResponseListDataset
 *
 * @returns {object} metadata of ODataResponseListDataset
 *
 */
ODataResponseListDataset.prototype.mapper = function () {
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
};

module.exports = ODataResponseListDataset;