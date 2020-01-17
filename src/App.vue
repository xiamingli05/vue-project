<template>
  <div id="app">
      <div class="nav">
          <router-link to='/home' tag='span' active-class='on'>首页</router-link>
          <router-link to='/movie' tag='span' active-class='on'>电影</router-link>
          <router-link to='/todo' tag='span' active-class='on'>任务</router-link>
          <router-link to='/user' tag='span' active-class='on'>我的</router-link>
          <router-link to='/films' tag='span' active-class='on'>卖座电影</router-link>
          <router-link to='/element' tag='span' active-class='on'>UI</router-link>
          <router-link to='/song' tag='span' active-class='on'>邓紫棋</router-link>
      </div>
      <router-view></router-view>
  </div>
</template>

<script>

export default {
  components: {

  }
}


</script>

<style>
*{
  margin: 0;
  padding: 0
}
.nav span{
  padding: 0 20px;
  font-size: 20px;
  line-height: 42px;
  text-align: center;
  cursor: pointer;
}
.nav span.on{
  background: pink;
  color: aqua;
}
</style>
