const express = require("express");
const cors = require("cors");
const path = require("path");
const app = express();

app.use(express.json());
app.use(
  cors({
    origin: "https://newchatappig.netlify.app",
  })
);

app.post("/", (req, res) => {
  content = req.body;
  console.log(content);
  res.status(200).json({ status: "ok" });
});

app.listen(3000, () => {
  console.log("app is running in port 3000");
});
