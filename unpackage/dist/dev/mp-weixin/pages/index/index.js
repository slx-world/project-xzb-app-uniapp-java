"use strict";
var common_vendor = require("../../common/vendor.js");
var pages_api_order = require("../api/order.js");
require("../../utils/request.js");
if (!Array) {
  const _easycom_uni_nav_bar2 = common_vendor.resolveComponent("uni-nav-bar");
  _easycom_uni_nav_bar2();
}
const _easycom_uni_nav_bar = () => "../../uni_modules/uni-nav-bar/components/uni-nav-bar/uni-nav-bar.js";
if (!Math) {
  (_easycom_uni_nav_bar + UniNav + common_vendor.unref(HomeFilter) + common_vendor.unref(HomeList) + UniFooter)();
}
const UniNav = () => "../../components/uni-home-nav/index.js";
const UniFooter = () => "../../components/uni-footer/index.js";
const HomeFilter = () => "./components/homeFilter.js";
const HomeList = () => "./components/homeList.js";
const _sfc_main = {
  __name: "index",
  setup(__props) {
    const fixTop = common_vendor.ref(false);
    const icCanScroll = common_vendor.ref(true);
    let homeFilterList = common_vendor.reactive({
      data: []
    });
    let homeList = common_vendor.reactive({
      data: []
    });
    common_vendor.onMounted(() => {
      getRobOrderList();
      getHomeFilterList();
    });
    common_vendor.onPullDownRefresh(() => {
      setTimeout(function() {
        common_vendor.index.stopPullDownRefresh();
      }, 1e3);
      console.log("refresh");
    });
    const getList = (params) => {
      getRobOrderList(params);
    };
    const getRobOrderList = (params) => {
      pages_api_order.getRobOrder(params).then((res) => {
        console.log(res, 1111111);
        homeList.data = res.data.ordersSeizes;
      });
    };
    const getHomeFilterList = () => {
      pages_api_order.getHomeFilter().then((res) => {
        homeFilterList.data = res.data;
      });
    };
    const handleCanScroll = (val) => {
      icCanScroll.value = !val;
    };
    const handleScroll = (e) => {
      if (e.detail.scrollTop > 188) {
        fixTop.value = true;
      } else {
        fixTop.value = false;
      }
    };
    const goBack = () => {
      common_vendor.index.redirectTo({
        url: "/pages/index/index"
      });
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          statusBar: "true",
          backgroundColor: "#F74347"
        }),
        b: common_vendor.o(goBack),
        c: common_vendor.o(handleCanScroll),
        d: common_vendor.o(getList),
        e: common_vendor.p({
          homeFilterList: common_vendor.unref(homeFilterList).data
        }),
        f: fixTop.value,
        g: common_vendor.o(getList),
        h: common_vendor.p({
          fixTop: fixTop.value,
          homeFilterList: common_vendor.unref(homeFilterList).data
        }),
        i: common_vendor.p({
          data: common_vendor.unref(homeList).data
        }),
        j: icCanScroll.value,
        k: common_vendor.o(handleScroll),
        l: common_vendor.p({
          pagePath: "pages/index/index"
        })
      };
    };
  }
};
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-57280228"], ["__file", "E:/project/\u5C0F\u667A\u5E2E/project-xzb-app-uniapp-java\uFF08\u670D\u52A1\u7AEF\uFF09/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);
