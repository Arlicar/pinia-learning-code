<template>
  <p>{{ mainStore.count }}</p>
  <p>{{ mainStore.foo }}</p>
  <p>{{ mainStore.arr }}</p>
  <p>{{ mainStore.count10 }}</p>
  <hr />
  <p>{{ count }}</p>
  <p>{{ foo }}</p>
  <p>{{ arr }}</p>
  <p><button @click="handleChangeState">修改数据</button></p>
</template>

<script lang="ts" setup>
import { storeToRefs } from "pinia";
import { useMainStore } from "../store";
const mainStore = useMainStore();
//将数据解构出来，但这是有问题的，因为这样拿到的数据不是响应式的，是一次性的
//pinia其实就是把state数据都做了reactive处理了
// const { count, foo } = mainStore;
//解决办法就是使用官方的api:storeToRefs
//把结构出来的数据做ref响应式代理
const { count, foo, arr } = storeToRefs(mainStore);
console.log(count.value);
const handleChangeState = () => {
  //方式一:最简单的方式就是这样
  // mainStore.count++;

  //方式二:如果需要修改多个数据，建议使用$patch批量更新
  // mainStore.$patch({
  //   count: mainStore.count + 1,
  //   foo: mainStore.foo + "h",
  //   arr: [...mainStore.arr, 4],
  // });

  //方式三：$patch 一个函数，更好的批量更新
  // mainStore.$patch((state) => {
  //   state.count++;
  //   state.foo = state.foo + "h";
  //   state.arr.push(4);
  // });

  // 方式四:逻辑比较多的时候可以封装到action做处理
  mainStore.changeState(10);
};
</script>

<style>
</style>