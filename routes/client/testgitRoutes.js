const express = require('express');
const router = express.Router();
const testgitController = require("../../controller/client/testgitController");
const auth = require("../../middleware/auth");
router.route("/client/api/v1/testgit/create").post(auth(...[ 'createByUserInClientPlatform' ]),testgitController.addTestgit);
router.route("/client/api/v1/testgit/list").post(auth(...[ 'getAllByUserInClientPlatform' ]),testgitController.findAllTestgit);
router.route("/client/api/v1/testgit/:id").get(auth(...[ 'getByUserInClientPlatform' ]),testgitController.getTestgit);
router.route("/client/api/v1/testgit/count").post(auth(...[ 'getCountByUserInClientPlatform' ]),testgitController.getTestgitCount);
router.route("/client/api/v1/testgit/aggregate").post(auth(...[ 'aggregateByUserInClientPlatform' ]),testgitController.getTestgitByAggregate);
router.route("/client/api/v1/testgit/update/:id").put(auth(...[ 'updateByUserInClientPlatform' ]),testgitController.updateTestgit);    
router.route("/client/api/v1/testgit/partial-update/:id").put(auth(...[ 'partialUpdateByUserInClientPlatform' ]),testgitController.partialUpdateTestgit);
router.route("/client/api/v1/testgit/softDelete/:id").put(auth(...[ 'softDeleteByUserInClientPlatform' ]),testgitController.softDeleteTestgit);
router.route("/client/api/v1/testgit/addBulk").post(auth(...[ 'addBulkByUserInClientPlatform' ]),testgitController.bulkInsertTestgit);
router.route("/client/api/v1/testgit/updateBulk").put(auth(...[ 'updateBulkByUserInClientPlatform' ]),testgitController.bulkUpdateTestgit);
router.route("/client/api/v1/testgit/delete/:id").delete(auth(...[ 'deleteByUserInClientPlatform' ]),testgitController.deleteTestgit);

module.exports = router;
