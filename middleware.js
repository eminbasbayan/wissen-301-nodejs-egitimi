const express = require("express");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 5500;

app.get("/index.html", (req, res) => {
  //   res.send("Hello World!");
  // res.sendFile("./views/index.html", {root: __dirname})
  res.sendFile(path.join(__dirname, "views", "index.html"));
});

app.get("/new-page.html", () => {
  res.sendFile(path.join(__dirname, "views", "new-page.html"));
});

app.get("/old-page.html", () => {
  res.sendFile(path.join(__dirname, "views", "old-page.html"));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
