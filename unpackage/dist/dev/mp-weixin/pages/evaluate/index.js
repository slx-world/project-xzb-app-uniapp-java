"use strict";
const common_vendor = require("../../common/vendor.js");
const utils_commonData = require("../../utils/commonData.js");
const pages_api_order = require("../api/order.js");
require("../../utils/request.js");
if (!Math) {
  (UniNav + UniTab + common_vendor.unref(HomeList) + Empty + UniFooter)();
}
const UniNav = () => "../../components/uni-nav/index.js";
const Empty = () => "../../components/empty/index.js";
const HomeList = () => "./components/homeList.js";
const UniFooter = () => "../../components/uni-footer/index.js";
const UniTab = () => "../../components/uni-tab/index.js";
const _sfc_main = {
  __name: "index",
  emits: "",
  setup(__props, { emit }) {
    const store = common_vendor.useStore();
    const users = store.state.user;
    const title = common_vendor.ref("我的评价");
    const statusNum = common_vendor.reactive({
      data: []
    });
    const isHaveMore = common_vendor.ref(false);
    const tabBars = utils_commonData.evaluateData;
    const icCanScroll = common_vendor.ref(true);
    const homeList = common_vendor.reactive({
      data: []
    });
    const scrollTop = common_vendor.ref(0);
    common_vendor.ref(null);
    common_vendor.onShow(() => {
      getTabIndex(users.tabIndex);
      getOrderStatusNumFunc();
    });
    const handleLoad = () => {
      console.log("上拉加载");
      if (isHaveMore.value) {
        getListData(
          tabBars[users.tabIndex].value,
          homeList.data[homeList.data.length - 1].id
        );
      }
    };
    const getOrderStatusNumFunc = () => {
      pages_api_order.getOrderStatusNum().then((res) => {
        statusNum.data = [res.data.noServed, res.data.serving];
      });
    };
    const getListData = (val, id) => {
      pages_api_order.getOrder(val, id).then((res) => {
        if (res.data.ordersServes.length === 10) {
          isHaveMore.value = true;
        } else {
          isHaveMore.value = false;
        }
        homeList.data = homeList.data.concat(res.data.ordersServes);
        console.log(res, homeList.data, "66666666666");
      });
    };
    const getRobOrderList = () => {
    };
    const scrollToTop = () => {
      scrollTop.value = scrollTop.value === 0 ? 1 : 0;
    };
    const getTabIndex = (index) => {
      scrollToTop();
      store.commit("user/setTabIndex", index);
      homeList.data = [];
      getListData(tabBars[index].value, "");
    };
    const goBack = () => {
      common_vendor.index.navigateBack();
    };
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.o(goBack),
        b: common_vendor.p({
          title: title.value
        }),
        c: common_vendor.o(getTabIndex),
        d: common_vendor.p({
          tabBars: common_vendor.unref(tabBars),
          statusNum: statusNum.data
        }),
        e: homeList.data.length
      }, homeList.data.length ? {
        f: common_vendor.o(getRobOrderList),
        g: common_vendor.p({
          data: homeList.data
        })
      } : {}, {
        h: icCanScroll.value,
        i: common_vendor.o((...args) => _ctx.handleScroll && _ctx.handleScroll(...args)),
        j: common_vendor.o(handleLoad),
        k: scrollTop.value,
        l: common_vendor.p({
          pagePath: "pages/pickup/index"
        })
      });
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-2cd4902b"], ["__file", "E:/project/小智帮/project-xzb-app-uniapp-java（服务端）/pages/evaluate/index.vue"]]);
wx.createPage(MiniProgramPage);
