<template>
  <button class="slider__btn nextArrow" @click="goToNextSlide">
    <div class="slider__btn_icon">
      <Icon name="arrow_right"/>
    </div>
  </button>
</template>

<script>
export default {
  name: "SliderButtonNext",
  methods: {
    goToNextSlide() {
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
