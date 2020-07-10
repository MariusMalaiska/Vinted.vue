<template>
  <div>
    <h3>Todo List</h3>
    <ul>
      <li
        v-for="todo in todos"
        :key="todo.id"
        v-on:click="toggleTodo(todo.id)"
        :class="{ done: todo.done, 'text-primary': true}"
      >{{todo.title}}</li>
    </ul>
  </div>
</template>

<script>
import uniqid from "uniqid";
export default {
  data() {
    return {
      todos: [
        {
          id: uniqid(),
          title: "Nuskristi į mėnulį",
          done: false
        },
        {
          id: uniqid(),
          title: "Pamatyti Paryžių",
          done: true
        },
        {
          id: uniqid(),
          title: "Palaižyt sau alkūnę",
          done: false
        },
        {
          id: uniqid(),
          title: "Suvalgyti pipirą",
          done: true
        }
      ]
    };
  },
  methods: {
    toggleTodo(id) {
      const index = this.todos.findIndex(el => el.id === id);
      this.todos[index].done = !this.todos[index].done;
      console.table(this.todos);
    }
  }
};
</script>
<style>
.done {
  text-decoration: line-through;
}
</style>