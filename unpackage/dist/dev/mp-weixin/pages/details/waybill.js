"use strict";
var common_vendor = require("../../common/vendor.js");
var pages_api_index = require("../api/index.js");
var utils_index = require("../../utils/index.js");
require("../../utils/request.js");
if (!Math) {
  (UniNav + Address + Uppop)();
}
const UniNav = () => "../../components/uni-nav/index.js";
const Address = () => "./components/address.js";
const Uppop = () => "./components/uppop.js";
const _sfc_main = {
  __name: "waybill",
  emits: "",
  setup(__props, { emit }) {
    const store = common_vendor.useStore();
    const users = store.state.user;
    const taskStatus = users.taskStatus;
    const sign = common_vendor.ref();
    const taskId = users.taskId;
    const title = users.taskStatus === 4 || taskStatus === 0 && users.taskType === 2 ? "\u53BB\u6D3E\u4EF6" : "\u8FD0\u5355\u8BE6\u60C5";
    let detailsData = common_vendor.ref({});
    let type = common_vendor.ref(0);
    let isPickUp = common_vendor.ref(false);
    common_vendor.ref(false);
    let isSign = common_vendor.ref(false);
    const stopClick = common_vendor.ref(false);
    common_vendor.onMounted(() => {
      getDetails(taskId);
      if (users.isPickUp) {
        isPickUp.value = true;
      } else {
        isPickUp.value = false;
      }
      if (users.isSign) {
        isSign.value = true;
      } else {
        isSign.value = false;
      }
    });
    const getDetails = async (id) => {
      await pages_api_index.getDetail(id).then((res) => {
        detailsData.value = res.data;
        store.commit("user/setPaymentMethod", detailsData.value.paymentMethod);
        store.commit("user/setDetailsData", res.data);
      });
    };
    const handleRejection = async (id) => {
      if (stopClick.value) {
        return;
      }
      stopClick.value = true;
      let times = setTimeout(() => {
        common_vendor.index.showLoading({
          title: "loading"
        });
      }, 500);
      await pages_api_index.rejection(id).then((res) => {
        if (res.code === 200) {
          utils_index.positionUploadHandle(true);
          setTimeout(function() {
            common_vendor.index.hideLoading();
          }, 500);
          clearTimeout(times);
          setTimeout(() => {
            if (taskStatus === 6 && users.detailType === 2) {
              store.commit("user/setTabIndex", 1);
              common_vendor.index.redirectTo({
                url: "/pages/history/index"
              });
            } else {
              store.commit("user/setTabIndex", 0);
              common_vendor.index.redirectTo({
                url: "/pages/delivery/index"
              });
            }
          }, 1e3);
          common_vendor.index.showToast({
            title: "\u7528\u6237\u62D2\u6536",
            icon: "none",
            duration: "1000"
          });
        }
        stopClick.value = false;
      }).catch((err) => {
        common_vendor.index.showToast({
          title: err.msg,
          icon: "none",
          duration: "1000"
        });
      });
    };
    const handleSign = async (id) => {
      if (stopClick.value) {
        return;
      }
      stopClick.value = true;
      let times = setTimeout(() => {
        common_vendor.index.showLoading({
          title: "loading"
        });
      }, 500);
      const params = {
        id,
        signRecipient: detailsData.value.signRecipient
      };
      await pages_api_index.tasksSign(params).then((res) => {
        if (res.code === 200) {
          utils_index.positionUploadHandle(true);
          setTimeout(function() {
            common_vendor.index.hideLoading();
          }, 500);
          clearTimeout(times);
          const type2 = detailsData.value.paymentMethod;
          common_vendor.index.redirectTo({
            url: "/pages/pay/index?type=" + type2
          });
          store.commit("user/setIsPickUp", true);
          store.commit("user/setIsDelivery", true);
        }
        stopClick.value = false;
      });
    };
    const handleCopy = () => {
      common_vendor.index.setClipboardData({
        data: detailsData.value.orderId,
        success: function() {
          common_vendor.index.showToast({
            title: "\u590D\u5236\u6210\u529F",
            icon: "none"
          });
        }
      });
    };
    const getSignType = (val) => {
      detailsData.value.signRecipient = val;
    };
    const handleSignOpen = () => {
      type.value = 4;
      sign.value.dialogOpen();
    };
    const handleOrder = () => {
      common_vendor.index.redirectTo({
        url: "/pages/details/orderMap"
      });
    };
    const goBack = () => {
      store.commit("user/setIsPickUp", false);
      store.commit("user/setIsSign", false);
      store.commit("user/setIsDelivery", false);
      if (taskStatus === 1 || taskStatus === 2 || taskStatus === 3) {
        if (taskStatus === 1) {
          store.commit("user/setTabIndex", 0);
        } else if (taskStatus === 2) {
          store.commit("user/setTabIndex", 1);
        } else {
          store.commit("user/setTabIndex", 2);
        }
        if (users.isSearch) {
          store.commit("user/setIsSearch", false);
          common_vendor.index.redirectTo({
            url: "/pages/search/index"
          });
        } else {
          common_vendor.index.redirectTo({
            url: "/pages/pickup/index"
          });
        }
      } else if (taskStatus === 5 && users.newType !== 302 && !users.isNew || taskStatus === 4 && users.detailType !== 2 && users.newType !== 304) {
        if (taskStatus === 4) {
          store.commit("user/setTabIndex", 0);
        } else {
          store.commit("user/setTabIndex", 1);
        }
        if (users.isSearch) {
          store.commit("user/setIsSearch", false);
          common_vendor.index.redirectTo({
            url: "/pages/search/index"
          });
        } else {
          common_vendor.index.redirectTo({
            url: "/pages/delivery/index"
          });
        }
      } else if ((taskStatus === 6 || taskStatus === 4) && users.detailType === 2 || users.detailType === 1 && users.newType !== 302 || taskStatus === 6 && users.detailType === 1) {
        if (taskStatus === 6 && users.detailType === 1) {
          store.commit("user/setTabIndex", 0);
        }
        if (taskStatus === 6 && users.detailType === 2) {
          store.commit("user/setTabIndex", 1);
        }
        common_vendor.index.redirectTo({
          url: "/pages/history/index"
        });
        if (taskStatus === 4 && users.detailType === 2) {
          store.commit("user/setTabIndex", 1);
          if (users.isSearch) {
            store.commit("user/setIsSearch", false);
            common_vendor.index.redirectTo({
              url: "/pages/search/index"
            });
          } else {
            common_vendor.index.redirectTo({
              url: "/pages/history/index"
            });
          }
        }
        if (taskStatus === 4 && users.detailType === 1) {
          store.commit("user/setTabIndex", 0);
          common_vendor.index.redirectTo({
            url: "/pages/delivery/index"
          });
        }
      } else if (users.newType === 301) {
        common_vendor.index.redirectTo({
          url: "/pages/news/system?title=\u53D6\u4EF6\u76F8\u5173&type=301"
        });
      } else if (users.newType === 302) {
        common_vendor.index.redirectTo({
          url: "/pages/news/system?title=\u7B7E\u6536\u63D0\u9192&type=302"
        });
      } else if (users.newType === 303) {
        common_vendor.index.redirectTo({
          url: "/pages/news/system?title=\u5FEB\u4EF6\u53D6\u6D88&type=303"
        });
      } else if (users.newType === 304) {
        common_vendor.index.redirectTo({
          url: "/pages/news/system?title=\u6D3E\u4EF6\u76F8\u5173&type=304"
        });
      } else {
        store.commit("user/setTabIndex", 0);
        common_vendor.index.redirectTo({
          url: "/pages/delivery/index"
        });
      }
      store.commit("user/setIsNew", false);
    };
    const handleReceipt = () => {
      store.commit("user/setPayData", {});
      common_vendor.index.redirectTo({
        url: "/pages/pay/scanPay"
      });
    };
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.o(goBack),
        b: common_vendor.p({
          title: common_vendor.unref(title)
        }),
        c: common_vendor.unref(taskStatus) === 4 || common_vendor.unref(taskStatus) === 5
      }, common_vendor.unref(taskStatus) === 4 || common_vendor.unref(taskStatus) === 5 ? {
        d: common_vendor.t(common_vendor.unref(detailsData).transportOrderId)
      } : {
        e: common_vendor.t(common_vendor.unref(detailsData).orderId)
      }, {
        f: common_vendor.o(handleCopy),
        g: common_vendor.p({
          detailsData: common_vendor.unref(detailsData)
        }),
        h: common_vendor.t(common_vendor.unref(detailsData).goodsType),
        i: common_vendor.t(common_vendor.unref(detailsData).weight),
        j: common_vendor.t(common_vendor.unref(detailsData).volume),
        k: common_vendor.t(common_vendor.unref(detailsData).freight),
        l: common_vendor.t(common_vendor.unref(detailsData).remark ? common_vendor.unref(detailsData).remark : "\u6682\u65E0"),
        m: common_vendor.t(common_vendor.unref(detailsData).paymentMethod === 1 ? "\u5BC4\u4ED8" : "\u5230\u4ED8"),
        n: common_vendor.unref(taskStatus) === 5
      }, common_vendor.unref(taskStatus) === 5 ? {
        o: common_vendor.t(common_vendor.unref(detailsData).paymentMethod === 1 ? "\u672C\u4EBA" : "\u4EE3\u6536")
      } : {}, {
        p: common_vendor.unref(detailsData).taskType === 2 && common_vendor.unref(detailsData).status === 1
      }, common_vendor.unref(detailsData).taskType === 2 && common_vendor.unref(detailsData).status === 1 ? common_vendor.e({
        q: common_vendor.unref(isSign) && common_vendor.unref(detailsData).paymentMethod == 1 || common_vendor.unref(isPickUp) && common_vendor.unref(detailsData).paymentMethod === 2
      }, common_vendor.unref(isSign) && common_vendor.unref(detailsData).paymentMethod == 1 || common_vendor.unref(isPickUp) && common_vendor.unref(detailsData).paymentMethod === 2 ? {
        r: common_vendor.t(common_vendor.unref(detailsData).signRecipient === 1 ? "\u672C\u4EBA" : "\u4EE3\u6536")
      } : {
        s: common_vendor.t(common_vendor.unref(detailsData).signRecipient === 1 ? "\u672C\u4EBA" : "\u4EE3\u6536"),
        t: common_vendor.o(handleSignOpen)
      }) : {}, {
        v: common_vendor.unref(detailsData).taskType === 2
      }, common_vendor.unref(detailsData).taskType === 2 ? common_vendor.e({
        w: common_vendor.unref(detailsData).status === 1
      }, common_vendor.unref(detailsData).status === 1 ? common_vendor.e({
        x: common_vendor.unref(detailsData).signStatus !== 1
      }, common_vendor.unref(detailsData).signStatus !== 1 ? {
        y: common_vendor.o(($event) => handleRejection(common_vendor.unref(detailsData).id))
      } : {}, {
        z: common_vendor.unref(detailsData).signStatus !== 1
      }, common_vendor.unref(detailsData).signStatus !== 1 ? {
        A: common_vendor.o(($event) => handleSign(common_vendor.unref(detailsData).id))
      } : {}) : common_vendor.e({
        B: common_vendor.unref(isPickUp) && common_vendor.unref(detailsData).paymentStatus === 1 && common_vendor.unref(detailsData).paymentMethod === 2 && common_vendor.unref(detailsData).signStatus === 1
      }, common_vendor.unref(isPickUp) && common_vendor.unref(detailsData).paymentStatus === 1 && common_vendor.unref(detailsData).paymentMethod === 2 && common_vendor.unref(detailsData).signStatus === 1 ? {
        C: common_vendor.o(handleReceipt)
      } : {}, {
        D: common_vendor.unref(isSign) && common_vendor.unref(detailsData).signStatus === 1
      }, common_vendor.unref(isSign) && common_vendor.unref(detailsData).signStatus === 1 ? {} : {}, {
        E: common_vendor.unref(detailsData).status === 2
      }, common_vendor.unref(detailsData).status === 2 ? common_vendor.e({
        F: !common_vendor.unref(isPickUp) && !common_vendor.unref(isSign) && common_vendor.unref(detailsData).paymentMethod === 1 || common_vendor.unref(users).isNew || !common_vendor.unref(isPickUp) && !common_vendor.unref(isSign) && common_vendor.unref(detailsData).paymentMethod === 2 && common_vendor.unref(detailsData).paymentStatus === 1 || !common_vendor.unref(isPickUp) && !common_vendor.unref(isSign) && common_vendor.unref(detailsData).paymentMethod === 2 && common_vendor.unref(detailsData).paymentStatus === 2 && common_vendor.unref(detailsData).signStatus == 1
      }, !common_vendor.unref(isPickUp) && !common_vendor.unref(isSign) && common_vendor.unref(detailsData).paymentMethod === 1 || common_vendor.unref(users).isNew || !common_vendor.unref(isPickUp) && !common_vendor.unref(isSign) && common_vendor.unref(detailsData).paymentMethod === 2 && common_vendor.unref(detailsData).paymentStatus === 1 || !common_vendor.unref(isPickUp) && !common_vendor.unref(isSign) && common_vendor.unref(detailsData).paymentMethod === 2 && common_vendor.unref(detailsData).paymentStatus === 2 && common_vendor.unref(detailsData).signStatus == 1 ? {
        G: common_vendor.o(handleOrder)
      } : {}) : {})) : common_vendor.e({
        H: common_vendor.unref(detailsData).status === 2
      }, common_vendor.unref(detailsData).status === 2 ? {
        I: common_vendor.o(handleOrder)
      } : {}), {
        J: common_vendor.sr(sign, "6bc258c0-2", {
          "k": "sign"
        }),
        K: common_vendor.o(getSignType),
        L: common_vendor.p({
          type: common_vendor.unref(type)
        })
      });
    };
  }
};
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-6bc258c0"], ["__file", "E:/project/\u5C0F\u667A\u5E2E/project-xzb-app-uniapp-java\uFF08\u670D\u52A1\u7AEF\uFF09/pages/details/waybill.vue"]]);
wx.createPage(MiniProgramPage);
