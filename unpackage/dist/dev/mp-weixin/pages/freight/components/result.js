"use strict";
var common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  __name: "result",
  props: {
    baseData: {
      type: Object,
      default: () => ({})
    }
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return {
        a: common_vendor.t(__props.baseData.weight),
        b: common_vendor.t(__props.baseData.volumeValue),
        c: common_vendor.t(__props.baseData.firstWeight),
        d: common_vendor.t(__props.baseData.continuousWeight),
        e: common_vendor.t(__props.baseData.freight)
      };
    };
  }
};
var Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "E:/project/\u5C0F\u667A\u5E2E/project-xzb-app-uniapp-java\uFF08\u670D\u52A1\u7AEF\uFF09/pages/freight/components/result.vue"]]);
wx.createComponent(Component);
