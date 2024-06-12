import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

// 类似于java中的service
const actions = {
  jia(context, value) {
    context.commit("JIA", value);
  },
  //   如果业务层只有调用持久层，那么可以不写业务层，在组件调用的时候直接调用持久层
  jiaOdd(context, value) {
    if (state.num % 2 != 0) {
      console.log(value % 2);
      context.commit("JIA", value);
    }
  },
  jiaWait(context, value) {
    setTimeout(() => {
      context.commit("JIA", value);
    }, 500);
  },
};
//蕾仕于java中的持久层
const mutations = {
  JIA(state, value) {
    state.num += value;
  },
  JIAN(state, value) {
    state.num -= value;
  },
};

const state = {
  num: 0,
};

export default new Vuex.Store({
  actions,
  mutations,
  state,
  // key value相同的时候 es6语法简写
});
