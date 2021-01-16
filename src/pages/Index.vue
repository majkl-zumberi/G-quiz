<template>
  <q-page class="flex flex-center custom-bg">
    <img
      alt="Quasar logo"
      src="~assets/quasar-logo-full.svg"
    >
  </q-page>
</template>

<script>
export default {
  name: 'PageIndex',
};
</script>

<style lang="scss">
  .custom-bg{
    background-image: url("~assets/background.png");
    background-repeat: no-repeat;
    background-size: cover;
  }
</style>
