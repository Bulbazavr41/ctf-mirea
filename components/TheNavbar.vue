<template>
  <b-navbar class="fixed-top" toggleable="lg" type="light" variant="light">
    <div class="container">
      <b-navbar-brand href="#">Кибербиатлон<sup>2020</sup></b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <ul class="navbar-nav mr-auto">
            <li
              v-for="(item, index) in menu"
              :key="`menu-item-${index}`"
              class="nav-item"
            >
              <a class="nav-link" :href="item.href" v-text="item.title" />
            </li>
          </ul>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-button
          href="#info"
          target="_blank"
          class="ml-auto"
          variant="outline-primary"
        >
          Подробнее
        </b-button>
      </b-collapse>
    </div>
  </b-navbar>
</template>

<script>
export default {
  name: 'TheNavbar',
  data: () => ({
    menu: [
      { title: 'Информация', href: '#info' },
      { title: 'Организаторы', href: '#about' },
      // { title: 'Как добраться', href: '#route' },
      { title: 'Хронология соревнований', href: '#chronology' }
    ],
    gform: 'https://priem.mirea.ru/forms/cyberbiathlon/'
  })
}
</script>
