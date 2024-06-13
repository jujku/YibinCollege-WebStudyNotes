<template>
  <div>
    <h1>About!</h1>
    <router-link to="/about/news" active-class="active">news</router-link>
    <router-link to="/about/message" active-class="active"
      >messages</router-link
    >

    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "About",
};
</script>

<style scoped>
div {
  width: 100%;
  display: flex;
  align-content: center;
  align-items: center;
  flex-direction: column;
  flex-wrap: warp;
}
/* a {
  align-self: center;
} */
</style>
