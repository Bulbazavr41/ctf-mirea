<template>
  <section id="gallery" class="gallery">
    <div class="container">
      <div class="row">
        <div class="carousel-wrapper mb-5">
          <client-only>
            <slick :options="slickOptions">
              <div
                v-for="(image, index) in images"
                ref="slick"
                :key="'image-' + index"
                class="img-wrapper"
              >
                <img class="shadow-sm" :src="image.img" />
              </div>
            </slick>
          </client-only>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data: () => ({
    slickOptions: {
      arows: false,
      slidesToShow: 2,
      speed: 300,
      centerMode: true,
      centerPadding: '30px',
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            width: 100
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
    },
    images: [
      {
        img: require('~/assets/img/carousel/1.jpg')
      },
      {
        img: require('~/assets/img/carousel/3.jpg')
      },
      {
        img: require('~/assets/img/carousel/4.jpg')
      },
      {
        img: require('~/assets/img/carousel/5.jpg')
      },
      {
        img: require('~/assets/img/carousel/6.jpg')
      },
      {
        img: require('~/assets/img/carousel/7.jpg')
      },
      {
        img: require('~/assets/img/carousel/8.jpg')
      },
      {
        img: require('~/assets/img/carousel/9.jpg')
      },
      {
        img: require('~/assets/img/carousel/10.jpg')
      }
    ]
  })
}
</script>

<style lang="scss">
.carousel-wrapper {
  max-width: 100%;
  overflow-x: hidden;
}
.img-wrapper {
  @media (max-width: 991px) {
    padding: 10px;
  }
  img {
    width: 500px;
    max-height: 480px;
    border-radius: 10px;

    @media (max-width: 991px) {
      width: 100%;
    }
  }
}
</style>
