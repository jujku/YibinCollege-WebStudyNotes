<template>
  <div>1</div>
</template>

<script>
export default {
  name: "SchoolInfo",
  mounted() {
    this.$bus.$on("get", (data) => {
      console.log("我是school组件，我得到了数据", data);
    });
  },
  methods: {},
};
</script>

<style></style>
