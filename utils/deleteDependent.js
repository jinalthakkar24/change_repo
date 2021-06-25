let User = require("../model/user");
let dbService = require("../utils/dbService");

const deleteUser = async (filter) =>{
  try{
    return await User.deleteMany(filter);
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
  deleteUser,
  countUser,
  softDeleteUser,
};
