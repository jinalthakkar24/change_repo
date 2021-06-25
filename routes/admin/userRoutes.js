const express = require('express');
const router = express.Router();
const userController = require("../../controller/admin/userController");
const auth = require("../../middleware/auth");
router.route("/admin/user/create").post(userController.addUser);
router.route("/admin/user/list").post(auth(...[ 'getAllByAdminInAdminPlatform' ]),userController.findAllUser);
router.route("/admin/user/:id").get(auth(...[ 'getByAdminInAdminPlatform' ]),userController.getUser);
router.route("/admin/user/count").post(auth(...[ 'getCountByAdminInAdminPlatform' ]),userController.getUserCount);
router.route("/admin/user/aggregate").post(auth(...[ 'aggregateByAdminInAdminPlatform' ]),userController.getUserByAggregate);
router.route("/admin/user/update/:id").put(auth(...[ 'updateByAdminInAdminPlatform' ]),userController.updateUser);    
router.route("/admin/user/partial-update/:id").put(auth(...[ 'partialUpdateByAdminInAdminPlatform' ]),userController.partialUpdateUser);
router.route("/admin/user/softDelete/:id").put(auth(...[ 'softDeleteByAdminInAdminPlatform' ]),userController.softDeleteUser);
router.route("/admin/user/addBulk").post(userController.bulkInsertUser);
router.route("/admin/user/updateBulk").put(auth(...[ 'updateBulkByAdminInAdminPlatform' ]),userController.bulkUpdateUser);
router.route("/admin/user/delete/:id").delete(auth(...[ 'deleteByAdminInAdminPlatform' ]),userController.deleteUser);
router.route("/admin/user/change-password").put(auth(...[ 'changePasswordByAdminInAdminPlatform' ]),userController.changePassword);

module.exports = router;
