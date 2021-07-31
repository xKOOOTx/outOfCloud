<template>
  <div class="shopping">
    <div class="shopping__wrapper">
      <div class="shopping__cardBlock">
        <DiscountComponent />
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
             xmlns="http://www.w3.org/2000/svg">
          <path d="M7.84703 7.732H2.62703C1.29503 7.732 0.467031 8.596 0.467031
          9.892C0.467031 11.188 1.29503 12.052 2.62703 12.052H7.84703V17.272C7.84703
          18.568 8.67503 19.432 10.007 19.432C11.339 19.432 12.167 18.568 12.167
          17.272V12.052H17.387C18.719 12.052 19.547 11.188 19.547 9.892C19.547
          8.596 18.719 7.732 17.387 7.732H12.167V2.512C12.167 1.216 11.339
          0.352 10.007 0.352C8.67503 0.352 7.84703 1.216 7.84703 2.512V7.732Z" fill="#26303B"/>
        </svg>
        <FreeDelivery />
      </div>
      <button class="shopping__btn" @click="showPopup">К покупкам</button>
    </div>
  </div>
</template>

<script>
import DiscountComponent from './discountComponent.vue';
import FreeDelivery from './freeDelivery.vue';

export default {
  name: 'Shopping',
  components: { FreeDelivery, DiscountComponent },
  methods: {
    showPopup() {
      const popup = document.getElementById('popup');
      //  eslint-disable-next-line
      const body = document.body;

      popup.classList.add('popup-active');
      body.style.overflow = 'hidden';
      body.style.paddingRight = '17px';
    },
  },
};
</script>

<style scoped lang="scss">
@import '../assets/style/style';

.shopping {
  background: $white;
  &__wrapper {
    padding: 0 283px;
  }
  &__cardBlock {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  &__btn {
    display: block;
    margin: 0 auto;
    padding: 17px 110px;
    border-radius: 10px;
    background: $gold;
    font-size: 22px;
    font-style: normal;
    font-weight: 700;
    line-height: 36px;
    letter-spacing: 0.01em;
    color: $white;
  }
}

</style>
