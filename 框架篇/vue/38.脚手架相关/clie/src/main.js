import Vue from "vue";
import App from "./App.vue";

import plugins from "./plugins";

Vue.config.productionTip = false;

Vue.use(plugins);

new Vue({
  render: (h) => h(App),
}).$mount("#app");
