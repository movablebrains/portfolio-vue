import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '@/views/Home.vue'
import NotFound from '@/views/404.vue'
import FormSuccess from '@/components/SubmissionSuccess.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: "history",
  routes: [
    { 
      path: '/', 
      name: 'home', 
      component: Home 
    },
    { 
      path: '/404', 
      alias: '*', 
      component: NotFound 
    },
    {
      path: '/thanks',
      name: 'thanks',
      component: FormSuccess
    }
  ]
})

export default router