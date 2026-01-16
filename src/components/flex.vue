<template>
<h2>1. 基础Flex容器 + 主轴/交叉轴对齐</h2>
  <div class="demo-box" flex="dir:left main:center cross:center" style="height: 120px;">
    <div class="demo-item item1">主轴居中 + 交叉轴居中</div>
  </div>

  <h2>2. 主轴方向（left/top）</h2>
  <div class="demo-box" flex="dir:top main:between cross:start" style="height: 150px;">
    <div class="demo-item item1">主轴垂直（column）</div>
    <div class="demo-item item2">主轴两端对齐（justify-between）</div>
  </div>

  <h2>3. 主轴对齐方式</h2>
  <div class="demo-box" flex="dir:left main:left cross:center">
    <div class="demo-item item1">justify-left</div>
    <div class="demo-item item2">子项2</div>
  </div> 
    <div class="demo-box" flex="dir:left main:right cross:center">
    <div class="demo-item item1">justify-right</div>
    <div class="demo-item item2">子项2</div>
  </div>
    <div class="demo-box" flex="dir:left main:stretch cross:center">
    <div class="demo-item item1">justify-stretch</div>
    <div class="demo-item item2">子项2</div>
  </div>
    <div class="demo-box" flex="dir:left main:justify cross:center">
    <div class="demo-item item1">justify-justify</div>
    <div class="demo-item item2">子项2</div>
  </div>

  <h2>4. 交叉轴对齐方式</h2>
  <div class="demo-box" flex="dir:left main:center cross:top" style="height: 100px;">
    <div class="demo-item item1">align-top</div>
    <div class="demo-item item2">子项2</div>
  </div>
  <div class="demo-box" flex="dir:left main:center cross:bottom" style="height: 100px;">
    <div class="demo-item item1">align-bottom</div>
    <div class="demo-item item2">子项2</div>
  </div>
  <div class="demo-box" flex="dir:left main:center cross:baseline" style="height: 100px;">
    <div class="demo-item item1">align-baseline</div>
    <div class="demo-item item2">子项2</div>
  </div>
  <div class="demo-box" flex="dir:left main:center cross:center" style="height: 100px;">
    <div class="demo-item item1">align-center</div>
    <div class="demo-item item2">子项2</div>
  </div>
  <div class="demo-box" flex="dir:left main:center cross:stretch" style="height: 100px;">
    <div class="demo-item item1">align-stretch</div>
    <div class="demo-item item2">子项2</div>
  </div>

  <h2>5. 基准对齐</h2>
  <div class="demo-box" flex="dir:left main:center cross:top box:mean" style="height: 100px;">
    <div class="demo-item item1">box:mean</div>
    <div class="demo-item item2">子项2</div>
  </div>
  <div class="demo-box" flex="dir:left main:center cross:bottom box:first" style="height: 100px;">
    <div class="demo-item item1">box:first</div>
    <div class="demo-item item2">子项2</div>
  </div>
  <div class="demo-box" flex="dir:left main:center cross:baseline box:last" style="height: 100px;">
    <div class="demo-item item1">box:last</div>
    <div class="demo-item item2">子项2</div>
  </div>
  <div class="demo-box" flex="dir:left main:center cross:center box:justify" style="height: 100px;">
    <div class="demo-item item1">box:justify</div>
    <div class="demo-item item2">子项2</div>
  </div>


</template>
<style scoped>
    .demo-box { border: 1px solid #ddd; padding: 10px; margin: 15px 0; }
    .demo-item { padding: 8px; color: #fff; text-align: center; }
    .item1 { background: #42b983; }
    .item2 { background: #3498db; }
    .item3 { background: #e74c3c; }
    .item4 { background: #f39c12; }
</style>