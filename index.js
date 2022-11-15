let express = require("express");

const app = express();

app.listen(3000, () => {
  console.log("Run in port 3000");
});

app.use(express.static(__dirname + "/dist/"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/dist/index.html");
});