import Vue from 'vue'
import Router from 'vue-router'

import Layout from '@/layout/layout'

Vue.use(Router)

export const constantRouterMap = [
  {
    path:"/",
    component:Layout,
    redirect:'/home',
    children:[
      {
        path:"home",
        name:"home",
        component: ()=> import('@/views/homepage')
      }
    ]
  }
]

export default new Router({
  routes: constantRouterMap
})
