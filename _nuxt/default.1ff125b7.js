import{a as l}from"./entry.263ed8c2.js";import{l as s,m as n,I as H,L as b,M as y,F as e,N as P,J as v,O as f,G as S,q as o,H as I,x as C,u as L,P as T,Q as V,R as A,U as D,V as M}from"./swiper-vue.95c9f2fd.js";import{_ as g,a as k}from"./IconFrame.b11f25a3.js";const E=""+new URL("main_decor_1.b8b0ae4e.svg",import.meta.url).href,O=""+new URL("main_decor_2.8419d678.svg",import.meta.url).href,j=""+new URL("main_decor_3.e0ca75a8.svg",import.meta.url).href,z=""+new URL("main_decor_4.41f9d2d9.svg",import.meta.url).href,G=""+new URL("main_decor_5.c5d83d1b.svg",import.meta.url).href,J=""+new URL("main_decor_6.a004e799.svg",import.meta.url).href,Q={name:"MainDecor"},K={class:"main_decor__wrap"},W=H('<div class="main_decor main_decor--pos_1_mod"><img class="main_decor__img" src="'+E+'" alt="decor"></div><div class="main_decor main_decor--pos_2_mod"><img class="main_decor__img" src="'+O+'" alt="decor"></div><div class="main_decor main_decor--pos_3_mod"><img class="main_decor__img" src="'+j+'" alt="decor"></div><div class="main_decor main_decor--pos_4_mod"><img class="main_decor__img" src="'+z+'" alt="decor"></div><div class="main_decor main_decor--pos_5_mod"><img class="main_decor__img" src="'+G+'" alt="decor"></div><div class="main_decor main_decor--pos_6_mod"><img class="main_decor__img" src="'+J+'" alt="decor"></div>',6),X=[W];function Y(t,i,_,u,d,a){return s(),n("div",K,X)}const N=l(Q,[["render",Y]]),Z=""+new URL("logo.74e7169b.svg",import.meta.url).href;const ee={name:"Logo"},te=t=>(b("data-v-6d180536"),t=t(),y(),t),_e={href:"#",class:"logo"},oe=te(()=>e("img",{class:"logo__img",src:Z,alt:"logo"},null,-1)),se=[oe];function ne(t,i,_,u,d,a){return s(),n("a",_e,se)}const B=l(ee,[["render",ne],["__scopeId","data-v-6d180536"]]),ce={name:"Button",props:{btn:{type:Boolean},link:{type:Boolean},label:{type:String,required:!0},classes:{type:String,required:!0},url:{type:String},id:{type:String,required:!1}}},ie=["href"],ae=["id"];function de(t,i,_,u,d,a){return s(),n(S,null,[_.link?(s(),n("a",{key:0,class:P(["btn",`${_.classes}`]),href:`${_.url?_.url:"#"}`},v(_.label),11,ie)):f("",!0),_.btn?(s(),n("button",{key:1,class:P(["btn",`${_.classes}`]),id:`${_.id}`,type:"submit"},v(_.label),11,ae)):f("",!0)],64)}const w=l(ce,[["render",de]]);const re={header:"Header",components:[B,w],data(){return{items:[{label:"Вхід",url:"#popup_login",classes:"btn__dark popupOpen"},{label:"Реєстрація",url:"#popup_registration",classes:"btn__primary popupOpen"}]}}},pe={class:"header lockPadding"},le={class:"header__in"},ue={class:"header__logo"},me={class:"header__btn"};function he(t,i,_,u,d,a){const c=B,r=w;return s(),n("header",pe,[e("div",le,[e("div",ue,[o(c)]),e("div",me,[(s(!0),n(S,null,I(d.items,({label:m,url:p,classes:h},$)=>(s(),n("div",{class:"header__btn_item",key:$},[o(r,{link:"",label:`${m}`,url:`${p}`,classes:`btn btn__small ${h}`},null,8,["label","url","classes"])]))),128))])])])}const q=l(re,[["render",he],["__scopeId","data-v-9ddaa12b"]]);const $e={name:"FormInput",components:["Icon"],props:{button:{type:Boolean},type:{type:String,required:!0},placeholder:{type:String,required:!0},id:{type:String,required:!0},label:{type:String,required:!1}}},ve={class:"form_block"},ge={class:"input_wrap"},fe=["type","id","placeholder"],be=["data-input-id"],ye={class:"input__icon input__icon--check_mod"},Se={key:1,class:"input__icon input__icon--not_valid_mod"},we={key:0,class:"input__label"};function xe(t,i,_,u,d,a){const c=g;return s(),n("div",ve,[e("div",ge,[e("input",{class:"input",type:`${_.type}`,id:`${_.id}`,placeholder:`${_.placeholder}`,required:""},null,8,fe),_.type==="password"?(s(),n("button",{key:0,class:"input_button btnShowPass",type:"button","aria-label":"show password","data-input-id":`${_.id}`},[o(c,{name:"eye"})],8,be)):f("",!0),e("div",ye,[o(c,{name:"check"})]),_.type==="password"?(s(),n("div",Se,[o(c,{name:"close_circle"})])):f("",!0)]),_.type==="password"?(s(),n("label",we,v(_.label),1)):f("",!0)])}const R=l($e,[["render",xe],["__scopeId","data-v-2bb10981"]]);const Ie={name:"PopupContentLogin",components:["Icon","IconFrame","FormInput","Button"],props:{id:{type:String,required:!0}}},ke=t=>(b("data-v-84662c15"),t=t(),y(),t),Pe=["id"],Ce={class:"popup__in"},Le={class:"popup__content_wrap popupCardContent"},Ne={class:"popup__close popupCardClose",type:"button","aria-label":"close"},Be={class:"popup__close_icon"},qe={class:"popup__logon_wrap"},Re={class:"popup__head"},Fe={class:"popup__head_icon_wrap"},Ue=ke(()=>e("h3",{class:"popup__head_title"},"Вхід",-1)),He={class:"popup__form"},Te={class:"popup__btn_wrap"};function Ve(t,i,_,u,d,a){const c=g,r=k,m=R,p=w;return s(),n("div",{class:"popup popupCard",id:`${_.id}`},[e("div",Ce,[e("div",Le,[e("button",Ne,[e("div",Be,[o(c,{name:"close"})])]),e("div",qe,[e("div",Re,[e("div",Fe,[o(r,{iconName:"lock",classes:"icon_frame--small orange"})]),Ue]),e("form",He,[o(m,{type:"email",placeholder:"Ваш email",id:"login_mail"}),o(m,{type:"password",placeholder:"Ваш пароль",id:"login_password"}),e("div",Te,[o(p,{btn:"",label:"Війти",id:"log_submit",classes:"btn__primary btn__medium"})])])])])])],8,Pe)}const F=l(Ie,[["render",Ve],["__scopeId","data-v-84662c15"]]);const Ae={name:"CheckItem",components:["IconFrame"],props:{title:{type:String,required:!0},description:{type:String,required:!0}}},De={class:"check_item"},Me={class:"check_item__pic"},Ee={class:"check_item__text"},Oe={class:"check_item__text_title"},je={class:"check_item__text_descrip"};function ze(t,i,_,u,d,a){const c=k;return s(),n("div",De,[e("div",Me,[o(c,{iconName:"check",classes:"icon_frame--small gray"})]),e("div",Ee,[e("div",Oe,v(_.title),1),e("div",je,v(_.description),1)])])}const Ge=l(Ae,[["render",ze],["__scopeId","data-v-e8b4a506"]]);const Je={name:"SliderItem",components:["CheckItem"],props:{slide_title:{type:String,required:!0}},data(){return{items:[{title:"CPA",description:"$25 і вище"},{title:"REVSHARE",description:"Піднімай до 60%"},{title:"Особлива підтримка для кожного 24/7",description:"У вас буде свій персональний менеджер"}]}}},Qe={class:"slider_item"},Ke={class:"slider_item__title"},We={class:"slider_item__content"},Xe={class:"slider_item__list"};function Ye(t,i,_,u,d,a){const c=Ge;return s(),n("div",Qe,[e("div",Ke,"Зможеш обрати свій варіант №"+v(_.slide_title),1),e("div",We,[e("ul",Xe,[(s(!0),n(S,null,I(d.items,({title:r,description:m},p)=>(s(),n("li",{class:"slider_item__list_item",key:p},[o(c,{title:`${r}`,description:`${m}`},null,8,["title","description"])]))),128))])])])}const Ze=l(Je,[["render",Ye],["__scopeId","data-v-e3f7f9aa"]]);const et={name:"SliderButtonPrev",methods:{goToPrevSlide(){this.$swiper().slideNext()}}},tt={class:"slider__btn_icon"};function _t(t,i,_,u,d,a){const c=g;return s(),n("button",{class:"slider__btn prevArrow",onClick:i[0]||(i[0]=(...r)=>a.goToPrevSlide&&a.goToPrevSlide(...r))},[e("div",tt,[o(c,{name:"arrow_left"})])])}const ot=l(et,[["render",_t],["__scopeId","data-v-a73438b7"]]);const st={name:"SliderButtonNext",methods:{goToNextSlide(){this.$swiper().slideNext()}}},nt={class:"slider__btn_icon"};function ct(t,i,_,u,d,a){const c=g;return s(),n("button",{class:"slider__btn nextArrow",onClick:i[0]||(i[0]=(...r)=>a.goToNextSlide&&a.goToNextSlide(...r))},[e("div",nt,[o(c,{name:"arrow_right"})])])}const it=l(st,[["render",ct],["__scopeId","data-v-f52f7cb3"]]);const at={name:"Slider"},dt=t=>(b("data-v-c775fb5c"),t=t(),y(),t),rt={class:"slider"},pt={class:"slider__controls"},lt=dt(()=>e("div",{class:"slider__pagination pagination"},null,-1));function ut(t,i,_,u,d,a){const c=Ze,r=A,m=D,p=ot,h=it;return s(),n("div",rt,[o(m,{modules:["SwiperPagination"in t?t.SwiperPagination:L(T),"SwiperNavigation"in t?t.SwiperNavigation:L(V)],"slides-per-view":1,effect:"fade",pagination:{el:".pagination",clickable:!0}},{default:C(()=>[(s(),n(S,null,I(3,$=>o(r,{key:$},{default:C(()=>[o(c,{slide_title:`${$}`},null,8,["slide_title"])]),_:2},1024)),64))]),_:1},8,["modules","pagination"]),e("div",pt,[o(p),lt,o(h)])])}const mt=l(at,[["render",ut],["__scopeId","data-v-c775fb5c"]]);const ht={name:"SocialLink",props:{name:{type:String,required:!0},href:{type:String,required:!1}}},$t=["href"],vt={class:"social_link__icon"};function gt(t,i,_,u,d,a){const c=g;return s(),n("a",{class:"social_link",href:`${t.url?t.url:"#"}`},[e("div",vt,[o(c,{name:`${_.name}`},null,8,["name"])])],8,$t)}const ft=l(ht,[["render",gt],["__scopeId","data-v-eec65d40"]]),bt=""+new URL("graph_slider.2f6b00b2.svg",import.meta.url).href,yt=""+new URL("lines_slider.b950b27e.svg",import.meta.url).href;const St={name:"popup",props:{id:{type:String,required:!0}},head(){return{script:[{src:"~/assets/js/submitForm.js"}]}}},x=t=>(b("data-v-04b84d3a"),t=t(),y(),t),wt=["id"],xt={class:"popup__in"},It={class:"popup__content_wrap popupCardContent"},kt={class:"popup__close popupCardClose",type:"button","aria-label":"close"},Pt={class:"popup__close_icon"},Ct={class:"popup__content"},Lt={class:"popup__content_col popup__content_col--v1_mod"},Nt=x(()=>e("div",{class:"popup__content_decor_top"},[e("img",{class:"popup__content_decor_img",src:bt,alt:"popup decor"})],-1)),Bt=x(()=>e("div",{class:"popup__content_decor_bottom"},[e("img",{class:"popup__content_decor_img",src:yt,alt:"popup decor"})],-1)),qt={class:"popup__content_col_in"},Rt={class:"popup__content_col popup__content_col--v2_mod"},Ft={class:"popup__head"},Ut={class:"popup__head_icon_wrap popup__head_icon_wrap--color_green_mod"},Ht=x(()=>e("h2",{class:"popup__head_title"},"Реєстрація",-1)),Tt={class:"popup__form"},Vt={class:"popup__regist"},At={class:"popup__bottom"},Dt=x(()=>e("div",{class:"popup__bottom_title"},"Оберіть спосіб звязку",-1)),Mt={class:"popup__bottom_social"},Et={class:"popup__btn_wrap"};function Ot(t,i,_,u,d,a){const c=g,r=mt,m=k,p=R,h=ft,$=w;return s(),n("div",{class:"popup popupCard",id:`${_.id}`},[e("div",xt,[e("div",It,[e("button",kt,[e("div",Pt,[o(c,{name:"close"})])]),e("div",Ct,[e("div",Lt,[Nt,Bt,e("div",qt,[o(r)])]),e("div",Rt,[e("div",Ft,[e("div",Ut,[o(m,{iconName:"user",classes:"icon_frame--small green"})]),Ht]),e("form",Tt,[e("div",Vt,[o(p,{type:"text",placeholder:"Ваше імʼя",id:"name"}),o(p,{type:"email",placeholder:"Ваш email",id:"login_mail_reg"}),o(p,{type:"password",placeholder:"Ваш пароль",id:"reg_password",label:"Пароль має містити літери і символи"}),o(p,{type:"password",placeholder:"Повторіть пароль",id:"reg_password_valid",label:"Паролі не співпадають"})]),e("div",At,[Dt,e("div",Mt,[o(h,{name:"telegram"}),o(h,{name:"skype"}),o(p,{type:"text",placeholder:"@телеграм_адреса",id:"login_mail"})])]),e("div",Et,[o($,{btn:"",label:"Реєстрація",id:"reg_submit",classes:"btn__primary btn__medium"})])])])])])])],8,wt)}const U=l(St,[["render",Ot],["__scopeId","data-v-04b84d3a"]]);const jt={components:{Header:q,MainDecor:N,PopupLogin:F,PopupReg:U},mounted(){this.$showPassword(),this.$initPopup(),this.$submitForm()}},zt={class:"app"},Gt={class:"wrapper"},Jt={class:"base"};function Qt(t,i,_,u,d,a){const c=q,r=N,m=F,p=U;return s(),n("div",zt,[o(c),e("div",Gt,[e("main",Jt,[o(r),M(t.$slots,"default",{},void 0,!0)])]),o(m,{id:"popup_login"}),o(p,{id:"popup_registration"})])}const Yt=l(jt,[["render",Qt],["__scopeId","data-v-7e74ba48"]]);export{Yt as default};
