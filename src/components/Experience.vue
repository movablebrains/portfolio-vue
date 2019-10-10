<template v-for="(experience, index) in experienceList">
    <section id="js-scroll-to-experience" class="section section-experience u-content-space">
        <b-container>
            <header class="text-center w-md-50 mx-auto mb-8">
                <h2 class="h1">Work Experience</h2>
                <p class="h5">I have worked for various digital web agencies all over the world from Australia and the United States.</p>
            </header>
            <div v-for="(experience, index) in experienceList" :key="index" class="resume-item d-flex flex-column flex-md-row justify-content-between mb-5 ">
                <div class="resume-content">
                    <h3 class="mb-0">{{ experience.position }}</h3>
                    <div class="subheading mb-3 text-primary">{{ experience.company }}</div>
                    <ul>
                        <li v-for="(summary, index) in experience.summary" :key="index">
                            {{ summary }}
                        </li>
                    </ul>
                </div>
                <div class="resume-date text-md-right">
                    <span class="text-muted" v-for="(date, index) in experience.date" :key="index">{{ date.start }} - {{ date.end }}</span>
                </div>
            </div>
        </b-container>
    </section>
</template>

<script>
import json from '../data/experience.json'

export default {
    name: "Experience",
    data() {
        return {
            experienceList: json
        }
    },
    mounted: function() {

    },
    methods: {

    }
}
</script>