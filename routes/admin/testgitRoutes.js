const express = require('express');
const router = express.Router();
const testgitController = require("../../controller/admin/testgitController");
const auth = require("../../middleware/auth");
router.route("/admin/testgit/create").post(auth(...[ 'createByAdminInAdminPlatform' ]),testgitController.addTestgit);
router.route("/admin/testgit/list").post(auth(...[ 'getAllByAdminInAdminPlatform' ]),testgitController.findAllTestgit);
router.route("/admin/testgit/:id").get(auth(...[ 'getByAdminInAdminPlatform' ]),testgitController.getTestgit);
router.route("/admin/testgit/count").post(auth(...[ 'getCountByAdminInAdminPlatform' ]),testgitController.getTestgitCount);
router.route("/admin/testgit/aggregate").post(auth(...[ 'aggregateByAdminInAdminPlatform' ]),testgitController.getTestgitByAggregate);
router.route("/admin/testgit/update/:id").put(auth(...[ 'updateByAdminInAdminPlatform' ]),testgitController.updateTestgit);    
router.route("/admin/testgit/partial-update/:id").put(auth(...[ 'partialUpdateByAdminInAdminPlatform' ]),testgitController.partialUpdateTestgit);
router.route("/admin/testgit/softDelete/:id").put(auth(...[ 'softDeleteByAdminInAdminPlatform' ]),testgitController.softDeleteTestgit);
router.route("/admin/testgit/addBulk").post(auth(...[ 'addBulkByAdminInAdminPlatform' ]),testgitController.bulkInsertTestgit);
router.route("/admin/testgit/updateBulk").put(auth(...[ 'updateBulkByAdminInAdminPlatform' ]),testgitController.bulkUpdateTestgit);
router.route("/admin/testgit/delete/:id").delete(auth(...[ 'deleteByAdminInAdminPlatform' ]),testgitController.deleteTestgit);

module.exports = router;
