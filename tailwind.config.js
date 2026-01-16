// /** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
      // 核心：添加主题色配置
      colors: {
        primary: '#165DFF',
        secondary: '#6B7280',
        success: '#10B981',
        warning: '#F59E0B', 
        danger: '#EF4444'
      }
  },
  darkMode: 'class',
  plugins: [],
}