<template>
  <b-jumbotron
    class="u-promo-block u-promo-block--mheight-500 u-overlay u-overlay--dark text-white"
  >
    <vue-particles
      color="#dedede"
      :particleOpacity="0.7"
      :particlesNumber="80"
      shapeType="circle"
      :particleSize="4"
      linesColor="#dedede"
      :linesWidth="1"
      :lineLinked="true"
      :lineOpacity="0.4"
      :linesDistance="150"
      :moveSpeed="3"
      :hoverEffect="true"
      hoverMode="grab"
      :clickEffect="true"
      clickMode="push"
    ></vue-particles>
    <b-container class="u-overlay__inner u-ver-center u-content-space">
      <b-row class="justify-content-center">
        <b-col cols="12">
          <div class="text-center">
            <h1 class="display-sm-4 display-lg-3">Rotsen Mark Acob</h1>
            <p class="h6 text-uppercase u-letter-spacing-sm mb-2">Web Developer</p>
            <ul class="list-inline text-center mb-0">
              <li
                v-for="socialMedia in socialMediaList"
                :key="socialMedia.id"
                class="list-inline-item mx-2"
              >
                <b-link
                  :id="socialMedia.icon"
                  :href="socialMedia.url"
                  class="text-white"
                  v-if="socialMedia.icon == 'envelope'"
                >
                  <font-awesome-icon :icon="['fas', `${socialMedia.icon}`]"></font-awesome-icon>
                </b-link>
                <b-link :id="socialMedia.icon" :href="socialMedia.url" class="text-white" v-else>
                  <font-awesome-icon :icon="['fab', `${socialMedia.icon}`]"></font-awesome-icon>
                </b-link>
                <b-tooltip :target="socialMedia.icon" triggers="hover">{{ socialMedia.title }}</b-tooltip>
              </li>
            </ul>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </b-jumbotron>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      socialMediaList: [],
      baseUrl: process.env.VUE_APP_BASE_URL,
      publicPath: process.env.BASE_URL
    };
  },
  mounted() {
    this.social();
  },
  methods: {
    social: async function() {
      try {
        const res = await this.$axios.get("/social");
        this.socialMediaList = res.data;
      } catch (e) {
        console.log(e);
      }
    }
  }
};
</script>
<style lang="scss" scoped>
  .u-promo-block {
    background: rgba(68, 32, 93, 1.0);
    background: -webkit-linear-gradient(top, rgba(68, 32, 93, 1.0), rgba(255, 255, 255, 1.0));
    background: -moz-linear-gradient(top, rgba(68, 32, 93, 1.0), rgba(255, 255, 255, 1.0));
    background: linear-gradient(to bottom, rgba(68, 32, 93, 1.0), rgba(255, 255, 255, 1.0));
    overflow: hidden;
  }
  #particles-js {
    position: absolute;
    canvas {
      position: absolute;
    }
  }
</style>