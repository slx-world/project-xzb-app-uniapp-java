"use strict";
var common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  _easycom_uni_icons2();
}
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
if (!Math) {
  (UniNav + _easycom_uni_icons + TateSelete + TabList)();
}
const UniNav = () => "../../components/uni-nav/index.js";
const TateSelete = () => "./commponents/date.js";
const TabList = () => "./commponents/index.js";
const _sfc_main = {
  __name: "index",
  setup(__props) {
    const store = common_vendor.useStore();
    const users = store.state.user;
    let list = common_vendor.ref();
    common_vendor.reactive([]);
    const title = common_vendor.ref("\u5168\u90E8\u53D6\u6D3E");
    let dateTime = common_vendor.ref("");
    const searchVal = common_vendor.ref("");
    const getDateTime = (val) => {
      dateTime.value = val;
    };
    const handleSearch = (e) => {
      common_vendor.index.redirectTo({
        url: "/pages/search/index"
      });
    };
    const goBack = () => {
      if (users.taskStatus === -1) {
        common_vendor.index.redirectTo({
          url: "/pages/my/index"
        });
      } else {
        common_vendor.index.redirectTo({
          url: "/pages/index/index"
        });
      }
      store.commit("user/setTabIndex", 0);
      store.commit("user/setTaskStatus", 0);
      store.commit("user/setTimeData", null);
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(goBack),
        b: common_vendor.p({
          title: title.value
        }),
        c: common_vendor.p({
          type: "search",
          size: "18",
          color: "#999"
        }),
        d: common_vendor.o(handleSearch),
        e: common_vendor.o(handleSearch),
        f: searchVal.value,
        g: common_vendor.o(($event) => searchVal.value = $event.detail.value),
        h: common_vendor.o(getDateTime),
        i: common_vendor.sr(list, "6c15e724-3", {
          "k": "list"
        }),
        j: common_vendor.p({
          dateTime: common_vendor.unref(dateTime)
        })
      };
    };
  }
};
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-6c15e724"], ["__file", "E:/project/\u5C0F\u667A\u5E2E/project-xzb-app-uniapp-java\uFF08\u670D\u52A1\u7AEF\uFF09/pages/history/index.vue"]]);
wx.createPage(MiniProgramPage);
