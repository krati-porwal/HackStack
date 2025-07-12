const Swap = require("../models/Swap");

const createSwapRequest = async (req, res) => {
  const { to, offeredSkill, requestedSkill, message } = req.body;

  const swap = await Swap.create({
    from: req.user._id,
    to,
    offeredSkill,
    requestedSkill,
    message,
  });

  res.status(201).json(swap);
};

const updateSwapStatus = async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;

  const swap = await Swap.findById(id);
  if (!swap) return res.status(404).json({ message: "Swap not found" });

  if (String(swap.to) !== String(req.user._id))
    return res.status(403).json({ message: "Not authorized to update this swap" });

  swap.status = status;
  await swap.save();
  res.json(swap);
};

const deleteSwapRequest = async (req, res) => {
  const { id } = req.params;

  const swap = await Swap.findById(id);
  if (!swap) return res.status(404).json({ message: "Swap not found" });

  if (String(swap.from) !== String(req.user._id))
    return res.status(403).json({ message: "Not authorized to delete this swap" });

  await swap.deleteOne();
  res.json({ message: "Swap request deleted" });
};

const getMySwaps = async (req, res) => {
  const swaps = await Swap.find({
    $or: [{ from: req.user._id }, { to: req.user._id }],
  })
    .populate("from", "name email")
    .populate("to", "name email");

  res.json(swaps);
};

module.exports = {
  createSwapRequest,
  updateSwapStatus,
  deleteSwapRequest,
  getMySwaps,
};
