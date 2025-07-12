const Feedback = require("../models/Feedback");

const giveFeedback = async (req, res) => {
  const { to, rating, comment } = req.body;

  const feedback = await Feedback.create({
    from: req.user._id,
    to,
    rating,
    comment,
  });

  res.status(201).json(feedback);
};

const getFeedbackForUser = async (req, res) => {
  const { userId } = req.params;

  const feedbacks = await Feedback.find({ to: userId })
    .populate("from", "name email")
    .sort({ createdAt: -1 });

  res.json(feedbacks);
};

module.exports = { giveFeedback, getFeedbackForUser };
