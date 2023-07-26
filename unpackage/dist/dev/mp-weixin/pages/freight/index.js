"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var common_vendor = require("../../common/vendor.js");
var pages_api_freight = require("../api/freight.js");
require("../../utils/request.js");
if (!Math) {
  (UniNav + UniAddress + GoodsInfo + Result)();
}
const UniNav = () => "../../components/uni-nav/index.js";
const UniAddress = () => "./components/address.js";
const GoodsInfo = () => "../../components/uni-goods/index.js";
const Result = () => "./components/result.js";
const _sfc_main = {
  __name: "index",
  setup(__props) {
    const title = common_vendor.ref("\u8FD0\u8D39\u67E5\u8BE2");
    const isShow = common_vendor.ref(false);
    let baseData = common_vendor.reactive({});
    const goods = common_vendor.ref();
    const address = common_vendor.ref();
    const isCityId = common_vendor.ref(false);
    const handleSubmit = async () => {
      const senderCountyId = address.value.mailCity.areaId;
      const receiverCountyId = address.value.consigneeCity.areaId;
      const goodData = goods.value;
      if (!senderCountyId) {
        return common_vendor.index.showToast({
          title: "\u8BF7\u9009\u62E9\u5BC4\u4EF6\u57CE\u5E02",
          duration: 1e3,
          icon: "none"
        });
      }
      if (!receiverCountyId) {
        return common_vendor.index.showToast({
          title: "\u8BF7\u9009\u62E9\u6536\u4EF6\u57CE\u5E02",
          duration: 1e3,
          icon: "none"
        });
      }
      isShow.value = true;
      let data = {
        senderCountyId,
        receiverCountyId,
        volume: goodData.volume === 0 ? 1 : goodData.volume * 1e6,
        weight: goodData.weight,
        measureLong: goodData.measureLong,
        measureWidth: goodData.measureWidth,
        measureHigh: goodData.measureHigh
      };
      const res = await pages_api_freight.calculateFreight(data);
      if (res.code === 200) {
        baseData.value = __spreadValues({
          volumeValue: goodData.volume
        }, res.data);
      } else {
        return common_vendor.index.showToast({
          title: res.msg,
          duration: 1e3,
          icon: "none"
        });
      }
    };
    const handleCity = (val) => {
      isCityId.value = val;
    };
    const goBack = () => {
      common_vendor.index.redirectTo({
        url: "/pages/index/index"
      });
    };
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.o(goBack),
        b: common_vendor.p({
          title: title.value
        }),
        c: common_vendor.sr(address, "628b0746-1", {
          "k": "address"
        }),
        d: common_vendor.o(handleCity),
        e: common_vendor.sr(goods, "628b0746-2", {
          "k": "goods"
        }),
        f: common_vendor.n(isCityId.value ? "" : "btn-forbid"),
        g: common_vendor.o(handleSubmit),
        h: isShow.value
      }, isShow.value ? {
        i: common_vendor.p({
          baseData: common_vendor.unref(baseData).value
        })
      } : {});
    };
  }
};
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-628b0746"], ["__file", "E:/project/\u5C0F\u667A\u5E2E/project-xzb-app-uniapp-java\uFF08\u670D\u52A1\u7AEF\uFF09/pages/freight/index.vue"]]);
wx.createPage(MiniProgramPage);
