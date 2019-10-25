<template>
    <section id="js-scroll-to-testimonials" class="section section-testimonial u-content-space bg-light">
        <b-container>
            <header class="text-center w-md-50 mx-auto mb-8">
                <h2 class="h1">Testimonials</h2>
                <p class="h5">Do not take my words, check out what people say about me!</p>
            </header>
            <b-row>
                <b-col lg="6" :class="`mb-5 mb-lg-7 px-lg-5`" v-for="(testimonial, index) in testimonialList" :key="index">
                    <blockquote class="u-blockquote-v2 rounded mb-5">{{ testimonial.review }}</blockquote>
                    <div class="media u-font-size-90">
                        <img class="lazyload d-flex align-self-center rounded-circle u-blockquote-v2__image u-box-shadow-lg mx-3 mt-2 lazyload" :data-src="`${publicPath}images/upwork.png`" :alt="`${ testimonial.name }`">
                        <div class="media-body align-self-center">
                            <strong class="d-block">{{ testimonial.name }}</strong>
                            <span class="u-font-size-75 text-dark" v-if="testimonial.location != ''">{{ testimonial.location }}</span>
                        </div>
                    </div>
                </b-col>
            </b-row>
        </b-container>
    </section>
</template>

<script>
// import json from '../data/testimonials.json'

export default {
    name: "Testimonial",
    data() {
        return {
            testimonialList: [],
            publicPath: process.env.BASE_URL
        }
    },
    async mounted() {
        try {
            const res = await this.$axios.get("/testimonials")
            this.testimonialList = res.data
        } catch (error) {
            console.log(error)
        }
    }
}
</script>