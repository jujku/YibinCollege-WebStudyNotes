<template>
  <div id="app">
    <student-info></student-info>
    <school-info></school-info>
  </div>
</template>

<script>
import StudentInfo from "./components/StudentInfo.vue";
import SchoolInfo from "./components/SchoolInfo.vue";

export default {
  name: "App",
  components: {
    StudentInfo,
    SchoolInfo,
  },
};
</script>

<style></style>
