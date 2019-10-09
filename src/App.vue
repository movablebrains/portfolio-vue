<template>
  <div id="app">
    <Navigation />
    <Header />
    <About />
  </div>
</template>

<script>

import Navigation from './components/Navigation.vue'
import Header from './components/Header.vue'
import About from './components/About.vue';

export default {
  name: 'app',
  data() {
    return {
    }
  },
  components: {
    Navigation,
    Header,
    About
  }
}
</script>