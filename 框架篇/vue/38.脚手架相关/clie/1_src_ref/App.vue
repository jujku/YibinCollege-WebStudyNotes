<template>
  <div id="app" ref="app2">
    <input type="text" value="qwe" ref="input" />
    <ref-info ref="info"></ref-info>
    <button @click="ShowInfo">click</button>
  </div>
</template>

<script>
import RefInfo from "./components/RefInfo.vue";

export default {
  name: "App",
  components: {
    RefInfo,
  },
  methods: {
    // ref就是dom操作中的id 不过加在组件时调用的是组件实例
    ShowInfo() {
      console.log(this.$refs);
      console.log(this.$refs.input.value);
      console.log(this.$refs.info.$refs.h2.innerHTML);
    },
  },
};
</script>

<style></style>
