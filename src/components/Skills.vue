<template>
    <section id="js-scroll-to-skills" class="section section-skills u-content-space bg-light">
        <b-container class="skills">
            <header class="text-center w-md-50 mx-auto mb-8">
                <h2 class="h1">My Skills</h2>
                <p class="h5"></p>
            </header>
            <b-row>
                <b-col lg="12" v-for="(skill, index) in skillsList" :key="index">
                    <h5 class="u-font-size-90 mb-1">{{skill.skill}} - {{ skill.value }} % </h5>
                    <div class="progress mb-3" style="height: 5px;">
                        <div :class="['progress-bar', `bg-${index % 2 ? 'secondary' : 'primary'}`]" role="progressbar" :style="`width: ${skill.value}%`" :aria-valuenow="`${skill.value}`" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                </b-col>
            </b-row>
        </b-container>
    </section>
</template>

<script>
// import json from '../data/skills.json'

export default {
    name: "Skills",
    data() {
        return {
            skillsList: []
        }
    },
    async mounted() {
        try {
            const res = await this.$axios.get("/skills")
            this.skillsList = res.data
        } catch (error) {
            console.log(error)
        }
    }
}
</script>