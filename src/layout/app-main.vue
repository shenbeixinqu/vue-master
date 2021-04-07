<template>
  <div class="main-app">
      <transition name="fade" enter-active-class="animated fadeIn" mode="out-in">
          <keep-alive>
              <router-view :key="key"></router-view>
          </keep-alive>
      </transition>
  </div>
</template>

<script>
export default {
    name:"app-main",
    data(){
        return{
            desc: "这里是右侧主页面"
        }
    },
    computed:{
        key(){
            return this.$router.path
        }
    }
}
</script>

<style scoped>
    .main-app{
        padding: 10px;
    }
</style>