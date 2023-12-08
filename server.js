const express = require("express");
const path = require("path");
const cors = require("cors");
const app = express();
const errorHandler = require("./middleware/errorHandler");
const reqHandler = require("./middleware/reqHandler");
const PORT = process.env.PORT || 5500;

const whiteList = [
  "https://www.google.com",
  "http://127.0.0.1:5500",
  "http://localhost:5500",
];

app.use(reqHandler);

const corsOptions = {
  origin: (origin, callback) => {
    if (whiteList.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error("Bu adrese izin verilmedi."));
    }
  },
};

// Cross Origin Resource Sharing
app.use(cors(corsOptions));

// content-type application/x-www-form-urlendcoded
app.use(express.urlencoded({ extended: false }));

// built-in middleware form json
app.use(express.json());

// server static files
app.use(express.static(path.join(__dirname, "/public")));

app.use("/", require("./routes/route.js"));
app.use("/products", require("./routes/api/products.js"))
app.use("/register", require("./routes/register.js"))
app.use("/login", require("./routes/login.js"))

app.all("*", (req, res) => {
  res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
});

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
