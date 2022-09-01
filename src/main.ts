import { createApp, toRaw } from "vue";
import { createPinia, type PiniaPluginContext } from "pinia";

import App from "./App.vue";
// import router from "./router";

// import "./assets/main.css";

// 存储的函数
const setStorages = (key: string, value: any) => {
  localStorage.setItem(key, JSON.stringify(value));
};

// 取的函数
const getStorages = (key: string) => {
  return localStorage.getItem(key)
    ? JSON.parse(localStorage.getItem(key) as string)
    : {};
};

type Options = {
  key?: string;
};
const __piniaKey__ = "达不溜";

// 自定义pinia持久化插件
const piniaPlugin = (options: Options) => {
  return (context: PiniaPluginContext) => {
    const { store } = context;

    const data = getStorages(`${options?.key ?? __piniaKey__}-${store.$id}`);

    store.$subscribe(() => {
      // 一有值的变化就会去执行这个函数
      // console.log(store.$state, "===原始对象");
      // console.log(toRaw(store.$state), "===普通对象");
      setStorages(
        `${options?.key ?? __piniaKey__}-${store.$id}`,
        toRaw(store.$state)
      );
    });

    console.log(store, "====store");

    return {
      ...data,
    };
  };
};

const store = createPinia();
store.use(
  piniaPlugin({
    key: "pinia",
  })
);

const app = createApp(App);

app.use(store);
// app.use(router);

app.mount("#app");
