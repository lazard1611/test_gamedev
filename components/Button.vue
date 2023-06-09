<template>
  <a v-if="link" class="btn" :href="`${url ? url : '#'}`" :class="`${classes}`">
    {{ label }}
  </a>
  <button v-if="btn" class="btn" :class="`${classes}`" :id="`${id}`" type="submit">{{ label }}</button>
</template>

<script>
export default {
  name: "Button",
  props: {
    btn: {
      type: Boolean
    },
    link: {
      type: Boolean
    },
    label: {
      type: String,
      required: true,
    },
    classes: {
      type: String,
      required: true,
    },
    url: {
      type: String,
    },
    id: {
      type: String,
      required: false,
    }
  },
}
</script>

<style scoped>
.btn.btn__small {
  border-radius: 9rem;
  font-size: 1.4rem;
  height: 4rem;
  line-height: 4rem;
  padding: 0 1.6rem
}

.btn.btn__medium {
  border-radius: 9rem;
  font-size: 1.6rem;
  height: 4.8rem;
  line-height: 4.8rem;
  padding: 0 2.4rem
}

.btn.btn__primary {
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  background-color: #ffc737;
  color: #000;
  cursor: pointer;
  display: -webkit-inline-box;
  display: -ms-inline-flexbox;
  display: inline-flex;
  font-family: Gilroy, sans-serif;
  font-weight: 700;
  justify-content: center;
  text-align: center;
  -webkit-transition: background-color .3s ease;
  transition: background-color .3s ease;
  white-space: nowrap
}

.btn.btn__primary[type=submit] {
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none
}

.btn.btn__primary:focus, .btn.btn__primary:hover {
  text-decoration: none
}

.btn.btn__primary:disabled, .btn.btn__primary[disabled] {
  cursor: not-allowed;
  opacity: .5;
  pointer-events: none
}

.btn.btn__primary:disabled, .btn.btn__primary:hover, .btn.btn__primary[disabled] {
  background-color: #e6a100
}

.btn.btn__light {
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  background-color: transparent;
  color: #fff;
  cursor: pointer;
  display: -webkit-inline-box;
  display: -ms-inline-flexbox;
  display: inline-flex;
  font-family: Gilroy, sans-serif;
  font-weight: 700;
  justify-content: center;
  text-align: center;
  -webkit-transition: background-color .3s ease;
  transition: background-color .3s ease;
  white-space: nowrap
}

.btn.btn__light[type=submit] {
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none
}

.btn.btn__light:focus, .btn.btn__light:hover {
  text-decoration: none
}

.btn.btn__light:disabled, .btn.btn__light[disabled] {
  cursor: not-allowed;
  opacity: .5;
  pointer-events: none
}

.btn.btn__light:disabled, .btn.btn__light:hover, .btn.btn__light[disabled] {
  background-color: #23262f
}

.btn.btn__dark {
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  background-color: transparent;
  border: 2px solid #777e90;
  color: #fff;
  cursor: pointer;
  display: -webkit-inline-box;
  display: -ms-inline-flexbox;
  display: inline-flex;
  font-family: Gilroy, sans-serif;
  font-weight: 700;
  justify-content: center;
  text-align: center;
  -webkit-transition: background-color .3s ease, color .3s ease;
  transition: background-color .3s ease, color .3s ease;
  white-space: nowrap
}

.btn.btn__dark[type=submit] {
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none
}

.btn.btn__dark:focus, .btn.btn__dark:hover {
  text-decoration: none
}

.btn.btn__dark:disabled, .btn.btn__dark[disabled] {
  cursor: not-allowed;
  opacity: .5;
  pointer-events: none
}

.btn.btn__dark:disabled, .btn.btn__dark:hover, .btn.btn__dark[disabled] {
  background-color: #fcfcfd;
  color: #23262f
}

.btn.btn__disabled {
  cursor: not-allowed;
  opacity: .5;
  pointer-events: none
}

.btn .btn__icon {
  height: 1.6rem;
  width: 1.6rem
}

.btn .btn__icon:not(.btn__icon--left_mod) {
  margin-left: 1.2rem
}

.btn .btn__icon:not(.btn__icon--right_mod) {
  margin-right: 1.2rem
}

.btn_only_icon .btn__icon {
  height: 2.4rem;
  width: 2.4rem
}

.btn_only_icon.btn__small {
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  background-color: #ffc737;
  border-radius: 100%;
  color: #000;
  cursor: pointer;
  display: -webkit-inline-box;
  display: -ms-inline-flexbox;
  display: inline-flex;
  font-family: Gilroy, sans-serif;
  font-weight: 700;
  height: 4rem;
  justify-content: center;
  text-align: center;
  -webkit-transition: background-color .3s ease;
  transition: background-color .3s ease;
  white-space: nowrap;
  width: 4rem
}

.btn_only_icon.btn__small[type=submit] {
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none
}

.btn_only_icon.btn__small:focus, .btn_only_icon.btn__small:hover {
  text-decoration: none
}

.btn_only_icon.btn__small:disabled, .btn_only_icon.btn__small[disabled] {
  cursor: not-allowed;
  opacity: .5;
  pointer-events: none
}

.btn_only_icon.btn__small:disabled, .btn_only_icon.btn__small:hover, .btn_only_icon.btn__small[disabled] {
  background-color: #e6a100
}

.btn_only_icon.btn__medium {
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  background-color: #ffc737;
  border-radius: 100%;
  color: #000;
  cursor: pointer;
  display: -webkit-inline-box;
  display: -ms-inline-flexbox;
  display: inline-flex;
  font-family: Gilroy, sans-serif;
  font-weight: 700;
  height: 4.8rem;
  justify-content: center;
  text-align: center;
  -webkit-transition: background-color .3s ease;
  transition: background-color .3s ease;
  white-space: nowrap;
  width: 4.8rem
}

.btn_only_icon.btn__medium[type=submit] {
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none
}

.btn_only_icon.btn__medium:focus, .btn_only_icon.btn__medium:hover {
  text-decoration: none
}

.btn_only_icon.btn__medium:disabled, .btn_only_icon.btn__medium[disabled] {
  cursor: not-allowed;
  opacity: .5;
  pointer-events: none
}

.btn_only_icon.btn__medium:disabled, .btn_only_icon.btn__medium:hover, .btn_only_icon.btn__medium[disabled] {
  background-color: #e6a100
}
</style>
