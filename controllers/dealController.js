const Deal = require('../models/Deal');

// Create a new deal
exports.createDeal = async (req, res) => {
  try {
    const { id, title, price, category, partner } = req.body;
    
    // Check if deal with same id already exists
    const existingDeal = await Deal.findOne({ id });
    if (existingDeal) {
      return res.status(400).json({ 
        message: 'Deal with this ID already exists' 
      });
    }

    const deal = new Deal({
      id,
      title,
      price,
      category,
      partner
    });

    await deal.save();
    res.status(201).json(deal);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get all deals
exports.getAllDeals = async (req, res) => {
  try {
    const deals = await Deal.find().sort({ createdAt: -1 });
    res.json(deals);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
