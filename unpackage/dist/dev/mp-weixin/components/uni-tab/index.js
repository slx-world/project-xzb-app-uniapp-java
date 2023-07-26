"use strict";
var common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "index",
  props: {
    tabBars: {
      type: Array,
      default: () => []
    }
  },
  emits: "",
  setup(__props, { expose, emit }) {
    const store = common_vendor.useStore();
    const users = store.state.user;
    const scrollinto = common_vendor.ref("tab0");
    let tabIndex = common_vendor.ref(users.tabIndex ? users.tabIndex : 0);
    const changeTab = (index) => {
      if (tabIndex.value == index) {
        return;
      }
      tabIndex.value = index;
      emit("getTabIndex", index);
      scrollinto.value = "tab" + index;
    };
    expose({
      changeTab
    });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(__props.tabBars, (item, index, i0) => {
          return {
            a: common_vendor.t(item.label),
            b: common_vendor.n(common_vendor.unref(tabIndex) == index ? "scroll-row-item-act" : ""),
            c: index,
            d: "tab" + index,
            e: common_vendor.o(($event) => changeTab(index), index)
          };
        }),
        b: scrollinto.value
      };
    };
  }
};
var Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "E:/project/\u5C0F\u667A\u5E2E/project-xzb-app-uniapp-java\uFF08\u670D\u52A1\u7AEF\uFF09/components/uni-tab/index.vue"]]);
wx.createComponent(Component);
