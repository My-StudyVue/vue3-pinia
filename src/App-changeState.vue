<!--  -->
<template>
  <h1>pinia:{{ Test.current }} -- {{ Test.name }}</h1>

  <button @click="change">change</button>
</template>

<script setup lang="ts">
import { useTestStore } from "./stores";

const Test = useTestStore();

// 更改state一般常用第三种方式
const change = () => {
  // 1.直接修改（违背了单项数据流，不推荐修改）
  // Test.current++;

  // 2.根据$patch 用对象直接修改
  // Test.$patch({
  //   current: 888,
  //   name: "瓜圈",
  // });

  // 3.根据$patch 用函数逻辑判断等进行修改
  // Test.$patch((state) => {
  //   state.current++;
  //   state.name = "瓜娃子";
  // });

  // 4.根据$state 修改整个state,所有参数必穿
  // Test.$state = {
  //   current: 7000,
  //   name: "憨憨",
  // }; // 不常用

  // 5.配合action修改state
  // Test.setCurrent();
  Test.setCurrent(666);
};
</script>

<style lang="less" scoped></style>
