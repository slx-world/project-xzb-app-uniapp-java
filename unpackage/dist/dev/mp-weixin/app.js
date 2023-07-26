"use strict";
var common_vendor = require("./common/vendor.js");
var store_index = require("./store/index.js");
require("./store/modules/global.js");
require("./store/modules/user.js");
require("./pages/api/user.js");
require("./utils/request.js");
if (!Math) {
  "./pages/login/user.js";
  "./pages/index/index.js";
  "./pages/serviceSkill/index.js";
  "./pages/getOrder/index.js";
  "./pages/serviceRange/index.js";
  "./pages/city/index.js";
  "./pages/setting/index.js";
  "./pages/login/index.js";
  "./pages/search/index.js";
  "./pages/history/index.js";
  "./pages/news/index.js";
  "./pages/news/detail.js";
  "./pages/news/system.js";
  "./pages/freight/index.js";
  "./pages/delivery/index.js";
  "./pages/pickup/index.js";
  "./pages/turnorder/index.js";
  "./pages/cancel/index.js";
  "./pages/cancel/cause.js";
  "./pages/details/index.js";
  "./pages/details/waybill.js";
  "./pages/pay/index.js";
  "./pages/pay/scanPay.js";
  "./pages/my/index.js";
  "./pages/my/map.js";
  "./pages/my/qrCode.js";
  "./pages/details/orderMap.js";
}
const _sfc_main = {
  __name: "App",
  setup(__props) {
    const store = common_vendor.useStore();
    const locationData = common_vendor.ref({});
    common_vendor.onShow(() => {
      common_vendor.index.getLocation({
        type: "gcj02",
        success: (res) => {
          locationData.value = {
            longitude: res.longitude,
            latitude: res.latitude
          };
          store.commit("user/setlLacation", locationData.value);
        },
        fail: (err) => {
        }
      });
      common_vendor.index.getNetworkType({
        success: function(res) {
        }
      });
    });
    common_vendor.onMounted(() => {
    });
    return () => {
    };
  }
};
var App = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "E:/project/\u5C0F\u667A\u5E2E/project-xzb-app-uniapp-java\uFF08\u670D\u52A1\u7AEF\uFF09/App.vue"]]);
const app = common_vendor.createApp(App);
app.use(store_index.store);
app.mount("#app");
