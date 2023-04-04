const connection = require("../models/databaseConfig");

exports.allHotels = async (req, res, next) => {
  try {
    console.log("/hotels");
    let sql = `SELECT * FROM hotels`;
    connection.query(sql, (err, row) => {
      if (err) throw err;
      res.json(row);
    });
  } catch (error) {
    console.log(error);
  }
};
exports.popularHotels = async (req, res, next) => {
  try {
    let sql = `SELECT * FROM popularhotels`;
    connection.query(sql, (err, row) => {
      if (err) throw err;
      let data = row;
      let page = req.query.page || '1';
      let limit = req.query.limit || '10';
      let skip = (page - 1) * limit;
      console.log({ page: Number(page), limit: Number(limit) });
      let filteredData = data.splice(skip, limit);
      res.json(filteredData)
    });
  } catch (error) {
    console.log(error);
  }
};

exports.handleHotelsByCity = async (req, res, next) => {
  try {
    let city = req.query.city || "Bhopal";
    let FirstLetterCapital = city.charAt(0).toUpperCase() + city.slice(1)
    console.log({ city: FirstLetterCapital, });
    let sql = `SELECT * FROM popularhotels`;

    connection.query(sql, ((err, data) => {
      if (err) res.json(err);
      let filteredData = data.filter((elem) => elem.city == FirstLetterCapital ? elem : null);
      // console.log(filteredData);
      res.json(filteredData);
    }))
  } catch (error) {
    res.json(error);
  }
} 
