<template>
  <div id="q-app">
    <router-view />
  </div>
</template>
<script>
import { mapActions } from 'vuex';

export default {
  name: 'App',
  methods: {
    ...mapActions(['loadCountries', 'shuffleQuesitons']),
  },
  async mounted() {
    await this.loadCountries(); // this.$store.dispatch('loadCountries');
    await this.shuffleQuesitons();
  },
};
</script>
