<template>
    <b-jumbotron header="Rotsen Mark Acob">
        <p class="h6 text-uppercase u-letter-spacing-sm mb-2">Web Developer</p>
        <ul v-for="socialMedia in socialMediaList" :key="socialMedia.id" class="list-inline text-center mb-0">
            <li class="list-inline-item mx-2" data-toggle="tooltip" data-placement="top" :title="socialMedia.title"><b-link :href="socialMedia.url">{{ socialMedia.name }}</b-link></li>
        </ul>
    </b-jumbotron>
</template>

<script>
import axios from 'axios'
import json from '../data/social.json'

export default {
    name: "Header",
    data() {
        return {
            socialMediaList: json
        } 
    },
    mounted: function() {
        this.getSocialMediaList();
    },
    methods: {
        getSocialMediaList: function() {
            axios.get('/public/data/social.json')
                .then(response => (this.socialMediaList = response.data));
        }
    }
}
</script>