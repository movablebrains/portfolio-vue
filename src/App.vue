<template>
  <div id="app">
    <Navigation />
    <Header />
    <About />
    <Experience />
    <Skills />
    <Portfolio />
  </div>
</template>

<script>

import Navigation from './components/Navigation.vue'
import Header from './components/Header.vue'
import About from './components/About.vue'
import Experience from './components/Experience.vue'
import Skills from './components/Skills.vue'
import Portfolio from './components/Portfolio.vue'

export default {
  name: 'app',
  data() {
    return {
    }
  },
  components: {
    Navigation,
    Header,
    About,
    Experience,
    Portfolio,
    Skills
  }
}
</script>