<template>
  <header class="header lockPadding">
    <div class="header__in">
      <div class="header__logo">
        <Logo/>
      </div>
      <div class="header__btn">
        <div class="header__btn_item" v-for="({label, url, classes}, index) in items" :key="index">
          <Button link :label = "`${label}`" :url = "`${url}`" :classes="`btn btn__small ${classes}`"/>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import Logo from "~/components/Logo.vue";
import Button from "~/components/Button.vue";

export default {
  header: "Header",
  components: [Logo, Button],
  data() {
    return {
      items: [
        {
          label: 'Вхід',
          url: '#popup_login',
          classes: 'btn__dark popupOpen'
        },
        {
          label: 'Реєстрація',
          url: '#popup_registration',
          classes: 'btn__primary popupOpen'
        },
      ]
    }
  }
}
</script>

<style scoped>
.header {
  background: #141416;
  border-bottom: 1px solid #23262f;
  height: var(--height-header);
  left: 0;
  position: fixed;
  top: 0;
  width: 100%;
  will-change: transform;
  z-index: 100
}

.header__in {
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  position: relative
}

.header__logo {
  display: block
}

.header__logo_img {
  display: block;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  width: 100%
}

.header__btn {
  -webkit-box-pack: start;
  -ms-flex-pack: start;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  justify-content: flex-start;
  margin: 0 -1.5rem -1.5rem 0
}

.header__btn_item {
  padding: 0 1.5rem 1.5rem 0
}

@media screen and (min-width: 768px) {
  .header__in {
    -webkit-box-pack: end;
    -ms-flex-pack: end;
    justify-content: flex-end;
    padding: 2.4rem var(--gl-indent)
  }

  .header__logo {
    left: 50%;
    position: absolute;
    top: 50%;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    width: 22.2rem
  }
}

@media screen and (max-width: 767px) {
  .header__in {
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    padding: 1rem var(--gl-indent)
  }

  .header__logo {
    margin-right: 2rem;
    width: 14.8rem
  }
}

</style>
