/**
 *入口JS:创建Vue实例
 */

import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue'
import router from './router'
// 引用axios，并设置基础URL为后端服务api地址
let axios = require('axios');
axios.defaults.baseURL = 'http://192.168.1.11:8083';
// 将API方法绑定到全局
Vue.prototype.$axios = axios;
Vue.config.productionTip = false;
axios.defaults.withCredentials=true;

Vue.use(ElementUI);
// Vue.use(VueAxios,axios);

new Vue({
  el: '#app',
  render: h => h(App),
  router,
  axios
});
