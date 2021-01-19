<template>
  <q-btn
          :outline="status==='default'"
          rounded
          :color="status==='default'?'deep-purple-4':status==='correct'?'green-13':'red-13'"
          size="lg"
          :disable="disabled"
          :label="capital"
          @click="emitValue"
          style="width:100%;margin-bottom:.5em"/>
</template>
<script>
import eventBus from '../utils/eventBus';

export default {
  name: 'buttonChoice',
  props: {
    /**
     * default for default state of the button
     * correct for correct answer
     * wrong for wrong answer
     */
    status: String,
    disabled: Boolean,
    capital: {
      type: String,
      required: true,
    },
  },
  methods: {
    emitValue() {
      eventBus.$emit('optionSelected', this.capital);
    },
  },
};
</script>
