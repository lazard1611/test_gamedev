<template>
  <div class="form_block">
    <div class="input_wrap">
      <input class="input" :type="`${type}`" :id="`${id}`" :placeholder="`${placeholder}`" required>
      <button v-if="type === 'password'" class="input_button btnShowPass" type="button" aria-label="show password" :data-input-id="`${id}`">
        <Icon name="eye"/>
      </button>
      <div class="input__icon input__icon--check_mod">
        <Icon name="check"/>
      </div>

      <div v-if="type === 'password'" class="input__icon input__icon--not_valid_mod">
        <Icon name="close_circle"/>
      </div>
    </div>
    <label v-if="type === 'password'" class="input__label">{{label}}</label>
  </div>
</template>

<script>
import Icon from "./Icon";

export default {
  name: "FormInput",
  components: ['Icon'],
  props: {
    button: {
      type: Boolean,
    },
    type: {
      type: String,
      required: true,
    },
    placeholder: {
      type: String,
      required: true,
    },
    id: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      required: false,
    }
  }
}
</script>

<style scoped>
.input_wrap {
  position: relative
}

.input {
  background: transparent;
  border: 2px solid #353945;
  border-radius: 7rem;
  color: #777e90;
  font-family: Gilroy, sans-serif;
  font-size: 1.4rem;
  font-weight: 700;
  padding: 1.3rem 4.2rem 1.3rem 1.6rem;
  width: 100%
}

.input:focus {
  border-color: #ffc737;
}

.input_wrap.input_wrap--validate_mod .input__icon--check_mod {
  display: block;
  color: #58bd7d;
}

.input_wrap.input_wrap--validate_mod .input {
  border-color: #58bd7d;
}

.input::-webkit-input-placeholder {
  color: currentColor;
  opacity: 1
}

.input::-moz-placeholder {
  color: currentColor;
  opacity: 1
}

.input:-ms-input-placeholder {
  color: currentColor;
  opacity: 1
}

.input::-ms-input-placeholder {
  color: currentColor;
  opacity: 1
}

.input::placeholder {
  color: currentColor;
  opacity: 1
}

.not_validate_state .input[type="password"]::-webkit-input-placeholder {
  color: #ff6838
}

.not_validate_state .input[type="password"]::-moz-placeholder {
  color: #ff6838
}

.not_validate_state .input[type="password"]:-ms-input-placeholder {
  color: #ff6838
}

.not_validate_state .input[type="password"]::-ms-input-placeholder {
  color: #ff6838
}

.not_validate_state .input[type="password"]::placeholder {
  color: #ff6838
}

.not_validate_state .input[type="password"] {
  border-color: #ff6838;
  color: #ff6838;
}

.input[type=email]:valid {
  border-color: #58bd7d
}

.input[type=email]:valid + .input__icon {
  color: #58bd7d;
  display: block
}

.input:-webkit-autofill {
  -webkit-text-fill-color: #777e90;
  -webkit-box-shadow: inset 0 0 0 1000px #23262f
}

.input_button {
  color: #777e90;
  cursor: pointer;
  height: 2.4rem;
  position: absolute;
  right: 1.6rem;
  top: 50%;
  -webkit-transform: translateY(-50%);
  transform: translateY(-50%);
  -webkit-transition: color .3s ease;
  transition: color .3s ease;
  width: 2.4rem;
  z-index: 1
}

.input_button:focus,
.input_button:hover {
  color: #fff;
}

.not_validate_state .input_button {
  display: none
}

.input__icon {
  display: none;
  height: 2.4rem;
  position: absolute;
  right: 1.6rem;
  top: 50%;
  -webkit-transform: translateY(-50%);
  transform: translateY(-50%);
  width: 2.4rem;
  z-index: 1
}

.input__icon.input__icon--check_mod {
  height: 1.4rem;
  width: 1.4rem
}

.warning_state .input__icon {
  display: block
}

.input__label {
  color: #ff6838;
  font-size: 1rem;
  line-height: 1.2;
  padding: 0 1.6rem
}

.not_validate_state .input_button {
  display: none
}

.not_validate_state .input__icon--not_valid_mod {
  display: block
}

.input__label:not(.not_validate_state .input__label) {
  display: none
}

.not_validate_state .input::-webkit-input-placeholder {
  color: #ff6838
}

.not_validate_state .input::-moz-placeholder {
  color: #ff6838
}

.not_validate_state .input:-ms-input-placeholder {
  color: #ff6838
}

.not_validate_state .input::-ms-input-placeholder {
  color: #ff6838
}

.not_validate_state .input::placeholder {
  color: #ff6838
}
</style>
