<template>
  <section id="route" class="route">
    <div class="triangle triangle--top"></div>

    <div class="route__map">
      <script
        type="text/javascript"
        charset="utf-8"
        async
        src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A0408740cbff4f407044c237ecb100d81320adf336e5df2368660876bee762d66&amp;width=100%25&amp;height=100%&amp;lang=ru_RU&amp;scroll=true"
      ></script>
    </div>
  </section>
</template>

<script>
export default {}
</script>

<style lang="scss">
.route {
  position: relative;
  overflow: hidden;

  padding: 180px 0 480px;

  &__map {
    position: absolute;
    min-width: 100%;
    min-height: 100%;
    top: 0;
    bottom: 0;

    > * {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
