<template>
  <q-btn
          outline
          rounded
          color="deep-purple-4"
          size="lg"
          :label="capital"
          style="width:100%;margin-bottom:.5em"/>
</template>
<script>
export default {
  name: 'buttonChoice',
  props: {
    capital: {
      type: String,
      required: true,
    },
  },
};
</script>
