import axios from "axios";
import { nanoid } from "nanoid";

export default {
  namespaced: true,
  actions: {
    addPersonWang(context, value) {
      if (value.name.indexOf("王") === 0) {
        context.commit("ADD_PERSON", value);
      }
    },
    //从服务器请求数据 在actions
    addPersonServe(context) {
      axios.get("http://localhost:9090/demo/hello").then((response) => {
        context.commit("ADD_PERSON", { id: nanoid(), name: response.data });
      });
    },
  },
  mutations: {
    ADD_PERSON(state, value) {
      state.persons.unshift(value);
    },
  },
  state: {
    persons: [{ id: "001", name: "jujku" }],
  },

  getters: {
    firstPersonName(state) {
      return state.personList[0].name;
    },
  },
};
