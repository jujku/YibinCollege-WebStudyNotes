<template>
  <div class="top">
    <input
      type="text"
      placeholder="请输入你的任务名称，按回车键确认"
      @keyup.enter="add"
      v-model="title"
    />
  </div>
</template>

<script>
export default {
  name: "MyTop",
  props: ["submit", "todos"],
  data() {
    return {
      title: "",
    };
  },
  methods: {
    add() {
      const todoObj = {
        id: this.todos.length === 0 ? 1 : this.todos[0].id + 1,
        title: this.title,
        done: false,
      };
      this.submit(todoObj);
      this.title = "";
    },
  },
};
</script>

<style scope>
.container .top input {
  width: 100%;
  height: 40px;
  padding: 5px;
}
.container .top input:focus {
  outline: none;
  box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
  border: solid 1px transparent;
}
</style>
