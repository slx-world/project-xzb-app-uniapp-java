"use strict";
var common_vendor = require("../../common/vendor.js");
var pages_api_index = require("../api/index.js");
require("../../utils/request.js");
if (!Math) {
  (UniNav + Address + GoodsInfo + Authentication + Uppop)();
}
const UniNav = () => "../../components/uni-nav/index.js";
const Address = () => "./components/address.js";
const GoodsInfo = () => "../../components/uni-goods/index.js";
const Authentication = () => "./components/authentication.js";
const Uppop = () => "./components/uppop.js";
const _sfc_main = {
  __name: "index",
  emits: "",
  setup(__props, { emit }) {
    const store = common_vendor.useStore();
    const users = store.state.user;
    const goods = common_vendor.ref();
    const card = common_vendor.ref();
    const method = common_vendor.ref();
    const taskId = store.state.user.taskId;
    const title = common_vendor.ref("\u53BB\u53D6\u4EF6");
    let type = common_vendor.ref(1);
    const detailsData = common_vendor.ref({});
    let isFreigthEdit = common_vendor.ref(false);
    let freight = common_vendor.ref(0);
    let isPickUp = common_vendor.ref(false);
    let isCollect = common_vendor.ref(false);
    const stopClick = common_vendor.ref(true);
    common_vendor.watch(freight, (newValue, oldValue) => {
      const val = Number(newValue);
      common_vendor.nextTick(() => {
        if (val < 99999 && val > 1) {
          freight.value = parseInt(val * 100) / 100;
        }
        if (val > 99999) {
          freight.value = 99999;
        }
      });
    });
    common_vendor.onMounted(() => {
      getDetails(taskId);
      if (users.isPickUp) {
        isPickUp.value = true;
      } else {
        isPickUp.value = false;
      }
      if (users.isCollect) {
        isCollect.value = true;
      } else {
        isCollect.value = false;
      }
    });
    const getDetails = async (id) => {
      await pages_api_index.getDetail(id).then((res) => {
        detailsData.value = res.data;
        freight.value = detailsData.value.freight;
        if (users.paymentMethod) {
          if (users.paymentMethod === 1) {
            detailsData.value.paymentMethod = 1;
          } else {
            detailsData.value.paymentMethod = 2;
          }
        }
        goods.value.weight = Number(detailsData.value.weight);
        goods.value.volume = Number(detailsData.value.volume);
        store.commit("user/setPaymentMethod", detailsData.value.paymentMethod);
        store.commit("user/setDetailsData", res.data);
      });
    };
    const handleSubmit = async () => {
      if (stopClick.value) {
        stopClick.value = false;
        const cards = card.value;
        const good = goods.value;
        if (!cards.isValidate && detailsData.value.idCardNoVerify !== 1) {
          stopClick.value = true;
          return common_vendor.index.showToast({
            title: "\u8BF7\u8F93\u5165\u6B63\u786E\u7684\u8EAB\u4EFD\u8BC1",
            duration: 1e3,
            icon: "none"
          });
        } else {
          let times = setTimeout(() => {
            common_vendor.index.showLoading({
              title: "loading"
            });
          }, 500);
          const details = detailsData.value;
          if (freight.value !== 0) {
            details.freight = freight.value;
          }
          const params = {
            amount: good.freightData ? good.freightData : Number(details.freight),
            id: taskId,
            goodName: details.goodsType,
            idCard: details.idCardNoVerify === 1 ? null : cards.idCard,
            name: details.idCardNoVerify === 1 ? null : cards.name,
            payMethod: details.paymentMethod,
            remark: details.remark,
            volume: Number(good.volume),
            weight: good.weight
          };
          const payData = {
            memo: details.remark,
            productOrderNo: details.orderId,
            tradingAmount: params.amount
          };
          store.commit("user/setPayData", payData);
          await pages_api_index.getPickup(params).then((res) => {
            if (res.code === 200) {
              setTimeout(function() {
                common_vendor.index.hideLoading();
              }, 500);
              clearTimeout(times);
            }
            setTimeout(() => {
              stopClick.value = true;
            }, 3e3);
          }).catch((err) => {
            return common_vendor.index.showToast({
              title: err.msg,
              duration: 1e3,
              icon: "none"
            });
          });
          const type2 = details.paymentMethod;
          common_vendor.index.redirectTo({
            url: "/pages/pay/index?type=" + type2
          });
          store.commit("user/setIsPickUp", true);
        }
      }
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
    const handleFreight = () => {
      isFreigthEdit.value = true;
    };
    const getFreight = (val) => {
      detailsData.value.freight = val;
      freight.value = detailsData.value.freight;
    };
    const handleAmount = () => {
      common_vendor.nextTick(() => {
        if (freight.value < 1) {
          freight.value = 1;
        }
      });
    };
    const getGoodType = (val) => {
      detailsData.value.goodsType = val;
    };
    const handleGoods = () => {
      type.value = 1;
      handleOpen();
    };
    const getPayMethod = (val) => {
      if (val === "\u5BC4\u4ED8") {
        detailsData.value.paymentMethod = 1;
      } else {
        detailsData.value.paymentMethod = 2;
      }
      store.commit("user/setPaymentMethod", detailsData.value.paymentMethod);
    };
    const handlePayMethod = () => {
      type.value = 2;
      handleOpen();
    };
    const getRemark = (val) => {
      detailsData.value.remark = val;
    };
    const handleRemark = () => {
      if (users.isBack !== "collect") {
        type.value = 3;
        handleOpen();
      }
    };
    const handleOpen = () => {
      method.value.dialogOpen();
    };
    const goBack = () => {
      store.commit("user/setPaymentMethod", null);
      store.commit("user/setCardData", null);
      store.commit("user/setIsPickUp", false);
      store.commit("user/setIsCollect", false);
      if (users.newType === 301) {
        common_vendor.index.redirectTo({
          url: "/pages/news/system?title=\u53D6\u4EF6\u76F8\u5173&type=301"
        });
      } else if (users.detailType === 1) {
        store.commit("user/setTabIndex", 0);
        common_vendor.index.redirectTo({
          url: "/pages/history/index"
        });
      } else if (users.isSearch) {
        store.commit("user/setIsSearch", false);
        common_vendor.index.redirectTo({
          url: "/pages/search/index"
        });
      } else {
        store.commit("user/setTabIndex", 0);
        common_vendor.index.redirectTo({
          url: "/pages/pickup/index"
        });
      }
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
          title: title.value
        }),
        c: common_vendor.t(detailsData.value.orderId),
        d: common_vendor.o(handleCopy),
        e: common_vendor.p({
          detailsData: detailsData.value
        }),
        f: !common_vendor.unref(isPickUp) || common_vendor.unref(users).paymentMethod === 2 && !common_vendor.unref(isCollect)
      }, !common_vendor.unref(isPickUp) || common_vendor.unref(users).paymentMethod === 2 && !common_vendor.unref(isCollect) ? {
        g: common_vendor.t(detailsData.value.goodsType),
        h: common_vendor.o(handleGoods)
      } : {
        i: common_vendor.t(detailsData.value.goodsType)
      }, {
        j: common_vendor.sr(goods, "54d3589c-2", {
          "k": "goods"
        }),
        k: common_vendor.o(getFreight),
        l: common_vendor.p({
          detailsData: detailsData.value
        }),
        m: !common_vendor.unref(isPickUp) || common_vendor.unref(users).paymentMethod === 2 && !common_vendor.unref(isCollect)
      }, !common_vendor.unref(isPickUp) || common_vendor.unref(users).paymentMethod === 2 && !common_vendor.unref(isCollect) ? common_vendor.e({
        n: common_vendor.unref(isFreigthEdit)
      }, common_vendor.unref(isFreigthEdit) ? {
        o: common_vendor.o(handleAmount),
        p: common_vendor.unref(freight),
        q: common_vendor.o(($event) => common_vendor.isRef(freight) ? freight.value = $event.detail.value : freight = $event.detail.value)
      } : {
        r: common_vendor.t(detailsData.value.freight),
        s: common_vendor.o(handleFreight)
      }) : {
        t: common_vendor.t(common_vendor.unref(users).payData.tradingAmount)
      }, {
        v: !common_vendor.unref(isPickUp) || common_vendor.unref(users).paymentMethod === 2 && !common_vendor.unref(isCollect)
      }, !common_vendor.unref(isPickUp) || common_vendor.unref(users).paymentMethod === 2 && !common_vendor.unref(isCollect) ? {
        w: common_vendor.t(detailsData.value.paymentMethod === 1 ? "\u5BC4\u4ED8" : "\u5230\u4ED8"),
        x: common_vendor.o(handlePayMethod)
      } : {
        y: common_vendor.t(detailsData.value.paymentMethod === 1 ? "\u5BC4\u4ED8" : "\u5230\u4ED8")
      }, {
        z: !common_vendor.unref(isPickUp) || common_vendor.unref(users).paymentMethod === 2 && !common_vendor.unref(isCollect)
      }, !common_vendor.unref(isPickUp) || common_vendor.unref(users).paymentMethod === 2 && !common_vendor.unref(isCollect) ? {
        A: common_vendor.t(detailsData.value.remark),
        B: common_vendor.o(handleRemark)
      } : {
        C: common_vendor.t(detailsData.value.remark)
      }, {
        D: common_vendor.sr(card, "54d3589c-3", {
          "k": "card"
        }),
        E: common_vendor.p({
          detailsData: detailsData.value
        }),
        F: common_vendor.unref(isPickUp) && common_vendor.unref(users).paymentMethod === 1
      }, common_vendor.unref(isPickUp) && common_vendor.unref(users).paymentMethod === 1 ? {
        G: common_vendor.o(handleReceipt)
      } : {}, {
        H: common_vendor.unref(isCollect) && common_vendor.unref(isPickUp) && common_vendor.unref(users).paymentMethod === 2
      }, common_vendor.unref(isCollect) && common_vendor.unref(isPickUp) && common_vendor.unref(users).paymentMethod === 2 ? {} : {}, {
        I: !common_vendor.unref(isPickUp) || common_vendor.unref(users).paymentMethod === 2 && !common_vendor.unref(isCollect)
      }, !common_vendor.unref(isPickUp) || common_vendor.unref(users).paymentMethod === 2 && !common_vendor.unref(isCollect) ? {
        J: common_vendor.o(handleSubmit)
      } : {}, {
        K: common_vendor.sr(method, "54d3589c-4", {
          "k": "method"
        }),
        L: common_vendor.o(getGoodType),
        M: common_vendor.o(getPayMethod),
        N: common_vendor.o(getRemark),
        O: common_vendor.p({
          detailsData: detailsData.value,
          type: common_vendor.unref(type)
        })
      });
    };
  }
};
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-54d3589c"], ["__file", "E:/project/\u5C0F\u667A\u5E2E/project-xzb-app-uniapp-java\uFF08\u670D\u52A1\u7AEF\uFF09/pages/details/index.vue"]]);
wx.createPage(MiniProgramPage);
