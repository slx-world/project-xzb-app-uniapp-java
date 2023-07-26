"use strict";
var common_vendor = require("../../../common/vendor.js");
var utils_index = require("../../../utils/index.js");
var pages_api_news = require("../../api/news.js");
require("../../api/index.js");
require("../../../utils/request.js");
const _sfc_main = {
  __name: "notification",
  props: {
    tabIndex: {
      type: Number,
      default: 1
    }
  },
  emits: "getTabIndex",
  setup(__props, { expose, emit }) {
    let objData = common_vendor.ref({});
    common_vendor.onMounted(() => {
      getOjb();
    });
    const getOjb = async () => {
      await pages_api_news.getNotice().then((res) => {
        if (res.code === 200) {
          objData.value = res.data;
        }
      }).catch((err) => {
        return common_vendor.index.showToast({
          title: err.msg,
          duration: 1e3,
          icon: "none"
        });
      });
    };
    expose({
      getOjb
    });
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: __props.tabIndex === 1
      }, __props.tabIndex === 1 ? common_vendor.e({
        b: common_vendor.n(common_vendor.unref(objData).haveNewSendNotice ? "active" : ""),
        c: common_vendor.t(common_vendor.unref(objData).newSendNoticeTime ? "\u60A8\u6709\u4E00\u4E2A\u65B0\u7684\u53D6\u4EF6\u8BA2\u5355" : "\u6682\u65E0\u6D88\u606F"),
        d: common_vendor.unref(objData).newSendNoticeTime
      }, common_vendor.unref(objData).newSendNoticeTime ? {
        e: common_vendor.t(common_vendor.unref(utils_index.taskTimeFormat)(common_vendor.unref(objData).newSendNoticeTime))
      } : {}, {
        f: "/pages/news/system?title=\u53D6\u4EF6\u76F8\u5173&type=" + 301,
        g: common_vendor.n(common_vendor.unref(objData).haveNewDispatchNotice ? "active" : ""),
        h: common_vendor.t(common_vendor.unref(objData).newDispatchNoticeTime ? "\u60A8\u6709\u4E00\u4E2A\u65B0\u7684\u6D3E\u4EF6\u8BA2\u5355" : "\u6682\u65E0\u6D88\u606F"),
        i: common_vendor.unref(objData).newDispatchNoticeTime
      }, common_vendor.unref(objData).newDispatchNoticeTime ? {
        j: common_vendor.t(common_vendor.unref(utils_index.taskTimeFormat)(common_vendor.unref(objData).newDispatchNoticeTime))
      } : {}, {
        k: "/pages/news/system?title=\u6D3E\u4EF6\u76F8\u5173&type=" + 304,
        l: common_vendor.n(common_vendor.unref(objData).haveNewReceiveNotice ? "active" : ""),
        m: common_vendor.t(common_vendor.unref(objData).newReceiveNoticeTime ? "\u60A8\u6709\u4E00\u4E2A\u6D3E\u4EF6\u5DF2\u7B7E\u6536" : "\u6682\u65E0\u6D88\u606F"),
        n: common_vendor.unref(objData).newReceiveNoticeTime
      }, common_vendor.unref(objData).newReceiveNoticeTime ? {
        o: common_vendor.t(common_vendor.unref(utils_index.taskTimeFormat)(common_vendor.unref(objData).newReceiveNoticeTime))
      } : {}, {
        p: "/pages/news/system?title=\u7B7E\u6536\u63D0\u9192&type=" + 302,
        q: common_vendor.n(common_vendor.unref(objData).haveNewCancelNotice ? "active" : ""),
        r: common_vendor.t(common_vendor.unref(objData).newCancelNoticeTime ? "\u60A8\u6709\u4E00\u4E2A\u5FEB\u4EF6\u5DF2\u53D6\u6D88" : "\u6682\u65E0\u6D88\u606F"),
        s: common_vendor.unref(objData).newCancelNoticeTime
      }, common_vendor.unref(objData).newCancelNoticeTime ? {
        t: common_vendor.t(common_vendor.unref(utils_index.taskTimeFormat)(common_vendor.unref(objData).newCancelNoticeTime))
      } : {}, {
        v: "/pages/news/system?title=\u5FEB\u4EF6\u53D6\u6D88&type=" + 303
      }) : {});
    };
  }
};
var Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "E:/project/\u5C0F\u667A\u5E2E/project-xzb-app-uniapp-java\uFF08\u670D\u52A1\u7AEF\uFF09/pages/news/components/notification.vue"]]);
wx.createComponent(Component);
