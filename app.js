const path = require("path");

// third party modules
const express = require("express");
const bodyParser = require("body-parser");

// create ExpressJs app
const app = express();

// import Routes
const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

// Middlewear
app.get("/favicon.ico", (req, res) => res.status(204));
app.get("/.well-known/appspecific/com.chrome.devtools.json", (req, res) =>
  res.status(204),
);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

// These are the ROUTES they exist in the routes folder
app.use("/admin", adminRoutes);
app.use(shopRoutes);

// 404 page not found. If the user tries to access a page that does not exist, this will be the response.
app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, "views", "not-found.html"));
});

// local host where I choose what port. 3000 just sounds the best
app.listen(3000);
