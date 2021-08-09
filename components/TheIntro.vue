<template>
  <section id="intro" class="intro">
    <div class="triangle triangle--bottom"></div>
    <div class="intro__video">
      <video
        autoplay
        muted
        loop
        autobuffer
        :poster="require('~/assets/img/intro.jpg')"
      >
        <source src="~/assets/video/intro.webm" type="video/webm" />
        <source src="~/assets/video/intro.mp4" type="video/mp4" />
        <source src="~/assets/video/intro.ogv" type="video/ogv" />
      </video>
    </div>
    <div class="shade shade--dark"></div>
    <div class="container">
      <div class="row">
        <div class="col-md-8">
          <h1 class="display-3 intro--text">Кибербиатлон<sup>2020</sup></h1>
          <p class="lead">
            Командные соревнования по информационной безопасности среди
            школьников
          </p>
          <p>
            <a href="#info" class="btn btn-primary btn-lg gform">
              Подробнее
            </a>
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'TheIntro',
  data: () => ({
    gform: 'https://priem.mirea.ru/forms/cyberbiathlon/'
  })
}
</script>

<style lang="scss">
@import '~bootstrap/scss/functions';
@import '~bootstrap/scss/variables';
@import '~bootstrap/scss/mixins';

.intro {
  &--text {
    @media (max-width: 991px) {
      font-size: 2.5rem;
    }
  }
  position: relative;
  overflow: hidden;

  padding: 85px 0px 210px;
  background: #000000 url('~assets/img/intro.jpg') center center no-repeat;
  color: #fff;

  @include media-breakpoint-up(lg) {
    background-size: cover;
  }

  &__video {
    position: absolute;
    min-width: 100%;
    min-height: 100%;
    top: 0;
    bottom: 0;

    > * {
      position: absolute;
      min-width: 100%;
      min-height: 100%;
      width: auto;
      height: auto;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);

      @include media-breakpoint-up(lg) {
        width: 100vw;
      }
    }
  }
}
</style>
