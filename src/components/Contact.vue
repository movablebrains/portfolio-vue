<template>
    <section id="js-scroll-to-contact" class="section section-contact text-center u-content-space">
        <b-container>
            <header class="text-center w-md-50 mx-auto mb-8">
                <h2 class="h1">Let's Talk</h2>
                <p class="h5">Thanks for dropping by. Send me an information about your project so I can determine how can I help you.</p>
            </header>
            <b-form @submit.prevent="handleSubmit" name="contact" class="text-center w-md-75 mx-auto" method="post"  data-netlify="true" data-netlify-honeypot="bot-field">
                <b-form-input name="form-name" value="contact" hidden></b-form-input>

                <b-row>
                    <b-col lg="6" class="form-group mb-4">
                        <b-form-input v-model.trim="$v.form.name.$model" type="text" class="form-control" placeholder="Full Name" name="name" aria-describedby="name-live-feedback" :state="$v.form.name.$dirty ? !$v.form.name.$error : null"></b-form-input>
                        <b-form-invalid-feedback id="name-live-feedback">
                            Field is required and name must have at least {{ $v.form.name.$params.minLength.min }} characters.
                        </b-form-invalid-feedback>
                    </b-col>
                    <b-col lg="6" class="form-group mb-4">
                        <b-form-input v-model.trim="$v.form.email.$model" type="email" class="form-control" placeholder="Email Address" name="email" aria-describedby="email-live-feedback" :state="$v.form.email.$dirty ? !$v.form.email.$error : null"></b-form-input>
                        <b-form-invalid-feedback id="email-live-feedback">
                            Field is required and email must be a valid email.
                        </b-form-invalid-feedback>
                    </b-col>
                    <b-col lg="12" class="form-group mb-4">
                        <b-form-textarea v-model.trim="$v.form.message.$model" name="message" cols="80" rows="4" class="form-control form-control-lg" placeholder="Your Message" aria-describedby="message-live-feedback" :state="$v.form.message.$dirty ? !$v.form.message.$error : null"></b-form-textarea>
                        <b-form-invalid-feedback id="message-live-feedback">Field is required</b-form-invalid-feedback>
                    </b-col>
                    <b-col lg="12" class="text-center mb-4">
                        <b-button type="submit" class="btn btn-lg btn-primary py-3 px-4" :disabled="submitStatus === 'PENDING'">Send Message</b-button>
                    </b-col>
                    <b-col lg="12" class="text-center">
                        <b-alert :show="submitStatus === 'OK'" variant="success">Thanks for your submission!</b-alert>
                        <b-alert :show="submitStatus === 'ERROR'" variant="danger">Please fill the form correctly.</b-alert>
                        <b-alert :show="submitStatus === 'PENDING'" variant="info">Sending...</b-alert>
                    </b-col>
                </b-row>
            </b-form>
        </b-container>
    </section>
</template>

<script>
import { validationMixin } from 'vuelidate'
import { required, minLength, email } from 'vuelidate/lib/validators'

export default {
    name: "Contact",
    mixins: [validationMixin],
    data() {
        return {
            form: {
                name: '',
                email: '',
                message: ''
            },
            submitStatus: null
        }
    },
    validations: {
        form: {
            name: {
                required,
                minLength: minLength(2)
            },
            email: {
                required,
                email
            },
            message: {
                required
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
            this.$v.form.$touch()
            if (this.$v.$invalid) {
                this.submitStatus = 'ERROR'
            } else {
                this.submitStatus = 'PENDING'
                setTimeout(() => {
                    fetch('/', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                        body: this.encode({
                            'form-name': 'contact', 
                            ...this.form
                        })
                    })
                        .then(() => {
                            this.$router.push('thanks')
                        })
                        .catch(() => {
                            this.router.push('404')
                        })

                    this.submitStatus = 'OK'
                }, 500)
            }
        }
    }
}
</script>