/
<template>
  <div class="demo">
    <h2 @click="show">{{ name }}</h2>
  </div>
</template>

<script>
let a = 0;
export default {
  name: "SchoolInfo",
  data() {
    return {
      name: "YBU",
    };
  },
  methods: {
    show() {
      console.log(this.name);
    },
  },
};
</script>

<style>
.demo {
  background-color: yellow;
}
</style>
