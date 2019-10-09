<template>
    <b-navbar toggleable="lg" type="dark" class="js-navbar-scroll navbar fixed-top navbar-expand-lg navbar-dark">
        <b-container>
            <b-navbar-brand href="/"><img :src="`${publicPath}images/logo.svg`" alt="Rotsen Mark Acob" width="50"></b-navbar-brand>
            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
            <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav class="ml-auto mt-2 mt-lg-0">
                    <b-nav-item class="mr-4 mb-2 mb-lg-0" v-for="navigation in navigationList" :key="navigation.title" :href="navigation.href">{{ navigation.title }}</b-nav-item>
                </b-navbar-nav>
            </b-collapse>
        </b-container>
    </b-navbar>
</template>

<script>
    // import axios from 'axios';
    import json from '../data/navigation.json';
    export default {
        name: "Navigation",
        data() {
            return {
                navigationList: json,
                baseUrl: process.env.VUE_APP_BASE_URL,
                publicPath: process.env.BASE_URL
            }
        },
        mounted: function() {
            // this.getNavigation();
        },
        methods: {
            // getNavigation: function() {
            //     axios.get(this.baseUrl + 'data/navigation.json')
            //         .then(response => (this.navigationList = response.data));
            // }
        }
    }
</script>