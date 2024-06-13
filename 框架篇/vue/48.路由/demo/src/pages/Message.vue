<template>
  <div>
    <ul>
      <li v-for="m in messages" :key="m.id">
        <!-- 字符串传参写法 -->

        <!-- <router-link
          :to="`/about/message/details?id=${m.id}&title=${m.title}`"
          >{{ m.title }}</router-link
        > -->

        <!-- 对象传参写法 -->

        <router-link
          :to="{
            path: '/about/message/details',
            query: {
              id: m.id,
              title: m.title,
            },
          }"
        >
          {{ m.title }}
        </router-link>
      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "Message",
  data() {
    return {
      messages: [
        { id: "001", title: "消息1" },
        { id: "002", title: "消息2" },
        { id: "003", title: "消息3" },
      ],
    };
  },
};
</script>

<style></style>
