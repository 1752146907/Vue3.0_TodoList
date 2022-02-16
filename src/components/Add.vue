<template>
  <div class="container">
      <div class="form-group">
          <label for="exampleInputEmail1">待办事项</label>
          <input type="text"
                 id="exampleInputEmail1"
                 v-model="inputValue"
                 @keydown.enter="add(inputValue)"
                 class="form-control" >
          <small id="emailHelp" class="form-text text-muted">按回车键即可</small>
      </div>
      <ul class="list-group">
          <li class="list-group-item" v-for="(item, index) in todos" :key="'add-' + index">
              <div class="form-group form-check">
                  <input type="checkbox" class="form-check-input" @click.prevent="check(index)" >
                  <label class="form-check-label" >{{item}}</label>
                  <button type="button" class="btn btn-danger" @click="deleteItem(index)">删除</button>
              </div>
          </li>
      </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, reactive, computed } from 'vue'
import store from '@/store'
import {handleAdd, handleDelete, handleCheck} from '@/utils'

export default defineComponent({
  name: 'Add',
  setup() {
      const inputValue = ref('')

      const add = (val:string) => {
          handleAdd(val)
          inputValue.value = ""
      }

      const deleteItem = (index:number) => {
          handleDelete(index)
      }

      const check = (index:number) => {
          handleCheck(index)
      }

      return reactive({
          inputValue,
          add,
          deleteItem,
          check,
          todos: computed(() => store.state.todos)
      })
  }
})
</script>
