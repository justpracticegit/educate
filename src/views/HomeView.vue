<template>
  <div class="home">
      <Introduction />
      <AboutIntro />
      <WatchVideo />
      <Course />
      <Review />
      <Rate />
      <FAQ />
      <Apply />
  </div>
</template>
<style scoped="">
.home{
 
}
</style>

<script>
// @ is an alias to /src
import Introduction from '@/components/Introduction.vue'
import AboutIntro from '@/components/AboutIntro.vue'
import WatchVideo from '@/components/WatchVideo.vue'
import Course from '@/components/Course.vue'
import Review from '@/components/Review.vue'
import Rate from '@/components/Rate.vue'
import FAQ from '@/components/FAQ.vue'
import Apply from '@/components/Apply.vue'
import FooterPage from '@/components/FooterPage.vue'
export default {
  name: 'HomeView',
  components: {
      Introduction,
      AboutIntro,
      WatchVideo,
      Course,
      Review,
      Rate,
      FAQ,
      Apply
  }
}
</script>

