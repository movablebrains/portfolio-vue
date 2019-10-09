<template>
  <div id="app">
    <Navigation />
    <Header />
  </div>
</template>

<script>

import Navigation from './components/Navigation.vue'
import Header from './components/Header.vue'

export default {
  name: 'app',
  data() {
    return {
    }
  },
  components: {
    Navigation,
    Header
  }
}
</script>