<template>
    <section id="js-scroll-to-portfolio" class="u-content-space">
        <b-container>
            <header class="text-center w-md-50 mx-auto mb-8">
                <h2 class="h1">My Portfolio</h2>
                <p class="h5">Checkout below the themes and sites that I developed and plugins I created.</p>
            </header>

            <ul class="u-portfolio-controls text-center mb-5">
                <li class="u-portfolio-controls__item"><a class="filter" data-filter="all">All</a></li>
                <li class="u-portfolio-controls__item"><a class="filter" data-filter=".wordpress">PSD to WordPress</a></li>
                <li class="u-portfolio-controls__item"><a class="filter" data-filter=".html">PSD to HTML</a></li>
                <li class="u-portfolio-controls__item"><a class="filter" data-filter=".woocommerce">PSD to WooCommerce</a></li>
                <li class="u-portfolio-controls__item"><a class="filter" data-filter=".design">Web Design</a></li>
                <li class="u-portfolio-controls__item"><a class="filter" data-filter=".plugin">WordPress Plugins</a></li>
            </ul>
            <b-row class="collections gallery u-portfolio no-gutters mb-6">
                <figure v-for="(portfolio, index) in portfolioList" :key="index" :class="['mix col-sm-6 col-md-4 u-portfolio__item', `${Array.isArray(portfolio.category) ? portfolio.category.join(' ') : portfolio.category}`]">
                    <img class="u-portfolio__image lazyload" :src="`${publicPath}images/thumbs/${portfolio.thumbnail}`" :alt="`${portfolio.title}`">
                    <figcaption class="u-portfolio__info">
                        <h6 class="mb-0">{{ portfolio.title }}</h6>
                        <small class="d-block">{{ Array.isArray(portfolio.category) ? portfolio.category.join(', ').toUpperCase() : `${portfolio.category.toUpperCase()}` }}</small>
                    </figcaption>
                    <a class="u-portfolio__zoom" :href="`${publicPath}images/${portfolio.image}`" :title="`${ portfolio.title }`" :data-url="`${ portfolio.website }`">Zoom</a>
                </figure>
            </b-row>
        </b-container>
    </section>
</template>

<script>
import json from '../data/portfolio.json'

export default {
    name: "Portfolio",
    data() {
        return {
            portfolioList: json,
            publicPath: process.env.BASE_URL
        }
    },
    mounted: function() {

    },
    methods: {
    }
}
</script>