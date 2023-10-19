<template>
  <div class="footer" v-show="total">
    <div class="left">
      <input type="checkbox" v-model="isAll" />
      <span>已完成{{ done }}/全部{{ total }}</span>
    </div>
    <div class="right">
      <button class="clearAll" @click="clearAll">清除已完成的任务</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "MyFooter",
  props: ["todos", "updatedIsAll", "updatedClear"],
  computed: {
    total() {
      return this.todos.length;
    },
    done() {
      return this.todos.reduce(
        (pre, todo) => (todo.done === true ? pre + 1 : pre),
        0
      );
    },
    isAll: {
      get() {
        return this.total === this.done;
      },
      set(value) {
        this.updatedIsAll(value);
      },
    },
  },
  methods: {
    clearAll() {
      confirm("确认删除所有已完成？") ? this.updatedClear() : 0;
    },
  },
};
</script>

<style scope>
.container .footer {
  display: flex;
  margin-top: 20px;
  justify-content: space-between;
}
.container .footer .left input {
  margin-left: 10px;
}
.container .footer .left span {
  margin-left: 20px;
}
.container .footer .right .clearAll {
  border-radius: 6px;
  border: 0;
  cursor: pointer;
  color: white;
  height: 30px;
  padding: 5px;
  background-color: rgb(227, 90, 70);
}
</style>
