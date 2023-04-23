require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

// routes import
const productRoutes = require("./routes/productRoute");
const orderRoutes = require("./routes/orderRoute");

// dependencies
const app = express();
app.use(cors());
app.use(express.json());

// routes
app.use("/api/products", productRoutes);
app.use("/api/orders", orderRoutes);

// run server + DB
mongoose
  .connect(process.env.MONGO_URL)
  .then(
    app.listen(process.env.PORT, () => {
      console.log("Server is running, DB connected");
    })
  )
  .catch((err) => console.log(err));
