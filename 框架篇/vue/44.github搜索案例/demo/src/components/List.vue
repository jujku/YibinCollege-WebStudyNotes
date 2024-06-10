<template>
  <div>
    <!-- //搜搜结果 -->
    <ul v-show="info.users.length">
      <li v-for="user in info.users" :key="user.id">
        <a :href="user.html_url">
          <img :src="user.avatar_url" alt="" />
        </a>
        <p>{{ user.login }}</p>
      </li>
    </ul>
    <!-- 欢迎页面 -->
    <h1 v-show="info.isFirst">欢迎使用!</h1>
    <!-- 加载页面 -->
    <h1 v-show="info.isLoading">加载中....</h1>
    <!-- 请求失败 -->
    <p>{{ info.errMsg }}</p>
  </div>
</template>

<script>
export default {
  name: "List",
  data() {
    return {
      info: {
        users: [],
        isFirst: true,
        errMsg: "",
        isLoading: false,
      },
    };
  },
  mounted() {
    this.$bus.$on("getUsers", (dataObj) => {
      console.log("ListComponent get users", dataObj.users);
      this.info = { ...this.info, ...dataObj }; //es6语法合并字符串
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
