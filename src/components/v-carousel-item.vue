<template>
  <div class="v-carousel-item">
    <div class="v-carousel-item__imgWRapper">
      <img :src='require(`../assets/images/${ item_data.img }`)'
           class="v-carousel-item__img"
           alt="image">
    </div>
    <div class="v-carousel-item__description">
      <h3 class="v-carousel-item__description_header">{{ item_data.header }}</h3>
      <p class="v-carousel-item__description_text">{{ item_data.description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'v-carousel-item',
  props: {
    item_data: {
      type: Object,
      default: () => {},
    },
  },
};
</script>

<style scoped lang="scss">
.v-carousel-item {
  padding: 40px;
  &__img {
    width: 560px
  }
  &__description {
    margin: 30px 0 0;
    text-align: center;
  }
}

</style>
