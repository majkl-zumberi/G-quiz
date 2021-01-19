<template>

  <q-page class="flex flex-center custom-bg" >
    <q-spinner-cube
        v-if="isLoading"
        size="3em"
        color="orange" />
    <template v-else>
      <CardQuestion
        :questionTitle=quizQuestionTitle
        :questionOptions=quizQuestionOptions />
    </template>
  </q-page>
</template>

<script>
import { mapGetters } from 'vuex';
import CardQuestion from 'components/CardQuestion';

export default {
  name: 'PageIndex',
  components: { CardQuestion },
  computed: {
    ...mapGetters(['isLoading', 'currentQuiz']),
    quizQuestionTitle() {
      const { name } = this.currentQuiz.quizQuestions || '';
      return `${name} is the capital of`;
    },
    quizQuestionOptions() {
      return this.currentQuiz.quizOptions;
    },
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
