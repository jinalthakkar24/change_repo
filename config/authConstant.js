/*
 * constants
 */

const JWT={
  ADMIN_SECRET:"myjwtadminsecret",
  CLIENT_SECRET:"myjwtclientsecret",
  EXPIRES_IN: 10000
};

const USER_ROLE ={
  User:1,
  Admin:2,
};

const PLATFORM = {
  ADMIN:1,
  CLIENT:2,
};

let LOGIN_ACCESS ={
  [USER_ROLE.User]:[PLATFORM.CLIENT],        
  [USER_ROLE.Admin]:[PLATFORM.ADMIN],        
};

const DEFAULT_ROLE= 1;

const ROLE_RIGHTS={
    
  [USER_ROLE.User] : [
    "getAllByUserInClientPlatform",
    "getByUserInClientPlatform",
    "aggregateByUserInClientPlatform",
    "getCountByUserInClientPlatform",
    "createByUserInClientPlatform",
    "addBulkByUserInClientPlatform",
    "updateByUserInClientPlatform",
    "updateBulkByUserInClientPlatform",
    "partialUpdateByUserInClientPlatform",
    "deleteByUserInClientPlatform",
    "softDeleteByUserInClientPlatform",
    "upsertByUserInClientPlatform",
    "fileUploadByUserInClientPlatform",
    "changePasswordByUserInClientPlatform"
  ],
    
  [USER_ROLE.Admin] : [
    "getAllByAdminInAdminPlatform",
    "getByAdminInAdminPlatform",
    "aggregateByAdminInAdminPlatform",
    "getCountByAdminInAdminPlatform",
    "createByAdminInAdminPlatform",
    "addBulkByAdminInAdminPlatform",
    "updateByAdminInAdminPlatform",
    "updateBulkByAdminInAdminPlatform",
    "partialUpdateByAdminInAdminPlatform",
    "deleteByAdminInAdminPlatform",
    "softDeleteByAdminInAdminPlatform",
    "upsertByAdminInAdminPlatform",
    "fileUploadByAdminInAdminPlatform",
    "changePasswordByAdminInAdminPlatform"
  ],
    
};
const MAX_LOGIN_RETRY_LIMIT = 3;   

const FORGOT_PASSWORD_WITH = {
  OTP: {
    email: true,
    sms: false
  },
  EXPIRETIME: 20
};

module.exports = {
  JWT,
  USER_ROLE,
  DEFAULT_ROLE,
  ROLE_RIGHTS,
  PLATFORM,
  MAX_LOGIN_RETRY_LIMIT,
  FORGOT_PASSWORD_WITH,
  LOGIN_ACCESS,
        
};