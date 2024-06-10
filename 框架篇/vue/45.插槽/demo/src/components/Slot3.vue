<template>
  <div class="container">
    <h1 class="title">{{ title }}</h1>
    <slot :games3="games3"></slot>
  </div>
</template>
<script>
export default {
  name: "Slot3",
  props: ["title"],
  data() {
    return {
      games3: ["1", "2", "3"],
    };
  },
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
