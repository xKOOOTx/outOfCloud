<template>
  <div class="landing">
    <headerComponent />
    <Main />
    <footerComponent />
    <pop-up />
  </div>
</template>

<script>

import headerComponent from '../components/headerComponent.vue';
import Main from './Main.vue';
import footerComponent from '../components/footerComponent.vue';
import PopUp from '../components/PopUp.vue';

export default {
  name: 'Landing',
  components: {
    headerComponent,
    Main,
    footerComponent,
    PopUp,
  },
};
</script>

<style scoped lang="scss">
@import '../assets/style/style';

main {
  flex: 1 0 auto;
}
.footer {
  flex: 0 0 auto;
}
</style>
