<template>
  <div>
    <ul>
      <li v-for="user in users" :key="user.id">
        <a :href="user.html_url">
          <img :src="user.avatar_url" alt="" />
        </a>
        <p>{{ user.login }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "List",
  data() {
    return {
      users: [],
    };
  },
  mounted() {
    this.$bus.$on("getUsers", (users) => {
      console.log("ListComponent get users", users);
      this.users = users;
    });
  },
};
</script>

<style scoped>
ul {
  display: flex;
  flex-wrap: wrap;
}
</style>
