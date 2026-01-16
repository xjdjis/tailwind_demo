<template>
  <div class="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-4 md:p-8">
    <div class="max-w-7xl mx-auto">
      <!-- 头部 -->
      <header class="mb-12">
        <h1 class="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-4">
          Tailwind CSS <span class="text-primary">演示</span>
        </h1>
        <p class="text-gray-600 text-center text-lg">
          展示 Tailwind CSS 的各种基本用法和功能
        </p>
      </header>

      <!-- 网格布局 -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        <!-- 颜色演示 -->
        <div class="bg-white rounded-2xl shadow-lg p-6">
          <h2 class="text-2xl font-semibold text-gray-800 mb-4">🎨 颜色系统</h2>
          <div class="space-y-3">
            <div class="flex items-center space-x-3">
              <div class="w-8 h-8 rounded-full bg-primary color-green"></div>
              <span class="text-gray-700">primary </span>
            </div>
            <div class="flex items-center space-x-3">
              <div class="w-8 h-8 rounded-full bg-secondary color-blue"></div>
              <span class="text-gray-700">secondary</span>
            </div>
            <div class="flex items-center space-x-3">
              <div class="w-8 h-8 rounded-full bg-accent color-orange"></div>
              <span class="text-gray-700">accent </span>
            </div>
            <div class="flex items-center space-x-3">
              <div class="w-8 h-8 rounded-full bg-red-500"></div>
              <span class="text-gray-700">red-500</span>
            </div>
            <div class="flex items-center space-x-3">
              <div class="w-8 h-8 rounded-full bg-yellow-400"></div>
              <span class="text-gray-700">yellow-400</span>
            </div>
          </div>
        </div>

        <!-- 间距演示 -->
        <div class="bg-white rounded-2xl shadow-lg p-6">
          <h2 class="text-2xl font-semibold text-gray-800 mb-4">📏 间距系统</h2>
          <div class="space-y-4">
            <div class="flex items-center">
              <div class="w-1/4 text-sm text-gray-500">m-2</div>
              <div class="m-2 bg-blue-100 rounded p-2">外边距 0.5rem</div>
            </div>
            <div class="flex items-center">
              <div class="w-1/4 text-sm text-gray-500">p-4</div>
              <div class="p-4 bg-green-100 rounded">内边距 1rem</div>
            </div>
            <div class="flex items-center">
              <div class="w-1/4 text-sm text-gray-500">space-x-4</div>
              <div class="flex space-x-4">
                <div class="bg-purple-100 rounded p-2">A</div>
                <div class="bg-purple-100 rounded p-2">B</div>
                <div class="bg-purple-100 rounded p-2">C</div>
              </div>
            </div>
          </div>
        </div>

        <!-- 排版演示 -->
        <div class="bg-white rounded-2xl shadow-lg p-6">
          <h2 class="text-2xl font-semibold text-gray-800 mb-4">🔤 排版系统</h2>
          <div class="space-y-3">
            <h1 class="text-3xl font-bold text-gray-900">标题 1 (text-3xl)</h1>
            <h2 class="text-2xl font-semibold text-gray-800">标题 2 (text-2xl)</h2>
            <p class="text-lg text-gray-700">正文大号文字 (text-lg)</p>
            <p class="text-base text-gray-600">标准正文 (text-base)</p>
            <p class="text-sm text-gray-500">小号文字 (text-sm)</p>
            <p class="text-xs text-gray-400">极小文字 (text-xs)</p>
            <p class="font-mono bg-gray-100 p-2 rounded">等宽字体示例</p>
          </div>
        </div>
      </div>

      <!-- 响应式设计 -->
      <div class="bg-white rounded-2xl shadow-lg p-6 mb-12">
        <h2 class="text-2xl font-semibold text-gray-800 mb-6">📱 响应式设计</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div class="bg-blue-100 p-4 rounded-lg text-center">
            <div class="text-sm text-blue-800 mb-1">移动端</div>
            <div class="text-2xl font-bold text-blue-900">100%</div>
            <div class="text-xs text-blue-700">col-span-1</div>
          </div>
          <div class="bg-green-100 p-4 rounded-lg text-center">
            <div class="text-sm text-green-800 mb-1">平板</div>
            <div class="text-2xl font-bold text-green-900">50%</div>
            <div class="text-xs text-green-700">sm:col-span-2</div>
          </div>
          <div class="bg-purple-100 p-4 rounded-lg text-center">
            <div class="text-sm text-purple-800 mb-1">桌面</div>
            <div class="text-2xl font-bold text-purple-900">25%</div>
            <div class="text-xs text-purple-700">lg:col-span-4</div>
          </div>
          <div class="bg-yellow-100 p-4 rounded-lg text-center">
            <div class="text-sm text-yellow-800 mb-1">响应文字</div>
            <div class="text-base sm:text-lg md:text-xl font-bold text-yellow-900">
              自适应大小
            </div>
          </div>
        </div>
      </div>

      <!-- 交互状态 -->
      <div class="bg-white rounded-2xl shadow-lg p-6 mb-12">
        <h2 class="text-2xl font-semibold text-gray-800 mb-6">🎯 交互状态</h2>
        <div class="flex flex-wrap gap-4">
          <!-- hover:bg-blue-600 -->
          <button class="px-6 py-3 color-green text-white rounded-lg  
                       active:scale-95 transition-all duration-200 
                       focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
            悬停效果
          </button>
          
          <button class="px-6 py-3 color-green text-white rounded-lg 
                       hover:bg-blue-600 transition-colors duration-200">
            颜色过渡
          </button>
          
          <button class="px-6 py-3 color-green text-white rounded-lg 
                       transform hover:scale-140 transition-transform duration-200">
            缩放效果
          </button>
          
          <button class="px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-lg 
                        border-gray-300 hover:border-4 hover:border-blue-500 transition-all">
            边框变化
          </button>
        </div>
      </div>

      <!-- Flexbox 演示 -->
      <div class="bg-white rounded-2xl shadow-lg p-6 mb-12">
        <h2 class="text-2xl font-semibold text-gray-800 mb-6">📐 Flexbox 布局</h2>
        <div class="flex flex-col md:flex-row gap-6">
          <div class="flex-1">
            <h3 class="text-lg font-medium text-gray-700 mb-3">水平居中</h3>
            <div class="flex justify-center space-x-4 bg-gray-100 p-4 rounded-lg">
              <div class="w-12 h-12 bg-blue-500 rounded"></div>
              <div class="w-12 h-12 bg-green-500 rounded"></div>
              <div class="w-12 h-12 bg-purple-500 rounded"></div>
            </div>
          </div>
          <div class="flex-1">
            <h3 class="text-lg font-medium text-gray-700 mb-3">垂直居中</h3>
            <div class="flex items-center justify-between bg-gray-100 p-4 rounded-lg h-24">
              <div class="w-12 h-12 bg-red-500 rounded"></div>
              <div class="w-12 h-12 bg-yellow-500 rounded"></div>
              <div class="w-12 h-12 bg-pink-500 rounded"></div>
            </div>
          </div>
        </div>
      </div>

      <!-- 阴影与圆角 -->
      <div class="bg-white rounded-2xl shadow-lg p-6 mb-12">
        <h2 class="text-2xl font-semibold text-gray-800 mb-6">✨ 阴影与圆角</h2>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div class="p-6 color-green rounded shadow-sm text-center">
            <div class="text-sm text-gray-500 mb-2">shadow-sm</div>
            <div class="text-lg font-semibold">小阴影</div>
          </div>
          <div class="p-6 color-blue rounded-lg shadow-md text-center">
            <div class="text-sm text-gray-500 mb-2">shadow-md</div>
            <div class="text-lg font-semibold">中等阴影</div>
          </div>
          <div class="p-6 color-orange rounded-xl shadow-lg text-center">
            <div class="text-sm text-gray-500 mb-2">shadow-lg</div>
            <div class="text-lg font-semibold">大阴影</div>
          </div>
          <div class="p-6 color-green rounded-2xl shadow-xl text-center">
            <div class="text-sm text-gray-500 mb-2">shadow-xl</div>
            <div class="text-lg font-semibold">超大阴影</div>
          </div>
        </div>
      </div>

      <!-- 边框 -->
      <div class="bg-white rounded-2xl shadow-lg p-6">
        <h2 class="text-2xl font-semibold text-gray-800 mb-6">🔲 边框系统</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div class="border border-gray-300 p-4 rounded text-center">
            <div class="text-sm text-gray-500 mb-2">border</div>
            <div class="text-lg font-semibold">标准边框</div>
          </div>
          <div class="border-2 border-dashed border-primary p-4 rounded-lg text-center">
            <div class="text-sm text-gray-500 mb-2">border-2 dashed</div>
            <div class="text-lg font-semibold text-primary">虚线边框</div>
          </div>
          <div class="border-4 border-secondary p-4 rounded-full text-center">
            <div class="text-sm text-gray-500 mb-2">border-4</div>
            <div class="text-lg font-semibold">圆形边框</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped>
</style>