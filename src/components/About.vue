<template>
    <section id="js-scroll-to-about">
        <b-container>
            <b-row>
                <b-col md="4" class="mx-auto">
                    <div class="u-pull-half text-center">
                        <img class="lazyload img-fluid u-avatar u-box-shadow-lg rounded-circle mb-3" :data-src="`${publicPath}images/rotsen-acob.jpg`" width="200" height="200" />
                    </div>
                </b-col>
            </b-row>
            <b-row class="u-content-space-bottom">
                <b-col lg="12" class="mb-5 mb-lg-5 pl-lg-5">
                    <header class="text-center w-md-60 mx-auto mb-8">
                        <h2 class="h1">About Me</h2>
                        <p class="h5">I'm a web developer with over seven years experience working on various digital web agencies. I'm skilled in Jekyll, WordPress, JavaScript, Git, the Command Line(CLI) and can work on multiple platforms(Windows, MacOS, Linux).</p>
                    </header>
                    
                    <ul class="programming-languages list-inline text-center d-none d-md-block">
                        <li v-for="Programming in programmingList" :key="Programming.name" class="list-inline-item ml-3 mr-3 ml-md-2 mr-md-2">
                            <b-button variant="primary" class="programming-icon">
                                <font-awesome-icon :icon="['fab', `${Programming.icon}`]" size="2x" fixed-width></font-awesome-icon>
                            </b-button>
                        </li>
                    </ul>
                </b-col>
            </b-row>
        </b-container>
    </section>
</template>

<script>
// import json from '../data/programming.json'

export default {
    name: "About",
    data() {
        return {
            programmingList: [],
            publicPath: process.env.BASE_URL
        }
    },
    async mounted() {
        try {
            const res = await this.$axios.get("/programming")
            this.programmingList = res.data
        } catch(e) {
            console.log(e)
        }
    }
}
</script>