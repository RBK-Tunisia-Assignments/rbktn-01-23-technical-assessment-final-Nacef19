const express = require("express");
const {
  getAllRecepies,
  getOne,
  add,
  deleteRe,
} = require("../model/recipiesModel");
const router = express.Router();

router.get("/getAll", getAllRecepies);
router.get("/:idrecepie", getOne);
router.post("/add", add);
router.delete("/:idrecepie", deleteRe);

module.exports = router;
