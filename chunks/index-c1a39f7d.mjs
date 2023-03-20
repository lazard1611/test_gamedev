import { b as buildAssetsURL } from './renderer.mjs';
import { _ as __nuxt_component_0$1, a as __nuxt_component_2 } from './IconFrame-343bf3f2.mjs';
import { useSSRContext, mergeProps } from 'vue';
import { ssrRenderComponent, ssrRenderAttrs, ssrRenderAttr, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';
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

const _imports_0 = "" + buildAssetsURL("graph.f634022a.svg");
const _imports_1 = "data:image/png;base64,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";
const _imports_2 = "data:image/png;base64,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";
const _sfc_main$2 = {
  name: "Hero",
  components: ["Icon"]
};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Icon = __nuxt_component_0$1;
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "section section__hero" }, _attrs))} data-v-048fef5c><div class="section_in" data-v-048fef5c><div class="hero" data-v-048fef5c><div class="hero__bg" data-v-048fef5c><img class="hero__bg_in"${ssrRenderAttr("src", _imports_0)} alt="head decor" data-v-048fef5c></div><div class="hero__head" data-v-048fef5c><div class="hero__head_decor" data-v-048fef5c><img class="hero__head_decor_img"${ssrRenderAttr("src", _imports_1)} alt="bg graph" data-v-048fef5c></div><h1 class="hero__title" data-v-048fef5c>\u0412\u043E\u043B\u043E\u0434\u0430\u0440\u0456 \u0422\u0440\u0430\u0444\u0456\u043A\u0443</h1><div class="hero__head_decor" data-v-048fef5c><img class="hero__head_decor_img"${ssrRenderAttr("src", _imports_2)} alt="head decor" data-v-048fef5c></div></div><div class="hero__description" data-v-048fef5c><p data-v-048fef5c>SC Partners \u2013 \u043D\u043E\u0432\u0430 \u043F\u0430\u0440\u0442\u043D\u0435\u0440\u0441\u044C\u043A\u0430 \u043C\u0435\u0440\u0435\u0436\u0430 \u0437 \u0432\u0435\u043B\u0438\u0447\u0435\u0437\u043D\u0438\u043C \u0434\u043E\u0441\u0432\u0456\u0434\u043E\u043C \u0442\u0430 \u0435\u043A\u0441\u043F\u0435\u0440\u0442\u0438\u0437\u043E\u044E. \u041A\u043E\u0436\u0435\u043D \u043D\u0430\u0448 \u043F\u0430\u0440\u0442\u043D\u0435\u0440 \u043E\u0442\u0440\u0438\u043C\u0443\u0454 \u043E\u0447\u0456\u043A\u0443\u0432\u0430\u043D\u0443 \u0432\u0438\u0433\u043E\u0434\u0443 \u043D\u0430 \u0430\u0431\u0441\u043E\u043B\u044E\u0442\u043D\u043E \u043F\u0440\u043E\u0437\u043E\u0440\u0438\u0445 \u0443\u043C\u043E\u0432\u0430\u0445 \u0442\u0430 \u0431\u0435\u0437\u0434\u043E\u0433\u0430\u043D\u043D\u0438\u0439 \u0441\u0443\u043F\u0440\u043E\u0432\u0456\u0434. \u041C\u0438 \u0431\u0443\u0434\u0435\u043C\u043E \u043F\u043E\u0440\u044F\u0434 \u0437 \u0432\u0430\u043C\u0438: \u043D\u0430 \u0432\u0456\u0434\u0441\u0442\u0430\u043D\u0456 \u043E\u0434\u043D\u043E\u0433\u043E \u043F\u043E\u0432\u0456\u0434\u043E\u043C\u043B\u0435\u043D\u043D\u044F \u0432 \u043C\u0435\u0441\u0435\u043D\u0434\u0436\u0435\u0440\u0456 \u0430\u0431\u043E \u0434\u0437\u0432\u0456\u043D\u043A\u0430, \u0430\u0434\u0436\u0435 \u043C\u0438 \u043F\u0440\u0430\u0446\u044E\u0454\u043C\u043E \u043F\u043E\u0440\u044F\u0434 \u0437 \u0432\u0430\u043C\u0438.</p></div><div class="hero__decor" data-v-048fef5c><!--[-->`);
  ssrRenderList(5, (index2) => {
    _push(`<div class="hero__decor_icon" data-v-048fef5c>`);
    _push(ssrRenderComponent(_component_Icon, { name: "star" }, null, _parent));
    _push(`</div>`);
  });
  _push(`<!--]--></div></div></div></section>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Hero.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2], ["__scopeId", "data-v-048fef5c"]]);
const _sfc_main$1 = {
  name: "Traffic",
  components: ["IconFrame"],
  data() {
    return {
      items: [
        {
          picture: "megaphone",
          title: "\u041A\u0440\u0443\u0442\u0456 \u0430\u043A\u0446\u0456\u0457, \u043F\u0440\u0438\u0437\u0438 \u0442\u0430 \u043F\u0440\u0438\u0431\u0443\u0442\u043A\u043E\u0432\u0430 \u0431\u043E\u043D\u0443\u0441\u043D\u0430 \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u0430",
          description: "\u041C\u0438 \u043F\u043E\u0441\u0442\u0456\u0439\u043D\u043E \u043F\u0440\u0430\u0446\u044E\u0454\u043C\u043E \u043D\u0430\u0434 \u0442\u0438\u043C, \u0449\u043E\u0431 \u0432\u0430\u043C \u0431\u0443\u043B\u043E \u0446\u0456\u043A\u0430\u0432\u043E \u0442\u0430 \u0432\u0438\u0433\u0456\u0434\u043D\u043E!"
        },
        {
          picture: "smile",
          title: "\u041E\u0441\u043E\u0431\u043B\u0438\u0432\u0430 \u043F\u0456\u0434\u0442\u0440\u0438\u043C\u043A\u0430 \u0434\u043B\u044F \u043A\u043E\u0436\u043D\u043E\u0433\u043E 24/7",
          description: "\u0423 \u0432\u0430\u0441 \u0431\u0443\u0434\u0435 \u0441\u0432\u0456\u0439 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u0438\u0439 \u043C\u0435\u043D\u0435\u0434\u0436\u0435\u0440"
        },
        {
          picture: "chart_bar",
          title: "\u0414\u0435\u0442\u0430\u043B\u044C\u043D\u0430 \u0441\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043A\u0430",
          description: "\u041C\u0438\u0442\u0442\u0454\u0432\u0435 \u043E\u043D\u043E\u0432\u043B\u0435\u043D\u043D\u044F, \u0437\u0440\u043E\u0437\u0443\u043C\u0456\u043B\u0430 \u0441\u0438\u0441\u0442\u0435\u043C\u0430 \u0432\u0456\u0434\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u043D\u044F \u0441\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043A\u0438"
        }
      ]
    };
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_IconFrame = __nuxt_component_2;
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "section section__traffic" }, _attrs))} data-v-6000361a><div class="section_in" data-v-6000361a><div class="traffic" data-v-6000361a><h2 class="traffic__title" data-v-6000361a>\u0422\u0438\u043C, \u0445\u0442\u043E \u043D\u0430\u0433\u043E\u043D\u044F\u0454 \u0422\u0440\u0430\u0444</h2><ul class="traffic__list" data-v-6000361a><!--[-->`);
  ssrRenderList($data.items, (item, index2) => {
    _push(`<li class="traffic__item" data-v-6000361a><div class="traffic__item_in" data-v-6000361a><div class="traffic__pic" data-v-6000361a>`);
    _push(ssrRenderComponent(_component_IconFrame, {
      iconName: `${item.picture}`,
      classes: "yellow"
    }, null, _parent));
    _push(`</div><div class="traffic__item_content" data-v-6000361a><div class="traffic__item_title" data-v-6000361a>${ssrInterpolate(item.title)}</div><div class="traffic__item_description" data-v-6000361a>${ssrInterpolate(item.description)}</div></div></div></li>`);
  });
  _push(`<!--]--></ul></div></div></section>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Traffic.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-6000361a"]]);
const _sfc_main = {
  name: "index",
  components: { Hero: __nuxt_component_0, Traffic: __nuxt_component_1 }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Hero = __nuxt_component_0;
  const _component_Traffic = __nuxt_component_1;
  _push(`<!--[-->`);
  _push(ssrRenderComponent(_component_Hero, null, null, _parent));
  _push(ssrRenderComponent(_component_Traffic, null, null, _parent));
  _push(`<!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { index as default };
//# sourceMappingURL=index-c1a39f7d.mjs.map
