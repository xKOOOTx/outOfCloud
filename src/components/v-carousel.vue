<template>
  <div class="wrapper">
    <div class='carousel__wrapper'>
      <div class="v-carousel"
           :style="{'margin-left': '-' + (100 * currentSlideIndex) + '%'}"
      >
        <v-carousel-item
          v-for="item in carousel_data"
          :key="item.number"
          :item_data="item"
        />
      </div>
      <div class="carousel__buttons">
        <svg
          @click="prevSlide"
          width="24" height="44" viewBox="0 0 24 44" fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path d="M22 2L2 22L22 42" stroke="#D0D5CD" stroke-width="3" stroke-linecap="round"
                stroke-linejoin="round"/>
        </svg>
        <svg
          @click="nextSlide"
          width="24" height="44" viewBox="0 0 24 44" fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path d="M2 2L22 22L2 42" stroke="#D0D5CD" stroke-width="3" stroke-linecap="round"
                stroke-linejoin="round"/>
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
import vCarouselItem from './v-carousel-item.vue';

export default {
  name: 'v-carousel',
  components: {
    vCarouselItem,
  },
  data() {
    return {
      currentSlideIndex: 0,
    };
  },
  props: {
    carousel_data: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    prevSlide() {
      if (this.currentSlideIndex > 0) {
        //  eslint-disable-next-line
        this.currentSlideIndex--;
      } else {
        this.currentSlideIndex = this.carousel_data.length - 1;
      }
    },
    nextSlide() {
      if (this.currentSlideIndex >= this.carousel_data.length - 1) {
        this.currentSlideIndex = 0;
      } else {
        //  eslint-disable-next-line
        this.currentSlideIndex++;
      }
    },
  },
};
</script>

<style scoped lang="scss">
@import '../assets/style/style';
.wrapper {
  position: relative;
}
.carousel__wrapper {
  max-width: 640px;
  margin: 30px auto;
  border-radius: 10px;
  overflow: hidden;
  background: $white;
}
.carousel__buttons {
  position: absolute;
  top: 50%;
  left: 0;
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 0 400px;
}
.v-carousel {
  display: flex;
  transition: all .3s ease-in-out;
}
</style>
