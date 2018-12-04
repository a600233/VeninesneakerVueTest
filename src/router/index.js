import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Selling from '@/components/Selling'
import Sell from '@/components/Sell'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/selling',
      name: 'Selling',
      component: Selling
    },
    {
      path: '/sell',
      name: 'Sell',
      component: Sell
    }
  ]
})
