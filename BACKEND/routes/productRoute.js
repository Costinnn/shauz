const router = require("express").Router();
const Product = require("../models/ProductModel");
const { tokenVerify } = require("../routes/tokenVerify");

//GET
router.get("/getproducts", async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (err) {
    res.status(500).json(err);
  }
});

//CREATE
router.post("/createproduct", tokenVerify, async (req, res) => {
  const newProduct = new Product(req.body);
  try {
    const savedProduct = await newProduct.save();
    res.status(200).json(savedProduct);
  } catch (err) {
    res.status(500).json(err);
  }
});

//DELETE
router.delete("/deleteproduct/:id", tokenVerify, async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.status(200).json("Product has been deleted...");
  } catch (err) {
    res.status(500).json(err);
  }
});

//UPDATE TITLE / DESC / PRICE / OLDPRICE / SALE - VALUES
router.patch("/update-value/:id", tokenVerify, async (req, res) => {
  try {
    const response = await Product.findByIdAndUpdate(
      req.params.id,
      {
        $set: { [`${req.body.field}`]: req.body.newValue },
      },
      { new: true }
    );

    res.status(200).json(response);
  } catch (err) {
    res.status(500).json(err);
  }
});

//UPDATE SIZE VALUES
router.patch("/update-size/:id", tokenVerify, async (req, res) => {
  try {
    const response = await Product.findByIdAndUpdate(
      req.params.id,
      {
        $set: { [`stockQ.${req.body.sizeToChange}`]: req.body.newValue },
      },
      { new: true }
    );

    res.status(200).json(response);
  } catch (err) {
    res.status(500).json(err);
  }
});

//UPDATE ORDERED PRODUCTS stock
router.patch("/update-ordered-products-stock", async (req, res) => {
  try {
    let count = 0;
    for await (const item of req.body.shippedProducts) {
      const response = await Product.findByIdAndUpdate(
        item._id,
        {
          $inc: { [`stockQ.${item.orderedSize}`]: -item.orderedQ },
        },
        { new: true }
      );
      if (response.title) {
        count++;
      } else {
        throw new Error("Could not update stock of ordered products.");
      }
    }

    res.status(200).json(`${count} ordered products stock updated!`);
  } catch (err) {
    res.status(500).json(err);
  }
});

// ADD IMAGES LIST / CATEGORIES - ITEMS
router.patch("/add-arrayitem/:id", tokenVerify, async (req, res) => {
  try {
    const response = await Product.findByIdAndUpdate(
      req.params.id,
      {
        $push: {
          [req.body.field]: {
            $each: [`${req.body.stringToAdd}`],
            $position: req.body.position,
          },
        },
      },
      { new: true }
    );

    res.status(200).json(response);
  } catch (err) {
    res.status(500).json(err);
  }
});

// DELETE IMAGES LIST / CATEGORIES - ITEMS
router.patch("/delete-arrayitem/:id", tokenVerify, async (req, res) => {
  try {
    const response = await Product.findByIdAndUpdate(
      req.params.id,
      {
        $pull: { [req.body.field]: { $in: [`${req.body.stringToDelete}`] } },
      },
      { new: true }
    );

    res.status(200).json(response);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
