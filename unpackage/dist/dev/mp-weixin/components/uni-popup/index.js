"use strict";
var common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_uni_popup_dialog2 = common_vendor.resolveComponent("uni-popup-dialog");
  const _easycom_uni_popup2 = common_vendor.resolveComponent("uni-popup");
  (_easycom_uni_popup_dialog2 + _easycom_uni_popup2)();
}
const _easycom_uni_popup_dialog = () => "../../uni_modules/uni-popup/components/uni-popup-dialog/uni-popup-dialog.js";
const _easycom_uni_popup = () => "../../uni_modules/uni-popup/components/uni-popup/uni-popup.js";
if (!Math) {
  (_easycom_uni_popup_dialog + _easycom_uni_popup)();
}
const _sfc_main = {
  __name: "index",
  props: {
    tipInfo: {
      type: String,
      default: ""
    }
  },
  setup(__props, { expose, emit }) {
    const message = common_vendor.ref();
    const dialogConfirm = () => {
      emit("handleClick", true);
    };
    const dialogOpen = () => {
      message.value.open();
    };
    const dialogClose = () => {
      message.value.close();
    };
    expose({
      dialogOpen
    });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(dialogConfirm),
        b: common_vendor.o(dialogClose),
        c: common_vendor.p({
          type: _ctx.msgType,
          cancelText: "\u53D6\u6D88",
          confirmText: "\u786E\u8BA4",
          title: " ",
          content: __props.tipInfo
        }),
        d: common_vendor.sr(message, "d8cf7856-0", {
          "k": "message"
        }),
        e: common_vendor.p({
          type: "dialog"
        })
      };
    };
  }
};
var Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "E:/project/\u5C0F\u667A\u5E2E/project-xzb-app-uniapp-java\uFF08\u670D\u52A1\u7AEF\uFF09/components/uni-popup/index.vue"]]);
wx.createComponent(Component);
