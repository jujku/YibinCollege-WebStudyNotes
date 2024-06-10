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
      this.$bus.$emit("getUsers", {
        isFirst: false,
        isLoading: true,
        errMsg: "",
        users: [],
      });
      axios({
        method: "get",
        url: `https://api.github.com/search/users?q=${this.keyWord}`,
      }).then(
        (response) => {
          this.$bus.$emit("getUsers", {
            isFirst: false,
            isLoading: false,
            errMsg: "",
            users: response.data.items,
          });
        },
        (error) => {
          this.$bus.$emit("getUsers", {
            isFirst: false,
            isLoading: false,
            errMsg: error.message,
            users: [],
          });
          console.log(error.message);
        }
      );
    },
  },
};
</script>

<style scoped></style>
