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
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')

