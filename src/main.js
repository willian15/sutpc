/**
 *入口JS:创建Vue实例
 */

import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue'
import router from './router'
import axios from './api/http'
// import VueAxios from 'vue-axios'

Vue.prototype.axios = axios
Vue.use(ElementUI);
// Vue.use(VueAxios,axios);

new Vue({
  el: '#app',
  render: h => h(App),
  router,
  axios
});
