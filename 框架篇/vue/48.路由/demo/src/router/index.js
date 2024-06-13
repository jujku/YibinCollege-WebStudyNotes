import VueRouter from "vue-router";
import About from "../pages/About.vue";
import Home from "../pages/Home.vue";
import News from "../pages/News.vue";
import Message from "../pages/Message.vue";

export default new VueRouter({
  routes: [
    {
      path: "/about",
      component: About,
      children: [
        {
          path: "news",
          component: News,
        },
        { path: "message", component: Message },
      ],
    },
    {
      path: "/home",
      component: Home,
    },
  ],
});
