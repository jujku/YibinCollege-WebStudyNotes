<template>
  <div>
    <h1>人员列表</h1>
    <h3 style="color: red">上方数字的和{{ sum }}</h3>
    <input type="text" v-model="name" />
    <button @click="add">添加</button>
    <button @click="addPersonWang">添加一个姓王的</button>
    <button @click="addPersonServe">添加一个服务器上获取的</button>

    <ul>
      <li v-for="person in persons" :key="person.id">
        {{ person.name }}
      </li>
    </ul>
  </div>
</template>

<script>
import nanoId from "nanoid";
import { computed } from "vue";
import { mapState } from "vuex";
const { nanoid } = require("nanoid");

export default {
  name: "Vuex2",
  data() {
    return {
      name: "",
    };
  },
  computed: {
    persons() {
      return this.$store.state.personAbout.persons;
    },
    sum() {
      return this.$store.state.countAbout.sum;
    },
  },
  methods: {
    add() {
      this.$store.commit("personAbout/ADD_PERSON", {
        id: nanoid(),
        name: this.name,
      });
    },
    addPersonWang() {
      this.$store.dispatch("personAbout/addPersonWang", {
        id: nanoid(),
        name: this.name,
      });
    },
    addPersonServe() {
      this.$store.dispatch("personAbout/addPersonServe");
    },
  },
  mounted() {
    console.log(this);
  },
};
</script>

<style></style>
