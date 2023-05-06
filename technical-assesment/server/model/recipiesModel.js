const connection = require("../database-mysql/index");

const getAllRecepies = (callback) => {
  const sql = "SELECT * FROM recepie";
  connection.query(sql, function (err, res) {
    callback(err, res);
  });
};

const getOne = (callback, recepieId) => {
  const sql = "SELECT * FROM recepie WHERE recepie_Id =?";
  connection.query(sql, recepieId, function (err, res) {
    callback(err, res);
  });
};

const add = (callback, recepieInfo) => {
  const sql = "INSERT INTO recepie SET ?";
  connection.query(sql, recepieInfo, function (err, res) {
    callback(err, res);
  });
};

const deleteRe = (callback, delteRecepie) => {
  const sql = "DELETE FROM recepie WHERE recepie_Id = ?";
  connection.query(sql, delteRecepie, function (error, results) {
    callback(error, results);
  });
};

module.exports = {
  getAllRecepies,
  getOne,
  add,
  deleteRe,
};
