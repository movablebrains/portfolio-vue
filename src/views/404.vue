<template>
  <main id="content">
    <NotFound />
  </main>
</template>

<script>
import NotFound from '@/components/404.vue'

export default {
  name: 'not-found',
  metaInfo: {
    title: 'Page Not Found'
  },
  components: {
    NotFound
  }
}
</script>