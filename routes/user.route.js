const express = require("express");
const router = express.Router();
const { dataController } = require("../controllers");
const { dataValidation } = require("../validators");
const { body, param, validationResult } = require("express-validator");

router.route("/").get(dataController.getDatas);
router.route("/:name").get(dataValidation.getDataByName, dataController.getDataByName);
router.route("/:email/:phonenum").get(dataValidation.getDataByEmailPhone, dataController.getDataByEmailPhone);
router.route("/insert").post(dataValidation.insertData, dataController.insertData);
router.route("/delete").delete(dataValidation.deleteData, dataController.deleteData);
router.route("/update").patch(dataValidation.updateData, dataController.updateData);

module.exports = router;
