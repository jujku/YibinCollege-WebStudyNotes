<template>
  <div class="list" v-show="todos.length">
    <my-item
      v-for="todo of todos"
      :key="todo.id"
      :todo="todo"
      :updatedChecked="updatedChecked"
      :updatedDelete="updatedDelete"
    ></my-item>
  </div>
</template>

<script>
import MyItem from "./MyItem.vue";

export default {
  components: { MyItem },
  name: "MyList",
  props: ["todos", "updatedChecked", "updatedDelete"],
  methods: {},
};
</script>

<style scope>
.container .list {
  margin-top: 15px;
  border: solid 1px gray;
  border-radius: 6px;
}
</style>
