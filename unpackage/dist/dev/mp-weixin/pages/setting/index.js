"use strict";
var common_vendor = require("../../common/vendor.js");
var pages_api_setting = require("../api/setting.js");
require("../../utils/request.js");
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
  setup(__props) {
    const canPickUp = common_vendor.ref(false);
    const settingsStatus = common_vendor.ref(false);
    const serveRangeStatus = common_vendor.ref(false);
    const serveSkillStatus = common_vendor.ref(false);
    const auth = common_vendor.ref(false);
    common_vendor.onShow(() => {
      getSetting();
    });
    common_vendor.onMounted(() => {
    });
    const getSetting = () => {
      pages_api_setting.getUserSetting().then((res) => {
        if (res.code == 200) {
          canPickUp.value = res.data.canPickUp;
          settingsStatus.value = res.data.settingsStatus;
          serveRangeStatus.value = res.data.serveScopeSetted;
          serveSkillStatus.value = res.data.serveSkillSetted;
          auth.value = res.data.authed;
        }
      }).catch((err) => {
        common_vendor.index.showToast({
          title: err.msg || "\u63A5\u53E3\u8C03\u7528\u5931\u8D25",
          duration: 1500,
          icon: "none"
        });
      });
    };
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
    const toServiceSikll = () => {
      common_vendor.index.navigateTo({
        url: "/pages/serviceSkill/index"
      });
    };
    const toServiceRange = () => {
      common_vendor.index.navigateTo({
        url: "/pages/serviceRange/index"
      });
    };
    const toIndex = () => {
      if (!settingsStatus.value) {
        return;
      } else {
        common_vendor.index.redirectTo({
          url: "/pages/index/index"
        });
      }
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          statusBar: "true"
        }),
        b: common_vendor.t(auth.value ? "\u5DF2\u5B8C\u6210" : "\u53BB\u8BA4\u8BC1"),
        c: common_vendor.n(auth.value ? "btn-successGreen" : "btn-red"),
        d: common_vendor.t(serveSkillStatus.value ? "\u5DF2\u5B8C\u6210" : "\u53BB\u8BBE\u7F6E"),
        e: common_vendor.n(serveSkillStatus.value ? "btn-successGreen" : "btn-red"),
        f: common_vendor.o(toServiceSikll),
        g: common_vendor.t(serveRangeStatus.value ? "\u5DF2\u5B8C\u6210" : "\u53BB\u8BBE\u7F6E"),
        h: common_vendor.n(serveRangeStatus.value ? "btn-successGreen" : "btn-red"),
        i: common_vendor.o(toServiceRange),
        j: common_vendor.o(handlePickUpStatus),
        k: canPickUp.value,
        l: common_vendor.o(toIndex),
        m: common_vendor.n(settingsStatus.value ? "" : "notSetting")
      };
    };
  }
};
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "E:/project/\u5C0F\u667A\u5E2E/project-xzb-app-uniapp-java\uFF08\u670D\u52A1\u7AEF\uFF09/pages/setting/index.vue"]]);
wx.createPage(MiniProgramPage);