<template>
  <div class="freeDelivery">
    <div class="freeDelivery__imgWrapper">
      <img src="../assets/images/deliveryImg.svg" alt="sales_img" class="freeDelivery__img">
    </div>
    <div class="freeDelivery__description">
      <p class="freeDelivery__description_header">
        Бесплатная
        <span class="freeDelivery__description_header_span">доставка</span>
      </p>
      <p class="freeDelivery__description_text">
        первого заказа
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'freeDelivery',
};
</script>

<style scoped lang="scss">
@import '../assets/style/style';

.freeDelivery {
  height: 210px;
  display: flex;
  padding: 30px;
  border: 1px solid $anotherGrey;
  margin: 60px 0;
  &__imgWrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 70px;
    height: 70px;
    border-radius: 50%;
    background: $gold;
  }
  &__description {
    max-width: 224px;

    margin-left: 30px;
    padding-right: 10px;

    font-size: 36px;
    font-style: normal;
    font-weight: 700;
    line-height: 46px;
    &_header {
      display: flex;
      flex-direction: column;
      justify-content: center;
      font-size: 36px;
      font-style: normal;
      font-weight: 700;
      line-height: 40px;
      text-align: left;

      color: $darkblue;
      &_span {
        display: inline-block;
        color: $gold;
      }
    }
    &_text {
      margin-top: 10px;
      font-size: 16px;
      font-weight: 400;
      font-style: normal;
      line-height: 24px;
      color: $darkblue;
      &_span {
        font-weight: 700;
      }
    }
  }
}
</style>
