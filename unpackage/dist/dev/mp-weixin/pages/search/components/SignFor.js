"use strict";
var common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  __name: "SignFor",
  props: {
    item: {
      type: Object,
      default: () => ({})
    }
  },
  emits: "",
  setup(__props, { emit }) {
    const handleDetails = (e, item) => {
      emit("handleDetails", e, item);
    };
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: __props.item.taskType === 2 && __props.item.status === 5
      }, __props.item.taskType === 2 && __props.item.status === 5 ? common_vendor.e({
        b: common_vendor.t(__props.item.transportOrderId),
        c: common_vendor.t(__props.item.name),
        d: common_vendor.t(__props.item.address),
        e: common_vendor.t(__props.item.taskTime),
        f: __props.item.amount > 0 && __props.item.status === 2
      }, __props.item.amount > 0 && __props.item.status === 2 ? {
        g: common_vendor.t(__props.item.amount)
      } : {}, {
        h: __props.item.status === 2 && __props.item.paymentStatus === 1 && __props.item.paymentMethod === 2
      }, __props.item.status === 2 && __props.item.paymentStatus === 1 && __props.item.paymentMethod === 2 ? {
        i: common_vendor.o(($event) => handleDetails($event, __props.item))
      } : {}) : {});
    };
  }
};
var Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "E:/project/\u5C0F\u667A\u5E2E/project-xzb-app-uniapp-java\uFF08\u670D\u52A1\u7AEF\uFF09/pages/search/components/SignFor.vue"]]);
wx.createComponent(Component);
