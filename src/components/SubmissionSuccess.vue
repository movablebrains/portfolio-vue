<template>
  <b-jumbotron class="mb-0 js-parallax u-promo-block h-100 u-overlay u-overlay--dark text-white lazyload" :style="`background-image:url(${publicPath}images/carlos-muza-84523-unsplash.jpg)`">
    <b-container class="u-overlay__inner u-ver-center u-content-space">
        <b-row class="justify-content-center">
            <b-col cols="12" >
                <div class="text-center">
                    <h1 class="display-sm-4 display-lg-3">Thank you for your submission!</h1>
                    <b-button to="/">Back to Home</b-button>
                </div>
            </b-col>

        </b-row>
    </b-container>
  </b-jumbotron>
</template>

<script>
export default {
  name: 'SubmissionSuccess',
  metaInfo: {
    title: 'Thank You'
  },
  data() {
    return {
      publicPath: process.env.BASE_URL
    }
  }
}
</script>