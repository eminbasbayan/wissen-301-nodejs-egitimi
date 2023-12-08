const express = require("express");
const router = express.Router();
const productsController = require("../../controllers/productsController");

router
  .route("/")
  .get(productsController.getAllProducts)
  .post(productsController.createNewProduct)
  .put(productsController.updateProduct)
  .delete(productsController.deleteProduct);

router.route("/:id").get((req, res) => {
  const productId = req.params.id;
  const findProduct = data.products.find(
    (item) => item.id === Number(productId)
  );
  res.json(findProduct);
});

module.exports = router;
