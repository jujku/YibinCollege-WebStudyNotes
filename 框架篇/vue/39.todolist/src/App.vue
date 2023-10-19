<template>
  <div id="app">
    <div class="container">
      <my-top :submit="submit" :todos="todos"></my-top>
      <my-list
        :todos="todos"
        :updatedChecked="updatedChecked"
        :updatedDelete="updatedDelete"
      ></my-list>
      <my-footer
        :todos="todos"
        :updatedIsAll="updatedIsAll"
        :updatedClear="updatedClear"
      ></my-footer>
    </div>
  </div>
</template>

<script>
import MyList from "./components/MyList.vue";
import MyFooter from "./components/MyFooter.vue";
import MyTop from "./components/MyTop.vue";

export default {
  name: "App",
  components: { MyTop, MyList, MyFooter },
  data() {
    return {
      todos: JSON.parse(localStorage.getItem("todos")) || [],
    };
  },
  watch: {
    todos: {
      deep: true,
      handler(value) {
        localStorage.setItem("todos", JSON.stringify(value));
      },
    },
  },
  methods: {
    submit(value) {
      this.todos.unshift(value);
    },
    updatedChecked(id) {
      this.todos.forEach((todo) => {
        if (todo.id === id) {
          todo.done = !todo.done;
        }
      });
    },
    updatedDelete(id) {
      this.todos = this.todos.filter((todo) => todo.id !== id);
    },
    updatedIsAll(value) {
      this.todos.forEach((todo) => {
        todo.done = value;
      });
    },
    updatedClear() {
      this.todos = this.todos.filter((todo) => todo.done === false);
    },
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.container {
  padding: 10px;
  display: flex;
  flex-direction: column;
  border: solid 1px gray;
  width: 730px;
  margin: 100px auto;
  border-radius: 6px;
}
/* .container .top input {
  width: 100%;
  height: 40px;
  padding: 5px;
}
.container .top input:focus {
  outline: none;
  box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
  border: solid 1px transparent;
} */
/* .container .list {
  margin-top: 15px;
  border: solid 1px gray;
  border-radius: 6px;
} */
/* .container .list .item .todo {
  font-size: 18px;
  line-height: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: solid 1px gray;
  height: 40px;
}
.container .list .item .todo:hover {
  background-color: ghostwhite;
}

.container .list .item .todo:last-child {
  border-bottom: solid 1px transparent;
}
.container .list .item .todo .left {
  display: flex;
  justify-content: flex-start;
}
.container .list .item .todo .left * {
  margin-left: 10px;
}
.container .list .item .todo .right {
  display: flex;
  justify-content: flex-end;
}
.container .list .item .todo .right .delete {
  border-radius: 6px;
  border: 0;
  cursor: pointer;
  display: none;
  color: white;
  margin-left: auto;
  margin-right: 10px;
  height: 30px;
  width: 50px;
  background-color: rgb(227, 90, 70);
}
.container .list .item .todo:hover .right .delete {
  display: block;
} */
</style>
