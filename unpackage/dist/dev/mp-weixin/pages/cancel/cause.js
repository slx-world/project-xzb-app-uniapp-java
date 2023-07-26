"use strict";
var common_vendor = require("../../common/vendor.js");
var utils_commonData = require("../../utils/commonData.js");
if (!Math) {
  UniNav();
}
const UniNav = () => "../../components/uni-nav/index.js";
const _sfc_main = {
  __name: "cause",
  setup(__props) {
    const store = common_vendor.useStore();
    const title = common_vendor.ref("\u8BA2\u5355\u53D6\u6D88\u539F\u56E0");
    const baseData = common_vendor.reactive(utils_commonData.cancelData);
    const handleClick = (item) => {
      let isRedistribute = false;
      if (item.value === 8) {
        isRedistribute = true;
      }
      store.commit("user/setReasonVal", item);
      store.commit("user/setRedistribute", isRedistribute);
      common_vendor.index.redirectTo({
        url: "/pages/cancel/index"
      });
    };
    const goBack = () => {
      common_vendor.index.redirectTo({
        url: "/pages/cancel/index"
      });
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(goBack),
        b: common_vendor.p({
          title: title.value
        }),
        c: common_vendor.f(baseData, (item, index, i0) => {
          return {
            a: common_vendor.t(item.label),
            b: index,
            c: common_vendor.o(($event) => handleClick(item), index)
          };
        })
      };
    };
  }
};
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-17014f8d"], ["__file", "E:/project/\u5C0F\u667A\u5E2E/project-xzb-app-uniapp-java\uFF08\u670D\u52A1\u7AEF\uFF09/pages/cancel/cause.vue"]]);
wx.createPage(MiniProgramPage);
