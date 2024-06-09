<template>
  <div>
    <test-component></test-component>
    <guo-du></guo-du>
    <TransitionGroupTest></TransitionGroupTest>
    <animate-css></animate-css>
  </div>
</template>

<script>
// import pubsub from "pubsub-js";
import TestComponent from "./components/TestComponent.vue";
import GuoDu from "./components/GuoDu.vue";
import TransitionGroupTest from "./components/TransitionGroupTest.vue";
import AnimateCss from "./components/AnimateCss.vue";

export default {
  name: "App",
  components: {
    TestComponent,
    GuoDu,
    TransitionGroupTest,
    AnimateCss,
  },
  methods: {},
};
</script>
