<template>
  <div class="v-carousel-item">
    <div class="v-carousel-item__imgWrapper">
      <div class="v-carousel-item__imgWrapper_number">{{ item_data.number }}</div>
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
@import "../assets/style/style";

.v-carousel-item {
  padding: 40px 40px 0 40px;
  &__imgWrapper {
    position: relative;
    overflow: hidden;
    &_number {
      position: absolute;
      top: -12px;
      left: -4px;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 50px;
      height: 50px;
      border-radius: 50%;
      background: $white;

      font-size: 22px;
      font-style: normal;
      font-weight: 700;
      line-height: 46px;
      color: $gold;
    }
  }
  &__img {
    width: 560px
  }
  &__description {
    max-width: 500px;
    margin: 30px auto 0;
    text-align: center;

    font-size: 16px;
    font-style: normal;
    line-height: 24px;

    &_header {
      font-weight: 700;
    }
    &_text {
      margin: 10px 0;
      font-weight: 400;
    }
  }
}

@media (max-width: 350px) {
  .v-carousel-item {
    &__img {
      width: 250px;
    }
  }
}
</style>
