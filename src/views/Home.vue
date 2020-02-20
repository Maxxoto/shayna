<template>
  <div>
    <Header />
    <Hero />
    <Content />
    <IGFeed />
    <Partner />
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
import Hero from '@/components/Hero.vue'
import Content from '@/components/Content.vue'
import IGFeed from '@/components/InstagramFeed.vue'
import Partner from '@/components/Partner.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'Home',
  components: {
    Header,
    Hero,
    Content,
    IGFeed,
    Partner,
    Footer,
  }
}
</script>
