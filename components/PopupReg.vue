<template>
  <div class="popup popupCard" :id="`${id}`">
    <div class="popup__in">
      <div class="popup__content_wrap popupCardContent">
        <button class="popup__close popupCardClose" type="button" aria-label="close">
          <div class="popup__close_icon">
            <Icon name="close"/>
          </div>
        </button>
        <div class="popup__content">
          <div class="popup__content_col popup__content_col--v1_mod">
            <div class="popup__content_decor_top">
              <img class="popup__content_decor_img" src="../assets/images/graph_slider.svg" alt="popup decor">
            </div>
            <div class="popup__content_decor_bottom">
              <img class="popup__content_decor_img" src="../assets/images/lines_slider.svg" alt="popup decor">
            </div>
            <div class="popup__content_col_in">

              <Slider/>

            </div>
          </div>
          <div class="popup__content_col popup__content_col--v2_mod">
            <div class="popup__head">
              <div class="popup__head_icon_wrap popup__head_icon_wrap--color_green_mod">
                <IconFrame iconName="user" classes="icon_frame--small green"/>
              </div>
              <h2 class="popup__head_title">Реєстрація</h2>
            </div>
            <form class="popup__form">
              <div class="popup__regist">
                <FormInput type="text" placeholder="Ваше імʼя" id="name"/>
                <FormInput type="email" placeholder="Ваш email" id="login_mail_reg"/>
                <FormInput type="password" placeholder="Ваш пароль" id="reg_password" label="Пароль має містити літери і символи"/>
                <FormInput type="password" placeholder="Повторіть пароль" id="reg_password_valid" label="Паролі не співпадають"/>
              </div>
              <div class="popup__bottom">
                <div class="popup__bottom_title">Оберіть спосіб звязку</div>
                <div class="popup__bottom_social">

                  <SocialLink name="telegram"/>

                  <SocialLink name="skype"/>

                  <FormInput type="text" placeholder="@телеграм_адреса" id="login_mail"/>

                </div>
              </div>
              <div class="popup__btn_wrap">
                <Button btn label = "Реєстрація" id="reg_submit" classes="btn__primary btn__medium"/>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "popup",
  props: {
    id: {
      type: String,
      required: true,
    }
  },
  head() {
    return {
      script: [
        { src: '~/assets/js/submitForm.js' },
      ]
    }
  }
}
</script>

<style scoped>


.body--popup_open .popup__content_wrap {
  -webkit-transform: scale(1);
  transform: scale(1)
}

.popup__content_wrap {
  background: #23262f;
  border-radius: 2.5rem;
  opacity: .95;
  overflow: hidden;
  position: relative;
  -webkit-transform: scale(.6);
  transform: scale(.6);
  -webkit-transition: -webkit-transform .3s;
  transition: -webkit-transform .3s;
  transition: transform .3s;
  transition: transform .3s, -webkit-transform .3s;
  width: 100%
}

#popup_registration .popup__content_wrap {
  max-width: 77rem
}

.popup__close,
.popup__in {
  -webkit-box-pack: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  justify-content: center
}

.popup__close {
  -ms-flex-pack: center;
  background-color: #353945;
  border-radius: 100%;
  cursor: pointer;
  height: 4rem;
  position: absolute;
  right: 1rem;
  top: 1rem;
  width: 4rem
}

.popup__close_icon {
  color: #777e90;
  height: 2.4rem;
  -webkit-transition: color .3s ease;
  transition: color .3s ease;
  width: 2.4rem
}

.popup__close:hover .popup__close_icon {
  color: #fff
}

.popup__content {
  -webkit-box-pack: start;
  -ms-flex-pack: start;
  -webkit-box-align: stretch;
  -ms-flex-align: stretch;
  align-items: stretch;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  justify-content: flex-start
}

.popup__content_col {
  overflow: hidden
}

.popup__content_col.popup__content_col--v1_mod {
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-direction: column;
  flex-direction: column;
  position: relative
}

.popup__content_col.popup__content_col--v1_mod:after {
  background-color: #58bd7d;
  content: "";
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
  z-index: -2
}

.popup__content_col_in {
  -webkit-box-flex: 1;
  -ms-flex: auto;
  flex: auto;
  padding: 6.4rem 5.3rem 16rem
}

.popup__content_decor_top {
  height: 16.8rem;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%
}

.popup__content_decor_bottom {
  bottom: 0;
  height: 16.1rem;
  left: 0;
  position: absolute;
  width: 100%
}

.popup__content_decor_img {
  display: block;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  width: 100%
}

.popup__bottom:not(:last-child),
.popup__regist:not(:last-child) {
  margin-bottom: 2.6rem
}

.popup__bottom_title {
  color: #b1b5c3;
  font-size: 1.2rem;
  font-weight: 700;
  line-height: 1;
  text-align: center;
  text-transform: uppercase
}

.popup__bottom_title:not(:last-child) {
  margin-bottom: 1rem
}

.popup__bottom_social {
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

.popup__head_title {
  color: #fff;
  font-family: Gilroy, sans-serif;
  font-size: 2.5rem;
  font-weight: 700;
  line-height: 1
}

.popup__btn_wrap {
  text-align: center
}

.form_block:not(:last-child) {
  margin-bottom: 1rem
}

@media screen and (min-width: 768px) {
  .popup__content_col.popup__content_col--v2_mod {
    padding: 6rem 4.5rem 4.5rem
  }

  .popup__content_col {
    width: 50%
  }

  #popup_registration .popup__head {
    margin-bottom: 2.5rem;
    text-align: center
  }

  #popup_registration .popup__head_icon_wrap:not(:last-child) {
    margin-bottom: .8rem;
    display: flex;
    justify-content: center;
  }
}

@media screen and (max-width: 767px) {
  .popup__content_col.popup__content_col--v1_mod {
    display: none
  }

  .popup__content_col.popup__content_col--v2_mod {
    padding: 2.5rem 3rem;
    width: 100%
  }

  .popup__head {
    -webkit-box-pack: start;
    -ms-flex-pack: start;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    justify-content: flex-start;
    margin-bottom: 2.6rem
  }

  .popup__head_icon_wrap:not(:last-child) {
    margin-right: 1rem
  }
}
</style>
