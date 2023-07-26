"use strict";
var common_vendor = require("../../../common/vendor.js");
var utils_index = require("../../../utils/index.js");
require("../../api/index.js");
require("../../../utils/request.js");
const _sfc_main = {
  __name: "pickup",
  props: {
    itemData: {
      type: Array,
      default: () => []
    },
    tabIndex: {
      type: Number,
      default: 0
    }
  },
  emits: "",
  setup(__props, { emit }) {
    const store = common_vendor.useStore();
    store.state.user;
    common_vendor.onMounted(() => {
    });
    const handleOpen = (e, id) => {
      e.stopPropagation();
      emit("handleOpen", id);
    };
    const handleDetails = (e, item) => {
      e.stopPropagation();
      store.commit("user/setTaskId", item.id);
      store.commit("user/setTaskType", 1);
      store.commit("user/setTaskStatus", 6);
      store.commit("user/setDetailType", 1);
      if (item.status === 1) {
        common_vendor.index.redirectTo({
          url: "/pages/details/index"
        });
      } else if (item.status === 2 && item.paymentStatus === 1 && item.paymentMethod === 1) {
        store.commit("user/setPayData", {});
        common_vendor.index.redirectTo({
          url: "/pages/pay/scanPay"
        });
      } else {
        common_vendor.index.redirectTo({
          url: "/pages/details/waybill"
        });
      }
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(__props.itemData, (item, index, i0) => {
          return common_vendor.e({
            a: item.status !== 1
          }, item.status !== 1 ? common_vendor.e({
            b: common_vendor.t(item.orderId),
            c: common_vendor.t(item.name),
            d: common_vendor.t(item.address),
            e: common_vendor.t(item.actualEndTime),
            f: item.status === 2
          }, item.status === 2 ? {
            g: common_vendor.t(item.amount)
          } : {}) : {
            h: common_vendor.t(item.name),
            i: common_vendor.t(item.phone),
            j: common_vendor.t(item.address),
            k: common_vendor.t(item.distance),
            l: common_vendor.t(common_vendor.unref(utils_index.taskTimeFormat)(item.estimatedStartTime)),
            m: common_vendor.t(common_vendor.unref(utils_index.overTimeFormat)(item.estimatedEndTime))
          }, {
            n: item.status === 1
          }, item.status === 1 ? {
            o: common_vendor.o(($event) => handleDetails($event, item))
          } : item.status === 2 && item.paymentStatus === 1 && item.paymentMethod === 1 ? {
            q: common_vendor.o(($event) => handleDetails($event, item))
          } : {
            r: common_vendor.o(($event) => handleOpen($event, item.id))
          }, {
            p: item.status === 2 && item.paymentStatus === 1 && item.paymentMethod === 1,
            s: common_vendor.o(($event) => handleDetails($event, item)),
            t: index
          });
        })
      };
    };
  }
};
var Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "E:/project/\u5C0F\u667A\u5E2E/project-xzb-app-uniapp-java\uFF08\u670D\u52A1\u7AEF\uFF09/pages/history/commponents/pickup.vue"]]);
wx.createComponent(Component);
