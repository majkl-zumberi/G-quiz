<template>
  <q-card style="border-radius:25px">
      <q-card-section>
        <div class="question text-h6 indigo-4 text-weight-bold">
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
};
</script>

<style lang="scss" scoped>
  .question{
    color: $indigo-8;
  }
</style>
