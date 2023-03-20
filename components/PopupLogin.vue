<template>
  <div class="popup popupCard" :id="`${id}`">
    <div class="popup__in">
      <div class="popup__content_wrap popupCardContent">
        <button class="popup__close popupCardClose" type="button" aria-label="close">
          <div class="popup__close_icon">
            <Icon name="close"/>
          </div>
        </button>

        <div class="popup__logon_wrap">
          <div class="popup__head">
            <div class="popup__head_icon_wrap">
              <IconFrame iconName="lock" classes="icon_frame--small orange"/>
            </div>
            <h3 class="popup__head_title">Вхід</h3>
          </div>

          <form class="popup__form">
            <FormInput type="email" placeholder="Ваш email" id="login_mail"/>
            <FormInput type="password" placeholder="Ваш пароль" id="login_password"/>

            <div class="popup__btn_wrap">
              <Button btn label = "Війти" id="log_submit" classes="btn__primary btn__medium"/>
            </div>
          </form>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Icon from "~/components/Icon.vue";
import Button from "~/components/Button.vue";
import IconFrame from "~/components/IconFrame.vue";
import FormInput from "~/components/FormInput.vue";

export default {
  name: "PopupContentLogin",
  components: ['Icon', 'IconFrame', 'FormInput', 'Button'],
  props: {
    id: {
      type: String,
      required: true,
    }
  },
}
</script>

<style scoped>

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

.body--popup_open .popup__content_wrap {
  -webkit-transform: scale(1);
  transform: scale(1)
}

.popup__logon_wrap {
  width: 100%
}

.popup__head_title {
  color: #fff;
  font-family: Gilroy, sans-serif;
  font-size: 2.5rem;
  font-weight: 700;
  line-height: 1
}

.popup__form {
  width: 100%
}

.form_block:not(:last-child) {
  margin-bottom: 1rem
}

.popup__btn_wrap {
  text-align: center
}

@media screen and (min-width: 768px) {
  #popup_login .popup__content_wrap {
    max-width: 35.5rem;
    padding: 2.5rem 3rem
  }

  .popup__content_wrap {
    max-width: 52rem
  }

  #popup_login .popup__head {
    -webkit-box-pack: start;
    -ms-flex-pack: start;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    justify-content: flex-start;
    margin-bottom: 3.5rem
  }

  #popup_login .popup__head_icon_wrap:not(:last-child) {
    margin-right: 1rem
  }
}

@media screen and (max-width: 767px) {

  #popup_login .popup__content_wrap {
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -ms-flex-line-pack: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-content: center;
    align-items: center;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-direction: row;
    flex-direction: row;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    justify-content: center;
    padding: 5rem var(--gl-indent)
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
