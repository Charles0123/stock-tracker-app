const exporess = require("express");
const router = exporess.Router();
const Stock = require("../models/Stock"); // 引入 Stock 模型

// 1. Get all stocks
router.get("/", async (req, res) => {
  try {
    const stocks = await Stock.fint().sort({ createAt: -1 }); // 依照建立時間排序，最新的在前面
    res.json(stocks);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// 2. POST a new stock
router.post("/", async (req, res) => {
  const stock = new Stock({
    synbol: req.body.synbol,
    name: req.body.name,
    tartgetPrice: req.body.targetPrice,
    notes: req.body.notes,
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
