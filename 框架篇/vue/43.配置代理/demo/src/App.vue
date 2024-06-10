<template>
  <div id="app">
    <Proxy1 />
    <Proxy2 />
  </div>
</template>

<script>
import Proxy1 from "./components/Proxy1.vue";
import Proxy2 from "./components/Proxy2.vue";

export default {
  name: "App",
  components: {
    Proxy1,
    Proxy2,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
