const express = require("express");
const products = require("./product.js");
const Components = require("./component.js");
const Supplier = require("./supplier.js");
const router = express.Router();

router.get("/", (req, res) => {
  return res.status(200).json({
      status: true,
      message: "welcome to auth api!",
      data: null
  })
})

router.use(products);
router.use(Components);
router.use(Supplier);

router.get("/", (req, res) => {
  res.status(200).json({
    message: "welcome to express",
  });
});

module.exports = router;
