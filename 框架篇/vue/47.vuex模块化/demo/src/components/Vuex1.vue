<template>
  <div>
    <h1>{{ sum }}</h1>
    <h1>放大十倍后{{ bigNum }}</h1>
    <h1>一个{{ name }} 有 {{ item }}</h1>
    <h3 style="color: red">下方人员的人数 {{ persons.length }}</h3>
    <select v-model.number="num">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="increment(num)">+</button>
    <button @click="decrement(num)">-</button>
    <button @click="incrementOdd(num)">和为奇数</button>
    <button @click="incrementWait(num)">等500ms</button>
  </div>
</template>

<script>
import { computed } from "vue";
import { mapState, mapGetters, mapActions, mapMutations } from "vuex";

export default {
  name: "Vuex1",
  data() {
    return {
      num: 1,
    };
  },
  //全部用映射
  computed: {
    ...mapState("countAbout", ["sum", "name", "item"]),
    ...mapState("personAbout", ["persons"]),
    ...mapGetters("countAbout", ["bigNum"]),
  },
  methods: {
    ...mapMutations("countAbout", { decrement: "JIAN", increment: "JIA" }),
    ...mapActions("countAbout", {
      incrementOdd: "jiaOdd",
      incrementWait: "jiaWait",
    }),
  },
};
</script>

<style scoped></style>
