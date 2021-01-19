<template>
  <q-card style="border-radius:25px">
      <q-card-section>
        <div class="question text-h6 indigo-4 text-weight-bold text-center">
          {{questionTitle}}
        </div>
      </q-card-section>
      <q-card-section class="q-pa-lg">
        <ButtonChoice
          v-for="(choice,idx) in questionOptions"
           :key="idx"
           :disabled="correctAnsidx!==-1 || wrongAnsIdx!==-1"
           :status="wrongAnsIdx==idx?'wrong':correctAnsidx==idx?'correct':'default'"
           :capital="choice" />

      </q-card-section>
      <q-card-actions align="right">
        <!-- <q-btn flat>Action 1</q-btn> -->
       <q-btn
        v-if="correctAnsidx!==-1 || wrongAnsIdx!==-1"
        color="amber-14"
        label="Next"
        class="q-mr-lg q-px-md"
        @click="nextTurn"/>
      </q-card-actions>
    </q-card>
</template>

<script>
import ButtonChoice from 'components/ButtonChoice';

export default {
  name: 'card-question',
  components: {
    ButtonChoice,
  },
  props: ['questionTitle', 'questionOptions', 'correctAnsidx', 'wrongAnsIdx'],
  methods: {
    nextTurn() {
      this.$emit('nextTurn');
    },
  },
};
</script>

<style lang="scss" scoped>
  .question{
    color: $indigo-8;
  }
</style>
