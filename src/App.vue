<template>
  <h1>Tesr-user:{{ Test.user }}</h1>
  <hr />
  <h2>U-name : {{ Base.baseCurrent }}</h2>
  <hr />

  <button @click="change">change</button>
  <hr />
  <p>
    <button @click="chengeU">chengeU</button>
  </p>
  <hr />
</template>

<script setup lang="ts">
import { useTestStore, UserStore } from "./stores";

const Test = useTestStore();
const Base = UserStore();

const change = () => {
  Test.setUser();
};

const chengeU = () => {
  Base.baseCurrent++;
};
</script>

<style lang="less" scoped></style>
