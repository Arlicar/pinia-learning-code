<template>
  <div class="cart">
    <h2>你的购物车</h2>
    <p>
      <i>请添加到一些商品到购物车</i>
    </p>
    <ul>
      <li v-for="item in cartStore.cartProducts" :key="item">
        {{ item.title }} - {{ item.price }} x {{ item.quantity }}
      </li>
    </ul>
    <p>商品总价: {{ cartStore.totalPrice }}</p>
    <p>
      <button @click="cartStore.checkout">结算</button>
    </p>
    <p v-if="cartStore.checkOutStatus">结算{{ cartStore.checkOutStatus }}</p>
  </div>
</template>

<script setup lang = "ts">
import { useCartStore } from "../store/cart";

const cartStore = useCartStore();
</script>

<style>
</style>