// 引入套件
const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
// 引入股票路由
const stockRoutes = require("./routes/stockRoutes");
// 讀取 .env 檔案中的環境變數
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors()); // 允許跨域請求
app.use(express.json()); // 讓 Express 能夠解析 JSON 格式的請求體

// 連接 MongoDB
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("成功連線到 MongoDB Atlas"))
  .catch((err) => console.error("連線到 MongoDB Atlas 發生錯誤:", err));

//  建立一個測試路由 (Route)
app.get("/", (req, res) => {
  res.end("後端伺服器運行中!  ");
});

// 使用股票路由，所有與股票相關的 API 都會以 /api/stocks 開頭
app.use("/api/stocks", stockRoutes);

// 啟動伺服器
app.listen(PORT, () => {
  console.log(`伺服器已啟動，正在監聽 ${PORT} 端口...`);
});
