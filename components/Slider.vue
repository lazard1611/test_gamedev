<template>
  <div class="slider">
    <Swiper
        :modules="[SwiperPagination, SwiperNavigation]"
        :slides-per-view="1"
        :effect="'creative'"

    >
      <SwiperSlide v-for="slide in 3" :key="slide">
        <SliderItem :slide_title="`${slide}`"/>
      </SwiperSlide>
    </Swiper>

    <div class="slider__controls">
      <SliderButtonPrev/>
      <div class="slider__pagination pagination"></div>
      <SliderButtonNext/>
    </div>
  </div>
</template>

<script>
export default {
name: "Slider",

}
</script>

<style scoped>

.slider__controls {
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  bottom: 10.5rem;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  justify-content: center;
  left: 50%;
  position: absolute;
  -webkit-transform: translateX(-50%);
  transform: translateX(-50%);
  z-index: 100
}

.slider__pagination {
  margin: 0 .8rem;
  position: unset
}

.slider .slider__pagination {
  width: auto
}

.slider .swiper-pagination-bullet {
  background-color: #e6e8ec;
  height: .8rem;
  opacity: 1;
  width: .8rem
}

.slider .swiper-pagination-bullet-active {
  background-color: #ffd166
}
</style>
