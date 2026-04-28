const mongoose = require("mongoose");

const StockSchema = new mongoose.Schema({
  symbol: { type: String, required: true, uppercase: true }, // 股票代碼，必填且轉為大寫
  name: { type: String, required: true }, // 股票名稱，必填
  targetPrice: { type: Number, default: 0 }, // 目標價格，預設為 0
  noted: { type: String }, // 備註，非必填
  createdAt: { type: Date, default: Date.now }, // 建立時間，預設為當前時間
});

module.exports = mongoose.nodel("Stock", StockSchema);
