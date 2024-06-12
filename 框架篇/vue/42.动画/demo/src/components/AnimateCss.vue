<template>
  <div>
    <button @click="isShow = !isShow">显示或隐藏</button>
    <transition-group
      name="animate__animated animate__bounce"
      appear
      enter-active-class="animate__bounceInDown"
      leave-active-class="animate__bounceOutDown"
    >
      <h1 key="1" v-show="isShow">你好</h1>
      <h1 key="2" v-show="!isShow">不好</h1>
    </transition-group>
  </div>
</template>

<script>
import "animate.css";
export default {
  name: "TransitionGroupTest",
  data() {
    return {
      isShow: true,
    };
  },
};
</script>

<style scoped>
h1 {
  background-color: aqua;
}
</style>
