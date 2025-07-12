const express = require("express");
const { registerUser, loginUser } = require("../controllers/userController");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("User routes working ✅");
});

router.post("/register", registerUser);
router.post("/login", loginUser);

module.exports = router;
