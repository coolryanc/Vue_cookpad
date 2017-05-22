import Vue from 'vue'
import Vuex from 'vuex'
import Router from 'vue-router'
import VueResource from 'vue-resource'
import auth from '../auth'

Vue.use(VueResource)
Vue.use(Router)
Vue.use(Vuex)

import login from '../pages/login.vue'
import user from '../pages/user.vue'

auth.checkAuth()
export default new Router({
  mode: 'history',
  base: __dirname,
  routes: [
    {
     path: '/',
     name: 'login',
     component: login
    },
    {
     path: '/User',
     name: 'user',
     component: user
    },
   { path: '/*', redirect: '/' }
  ]
})
