"use strict";
var common_vendor = require("../../common/vendor.js");
var pages_api_common = require("../../pages/api/common.js");
require("../../utils/request.js");
if (!Array) {
  const _easycom_uni_popup2 = common_vendor.resolveComponent("uni-popup");
  _easycom_uni_popup2();
}
const _easycom_uni_popup = () => "../../uni_modules/uni-popup/components/uni-popup/uni-popup.js";
if (!Math) {
  _easycom_uni_popup();
}
const _sfc_main = {
  __name: "index",
  props: {
    type: {
      type: Number,
      default: null
    }
  },
  emits: "getCity",
  setup(__props, { expose, emit }) {
    const popup = common_vendor.ref();
    const indicatorStyle = common_vendor.ref(`height: 100rpx;`);
    let defaultValue = common_vendor.ref([0, 0, 0]);
    const provinceData = common_vendor.reactive([]);
    const cityData = common_vendor.reactive([]);
    const areaData = common_vendor.reactive([]);
    let cityBase = common_vendor.ref({});
    common_vendor.onMounted(() => {
      getProvincesData();
    });
    const getProvincesData = async (e) => {
      let res = await pages_api_common.getProvinces();
      if (res.code === 200) {
        provinceData.value = res.data;
        let provincesId = null;
        if (!e) {
          provincesId = provinceData.value[0].id;
        } else {
          defaultValue.value = e.detail.value;
          provincesId = provinceData.value[e.detail.value[0]].id;
        }
        getCity(provincesId);
      } else {
        return common_vendor.index.showToast({
          title: res.msg,
          duration: 1e3,
          icon: "none"
        });
      }
    };
    const getCity = async (id) => {
      let res = await pages_api_common.getProvinces({ parentId: id });
      if (res.code === 200) {
        cityData.value = res.data;
        const cityId = cityData.value[defaultValue.value[1]].id;
        getArea(cityId);
      } else {
        return common_vendor.index.showToast({
          title: res.msg,
          duration: 1e3,
          icon: "none"
        });
      }
    };
    const getArea = async (id) => {
      let res = await pages_api_common.getProvinces({ parentId: id });
      if (res.code === 200) {
        areaData.value = res.data;
        cityBase.value = {
          province: provinceData.value[defaultValue.value[0]].name,
          city: cityData.value[defaultValue.value[1]].name,
          area: areaData.value[defaultValue.value[2]].name,
          areaId: areaData.value[defaultValue.value[2]].id
        };
      } else {
        return common_vendor.index.showToast({
          title: res.msg,
          duration: 1e3,
          icon: "none"
        });
      }
    };
    const handleOpen = () => {
      popup.value.open("bottom");
    };
    const handleCancel = () => {
      popup.value.close("bottom");
    };
    const handleComplete = () => {
      handleCancel();
      emit("getCity", cityBase.value);
    };
    expose({
      handleOpen
    });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(($event) => handleCancel()),
        b: common_vendor.o(handleComplete),
        c: common_vendor.f(provinceData.value, (item, index, i0) => {
          return {
            a: common_vendor.t(item.name),
            b: index
          };
        }),
        d: common_vendor.f(cityData.value, (item, index, i0) => {
          return {
            a: common_vendor.t(item.name),
            b: index
          };
        }),
        e: common_vendor.f(areaData.value, (item, index, i0) => {
          return {
            a: common_vendor.t(item.name),
            b: index
          };
        }),
        f: common_vendor.unref(defaultValue),
        g: indicatorStyle.value,
        h: common_vendor.o(getProvincesData),
        i: common_vendor.sr(popup, "0e01699d-0", {
          "k": "popup"
        }),
        j: common_vendor.p({
          type: "bottom",
          ["background-color"]: "#fff"
        })
      };
    };
  }
};
var Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "E:/project/\u5C0F\u667A\u5E2E/project-xzb-app-uniapp-java\uFF08\u670D\u52A1\u7AEF\uFF09/components/uni-address/index.vue"]]);
wx.createComponent(Component);
