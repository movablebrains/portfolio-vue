<template>
  <main id="content">
    <Header />
    <About />
    <Border />
    <Experience />
    <Skills />
    <Portfolio />
    <Testimonial />
    <Contact />
  </main>
</template>

<script>
import Header from '@/components/Header.vue'
import About from '@/components/About.vue'
import Experience from '@/components/Experience.vue'
import Skills from '@/components/Skills.vue'
import Portfolio from '@/components/Portfolio.vue'
import Testimonial from '@/components/Testimonial.vue'
import Contact from '@/components/Contact.vue'
import Border from '@/components/Border.vue'

export default {
  name: 'home',
  components: {
    Header,
    About,
    Experience,
    Portfolio,
    Skills,
    Testimonial,
    Contact,
    Border
  }
}
</script>