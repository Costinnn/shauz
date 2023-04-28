const router = require("express").Router();
const User = require("../models/UserModel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

// REGISTER
router.post("/register", async (req, res) => {
  const encryptedPw = await bcrypt.hash(req.body.password, 10);

  const newUserInfo = new User({
    email: req.body.email,
    password: encryptedPw,
  });
  try {
    const createdUser = await newUserInfo.save();
    res.status(200).json(createdUser);
  } catch (err) {
    res.status(500).json(err);
  }
});

// LOGIN
router.post("/login", async (req, res) => {
  try {
    // loking for email in DB
    const user = await User.findOne({ email: req.body.email });
    !user && res.status(401).json("Wrong credentials");

    // comparing user password with password from input
    const isMatch = await bcrypt.compare(req.body.password, user.password);
    !isMatch && res.status(401).json("Wrong credentials");

    const token = jwt.sign({ user }, process.env.JWT_SECRET, {
      expiresIn: "3d",
    });

    const { password, ...others } = user._doc;

    isMatch && res.status(200).json({ ...others, token });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
