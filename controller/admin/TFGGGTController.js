const TFGGGTService = require("../../services/admin/TFGGGTService"); 
const utils = require("../../utils/messages");
/* 
 * ftgvf
 */
const trfgtgf=async (req,res)=>{
  try {
    let result =  TFGGGTService.trfgtgf();
    if(result){
      return utils.successResponse(result,res);
    }
  } catch (error) {
    throw error;
  }
};    
module.exports={trfgtgf,};
