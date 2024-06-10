<template>
  <div>
    <input type="text" v-model="keyWord" />
    <button @click="getUsers">GET</button>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Search",
  data() {
    return {
      keyWord: "",
    };
  },
  methods: {
    getUsers() {
      axios({
        method: "get",
        url: `https://api.github.com/search/users?q=${this.keyWord}`,
      }).then(
        (response) => {
          this.$bus.$emit("getUsers", response.data.items);
        },
        (error) => {
          console.log(error.message);
        }
      );
    },
  },
};
</script>

<style scoped></style>
