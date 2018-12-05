import Vue from 'vue'
import Router from 'vue-router'
import auth from '@/auth'
import Home from '@/components/Home'
import Selling from '@/components/Selling'
import Sell from '@/components/Sell'
import AboutUs from '@/components/AboutUs'
import ContactUs from '@/components/ContactUs'
import Edit from '@/components/Edit'
import SMap from '@/components/SMap'
import Auth from '@/components/Auth'
import Dashboard from '@/components/Dashboard'

Vue.use(Router)

var routes = [
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
    path: '/map',
    name: 'Map',
    component: SMap
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
  },
  {
    path: '/auth',
    name: 'auth',
    component: Auth,
    meta: {
      guestOnly: true
    }
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: Dashboard,
    meta: {
      requireAuth: true
    }
  }
]

export const router = new Router({
  mode: 'history',
  routes
})

router.beforeEach((to, from, next) => {
  let currentUser = auth.user()
  let requireAuth = to.matched.some(record => record.meta.requireAuth)
  let guestOnly = to.matched.some(record => record.meta.guestOnly)

  if (requireAuth && !currentUser) next('auth')
  else if (guestOnly && currentUser) next('dashboard')
  else next()
})
