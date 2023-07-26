"use strict";
var common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "index",
  props: {
    pagePath: {
      type: String,
      default: ""
    }
  },
  setup(__props) {
    const store = common_vendor.useStore();
    const currentPage = common_vendor.ref(store.state.footStatus);
    let tabbar = common_vendor.ref([
      {
        pagePath: "/pages/index/index",
        iconPath: "static/home.png",
        selectedIconPath: "static/homeActive.png",
        text: "\u9996\u9875"
      },
      {
        pagePath: "/pages/pickup/index",
        iconPath: "static/collect.png",
        selectedIconPath: "static/collectActive.png",
        text: "\u8BA2\u5355"
      },
      {
        pagePath: "/pages/delivery/index",
        iconPath: "static/delivery.png",
        selectedIconPath: "static/deliveryActive.png",
        text: "\u6D88\u606F"
      },
      {
        pagePath: "/pages/my/index",
        iconPath: "static/user.png",
        selectedIconPath: "static/userActive.png",
        text: "\u6211\u7684"
      }
    ]);
    const changeTab = (item, index) => {
      store.commit("user/setFilterOverTime", null);
      if (item.text !== "") {
        currentPage.value = index;
        store.commit("setFootStatus", index);
        store.commit("user/setDeliveryData", []);
        store.commit("user/setTabIndex", 0);
        store.commit("user/setTaskStatus", 0);
        store.commit("user/setDetailType", 0);
        store.commit("user/setNewType", null);
        common_vendor.index.redirectTo({
          url: item.pagePath,
          success: (e) => {
          },
          fail: () => {
          }
        });
      } else {
        common_vendor.index.showToast({
          title: "\u7A0B\u5E8F\u5458\u54E5\u54E5\u6B63\u5728\u5B9E\u73B0\u4E2D",
          duration: 1e3,
          icon: "none"
        });
      }
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(common_vendor.unref(tabbar), (item, index, i0) => {
          return common_vendor.e(common_vendor.e({
            a: item.pagePath !== ""
          }, item.pagePath !== "" ? common_vendor.e({
            b: currentPage.value === index
          }, currentPage.value === index ? {
            c: item.selectedIconPath
          } : {
            d: item.iconPath
          }) : {
            e: item.iconPath
          }), {
            f: item.text !== ""
          }, item.text !== "" ? {
            g: common_vendor.t(item.text)
          } : {}, {
            h: common_vendor.n(currentPage.value === index ? "active" : ""),
            i: index,
            j: common_vendor.o(($event) => changeTab(item, index), index)
          });
        })
      };
    };
  }
};
var Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "E:/project/\u5C0F\u667A\u5E2E/project-xzb-app-uniapp-java\uFF08\u670D\u52A1\u7AEF\uFF09/components/uni-footer/index.vue"]]);
wx.createComponent(Component);
