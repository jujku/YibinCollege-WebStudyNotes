<template>
  <div id="app">
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
import About from "./components/About.vue";
import Home from "./components/Home.vue";
export default {
  name: "App",
  components: {
    About,
    Home,
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
h1 {
  text-align: center;
}
</style>
