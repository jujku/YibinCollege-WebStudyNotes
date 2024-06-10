<template>
  <div class="container">
    <h1 class="title">{{ title }}</h1>
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "Slot1",
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
