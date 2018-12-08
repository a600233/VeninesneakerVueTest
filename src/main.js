// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import * as VueGoogleMaps from 'vue2-google-maps'
import VueSweetalert2 from 'vue-sweetalert2'
import auth from '@/auth'
import {router} from '@/router'
import {store} from '@/store'
import VueTables from 'vue-tables-2'
import VueMq from 'vue-mq'
import VueForm from 'vueform'
import Vuelidate from 'vuelidate'

Vue.use(BootstrapVue)
Vue.use(VueSweetalert2)
Vue.use(VueTables.ClientTable, {compileTemplates: true, filterByColumn: true})
Vue.config.productionTip = false
Vue.use(VueMq, {
  breakpoints: {
    mobile: 450,
    tablet: 900,
    laptop: 1250,
    desktop: Infinity
  }
})
Vue.use(VueForm, {
  inputClasses: {
    valid: 'form-control-success',
    invalid: 'form-control-danger'
  }
})

Vue.use(Vuelidate)
Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyAkFuc3Dh1uvU7Tv8bNijF51mPFS5cNzUk',
    libraries: 'places' // This is required if you use the Autocomplete plugin
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  beforeCreate () {
    auth.init(this)
  },
  components: { App },
  template: '<App/>'
})
