<template>
    <b-navbar toggleable="lg" type="dark" class="js-navbar-scroll fixed-top">
        <b-container fluid>
            <b-navbar-brand :href="`${publicPath}`"><img :src="`${publicPath}images/logo.svg`" alt="Rotsen Mark Acob" width="50"></b-navbar-brand>
            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
            <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav class="ml-auto mt-2 mt-lg-0">
                    <b-nav-item class="mr-4 mb-2 mb-lg-0" v-for="navigation in navigationList" :key="navigation.title" :href="navigation.href">{{ navigation.title }}</b-nav-item>
                </b-navbar-nav>
                <div>
                    <a class="btn btn-primary" href="#js-scroll-to-contact">
                        <font-awesome-icon :icon="['fas', 'envelope']" class="mr-1"></font-awesome-icon> Contact Me
                    </a>
                </div>
            </b-collapse>
        </b-container>
    </b-navbar>
</template>

<script>
    // import axios from 'axios';
    // import json from '../data/navigation.json'
    import smoothScroll from 'smooth-scroll'

    export default {
        name: "Navigation",
        data() {
            return {
                navigationList: [],
                publicPath: process.env.BASE_URL,
                active_el: 0,
                scrollPosition: null
            }
        },
        created: function() {
            /* eslint-disable no-unused-vars */
            var scroll = new smoothScroll('a[href*="#"]')
        },
        mounted: function() {
            this.loadNavigation()
            window.addEventListener('scroll', this.updateScroll)
        },
        destroy() {
            window.removeEventListener('scroll', this.updateScroll)
        },
        methods: {
            activate: function(el) {
                this.active_el = el;
            },
            loadNavigation: async function() {
                try {
                    const res = await this.$axios.get('/navigation')
                    this.navigationList = res.data
                } catch (e) {
                    console.log(e)                    
                }
            },
            updateScroll: function() {
                this.scrollPosition = window.scrollY
                const navHeader = document.querySelector('.navbar')

                if (window.scrollY > 100) {
                    navHeader.classList.add('navbar-bg-onscroll')
                } else if (window.scrollY < 100 ) {
                    navHeader.classList.remove('navbar-bg-onscroll')
                    navHeader.classList.add('navbar-bg-onscroll--fade')
                }
            }
        }
    }
</script>