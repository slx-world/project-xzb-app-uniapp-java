"use strict";
var common_vendor = require("../../common/vendor.js");
if (!Math) {
  (UniNav + Announcement + Notification)();
}
const UniNav = () => "../../components/uni-nav/index.js";
const Announcement = () => "./components/announcement.js";
const Notification = () => "./components/notification.js";
const _sfc_main = {
  __name: "index",
  setup(__props) {
    const store = common_vendor.useStore();
    const users = store.state.user;
    const announcement = common_vendor.ref();
    const notificat = common_vendor.ref();
    const title = common_vendor.ref("\u6D88\u606F");
    const tabBars = common_vendor.reactive(["\u516C\u544A", "\u7CFB\u7EDF\u901A\u77E5"]);
    let scrollinto = common_vendor.ref("tab0");
    let tabIndex = users.tabIndex === 1 ? common_vendor.ref(1) : common_vendor.ref(0);
    const changeTab = (index) => {
      if (tabIndex.value == index) {
        return;
      }
      if (index === 0)
        ;
      else {
        notificat.value.getOjb();
      }
      tabIndex.value = index;
      store.commit("user/setTabIndex", index);
      scrollinto.value = "tab" + index;
    };
    const getTabIndex = (val) => {
      tabIndex.value = val;
    };
    const goBack = () => {
      common_vendor.index.redirectTo({
        url: "/pages/index/index"
      });
      store.commit("user/setNewType", null);
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(goBack),
        b: common_vendor.p({
          title: title.value
        }),
        c: common_vendor.f(tabBars, (item, index, i0) => {
          return {
            a: common_vendor.t(item),
            b: common_vendor.n(common_vendor.unref(tabIndex) == index ? "scroll-row-item-act" : ""),
            c: index,
            d: "tab" + index,
            e: common_vendor.o(($event) => changeTab(index), index)
          };
        }),
        d: common_vendor.unref(scrollinto),
        e: common_vendor.sr(announcement, "452e6662-1", {
          "k": "announcement"
        }),
        f: common_vendor.p({
          tabIndex: common_vendor.unref(tabIndex)
        }),
        g: common_vendor.sr(notificat, "452e6662-2", {
          "k": "notificat"
        }),
        h: common_vendor.o(getTabIndex),
        i: common_vendor.p({
          tabIndex: common_vendor.unref(tabIndex)
        })
      };
    };
  }
};
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-452e6662"], ["__file", "E:/project/\u5C0F\u667A\u5E2E/project-xzb-app-uniapp-java\uFF08\u670D\u52A1\u7AEF\uFF09/pages/news/index.vue"]]);
wx.createPage(MiniProgramPage);
