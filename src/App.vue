<template>
  <div id="app">
    <vHeader></vHeader>
    <router-view></router-view>
  </div>
</template>

<script>
  import vHeader from './components/vHeader.vue'

  export default {
    components:{
      vHeader
    }
  }
</script>

<style>
  * {
    margin: 0;
    padding: 0;
  }
</style>
