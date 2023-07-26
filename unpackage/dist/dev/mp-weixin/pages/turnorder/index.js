"use strict";
var common_vendor = require("../../common/vendor.js");
var pages_api_index = require("../api/index.js");
require("../../utils/request.js");
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  _easycom_uni_icons2();
}
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
if (!Math) {
  (_easycom_uni_icons + ReachBottom + EmptyPage + UniPopup)();
}
const ReachBottom = () => "../../components/reach-bottom/index.js";
const UniPopup = () => "../../components/uni-popup/index.js";
const EmptyPage = () => "../../components/uni-empty-page/index.js";
const _sfc_main = {
  __name: "index",
  setup(__props) {
    const store = common_vendor.useStore();
    const users = store.state.user;
    const loadMore = common_vendor.ref();
    let popup = common_vendor.ref();
    let isShowCancel = common_vendor.ref(true);
    const tipInfo = common_vendor.ref("\u786E\u5B9A\u8981\u8F6C\u5355\u5417\uFF1F");
    let reload = common_vendor.ref(false);
    let pages = common_vendor.ref(0);
    let pageNum = common_vendor.ref(1);
    const emptyData = common_vendor.ref("\u6682\u65E0\u6392\u73ED\u5185\u5FEB\u9012\u5458");
    const anotherCourierId = common_vendor.ref("");
    const searchVal = common_vendor.ref("");
    let page = common_vendor.reactive({
      keyword: "",
      page: 1,
      pageSize: 10
    });
    let itemData = common_vendor.ref([]);
    common_vendor.onReachBottom(() => {
      if (pageNum.value >= pages.value) {
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
    const getList = async () => {
      reload.value = true;
      await pages_api_index.getSameAgency(page).then((res) => {
        if (res.code === 200) {
          if (res.data) {
            reload.value = false;
            if (res.data.items) {
              itemData.value = itemData.value.concat(res.data.items);
              pages.value = res.data.pages;
              if (Number(pages.value) === pageNum.value) {
                loadMore.value.status = "noMore";
              }
            }
          } else {
            itemData.value = null;
          }
        }
      });
    };
    const handleOpen = (id) => {
      anotherCourierId.value = id;
      popup.value.dialogOpen();
    };
    const handleClick = async () => {
      let ids = [];
      for (const [key, value] of users.selectTaskData) {
        ids.push(value);
      }
      let params = {
        anotherCourierId: anotherCourierId.value,
        idList: ids
      };
      await pages_api_index.transferBatch(params).then((res) => {
        if (res.code === 200) {
          common_vendor.index.navigateTo({
            url: "/pages/pickup/index"
          });
          return common_vendor.index.showToast({
            title: "\u8F6C\u5355\u6210\u529F!",
            duration: 1e3,
            icon: "none"
          });
        }
      });
    };
    const handleSearch = () => {
      page.keyword = searchVal.value;
      itemData.value = [];
      getList();
    };
    const handleCancel = () => {
      searchVal.value = "";
      store.commit("user/setIsDelivery", false);
      store.commit("user/setTabIndex", 0);
      clearData();
      if (users.isDelivery) {
        common_vendor.index.redirectTo({
          url: "/pages/delivery/index"
        });
      } else {
        common_vendor.index.redirectTo({
          url: "/pages/pickup/index"
        });
      }
    };
    const clearData = () => {
      store.commit("user/setDeliveryData", []);
      store.commit("user/setPages", 0);
      store.commit("user/setSelectTaskData", /* @__PURE__ */ new Map());
    };
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.p({
          type: "search",
          size: "18",
          color: "#999"
        }),
        b: common_vendor.o([($event) => searchVal.value = $event.detail.value, handleSearch]),
        c: searchVal.value,
        d: common_vendor.unref(isShowCancel)
      }, common_vendor.unref(isShowCancel) ? {
        e: common_vendor.o(handleCancel)
      } : {}, {
        f: common_vendor.unref(itemData).length > 0
      }, common_vendor.unref(itemData).length > 0 ? {
        g: common_vendor.f(common_vendor.unref(itemData), (item, index, i0) => {
          return {
            a: common_vendor.t(item.employeeNumber),
            b: common_vendor.t(item.name),
            c: index,
            d: common_vendor.o(($event) => handleOpen(item.userId), index)
          };
        }),
        h: common_vendor.sr(loadMore, "566d70cb-1", {
          "k": "loadMore"
        })
      } : {
        i: common_vendor.p({
          emptyData: emptyData.value,
          emptyImage: "emptyImage"
        })
      }, {
        j: common_vendor.sr(popup, "566d70cb-3", {
          "k": "popup"
        }),
        k: common_vendor.o(handleClick),
        l: common_vendor.p({
          tipInfo: tipInfo.value
        })
      });
    };
  }
};
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-566d70cb"], ["__file", "E:/project/\u5C0F\u667A\u5E2E/project-xzb-app-uniapp-java\uFF08\u670D\u52A1\u7AEF\uFF09/pages/turnorder/index.vue"]]);
wx.createPage(MiniProgramPage);
