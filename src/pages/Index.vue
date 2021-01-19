<template>

  <q-page class="flex flex-center custom-bg" >
    <q-spinner-ball
      v-if="isLoading"
        color="primary"
        size="2em"
    />
    <template v-else>
      <CardQuestion/>
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
    ...mapGetters(['isLoading']),
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
