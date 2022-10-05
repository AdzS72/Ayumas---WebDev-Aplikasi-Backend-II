const { dataServices } = require("../services");
const { responseHelper } = require("../helper");

const getDatas = async (req, res) => {
  try {
    const datas = await dataServices.getDatas();
    if (datas instanceof Error) {
      throw new Error(datas);
    }
    res.status(responseHelper.status.success).json(datas);
  } catch (error) {
    res.status(responseHelper.status.error).json(error.message);
  }
};
const getDataByName = async (req, res) => {
  try {
    const { name } = req.params;
    const data = await dataServices.getDataByName(name);
    res.status(responseHelper.status.success).json(data);
  } catch (error) {
    res.status(responseHelper.status.error).json(error.message);
  }
};
const getDataByEmailPhone = async (req, res) => {
  try {
    const { email, phonenum } = req.params;
    const data = await dataServices.getDataByEmailPhone(email, phonenum);
    res.status(responseHelper.status.success).json(data);
  } catch (error) {
    res.status(responseHelper.status.error).json(error.message);
  }
};
const insertData = async (req, res) => {
  try {
    const { name, gender, generation, email, phonenum, description } = req.body;
    const result = await dataServices.insertData(name, gender, generation, email, phonenum, description);
    if (result instanceof Error) {
      throw new Error(result);
    }
    res.status(responseHelper.status.success).json(result);
  } catch (error) {
    res.status(responseHelper.status.error).json(error.message);
  }
};
const deleteData = async (req, res) => {
  try {
    const { email } = req.body;
    const result = await dataServices.deleteData(email);
    if (result instanceof Error) {
      throw new Error(result);
    }
    res.status(responseHelper.status.success).json(result);
  } catch (error) {
    res.status(responseHelper.status.error).json(error.message);
  }
};
const updateData = async (req, res) => {
  try {
    const { name, phonenum } = req.body;
    const result = await dataServices.updateData(name, phonenum);
    if (result instanceof Error) {
      throw new Error(result);
    }
    res.status(responseHelper.status.success).json(result);
  } catch (error) {
    res.status(responseHelper.status.error).json(error.message);
  }
};

module.exports = {
  getDatas,
  getDataByName,
  getDataByEmailPhone,
  insertData,
  deleteData,
  updateData,
};
