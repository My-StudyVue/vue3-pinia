<template>
  <h1>actions-user:{{ Test.user }}</h1>
  <hr />
  <h2>actins-name : {{ Test.name }}</h2>
  <hr />
  <h3>getter:{{ Test.newName }}</h3>
  <hr />

  <button @click="change">change</button>
  <p>
    <button @click="reset">reset</button>
  </p>
</template>

<script setup lang="ts">
import { useTestStore } from "./stores";

const Test = useTestStore();

// 监听store变化的函数
Test.$subscribe(
  (args, state) => {
    console.log("======", args);
    console.log("xxxxxx", state);
    // });
  },
  {
    detached: true, //保持鲜活，即使组件销毁也存在
    deep: true,
    flush: "post",
  }
);

// 监听action，一旦被调用就会被监听
Test.$onAction((args) => {
  args.after(() => {
    console.log(args, "==========args2222");
  });
  console.log(args, "==========args1111");

  // {
  //   after: ƒ after(callback), // watchEffect 之后调用的
  //   args: ["也不想去鞍山"], // 参数
  //   name: "setName", //被调用action名字
  //   onError: ƒ onError(callback), //失败调用的函数
  //   store: { // store实例
  //     $id: "TEST",
  //     user: {
  //       name: "不想坐飞机",
  //       age: 0,
  //     },
  //     name: "也不想去鞍山",
  //     newName: "$-也不想去鞍山-0",
  //     getUserAge: 0,
  //     _isOptionsAPI: true,
  //   },
  // };
});
// }, true); //保持鲜活，即使组件销毁也存在

const change = () => {
  Test.setUser();
};

const reset = () => {
  Test.$reset();
};
</script>

<style lang="less" scoped></style>
