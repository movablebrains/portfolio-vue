<template>
  <div id="app">
    <Navigation v-if="this.$route.path == '/'" />
    <router-view />
    <Footer v-if="this.$route.path == '/'" />
  </div>
</template>

<script>

import Navigation from './components/Navigation.vue'
import Footer from './components/Footer.vue'

import 'lazysizes'

export default {
  name: 'app',
  metaInfo: {
    title: 'Rotsen Acob',
    titleTemplate: '%s - Web Developer'
  },
  data() {
    return {
    }
  },
  components: {
    Navigation,
    Footer
  }
}
</script>