const express = require("express");
const app = express();
const PORT = 4000;
const cors = require("cors");
app.use(cors());
const db = require("./database-mysql/index");

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
