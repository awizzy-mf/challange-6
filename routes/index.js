const express = require("express");
const products = require("./product.js");
const Components = require("./component.js");
const Supplier = require("./supplier.js");

const router = express.Router();

router.use(products);
router.use(Components);
router.use(Supplier);

router.get("/", (req, res) => {
  res.status(200).json({
    message: "welcome to express",
  });
});

module.exports = router;
