"use strict";
var common_vendor = require("../../../common/vendor.js");
if (!Math) {
  CityPopup();
}
const CityPopup = () => "../../../components/uni-address/index.js";
const _sfc_main = {
  __name: "address",
  setup(__props, { expose, emit }) {
    const city = common_vendor.ref();
    let type = common_vendor.ref(null);
    let mailCity = common_vendor.ref({});
    let consigneeCity = common_vendor.ref({});
    const handleDate = (val) => {
      type.value = val;
      city.value.handleOpen();
    };
    const getCity = (obj) => {
      if (type.value === 1) {
        mailCity.value = obj;
      } else {
        consigneeCity.value = obj;
      }
      if (mailCity.value.areaId && consigneeCity.value.areaId) {
        emit("handleCity", true);
      }
    };
    expose({
      mailCity,
      consigneeCity
    });
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: !common_vendor.unref(mailCity).province
      }, !common_vendor.unref(mailCity).province ? {} : {
        b: common_vendor.t(common_vendor.unref(mailCity).province),
        c: common_vendor.t(common_vendor.unref(mailCity).city),
        d: common_vendor.t(common_vendor.unref(mailCity).area)
      }, {
        e: common_vendor.n(common_vendor.unref(mailCity).province ? "active" : ""),
        f: common_vendor.o(($event) => handleDate(1)),
        g: !common_vendor.unref(consigneeCity).province
      }, !common_vendor.unref(consigneeCity).province ? {} : {
        h: common_vendor.t(common_vendor.unref(consigneeCity).province),
        i: common_vendor.t(common_vendor.unref(consigneeCity).city),
        j: common_vendor.t(common_vendor.unref(consigneeCity).area)
      }, {
        k: common_vendor.n(common_vendor.unref(consigneeCity).province ? "active" : ""),
        l: common_vendor.o(($event) => handleDate(2)),
        m: common_vendor.sr(city, "4dd8c324-0", {
          "k": "city"
        }),
        n: common_vendor.o(getCity),
        o: common_vendor.p({
          type: common_vendor.unref(type)
        })
      });
    };
  }
};
var Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "E:/project/\u5C0F\u667A\u5E2E/project-xzb-app-uniapp-java\uFF08\u670D\u52A1\u7AEF\uFF09/pages/freight/components/address.vue"]]);
wx.createComponent(Component);
