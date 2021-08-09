<template>
  <div class="content">
    <the-navbar />
    <the-intro />
    <info />
    <about />
    <chronology />
    <!-- <registration /> -->
    <gallery class="my-5" />
    <!--    <route />-->
    <the-footer />
  </div>
</template>

<script>
import TheNavbar from '~/components/TheNavbar.vue'
import TheIntro from '~/components/TheIntro.vue'
import Info from '~/components/Info.vue'
import About from '~/components/About.vue'
// import Registration from '~/components/Registration.vue'
// import Route from '~/components/Route.vue'
import TheFooter from '~/components/TheFooter.vue'
import Chronology from '~/components/Chronology.vue'
import Gallery from '~/components/Gallery.vue'

export default {
  components: {
    TheNavbar,
    TheIntro,
    Info,
    About,
    // Registration,
    // Route,
    TheFooter,
    Chronology,
    Gallery
  },
  head() {
    return {
      title: 'Кибербиатлон 2020'
    }
  }
}
</script>

<style>
/* .container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
} */

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
