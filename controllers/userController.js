const User = require("../models/User");

// Create a new user
exports.createUser = async (req, res) => {
  try {
    const { id, name, email } = req.body;

    const existingUser = await User.findOne({ $or: [{ id }, { email }] });
    if (existingUser) {
      return res.status(400).json({
        message: "User with this ID or email already exists",
      });
    }

    const user = new User({
      id,
      name,
      email,
      walletBalance: 100, 
    });

    await user.save();
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get user by ID
exports.getUser = async (req, res) => {
  try {
    const user = await User.findOne({ id: req.params.id });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Claim a deal
exports.claimDeal = async (req, res) => {
  try {
    const { userId, dealId } = req.params;

    const user = await User.findOne({ id: userId });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const deal = await require("../models/Deal").findOne({ id: dealId });
    if (!deal) {
      return res.status(404).json({ message: "Deal not found" });
    }

    if (user.walletBalance < deal.price) {
      return res.status(400).json({
        message: "Insufficient wallet balance",
      });
    }
    user.walletBalance -= deal.price;
    await user.save();

    res.json({
      message: "Deal claimed successfully",
      remainingBalance: user.walletBalance,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
