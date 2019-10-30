<template>
    <b-jumbotron class="mb-0 js-parallax u-promo-block u-promo-block--mheight-500 u-overlay u-overlay--dark text-white lazyload" :style="`background-image:url(${publicPath}images/carlos-muza-84523-unsplash.jpg)`">
        <b-container class="u-overlay__inner u-ver-center u-content-space">
            <b-row class="justify-content-center">
                <b-col cols="12" >
                    <div class="text-center">
                        <h1 class="display-sm-4 display-lg-3">Rotsen Mark Acob</h1>
                        <p class="h6 text-uppercase u-letter-spacing-sm mb-2">Web Developer</p>
                        <ul class="list-inline text-center mb-0">
                            <li v-for="socialMedia in socialMediaList" :key="socialMedia.id" class="list-inline-item mx-2">
                                <b-link :id="socialMedia.icon" :href="socialMedia.url" class="text-white" v-if="socialMedia.icon == 'envelope'">
                                    <font-awesome-icon :icon="['fas', `${socialMedia.icon}`]"></font-awesome-icon>
                                </b-link>
                                <b-link :id="socialMedia.icon" :href="socialMedia.url" class="text-white" v-else>
                                    <font-awesome-icon :icon="['fab', `${socialMedia.icon}`]"></font-awesome-icon>
                                </b-link>
                                <b-tooltip :target="socialMedia.icon" triggers="hover">
                                    {{ socialMedia.title }}
                                </b-tooltip>
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
// import json from '../data/social.json'

export default {
    name: "Header",
    data() {
        return {
            socialMediaList: [],
            baseUrl: process.env.VUE_APP_BASE_URL,
            publicPath: process.env.BASE_URL
        } 
    },
    async mounted() {
        try {
            const res = await this.$axios.get("/social")
            this.socialMediaList = res.data
        } catch (error) {
            console.log(error)
        }
    }
}
</script>