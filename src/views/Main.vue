<template>
  <main class="main">
    <h1 class="main__header">
      Main component
    </h1>
    <Slider />
  </main>
</template>

<script>

import Slider from '../components/Slider.vue';

export default {
  name: 'Main',
  components: { Slider },

};
</script>

<style scoped lang="scss">
@import '../assets/style/style';
.main {
  background: $grey;
}

</style>
