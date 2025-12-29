//Igor Nikonov, Saher Haddad 50/1
const express = require("express");
const router = express.Router();
const data = require("../Data/data");
const { validId, validProd } = require("../Validation Middleware/validations");
let products = data.products;

// GET api/products
// Send all products
router.get("/", (req, res) => {
  res.status(200).json(products);
});

// POST api/products
// Add a new product (with validations)
router.post("/", validId, validProd, (req, res) => {
  const { id, name, price, stock } = req.body;

  // Check if product with same id already exists
  const isExists = products.find((el) => el.id == id);

  if (!isExists) {
    // Add new product to array
    products.push({
      id: Number(id),
      name: name,
      price: Number(price),
      stock: Number(stock),
    });
    res.status(201).send("Product added successfully");
  } else {
    res.status(400).send("Product with same id already exists");
  }
});

// GET api/products/:id
// Get single product by id
router.get("/:id", (req, res) => {
  const { id } = req.params;
  // Find product by id
  const prod = products.find((el) => el.id == Number(id));
  if (prod) {
    res.status(200).send(prod);
  } else {
    res.status(404).send("Item not found");
  }
});

// PUT api/products/:id
// Update product by id
router.put("/:id", validProd, (req, res) => {
  const { id } = req.params;
  const { name, price, stock } = req.body;
  // Find product to update
  const requireProd = products.find((el) => el.id == Number(id));
  if (requireProd) {
    // Update product fields
    requireProd.name = name;
    requireProd.price = Number(price);
    requireProd.stock = Number(stock);
    res.status(200).send("Item updated successfully");
  } else {
    res.status(404).send("Item not found");
  }
});

// DELETE api/products/:id
// Delete product by id
router.delete("/:id", (req, res) => {
  const { id } = req.params;
  // Find product index
  const index = products.findIndex((el) => el.id == Number(id));
  if (index != -1) {
    // Remove product from array
    products.splice(index, 1);
    res.status(200).send("Item Deleted successfully");
  } else {
    res.status(404).send("Item not found");
  }
});

module.exports = router;
