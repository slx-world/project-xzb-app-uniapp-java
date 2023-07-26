"use strict";
var common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  __name: "address",
  props: {
    detailsData: {
      type: Object,
      default: () => ({})
    }
  },
  setup(__props) {
    const store = common_vendor.useStore();
    const users = store.state.user;
    let taskType = users.taskType;
    return (_ctx, _cache) => {
      return {
        a: common_vendor.t(common_vendor.unref(taskType) === 1 ? "\u53D6" : "\u6D3E"),
        b: common_vendor.t(__props.detailsData.senderName),
        c: common_vendor.t(__props.detailsData.senderPhone),
        d: common_vendor.t(__props.detailsData.senderAddress),
        e: common_vendor.t(common_vendor.unref(taskType) === 1 ? "\u6D3E" : "\u6536"),
        f: common_vendor.t(__props.detailsData.receiverName),
        g: common_vendor.t(__props.detailsData.receiverPhone),
        h: common_vendor.t(__props.detailsData.receiverAddress)
      };
    };
  }
};
var Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "E:/project/\u5C0F\u667A\u5E2E/project-xzb-app-uniapp-java\uFF08\u670D\u52A1\u7AEF\uFF09/pages/details/components/address.vue"]]);
wx.createComponent(Component);
