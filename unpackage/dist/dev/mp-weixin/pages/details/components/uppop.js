"use strict";
var common_vendor = require("../../../common/vendor.js");
var utils_index = require("../../../utils/index.js");
var utils_commonData = require("../../../utils/commonData.js");
require("../../api/index.js");
require("../../../utils/request.js");
if (!Array) {
  const _easycom_uni_popup2 = common_vendor.resolveComponent("uni-popup");
  _easycom_uni_popup2();
}
const _easycom_uni_popup = () => "../../../uni_modules/uni-popup/components/uni-popup/uni-popup.js";
if (!Math) {
  _easycom_uni_popup();
}
const _sfc_main = {
  __name: "uppop",
  props: {
    detailsData: {
      type: Object,
      default: () => ({})
    },
    type: {
      type: Number,
      default: 0
    }
  },
  setup(__props, { expose, emit }) {
    const props = __props;
    common_vendor.watch(props, (newValue, olcValue) => {
      if (newValue !== void 0) {
        remark.value = newValue.detailsData.remark;
        if (newValue.type === 2) {
          if (newValue.detailsData.paymentMethod === 1) {
            current.value = 0;
          } else {
            current.value = 1;
          }
        }
      }
    });
    const popup = common_vendor.ref();
    let current = common_vendor.ref(0);
    let isActive = common_vendor.ref(0);
    let otherData = common_vendor.ref("");
    let goodNumVal = common_vendor.ref(0);
    let remarkNumVal = common_vendor.ref(0);
    let remark = common_vendor.ref("");
    let goodMaxLength = common_vendor.ref(10);
    let remarkMaxLength = common_vendor.ref(30);
    let isShowGoodInfo = common_vendor.ref(false);
    const handleSubmit = () => {
      if (props.type === 1) {
        let val = null;
        if (isShowGoodInfo.value) {
          if (otherData.value === "") {
            return common_vendor.index.showToast({
              title: "\u8BF7\u8F93\u5165\u7269\u54C1\u4FE1\u606F",
              duration: 1e3,
              icon: "none"
            });
          }
          val = otherData.value;
        } else {
          val = utils_commonData.GoodsData[isActive.value].label;
        }
        emit("getGoodType", val);
      } else if (props.type === 2) {
        emit("getPayMethod", utils_commonData.PayMethodData[current.value].label);
      } else if (props.type === 3) {
        emit("getRemark", remark.value);
      } else {
        emit("getSignType", utils_commonData.SignData[current.value].value);
      }
      dialogClose();
    };
    const checkbox = (index) => {
      current.value = index;
    };
    const handleActive = (index, item) => {
      if (item.label === "\u5176\u4ED6") {
        isShowGoodInfo.value = true;
      } else {
        isShowGoodInfo.value = false;
      }
      isActive.value = index;
    };
    const dialogOpen = () => {
      popup.value.open();
    };
    const dialogClose = () => {
      popup.value.close();
    };
    const monitorInput = () => {
      common_vendor.nextTick(() => {
        let leng = utils_index.validateTextLength(otherData.value);
        if (leng >= 10) {
          goodMaxLength.value = leng;
        } else {
          goodMaxLength.value = 20;
        }
        goodNumVal.value = Math.floor(leng);
      });
    };
    const textInput = () => {
      common_vendor.nextTick(() => {
        let leng = utils_index.validateTextLength(remark.value);
        if (leng >= 30) {
          remarkMaxLength.value = leng;
        } else {
          remarkMaxLength.value = 60;
        }
        remarkNumVal.value = Math.floor(leng);
      });
    };
    expose({
      dialogOpen,
      current
    });
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.t(__props.type === 1 ? "\u7269\u54C1\u540D\u79F0" : __props.type === 2 ? "\u4ED8\u6B3E\u65B9\u5F0F" : __props.type === 3 ? "\u5907\u6CE8" : "\u7B7E\u6536\u4EBA"),
        b: common_vendor.o(dialogClose),
        c: __props.type === 1
      }, __props.type === 1 ? common_vendor.e({
        d: common_vendor.f(common_vendor.unref(utils_commonData.GoodsData), (item, index, i0) => {
          return {
            a: common_vendor.t(item.label),
            b: index,
            c: common_vendor.n(index === common_vendor.unref(isActive) ? "active" : ""),
            d: common_vendor.o(($event) => handleActive(index, item), index)
          };
        }),
        e: common_vendor.unref(isShowGoodInfo)
      }, common_vendor.unref(isShowGoodInfo) ? {
        f: common_vendor.o([($event) => common_vendor.isRef(otherData) ? otherData.value = $event.detail.value : otherData = $event.detail.value, monitorInput]),
        g: common_vendor.unref(goodMaxLength),
        h: common_vendor.unref(otherData),
        i: common_vendor.t(common_vendor.unref(goodNumVal)),
        j: common_vendor.n(common_vendor.unref(goodNumVal) === 0 ? "tip" : "")
      } : {}) : __props.type === 2 ? {
        l: common_vendor.f(common_vendor.unref(utils_commonData.PayMethodData), (item, index, i0) => {
          return {
            a: common_vendor.t(item.label),
            b: String(index),
            c: common_vendor.n(index === common_vendor.unref(current) ? "active" : ""),
            d: index === common_vendor.unref(current),
            e: index,
            f: common_vendor.o(($event) => checkbox(index), index)
          };
        })
      } : __props.type === 3 ? {
        n: common_vendor.o([($event) => common_vendor.isRef(remark) ? remark.value = $event.detail.value : remark = $event.detail.value, textInput]),
        o: common_vendor.unref(remarkMaxLength),
        p: common_vendor.unref(remark),
        q: common_vendor.t(common_vendor.unref(remarkNumVal)),
        r: common_vendor.n(common_vendor.unref(remarkNumVal) === 0 ? "tip" : "")
      } : {
        s: common_vendor.f(common_vendor.unref(utils_commonData.SignData), (item, index, i0) => {
          return {
            a: common_vendor.t(item.label),
            b: String(index),
            c: common_vendor.n(index === common_vendor.unref(current) ? "active" : ""),
            d: index === common_vendor.unref(current),
            e: index,
            f: common_vendor.o(($event) => checkbox(index), index)
          };
        })
      }, {
        k: __props.type === 2,
        m: __props.type === 3,
        t: common_vendor.o(handleSubmit),
        v: common_vendor.sr(popup, "8cc3fb9e-0", {
          "k": "popup"
        }),
        w: common_vendor.p({
          type: "bottom"
        })
      });
    };
  }
};
var Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "E:/project/\u5C0F\u667A\u5E2E/project-xzb-app-uniapp-java\uFF08\u670D\u52A1\u7AEF\uFF09/pages/details/components/uppop.vue"]]);
wx.createComponent(Component);
