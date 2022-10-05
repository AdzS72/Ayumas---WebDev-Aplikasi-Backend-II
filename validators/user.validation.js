const { param, body } = require("express-validator");
const { validator } = require("./validator");

const getDataByName = [param("name").isLength({ min: 8 }), validator];

const getDataByEmailPhone = [param("email").isEmail(), param("phonenum").isLength(12), validator];

const insertData = [body("name").isLength({ min: 8 }), body("gender").isIn("L", "P"), body("generation").isInt({ min: 2018 }), body("email").isEmail(), body("phonenum").isLength(12), body("description").notEmpty(), validator];

const deleteData = [body("email").isEmail(), validator];

const updateData = [body("name").isLength({ min: 8 }), body("phonenum").isLength(12), validator];

module.exports = {
  getDataByName,
  getDataByEmailPhone,
  insertData,
  deleteData,
  updateData,
};
