import Vue from 'vue'
import App from './App.vue'

// Vue Router
import router from '@/config/router'

// Vue Meta
import '@/config/meta'

// Boostrap Vue
import '@/config/bootstrap'

// Font Awesome
import '@/config/fontawesome'

// Axios
import '@/config/http'

// Particles JS
import '@/config/particles'

// Needed JS Files
import '../jquery-global'
import '../node_modules/popper.js/dist/umd/popper'
import '../node_modules/stream/assets/vendors/bootstrap/js/bootstrap'
import '../node_modules/stream/assets/vendors/jquery.parallax'
import '../node_modules/stream/assets/js/vendors/parallax'

// Main SCSS File
import './assets/scss/style.scss';

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
