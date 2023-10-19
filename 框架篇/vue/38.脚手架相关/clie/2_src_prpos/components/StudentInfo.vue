<template>
  <div>
    <h2>{{ name }}</h2>
    <h2>{{ myAge }}</h2>
    <h2>{{ sex }}</h2>
    <h2>{{ msg }}</h2>
    <button @click="addage">addage</button>
  </div>
</template>

<script>
export default {
  name: "StudentInfo",
  data() {
    return {
      msg: "我的世界",
      myAge: this.age,
    };
  },
  //简单声明
  // props: ["name", "age", "sex"]

  //检查类型的声明
  // props: {
  //   name: String,
  //   age: Number,
  //   sex: Boolean,
  // },

  //完整声明
  props: {
    name: {
      type: String,
      required: true, // 是否必要值
    },
    age: {
      type: Number,
      default: 99, //当没有传入时的默认值
    },
    sex: {
      type: Boolean,
      required: true,
    },
  },
  methods: {
    addage() {
      this.myAge++; //prps的值一般不改变，所以这里设置个代理来改变
    },
  },
};
</script>

<style></style>
