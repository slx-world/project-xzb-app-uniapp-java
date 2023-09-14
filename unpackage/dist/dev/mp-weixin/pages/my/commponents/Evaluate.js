"use strict";
const common_vendor = require("../../../common/vendor.js");
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
      return {
        a: `${200 * 0.333}rpx`,
        b: `${200 * 0.333}rpx`
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-fadf945b"], ["__file", "E:/project/小智帮/project-xzb-app-uniapp-java（服务端）/pages/my/commponents/Evaluate.vue"]]);
wx.createComponent(Component);
