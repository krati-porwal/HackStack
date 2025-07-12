const express = require("express");
const { registerUser, loginUser,
  updateUserProfile,
  searchUsersBySkill, } = require("../controllers/userController");

const { protect } = require("../middleware/authMiddleware");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("User routes working ✅");
});

router.post("/register", registerUser);
router.post("/login", loginUser);
router.patch("/profile", protect, updateUserProfile);
router.get("/search", searchUsersBySkill);

module.exports = router;
