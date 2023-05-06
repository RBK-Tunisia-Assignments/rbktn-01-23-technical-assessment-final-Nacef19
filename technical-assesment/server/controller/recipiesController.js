const recepiesModel = require("../model/recipiesModel");

const getAllRecepies = (req, res) => {
  recepiesModel.getAllRecepies(function (err, results) {
    if (err) {
      res.status(500).send(err);
    } else {
      res.json(results);
    }
  });
};

const getOne = (req, res) => {
  recepiesModel.getOne(
    function (err, results) {
      if (err) {
        res.status(500).send(err);
      } else {
        res.json(results);
      }
    },
    [req.params.recepie_Id],
  );
};

const add = (req, res) => {
  recepiesModel.add(function (err, results) {
    if (err) {
      res.status(500).send(err);
    } else res.json(results);
  }, req.body);
};

const deletRe = (req, res) => {
  recepiesModel.deleteRe(
    function (err, results) {
      if (err) {
        res.status(500).send(err);
      } else {
        res.json(results);
      }
    },
    [req.params.recepie_Id],
  );
};

module.exports = {
  getAllRecepies,
  getOne,
  add,
  deletRe,
};
