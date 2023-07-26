"use strict";
var common_vendor = require("../../common/vendor.js");
var utils_uqrcode = require("../../utils/uqrcode.js");
var utils_commonData = require("../../utils/commonData.js");
var pages_api_index = require("../api/index.js");
require("../../utils/request.js");
if (!Math) {
  (UniNav + Uppop)();
}
const UniNav = () => "../../components/uni-nav/index.js";
const Uppop = () => "./components/uppop.js";
const _sfc_main = {
  __name: "scanPay",
  setup(__props) {
    const store = common_vendor.useStore();
    const users = store.state.user;
    const uppop = common_vendor.ref();
    const title = common_vendor.ref("\u626B\u7801\u652F\u4ED8");
    const pages = getCurrentPages();
    const currentPage = pages[pages.length - 1];
    currentPage.$page.options.type;
    const pay = currentPage.$page.options.pay;
    let current = common_vendor.ref(0);
    let qrCodeImg = common_vendor.ref("");
    let times = common_vendor.ref(null);
    let detailsData = common_vendor.ref({});
    let qrShow = common_vendor.ref(false);
    common_vendor.onMounted(() => {
      getDetails();
      times.value = setInterval(() => {
        getPaySucceed();
      }, 1e4);
    });
    const getPaySucceed = async () => {
      await pages_api_index.paySucceed(users.detailsData.orderId).then((res) => {
        if (res.code === 200) {
          if (res.data) {
            clearInterval(times.value);
            uppop.value.dialogOpen();
          }
        }
      });
    };
    const getDetails = async () => {
      await pages_api_index.getDetail(users.taskId).then((res) => {
        detailsData.value = res.data;
        store.commit("user/setDetailsData", detailsData.value);
        getCode(res.data);
      });
    };
    const getCode = async (obj) => {
      let data = users.payData;
      let params = {};
      if (data.tradingAmount) {
        params = {
          memo: data.memo ? data.memo : "\u5907\u6CE8",
          payMethod: current.value === 0 ? 2 : 1,
          productOrderNo: data.productOrderNo,
          tradingAmount: data.tradingAmount
        };
      } else {
        params = {
          memo: obj.remark ? obj.remark : "\u5907\u6CE8",
          payMethod: current.value === 0 ? 2 : 1,
          productOrderNo: obj.orderId,
          tradingAmount: obj.freight
        };
      }
      let times2 = setTimeout(() => {
        common_vendor.index.showLoading({
          title: "loading"
        });
      }, 500);
      await pages_api_index.getQrCode(params).then((res) => {
        common_vendor.index.hideLoading();
        clearTimeout(times2);
        const data2 = res.data;
        const str = data2.qrCode.slice(0, 10);
        if (str === "data:image") {
          qrCodeImg.value = data2.qrCode.replace(/[\r\n]/g, "");
        } else {
          qrCodeFun(data2.qrCode);
        }
      });
    };
    const qrCodeFun = (valUrl) => {
      qrShow.value = true;
      utils_uqrcode.uQRCode.make({
        canvasId: "qrcode",
        componentInstance: this,
        text: valUrl,
        size: 200,
        margin: 0,
        backgroundColor: "#ffffff",
        foregroundColor: "#000000",
        fileType: "jpg",
        errorCorrectLevel: utils_uqrcode.uQRCode.errorCorrectLevel.H,
        success: (res) => {
        }
      });
    };
    const checkbox = (index) => {
      current.value = index;
      getCode(detailsData.value);
    };
    const goBack = () => {
      clearInterval(times.value);
      if (users.isDelivery) {
        if (users.detailType === 2 && users.taskStatus === 6) {
          store.commit("user/setTabIndex", 1);
          common_vendor.index.redirectTo({
            url: "/pages/history/index"
          });
        } else if (users.detailType === 0 && users.taskStatus === 5) {
          store.commit("user/setTabIndex", 1);
          common_vendor.index.redirectTo({
            url: "/pages/delivery/index"
          });
        } else if (users.isPickUp && users.paymentMethod === 2 && !pay) {
          common_vendor.index.redirectTo({
            url: "/pages/details/waybill"
          });
        } else {
          common_vendor.index.redirectTo({
            url: "/pages/pay/index?type=" + users.paymentMethod
          });
          pay = false;
        }
      } else {
        if (users.detailType === 1 && users.taskStatus === 6) {
          store.commit("user/setTabIndex", 0);
          common_vendor.index.redirectTo({
            url: "/pages/history/index"
          });
        } else if (users.detailType === 2 && users.taskStatus === 3 && !users.isSearch) {
          store.commit("user/setTabIndex", 1);
          common_vendor.index.redirectTo({
            url: "/pages/pickup/index"
          });
        } else if (users.isPickUp && users.paymentMethod === 1 && !pay) {
          common_vendor.index.redirectTo({
            url: "/pages/details/index"
          });
        } else if (users.isSearch) {
          store.commit("user/setIsSearch", false);
          common_vendor.index.redirectTo({
            url: "/pages/search/index"
          });
        } else {
          common_vendor.index.redirectTo({
            url: "/pages/pay/index?type=" + users.paymentMethod
          });
          pay = false;
        }
      }
    };
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.o(goBack),
        b: common_vendor.p({
          title: title.value
        }),
        c: common_vendor.unref(qrShow)
      }, common_vendor.unref(qrShow) ? {} : {
        d: common_vendor.unref(qrCodeImg)
      }, {
        e: common_vendor.t(common_vendor.unref(detailsData).freight),
        f: common_vendor.f(common_vendor.unref(utils_commonData.PayWayData), (item, index, i0) => {
          return {
            a: common_vendor.t(item.label),
            b: String(index),
            c: common_vendor.n(index === common_vendor.unref(current) ? "active" : ""),
            d: index === common_vendor.unref(current),
            e: common_vendor.o(($event) => checkbox(index)),
            f: index
          };
        }),
        g: common_vendor.sr(uppop, "a4052eca-1", {
          "k": "uppop"
        })
      });
    };
  }
};
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-a4052eca"], ["__file", "E:/project/\u5C0F\u667A\u5E2E/project-xzb-app-uniapp-java\uFF08\u670D\u52A1\u7AEF\uFF09/pages/pay/scanPay.vue"]]);
wx.createPage(MiniProgramPage);
