<template>
  <div>
    <h1>{{ $store.state.num }}</h1>
    <select v-model.number="num">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="incrementOdd">和为奇数</button>
    <button @click="incrementWait">等500ms</button>
  </div>
</template>

<script>
export default {
  name: "Vuex1",
  data() {
    return {
      num: 1,
    };
  },
  methods: {
    // 类似于java中的controller
    increment() {
      this.$store.dispatch("jia", this.num);
    },
    decrement() {
      this.$store.commit("JIAN", this.num);
    },
    incrementOdd() {
      this.$store.dispatch("jiaOdd", this.num);
    },
    incrementWait() {
      this.$store.dispatch("jiaWait", this.num);
    },
  },
};
</script>

<style scoped></style>
