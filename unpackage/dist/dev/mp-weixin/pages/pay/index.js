"use strict";
var common_vendor = require("../../common/vendor.js");
if (!Math) {
  UniNav();
}
const UniNav = () => "../../components/uni-nav/index.js";
const _sfc_main = {
  __name: "index",
  setup(__props) {
    const store = common_vendor.useStore();
    const users = store.state.user;
    const pages = getCurrentPages();
    const currentPage = pages[pages.length - 1].$page.options;
    const type = currentPage.type;
    const handleBack = () => {
      if (users.isDelivery) {
        if (users.taskStatus === 6 && users.detailType === 2) {
          store.commit("user/setTabIndex", 1);
          common_vendor.index.redirectTo({
            url: "/pages/history/index"
          });
        } else {
          common_vendor.index.redirectTo({
            url: "/pages/delivery/index"
          });
        }
      } else {
        if (users.taskStatus === 6) {
          common_vendor.index.redirectTo({
            url: "/pages/history/index"
          });
        } else {
          common_vendor.index.redirectTo({
            url: "/pages/pickup/index"
          });
        }
      }
      store.commit("user/setIsPickUp", false);
      store.commit("user/setIsSign", false);
    };
    const goBack = () => {
      if (users.isDelivery) {
        if (users.paymentMethod === 2) {
          store.commit("user/setIsCollect", true);
        } else {
          store.commit("user/setIsSign", true);
        }
        common_vendor.index.redirectTo({
          url: "/pages/details/waybill"
        });
      } else {
        if (users.paymentMethod === 2) {
          store.commit("user/setIsCollect", true);
        }
        common_vendor.index.redirectTo({
          url: "/pages/details/index"
        });
      }
    };
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.o(goBack),
        b: common_vendor.p({
          title: common_vendor.unref(users).isDelivery ? "\u7B7E\u6536\u6210\u529F" : "\u53D6\u4EF6\u6210\u529F"
        }),
        c: common_vendor.t(common_vendor.unref(users).isDelivery ? "\u7B7E\u6536\u6210\u529F" : "\u53D6\u4EF6\u6210\u529F"),
        d: common_vendor.unref(users).isDelivery
      }, common_vendor.unref(users).isDelivery ? common_vendor.e({
        e: common_vendor.unref(type) === "2"
      }, common_vendor.unref(type) === "2" ? {} : {
        f: common_vendor.o(handleBack)
      }) : common_vendor.e({
        g: common_vendor.unref(type) === "1"
      }, common_vendor.unref(type) === "1" ? {} : {
        h: common_vendor.o(handleBack)
      }));
    };
  }
};
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-32f2f1fc"], ["__file", "E:/project/\u5C0F\u667A\u5E2E/project-xzb-app-uniapp-java\uFF08\u670D\u52A1\u7AEF\uFF09/pages/pay/index.vue"]]);
wx.createPage(MiniProgramPage);
