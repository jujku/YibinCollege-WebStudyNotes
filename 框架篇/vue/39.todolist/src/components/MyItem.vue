<template>
  <div class="item">
    <div class="todo">
      <div class="left">
        <input
          class="left"
          type="checkbox"
          :checked="todo.done"
          @change="handleChecked(todo.id)"
        />
        <span class="left">{{ todo.title }}</span>
      </div>
      <div class="right">
        <button class="delete" @click="clearOne(todo.id)">删除</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MyItem",
  props: ["todo", "updatedChecked", "updatedDelete"],
  methods: {
    handleChecked(id) {
      console.log(id);
      this.updatedChecked(id);
    },
    clearOne(id) {
      confirm(`确认删除${this.todo.title}?`) ? this.updatedDelete(id) : 0;
    },
  },
};
</script>

<style scope>
.container .list .item .todo {
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
}
</style>
