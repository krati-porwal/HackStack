const express = require("express");
const {
  createSwapRequest,
  updateSwapStatus,
  deleteSwapRequest,
  getMySwaps,
} = require("../controllers/swapController");

const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/request", protect, createSwapRequest);
router.put("/:id/status", protect, updateSwapStatus);
router.delete("/:id", protect, deleteSwapRequest);
router.get("/my", protect, getMySwaps);

module.exports = router;
