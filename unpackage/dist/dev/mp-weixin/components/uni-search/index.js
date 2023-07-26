"use strict";
var common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  _easycom_uni_icons2();
}
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
if (!Math) {
  _easycom_uni_icons();
}
const _sfc_main = {
  __name: "index",
  props: {
    isShowCancel: {
      type: Boolean,
      default: false
    }
  },
  emits: "handleSearch",
  setup(__props, { expose, emit }) {
    const store = common_vendor.useStore();
    const users = store.state.user;
    const searchVal = common_vendor.ref("");
    const handleCancel = () => {
      searchVal.value = "";
      store.commit("user/setSearchText", "");
      if (users.taskStatus === -1) {
        common_vendor.index.redirectTo({
          url: "/pages/my/index"
        });
      } else {
        emit("goBack");
      }
    };
    const handleSearch = () => {
      emit("handleSearch", searchVal);
    };
    const handleBlur = () => {
      emit("handleBlur");
    };
    const handleClear = () => {
      searchVal.value = "";
      emit("clearSearchData");
    };
    expose({
      searchVal
    });
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.p({
          type: "search",
          size: "18",
          color: "#999"
        }),
        b: common_vendor.o(handleBlur),
        c: common_vendor.o([($event) => searchVal.value = $event.detail.value, handleSearch]),
        d: searchVal.value,
        e: searchVal.value
      }, searchVal.value ? {
        f: common_vendor.o(handleClear)
      } : {}, {
        g: __props.isShowCancel
      }, __props.isShowCancel ? {
        h: common_vendor.o(handleCancel)
      } : {});
    };
  }
};
var Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "E:/project/\u5C0F\u667A\u5E2E/project-xzb-app-uniapp-java\uFF08\u670D\u52A1\u7AEF\uFF09/components/uni-search/index.vue"]]);
wx.createComponent(Component);
