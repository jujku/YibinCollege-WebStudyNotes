<template>
  <div id="app">
    <Banner />
    <div class="router">
      <router-link to="/about" active-class="active"
        >about(router-link)</router-link
      >
      <router-link to="/home" active-class="active"
        >home(router-link)</router-link
      >
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import About from "./pages/About.vue";
import Home from "./pages/Home.vue";
import Banner from "./components/Banner.vue";
import News from "./pages/News.vue";
import Message from "./pages/Message.vue";

export default {
  name: "App",
  components: {
    About,
    Home,
    Banner,
    News,
    Message,
  },
};
</script>

<style>
.router {
  display: flex;
  justify-content: space-around;
}
.active {
  font-weight: bold;
  color: red;
}
h1,
p {
  text-align: center;
}
</style>
