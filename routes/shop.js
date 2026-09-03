const express = require("express");

const router = express.Router();

router.use("/", (req, res, next) => {
  res.send(
    "<h1>Hello from Express</h1><div><a href='add-product' style='color: red; font-weight: bold; padding: 10px; background: black; border: 1px solid pink; text-decoration: none;'>Add Product</a></div>",
  );
});

module.exports = router;