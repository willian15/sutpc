import Vue from 'vue'
import VueRouter from 'vue-router'
import Sidebar from '../components/Sidebar.vue'
import vMain from '../pages/vMain.vue'

Vue.use(VueRouter);

export default new VueRouter({
  routes:[
    {
      path:'/home',
      component:Sidebar,
      children:[
        {
          path:'/home/vMain',
          component:vMain
        }
      ]
    }
  ]
})
