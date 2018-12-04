import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Selling from '@/components/Selling'
import Sell from '@/components/Sell'
import AboutUs from '@/components/AboutUs'
import ContactUs from '@/components/ContactUs'
import Edit from '@/components/Edit'
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
    },
    {
      path: '/edit',
      name: 'Edit',
      component: Edit,
      props: true
    },
    {
      path: '/about',
      name: 'AboutUs',
      component: AboutUs
    },
    {
      path: '/contact',
      name: 'ContactUs',
      component: ContactUs
    }
  ]
})
