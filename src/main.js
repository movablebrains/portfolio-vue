import Vue from 'vue'
import App from './App.vue'

import VueMeta from 'vue-meta'
Vue.use(VueMeta, {
  refreshOnceNavigation: true
})

import Home from '@/views/Home.vue'
import NotFound from '@/views/404.vue'
import FormSuccess from '@/components/SubmissionSuccess.vue'

import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: "history",
  routes: [
    { 
      path: '/', 
      name: 'home', 
      component: Home 
    },
    { 
      path: '/404', 
      alias: '*', 
      component: NotFound 
    },
    {
      path: '/thanks',
      name: 'thanks',
      component: FormSuccess
    }
  ]
})

import BootstrapVue from 'bootstrap-vue'
Vue.use(BootstrapVue)

import { library } from '@fortawesome/fontawesome-svg-core'
import { faWordpress, faLinkedin, faGithub, faNodeJs, faHtml5, faCss3Alt, faJsSquare, faSass, faGulp, faNpm, faGitAlt } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { dom } from '@fortawesome/fontawesome-svg-core'

dom.watch()

library.add(faGithub, faWordpress, faLinkedin, faEnvelope, faNodeJs, faHtml5, faCss3Alt, faJsSquare, faSass, faGulp, faNpm, faGitAlt)
Vue.component('font-awesome-icon', FontAwesomeIcon)

// Axios
import axios from "axios"

Vue.prototype.$axios = axios.create({
  baseURL: "https://portfolio-wds-data.herokuapp.com"
})

import '../jquery-global'
import '../node_modules/popper.js/dist/umd/popper'
import '../node_modules/stream/assets/vendors/bootstrap/js/bootstrap'
import '../node_modules/stream/assets/vendors/jquery.parallax'
import '../node_modules/stream/assets/js/vendors/parallax'
// import './assets/js/custom.js'

import './assets/scss/style.scss';

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
