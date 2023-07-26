"use strict";
var common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "index",
  setup(__props) {
    const baseSetting = common_vendor.reactive([
      {
        label: "\u670D\u52A1\u6280\u80FD",
        url: "../../static/new/btn_top_fwjn@2x.png",
        path: "/pages/serviceSkill/index"
      },
      {
        label: "\u63A5\u5355\u8BBE\u7F6E",
        url: "../../static/new/btn_top_jdsz@2x.png",
        path: "/pages/getOrder/index"
      },
      {
        label: "\u670D\u52A1\u8303\u56F4",
        url: "../../static/new/btn_top_fwfw@2x.png",
        path: "/pages/serviceRange/index"
      }
    ]);
    const handleLink = (val) => {
      common_vendor.index.navigateTo({
        url: val
      });
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(baseSetting, (item, index, i0) => {
          return {
            a: item.url,
            b: common_vendor.t(item.label),
            c: index,
            d: common_vendor.o(($event) => handleLink(item.path), index)
          };
        })
      };
    };
  }
};
var Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-02b269f0"], ["__file", "E:/project/\u5C0F\u667A\u5E2E/project-xzb-app-uniapp-java\uFF08\u670D\u52A1\u7AEF\uFF09/components/uni-home-nav/index.vue"]]);
wx.createComponent(Component);
