<template>
  <button class="slider__btn prevArrow" @click="goToPrevSlide">
    <div class="slider__btn_icon">
      <Icon name="arrow_left"/>
    </div>
  </button>
</template>

<script>
export default {
  name: "SliderButtonPrev",
  methods: {
    goToPrevSlide() {
      this.$swiper().slideNext();
    }
  }
}
</script>

<style scoped>
.slider__btn {
  cursor: pointer
}

.slider__btn_icon {
  -ms-flex-negative: 0;
  flex-shrink: 0;
  height: 1.6rem;
  margin-bottom: -.3rem;
  width: 1.6rem
}
</style>
