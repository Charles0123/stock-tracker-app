/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}", // 確保這行有包含 .vue 檔案
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
