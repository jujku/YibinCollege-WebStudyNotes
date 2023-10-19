./
<template>
  <div>
    <School></School>
    <Student></Student>
  </div>
</template>

<script>
import School from "./shcool.vue";
import Student from "./student.vue";

export default {
  name: "App",
  components: {
    School,
    Student,
  },
};
</script>

<style></style>
