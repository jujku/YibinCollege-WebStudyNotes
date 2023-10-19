<template>
  <div id="app">
    <student-info name="xiaoming" sex="male" :age="18"></student-info>
    <student-info name="xiao" :sex="false"></student-info>
  </div>
</template>

<script>
import StudentInfo from "./components/StudentInfo.vue";

export default {
  name: "App",
  components: {
    StudentInfo,
  },
  methods: {
    // ref就是dom操作中的id 不过加在组件时调用的是组件实例
  },
};
</script>

<style></style>
