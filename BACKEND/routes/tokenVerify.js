const jwt = require("jsonwebtoken");

const tokenVerify = (req, res, next) => {
  // console.log(req.headers.token);
  if (req.headers.token) {
    try {
      const user = jwt.verify(req.headers.token, process.env.JWT_SECRET);
      if (user && user.user.isAuthorized) {
        next();
      } else {
        res.status(403).json("Not authorized!");
      }
    } catch (err) {
      res.status(403).json("Token is not valid!");
    }
  } else {
    return res.status(401).json("You are not authenticated!");
  }
};

module.exports = { tokenVerify };
