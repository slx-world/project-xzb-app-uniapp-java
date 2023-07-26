"use strict";
var common_vendor = require("../../common/vendor.js");
var pages_api_setting = require("../api/setting.js");
var pages_city_city = require("./city.js");
require("../../utils/request.js");
if (!Math) {
  UniNav();
}
const UniNav = () => "../../components/uni-nav/index.js";
const _sfc_main = {
  __name: "index",
  setup(__props) {
    const address = common_vendor.ref("");
    const customBar = common_vendor.ref("87px");
    const winHeight = common_vendor.ref(0);
    const itemHeight = common_vendor.ref(0);
    const winOffsetY = common_vendor.ref(0);
    const touchmove = common_vendor.ref(false);
    const scrollHeight = common_vendor.ref("");
    const letter = common_vendor.ref([]);
    common_vendor.ref("");
    const scrollIntoId = common_vendor.ref("");
    const list = common_vendor.ref([]);
    const activeId = common_vendor.ref(1);
    const disPosition = common_vendor.ref(true);
    const currentCity = common_vendor.ref();
    common_vendor.ref();
    const po_tips = common_vendor.ref("\u91CD\u65B0\u5B9A\u4F4D");
    const hotCity = common_vendor.ref([
      { name: "\u5317\u4EAC\u5E02", cityCode: "010" },
      { name: "\u4E0A\u6D77\u5E02", cityCode: "021" },
      { name: "\u5E7F\u5DDE\u5E02", cityCode: "020" },
      { name: "\u6DF1\u5733\u5E02", cityCode: "0755" }
    ]);
    const instance = common_vendor.getCurrentInstance();
    const setList = () => {
      common_vendor.index.createSelectorQuery().in(instance).select("#list").boundingClientRect().exec((ret) => {
        winOffsetY.value = ret[0].top;
        winHeight.value = ret[0].height;
        itemHeight.value = winHeight.value / list.value.length;
      });
    };
    common_vendor.onLoad((option) => {
      address.value = option.address;
    });
    const goBack = () => {
      common_vendor.index.navigateBack();
    };
    const touchStart = (e) => {
      touchmove.value = true;
      let pageY = e.touches[0].pageY;
      let index = Math.floor((pageY - winOffsetY.value) / itemHeight.value);
      if (list.value[index]) {
        scrollIntoId.value = list.value[index].idx;
      }
    };
    const touchMove = (e) => {
      let pageY = e.touches[0].pageY;
      let index = Math.floor((pageY - winOffsetY.value) / itemHeight.value);
      if (list.value[index] && list.value[index].idx === scrollIntoId.value) {
        return false;
      }
      if (list.value[index]) {
        scrollIntoId.value = list.value[index].idx;
      }
    };
    const touchEnd = () => {
      touchmove.value = false;
    };
    const activeCity = (val) => {
      activeId.value = val.cityCode;
      selectCity(val);
    };
    common_vendor.onMounted(() => {
      getWarpWeft();
      scrollHeight.value = common_vendor.index.getSystemInfoSync().windowHeight - parseInt(customBar.value) + "px";
      letter.value = pages_city_city.Citys.index;
      list.value = pages_city_city.Citys.list;
      setList();
      pages_api_setting.getOpenCity().then((res) => {
        list.value = res.data;
        console.log(res, "getOpenCity");
      });
    });
    const getWarpWeft = () => {
      po_tips.value = "\u5B9A\u4F4D\u4E2D...";
      common_vendor.index.getLocation({
        type: "gcj02",
        geocode: true,
        success: function(res) {
          currentCity.value = {
            name: res.address.city
          };
          activeId.value = res.address.cityCode;
          setTimeout(() => {
            po_tips.value = "\u91CD\u65B0\u5B9A\u4F4D";
          }, 500);
        },
        fail: function(res) {
          console.log(res);
          setTimeout(() => {
            po_tips.value = "\u5B9A\u4F4D\u5931\u8D25";
          }, 500);
          disPosition.value = true;
        }
      });
    };
    const selectCity = (city) => {
      console.log(city, "city");
      currentCity.value = city;
      common_vendor.index.redirectTo({
        url: "/pages/serviceRange/index?cityCode=" + city.cityCode + "&name=" + city.name + "&address=" + address.value
      });
      common_vendor.index.setStorageSync("city", city);
    };
    common_vendor.watch(list, () => {
      setTimeout(() => {
        setList();
      }, 100);
    });
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.o(goBack),
        b: common_vendor.p({
          title: "\u9009\u62E9\u670D\u52A1\u57CE\u5E02"
        }),
        c: disPosition.value
      }, disPosition.value ? common_vendor.e({
        d: common_vendor.t(currentCity.value ? currentCity.value.name : "\u5B9A\u4F4D\u5931\u8D25"),
        e: common_vendor.t(po_tips.value),
        f: common_vendor.o(getWarpWeft),
        g: hotCity.value
      }, hotCity.value ? {
        h: common_vendor.f(hotCity.value, (item, index, i0) => {
          return {
            a: common_vendor.t(item.name),
            b: common_vendor.n(activeId.value === item.cityCode ? "position_city_tag_active position_city_tag" : "position_city_tag"),
            c: index,
            d: common_vendor.o(($event) => activeCity(item), index)
          };
        })
      } : {}) : {}, {
        i: common_vendor.f(list.value, (item, index, i0) => {
          return {
            a: common_vendor.t(item.name),
            b: common_vendor.o(($event) => selectCity(item)),
            c: item.id,
            d: index
          };
        }),
        j: scrollIntoId.value,
        k: scrollHeight.value,
        l: common_vendor.o(() => {
        }),
        m: common_vendor.f(letter.value, (item, k0, i0) => {
          return {
            a: common_vendor.t(item.idx),
            b: item.idx
          };
        }),
        n: common_vendor.o(touchStart),
        o: common_vendor.o(touchMove),
        p: common_vendor.o(touchEnd),
        q: common_vendor.t(scrollIntoId.value)
      });
    };
  }
};
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-49347d67"], ["__file", "E:/project/\u5C0F\u667A\u5E2E/project-xzb-app-uniapp-java\uFF08\u670D\u52A1\u7AEF\uFF09/pages/city/index.vue"]]);
wx.createPage(MiniProgramPage);
