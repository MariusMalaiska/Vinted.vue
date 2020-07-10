<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/todo-list">Todo List</router-link>
    </div> -->
    <navbar-main />
    <router-view/>
  </div>
</template>


<script>
import NavbarMain from '@/components/partials/NavbarMain.vue'

export default {
  components: {
    NavbarMain
  }
}
</script>

<style lang="scss">
//
</style>
