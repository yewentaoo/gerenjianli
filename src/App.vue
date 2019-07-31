<template>
  <div id="app">
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal">
      <el-row>
        <el-col :md="2" :sm="1">
          <div class="zhanwei"></div>
        </el-col>
        <el-col :md="4" :sm="11" class="logoimg">
          <div class='logo'></div>
        </el-col>
        <el-col :md="8" :sm="1">
          <div class="zhanwei"></div>
        </el-col>
        <el-col :md="10" :sm="11" class="logoimg">
          <el-menu-item index="1" @click="goindex()">首页</el-menu-item>
          <el-menu-item index="2" @click="goaboutme()">关于我</el-menu-item>
          <el-menu-item index="3" @click="goskill()">专业技能</el-menu-item>
          <el-menu-item index="4" @click="gomyexp()">我的经历</el-menu-item>
        </el-col>
      </el-row>
      
    </el-menu>
     <transition mode="out-in" enter-active-class="animated fadeIn" leave-active-class="animated fadeOut">
  <keep-alive>
    <router-view />
  </keep-alive>
</transition>

  </div>
</template>

<script>
export default {
  name: 'App',
   data() {
      return {
        activeIndex: '1',
        activeIndex2: '1'
      };
    },
    methods: {
      goindex(){
        this.$router.replace('/index')
      },
       goaboutme(){
        this.$router.replace('/aboutme')
      },
      goskill(){
        this.$router.replace('/skill')
      },
      gomyexp(){
         this.$router.replace('/myexp')
      },
      mouse(){
        console.log(1);
        
      }
    },
}
</script>
<style lang="stylus" scoped>

.el-menu{
  width 100vw
  position fixed
  top 0
  left 0
  padding 10px 0
  z-index 999
}
.el-menu-item{
  float left
}
.logo{
  width 60px
  height 60px
  background red url(./assets/1.jpg)
  background-size cover
  background-position-y -10px
  border-radius 50%
}
.zhanwei{
  width 1px;
  height 1px
}
.logoimg{
  display flex
  justify-content center
  align-items center
}


</style>

