const User = require("../models/User");
const bcrypt = require("bcryptjs");
const generateToken = require("../utils/generateToken");

const registerUser = async (req, res) => {
  const { name, email, password } = req.body;

  const userExists = await User.findOne({ email });
  if (userExists) return res.status(400).json({ message: "User already exists" });

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await User.create({
    name,
    email,
    password: hashedPassword,
  });

  res.status(201).json({
    token: generateToken(user._id),
    user: {
      _id: user._id,
      name: user.name,
      email: user.email,
    },
  });
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (!user) return res.status(401).json({ message: "Invalid email" });

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) return res.status(401).json({ message: "Invalid password" });

  res.json({
    token: generateToken(user._id),
    user: {
      _id: user._id,
      name: user.name,
      email: user.email,
    },
  });
};

const updateUserProfile = async (req, res) => {
  const user = await User.findById(req.user._id);
  if (!user) return res.status(404).json({ message: "User not found" });

  const {
    name,
    location,
    profilePhoto,
    skillsOffered,
    skillsWanted,
    availability,
    isPrivate,
  } = req.body;

  user.name = name || user.name;
  user.location = location || user.location;
  user.profilePhoto = profilePhoto || user.profilePhoto;
  user.skillsOffered = skillsOffered || user.skillsOffered;
  user.skillsWanted = skillsWanted || user.skillsWanted;
  user.availability = availability || user.availability;
  user.isPrivate = isPrivate ?? user.isPrivate;

  const updatedUser = await user.save();
  res.json(updatedUser);
};

const searchUsersBySkill = async (req, res) => {
  const query = req.query.q;
  if (!query) return res.status(400).json({ message: "Missing search keyword" });

  const users = await User.find({
    isPrivate: false,
    $or: [
      { skillsOffered: { $regex: query, $options: "i" } },
      { skillsWanted: { $regex: query, $options: "i" } },
    ],
  }).select("-password");

  res.json(users);
};

module.exports = { registerUser, loginUser, updateUserProfile,
  searchUsersBySkill };
