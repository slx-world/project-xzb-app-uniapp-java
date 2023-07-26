"use strict";
var common_vendor = require("../../common/vendor.js");
var pages_api_setting = require("../api/setting.js");
require("../../utils/request.js");
if (!Math) {
  UniNav();
}
const UniNav = () => "../../components/uni-nav/index.js";
const _sfc_main = {
  __name: "index",
  setup(__props) {
    const cityName = common_vendor.ref("\u8BF7\u9009\u62E9");
    const address = common_vendor.ref("\u8BF7\u9009\u62E9");
    const store = common_vendor.useStore();
    const users = store.state.user;
    const location = common_vendor.reactive({
      latitude: "",
      longitude: ""
    });
    const params = common_vendor.reactive({
      cityCode: "",
      location: "",
      intentionScope: ""
    });
    const markers = common_vendor.reactive({
      data: {
        id: 1,
        latitude: 0,
        longitude: 0,
        iconPath: "/static/new/img_weizhi@2x.png",
        title: "\u5929\u5B89\u95E8",
        content: "\u8FD9\u91CC\u662F\u5929\u5B89\u95E8\u5E7F\u573A",
        width: 60,
        height: 60,
        callout: {
          content: "\u5929\u5B89\u95E8",
          color: "#ffffff",
          fontSize: 14,
          borderRadius: 4,
          bgColor: "#000000",
          padding: 8,
          display: "ALWAYS"
        }
      }
    });
    const markerTap = () => {
      console.log("111");
    };
    const handleSelectCity = () => {
      common_vendor.index.navigateTo({
        url: "/pages/city/index?address=" + address.value
      });
    };
    const handleChooseRange = () => {
      console.log(123);
      common_vendor.index.chooseLocation({
        latitude: location.longitude,
        longitude: location.latitude,
        success: function(res) {
          address.value = res.name;
          location.latitude = res.longitude;
          location.longitude = res.latitude;
          markers.data.latitude = res.latitude;
          markers.data.longitude = res.longitude;
          store.commit("user/setLocation", location);
          store.commit("user/setAddress", address.value);
        },
        fail: function(err) {
          console.log(err, "err");
        }
      });
    };
    const handleSubmit = () => {
      pages_api_setting.setServiceSetting({
        cityCode: params.cityCode,
        location: String(location.latitude) + "," + String(location.longitude),
        intentionScope: users.address
      }).then((res) => {
        common_vendor.index.showToast({
          title: "\u4FDD\u5B58\u6210\u529F",
          duration: 1500,
          icon: "none"
        });
        console.log(res, "\u8BBE\u7F6E\u670D\u52A1\u8303\u56F4");
      });
    };
    common_vendor.onLoad((option) => {
      pages_api_setting.getSettingInfo().then((res) => {
        console.log(res, option, "\u83B7\u53D6\u5F53\u524D\u914D\u7F6E\u7684\u4F4D\u7F6E\u4FE1\u606F");
        if (!res.data.location) {
          common_vendor.index.getLocation({
            type: "gcj02",
            geocode: true,
            success: function(res2) {
              location.latitude = res2.longitude;
              location.longitude = res2.latitude;
              markers.data.latitude = res2.latitude;
              markers.data.longitude = res2.longitude;
            }
          });
        } else {
          cityName.value = res.data.cityName;
          address.value = res.data.intentionScope;
          location.latitude = res.data.location.split(",")[0];
          location.longitude = res.data.location.split(",")[1];
          markers.data.latitude = res.data.location.split(",")[1];
          markers.data.longitude = res.data.location.split(",")[0];
        }
        if (option.name) {
          cityName.value = option.name;
          address.value = option.address;
          params.cityCode = option.cityCode;
          params.intentionScope = option.name;
          console.log(cityName.value, "ffffffffffffffffff");
        }
      }).catch((err) => {
        common_vendor.index.showToast({
          title: err.msg || "\u63A5\u53E3\u8C03\u7528\u5931\u8D25",
          duration: 1500,
          icon: "none"
        });
      });
    });
    common_vendor.onMounted(() => {
    });
    const goBack = () => {
      common_vendor.index.navigateBack();
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(goBack),
        b: common_vendor.p({
          title: "\u8BF7\u9009\u62E9\u5DE5\u4F5C\u5730\u70B9"
        }),
        c: [markers.data],
        d: location.latitude,
        e: location.longitude,
        f: common_vendor.o(markerTap),
        g: common_vendor.t(cityName.value),
        h: common_vendor.o(handleSelectCity),
        i: common_vendor.t(address.value),
        j: common_vendor.o(handleChooseRange),
        k: common_vendor.o(handleSubmit)
      };
    };
  }
};
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-6cac4378"], ["__file", "E:/project/\u5C0F\u667A\u5E2E/project-xzb-app-uniapp-java\uFF08\u670D\u52A1\u7AEF\uFF09/pages/serviceRange/index.vue"]]);
wx.createPage(MiniProgramPage);
