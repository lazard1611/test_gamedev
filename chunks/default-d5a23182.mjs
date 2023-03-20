import { b as buildAssetsURL } from './renderer.mjs';
import { useSSRContext, mergeProps, unref, withCtx, createVNode, openBlock, createBlock, Fragment, renderList } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot, ssrRenderAttr, ssrRenderList, ssrRenderClass, ssrInterpolate } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';
import { _ as __nuxt_component_0$3, a as __nuxt_component_2$2 } from './IconFrame-343bf3f2.mjs';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Pagination, Navigation } from 'swiper';
import 'vue-bundle-renderer/runtime';
import 'h3';
import './node-server.mjs';
import 'node-fetch-native/polyfill';
import 'node:http';
import 'node:https';
import 'destr';
import 'ofetch';
import 'unenv/runtime/fetch/index';
import 'hookable';
import 'scule';
import 'defu';
import 'ohash';
import 'ufo';
import 'unstorage';
import 'radix3';
import 'node:fs';
import 'node:url';
import 'pathe';
import 'unctx';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';

const _imports_0$2 = "" + buildAssetsURL("main_decor_1.b8b0ae4e.svg");
const _imports_1$1 = "" + buildAssetsURL("main_decor_2.8419d678.svg");
const _imports_2 = "" + buildAssetsURL("main_decor_3.e0ca75a8.svg");
const _imports_3 = "" + buildAssetsURL("main_decor_4.41f9d2d9.svg");
const _imports_4 = "" + buildAssetsURL("main_decor_5.c5d83d1b.svg");
const _imports_5 = "" + buildAssetsURL("main_decor_6.a004e799.svg");
const _sfc_main$d = {
  name: "MainDecor"
};
function _sfc_ssrRender$d(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "main_decor__wrap" }, _attrs))} data-v-b82fea5a><div class="main_decor main_decor--pos_1_mod" data-v-b82fea5a><img class="main_decor__img"${ssrRenderAttr("src", _imports_0$2)} alt="decor" data-v-b82fea5a></div><div class="main_decor main_decor--pos_2_mod" data-v-b82fea5a><img class="main_decor__img"${ssrRenderAttr("src", _imports_1$1)} alt="decor" data-v-b82fea5a></div><div class="main_decor main_decor--pos_3_mod" data-v-b82fea5a><img class="main_decor__img"${ssrRenderAttr("src", _imports_2)} alt="decor" data-v-b82fea5a></div><div class="main_decor main_decor--pos_4_mod" data-v-b82fea5a><img class="main_decor__img"${ssrRenderAttr("src", _imports_3)} alt="decor" data-v-b82fea5a></div><div class="main_decor main_decor--pos_5_mod" data-v-b82fea5a><img class="main_decor__img"${ssrRenderAttr("src", _imports_4)} alt="decor" data-v-b82fea5a></div><div class="main_decor main_decor--pos_6_mod" data-v-b82fea5a><img class="main_decor__img"${ssrRenderAttr("src", _imports_5)} alt="decor" data-v-b82fea5a></div></div>`);
}
const _sfc_setup$d = _sfc_main$d.setup;
_sfc_main$d.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/MainDecor.vue");
  return _sfc_setup$d ? _sfc_setup$d(props, ctx) : void 0;
};
const __nuxt_component_1$1 = /* @__PURE__ */ _export_sfc(_sfc_main$d, [["ssrRender", _sfc_ssrRender$d], ["__scopeId", "data-v-b82fea5a"]]);
const _imports_0$1 = "" + buildAssetsURL("logo.74e7169b.svg");
const _sfc_main$c = {
  name: "Logo"
};
function _sfc_ssrRender$c(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<a${ssrRenderAttrs(mergeProps({
    href: "#",
    class: "logo"
  }, _attrs))} data-v-6d180536><img class="logo__img"${ssrRenderAttr("src", _imports_0$1)} alt="logo" data-v-6d180536></a>`);
}
const _sfc_setup$c = _sfc_main$c.setup;
_sfc_main$c.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Logo.vue");
  return _sfc_setup$c ? _sfc_setup$c(props, ctx) : void 0;
};
const __nuxt_component_0$2 = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["ssrRender", _sfc_ssrRender$c], ["__scopeId", "data-v-6d180536"]]);
const _sfc_main$b = {
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
      required: true
    },
    classes: {
      type: String,
      required: true
    },
    url: {
      type: String
    },
    id: {
      type: String,
      required: false
    }
  }
};
function _sfc_ssrRender$b(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<!--[-->`);
  if ($props.link) {
    _push(`<a${ssrRenderAttr("href", `${$props.url ? $props.url : "#"}`)} class="${ssrRenderClass([`${$props.classes}`, "btn"])}" data-v-dd1e05f8>${ssrInterpolate($props.label)}</a>`);
  } else {
    _push(`<!---->`);
  }
  if ($props.btn) {
    _push(`<button class="${ssrRenderClass([`${$props.classes}`, "btn"])}"${ssrRenderAttr("id", `${$props.id}`)} type="submit" data-v-dd1e05f8>${ssrInterpolate($props.label)}</button>`);
  } else {
    _push(`<!---->`);
  }
  _push(`<!--]-->`);
}
const _sfc_setup$b = _sfc_main$b.setup;
_sfc_main$b.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Button.vue");
  return _sfc_setup$b ? _sfc_setup$b(props, ctx) : void 0;
};
const __nuxt_component_5 = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["ssrRender", _sfc_ssrRender$b], ["__scopeId", "data-v-dd1e05f8"]]);
const _sfc_main$a = {
  header: "Header",
  components: [__nuxt_component_0$2, __nuxt_component_5],
  data() {
    return {
      items: [
        {
          label: "\u0412\u0445\u0456\u0434",
          url: "#popup_login",
          classes: "btn__dark popupOpen"
        },
        {
          label: "\u0420\u0435\u0454\u0441\u0442\u0440\u0430\u0446\u0456\u044F",
          url: "#popup_registration",
          classes: "btn__primary popupOpen"
        }
      ]
    };
  }
};
function _sfc_ssrRender$a(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Logo = __nuxt_component_0$2;
  const _component_Button = __nuxt_component_5;
  _push(`<header${ssrRenderAttrs(mergeProps({ class: "header lockPadding" }, _attrs))} data-v-6ac63bc4><div class="header__in" data-v-6ac63bc4><div class="header__logo" data-v-6ac63bc4>`);
  _push(ssrRenderComponent(_component_Logo, null, null, _parent));
  _push(`</div><div class="header__btn" data-v-6ac63bc4><!--[-->`);
  ssrRenderList($data.items, ({ label, url, classes }, index) => {
    _push(`<div class="header__btn_item" data-v-6ac63bc4>`);
    _push(ssrRenderComponent(_component_Button, {
      link: "",
      label: `${label}`,
      url: `${url}`,
      classes: `btn btn__small ${classes}`
    }, null, _parent));
    _push(`</div>`);
  });
  _push(`<!--]--></div></div></header>`);
}
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Header.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const __nuxt_component_0$1 = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["ssrRender", _sfc_ssrRender$a], ["__scopeId", "data-v-6ac63bc4"]]);
const _sfc_main$9 = {
  name: "FormInput",
  components: ["Icon"],
  props: {
    button: {
      type: Boolean
    },
    type: {
      type: String,
      required: true
    },
    placeholder: {
      type: String,
      required: true
    },
    id: {
      type: String,
      required: true
    },
    label: {
      type: String,
      required: false
    }
  }
};
function _sfc_ssrRender$9(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Icon = __nuxt_component_0$3;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "form_block" }, _attrs))} data-v-2bb10981><div class="input_wrap" data-v-2bb10981><input class="input"${ssrRenderAttr("type", `${$props.type}`)}${ssrRenderAttr("id", `${$props.id}`)}${ssrRenderAttr("placeholder", `${$props.placeholder}`)} required data-v-2bb10981>`);
  if ($props.type === "password") {
    _push(`<button class="input_button btnShowPass" type="button" aria-label="show password"${ssrRenderAttr("data-input-id", `${$props.id}`)} data-v-2bb10981>`);
    _push(ssrRenderComponent(_component_Icon, { name: "eye" }, null, _parent));
    _push(`</button>`);
  } else {
    _push(`<!---->`);
  }
  _push(`<div class="input__icon input__icon--check_mod" data-v-2bb10981>`);
  _push(ssrRenderComponent(_component_Icon, { name: "check" }, null, _parent));
  _push(`</div>`);
  if ($props.type === "password") {
    _push(`<div class="input__icon input__icon--not_valid_mod" data-v-2bb10981>`);
    _push(ssrRenderComponent(_component_Icon, { name: "close_circle" }, null, _parent));
    _push(`</div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div>`);
  if ($props.type === "password") {
    _push(`<label class="input__label" data-v-2bb10981>${ssrInterpolate($props.label)}</label>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div>`);
}
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/FormInput.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const __nuxt_component_3$2 = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["ssrRender", _sfc_ssrRender$9], ["__scopeId", "data-v-2bb10981"]]);
const _sfc_main$8 = {
  name: "PopupContentLogin",
  components: ["Icon", "IconFrame", "FormInput", "Button"],
  props: {
    id: {
      type: String,
      required: true
    }
  }
};
function _sfc_ssrRender$8(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Icon = __nuxt_component_0$3;
  const _component_IconFrame = __nuxt_component_2$2;
  const _component_FormInput = __nuxt_component_3$2;
  const _component_Button = __nuxt_component_5;
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: "popup popupCard",
    id: `${$props.id}`
  }, _attrs))} data-v-84662c15><div class="popup__in" data-v-84662c15><div class="popup__content_wrap popupCardContent" data-v-84662c15><button class="popup__close popupCardClose" type="button" aria-label="close" data-v-84662c15><div class="popup__close_icon" data-v-84662c15>`);
  _push(ssrRenderComponent(_component_Icon, { name: "close" }, null, _parent));
  _push(`</div></button><div class="popup__logon_wrap" data-v-84662c15><div class="popup__head" data-v-84662c15><div class="popup__head_icon_wrap" data-v-84662c15>`);
  _push(ssrRenderComponent(_component_IconFrame, {
    iconName: "lock",
    classes: "icon_frame--small orange"
  }, null, _parent));
  _push(`</div><h3 class="popup__head_title" data-v-84662c15>\u0412\u0445\u0456\u0434</h3></div><form class="popup__form" data-v-84662c15>`);
  _push(ssrRenderComponent(_component_FormInput, {
    type: "email",
    placeholder: "\u0412\u0430\u0448 email",
    id: "login_mail"
  }, null, _parent));
  _push(ssrRenderComponent(_component_FormInput, {
    type: "password",
    placeholder: "\u0412\u0430\u0448 \u043F\u0430\u0440\u043E\u043B\u044C",
    id: "login_password"
  }, null, _parent));
  _push(`<div class="popup__btn_wrap" data-v-84662c15>`);
  _push(ssrRenderComponent(_component_Button, {
    btn: "",
    label: "\u0412\u0456\u0439\u0442\u0438",
    id: "log_submit",
    classes: "btn__primary btn__medium"
  }, null, _parent));
  _push(`</div></form></div></div></div></div>`);
}
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/PopupLogin.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const __nuxt_component_2$1 = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["ssrRender", _sfc_ssrRender$8], ["__scopeId", "data-v-84662c15"]]);
const _sfc_main$7 = {
  name: "CheckItem",
  components: ["IconFrame"],
  props: {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    }
  }
};
function _sfc_ssrRender$7(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_IconFrame = __nuxt_component_2$2;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "check_item" }, _attrs))} data-v-e8b4a506><div class="check_item__pic" data-v-e8b4a506>`);
  _push(ssrRenderComponent(_component_IconFrame, {
    iconName: "check",
    classes: "icon_frame--small gray"
  }, null, _parent));
  _push(`</div><div class="check_item__text" data-v-e8b4a506><div class="check_item__text_title" data-v-e8b4a506>${ssrInterpolate($props.title)}</div><div class="check_item__text_descrip" data-v-e8b4a506>${ssrInterpolate($props.description)}</div></div></div>`);
}
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/CheckItem.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["ssrRender", _sfc_ssrRender$7], ["__scopeId", "data-v-e8b4a506"]]);
const _sfc_main$6 = {
  name: "SliderItem",
  components: ["CheckItem"],
  props: {
    slide_title: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      items: [
        {
          title: "CPA",
          description: "$25 \u0456 \u0432\u0438\u0449\u0435"
        },
        {
          title: "REVSHARE",
          description: "\u041F\u0456\u0434\u043D\u0456\u043C\u0430\u0439 \u0434\u043E 60%"
        },
        {
          title: "\u041E\u0441\u043E\u0431\u043B\u0438\u0432\u0430 \u043F\u0456\u0434\u0442\u0440\u0438\u043C\u043A\u0430 \u0434\u043B\u044F \u043A\u043E\u0436\u043D\u043E\u0433\u043E 24/7",
          description: "\u0423 \u0432\u0430\u0441 \u0431\u0443\u0434\u0435 \u0441\u0432\u0456\u0439 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u0438\u0439 \u043C\u0435\u043D\u0435\u0434\u0436\u0435\u0440"
        }
      ]
    };
  }
};
function _sfc_ssrRender$6(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_CheckItem = __nuxt_component_0;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "slider_item" }, _attrs))} data-v-e3f7f9aa><div class="slider_item__title" data-v-e3f7f9aa>\u0417\u043C\u043E\u0436\u0435\u0448 \u043E\u0431\u0440\u0430\u0442\u0438 \u0441\u0432\u0456\u0439 \u0432\u0430\u0440\u0456\u0430\u043D\u0442 \u2116${ssrInterpolate($props.slide_title)}</div><div class="slider_item__content" data-v-e3f7f9aa><ul class="slider_item__list" data-v-e3f7f9aa><!--[-->`);
  ssrRenderList($data.items, ({ title, description }, index) => {
    _push(`<li class="slider_item__list_item" data-v-e3f7f9aa>`);
    _push(ssrRenderComponent(_component_CheckItem, {
      title: `${title}`,
      description: `${description}`
    }, null, _parent));
    _push(`</li>`);
  });
  _push(`<!--]--></ul></div></div>`);
}
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/SliderItem.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["ssrRender", _sfc_ssrRender$6], ["__scopeId", "data-v-e3f7f9aa"]]);
const _sfc_main$5 = {
  name: "SliderButtonPrev",
  methods: {
    goToPrevSlide() {
      this.$swiper().slideNext();
    }
  }
};
function _sfc_ssrRender$5(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Icon = __nuxt_component_0$3;
  _push(`<button${ssrRenderAttrs(mergeProps({ class: "slider__btn prevArrow" }, _attrs))} data-v-a73438b7><div class="slider__btn_icon" data-v-a73438b7>`);
  _push(ssrRenderComponent(_component_Icon, { name: "arrow_left" }, null, _parent));
  _push(`</div></button>`);
}
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/SliderButtonPrev.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __nuxt_component_3$1 = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["ssrRender", _sfc_ssrRender$5], ["__scopeId", "data-v-a73438b7"]]);
const _sfc_main$4 = {
  name: "SliderButtonNext",
  methods: {
    goToNextSlide() {
      this.$swiper().slideNext();
    }
  }
};
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Icon = __nuxt_component_0$3;
  _push(`<button${ssrRenderAttrs(mergeProps({ class: "slider__btn nextArrow" }, _attrs))} data-v-f52f7cb3><div class="slider__btn_icon" data-v-f52f7cb3>`);
  _push(ssrRenderComponent(_component_Icon, { name: "arrow_right" }, null, _parent));
  _push(`</div></button>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/SliderButtonNext.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_4$1 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$4], ["__scopeId", "data-v-f52f7cb3"]]);
const _sfc_main$3 = {
  name: "Slider"
};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Swiper = Swiper;
  const _component_SwiperSlide = SwiperSlide;
  const _component_SliderItem = __nuxt_component_2;
  const _component_SliderButtonPrev = __nuxt_component_3$1;
  const _component_SliderButtonNext = __nuxt_component_4$1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "slider" }, _attrs))} data-v-c775fb5c>`);
  _push(ssrRenderComponent(_component_Swiper, {
    modules: ["SwiperPagination" in _ctx ? _ctx.SwiperPagination : unref(Pagination), "SwiperNavigation" in _ctx ? _ctx.SwiperNavigation : unref(Navigation)],
    "slides-per-view": 1,
    effect: "fade",
    pagination: { el: ".pagination", clickable: true }
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<!--[-->`);
        ssrRenderList(3, (slide) => {
          _push2(ssrRenderComponent(_component_SwiperSlide, { key: slide }, {
            default: withCtx((_2, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(ssrRenderComponent(_component_SliderItem, {
                  slide_title: `${slide}`
                }, null, _parent3, _scopeId2));
              } else {
                return [
                  createVNode(_component_SliderItem, {
                    slide_title: `${slide}`
                  }, null, 8, ["slide_title"])
                ];
              }
            }),
            _: 2
          }, _parent2, _scopeId));
        });
        _push2(`<!--]-->`);
      } else {
        return [
          (openBlock(), createBlock(Fragment, null, renderList(3, (slide) => {
            return createVNode(_component_SwiperSlide, { key: slide }, {
              default: withCtx(() => [
                createVNode(_component_SliderItem, {
                  slide_title: `${slide}`
                }, null, 8, ["slide_title"])
              ]),
              _: 2
            }, 1024);
          }), 64))
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div class="slider__controls" data-v-c775fb5c>`);
  _push(ssrRenderComponent(_component_SliderButtonPrev, null, null, _parent));
  _push(`<div class="slider__pagination pagination" data-v-c775fb5c></div>`);
  _push(ssrRenderComponent(_component_SliderButtonNext, null, null, _parent));
  _push(`</div></div>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Slider.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$3], ["__scopeId", "data-v-c775fb5c"]]);
const _sfc_main$2 = {
  name: "SocialLink",
  components: [__nuxt_component_0$3],
  props: {
    name: {
      type: String,
      required: false
    },
    url: {
      type: String,
      required: false
    }
  }
};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Icon = __nuxt_component_0$3;
  _push(`<a${ssrRenderAttrs(mergeProps({
    class: "social_link",
    href: `${$props.url ? $props.url : "#"}`
  }, _attrs))} data-v-e5995842><div class="social_link__icon" data-v-e5995842>`);
  _push(ssrRenderComponent(_component_Icon, {
    name: `${$props.name}`
  }, null, _parent));
  _push(`</div></a>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/SocialLink.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_4 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2], ["__scopeId", "data-v-e5995842"]]);
const _imports_0 = "" + buildAssetsURL("graph_slider.2f6b00b2.svg");
const _imports_1 = "" + buildAssetsURL("lines_slider.b950b27e.svg");
const _sfc_main$1 = {
  name: "popup",
  components: [__nuxt_component_4],
  props: {
    id: {
      type: String,
      required: true
    }
  },
  head() {
    return {
      script: [
        { src: "~/assets/js/submitForm.js" }
      ]
    };
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Icon = __nuxt_component_0$3;
  const _component_Slider = __nuxt_component_1;
  const _component_IconFrame = __nuxt_component_2$2;
  const _component_FormInput = __nuxt_component_3$2;
  const _component_SocialLink = __nuxt_component_4;
  const _component_Button = __nuxt_component_5;
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: "popup popupCard",
    id: `${$props.id}`
  }, _attrs))} data-v-cbf7d41f><div class="popup__in" data-v-cbf7d41f><div class="popup__content_wrap popupCardContent" data-v-cbf7d41f><button class="popup__close popupCardClose" type="button" aria-label="close" data-v-cbf7d41f><div class="popup__close_icon" data-v-cbf7d41f>`);
  _push(ssrRenderComponent(_component_Icon, { name: "close" }, null, _parent));
  _push(`</div></button><div class="popup__content" data-v-cbf7d41f><div class="popup__content_col popup__content_col--v1_mod" data-v-cbf7d41f><div class="popup__content_decor_top" data-v-cbf7d41f><img class="popup__content_decor_img"${ssrRenderAttr("src", _imports_0)} alt="popup decor" data-v-cbf7d41f></div><div class="popup__content_decor_bottom" data-v-cbf7d41f><img class="popup__content_decor_img"${ssrRenderAttr("src", _imports_1)} alt="popup decor" data-v-cbf7d41f></div><div class="popup__content_col_in" data-v-cbf7d41f>`);
  _push(ssrRenderComponent(_component_Slider, null, null, _parent));
  _push(`</div></div><div class="popup__content_col popup__content_col--v2_mod" data-v-cbf7d41f><div class="popup__head" data-v-cbf7d41f><div class="popup__head_icon_wrap popup__head_icon_wrap--color_green_mod" data-v-cbf7d41f>`);
  _push(ssrRenderComponent(_component_IconFrame, {
    iconName: "user",
    classes: "icon_frame--small green"
  }, null, _parent));
  _push(`</div><h2 class="popup__head_title" data-v-cbf7d41f>\u0420\u0435\u0454\u0441\u0442\u0440\u0430\u0446\u0456\u044F</h2></div><form class="popup__form" data-v-cbf7d41f><div class="popup__regist" data-v-cbf7d41f>`);
  _push(ssrRenderComponent(_component_FormInput, {
    type: "text",
    placeholder: "\u0412\u0430\u0448\u0435 \u0456\u043C\u02BC\u044F",
    id: "name"
  }, null, _parent));
  _push(ssrRenderComponent(_component_FormInput, {
    type: "email",
    placeholder: "\u0412\u0430\u0448 email",
    id: "login_mail_reg"
  }, null, _parent));
  _push(ssrRenderComponent(_component_FormInput, {
    type: "password",
    placeholder: "\u0412\u0430\u0448 \u043F\u0430\u0440\u043E\u043B\u044C",
    id: "reg_password",
    label: "\u041F\u0430\u0440\u043E\u043B\u044C \u043C\u0430\u0454 \u043C\u0456\u0441\u0442\u0438\u0442\u0438 \u043B\u0456\u0442\u0435\u0440\u0438 \u0456 \u0441\u0438\u043C\u0432\u043E\u043B\u0438"
  }, null, _parent));
  _push(ssrRenderComponent(_component_FormInput, {
    type: "password",
    placeholder: "\u041F\u043E\u0432\u0442\u043E\u0440\u0456\u0442\u044C \u043F\u0430\u0440\u043E\u043B\u044C",
    id: "reg_password_valid",
    label: "\u041F\u0430\u0440\u043E\u043B\u0456 \u043D\u0435 \u0441\u043F\u0456\u0432\u043F\u0430\u0434\u0430\u044E\u0442\u044C"
  }, null, _parent));
  _push(`</div><div class="popup__bottom" data-v-cbf7d41f><div class="popup__bottom_title" data-v-cbf7d41f>\u041E\u0431\u0435\u0440\u0456\u0442\u044C \u0441\u043F\u043E\u0441\u0456\u0431 \u0437\u0432\u044F\u0437\u043A\u0443</div><div class="popup__bottom_social" data-v-cbf7d41f>`);
  _push(ssrRenderComponent(_component_SocialLink, { name: "telegram" }, null, _parent));
  _push(ssrRenderComponent(_component_SocialLink, { name: "skype" }, null, _parent));
  _push(ssrRenderComponent(_component_FormInput, {
    type: "text",
    placeholder: "@\u0442\u0435\u043B\u0435\u0433\u0440\u0430\u043C_\u0430\u0434\u0440\u0435\u0441\u0430",
    id: "login_mail"
  }, null, _parent));
  _push(`</div></div><div class="popup__btn_wrap" data-v-cbf7d41f>`);
  _push(ssrRenderComponent(_component_Button, {
    btn: "",
    label: "\u0420\u0435\u0454\u0441\u0442\u0440\u0430\u0446\u0456\u044F",
    id: "reg_submit",
    classes: "btn__primary btn__medium"
  }, null, _parent));
  _push(`</div></form></div></div></div></div></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/PopupReg.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-cbf7d41f"]]);
const _sfc_main = {
  components: { Header: __nuxt_component_0$1, MainDecor: __nuxt_component_1$1, PopupLogin: __nuxt_component_2$1, PopupReg: __nuxt_component_3 },
  mounted() {
    this.$showPassword(), this.$initPopup(), this.$submitForm();
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Header = __nuxt_component_0$1;
  const _component_MainDecor = __nuxt_component_1$1;
  const _component_PopupLogin = __nuxt_component_2$1;
  const _component_PopupReg = __nuxt_component_3;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "app" }, _attrs))} data-v-08ff0cb3>`);
  _push(ssrRenderComponent(_component_Header, null, null, _parent));
  _push(`<div class="wrapper" data-v-08ff0cb3><main class="base" data-v-08ff0cb3>`);
  _push(ssrRenderComponent(_component_MainDecor, null, null, _parent));
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</main></div>`);
  _push(ssrRenderComponent(_component_PopupLogin, { id: "popup_login" }, null, _parent));
  _push(ssrRenderComponent(_component_PopupReg, { id: "popup_registration" }, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _default = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-08ff0cb3"]]);

export { _default as default };
//# sourceMappingURL=default-d5a23182.mjs.map
