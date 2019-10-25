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
                <li class="u-portfolio-controls__item"><a class="filter" data-filter=".woocommerce">PSD to WooCommerce</a></li>
                <li class="u-portfolio-controls__item"><a class="filter" data-filter=".design">Web Design</a></li>
                <li class="u-portfolio-controls__item"><a class="filter" data-filter=".plugin">WordPress Plugins</a></li>
            </ul>
            <b-row class="collections gallery u-portfolio no-gutters mb-6">
                <figure v-for="(portfolio, index) in portfolioList" :key="index" :class="['mix col-sm-6 col-md-4 u-portfolio__item', `${Array.isArray(portfolio.category) ? portfolio.category.join(' ') : portfolio.category}`]">
                    <img class="u-portfolio__image lazyload" :data-src="`${publicPath}images/thumbs/${portfolio.thumbnail}`" :alt="`${portfolio.title}`">
                    <figcaption class="u-portfolio__info">
                        <h6 class="mb-0">{{ portfolio.title }}</h6>
                        <small class="d-block">
                            <template v-if="Array.isArray(portfolio.category)">
                                <template v-for="(category, index) in portfolio.category">
                                    {{ category == 'wordpress' ? 'WordPress' : category == 'woocommerce' ? 'WooCommerce' : category | uppercase(true) }}<template v-if="index != (portfolio.category.length - 1)">, </template>
                                </template>
                            </template>
                            <template v-else-if="portfolio.category == 'wordpress'">
                                WordPress
                            </template>
                            <template v-else-if="portfolio.category == 'woocomerce'">
                                WooCommerce
                            </template>
                            <template v-else-if="portfolio.category == 'html'">
                                HTML
                            </template>
                            <template v-else>
                                {{portfolio.category | uppercase(true)}}
                            </template>
                        </small>
                    </figcaption>
                    <a class="u-portfolio__zoom" :href="`${publicPath}images/${portfolio.image}`" :title="`${ portfolio.title }`" :data-url="`${ portfolio.website }`">Zoom</a>
                </figure>
            </b-row>
        </b-container>
    </section>
</template>

<script>
import json from '../data/portfolio.json'
import mixitup from 'mixitup'
/* eslint-disable no-unused-vars */
import magnificPopup from 'magnific-popup'
/* eslint-enable no-unused-vars */

export default {
    name: "Portfolio",
    data() {
        return {
            portfolioList: json,
            publicPath: process.env.BASE_URL
        }
    },
    filters: {
        uppercase: function(value, onlyFirstCharacter) {
            if (!value) {
                return '';
            }
        
            value = value.toString();
        
            if (onlyFirstCharacter) {
                return value.charAt(0).toUpperCase() + value.slice(1);
            } else {
                return value.toUpperCase();
            }
        }
    },
    mounted() {
        /* eslint-disable no-unused-vars */
        var containerEl = document.querySelector('.collections');
        var mixer = mixitup(containerEl, {
            callbacks: {
                onMixStart: function(state,futureState){
                }
            }
        });

        // Magnific Popup
        $(document).ready(function(){
            $('.gallery').magnificPopup({
                delegate: 'a',
                type: 'image',
                tLoading: 'Loading image #%curr%...',
                mainClass: 'mfp-img-mobile',
                gallery: {
                    enabled: true,
                    navigateByImgClick: true,
                    preload: [0,1] // Will preload 0 - before current, and 1 after the current image
                },
                image: {
                    tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
                    titleSrc: function(item) {
                        if ( item.el.data("url") ) {
                            return '<a target="_blank" href="'+item.el.data("url")+'">Visit Site</a>';
                        } else {
                            return '';
                        }
                    }
                }
            });
        });
        /* eslint-enable no-unused-vars */
    }
}
</script>