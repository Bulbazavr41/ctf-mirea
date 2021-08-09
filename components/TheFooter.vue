<template>
  <footer id="footer" class="footer">
    <div class="footer__above">
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <h2>Дата и место</h2>
            <ul class="fa-ul">
              <li>
                <font-awesome-icon :icon="['fas', 'clock']" />
                18 апреля 2020
              </li>
              <li>
                <font-awesome-icon :icon="['fas', 'map']" />
                <a href="https://goo.gl/maps/Gk9y5JZE7em" target="_blank">
                  #оставайтесьдома
                </a>
              </li>
              <!--              <li>-->
              <!--                <font-awesome-icon :icon="['fas', 'subway']" /> #оставайтесьдома-->
              <!--              </li>-->
            </ul>
          </div>
          <div class="col-md-6 footer__contact">
            <h2>Контакты</h2>
            <ul class="fa-ul">
              <li>
                <font-awesome-icon :icon="['fas', 'envelope']" />
                <a href="mailto:magomedov_sh@mirea.ru">magomedov_sh@mirea.ru</a>
              </li>
              <li>
                <font-awesome-icon :icon="['fas', 'phone']" />
                <a href="tel:+79154456283">+7 (915) 445-62-83</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="footer__below">
      <div class="container">
        <div class="row">
          <div class="col-lg-8 footer__copyright">
            <p>
              &copy; 2020 РТУ МИРЭА. Все права защищены.
            </p>
          </div>
          <div class="col-lg-4 footer__developer">
            <p>
              Дизайн и разработка &mdash;
              <a
                href="https://devolt.one/?utm_source=cyberbiathlon&utm_medium=footer&utm_campaign=word_of_mouth&utm_content=developer"
                target="_blank"
              >
                D.1
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {}
</script>

<style lang="scss">
$dark: #343a40;
.footer {
  position: relative;
  overflow: hidden;

  background-color: #343a40;
  color: white;

  a {
    color: white;
    text-decoration: none;
  }

  &__above {
    padding: 30px 0;
  }

  &__below {
    background-color: darken($color: $dark, $amount: 5%);
    position: relative;

    p {
      margin: 1em 0;
    }
  }

  &__contact {
  }

  &__copyright {
    @media (max-width: 991px) {
      text-align: center;
    }
  }

  &__developer {
    text-align: end;

    @media (max-width: 991px) {
      text-align: center;
    }

    a {
      font-family: 'Montserrat';
      font-weight: 900;
      // color: #e81e62;

      &:hover {
        // color: #ff608f;
        // color: #af0039;
      }
    }
  }

  .fa-ul {
    margin-left: 1.5em;
  }
}
</style>
