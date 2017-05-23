<template lang="html">
<div class="Login">
  <mu-text-field label="用户名" v-model="userName" hintText="请输入手机号或者邮箱"  :errorText="CheckLogin || userNameErr" labelFloat/><br/>
  <mu-text-field label="密码" v-model="passWord" hintText="请输入密码" :errorText="CheckPassword || passWordErr" type="password" labelFloat/><br/>
  <mu-raised-button label="登录" class="demo-raised-button" primary @click="Login"/>
  <!-- 提示注册成功 -->
  <mu-toast v-if="toast" message="注册成功" @close="hideToast"/>
</div>
</template>

<script>
import store from 'storejs'
export default {
  name: 'Login',
  data() {
    return {
      toast: false,
      userNameErr: '',
      passWordErr: '',
      userName: '',
      passWord: '',
      objPassWord: 'passWord'
    }
  },
  computed: {
    CheckLogin() {
      if(store.keys().indexOf(this.userName) > -1) {
        return this.userNameErr = ''
      }
    },
    CheckPassword() {
      if(store.keys().indexOf(this.userName) > -1) {
        if(this.passWord == store()[this.userName]['passWord']) {
          return this.passWordErr = ''
        }
      }
    }
  },
  methods: {
    Login() {
      if(store.keys().indexOf(this.userName) == -1) {
        this.userNameErr = '用户名未注册'
      }
      if(this.passWord == '') {
        this.passWordErr = '密码不能为空'
      } else if(this.passWord != store()[this.userName]['passWord']) {
        this.passWordErr = '密码错误'
      }
      if(this.userNameErr == '' && this.passWordErr == '') {
        console.log(1)
        this.showToast()
      }
      // console.log(store()[this.userName]['passWord'])
    },
    showToast() {
      this.toast = true
      if(this.toastTimer) {
        clearTimeout(this.toastTimer)
      }
      this.toastTimer = setTimeout(() => {
        this.toast = false
        this.$router.push('/Home')
      }, 2000)
    },
    hideToast() {
      this.toast = false
      if(this.toastTimer) {
        clearTimeout(this.toastTimer)
      }
    }
  }
}
</script>

<style lang="css" scoped>
.demo-raised-button{
  width: 256px;
}
.mu-raised-button{
  margin-top: 20px;
}
</style>
