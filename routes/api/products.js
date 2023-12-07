const express = require("express");
const router = express.Router();
const data = {};
data.products = require("../../data/products.json");

router
  .route("/")
  .get((req, res) => {
    res.json(data.products);
  })
  .post((req, res) => {
    res.json({
      productName: req.body.productName,
      category: req.body.category,
    });
  })
  .put((req, res) => {
    res.json({
      productName: req.body.productName,
      category: req.body.category,
    });
  })
  .delete((req, res) => {
    res.json({
      id: req.body.id,
    });
  });

router.route("/:id").get((req, res) => {
  const productId = req.params.id;
  const findProduct = data.products.find((item)=> item.id === Number(productId))
  res.json(findProduct);
});

module.exports = router;
