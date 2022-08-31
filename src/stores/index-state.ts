import { defineStore } from "pinia";
import { Names } from "./store-name";

export const useTestStore = defineStore(Names.TEST, {
  // state:{} //store 里面是对象而pinia不是,是箭头函数

  // state: () => {
  //   return {
  //     current: 1,
  //     name: "达不溜",
  //   };
  // },
  state: () => ({
    current: 1,
    name: "达不溜",
  }),

  // computed 修饰一些值
  // 现在getters没有缓存了
  getters: {},

  // methods 可以做同步，异步也可以，提交state
  actions: {
    setCurrent(num: number) {
      // 不能写箭头函数，写了箭头函数this指向不对
      this.current = num;
    },
  },
});
