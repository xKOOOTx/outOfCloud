<template>
  <div id="app">
    <Landing />
  </div>
</template>

<script>

import Landing from './views/Landing.vue';

export default {
  name: 'App',
  components: {
    Landing,
  },
};
</script>

<style lang="scss">
@import './assets/style/style';
@import './assets/style/_variables';
@import './assets/style/_fonts';

#app {
}
</style>
