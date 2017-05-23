<template>
<div id="app">
  <div class="login">
    <mu-bottom-nav :value="bottomNav" @change="handleChange">
      <router-link to="Login" tag="div">
        <mu-bottom-nav-item value="recents" title="登录" icon="account_circle" /> </router-link>
      <router-link to="SignUp" class="singup" tag="div">
        <mu-bottom-nav-item value="favorites" title="注册" icon="assignment" /> </router-link>
    </mu-bottom-nav>
  </div>
  <router-view></router-view>
</div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      bottomNav: 'recents'
    }
  },
  methods: {
    handleChange(val) {
      this.bottomNav = val
    }
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
  margin-top: 60px;
}

.router-link-active i,
.router-link-active span {
  color: #7e57c2;
}

.router-link-active span {
  font-size: 14px;
  font-weight: bold;
}

.singup.router-link-active i,
.singup.router-link-active span {
  color: #ff4081;
}
</style>
