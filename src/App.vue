<template>
  <div id="app">
      <navBar></navBar>

    <img src="./assets/logo.png">
    <router-view></router-view>
    <footBar></footBar>

  </div>
</template>

<script>
import navBar from '@/components/navBar.vue'
import footBar from '@/components/footBar.vue'

export default {
  name: 'app',
  components: {
    navBar,
    footBar
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /*margin-top: 60px;*/
}
</style>
