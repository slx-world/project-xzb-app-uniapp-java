"use strict";
var common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_uni_nav_bar2 = common_vendor.resolveComponent("uni-nav-bar");
  _easycom_uni_nav_bar2();
}
const _easycom_uni_nav_bar = () => "../../uni_modules/uni-nav-bar/components/uni-nav-bar/uni-nav-bar.js";
if (!Math) {
  _easycom_uni_nav_bar();
}
const _sfc_main = {
  __name: "index",
  props: {
    title: {
      type: String,
      default: ""
    },
    rithtText: {
      type: String,
      default: ""
    },
    isLeftText: {
      type: Boolean
    }
  },
  setup(__props, { emit }) {
    const store = common_vendor.useStore();
    const users = store.state.user;
    users.taskStatus;
    const goBack = () => {
      emit("goBack");
    };
    const handleAll = () => {
      emit("handleAll");
    };
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: __props.isLeftText
      }, __props.isLeftText ? {
        b: common_vendor.p({
          title: __props.title,
          statusBar: "true",
          fixed: "true"
        })
      } : {
        c: common_vendor.o(goBack),
        d: common_vendor.o(handleAll),
        e: common_vendor.p({
          ["left-icon"]: "back",
          leftIcon: "arrowleft",
          title: __props.title,
          statusBar: "true",
          fixed: "true",
          ["right-text"]: __props.rithtText
        })
      });
    };
  }
};
var Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-30dede9e"], ["__file", "E:/project/\u5C0F\u667A\u5E2E/project-xzb-app-uniapp-java\uFF08\u670D\u52A1\u7AEF\uFF09/components/uni-nav/index.vue"]]);
wx.createComponent(Component);
