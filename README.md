# Stock Tracker App

> 一個使用 Vue 3 作為前端、Node.js 作為後端的簡易股票追蹤應用程式。

## 專案簡介

Stock Tracker App 由前端與後端兩部分組成：
- 前端：使用 Vue 3 建立互動式使用者介面，顯示股票列表、即時價格、搜尋與篩選功能。
- 後端：使用 Node.js 提供 API 服務，從第三方股票資料來源取得資料，並處理前端請求。

此專案可作為學習 Vue 3、Node.js 與前後端分離開發的範例。

## 主要功能

- 股票列表顯示
- 搜尋股票代碼或公司名稱
- 查看股票最新價格與變化
- 前後端分離架構
- 範例 API 呼叫與資料展示

## 技術棧

- 前端：Vue 3
- 後端：Node.js
- 前後端通訊：RESTful API
- 可擴充：Express、Axios、Vue Router、Pinia 或 Vuex

## 安裝與執行

### 1. 前端

```bash
cd frontend
npm install
npm run dev
```

### 2. 後端

```bash
cd backend
npm install
npm start
```

> 注意：請根據專案實際結構調整 `frontend` 與 `backend` 資料夾名稱。

## 資料夾結構範例

```text
stock-tracker-app/
├─ backend/
│  ├─ index.js
│  ├─ package.json
│  └─ routes/
├─ frontend/
│  ├─ src/
│  │  ├─ App.vue
│  │  ├─ main.js
│  │  └─ components/
│  ├─ package.json
│  └─ vite.config.js
└─ README.md
```

## 未來擴充建議

- 加入股票資料即時更新
- 使用 WebSocket 推送價格變化
- 新增使用者收藏清單
- 提供歷史價格圖表與分析
- 加入身分驗證與使用者設定

## 聯絡方式

如需進一步協助，歡迎在專案中加入更多需求描述，我可以再幫你補上更完整的 README 或系統設計。