const express = require("express");
const app = express();

/* Home Page Route */
app.get("/", (req, res) => {
  res.status(200).send("Home Page");
});

/* Products Page Route */
app.get("/products", (req, res) => {
  res.send("Products Page");
});

/* API Route */
app.get("/api", (req, res) => {
  res.json([
    {
      id: 1,
      firstName: "Emin",
      lastName: "Başbayan",
    },
  ]);
});

// 404 Page Not Found Route
app.use((req, res) => {
  res.status(404).send("Page not found!");
});

app.listen(5000, () => {
  console.log("Sunucu 5000 portu üzerinde çalışıyor.");
});
