require("dotenv").config({ path: "./.env" });
const express = require("express");
const app = express();
const PORT = process.env.PORT;
const session = require("express-session");

var cookieParser = require("cookie-parser");

app.use(
  require("cors")({ credentials: true, origin: process.env.DOMAIN || 8080 })
);

// require("./models/databaseConfig").sql();
// app.use(express.static(path.join(__dirname, "public")));

const indexRoutes = require("./routes/indexRoutes");

app.use(
  session({ resave: true, saveUninitialized: false, secret: "sdfvgbhnjk756" })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use("/api/v1/", indexRoutes);

app.listen(PORT || 8080, () => {
  console.log(`Server is running on PORT ${PORT}`);
});
