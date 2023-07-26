"use strict";
var common_vendor = require("../../common/vendor.js");
if (!Math) {
  UniFooter();
}
const UniFooter = () => "../../components/uni-footer/index.js";
const _sfc_main = {
  __name: "index",
  emits: "",
  setup(__props, { emit }) {
    const store = common_vendor.useStore();
    const users = store.state.user;
    common_vendor.ref();
    const list = common_vendor.ref();
    common_vendor.ref();
    common_vendor.ref();
    let tabIndex = common_vendor.ref(0);
    common_vendor.ref(true);
    common_vendor.ref(false);
    common_vendor.reactive(/* @__PURE__ */ new Map());
    common_vendor.onMounted(() => {
      if (users.tabIndex) {
        tabIndex.value = users.tabIndex;
      }
      if (users.tabIndex === 0) {
        list.value.dealPList();
      } else {
        list.value.alreadList();
      }
    });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          pagePath: "pages/delivery/index"
        })
      };
    };
  }
};
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-7c6df030"], ["__file", "E:/project/\u5C0F\u667A\u5E2E/project-xzb-app-uniapp-java\uFF08\u670D\u52A1\u7AEF\uFF09/pages/delivery/index.vue"]]);
wx.createPage(MiniProgramPage);
