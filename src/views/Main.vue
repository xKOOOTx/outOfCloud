<template>
  <main class="main">
    <Slider />
    <Shopping />
  </main>
</template>

<script>

import Slider from '../components/Slider.vue';
import Shopping from '../components/Shopping.vue';

export default {
  name: 'Main',
  components: { Slider, Shopping },

};
</script>

<style scoped lang="scss">
@import '../assets/style/style';
.main {
  background: $grey;
}

</style>
