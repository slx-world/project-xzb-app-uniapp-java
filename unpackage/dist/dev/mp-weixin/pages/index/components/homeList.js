"use strict";
var common_vendor = require("../../../common/vendor.js");
if (!Array) {
  const _easycom_uni_popup_dialog2 = common_vendor.resolveComponent("uni-popup-dialog");
  const _easycom_uni_popup2 = common_vendor.resolveComponent("uni-popup");
  (_easycom_uni_popup_dialog2 + _easycom_uni_popup2)();
}
const _easycom_uni_popup_dialog = () => "../../../uni_modules/uni-popup/components/uni-popup-dialog/uni-popup-dialog.js";
const _easycom_uni_popup = () => "../../../uni_modules/uni-popup/components/uni-popup/uni-popup.js";
if (!Math) {
  (_easycom_uni_popup_dialog + _easycom_uni_popup)();
}
const _sfc_main = {
  __name: "homeList",
  props: {
    data: {
      type: Array,
      default: () => []
    }
  },
  setup(__props) {
    const props = __props;
    common_vendor.onMounted(() => {
    });
    let data = common_vendor.reactive([]);
    const alertDialog = common_vendor.ref(null);
    const handleRob = () => {
      alertDialog.value.open();
    };
    common_vendor.watch(() => props.data, () => {
      data = props.data;
    });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(common_vendor.unref(data), (item, index, i0) => {
          return {
            a: item.serveItemImg,
            b: common_vendor.t(item.serveTypeName),
            c: common_vendor.t(item.serveItemName),
            d: common_vendor.t(item.serveStartTime),
            e: common_vendor.t(item.serveAddress),
            f: common_vendor.t(item.serveFee),
            g: index
          };
        }),
        b: common_vendor.o(handleRob),
        c: common_vendor.o(_ctx.dialogConfirm),
        d: common_vendor.o(_ctx.dialogClose),
        e: common_vendor.p({
          type: _ctx.msgType,
          cancelText: "\u5173\u95ED",
          confirmText: "\u540C\u610F",
          title: "\u901A\u77E5",
          content: "\u6B22\u8FCE\u4F7F\u7528 uni-popup!"
        }),
        f: common_vendor.sr(alertDialog, "a96c6d3c-0", {
          "k": "alertDialog"
        }),
        g: common_vendor.p({
          type: "dialog"
        })
      };
    };
  }
};
var Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "E:/project/\u5C0F\u667A\u5E2E/project-xzb-app-uniapp-java\uFF08\u670D\u52A1\u7AEF\uFF09/pages/index/components/homeList.vue"]]);
wx.createComponent(Component);
