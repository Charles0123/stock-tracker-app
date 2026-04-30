<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'

// 狀態定義
const stocks = ref([])
const newStock = ref({ symbol: '', name: '', targetPrice: 0, notes: '' })

// 取得所有股票
const fetchStocks = async () => {
  try {
    const response = await axios.get('http://localhost:3000/api/stocks')
    stocks.value = response.data
  } catch (error) {
    console.error('抓取資料失敗:', error)
  }
}

// 新增股票
const addStock = async () => {
  try {
    await axios.post('http://localhost:3000/api/stocks', newStock.value)
    fetchStocks() // 重新刷新清單
    newStock.value = { symbol: '', name: '', targetPrice: 0, notes: '' } // 清空表單
  } catch (error) {
    alert('新增失敗')
  }
}

onMounted(() => {
  fetchStocks()
})
</script>

<template>
  <!-- 背景灰色、最小高度滿版、內距 p-8 -->
  <div class="min-h-screen bg-gray-100 p-8">
    <!-- 白色卡片、置中、圓角、陰影 -->
    <div class="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-6">
      <h1 class="text-3xl font-bold text-blue-600 mb-8 border-b pb-4">
        📈 股票追蹤系統
      </h1>

      <!-- 表單區：使用 Flex 或 Grid 排版 -->
      <div class="flex flex-wrap gap-3 mb-10">
        <input v-model="newStock.symbol" placeholder="代號" 
          class="border border-gray-300 p-2 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none flex-1" />
        <input v-model="newStock.name" placeholder="名稱" 
          class="border border-gray-300 p-2 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none flex-1" />
        <input v-model.number="newStock.targetPrice" type="number" placeholder="目標價" 
          class="border border-gray-300 p-2 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none w-32" />
        <button @click="addStock" 
          class="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition duration-300 shadow-md">
          新增追蹤
        </button>
      </div>

      <!-- 資料列表 -->
      <div class="space-y-4">
        <div v-for="stock in stocks" :key="stock._id" 
          class="flex justify-between items-center p-4 bg-gray-50 rounded-lg hover:shadow-sm transition">
          <div>
            <span class="text-lg font-mono font-bold text-gray-700">{{ stock.symbol }}</span>
            <span class="ml-3 text-gray-500">{{ stock.name }}</span>
          </div>
          <div class="flex items-center gap-6">
            <span class="font-semibold text-green-600">${{ stock.targetPrice }}</span>
            <!-- 這裡可以順便練習刪除功能 -->
            <button @click="deleteStock(stock._id)" class="text-red-400 hover:text-red-600">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="Stack 19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      <!-- 如果沒資料時顯示 -->
      <p v-if="stocks.length === 0" class="text-center text-gray-400 mt-10">
        目前清單空空如也，快新增一檔標的吧！
      </p>
    </div>
  </div>
</template>