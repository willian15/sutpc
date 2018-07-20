<template>
  <!--<i class="el-icon-menu"></i>-->
  <el-menu class="topMenu" mode="horizontal" background-color="#242f42" text-color="#fff" active-text-color="#ffd04b">
    <el-menu-item index="0" class="hTitle"><i class="el-icon-menu"></i></el-menu-item>
    <el-menu-item index="1" class="hTitle" :class="{on: '/home'===$route.path}" @click="goTo('/home')">系统首页</el-menu-item>
    <el-menu-item index="2" class="hTitle">消息中心</el-menu-item>
    <el-menu-item index="3" class="hTitle">系统管理</el-menu-item>
  </el-menu>
</template>

<script type="text/ecmascript-6">
  export default {
    methods: {
      goTo(path) {
        this.$router.replace(path)
      }
    }
  }
</script>

<style>
  .topMenu {
    border-right: none;
    border-bottom: solid 1px #e6e6e6;
    height: 90px;
  }
  .topMenu > .hTitle{
    height: 90px;
    line-height: 90px;
  }
  .hTitle{
    font-size: 22px;
  }
</style>
