<template>
  <div>
    <h1>测试插件里面的全局filter {{ name | mySlice }}</h1>

    <input type="text" placeholder="测试插件里面的全局指令" v-fbind="name" />

    <button @click="demo">测试用插件添加到vue原型链的方法demo</button>
  </div>
</template>

<script>
export default {
  name: "PluginsInfo",
  data() {
    return {
      name: "12345661717",
    };
  },
};
</script>

<style></style>
