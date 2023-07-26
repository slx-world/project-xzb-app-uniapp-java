"use strict";
var common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_uni_rate2 = common_vendor.resolveComponent("uni-rate");
  _easycom_uni_rate2();
}
const _easycom_uni_rate = () => "../../uni_modules/uni-rate/components/uni-rate/uni-rate.js";
if (!Math) {
  (UniNav + _easycom_uni_rate)();
}
const UniNav = () => "../../components/uni-nav/index.js";
const _sfc_main = {
  __name: "qrCode",
  setup(__props) {
    const title = common_vendor.ref("\u4E13\u5C5E\u4E8C\u7EF4\u7801");
    common_vendor.onMounted(() => {
    });
    const goBack = () => {
      common_vendor.index.redirectTo({
        url: "/pages/my/index"
      });
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(goBack),
        b: common_vendor.p({
          title: title.value
        }),
        c: common_vendor.p({
          readonly: true,
          ["allow-half"]: true,
          value: 4.5,
          ["active-color"]: "#EF4F3F",
          color: "#F4F4F4"
        })
      };
    };
  }
};
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-699c7670"], ["__file", "E:/project/\u5C0F\u667A\u5E2E/project-xzb-app-uniapp-java\uFF08\u670D\u52A1\u7AEF\uFF09/pages/my/qrCode.vue"]]);
wx.createPage(MiniProgramPage);
