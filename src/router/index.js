import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login.vue'
import SignUp from '@/components/SignUp.vue'
import Home from '@/components/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [{
      path: '/Login',
      component: Login
    },
    {
      path: '/SignUp',
      component: SignUp
    },
    {
      path: '/Home',
      component: Home
    },
    {
      path: '/',
      redirect: '/Login'
    }
  ]
})
