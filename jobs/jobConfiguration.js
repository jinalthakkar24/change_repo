const cron = require('node-cron');
let jobService = require("../services/jobs/jobConfiguration");

/* 
 * final comming check 
 */
let test = cron.schedule('* * * * 6-7',() => {
  try {
    jobService.test();
    console.log('job called');
  } catch (error) {
    throw error;        
  }
});   

module.exports={test,};