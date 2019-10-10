import Vue from 'vue'
import App from './App.vue'

import BootstrapVue from 'bootstrap-vue'
Vue.use(BootstrapVue)

import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { dom } from '@fortawesome/fontawesome-svg-core'

dom.watch()

library.add(fas, fab)
Vue.component('font-awesome-icon', FontAwesomeIcon)

// import '../node_modules/jquery/dist/jquery'
import '../jquery-global.js'
import '../node_modules/popper.js/dist/umd/popper'
import '../node_modules/stream/assets/vendors/bootstrap/js/bootstrap'
import '../node_modules/stream/assets/vendors/jquery.parallax'
import '../node_modules/stream/assets/js/global';

import './assets/scss/style.scss';

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
