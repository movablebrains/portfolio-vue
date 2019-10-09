<template>
    <b-jumbotron class="js-parallax u-promo-block u-promo-block--mheight-500 u-overlay u-overlay--dark text-white lazyload">
        <b-container class="u-overlay__inner u-ver-center u-content-space">
            <b-row class="justify-content-center">
                <b-col cols="12" >
                    <div class="text-center">
                        <h1>Rotsen Mark Acob</h1>
                        <p class="h6 text-uppercase u-letter-spacing-sm mb-2">Web Developer</p>
                        <ul class="list-inline text-center mb-0">
                            <li v-for="socialMedia in socialMediaList" :key="socialMedia.id" class="list-inline-item mx-2" data-toggle="tooltip" data-placement="top" :title="socialMedia.title">
                                <b-link :href="socialMedia.url" class="text-white">
                                    <!-- <font-awesome-icon :class="['fas', 'fa-' . socialMedia.icon]"></font-awesome-icon> -->
                                </b-link>
                            </li>
                        </ul>
                    </div>
                </b-col>
            </b-row>
        </b-container>
    </b-jumbotron>
</template>

<script>
// import axios from 'axios'
import json from '../data/social.json'

export default {
    name: "Header",
    data() {
        return {
            socialMediaList: json
        } 
    },
    // mounted: function() {
    //     this.getSocialMediaList();
    // },
    methods: {
        // getSocialMediaList: function() {
        //     axios.get('/public/data/social.json')
        //         .then(response => (this.socialMediaList = response.data));
        // }
    }
}
</script>