<template>
  <div>
    <h1>人员列表</h1>
    <h3 style="color: red">上方数字的和{{ num }}</h3>
    <input type="text" v-model="name" /><button @click="add">添加</button>
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
    ...mapState(["persons", "num"]),
  },
  methods: {
    add() {
      this.$store.commit("ADD_PERSON", { id: nanoid(), name: this.name });
    },
  },
};
</script>

<style></style>
