<template>
  <h1>actions-user:{{ Test.user }}</h1>
  <hr />
  <h2>actins-name : {{ Test.name }}</h2>
  <hr />
  <h3>getter:{{ Test.newName }}</h3>
  <hr />

  <button @click="change">change</button>
</template>

<script setup lang="ts">
import { useTestStore } from "./stores";

const Test = useTestStore();

const change = () => {
  Test.setUser();
};
</script>

<style lang="less" scoped></style>
