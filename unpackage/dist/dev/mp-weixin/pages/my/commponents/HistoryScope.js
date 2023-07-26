"use strict";
var common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  __name: "HistoryScope",
  setup(__props) {
    const store = common_vendor.useStore();
    const handleHistory = () => {
      store.commit("user/setTabIndex", 0);
      store.commit("user/setTaskStatus", -1);
      common_vendor.index.navigateTo({
        url: "/pages/history/index"
      });
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(handleHistory)
      };
    };
  }
};
var Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-f05c4784"], ["__file", "E:/project/\u5C0F\u667A\u5E2E/project-xzb-app-uniapp-java\uFF08\u670D\u52A1\u7AEF\uFF09/pages/my/commponents/HistoryScope.vue"]]);
wx.createComponent(Component);
