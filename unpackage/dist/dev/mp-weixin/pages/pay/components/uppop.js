"use strict";
var common_vendor = require("../../../common/vendor.js");
if (!Array) {
  const _easycom_uni_popup2 = common_vendor.resolveComponent("uni-popup");
  _easycom_uni_popup2();
}
const _easycom_uni_popup = () => "../../../uni_modules/uni-popup/components/uni-popup/uni-popup.js";
if (!Math) {
  _easycom_uni_popup();
}
const _sfc_main = {
  __name: "uppop",
  props: {
    tipInfo: {
      type: String,
      default: ""
    }
  },
  setup(__props, { expose, emit }) {
    const uppop = common_vendor.ref();
    const dialogOpen = () => {
      uppop.value.open();
    };
    const goList = () => {
      common_vendor.index.navigateTo({
        url: "/pages/pickup/index"
      });
    };
    expose({
      dialogOpen
    });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(goList),
        b: common_vendor.sr(uppop, "eba3c1ea-0", {
          "k": "uppop"
        }),
        c: common_vendor.p({
          type: "center",
          animation: false,
          ["mask-click"]: false
        })
      };
    };
  }
};
var Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "E:/project/\u5C0F\u667A\u5E2E/project-xzb-app-uniapp-java\uFF08\u670D\u52A1\u7AEF\uFF09/pages/pay/components/uppop.vue"]]);
wx.createComponent(Component);
