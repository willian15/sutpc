<template>
  <div class="side">
    <div class="sidebar">
      <el-menu class="el-menu-vertical"  @open="handleOpen" @close="handleClose" background-color="#324157" text-color="#fff" active-text-color="#ffd04b">
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>系统首页</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="/home/vMain" :class="{on: '/home/vMain'===$route.path}" @click="goTo('/home/vMain')">表格信息</el-menu-item>
            <el-menu-item index="/home/vMain1">选项2</el-menu-item>
          </el-menu-item-group>
        </el-submenu>

        <el-menu-item index="2">
          <i class="el-icon-menu"></i>
          <span slot="title" :class="{on: '/home/vEcharts'===$route.path}" @click="goTo('/home/vEcharts')">报表工具</span>
        </el-menu-item>

        <el-menu-item index="3">
          <i class="el-icon-document"></i>
          <span slot="title">用户权限</span>
        </el-menu-item>

        <el-menu-item index="4">
          <i class="el-icon-setting"></i>
          <span slot="title">系统设置</span>
        </el-menu-item>
      </el-menu>
    </div>
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
    export default {
      methods: {
        goTo(path) {
          this.$router.replace(path)
        },
        handleOpen(key, keyPath) {
          console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
          console.log(key, keyPath);
        }
      }
    }
</script>

<style>
  .sidebar{
    display: block;
    position: absolute;
    left: 0;
    top: 91px;
    bottom:0;
    width: 210px;
  }
  .sidebar > ul{
    height: 100%;
  }
  .content{
    position: absolute;
    left: 210px;
    right: 0;
    top: 91px;
    bottom: 0;
  }
</style>
