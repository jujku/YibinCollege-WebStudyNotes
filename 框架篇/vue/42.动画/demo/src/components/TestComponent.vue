<template>
  <div>
    <button @click="isShow = !isShow">显示、隐藏</button>
    <transition name="hello" appear>
      <h1 v-show="isShow">你好啊!</h1>
    </transition>
  </div>
</template>
<script>
export default {
  name: "TestComponent",
  data() {
    return {
      isShow: true,
    };
  },
};
</script>

<style scoped>
h1 {
  background-color: pink;
}

.hello-enter-active {
  animation: animation 0.5s linear;
}
.hello-leave-active {
  animation: animation 0.5s linear reverse;
}

@keyframes animation {
  from {
    transform: translateX(-100%);
  }
  to {
    tansform: translateX(0%);
  }
}
</style>
