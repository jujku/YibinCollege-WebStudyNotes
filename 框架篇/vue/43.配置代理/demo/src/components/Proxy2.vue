<template>
  <div>
    <button @click="getTest">点击</button>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "Proxy2",
  data() {
    return {};
  },
  methods: {
    getTest() {
      axios({
        method: "get",
        url: "http://localhost:8080/server1/demo/hello",
      }).then(
        (response) => {
          console.log(response.data);
        },
        (error) => {
          error.message;
        }
      );
    },
  },
};
</script>
