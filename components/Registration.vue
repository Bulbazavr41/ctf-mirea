<template>
  <section id="register" class="register">
    <div class="container my-5">
      <div class="row">
        <div class="col-12 text-center">
          <h2 class="display-4">Регистрация команды</h2>
          <p class="lead">
            Регистрация команды <strong>обязательна</strong> для участия в
            соревнованиях
          </p>
          <p>
            <a
              :href="gform"
              target="_blank"
              class="btn btn-primary btn-lg gform"
            >
              Регистрация
            </a>
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data: () => ({
    gform: 'https://priem.mirea.ru/forms/cyberbiathlon/'
  })
}
</script>

<style>
.register {
  position: relative;
  overflow: hidden;
}
</style>
