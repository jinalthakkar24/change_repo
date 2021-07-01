const Testgit = require("../../model/testgit");
const utils = require("../../utils/messages");
const testgitSchemaKey = require("../../utils/validation/testgitValidation");
const validation = require("../../utils/validateRequest");
const dbService = require("../../utils/dbService");
const addTestgit = async(req, res) => {
  try {

    let isValid = validation.validateParamsWithJoi(
      req.body,
      testgitSchemaKey.schemaKeys);
    if (isValid.error) {
      return utils.inValidParam(isValid.details, res);
    } 
    const data = new Testgit({...req.body,});
    let result = await dbService.createDocument(Testgit,data);

    return  utils.successResponse(result, res);
  } catch (error) {
    if(error.name === "ValidationError"){
      return utils.validationError(error.message, res);
    }
    if(error.code && error.code == 11000){
      return utils.isDuplicate(error.message, res);
    }
    return utils.failureResponse(error.message,res); 
  }
};
const findAllTestgit = async(req, res) => {
  try {
    let options = {};
    let query={};
    let result;
    if(req.body.isCountOnly){
      if (req.body.query !== undefined) {
        query = { ...req.body.query };
      }
      result = await dbService.countDocument(Testgit, query);
      if (result) {
        result = { totalRecords: result };
        return utils.successResponse(result, res);
      } 
      return utils.recordNotFound([], res);
    }
    else {
      if (req.body.options !== undefined) {
        if(req.body.options.populate){
          delete req.body.options.populate;
        }
        options = { ...req.body.options };
      }
            
      if(req.body.query !==undefined){
        query={...req.body.query};
      }
      result = await dbService.getAllDocuments( Testgit,query,options);
            
      if(!result){
        return utils.recordNotFound([],res);
      }
      return utils.successResponse(result, res);   
    }
  }
  catch(error){
    return utils.failureResponse(error.message,res);
  }
};

const getTestgit = async(req, res) => {
  try {
    let query={};
    query._id = req.params.id;

    let result = await dbService.getDocumentByQuery(Testgit,query);
    if(result){
      return  utils.successResponse(result, res);
            
    }
    return utils.recordNotFound([],res);
  }
  catch(error){
    return utils.failureResponse(error.message,res);
  }
};
const getTestgitCount = async(req, res) => {
  try {
    let where ={};
    if(req.body.where){
      where = req.body.where;
    }

    let result = await dbService.countDocument(Testgit,where);
    if(result){
      result = {totalRecords:result};
      return utils.successResponse(result, res);
    }
    return utils.recordNotFound([],res);
  }
  catch(error){
    return utils.failureResponse(error.message,res);
  }
};

const getTestgitByAggregate = async (req,res)=>{
  try{
    let result=await dbService.getDocumentByAggregation(Testgit,req.body);
    if(result){
      return utils.successResponse(result, res);
    }
    return utils.recordNotFound([],res);
  }catch(error){
    return utils.failureResponse(error.message,res);
  }
};
const updateTestgit = async(req, res) => {
  try {
    const data = {
      ...req.body,
      id:req.params.id
    };
    let isValid = validation.validateParamsWithJoi(
      data,
      testgitSchemaKey.schemaKeys
    );
    if (isValid.error) {
      return  utils.inValidParam(isValid.details, res);
    }

    let result = await dbService.findOneAndUpdateDocument(Testgit,{_id:req.params.id},data,{new:true});
    if(!result){
      return utils.failureResponse("something is wrong",res);
    }
        
    return  utils.successResponse(result, res);
  }
  catch(error){
    if(error.name === "ValidationError"){
      return utils.isDuplicate(error.message, res);
    }
    if(error.code && error.code == 11000){
      return utils.isDuplicate(error.message, res);
    }
    return utils.failureResponse(error.message,res);
  }
};
const partialUpdateTestgit = async (req, res) => {
  try {
    const data = {
      ...req.body,
      id: req.params.id
    };
    let isValid = validation.validateParamsWithJoi(
      data,
      testgitSchemaKey.updateSchemaKeys
    );
    if (isValid.error) {
      return utils.inValidParam(isValid.details, res);
    }

    let result = await dbService.findOneAndUpdateDocument(Testgit, {_id:req.params.id}, data,{new:true});
    if (!result) {
      return utils.failureResponse("something is wrong", res);
    }
        
    return utils.successResponse(result, res);
        
  }
  catch(error){
    return utils.failureResponse(error.message, res);
  }
};
const softDeleteTestgit = async (req, res) => {
  try{
    let result = await dbService.findOneAndUpdateDocument(Testgit, { _id: req.params.id }, { isDeleted: true },{new:true});
    if(!result){
      return utils.recordNotFound([],res);
    }
    return  utils.successResponse(result, res);
  }catch(error){
    return utils.failureResponse(error.message,res); 
  }
};
const bulkInsertTestgit = async(req,res)=>{
  try{
    let data;   
    if(req.body.data !== undefined && req.body.data.length){
      data = req.body.data;

      let result =await dbService.bulkInsert(Testgit,data);
      return  utils.successResponse(result, res);
    }else{
      return utils.failureResponse('Invalid Data',res);
    }  
  }catch(error){
    if(error.name === "ValidationError"){
      return utils.validationError(error.message, res);
    }
    if(error.code && error.code == 11000){
      return utils.isDuplicate(error.message, res);
    }
    return utils.failureResponse(error.message,res);
  }
};
const bulkUpdateTestgit=async(req,res)=>{
  try {
    let filter={};
    let data;
    if(req.body.filter !== undefined){
      filter = req.body.filter;
    }
    if(req.body.data !== undefined){
      data = req.body.data;

      let result = await dbService.bulkUpdate(Testgit,filter,data);
      if(!result){
        return utils.failureResponse("something is wrong.",res);
      }

      return  utils.successResponse(result, res);
    }
    else{
      return utils.failureResponse("Invalid Data", res);
    }
  }
  catch(error){
    return utils.failureResponse(error.message,res); 
  }
};
const deleteTestgit =async(req, res) => {
  try {
    const result = await dbService.findOneAndDeleteDocument(Testgit, {_id:req.params.id});
    if(result){
      return  utils.successResponse(result, res);
    }
    return utils.failureResponse("something went wrong",res);
  }
  catch(error){
    return utils.failureResponse(error.message,res);
  }
};

module.exports = {
  addTestgit,
  findAllTestgit,
  getTestgit,
  getTestgitCount,
  getTestgitByAggregate,
  updateTestgit,
  partialUpdateTestgit,
  softDeleteTestgit,
  bulkInsertTestgit,
  bulkUpdateTestgit,
  deleteTestgit,
};
