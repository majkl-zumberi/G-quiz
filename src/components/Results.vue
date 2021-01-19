<template>
  <q-card style="border-radius:25px">
      <q-card-section class="q-pa-lg">
        <img src="./../assets/undraw_winners_ao2o2.svg" alt="summary">
      </q-card-section>
      <q-card-section>
        <div class="result-title text-h3 text-center">
          Results
        </div>
      </q-card-section>
      <q-card-section>
        <div class="question text-h6 indigo-4 text-weight-bold text-center">
          you got <span class="text-h6 guessed">{{guessed}}</span> correct answers
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
    ...mapActions(['resetGame', 'loadCountries', 'shuffleQuestions']),
    async resetQuiz() {
      this.resetGame();
      await this.loadCountries(); // this.$store.dispatch('loadCountries');
      await this.shuffleQuestions();
    },
  },
};
</script>

<style lang="scss" scoped>
  .result-title{
    color:$indigo-8 !important;
  }
  .guessed{
    color:$green-8 !important;
    font-size: 2em;
  }
</style>
