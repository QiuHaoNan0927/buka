<template lang="html">
<div class="SignUp" helpTextClass="">
  <!-- 注册选项 -->
  <mu-text-field label="注册用户名" v-model="userName" hintText="请输入手机号或者邮箱"  :errorText="checkUserName || userNameErr" labelFloat :helpTextClass="{'color':true}"/><br/>
  <mu-text-field label="密码" v-model="passWord1" hintText="请输入大于6位密码" :errorText="checkpassWord || passWordErr1" type="password" labelFloat/><br/>
  <mu-text-field label="确认密码" v-model="passWord2" hintText="请确认密码" :errorText="checkpassWord2 || passWordErr2" type="password" labelFloat/><br/>
  <!-- 注册按钮 -->
  <mu-raised-button label="注册" class="demo-raised-button" secondary @click="SignUp"/>
  <!-- 提示注册成功 -->
  <!-- <mu-raised-button label="show toast" class="demo-snackbar-button" @click="showToast"/> -->
  <mu-toast v-if="toast" message="注册成功" @close="hideToast"/>
</div>
</template>

<script>
import store from 'storejs'
export default {
  name: 'SignUp',
  data() {
    return {
      // color: true,
      toast: false,
      index: 1,
      userNameErr: '',
      passWordErr1: '',
      passWordErr2: '',
      userName: '',
      passWord1: '',
      passWord2: '',
      regPone: /^1\d{10}$/,
      regMail: /^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$/
    }
  },
  computed: {
    checkUserName() {
      if(!this.userName) {
        return
      } else if(this.regPone.test(this.userName) || this.regMail.test(this.userName)) {
        if(store.keys().indexOf(this.userName) > -1) {
          return this.userNameErr = '用户名已存在'
        } else {
          return this.userNameErr = ''
        }
      } else {
        return this.userNameErr = '必须是手机号或者邮箱'
      }
    },
    checkpassWord() {
      if(!this.passWord1) {
        return
      } else if(this.passWord1.length < 6) {
        return this.passWordErr1 = '密码不能小于6位'
      } else {
        return this.passWordErr1 = ''
      }
    },
    checkpassWord2() {
      if(this.passWord2 === '') {
        return
      } else if(this.passWord2 === this.passWord1) {
        return this.passWordErr2 = ''
      } else {
        return this.passWordErr2 = '两次密码不一致'
      }
    }
  },
  methods: {
    // 点击验证并跳转登录
    SignUp() {
      // store.set('username', 'marcus')
      // console.log(store.clear())
      console.log(store())
      console.log(store.keys())
      if(this.userName === '') {
        this.userNameErr = '用户名不能为空'
      }
      if(this.passWord1 === '') {
        this.passWordErr1 = '密码不能为空'
      }
      if(this.passWord2 === '') {
        this.passWordErr2 = '确认密码不能为空'
      }
      if(store.keys().indexOf(this.userName) > -1) {
        this.userNameErr = '用户名已存在'
      }
      if(this.userNameErr == this.passWordErr1 && this.passWordErr1 == this.passWordErr2) {
        store.set(this.userName, {
          userName: this.userName,
          passWord: this.passWord1
        })
        // this.$router.push('/Login')
        this.showToast()
      }
    },
    // 弹出注册成功提示框
    showToast() {
      this.toast = true
      if(this.toastTimer) {
        clearTimeout(this.toastTimer)
      }
      this.toastTimer = setTimeout(() => {
        this.toast = false
        // 弹出提示框后跳转到登录页
        this.$router.push('/Login')
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
/*.mu-text-field.focus-state {
 color: red;
}*/
</style>
