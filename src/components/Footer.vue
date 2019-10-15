<template>
    <footer class="bg-dark py-5">
        <b-container>
            <b-row>
                <b-col md="8" class="text-center text-md-left mb-3 mb-md-0">
                        <small class="text-white">
                        &copy; {{new Date().getFullYear()}} Rotsen Acob. All Rights Reserved.
                        </small>
                </b-col>
                <b-col md="4" class="align-self-center">
                    <ul class="list-inline text-center text-md-right mb-0">
                        <li class="list-inline-item mx-2" v-for="(socialMedia, index) in socialList" :key="index">
                            <b-link :href="socialMedia.url" class="text-white" v-if="socialMedia.icon != 'envelope'">
                                    <font-awesome-icon :icon="['fab', `${socialMedia.icon}`]"></font-awesome-icon>
                                </b-link>
                        </li>
                    </ul>
                </b-col>
            </b-row>
        </b-container>
    </footer>
</template>

<script>
import json from '../data/social.json'

export default {
    name: "Footer",
    data() {
        return {
            socialList: json
        }
    }
}
</script>