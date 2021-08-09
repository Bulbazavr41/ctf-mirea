<template>
  <section id="about" class="about">
    <div class="triangle triangle--top"></div>
    <div class="triangle triangle--bottom"></div>
    <div class="container">
      <div class="row">
        <div class="col-12 mb-4">
          <h2 class="display-4">Организаторы</h2>
        </div>
        <div class="col-lg-6">
          <h3>
            Институт Комплексной Безопасности и Специального Приборостроения
          </h3>
          <p>
            Институт КБиСП является одним из самых многочисленных и старейших
            институтов РТУ МИРЭА и одним из лучших по подготовке специалистов в
            области Информационной Безопасности.
          </p>

          <h3>
            Кафедра КБ-4 &laquo;Интеллектуальные системы информационной
            безопасности&raquo;
          </h3>
          <p>
            Преподаватели, работающие на данной кафедре, славятся своим
            профессионализмом и уже на протяжении многих лет готовят лучших
            IT-специалистов. Хорошая оснащенность оборудованием позволяет
            проводить обучение на самом высоком уровне.
          </p>

          <h3>Инжиниринговый центр мобильных решений &laquo;ExpLabs&raquo;</h3>
          <p>
            Explabs – одна из ведущих научных лабораторий, в работу которой
            вовлечены наиболее перспективные студенты и аспиранты РТУ МИРЭА,
            занимающиеся научно-исследовательской деятельностью.
          </p>
        </div>
        <div class="col-lg-6">
          <no-ssr>
            <div
              v-masonry
              transition-duration="0.3s"
              column-width=".logos__sizer"
              item-selector=".logos__logo"
              class="logos"
            >
              <div class="logos__sizer" />
              <div
                v-for="(partner, index) in partners"
                :key="`partner-${index}`"
                v-masonry-tile
                :class="[
                  'logos__logo',
                  `logos__logo--${index}`,
                  `logos__logo--${partner.size}`
                ]"
              >
                <a :href="partner.href" target="_blank" :title="partner.title">
                  <img :alt="partner.title" :src="partner.img" />
                </a>
              </div>
            </div>
          </no-ssr>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data: () => ({
    partners: {
      mirea: {
        href: 'https://www.mirea.ru/',
        img: require('~/assets/img/mirea.png'),
        size: '2x',
        title: 'РТУ МИРЭА'
      },
      ikbsp: {
        href: 'https://ikbsp.ru/',
        img: require('~/assets/img/logo-ikbsp.svg'),
        size: '2x',
        title: 'ИКБСП'
      },
      volgactf: {
        href: 'https://volgactf.ru/',
        img: require('~/assets/img/logo-volgactf.svg'),
        title: 'VolgaCTF'
      },
      deteact: {
        href: 'https://deteact.com/',
        img: require('~/assets/img/logo-deteact.png'),
        title: 'Deteact'
      },
      explabs: {
        href: 'https://explabs.ru/?ref=ctf',
        img: require('~/assets/img/logo-explabs.svg'),
        size: '2x',
        title: 'Explabs'
      },
      bykvaadm: {
        href: 'https://t.me/bykvaadm',
        img: require('~/assets/img/logo-bykvaadm.png'),
        title: 'Админим с Буквой'
      }
    }
  })
}
</script>

<style lang="scss">
.about {
  position: relative;
  overflow: hidden;
  padding: 180px 0;
  background-color: #343a40;
  color: white;
}

.logos {
  width: 100%;

  &__logo,
  &__sizer {
    width: 25%;
    padding: 10px;
  }

  &__logo {
    &--2x,
    &--mirea {
      width: 50%;
    }

    // &--ikbsp {
    //     width: 181px;
    // }

    img,
    svg {
      width: 100%;
      height: auto;
      transition: 0.15s;
      // filter: grayscale(1);

      &:hover {
        filter: none;
      }
    }

    svg {
      fill: #ffffff;
    }
  }
}
</style>
