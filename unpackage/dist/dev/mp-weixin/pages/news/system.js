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
var utils_index = require("../../utils/index.js");
var pages_api_news = require("../api/news.js");
require("../api/index.js");
require("../../utils/request.js");
if (!Math) {
  (UniNav + ReachBottom + EmptyPage)();
}
const UniNav = () => "../../components/uni-nav/index.js";
const EmptyPage = () => "../../components/uni-empty-page/index.js";
const ReachBottom = () => "../../components/reach-bottom/index.js";
const _sfc_main = {
  __name: "system",
  setup(__props) {
    const store = common_vendor.useStore();
    const users = store.state.user;
    const pages = getCurrentPages();
    const currentPage = pages[pages.length - 1].$page.options;
    const title = currentPage.title;
    const type = currentPage.type;
    const loadMore = common_vendor.ref();
    const emptyData = common_vendor.ref("\u6682\u65E0\u6D88\u606F");
    const rithtText = common_vendor.ref("\u5168\u90E8\u5DF2\u8BFB");
    common_vendor.ref(1);
    let totals = common_vendor.ref(0);
    let pageNum = common_vendor.ref(1);
    let page = common_vendor.reactive({
      contentType: type,
      page: 1,
      pageSize: 10
    });
    let reload = common_vendor.ref(false);
    let scrollH = common_vendor.ref(null);
    let isReadAll = common_vendor.ref(false);
    let itemData = common_vendor.ref([]);
    let ids = common_vendor.ref([]);
    common_vendor.onReachBottom(() => {
      if (pageNum.value >= Number(totals.value)) {
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
    common_vendor.onMounted(() => {
      getList();
      common_vendor.index.getSystemInfo({
        success: (res) => {
          scrollH.value = res.windowHeight - common_vendor.index.upx2px();
        }
      });
    });
    const getList = async () => {
      reload.value = true;
      page = __spreadProps(__spreadValues({}, page), {
        page: pageNum.value
      });
      await pages_api_news.getMessagesList(page).then((res) => {
        if (res.code === 200) {
          if (res.data) {
            reload.value = false;
            itemData.value = itemData.value.concat(res.data.items);
            itemData.value.map((val) => {
              if (val.isRead === 0) {
                ids.value.push(val.id);
              }
            });
            totals.value = res.data.pages;
            if (Number(res.data.pages) === pageNum.value) {
              loadMore.value.status = "noMore";
            }
          } else {
            itemData.value = [];
          }
        }
      });
    };
    const handleDetail = async (item) => {
      store.commit("user/setTaskId", item.relevantId);
      store.commit("user/setTabIndex", 0);
      ids.value = [];
      ids.value.push(item.id);
      await pages_api_news.msgRead(item.id).then((res) => {
      });
      if (title === "\u53D6\u4EF6\u76F8\u5173") {
        store.commit("user/setNewType", 301);
        if (item.status === 1) {
          common_vendor.index.navigateTo({
            url: "/pages/details/index"
          });
        } else {
          common_vendor.index.navigateTo({
            url: "/pages/details/waybill"
          });
          store.commit("user/setIsNew", true);
        }
      } else if (title === "\u6D3E\u4EF6\u76F8\u5173") {
        if (item.status === 2) {
          store.commit("user/setTaskStatus", 5);
          store.commit("user/setIsNew", true);
        } else {
          store.commit("user/setTaskStatus", 4);
        }
        store.commit("user/setNewType", 304);
        common_vendor.index.navigateTo({
          url: "/pages/details/waybill"
        });
      } else if (title === "\u7B7E\u6536\u63D0\u9192") {
        store.commit("user/setTaskStatus", 5);
        store.commit("user/setNewType", 302);
        common_vendor.index.navigateTo({
          url: "/pages/details/waybill"
        });
        store.commit("user/setIsNew", true);
      } else {
        store.commit("user/setTaskStatus", null);
        store.commit("user/setNewType", 303);
        common_vendor.index.navigateTo({
          url: "/pages/details/waybill"
        });
      }
    };
    const handleAll = async () => {
      let contentType = null;
      if (title === "\u53D6\u4EF6\u76F8\u5173") {
        contentType = 301;
      } else if (title === "\u6D3E\u4EF6\u76F8\u5173") {
        contentType = 304;
      } else if (title === "\u7B7E\u6536\u63D0\u9192") {
        contentType = 302;
      } else {
        contentType = 303;
      }
      await pages_api_news.msgAllRead(contentType).then((res) => {
        itemData.value = [];
        pageNum.value = 1;
        getList();
      }).catch((err) => {
        isReadAll.value = true;
        return common_vendor.index.showToast({
          title: err.msg,
          duration: 1e3,
          icon: "none"
        });
      });
    };
    const goBack = () => {
      store.commit("user/setTabIndex", 1);
      if (users.taskStatus === -1) {
        common_vendor.index.redirectTo({
          url: "/pages/index/index"
        });
      } else {
        common_vendor.index.redirectTo({
          url: "/pages/news/index"
        });
      }
      store.commit("user/setTaskStatus", 0);
    };
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.o(goBack),
        b: common_vendor.o(handleAll),
        c: common_vendor.p({
          title: common_vendor.unref(title),
          rithtText: rithtText.value
        }),
        d: common_vendor.unref(itemData).length > 0
      }, common_vendor.unref(itemData).length > 0 ? {
        e: common_vendor.f(common_vendor.unref(itemData), (item, index, i0) => {
          return common_vendor.e(common_vendor.unref(title) === "\u53D6\u4EF6\u76F8\u5173" ? {} : common_vendor.unref(title) === "\u6D3E\u4EF6\u76F8\u5173" ? {} : common_vendor.unref(title) === "\u7B7E\u6536\u63D0\u9192" ? {} : {}, {
            a: common_vendor.n(item.isRead === 0 ? "active" : ""),
            b: common_vendor.t(item.content),
            c: common_vendor.t(common_vendor.unref(utils_index.taskTimeFormat)(item.created)),
            d: common_vendor.o(($event) => handleDetail(item)),
            e: index
          });
        }),
        f: common_vendor.unref(title) === "\u53D6\u4EF6\u76F8\u5173",
        g: common_vendor.unref(title) === "\u6D3E\u4EF6\u76F8\u5173",
        h: common_vendor.unref(title) === "\u7B7E\u6536\u63D0\u9192",
        i: common_vendor.sr(loadMore, "67cbd0fc-1", {
          "k": "loadMore"
        }),
        j: common_vendor.unref(scrollH) + "px"
      } : {
        k: common_vendor.p({
          emptyData: emptyData.value
        })
      });
    };
  }
};
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-67cbd0fc"], ["__file", "E:/project/\u5C0F\u667A\u5E2E/project-xzb-app-uniapp-java\uFF08\u670D\u52A1\u7AEF\uFF09/pages/news/system.vue"]]);
wx.createPage(MiniProgramPage);
