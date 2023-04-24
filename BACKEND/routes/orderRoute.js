const router = require("express").Router();
const Order = require("../models/OrderModel");

//GET
router.get("/getorders", async (req, res) => {
  try {
    const orders = await Order.find();
    res.status(200).json(orders);
  } catch (err) {
    res.status(500).json(err);
  }
});

//CREATE
router.post("/createorder", async (req, res) => {
  const newOrder = new Order(req.body);
  try {
    const savedOrder = await newOrder.save();
    res.status(200).json(savedOrder);
  } catch (err) {
    res.status(500).json(err);
  }
});

//UPDATE SHIPPING STATUS
router.patch("/updateshipping/:id", async (req, res) => {
  try {
    const response = await Order.findByIdAndUpdate(
      req.params.id,
      {
        $set: { isShipped: true },
      },
      { new: true }
    );

    res.status(200).json(response);
  } catch (err) {
    res.status(500).json(err);
  }
});

//DELETE
router.delete("/deleteorder/:id", async (req, res) => {
  try {
    await Order.findByIdAndDelete(req.params.id);
    res.status(200).json("Order deleted...");
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
