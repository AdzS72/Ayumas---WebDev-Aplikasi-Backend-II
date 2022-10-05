const { databaseQuery } = require("../database");

const getDatas = async () => {
  try {
    const query = `SELECT * FROM ayumas_webdev`;
    const result = await databaseQuery(query);
    return {
      count: result.rowCount,
      rows: result.rows,
    };
  } catch (error) {
    return error;
  }
};

const getDataByName = async (name) => {
  try {
    const query = `SELECT * FROM ayumas_webdev WHERE name=$1`;
    const result = await databaseQuery(query, [name]);

    return {
      count: result.rowCount,
      rows: result.rows,
    };
  } catch (error) {
    return error;
  }
};

const getDataByEmailPhone = async (email, phonenum) => {
  try {
    const query = `SELECT * FROM ayumas_webdev WHERE email=$1 and phonenum=$2`;
    const result = await databaseQuery(query, [email, phonenum]);

    return {
      count: result.rowCount,
      rows: result.rows,
    };
  } catch (error) {
    return error;
  }
};

const insertData = async (name, gender, generation, email, phonenum, description) => {
  try {
    const query = `INSERT INTO ayumas_webdev VALUES ($1,$2,$3,$4,$5,$6)`;
    const result = await databaseQuery(query, [name, gender, generation, email, phonenum, description]);

    if (!result) {
      throw new Error("Error inserting Data");
    }
    return {
      message: "Data inserted successfully",
    };
  } catch (error) {
    return error;
  }
};

const deleteData = async (email) => {
  try {
    const query = `DELETE FROM ayumas_webdev WHERE email=$1`;
    const result = await databaseQuery(query, [email]);

    if (!result) {
      throw new Error("Error deleting Data");
    }
    if (result.rowCount === 0) {
      throw new Error("Data not found");
    }
    return {
      message: "Data deleted successfully",
    };
  } catch (error) {
    return error;
  }
};

const updateData = async (name, phonenum) => {
  try {
    // This is not safe, but it's just an example
    const query = `UPDATE ayumas_webdev SET phonenum=$2 WHERE name=$1`;
    const result = await databaseQuery(query, [name, phonenum]);

    if (!result) {
      throw new Error("Error deleting Data");
    }
    if (result.rowCount === 0) {
      throw new Error("Data not found");
    }
    return {
      message: "Data updated successfully",
    };
  } catch (error) {
    return error;
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
