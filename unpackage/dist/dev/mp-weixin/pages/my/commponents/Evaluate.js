"use strict";
var common_vendor = require("../../../common/vendor.js");
var utils_index = require("../../../utils/index.js");
require("../../api/index.js");
require("../../../utils/request.js");
if (!Array) {
  const _easycom_uni_rate2 = common_vendor.resolveComponent("uni-rate");
  _easycom_uni_rate2();
}
const _easycom_uni_rate = () => "../../../uni_modules/uni-rate/components/uni-rate/uni-rate.js";
if (!Math) {
  _easycom_uni_rate();
}
const _sfc_main = {
  __name: "Evaluate",
  props: {
    baseData: {
      type: Object,
      default: () => ({})
    }
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.p({
          readonly: true,
          ["allow-half"]: true,
          value: 4.5,
          ["active-color"]: "#EF4F3F",
          color: "#F4F4F4"
        }),
        b: common_vendor.t(4.5),
        c: (!__props.baseData.startTime || __props.baseData.startTime === "") && (!__props.baseData.endTime || __props.baseData.endTime === "")
      }, (!__props.baseData.startTime || __props.baseData.startTime === "") && (!__props.baseData.endTime || __props.baseData.endTime === "") ? {} : {
        d: common_vendor.t(common_vendor.unref(utils_index.overTimeFormat)(__props.baseData.startTime)),
        e: common_vendor.t(common_vendor.unref(utils_index.overTimeFormat)(__props.baseData.endTime))
      });
    };
  }
};
var Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-e5f99d92"], ["__file", "E:/project/\u5C0F\u667A\u5E2E/project-xzb-app-uniapp-java\uFF08\u670D\u52A1\u7AEF\uFF09/pages/my/commponents/Evaluate.vue"]]);
wx.createComponent(Component);
