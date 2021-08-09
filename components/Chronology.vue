<template>
  <section id="chronology" class="chronology">
    <div class="container">
      <div class="row">
        <div class="col-12 mb-4">
          <h2 class="display-4">Хронология соревнований</h2>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-9">
          <p>
            <b> Кибербиатлон</b> регулярно проводится в <b>РТУ МИРЭА</b> начиная
            с 2016 года. За эти года Кибербиатлон помог многим школьникам
            определится с своей будущей профессией и улучшить свои навыки в
            области <b>Информационной безопасности</b> .
          </p>
        </div>
        <div class="col-lg-3 text-center image">
          <img src="~/assets/img/shield.svg" alt="" width="128px" />
        </div>
      </div>
    </div>
    <div class="container">
      <div>
        <div class="timeline-wrapper">
          <div class="timeline">
            <div
              v-for="(event, index) in events"
              :key="'event-' + index"
              :class="event.type"
              class="event"
            >
              <h4>{{ event.name }}</h4>
              <p>{{ event.date }}</p>
            </div>
          </div>
          <div class="line"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data: () => ({
    events: [
      //   {
      //     name: 'Кибербиатлон 2016',
      //     date: '23 апреля 2016'
      //   },
      {
        name: 'Кибербиатлон 2017',
        date: '22 апреля 2017'
      },
      {
        name: 'Кибербиатлон 2018',
        date: '15 апреля 2018'
      },
      {
        name: 'Кибербиатлон 2019',
        date: '1 апреля 2019'
      },
      {
        name: 'Кибербиатлон 2020',
        date: '18 апреля 2020',
        type: 'active'
      }
    ]
  })
}
</script>

<style lang="scss">
.chronology {
  $blue: #007bff;
  padding: 64px 0;

  .image {
    margin-top: -2rem;
    @media (max-width: 991px) {
      display: none;
    }
  }

  .active {
    background: $blue;
    box-shadow: 0px 0px 10px #ccc;
    color: white;
  }

  .timeline-wrapper {
    position: relative;
    margin: 32px 0;
    padding: 8px 0;

    @media (max-width: 1200px) {
      overflow-x: scroll;
    }

    .line {
      position: absolute;
      height: 10px;
      transition: 0.75s ease-out;
      width: 100%;
      z-index: 0 !important;
      left: 0;
      right: 0;
      bottom: 0px;
    }
  }
  .timeline {
    display: flex;
    transition: all 0.3s;

    padding-bottom: 30px;
    border-bottom: 10px solid $blue;
    margin: 0 0 50px 0;

    @media (max-width: 1200px) {
      min-width: 1140px;
    }

    .event {
      //   background: lighten($blue, 50);
      padding: 1em;
      border-radius: 5px;
      position: relative;
      margin: 0 2rem 0 2rem;
      transition: all 0.3s;
      box-shadow: 0 0 5px #ccc;
      text-align: center;

      h2 {
        position: relative;
        z-index: 1;
      }

      * {
        padding: 0;
        margin: 0;
      }

      &:hover {
        // color:lighten($blue,10);
        // background: lighten($blue, 40);
        box-shadow: 0px 0px 10px #ccc;
        transform: scale(1.1);
        z-index: 2;
      }
      &:hover::after {
        bottom: -65px;
        // border-color: darken($blue, 10);
        z-index: 2;
      }

      &::after {
        // position: absolute;
        margin: 0 auto;
        position: relative;
        bottom: -75px;
        content: '';
        display: block;
        border-radius: 1000px;
        height: 48px;
        width: 48px;
        box-sizing: border-box;
        // box-shadow: 0 0 5px darken($blue, 10);
        background: #fff;
        border: 5px solid $blue;
        transition: all 0.25s;
        z-index: 2;
      }
    }
  }
}
</style>
