"use strict";
var common_vendor = require("../../common/vendor.js");
var pages_api_my = require("../api/my.js");
require("../../utils/request.js");
if (!Math) {
  UniNav();
}
const UniNav = () => "../../components/uni-nav/index.js";
const _sfc_main = {
  __name: "map",
  setup(__props) {
    const title = common_vendor.ref("\u4F5C\u4E1A\u8303\u56F4");
    const latitude = common_vendor.ref(39.997534);
    const longitude = common_vendor.ref(116.475334);
    const polygons = common_vendor.reactive([
      {
        points: [
          {
            longitude: 116.475334,
            latitude: 39.997534
          },
          {
            longitude: 116.476627,
            latitude: 39.998315
          },
          {
            longitude: 116.478603,
            latitude: 39.99879
          },
          {
            longitude: 116.478529,
            latitude: 40.000296
          },
          {
            longitude: 116.475082,
            latitude: 40.000151
          },
          {
            longitude: 116.473421,
            latitude: 39.998717
          }
        ],
        fillColor: "#EF4F3F20",
        strokeColor: "#EF4F3F",
        strokeWidth: 2,
        zIndex: 1,
        dottedLine: true
      }
    ]);
    common_vendor.onMounted(() => {
      getUserPolygon();
    });
    const getUserPolygon = async () => {
      await pages_api_my.getUserScope().then((res) => {
        if (res.code === 200)
          ;
      });
    };
    const goBack = () => {
      common_vendor.index.redirectTo({
        url: "/pages/my/index"
      });
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(goBack),
        b: common_vendor.p({
          title: title.value
        }),
        c: latitude.value,
        d: longitude.value,
        e: polygons
      };
    };
  }
};
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-4adb27b2"], ["__file", "E:/project/\u5C0F\u667A\u5E2E/project-xzb-app-uniapp-java\uFF08\u670D\u52A1\u7AEF\uFF09/pages/my/map.vue"]]);
wx.createPage(MiniProgramPage);
