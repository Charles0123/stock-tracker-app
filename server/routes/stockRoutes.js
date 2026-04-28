const express = require("express");
const router = express.Router();
const Stock = require("../models/Stock"); // 引入 Stock 模型

// 1. Get all stocks
router.get("/", async (req, res) => {
  try {
    const stocks = await Stock.find().sort({ createdAt: -1 }); // 依照建立時間排序，最新的在前面
    res.json(stocks);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// 2. POST a new stock
router.post("/", async (req, res) => {
  const stock = new Stock({
    symbol: req.body.symbol,
    name: req.body.name,
    targetPrice: req.body.targetPrice,
    noted: req.body.noted,
  });
  try {
    const newStock = await stock.save();
    res.status(201).json(newStock);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// 3. Delete a stock by ID
router.delete("/:id", async (req, res) => {
  try {
    await Stock.findByIdAndDelete(req.params.id);
    res.json({ message: "Stock deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
