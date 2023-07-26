"use strict";
var common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  __name: "BaseInfo",
  props: {
    baseData: {
      type: Object,
      default: () => ({})
    }
  },
  setup(__props) {
    const handleQr = () => {
      common_vendor.index.showToast({
        title: "\u7A0B\u5E8F\u5458\u54E5\u54E5\u6B63\u5728\u5B9E\u73B0\u4E2D",
        duration: 1e3,
        icon: "none"
      });
    };
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: __props.baseData.avatar === ""
      }, __props.baseData.avatar === "" ? {} : {
        b: __props.baseData.avatar
      }, {
        c: common_vendor.t(__props.baseData.name),
        d: common_vendor.t(__props.baseData.account),
        e: common_vendor.t(__props.baseData.agencyName ? __props.baseData.agencyName : "\u6682\u65E0"),
        f: common_vendor.o(handleQr)
      });
    };
  }
};
var Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-1c1ce0bd"], ["__file", "E:/project/\u5C0F\u667A\u5E2E/project-xzb-app-uniapp-java\uFF08\u670D\u52A1\u7AEF\uFF09/pages/my/commponents/BaseInfo.vue"]]);
wx.createComponent(Component);
