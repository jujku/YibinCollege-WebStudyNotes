<template>
  <button @click="send">发送</button>
</template>

<script>
export default {
  name: "StudentInfo",
  data() {
    return {
      name: "张三",
    };
  },
  methods: {
    send() {
      this.$bus.$emit("get", this.name);
    },
  },
};
</script>

<style></style>
