<template>
  <div>
    <!-- <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" /> -->
    <h1>pinia - 购物车示例</h1>
    <hr />
    <h2>商品列表</h2>
    <ProductList></ProductList>
    <hr />
    <ShoppingCart></ShoppingCart>
  </div>
</template>

<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
// import HelloWorld from './components/HelloWorld.vue'
import ProductList from "./components/ProductList.vue";
import ShoppingCart from "./components/ShoppingCart.vue";
</script>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
