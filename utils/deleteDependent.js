let Testgit = require("../model/testgit");
let User = require("../model/user");
let dbService = require("../utils/dbService");

const deleteTestgit = async (filter) =>{
  try{
    return await Testgit.deleteMany(filter);
  }catch(error){
    throw new Error(error.message);
  }
};

const deleteUser = async (filter) =>{
  try{
    return await User.deleteMany(filter);
  }catch(error){
    throw new Error(error.message);
  }
};

const countTestgit = async (filter) =>{
  try{
    const testgitCnt =  await Testgit.countDocuments(filter);
    return {testgit : testgitCnt};
  }catch(error){
    throw new Error(error.message);
  }
};

const countUser = async (filter) =>{
  try{
    const userCnt =  await User.countDocuments(filter);
    return {user : userCnt};
  }catch(error){
    throw new Error(error.message);
  }
};

const softDeleteTestgit = async (filter) =>{
  try{
    return await Testgit.updateMany(filter, {
      isDeleted:true,
      isActive:false
    });
  }catch(error){
    throw new Error(error.message);
  }
};

const softDeleteUser = async (filter) =>{
  try{
    return await User.updateMany(filter, {
      isDeleted:true,
      isActive:false
    });
  }catch(error){
    throw new Error(error.message);
  }
};

module.exports ={
  deleteTestgit,
  deleteUser,
  countTestgit,
  countUser,
  softDeleteTestgit,
  softDeleteUser,
};
