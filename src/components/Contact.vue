<template>
    <section id="js-scroll-to-contact" class="section section-contact text-center u-content-space">
        <b-container>
            <header class="text-center w-md-50 mx-auto mb-8">
                <h2 class="h1">Let's Talk</h2>
                <p class="h5">Thanks for dropping by. Send me an information about your project so I can determine how can I help you.</p>
            </header>
            <form name="contact" class="text-center w-md-75 mx-auto" method="post" action="" netlify>
                <input type="hidden" name="form-name" value="contact" />
                <b-row>
                    <b-col lg="6" class="form-group mb-4">
                        <input type="text" class="form-control" placeholder="Full Name" name="fullname">
                    </b-col>
                    <b-col lg="6" class="form-group mb-4">
                        <input type="email" class="form-control" placeholder="Email Address" name="email">
                    </b-col>
                    <b-col lg="12" class="form-group mb-4">
                        <textarea name="message" cols="80" rows="4" class="form-control form-control-lg" placeholder="Your Message"></textarea>
                    </b-col>
                    <b-col lg="12" class="form-group mb-4">
                        <div data-netlify-recaptcha="true"></div>
                    </b-col>
                    <b-col lg="12" class="text-center">
                        <button type="submit" class="btn btn-lg btn-primary py-3 px-4">Send Message</button>
                    </b-col>
                </b-row>
            </form>
        </b-container>
    </section>
</template>

<script>
export default {
    name: "Contact"
}
</script>