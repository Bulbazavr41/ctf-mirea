import Vue from 'vue'
import Slick from 'vue-slick'

const SlickSlide = {
  install(Vue, options) {
    Vue.component('slick-slide', Slick)
  }
}

const SlickCarousel = {
  install(Vue, options) {
    Vue.component('slick-carousel', Slick)
  }
}

Vue.use(SlickSlide)
Vue.use(SlickCarousel)
export default { SlickSlide, SlickCarousel }
