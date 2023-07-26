"use strict";
var common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  __name: "homeFilter",
  props: {
    fixTop: {
      type: Boolean,
      default: false
    },
    homeFilterList: {
      type: Array,
      default: () => []
    }
  },
  emits: ["handleCanScroll", "getList"],
  setup(__props, { emit }) {
    const props = __props;
    const status = common_vendor.ref(0);
    const isOpen = common_vendor.ref(false);
    let serviceType = common_vendor.reactive({
      data: []
    });
    const activeType = common_vendor.ref("");
    const handleClick = (val) => {
      status.value = val;
    };
    const handleOpen = () => {
      isOpen.value = !isOpen.value;
      emit("handleCanScroll", isOpen.value);
    };
    const handleReset = () => {
      activeType.value = "";
      isOpen.value = false;
      emit("getList", "");
    };
    const handleService = (val) => {
      activeType.value = val;
    };
    const handleSubmit = () => {
      isOpen.value = false;
      emit("getList", activeType.value);
    };
    common_vendor.watch(() => props.homeFilterList, () => {
      serviceType.data = [{ id: "", name: "\u5168\u90E8" }].concat(props.homeFilterList);
    });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.n(!status.value ? "active" : ""),
        b: common_vendor.o(($event) => handleClick(0)),
        c: common_vendor.n(status.value ? "active" : ""),
        d: common_vendor.o(($event) => handleClick(1)),
        e: common_vendor.n(isOpen.value ? "up" : "down"),
        f: common_vendor.o(handleOpen),
        g: common_vendor.f(common_vendor.unref(serviceType).data, (item, index, i0) => {
          return {
            a: common_vendor.t(item.name),
            b: common_vendor.n(activeType.value === item.id ? "active" : ""),
            c: index,
            d: common_vendor.o(($event) => handleService(item.id), index)
          };
        }),
        h: common_vendor.o(handleReset),
        i: common_vendor.o(handleSubmit),
        j: isOpen.value,
        k: common_vendor.n(__props.fixTop ? "fixTop" : "")
      };
    };
  }
};
var Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "E:/project/\u5C0F\u667A\u5E2E/project-xzb-app-uniapp-java\uFF08\u670D\u52A1\u7AEF\uFF09/pages/index/components/homeFilter.vue"]]);
wx.createComponent(Component);
