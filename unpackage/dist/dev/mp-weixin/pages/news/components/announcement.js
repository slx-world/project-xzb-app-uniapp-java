"use strict";
var common_vendor = require("../../../common/vendor.js");
var utils_index = require("../../../utils/index.js");
var utils_commonData = require("../../../utils/commonData.js");
var pages_api_news = require("../../api/news.js");
require("../../api/index.js");
require("../../../utils/request.js");
if (!Math) {
  EmptyPage();
}
const EmptyPage = () => "../../../components/uni-empty-page/index.js";
const _sfc_main = {
  __name: "announcement",
  props: {
    tabIndex: {
      type: Number,
      default: 0
    }
  },
  emits: "handleSearch",
  setup(__props, { expose, emit }) {
    common_vendor.ref("");
    common_vendor.ref(false);
    common_vendor.onMounted(() => {
    });
    const getList = async () => {
      await pages_api_news.getNewList("300").then((res) => {
        if (res.code === 200) {
          itemData.value = res.data;
        }
      }).catch((err) => {
        return common_vendor.index.showToast({
          title: err.msg,
          duration: 1e3,
          icon: "none"
        });
      });
    };
    const handleClick = async (item) => {
      common_vendor.index.navigateTo({
        url: "/pages/news/detail?obj=" + JSON.stringify(item)
      });
    };
    expose({
      getList
    });
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: __props.tabIndex === 0
      }, __props.tabIndex === 0 ? common_vendor.e({
        b: common_vendor.unref(utils_commonData.newItemData).length > 0
      }, common_vendor.unref(utils_commonData.newItemData).length > 0 ? {
        c: common_vendor.f(common_vendor.unref(utils_commonData.newItemData), (item, index, i0) => {
          return {
            a: common_vendor.t(item.title),
            b: common_vendor.t(common_vendor.unref(utils_index.taskTimeFormat)(item.created)),
            c: common_vendor.o(($event) => handleClick(item)),
            d: index
          };
        })
      } : {
        d: common_vendor.p({
          emptyData: _ctx.emptyData
        })
      }) : {});
    };
  }
};
var Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "E:/project/\u5C0F\u667A\u5E2E/project-xzb-app-uniapp-java\uFF08\u670D\u52A1\u7AEF\uFF09/pages/news/components/announcement.vue"]]);
wx.createComponent(Component);
