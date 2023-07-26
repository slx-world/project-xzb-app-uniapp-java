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
var common_vendor = require("../../common/vendor.js");
var pages_api_index = require("../api/index.js");
require("../../utils/request.js");
if (!Array) {
  const _component_StayPicup = common_vendor.resolveComponent("StayPicup");
  _component_StayPicup();
}
if (!Math) {
  (SearchPage + AlreadyPicUp + Canceled + SignFor + Accomplish + ReachBottom + EmptyPage + UniPopup)();
}
const SearchPage = () => "../../components/uni-search/index.js";
const EmptyPage = () => "../../components/uni-empty-page/index.js";
const UniPopup = () => "../../components/uni-popup/index.js";
const ReachBottom = () => "../../components/reach-bottom/index.js";
const AlreadyPicUp = () => "./components/AlreadyPicUp.js";
const Canceled = () => "./components/Canceled.js";
const SignFor = () => "./components/SignFor.js";
const Accomplish = () => "./components/Accomplish.js";
const _sfc_main = {
  __name: "index",
  setup(__props) {
    const store = common_vendor.useStore();
    const users = store.state.user;
    const search = common_vendor.ref();
    let showDisplay = common_vendor.ref(false);
    let isClear = common_vendor.ref(false);
    const tipInfo = common_vendor.ref("\u786E\u5B9A\u8981\u5168\u90E8\u6E05\u7A7A\u5417\uFF1F");
    let popups = common_vendor.ref();
    let isShowCancel = common_vendor.ref(true);
    const loadMore = common_vendor.ref();
    let reload = common_vendor.ref(false);
    let pages = common_vendor.ref(0);
    let pageNum = common_vendor.ref(1);
    const itemData = common_vendor.ref([]);
    const itemDataRecent = common_vendor.reactive([]);
    const emptyData = common_vendor.ref("\u6CA1\u6709\u627E\u5230\u76F8\u5173\u5185\u5BB9");
    let keyword = common_vendor.ref("");
    let isInput = common_vendor.ref(false);
    let page = common_vendor.reactive({
      latitude: users.loacation.latitude !== void 0 ? users.loacation.latitude : 40.062595,
      longitude: users.loacation.longitude !== void 0 ? users.loacation.longitude : 116.372809,
      page: 1,
      pageSize: 10
    });
    const listDataes = common_vendor.computed$1(() => {
      let testList = [];
      if (showDisplay.value === false) {
        if (itemDataRecent.length > 10) {
          for (var i = 0; i < 10; i++) {
            testList.push(itemDataRecent[i]);
          }
        } else {
          testList = itemDataRecent;
        }
        return testList;
      } else {
        return itemDataRecent;
      }
    });
    common_vendor.onReachBottom(() => {
      isInput.value = true;
      if (pageNum.value >= Number(pages.value)) {
        loadMore.value.status = "noMore";
        return false;
      } else {
        loadMore.value.status = "loading";
        setTimeout(() => {
          pageNum.value++;
          getList();
        }, 1e3);
      }
    });
    common_vendor.onUnmounted(() => {
      itemData.value = [];
      isInput.value = false;
    });
    common_vendor.onMounted(() => {
      init();
      if (users.searchText !== "") {
        keyword.value = users.searchText;
        search.value.searchVal = users.searchText;
        getList();
      }
    });
    const init = () => {
      getRecent();
    };
    const getList = async () => {
      reload.value = true;
      page = __spreadProps(__spreadValues({}, page), {
        page: pageNum.value,
        keyword: keyword.value
      });
      await pages_api_index.getSearch(page).then((res2) => {
        if (res2.code === 200) {
          if (res2.data) {
            reload.value = false;
            if (!isInput.value) {
              itemData.value = res2.data.items;
            } else {
              itemData.value = itemData.value.concat(res2.data.items);
            }
            pages.value = res2.data.pages;
            if (Number(res2.data.pages) === pageNum.value) {
              loadMore.value.status = "noMore";
            }
          } else {
            itemData.value = [];
          }
          if (itemData.value.length > 0) {
            isClear.value = true;
          }
        }
      });
    };
    const getRecent = async () => {
      await pages_api_index.getRecentSearch().then((res2) => {
        if (res2.code === 200) {
          itemDataRecent.value = res2.data;
          if (itemDataRecent.value.length === 0) {
            isClear.value = true;
          }
        }
      });
    };
    const handleSearch = (val) => {
      if (val.value.trim().length > 0) {
        isInput.value = false;
        keyword = val;
        getList();
      }
    };
    const handleBlur = () => {
      isInput.value = true;
    };
    const handleClear = () => {
      popups.value.dialogOpen();
    };
    const clearSearchData = () => {
      itemData.value = [];
      isClear.value = false;
      store.commit("user/setSearchText", "");
      getRecent();
    };
    const clearData = async (val) => {
      isClear.value = val;
      await pages_api_index.clearRecentSearch().then(() => {
        if (res.code === 200) {
          common_vendor.index.showToast({
            title: "\u6E05\u9664\u6210\u529F",
            icon: "none"
          });
        }
      });
    };
    const setRecent = async (id) => {
      await pages_api_index.setMarkRecent(id);
      itemData.value = [];
    };
    const handleDetails = (e, item) => {
      e.stopPropagation();
      store.commit("user/setTaskId", item.id);
      store.commit("user/setIsSearch", true);
      store.commit("user/setSearchText", search.value.searchVal);
      if (item.transportOrderId) {
        setRecent(item.transportOrderId);
      }
      if (item.taskType === 1) {
        if (item.status === 1) {
          common_vendor.index.redirectTo({
            url: "/pages/details/index"
          });
          return false;
        } else if (item.status === 2) {
          if (item.paymentStatus === 1 && item.paymentMethod === 1) {
            store.commit("user/setDetailType", 2);
            store.commit("user/setTaskStatus", 3);
            store.commit("user/setPayData", {});
            common_vendor.index.redirectTo({
              url: "/pages/pay/scanPay"
            });
            return false;
          } else {
            store.commit("user/setTaskStatus", 2);
          }
        } else {
          store.commit("user/setTaskStatus", 3);
        }
        common_vendor.index.redirectTo({
          url: "/pages/details/waybill"
        });
      } else {
        if (item.status === 1) {
          store.commit("user/setTaskStatus", 4);
        } else if (item.status === 2) {
          if (item.paymentStatus === 1 && item.paymentMethod === 2) {
            store.commit("user/setPayData", {});
            common_vendor.index.redirectTo({
              url: "/pages/pay/scanPay"
            });
            return false;
          } else {
            store.commit("user/setTaskStatus", 5);
            common_vendor.index.redirectTo({
              url: "/pages/details/waybill"
            });
          }
        }
        common_vendor.index.redirectTo({
          url: "/pages/details/waybill"
        });
      }
    };
    const handleTransportOrderId = (val) => {
      keyword.value = val;
      search.value.searchVal = val;
      getList();
    };
    const goBack = () => {
      common_vendor.index.redirectTo({
        url: "/pages/index/index"
      });
    };
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.sr(search, "482e85b8-0", {
          "k": "search"
        }),
        b: common_vendor.o(handleSearch),
        c: common_vendor.o(handleBlur),
        d: common_vendor.o(clearSearchData),
        e: common_vendor.o(goBack),
        f: common_vendor.p({
          isShowCancel: common_vendor.unref(isShowCancel)
        }),
        g: !common_vendor.unref(isClear)
      }, !common_vendor.unref(isClear) ? common_vendor.e({
        h: common_vendor.o(handleClear),
        i: common_vendor.f(common_vendor.unref(listDataes).value, (item, index, i0) => {
          return {
            a: common_vendor.t(item),
            b: index,
            c: common_vendor.o(($event) => handleTransportOrderId(item), index)
          };
        }),
        j: !common_vendor.unref(showDisplay)
      }, !common_vendor.unref(showDisplay) ? common_vendor.e({
        k: itemDataRecent.length > 10
      }, itemDataRecent.length > 10 ? {
        l: common_vendor.o(($event) => common_vendor.isRef(showDisplay) ? showDisplay.value = !common_vendor.unref(showDisplay) : showDisplay = !common_vendor.unref(showDisplay))
      } : {}) : {}) : {}, {
        m: itemData.value.length > 0
      }, itemData.value.length > 0 ? {
        n: common_vendor.f(itemData.value, (item, index, i0) => {
          return {
            a: "482e85b8-1-" + i0,
            b: common_vendor.p({
              item
            }),
            c: "482e85b8-2-" + i0,
            d: common_vendor.p({
              item
            }),
            e: "482e85b8-3-" + i0,
            f: common_vendor.p({
              item
            }),
            g: "482e85b8-4-" + i0,
            h: common_vendor.p({
              item
            }),
            i: "482e85b8-5-" + i0,
            j: common_vendor.p({
              item
            }),
            k: index,
            l: common_vendor.o(($event) => handleDetails($event, item), index)
          };
        }),
        o: common_vendor.o(handleDetails),
        p: common_vendor.o(handleDetails),
        q: common_vendor.o(handleDetails),
        r: common_vendor.o(handleDetails),
        s: common_vendor.sr(loadMore, "482e85b8-6", {
          "k": "loadMore"
        })
      } : {}, {
        t: itemData.value.length === 0 && common_vendor.unref(isClear)
      }, itemData.value.length === 0 && common_vendor.unref(isClear) ? {
        v: common_vendor.p({
          emptyData: emptyData.value
        })
      } : {}, {
        w: common_vendor.sr(popups, "482e85b8-8", {
          "k": "popups"
        }),
        x: common_vendor.o(clearData),
        y: common_vendor.p({
          tipInfo: tipInfo.value
        })
      });
    };
  }
};
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-482e85b8"], ["__file", "E:/project/\u5C0F\u667A\u5E2E/project-xzb-app-uniapp-java\uFF08\u670D\u52A1\u7AEF\uFF09/pages/search/index.vue"]]);
wx.createPage(MiniProgramPage);
