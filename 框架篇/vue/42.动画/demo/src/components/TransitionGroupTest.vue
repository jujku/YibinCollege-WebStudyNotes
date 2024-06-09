<template>
  <div>
    <button @click="isShow = !isShow">显示或隐藏</button>
    <transition-group name="hello">
      <h1 key="1" v-show="isShow">你好</h1>
      <h1 key="2" v-show="!isShow">不好</h1>
    </transition-group>
  </div>
</template>

<script>
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

.hello-enter,
.hello-leave-to {
  transform: translateX(-100%);
}

.hello-enter-active,
.hello-leave.leave-active {
  transition: 2s linear;
}

.hello-enter-to,
.hello-leave {
  transform: translateX(0);
}
</style>
