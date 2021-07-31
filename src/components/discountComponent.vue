<template>
  <div class="discount">
    <div class="discount__imgWrapper">
      <img src="../assets/images/saleImg.svg" alt="sales_img" class="discount__img">
    </div>
    <div class="discount__description">
      <p class="discount__description_header">
        Скидка
        <span class="discount__description_header_span">1500 &#x20bd;</span>
      </p>
      <p class="discount__description_text">
        <span class="discount__description_text_span">-500 &#x20bd;</span>
        на первые три заказа по промокоду NEW
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'discountComponent',
};
</script>

<style scoped lang="scss">
@import '../assets/style/style';

.discount {
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
      line-height: 46px;
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
