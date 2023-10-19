<template>
  <div>
    <SchoolInfo></SchoolInfo>
    <StudentInfo></StudentInfo>
  </div>
</template>

<script>
import StudentInfo from "./components/student.vue";
import SchoolInfo from "../src/components/shcool.vue";

// import Student from "./student.vue";

export default {
  name: "App",
  components: {
    SchoolInfo,
    StudentInfo,
  },
};
</script>

<style></style>
