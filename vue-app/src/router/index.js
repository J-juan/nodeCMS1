import Vue from 'vue'
import Router from 'vue-router'
import newslist from '@/views/news/newslist'
import newsdetails from '@/views/news/details'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      name:'index',
      component:newslist,
    },{
      path:'/newsdetails',
      name:'新闻详情',
      component:newsdetails,
    }
  ]
})
