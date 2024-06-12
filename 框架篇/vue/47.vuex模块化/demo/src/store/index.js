import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import countOption from "./count";
import personOption from "./person";

export default new Vuex.Store({
  modules: {
    countAbout: countOption,
    personAbout: personOption,
  },
});
