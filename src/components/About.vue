<template>
  <section id="js-scroll-to-about">
    <b-container>
      <b-row>
        <b-col md="4" class="mx-auto">
          <div class="u-pull-half text-center">
            <img
              class="lazyload img-fluid u-avatar u-box-shadow-lg rounded-circle mb-3"
              :data-src="`${publicPath}images/rotsen-acob.jpg`"
              width="200"
              height="200"
            />
          </div>
        </b-col>
      </b-row>
      <b-row class="u-content-space-bottom">
        <b-col lg="12" class="mb-5 mb-lg-5 pl-lg-5">
          <header class="text-center w-md-60 mx-auto mb-8">
            <h2 class="h1">About Me</h2>
            <p
              class="h5"
            >I'm a web developer with over seven years experience working on various digital web agencies. I'm skilled in Jekyll, WordPress, JavaScript, Git, the Command Line(CLI) and can work on multiple platforms(Windows, MacOS, Linux).</p>
          </header>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script>
export default {
  name: "About",
  data: function() {
    return {
      programmingList: [],
      publicPath: process.env.BASE_URL
    }
	},
	methods: {
		getProgrammingList: async function() {
			try {
				const res = await this.$axios.get('/programming')
				this.programmingList = res.data
			} catch (error) {
				console.log(error)				
			}
		}
	},
	mounted: function() {
		this.getProgrammingList()
	}
};
</script>