<template>
  <div id="app">
    <PluginsInfo></PluginsInfo>
  </div>
</template>

<script>
import PluginsInfo from "./components/PluginsInfo.vue";

export default {
  name: "App",
  components: {
    PluginsInfo,
  },
  methods: {
    // ref就是dom操作中的id 不过加在组件时调用的是组件实例
  },
};
</script>

<style></style>
