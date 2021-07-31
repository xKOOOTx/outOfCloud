<template>
  <footer class="footer">
    <h1 class="footer__header">This is footer</h1>
  </footer>
</template>

<script>
export default {
  name: 'footerComponent',
};
</script>

<style scoped lang="scss">
@import '../assets/style/style';
.footer {
  padding: 50px;
  background: $purple;
  text-align: center;
}
</style>
