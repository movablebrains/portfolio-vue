<template>
  <b-jumbotron class="mb-0 js-parallax u-promo-block h-100 u-overlay u-overlay--dark text-white lazyload" :style="`background-image:url(${publicPath}images/carlos-muza-84523-unsplash.jpg)`">
    <b-container class="u-overlay__inner u-ver-center u-content-space">
        <b-row class="justify-content-center">
            <b-col cols="12" >
                <div class="text-center">
                    <h1 class="display-sm-4 display-lg-3">Not Found, error 404</h1>
                    <p class="h6 text-uppercase u-letter-spacing-sm mb-2 mx-auto w-md-75">The page you are looking for no longer exists. Perhaps you can return back to the <router-link to="/">homepage</router-link> and see if you can find what you are looking for.</p>
                </div>
            </b-col>

        </b-row>
    </b-container>
  </b-jumbotron>
</template>

<script>
export default {
  data() {
    return {
      publicPath: process.env.BASE_URL
    }
  }
}
</script>