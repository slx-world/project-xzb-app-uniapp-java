"use strict";
var common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  __name: "delivery",
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
    const handleOpen = (e, id) => {
      e.stopPropagation();
      emit("handleOpen", id);
    };
    const handleDetails = (e, item) => {
      e.stopPropagation();
      store.commit("user/setTaskId", item.id);
      store.commit("user/setTaskType", 2);
      store.commit("user/setDetailType", 2);
      if (item.status === 1) {
        store.commit("user/setTaskStatus", 6);
        common_vendor.index.redirectTo({
          url: "/pages/details/waybill"
        });
      } else if (item.status === 2 && item.paymentStatus === 1 && item.paymentMethod === 2 && item.signStatus !== 2) {
        store.commit("user/setIsDelivery", true);
        store.commit("user/setTaskStatus", 6);
        store.commit("user/setPayData", {});
        common_vendor.index.redirectTo({
          url: "/pages/pay/scanPay"
        });
      } else {
        store.commit("user/setTaskStatus", 6);
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
            b: item.transportOrderId !== null
          }, item.transportOrderId !== null ? {
            c: common_vendor.t(item.transportOrderId)
          } : {}, {
            d: common_vendor.t(item.name),
            e: common_vendor.t(item.address),
            f: common_vendor.t(item.actualEndTime),
            g: item.status === 2
          }, item.status === 2 ? {
            h: common_vendor.t(item.amount)
          } : {}) : common_vendor.e({
            i: common_vendor.t(item.name),
            j: common_vendor.t(item.phone),
            k: common_vendor.t(item.address),
            l: common_vendor.t(item.distance),
            m: item.transportOrderId !== null
          }, item.transportOrderId !== null ? {
            n: common_vendor.t(item.transportOrderId)
          } : {}), {
            o: item.status === 1
          }, item.status === 1 ? {
            p: common_vendor.o(($event) => handleDetails($event, item))
          } : item.status === 2 && item.paymentStatus === 1 && item.paymentMethod === 2 && item.signStatus !== 2 ? {
            r: common_vendor.o(($event) => handleDetails($event, item))
          } : {
            s: common_vendor.o(($event) => handleOpen($event, item.id))
          }, {
            q: item.status === 2 && item.paymentStatus === 1 && item.paymentMethod === 2 && item.signStatus !== 2,
            t: common_vendor.o(($event) => handleDetails($event, item)),
            v: index
          });
        })
      };
    };
  }
};
var Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "E:/project/\u5C0F\u667A\u5E2E/project-xzb-app-uniapp-java\uFF08\u670D\u52A1\u7AEF\uFF09/pages/history/commponents/delivery.vue"]]);
wx.createComponent(Component);
