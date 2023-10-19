<template>
  <div>1</div>
</template>

<script>
import pubsub from "pubsub-js";

export default {
  name: "SchoolInfo",
  mounted() {
    this.pubId = pubsub.subscribe("send", this.demo);
  },

  methods: {
    demo(msgName, data) {
      console.log(msgName, data);
    },
  },
  beforeDestroy() {
    pubsub.unsubscribe(this.pubId);
  },
};
</script>

<style></style>
