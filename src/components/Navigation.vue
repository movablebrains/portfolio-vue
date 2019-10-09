<template>
    <b-navbar toggleable="lg" type="dark" variant="info">
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav class="ml-auto" v-for="navigation in navigationList" :key="navigation.id">
                <b-dropdown-item :href="navigation.href">{{ navigation.title }}</b-dropdown-item>
            </b-navbar-nav>
        </b-collapse>
    </b-navbar>
</template>

<script>
    import axios from 'axios';
    import json from '../data/navigation.json';
    export default {
        name: "Navigation",
        data() {
            return {
                navigationList: json
            }
        },
        mounted: function() {
            // console.log('Hello World');
            // this.getNavigation();
            // axios.get(json)
            //     .then(response => (this.navigationList = response.data))
        },
        methods: {
            getNavigation: function() {
                // fetch('test.json')
                //     .then(response => response.json())
                //     .then(data => (this.navigationList = data));
                axios.get(json)
                    .then(response => (this.navigationList = response.data));
            }
        }
    }
</script>