<template>
  <div class="app">
    <Header/>
    <div class="wrapper">
      <main class="base">
        <MainDecor/>
        <slot/>
      </main>
    </div>
    <PopupLogin id="popup_login"/>
    <PopupReg id="popup_registration"/>
  </div>
</template>

<script>
import Header from "~/components/Header.vue"
import MainDecor from "~/components/MainDecor.vue"
import PopupLogin from "~/components/PopupLogin.vue"
import PopupReg from "~/components/PopupReg.vue"

export default {
  components: {Header, MainDecor, PopupLogin, PopupReg},
  mounted() {
    this.$showPassword(),
    this.$initPopup(),
    this.$submitForm()
  }
}
</script>

<style scoped>
.app {
  height: 100vh;
}

.wrapper {
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-direction: column;
  flex-direction: column;
  height: auto !important;
  min-height: 100%;
  overflow-x: hidden
}

.base, .wrapper {
  position: relative;
  width: 100%
}

.base {
  -webkit-box-flex: 1;
  -ms-flex: 1 0 auto;
  flex: 1 0 auto;
  overflow: hidden;
  padding: var(--height-header) 0 0
}

.icon {
  fill: currentColor;
  display: block
}

.icon.icon--size_mod {
  height: 100%;
  width: 100%
}

@media screen and (min-width: 768px) {
  :root {
    --gl-indent: 2.4rem;
    --height-header: 9.2rem
  }
}

@media screen and (max-width: 767px) {
  :root {
    --gl-indent: 1.5rem;
    --height-header: 6rem
  }

  .base {
    -webkit-box-orient: vertical;
    -webkit-box-direction: reverse;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-direction: column-reverse;
    flex-direction: column-reverse
  }
}

@media screen and (min-width: 1200px) {
  html {
    font: 400 .6944444444vw/1.33 Roboto, sans-serif
  }
}

@media (max-width: 1199px)and (min-width: 375px) {
  html {
    font-size: 10px;
    font-family: Roboto, sans-serif;
  }
}

@media screen and (max-width: 374px) {
  html {
    font: 400 2.6666666667vw/1.33 Roboto, sans-serif
  }
}
</style>
