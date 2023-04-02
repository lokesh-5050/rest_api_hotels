const connection = require("../models/databaseConfig");

exports.allHotels = async (req,res,next) => {
  try {
    let sql = `SELECT * FROM hotels`;
    connection.query(sql, (err, row) => {
      if (err) throw err;
      res.json(row);
    });
  } catch (error) {
    console.log(error);
  }
};
exports.popularHotels = async (req,res,next) => {
  try {
    let sql = `SELECT * FROM popularhotels`;
    connection.query(sql, (err, row) => {
      if (err) throw err;
      res.json(row);
    });
  } catch (error) {
    console.log(error);
  }
};
