"use strict";
var common_vendor = require("../../common/vendor.js");
var pages_api_setting = require("../api/setting.js");
require("../../utils/request.js");
if (!Math) {
  UniNav();
}
const UniNav = () => "../../components/uni-nav/index.js";
const _sfc_main = {
  __name: "index",
  setup(__props) {
    const canPickUp = common_vendor.ref(false);
    common_vendor.onShow(() => {
      getSetting();
    });
    const handlePickUpStatus = () => {
      pages_api_setting.setPickUpStatus({
        canPickUp: canPickUp.value ? 0 : 1
      }).then((res) => {
        if (res.code == 200) {
          getSetting();
        }
      }).catch((err) => {
        common_vendor.index.showToast({
          title: err.msg || "\u63A5\u53E3\u8C03\u7528\u5931\u8D25",
          duration: 1500,
          icon: "none"
        });
      });
    };
    const getSetting = () => {
      pages_api_setting.getUserSetting().then((res) => {
        if (res.code == 200) {
          canPickUp.value = res.data.canPickUp;
        }
      }).catch((err) => {
        common_vendor.index.showToast({
          title: err.msg || "\u63A5\u53E3\u8C03\u7528\u5931\u8D25",
          duration: 1500,
          icon: "none"
        });
      });
    };
    const goBack = () => {
      common_vendor.index.navigateBack();
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(goBack),
        b: common_vendor.p({
          title: "\u63A5\u5355\u8BBE\u7F6E"
        }),
        c: common_vendor.o(handlePickUpStatus),
        d: canPickUp.value
      };
    };
  }
};
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-6bad7658"], ["__file", "E:/project/\u5C0F\u667A\u5E2E/project-xzb-app-uniapp-java\uFF08\u670D\u52A1\u7AEF\uFF09/pages/getOrder/index.vue"]]);
wx.createPage(MiniProgramPage);
