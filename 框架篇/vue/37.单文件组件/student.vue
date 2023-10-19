/
<template>
  <div class="demo">
    <ul>
      <li v-for="(item, index) of student" :key="index">
        {{ item.name }} --- {{ item.age }} --- {{ item.sex }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Student",
  data() {
    return {
      student: [
        { name: "xiao", age: 18, sex: "male" },
        { name: "xiaoming", age: 14, sex: "female" },
      ],
    };
  },
};
</script>

<style>
.demo {
  background-color: pink;
}
</style>
