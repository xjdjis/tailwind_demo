<script setup>
</script>

<template>
  <div class="btn-group">
    <button class="btn" ><router-link to="/">tailwindcss</router-link></button>
    <button class="btn" ><router-link to="/flex">flexcss</router-link></button>
    <button class="btn" ><router-link to="/cbe">combine</router-link></button>
  </div>
  <div>
    <router-view />
  </div>
</template>

<style scoped>
  .btn-group  {
    display: flex;
    justify-content: space-around;
  }
  .btn {
    width: 100px;
    height: 50px;
    margin: 10px;
    background-color: #695feb;
    border-radius: 10px;
  }
</style>
