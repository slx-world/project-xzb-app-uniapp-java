"use strict";
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var common_vendor = require("../../../common/vendor.js");
var utils_index = require("../../../utils/index.js");
var utils_commonData = require("../../../utils/commonData.js");
var pages_api_index = require("../../api/index.js");
require("../../../utils/request.js");
if (!Math) {
  (UniTab + Pickup + Delivery + ReachBottom + EmptyPage + UniPopup)();
}
const UniTab = () => "../../../components/uni-tab/index.js";
const UniPopup = () => "../../../components/uni-popup/index.js";
const ReachBottom = () => "../../../components/reach-bottom/index.js";
const EmptyPage = () => "../../../components/uni-empty-page/index.js";
const Pickup = () => "./pickup.js";
const Delivery = () => "./delivery.js";
const _sfc_main = {
  __name: "index",
  props: {
    dateTime: {
      type: String,
      default: ""
    }
  },
  emits: "",
  setup(__props, { expose, emit }) {
    const props = __props;
    const store = common_vendor.useStore();
    const users = store.state.user;
    let popup = common_vendor.ref();
    const tipInfo = common_vendor.ref("\u786E\u8BA4\u5220\u9664\u8BE5\u8BA2\u5355\u5417\uFF1F");
    const tabBars = utils_commonData.HistoryTabData;
    let taskId = common_vendor.ref("");
    let tabIndex = common_vendor.ref(0);
    const loadMore = common_vendor.ref();
    let itemData = common_vendor.ref([]);
    let reload = common_vendor.ref(false);
    let pages = common_vendor.ref(0);
    let pageNum = users.isFiltrate ? 1 : common_vendor.ref(1);
    const emptyData = common_vendor.ref("\u6682\u65E0\u6570\u636E");
    let isPullDown = common_vendor.ref(false);
    let page = common_vendor.reactive({
      latitude: users.loacation.latitude !== void 0 ? users.loacation.latitude : 40.062595,
      longitude: users.loacation.longitude !== void 0 ? users.loacation.longitude : 116.372809,
      page: 1,
      pageSize: 10,
      taskType: 1
    });
    common_vendor.watch(props, (newValue, oldValue) => {
      store.commit("user/setDeliveryData", []);
      getList(newValue.dateTime);
    });
    common_vendor.watch(tabIndex, (newValue, oldValue) => {
      if (newValue === 0) {
        page.taskType = 1;
      } else {
        page.taskType = 2;
      }
      store.commit("user/setDeliveryData", []);
      getList(page.dateTime);
    });
    common_vendor.onMounted(() => {
      if (users.tabIndex) {
        tabIndex.value = users.tabIndex;
      }
    });
    common_vendor.onReachBottom(() => {
      if (pageNum.value >= Number(pages.value)) {
        loadMore.value.status = "noMore";
        return false;
      } else {
        loadMore.value.status = "loading";
        setTimeout(() => {
          pageNum.value++;
          getList(page.dateTime);
        }, 1e3);
      }
    });
    const getList = async (time) => {
      reload.value = true;
      page = __spreadProps(__spreadValues({}, page), {
        dateTime: utils_index.getTimeDate(time).veryDayDate,
        page: pageNum.value
      });
      await pages_api_index.getDeliveryList(page).then((res) => {
        if (res.code === 200) {
          if (res.data) {
            reload.value = false;
            if (users.deliveryData.length === 0) {
              itemData.value = [];
            }
            if (users.istabChange) {
              itemData.value = res.data.items;
              store.commit("user/setIstabChange", false);
            } else {
              itemData.value = itemData.value.concat(res.data.items);
            }
            pages.value = res.data.pages;
            store.commit("user/setDeliveryData", itemData.value);
            if (Number(res.data.pages) === pageNum.value) {
              loadMore.value.status = "noMore";
            }
          } else {
            itemData.value = [];
          }
        }
      });
    };
    const getTabIndex = (index) => {
      store.commit("user/setTabIndex", 0);
      store.commit("user/setIstabChange", true);
      pageNum.value = 1;
      pages.value = 1;
      tabIndex.value = index;
      itemData.value = [];
      store.commit("user/setDeliveryData", []);
    };
    const handleClick = async () => {
      await pages_api_index.taskDelete(taskId.value).then((res) => {
        if (res.code === 200) {
          store.commit("user/setDeliveryData", []);
          getList(page.dateTime);
          isPullDown.value = true;
          return common_vendor.index.showToast({
            title: "\u5220\u9664\u6210\u529F!",
            duration: 1e3,
            icon: "none"
          });
        }
      });
    };
    const handleOpen = (id) => {
      popup.value.dialogOpen();
      taskId.value = id;
    };
    expose({
      getList
    });
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.sr("tab", "b3a72748-0"),
        b: common_vendor.o(getTabIndex),
        c: common_vendor.p({
          tabBars: common_vendor.unref(tabBars)
        }),
        d: common_vendor.unref(itemData).length > 0
      }, common_vendor.unref(itemData).length > 0 ? common_vendor.e({
        e: common_vendor.unref(tabIndex) === 0
      }, common_vendor.unref(tabIndex) === 0 ? {
        f: common_vendor.o(handleOpen),
        g: common_vendor.p({
          itemData: common_vendor.unref(itemData)
        })
      } : {
        h: common_vendor.o(handleOpen),
        i: common_vendor.p({
          itemData: common_vendor.unref(itemData)
        })
      }, {
        j: common_vendor.sr(loadMore, "b3a72748-3", {
          "k": "loadMore"
        })
      }) : {
        k: common_vendor.p({
          emptyData: emptyData.value
        })
      }, {
        l: common_vendor.sr(popup, "b3a72748-5", {
          "k": "popup"
        }),
        m: common_vendor.o(handleClick),
        n: common_vendor.p({
          tipInfo: tipInfo.value
        })
      });
    };
  }
};
var Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "E:/project/\u5C0F\u667A\u5E2E/project-xzb-app-uniapp-java\uFF08\u670D\u52A1\u7AEF\uFF09/pages/history/commponents/index.vue"]]);
wx.createComponent(Component);
