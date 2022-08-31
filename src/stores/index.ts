import { defineStore } from "pinia";
import { Names } from "./store-name";

type User = {
  name: string;
  age: number;
};

// 同步
// const result: User = {
//   name: "看电视",
//   age: 233,
// };

// 异步
const Login = (): Promise<User> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        name: "不想坐飞机",
        age: 0,
      });
    }, 2000);
  });
};

export const useTestStore = defineStore(Names.TEST, {
  state: () => ({
    user: <User>{},
    name: "害",
  }),

  // computed 修饰一些值
  // 现在getters没有缓存了
  getters: {
    newName(): string {
      return `$-${this.name}-${this.getUserAge}`;
    },
    getUserAge(): number {
      return this.user.age;
    },
  },

  // methods 可以做同步，异步也可以，提交state
  actions: {
    async setUser() {
      // this.user = result;
      const result = await Login();
      this.user = result;
      this.setName("也不想去鞍山");
    },
    setName(name: string) {
      this.name = name;
    },
  },
});
