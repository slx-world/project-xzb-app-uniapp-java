"use strict";
var common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  __name: "Canceled",
  props: {
    item: {
      type: Object,
      default: () => ({})
    }
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: __props.item.taskType === 1 && __props.item.status === 3
      }, __props.item.taskType === 1 && __props.item.status === 3 ? {
        b: common_vendor.t(__props.item.name),
        c: common_vendor.t(__props.item.address),
        d: common_vendor.t(__props.item.cancelReason),
        e: common_vendor.t(__props.item.cancelReasonDescription)
      } : {});
    };
  }
};
var Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "E:/project/\u5C0F\u667A\u5E2E/project-xzb-app-uniapp-java\uFF08\u670D\u52A1\u7AEF\uFF09/pages/search/components/Canceled.vue"]]);
wx.createComponent(Component);
