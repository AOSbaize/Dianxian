import Vue from 'vue'
import App from './App.vue'
import ElementUI, { Button, Radio } from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import router from './router'
import store from './store'
import axios from 'axios'
import $ from 'jquery'
import animate from "animate.css";
import cookie from 'vue-cookie'
axios.defaults.baseURL = '/api'
axios.defaults.baseURL = '/table'
window.$ = $

Vue.prototype.$cookie = cookie;
Vue.config.productionTip = false
Vue.use(ElementUI, axios);
Vue.prototype.$axios = axios;
Vue.use(animate)
//添加全局前置导航守卫
// router.beforeEach((to, from, next) => {
//   const token = Cookies.get('token')
//   if (!token && to.name !== 'login') {
//     //token不存在,说明当前用户未登录，应该跳转至登录页
//     next({ name: 'login' })
//   } else if (token && to.name === 'login') {//token存在，说明用户登录，此时跳转至首页
//     next({ name: 'home' })
//   } else {
//     next();
//   }
// })
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
