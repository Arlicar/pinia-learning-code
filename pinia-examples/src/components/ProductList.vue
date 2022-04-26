<template>
  <ul>
    <li v-for="item in productsStore.all" :key="item">
      {{ item.title }} - {{ item.price }}
      <br />
      <button
        @click="cartStore.addProductToCart(item)"
        :disabled="!item.inventory"
      >
        添加到购物车
      </button>
    </li>
  </ul>
</template>

<script setup lang="ts">
import { useProductsStore } from "../store/products";
import { useCartStore } from "../store/cart";

const productsStore = useProductsStore();
const cartStore = useCartStore();
//加载数据
productsStore.loadAllProducts();
</script>

<style>
</style>