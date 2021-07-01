/*
 * modelValidation.js
 * purpose     : request validation
 * description : validate each post and put request as per mongoose model
 *
 */
const joi = require("joi");
exports.schemaKeys = joi.object({
  id: joi.string().regex(/^[0-9a-fA-F]{24}$/),
  name: joi.string(),
  enNo: joi.number().integer().required(),
  isActive: joi.boolean(),
  isDeleted: joi.boolean()
}).unknown(true);
exports.updateSchemaKeys = joi.object({
  id: joi.string().regex(/^[0-9a-fA-F]{24}$/),
  name: joi.string(),
  enNo: joi.number().integer().when({
    is:joi.exist(),
    then:joi.required(),
    otherwise:joi.optional()
  }),
  isActive: joi.boolean(),
  isDeleted: joi.boolean()
}).unknown(true);
