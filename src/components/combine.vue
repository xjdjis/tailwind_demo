<template>
  <div class="p-6 space-y-8">
    <!-- ====================================== -->
    <!-- ✅ 场景1：完美配合【无冲突 开发首选】flex=""布局 + Tailwind样式 各司其职 -->
    <!-- ====================================== -->
    <div>
      <h3 class="text-xl font-bold text-gray-800 mb-3">✅ 场景1：最优写法 - flex.css属性式 + Tailwind 无任何冲突</h3>
      <p class="text-gray-600 mb-3">✅ flex="属性" 写所有flex布局规则<br>✅ class="" 写所有样式（宽高/间距/背景/圆角/响应式等）</p>

      <!-- ✨ 写法1：水平布局 两端对齐+垂直居中 最常用【导航栏/头部布局】 -->
      <div flex="dir:left main:justify cross:center" class="w-full h-20 bg-gray-100 p-4 rounded-lg mb-4">
        <div class="demo-item">子1</div>
        <div class="demo-item">子2</div>
        <div class="demo-item">子3</div>
      </div>

      <!-- ✨ 写法2: flex="dir:left main:center cross:stretch" 水平居中+子元素拉伸等高 -->
      <div flex="dir:left main:center cross:stretch" class="w-full h-20 bg-gray-100 p-4 rounded-lg mb-4">
        <div class="demo-item">拉伸1</div>
        <div class="demo-item">拉伸2</div>
      </div>

      <!-- ✨ 写法3：万能居中 → flex="dir:left main:center cross:center" 水平+垂直居中 -->
      <div flex="dir:left main:center cross:center" class="w-full h-20 bg-gray-100 p-4 rounded-lg mb-4">
        <div class="demo-item">居中</div>
      </div>

      <!-- ✨ 写法4：垂直布局 → flex="dir:top main:justify cross:center" 上下两端对齐+水平居中 -->
      <div flex="dir:top main:justify cross:center" class="w-full h-[220px] bg-gray-100 p-4 rounded-lg">
        <div class="demo-item">上</div>
        <div class="demo-item">下</div>
      </div>
    </div>

    <!-- ====================================== -->
    <!-- ❌ 场景2：核心冲突案例【flex.css属性式写法的冲突，开发必避坑】 -->
    <!-- ====================================== -->
    <div>
      <h3 class="text-xl font-bold text-red-600 mb-3">❌ 场景2：flex.css 与 Tailwind 布局冲突演示</h3>
      <p class="text-red-500 mb-3">冲突本质：同一容器同时用 flex=""(flex.css布局) + Tailwind flex类(flex布局) → 重复赋值flex属性</p>

      <!-- ⚠️ 冲突1：flex.css指定垂直布局 vs Tailwind指定水平布局 -->
      <div 
        flex="dir:top main:center cross:center" 
        class="flex flex-row w-full h-[200px] bg-red-50 p-4 rounded-lg mb-4 border border-red-200"
      >
        <div class="demo-item">冲突1</div>
        <div class="demo-item">冲突2</div>
      </div>
      <p class="text-sm text-gray-600">▸ 冲突表现：flex.css要求垂直排列（dir:top），Tailwind要求水平排列（flex-row）→ 最终以优先级高的样式为准</p>

      <!-- ⚠️ 冲突2：flex.css指定左对齐 vs Tailwind指定水平居中 -->
      <div 
        flex="dir:left main:left cross:center" 
        class="flex justify-center w-full h-20 bg-red-50 p-4 rounded-lg border border-red-200"
      >
        <div class="demo-item">冲突左</div>
        <div class="demo-item">冲突右</div>
      </div>
      <p class="text-sm text-gray-600">▸ 冲突表现：flex.css要求左对齐（main:left），Tailwind要求居中（justify-center）→ 最终以优先级高的样式为准</p>
    </div>

    <!-- ====================================== -->
    <!-- ✅ 场景3：冲突解决方案【3套方案 按优先级排序，全部可用】 -->
    <!-- ====================================== -->
    <div>
      <h3 class="text-xl font-bold text-green-600 mb-3">✅ 场景3：冲突解决方案（优先级从高到低）</h3>
      
      <!-- ✅ 方案1：【首选 永不冲突】严格分工 → flex=""只写布局，class只写样式 -->
      <div class="mb-4">
        <p class="font-medium mb-2">✨ 方案1：flex="布局规则" + class="纯样式类" 【彻底解决，推荐】</p>
        <div flex="dir:left main:center cross:center" class="w-full h-20 bg-gray-50 p-4 rounded-lg">
          <div class="demo-item">无冲突最优解</div>
        </div>
      </div>

      <!-- ✅ 方案2：【应急方案】Tailwind强制优先级覆盖 -->
      <div class="mb-4">
        <p class="font-medium mb-2">✨ 方案2：Tailwind 加 ! 强制优先级 覆盖 flex.css 布局</p>
        <div 
          flex="dir:top main:center cross:center" 
          class="flex !flex-row w-full h-20 bg-gray-50 p-4 rounded-lg"
        >
          <div class="demo-item">强制水平</div>
          <div class="demo-item">优先级覆盖</div>
        </div>
      </div>

      <!-- ✅ 方案3：【备选方案】只使用flex.css布局，放弃Tailwind布局类 -->
      <div>
        <p class="font-medium mb-2">✨ 方案3：纯flex.css布局，不写Tailwind布局类</p>
        <div flex="dir:left main:justify cross:center" class="w-full h-20 bg-gray-50 p-4 rounded-lg">
          <div class="demo-item">纯flex.css布局</div>
          <div class="demo-item">无Tailwind冲突</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.demo-item {
  width: 80px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  background: #42b983;
  color: white;
  border-radius: 4px;
  margin: 0 4px;
}
</style>