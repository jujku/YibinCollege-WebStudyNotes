export default {
  namespaced: true,
  actions: {
    jiaOdd(context, value) {
      if (context.state.sum % 2 != 0) {
        console.log(value % 2);
        context.commit("JIA", value);
      }
    },
    jiaWait(context, value) {
      setTimeout(() => {
        context.commit("JIA", value);
      }, 500);
    },
  },
  mutations: {
    JIA(state, value) {
      console.log(state.sum, value);
      console.log(typeof state.sum, typeof value);
      state.sum += value;
    },
    JIAN(state, value) {
      state.sum -= value;
    },

    ADD_PERSON(state, value) {
      state.persons.unshift(value);
    },
  },

  state: {
    sum: 0,
    name: "jujku",
    item: "钻石",
  },

  getters: {
    bigNum(state) {
      return state.sum * 10;
    },
  },
};
