"use strict";
var common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "index",
  props: {
    emptyInfo: {
      type: String,
      default: ""
    },
    emptyData: {
      type: String,
      default: ""
    },
    emptyImage: {
      type: String,
      default: ""
    }
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: __props.emptyInfo !== ""
      }, __props.emptyInfo !== "" ? {
        b: common_vendor.t(__props.emptyInfo)
      } : {
        c: common_vendor.n(__props.emptyImage),
        d: common_vendor.t(__props.emptyData)
      });
    };
  }
};
var Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-a750b56c"], ["__file", "E:/project/\u5C0F\u667A\u5E2E/project-xzb-app-uniapp-java\uFF08\u670D\u52A1\u7AEF\uFF09/components/uni-empty-page/index.vue"]]);
wx.createComponent(Component);
