<template>
  <button @click="send">发送</button>
</template>

<script>
import pubsub from "pubsub-js";

export default {
  name: "StudentInfo",
  data() {
    return {
      name: "张三",
    };
  },
  methods: {
    send() {
      pubsub.publish("send", this.name);
    },
  },
};
</script>

<style></style>
