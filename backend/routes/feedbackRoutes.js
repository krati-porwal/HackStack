const express = require("express");
const {
  giveFeedback,
  getFeedbackForUser,
} = require("../controllers/feedbackController");

const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/", protect, giveFeedback);
router.get("/:userId", getFeedbackForUser);

module.exports = router;
