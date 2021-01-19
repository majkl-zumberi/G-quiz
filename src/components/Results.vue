<template>
  <q-card style="border-radius:25px">
      <q-card-section class="q-pa-lg">
        <img src="./../assets/undraw_winners_ao2o2.svg" alt="summary">
      </q-card-section>
      <q-card-section>
        <div class="question text-h6 indigo-4 text-weight-bold text-center">
          Results
        </div>
      </q-card-section>
      <q-card-section>
        <div class="question text-h6 indigo-4 text-weight-bold text-center">
          you got {{guessed}} correct answers
        </div>
      </q-card-section>
      <q-card-actions align="center">
       <q-btn
        outline
        color="indigo-4"
        label="Try Again"
        class="q-px-md"
        @click="resetQuiz"
        />
      </q-card-actions>
    </q-card>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'results',
  computed: {
    ...mapGetters(['guessed']),
  },
  methods: {
    ...mapActions(['resetGame', 'loadCountries', 'shuffleQuesitons']),
    async resetQuiz() {
      this.resetGame();
      await this.loadCountries(); // this.$store.dispatch('loadCountries');
      await this.shuffleQuesitons();
    },
  },
};
</script>
