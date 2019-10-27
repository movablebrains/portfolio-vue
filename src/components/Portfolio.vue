<template>
    <section id="js-scroll-to-portfolio" class="u-content-space">
        <b-container>
            <header class="text-center w-md-50 mx-auto mb-8">
                <h2 class="h1">My Portfolio</h2>
                <p class="h5">Checkout below the themes and sites that I developed and plugins I created.</p>
            </header>

            <ul class="u-portfolio-controls text-center mb-5">
                <li class="u-portfolio-controls__item"><a class="filter" @click="filter('all')">All</a></li>
                <li class="u-portfolio-controls__item"><a class="filter" @click="filter('wordpress')">PSD to WordPress</a></li>
                <li class="u-portfolio-controls__item"><a class="filter" @click="filter('woocommerce')">PSD to WooCommerce</a></li>
                <li class="u-portfolio-controls__item"><a class="filter" @click="filter('design')">Web Design</a></li>
                <li class="u-portfolio-controls__item"><a class="filter" @click="filter('plugin')">WordPress Plugins</a></li>
            </ul>
            <transition-group name="list-complete" class="list-complete row no-gutters mb-6 gallery u-portfolio" tag="section">
                <figure v-for="portfolio in listItems" :key="portfolio.title" :class="['mix col-sm-6 col-md-4 u-portfolio__item list-complete-item', `${Array.isArray(portfolio.category) ? portfolio.category.join(' ') : portfolio.category}`]">
                    <img class="u-portfolio__image lazyload" :data-src="`${publicPath}images/thumbs/${portfolio.thumbnail}`" :alt="`${portfolio.title}`">
                    <figcaption class="u-portfolio__info">
                        <h6 class="mb-0">{{ portfolio.title }}</h6>
                        <small class="d-block">
                            <template v-if="Array.isArray(portfolio.category)">
                                <template v-for="(category, index) in portfolio.category">
                                    {{ category == 'wordpress' ? 'WordPress' : category | uppercase(true) }}<template v-if="index != (portfolio.category.length - 1)">, </template>
                                </template>
                            </template>
                            <template v-else-if="portfolio.category == 'wordpress'">
                                WordPress
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
            </transition-group>
        </b-container>
    </section>
</template>

<script>
import _ from 'lodash'
/* eslint-disable no-unused-vars */
import magnificPopup from 'magnific-popup'
/* eslint-enable no-unused-vars */

export default {
    name: "Portfolio",
    data() {
        return {
            portfolioList: [],
            publicPath: process.env.BASE_URL,
            initialFilter: 'all'
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
    created() {
        this.listPortfolio()
    },
    mounted() {

        /* eslint-disable no-unused-vars */
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
    },
    computed: {
        listItems: function() {
            var filter = this.initialFilter
            if (filter != 'all' ) {
                return this.portfolioList.filter(function(item){
                    return item.category.indexOf(filter) !== -1
                })
            } else {
                return this.portfolioList
            }
        }
    },
    methods: {
        listPortfolio: async function() {
            const res = await this.$axios.get('/portfolio')
            this.portfolioList = res.data
        },
        shuffle: function() {
            /* eslint-disable no-unused-vars */
            this.portfolioList = _.shuffle(this.portfolioList)
            /* eslint-enable no-unused-vars */
        },
        filter: function(tag) {
            this.initialFilter = tag
        }
    }
}
</script>
<style lang="scss" scoped>
    .list-complete-item {
        transition: transform 1s;
    }
    .list-complete-enter, .list-complete-leave-to  {
        opacity: 0;
        transform: translateY(30px);
    }
    .list-complete-leave-active {
        position: absolute;
    }
</style>