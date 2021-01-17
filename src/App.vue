<template>
  <div id="q-app">
    <router-view />
  </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'App',
  computed: {
    ...mapGetters(['countries']),
  },
  methods: {
    ...mapActions(['loadCountries', 'shuffleQuesitons']),
  },
  async created() {
    await this.loadCountries(); // this.$store.dispatch('loadCountries');
    await this.shuffleQuesitons();
  },
};
</script>
