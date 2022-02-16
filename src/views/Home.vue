<template>
  <div class="container">
      <img src="../assets/logo.png" alt="">
      <div id="nav">
          <router-link to="/add">代办事项</router-link> |
          <router-link to="/done">已完成</router-link> |
          <router-link to="/delete">已删除</router-link>
      </div>
      <router-view/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Home',
  components: {

  }
})
</script>
