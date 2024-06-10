<template>
  <!-- 具名插槽 -->
  <div class="container">
    <h1 class="title">{{ title }}</h1>
    <slot name="center"></slot>
    <slot name="footer"></slot>
  </div>
</template>
<script>
export default {
  name: "Slot2",
  props: ["title"],
};
</script>
<style scoped>
.container {
  width: 300px;
  height: 400px;
  background-color: aqua;
}
.title {
  text-align: center;
}
</style>
