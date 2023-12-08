const data = {};
data.products = require("../model/products.json");

const getAllProducts = (req, res) => {
  res.json(data.products);
};

const createNewProduct = (req, res) => {
  res.json({
    productName: req.body.productName,
    category: req.body.category,
  });
};

const updateProduct = (req, res) => {
  res.json({
    productName: req.body.productName,
    category: req.body.category,
  });
};

const deleteProduct = (req, res) => {
  res.json({
    id: req.body.id,
  });
};

module.exports = {
  getAllProducts,
  createNewProduct,
  updateProduct,
  deleteProduct
};
