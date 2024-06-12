<template>
  <div id="app">
    <Vuex1 />
    <Vuex2 />
  </div>
</template>

<script>
import Vuex1 from "./components/Vuex1.vue";
import Vuex2 from "./components/Vuex2.vue";

export default {
  name: "App",
  components: {
    Vuex1,
    Vuex2,
  },
};
</script>

<style></style>
