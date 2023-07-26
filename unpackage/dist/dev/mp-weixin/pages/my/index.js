"use strict";
var common_vendor = require("../../common/vendor.js");
if (!Math) {
  (BaseInfo + Evaluate + HistoryScope + UniFooter)();
}
const UniFooter = () => "../../components/uni-footer/index.js";
const BaseInfo = () => "./commponents/BaseInfo.js";
const Evaluate = () => "./commponents/Evaluate.js";
const HistoryScope = () => "./commponents/HistoryScope.js";
const _sfc_main = {
  __name: "index",
  setup(__props) {
    const store = common_vendor.useStore();
    let baseData = common_vendor.index.getStorageSync("userInfo");
    const handleOut = () => {
      common_vendor.index.removeStorageSync("token");
      store.commit("setFootStatus", 0);
      common_vendor.index.redirectTo({
        url: "/pages/login/user"
      });
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          baseData: common_vendor.unref(baseData)
        }),
        b: common_vendor.p({
          baseData: common_vendor.unref(baseData)
        }),
        c: common_vendor.o(handleOut),
        d: common_vendor.p({
          pagePath: "pages/my/index"
        })
      };
    };
  }
};
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-4dcceeb0"], ["__file", "E:/project/\u5C0F\u667A\u5E2E/project-xzb-app-uniapp-java\uFF08\u670D\u52A1\u7AEF\uFF09/pages/my/index.vue"]]);
wx.createPage(MiniProgramPage);
