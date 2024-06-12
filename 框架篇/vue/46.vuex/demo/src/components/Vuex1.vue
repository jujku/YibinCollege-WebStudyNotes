<template>
  <div>
    <!-- //下面的两种写法是，一个是通过组件示例获取，另一个是映射了之后 -->
    <h1>{{ $store.state.num }}</h1>
    <h1>放大十倍后{{ bigNum }}</h1>
    <h1>一个{{ name }} 有 {{ item }}</h1>
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
import { computed } from "vue";
import { mapState, mapGetters } from "vuex";

export default {
  name: "Vuex1",
  data() {
    return {
      num: 1,
    };
  },
  computed: {
    // 对象写法，可以指定与state中变量不一样的 属性名
    // ...mapState({name: "name", item: "item" }),

    //数组简写
    ...mapState(["name", "item"]),
    ...mapGetters(["bigNum"]),
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
