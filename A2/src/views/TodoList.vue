<script lang="ts" setup>
import { ref } from 'vue'

// Interface for todo item
interface TodoItem {
  id: number
  text: string
  completed: boolean
  priority: 'high' | 'low'
}

// State management
const newTask = ref('')
const todos = ref<TodoItem[]>([])
let nextId = 1

// Methods
const addTodo = () => {
  if (newTask.value.trim()) {
    todos.value.unshift({
      id: nextId++,
      text: newTask.value,
      completed: false,
      priority: 'low'
    })
    newTask.value = ''
  }
}

const toggleTodo = (todo: TodoItem) => {
  todo.completed = !todo.completed
}

const deleteTodo = (id: number) => {
  todos.value = todos.value.filter(todo => todo.id !== id)
}

const togglePriority = (todo: TodoItem) => {
  todo.priority = todo.priority === 'high' ? 'low' : 'high'
}
</script>

<template>
  <div class="container-xl mt-4 pb-5">
    <h2><strong>Todo List</strong></h2>
    <!-- Input group for new task -->
    <div class="row mb-4">
      <div class="col">
        <div class="input-group">
          <input type="text" class="form-control" placeholder="Add new task" v-model="newTask" @keyup.enter="addTodo">
          <button class="btn btn-primary" @click="addTodo">
            Add Task
          </button>
        </div>
      </div>
    </div>
    <!-- Task list table -->
    <div class="row">
      <div class="col">
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Tasks</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="todo in todos" :key="todo.id">
              <td>
                <div class="d-flex justify-content-between align-items-center">
                  <div class="form-check d-flex align-items-center gap-2">
                    <input class="form-check-input my-auto" type="checkbox" :checked="todo.completed" @change="toggleTodo(todo)">
                    <span v-if="todo.priority === 'high'" class="badge bg-danger">
                      High
                    </span>
                    <span v-if="todo.priority === 'low'" class="badge bg-warning">
                      Low
                    </span>
                    <label class="form-check-label" :class="{ 'text-decoration-line-through': todo.completed }">
                      {{ todo.text }}
                    </label>
                  </div>
                  <div class="d-flex gap-2">
                    <button class="btn btn-secondary btn-sm" @click="togglePriority(todo)">
                      Set to {{ todo.priority === 'high' ? 'Low' : 'High' }} Priority
                    </button>
                    <button class="btn btn-danger btn-sm" @click="deleteTodo(todo.id)">
                      Delete
                    </button>
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<style scoped>
.form-check-label {
  cursor: pointer;
}
</style>
