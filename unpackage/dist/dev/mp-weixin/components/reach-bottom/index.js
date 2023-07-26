"use strict";
var common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_uni_load_more2 = common_vendor.resolveComponent("uni-load-more");
  _easycom_uni_load_more2();
}
const _easycom_uni_load_more = () => "../../uni_modules/uni-load-more/components/uni-load-more/uni-load-more.js";
if (!Math) {
  _easycom_uni_load_more();
}
const _sfc_main = {
  __name: "index",
  setup(__props, { expose }) {
    let status = common_vendor.ref("noMore");
    const contentText = common_vendor.ref({
      contentdown: "\u4E0A\u62C9\u52A0\u8F7D\u66F4\u591A",
      contentrefresh: "\u52A0\u8F7D\u4E2D...",
      contentnomore: "- \u6CA1\u6709\u66F4\u591A\u4E86 -"
    });
    expose({
      status,
      contentText
    });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          status: common_vendor.unref(status),
          ["content-text"]: contentText.value
        })
      };
    };
  }
};
var Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "E:/project/\u5C0F\u667A\u5E2E/project-xzb-app-uniapp-java\uFF08\u670D\u52A1\u7AEF\uFF09/components/reach-bottom/index.vue"]]);
wx.createComponent(Component);
