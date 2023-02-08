const mysql = require("mysql");
const { BadRequestError, NotFoundError } = require('../utils/api-errors');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password:'password',
  database: 'e-commerce'
});
db.connect((err) => {
  if (err) {
    throw err;
  }
});
db.promise = (sql, fileds) => {
  if (fileds) {
    //
    return new Promise((resolve, reject) => {
      db.query(sql, fileds, (err, result) => {
        // console.log('sql, fileds 2' + sql, fileds);
        if (err) {
          reject(new Error());
        } else {
          resolve(result);
        }
      });
    });
  } else {
    //
    return new Promise((resolve, reject) => {
      db.query(sql, (err, result) => {
        if (err) {
          reject(new Error());
        } else {
          resolve(result);
        }
      });
    });
  }
};


module.exports = db;