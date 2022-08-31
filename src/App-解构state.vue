<template>
  <h2>orgin value : {{ Test.current }}</h2>
  <h1>pinia:{{ current }} -- {{ name }}</h1>

  <button @click="change">change</button>
</template>

<script setup lang="ts">
import { useTestStore } from "./stores/index-state";
import { storeToRefs } from "pinia";

const Test = useTestStore();

// pinia 解构不具有响应式
// const { current, name } = Test;
const { current, name } = storeToRefs(Test); //这样就具有响应式 变成了ref格式

const change = () => {
  // Test.current++;
  current.value++;
  console.log(current, name, "=====name");
};
</script>

<style lang="less" scoped></style>
