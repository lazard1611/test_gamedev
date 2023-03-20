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
</style>
