<template>

  <q-page class="flex flex-center custom-bg" >
    <q-spinner-ball
      v-if="isLoading"
        color="primary"
        size="2em"
    />
    <img
    v-else
      alt="Quasar logo"
      src="~assets/quasar-logo-full.svg"
    >
  </q-page>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'PageIndex',
  computed: {
    ...mapGetters(['isLoading']),
  },
};
</script>

<style lang="scss">
  .custom-bg{
    background-image: url("~assets/background.png");
    background-repeat: no-repeat;
    background-size: cover;
  }
</style>
