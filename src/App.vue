<template>
  <div id="app">
    <Navigation />
    <Header />
    <About />
    <Border />
    <Experience />
    <Skills />
    <Portfolio />
    <Testimonial />
    <Contact />
    <Footer />
  </div>
</template>

<script>

import Navigation from './components/Navigation.vue'
import Header from './components/Header.vue'
import About from './components/About.vue'
import Experience from './components/Experience.vue'
import Skills from './components/Skills.vue'
import Portfolio from './components/Portfolio.vue'
import Testimonial from './components/Testimonial.vue'
import Footer from './components/Footer.vue'
import Contact from './components/Contact.vue'
import Border from './components/Border.vue'

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
    Header,
    About,
    Experience,
    Portfolio,
    Skills,
    Testimonial,
    Footer,
    Contact,
    Border
  }
}
</script>