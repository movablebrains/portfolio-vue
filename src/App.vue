<template>
  <div id="app">
    <Navigation />
    <Header />
    <!-- <div>{{ myJson }}</div> -->
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

import Navigation from './components/Navigation.vue'
import Header from './components/Header.vue'

// import json from './data/navigation.json'

export default {
  name: 'app',
  data() {
    return {
      // myJson: json
    }
  },
  components: {
    Navigation,
    Header
  }
}
</script>