// 该文件是整个项目的入口文件

import App from "./App.vue";
import Vue from "vue";

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#root");
