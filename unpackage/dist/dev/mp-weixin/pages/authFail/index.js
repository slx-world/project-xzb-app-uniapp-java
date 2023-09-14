"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Math) {
  UniNav();
}
const UniNav = () => "../../components/uni-nav/index.js";
const _sfc_main = {
  __name: "index",
  setup(__props) {
    const title = common_vendor.ref("实名认证");
    const goBack = () => {
      common_vendor.index.navigateBack();
    };
    const toAuth = () => {
      common_vendor.index.navigateTo({
        url: "/pages/auth/index"
      });
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(goBack),
        b: common_vendor.p({
          title: title.value
        }),
        c: common_vendor.o(toAuth)
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-14a9d75c"], ["__file", "E:/project/小智帮/project-xzb-app-uniapp-java（服务端）/pages/authFail/index.vue"]]);
wx.createPage(MiniProgramPage);
