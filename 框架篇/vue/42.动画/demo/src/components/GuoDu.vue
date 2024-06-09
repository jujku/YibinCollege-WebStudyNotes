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
  name: "GuoDu",
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

/* 开始的起点，和离开的终点的样式 */
.hello-enter,
.hello-leave-to {
  transform: translateX(-100%);
}

/* 离开的起点，和离开的终点的样式 */
.hello-leave,
.hello-enter-to {
  transform: translateX(0%);
}

/* 设置过度 */
.hello-enter-active,
.hello-leave-active {
  transition: 0.5s linear;
}
</style>
