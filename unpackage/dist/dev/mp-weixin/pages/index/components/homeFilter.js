"use strict";
const common_vendor = require("../../../common/vendor.js");
require("../../../index.scss_vue_type_style_index_0_src_true_lang.js");
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
  emits: ["handleCanScroll", "getList", "tabChange"],
  setup(__props, { emit }) {
    const props = __props;
    const type = common_vendor.ref("");
    const status = common_vendor.ref(0);
    const isOpen = common_vendor.ref(false);
    let serviceType = common_vendor.reactive({
      data: []
    });
    const activeType = common_vendor.ref("");
    const handleClick = (val) => {
      status.value = val;
      emit("tabChange", status.value, activeType.value);
    };
    const handleOpen = (val) => {
      isOpen.value = !isOpen.value;
      type.value = val;
      if (val === "distance") {
        serviceType.data = [
          {
            id: 0,
            name: "全部"
          },
          {
            id: 3,
            name: "3公里内"
          },
          {
            id: 5,
            name: "5公里内"
          },
          {
            id: 10,
            name: "10公里内"
          },
          {
            id: 20,
            name: "20公里内"
          },
          {
            id: 50,
            name: "50公里内"
          }
        ];
      } else {
        serviceType.data = [{ id: "", name: "全部" }].concat(props.homeFilterList);
      }
      console.log(isOpen.value, "isOpen.value");
      emit("handleCanScroll", isOpen.value);
    };
    const handleReset = () => {
      activeType.value = "";
      isOpen.value = false;
      emit("handleCanScroll", isOpen.value);
      emit("tabChange", status.value, activeType.value);
    };
    const handleService = (val) => {
      activeType.value = val;
    };
    const handleSubmit = () => {
      isOpen.value = false;
      emit("handleCanScroll", isOpen.value);
      emit("tabChange", status.value, activeType.value);
    };
    common_vendor.watch(
      () => props.homeFilterList,
      () => {
        serviceType.data = [{ id: "", name: "全部" }].concat(props.homeFilterList);
      }
    );
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.n(!status.value ? "active" : ""),
        b: common_vendor.o(($event) => handleClick(0)),
        c: common_vendor.n(status.value ? "active" : ""),
        d: common_vendor.o(($event) => handleClick(1)),
        e: !status.value
      }, !status.value ? {
        f: common_vendor.n(isOpen.value && type.value === "distance" ? "up" : "down"),
        g: common_vendor.o(($event) => handleOpen("distance")),
        h: common_vendor.n(isOpen.value && type.value === "serviceType" ? "up" : "down"),
        i: common_vendor.o(($event) => handleOpen("serviceType"))
      } : {}, {
        j: common_vendor.f(common_vendor.unref(serviceType).data, (item, index, i0) => {
          return {
            a: common_vendor.t(item.name),
            b: common_vendor.n(activeType.value === item.id ? "active" : ""),
            c: index,
            d: common_vendor.o(($event) => handleService(item.id), index)
          };
        }),
        k: common_vendor.o(handleReset),
        l: common_vendor.o(handleSubmit),
        m: isOpen.value,
        n: common_vendor.n(__props.fixTop ? "fixTop" : "")
      });
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "E:/project/小智帮/project-xzb-app-uniapp-java（服务端）/pages/index/components/homeFilter.vue"]]);
wx.createComponent(Component);
