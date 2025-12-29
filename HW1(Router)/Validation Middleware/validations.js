//Igor Nikonov, Saher Haddad 50/1
// Validate product id
const validId = (req, res, next) => {
  const { id } = req.body;
  // Check if id exists, is a number and greater than 0
  if (!id || isNaN(Number(id)) || id <= 0) res.status(400).send("Invalid id");
  else next();
};

// Validate product fields
const validProd = (req, res, next) => {
  const { name, price, stock } = req.body;
  // Validate name (must be non-numeric string)
  if (!name || Number(name)) res.status(400).send("Invalid name");
  // Validate stock (number >= 0)
  else if (!stock || isNaN(Number(stock)) || stock < 0)
    res.status(400).send("Invalid stock");
  // Validate price (number > 0)
  else if (!price || isNaN(Number(price)) || price <= 0)
    res.status(400).send("Invalid price");
  else next();
};

module.exports = { validId, validProd };
