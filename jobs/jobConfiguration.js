const cron = require('node-cron');
let jobService = require("../services/jobs/jobConfiguration");

/* 
 * every day
 */
let everyday = cron.schedule('* * * * *',() => {
  try {
    jobService.everyday();
    console.log('job called');
  } catch (error) {
    throw error;        
  }
});   
/* 
 * final comming check 
 */
let test = cron.schedule('* * * * 3',() => {
  try {
    jobService.test();
    console.log('job called');
  } catch (error) {
    throw error;        
  }
});   

module.exports={
  everyday,
  test,
};