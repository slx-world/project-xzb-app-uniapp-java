"use strict";
var common_vendor = require("../../common/vendor.js");
var utils_index = require("../../utils/index.js");
require("../api/index.js");
require("../../utils/request.js");
if (!Math) {
  UniNav();
}
const UniNav = () => "../../components/uni-nav/index.js";
const _sfc_main = {
  __name: "detail",
  setup(__props) {
    const title = common_vendor.ref("\u8BE6\u60C5");
    const pages = getCurrentPages();
    const currentPage = pages[pages.length - 1];
    let objData = common_vendor.ref(JSON.parse(currentPage.$page.options.obj));
    const goBack = () => {
      common_vendor.index.redirectTo({
        url: "/pages/news/index"
      });
    };
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.o(goBack),
        b: common_vendor.p({
          title: title.value
        }),
        c: common_vendor.t(common_vendor.unref(objData).title),
        d: common_vendor.t(common_vendor.unref(utils_index.taskTimeFormat)(common_vendor.unref(objData).created)),
        e: common_vendor.unref(objData).firstContent
      }, common_vendor.unref(objData).firstContent ? {
        f: common_vendor.t(common_vendor.unref(objData).firstContent)
      } : {}, {
        g: common_vendor.t(common_vendor.unref(objData).content)
      });
    };
  }
};
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-6803dca4"], ["__file", "E:/project/\u5C0F\u667A\u5E2E/project-xzb-app-uniapp-java\uFF08\u670D\u52A1\u7AEF\uFF09/pages/news/detail.vue"]]);
wx.createPage(MiniProgramPage);
