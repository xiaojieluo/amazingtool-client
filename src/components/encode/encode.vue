<template>
  <div id="encode">
    encode component
    <router-link :to="{ name: 'base64', params: { property: value}}">base64</router-link>
    <router-link :to="{ name: 'base16', params: { property: value}}">base16</router-link>
    <router-link :to="{ name: 'base32', params: { property: value}}">base32</router-link>
    <router-link :to="{ name: 'base85', params: { property: value}}">base85</router-link>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: "encode",
  data: function data() {
    return {

    }
  }
}
</script>
<style>
</style>
