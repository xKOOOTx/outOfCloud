<template>
  <div class="slider">
    <h2 class="slider__header">Взгляните на процесс сборки своими глазами</h2>
    <v-carousel
      :carousel_data="slides"
    />
  </div>
</template>

<script>
import vCarousel from './v-carousel.vue';

export default {
  name: 'Slider',
  components: {
    vCarousel,
  },
  data() {
    return {
      slides: [
        {
          number: '1',
          header: 'Привезём точно по списку',
          //  eslint-disable-next-line
          description: 'Сборщик берëт с собой наручный терминал, на котором он видит весь список покупок для каждого заказа.',
          //  eslint-disable-next-line
          img: 'slider1.jpg',
        },
        {
          number: '2',
          header: 'Собираем быстро и эффективно',
          //  eslint-disable-next-line
          description: 'Для улучшения эргономики пространства товары размещены от тяжëлых к лëгким, находящимся уже в конечной зоне упаковки.',
          //  eslint-disable-next-line
          img: 'slider2.jpg',
        },
        {
          number: '3',
          header: 'За свежесть и качество отвечаем',
          //  eslint-disable-next-line
          description: 'Выделены специальные зоны, в том числе холодная и морозильная.',
          //  eslint-disable-next-line
          img: 'slider3.jpg',
        },
        {
          number: '4',
          header: 'Шампунь не положат рядом с рыбой',
          //  eslint-disable-next-line
          description: 'Собираем и упаковываем ваш заказ с заботой: соблюдаем принципы товарного соседства и учитываем вес товара.',
          //  eslint-disable-next-line
          img: 'slider4.jpg',
        },
        {
          number: '5',
          header: 'Довезëм в сохранности даже яйца',
          //  eslint-disable-next-line
          description:'Бережно транспортируем контейнеры, фиксируя их стяжными ремнями. Системы охлаждения поддерживают температурный режим.',
          //  eslint-disable-next-line
          img: 'slider5.jpg',
        },
      ],
    };
  },
};
</script>

<style scoped lang="scss">
.slider {
  &__header {
    margin: 0 auto;
    max-width: 660px;
    text-align: center;
  }
}
</style>
