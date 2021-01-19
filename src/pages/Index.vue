<template>

  <q-page class="flex flex-center custom-bg" >
    <q-spinner-cube
        v-if="isLoading"
        size="3em"
        color="orange" />
    <template v-else-if="!isGameOver">
      <CardQuestion
        :questionTitle=quizQuestionTitle
        :questionOptions=quizQuestionOptions
        :wrongAnsIdx=wrongIndex
        :correctAnsidx=correctIndex
        @nextTurn="nextTurn" />
    </template>
    <Results v-else/>
  </q-page>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import CardQuestion from 'components/CardQuestion';
import Results from 'components/Results';
import eventBus from '../utils/eventBus';

export default {
  name: 'PageIndex',
  data() {
    return {
      correctIndex: -1,
      wrongIndex: -1,
    };
  },
  components: { CardQuestion, Results },
  computed: {
    ...mapGetters(['isLoading', 'currentQuiz', 'currentCorrectAnswer', 'isGameOver']),
    quizQuestionTitle() {
      const { name } = this.currentQuiz.quizQuestions || '';
      return `${name} is the capital of`;
    },
    quizQuestionOptions() {
      return this.currentQuiz.quizOptions;
    },
  },
  methods: {
    ...mapActions(['selectedOptionIndex', 'correctOptionIndex', 'userGuessed', 'incrementAndCheckTurn']),
    async checkAnswer(selectedOption) {
      // console.log('selezionato ', selectedOption);
      // console.log(this.currentCorrectAnswer === selectedOption);
      if (this.currentCorrectAnswer === selectedOption) { // correct answer
        this.correctIndex = await this.selectedOptionIndex(selectedOption);
        this.userGuessed();
      } else { // wrong answer
        this.correctIndex = await this.correctOptionIndex();
        this.wrongIndex = await this.selectedOptionIndex(selectedOption);
      }
      // console.log(await this.selectedOptionIndex(selectedOption));
      // console.log('quello corretto', await this.correctOptionIndex());
    },
    nextTurn() {
      this.correctIndex = -1;
      this.wrongIndex = -1;
      this.incrementAndCheckTurn();
    },
  },
  created() {
    eventBus.$on('optionSelected', this.checkAnswer);
  },
  beforeDestroy() {
    eventBus.$off('optionSelected');
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
