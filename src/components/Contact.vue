<template>
    <section id="js-scroll-to-contact" class="section section-contact text-center u-content-space">
        <b-container>
            <header class="text-center w-md-50 mx-auto mb-8">
                <h2 class="h1">Let's Talk</h2>
                <p class="h5">Thanks for dropping by. Send me an information about your project so I can determine how can I help you.</p>
            </header>
            <form @submit.prevent="handleSubmit" name="contact" class="text-center w-md-75 mx-auto" method="post"  data-netlify="true" data-netlify-honeypot="bot-field">
                <input type="hidden" name="form-name" value="contact" />

                <b-row>
                    <b-col lg="6" class="form-group mb-4">
                        <input v-model="form.name" type="text" class="form-control" placeholder="Full Name" name="name">
                    </b-col>
                    <b-col lg="6" class="form-group mb-4">
                        <input v-model="form.email" type="email" class="form-control" placeholder="Email Address" name="email">
                    </b-col>
                    <b-col lg="12" class="form-group mb-4">
                        <textarea v-model="form.message" name="message" cols="80" rows="4" class="form-control form-control-lg" placeholder="Your Message"></textarea>
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
    name: "Contact",
    data() {
        return {
            form: {
                name: '',
                email: '',
                message: ''
            }
        }
    },
    methods: {
        encode: function(data) {
            return Object.keys(data)
                .map(
                    key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`
                )
                .join('&')
        },
        handleSubmit: function() {
            fetch('/', {
                method: 'POST',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                body: this.encode({
                    'form-name': 'contact', 
                    ...this.form
                })
            })
                .then(() => console.log('Successfully sent'))
                .catch(error => console.log(error))
        }
    }
}
</script>