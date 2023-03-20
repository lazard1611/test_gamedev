<template>
  <section class="section section__hero">
    <div class="section_in">
      <div class="hero">
        <div class="hero__bg">
          <img class="hero__bg_in" src="../assets/images/graph.svg" alt="head decor">
        </div>
        <div class="hero__head">
          <div class="hero__head_decor">
            <img class="hero__head_decor_img" src="../assets/images/sign_horns_1.png" alt="bg graph"></div>
          <h1 class="hero__title">Володарі Трафіку</h1>
          <div class="hero__head_decor">
            <img class="hero__head_decor_img" src="../assets/images/sign_horns_2.png" alt="head decor"></div>
        </div>
        <div class="hero__description">
          <p>SC Partners – нова партнерська мережа з величезним досвідом та експертизою. Кожен наш партнер отримує очікувану вигоду на абсолютно прозорих умовах та бездоганний супровід. Ми будемо поряд з вами: на відстані одного повідомлення в месенджері або дзвінка, адже ми працюємо поряд з вами.</p>
        </div>
        <div class="hero__decor">
          <div class="hero__decor_icon" v-for="(index) in 5" :key="index">
            <Icon name="star"/>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Icon from "./Icon";
export default {
  name: "Hero",
  components: ['Icon']
}
</script>

<style scoped>
.hero {
  background: rgba(35, 38, 47, .5);
  border-radius: 24px;
  margin: 0 auto;
  max-width: 90rem;
  position: relative
}

.hero__bg {
  left: 0;
  position: absolute;
  top: 50%;
  -webkit-transform: translateY(-50%);
  transform: translateY(-50%);
  z-index: -1
}

.hero__bg_in {
  display: block;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  width: 100%
}

.hero__head {
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  justify-content: center
}

.hero__title {
  font-family: Gilroy, sans-serif;
  font-weight: 700;
  text-align: center
}

.hero__head_decor {
  -ms-flex-negative: 0;
  flex-shrink: 0
}

.hero__head_decor_img {
  display: block;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  width: 100%
}

.hero__description {
  color: #777e90;
  font-size: 1.4rem;
  font-weight: 400;
  line-height: 1.71;
  text-align: center
}

.hero__description:not(:last-child) {
  margin-bottom: 2.5rem
}

.hero__decor {
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  justify-content: center
}

.hero__decor_icon {
  color: #353945;
  height: 1.5rem;
  margin: 0 1.2rem;
  width: 1.5rem
}
</style>
