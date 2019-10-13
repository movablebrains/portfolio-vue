import Vue from 'vue'
import App from './App.vue'

import VueMeta from 'vue-meta'
Vue.use(VueMeta, {
  refreshOnceNavigation: true
})

import NotFound from './components/404.vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: "history",
  routes: [
    { path: '/'},
    { path: '*', component: NotFound }
  ]
})

import BootstrapVue from 'bootstrap-vue'
Vue.use(BootstrapVue)

import { library } from '@fortawesome/fontawesome-svg-core'
import { faWordpress, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { dom } from '@fortawesome/fontawesome-svg-core'

dom.watch()

library.add(faGithub, faWordpress, faLinkedin, faEnvelope)
Vue.component('font-awesome-icon', FontAwesomeIcon)

import '../jquery-global'
import '../node_modules/popper.js/dist/umd/popper'
import '../node_modules/stream/assets/vendors/bootstrap/js/bootstrap'
import '../node_modules/stream/assets/vendors/jquery.parallax'
import '../node_modules/stream/assets/js/vendors/parallax'
require('./assets/js/custom.js')

import './assets/scss/style.scss';

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
