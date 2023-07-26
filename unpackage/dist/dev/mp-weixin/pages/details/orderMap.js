"use strict";
var common_vendor = require("../../common/vendor.js");
var pages_api_index = require("../api/index.js");
require("../../utils/request.js");
if (!Math) {
  UniNav();
}
const UniNav = () => "../../components/uni-nav/index.js";
const _sfc_main = {
  __name: "orderMap",
  setup(__props) {
    const store = common_vendor.useStore();
    const users = store.state.user;
    const title = common_vendor.ref("\u8BA2\u5355\u8DDF\u8E2A");
    common_vendor.ref(39.91667);
    common_vendor.ref(116.41667);
    const markers = common_vendor.reactive([]);
    const polyline = common_vendor.reactive([
      {
        points: [
          { longitude: 116.41667, latitude: 39.91667 },
          { longitude: 118.78333, latitude: 32.05 }
        ],
        color: "#EF4F3F",
        width: 12
      }
    ]);
    common_vendor.onMounted(() => {
      getTrack();
    });
    const strInit = (value) => {
      let strText = value;
      let replaceText = [];
      for (let i = 0; i <= 10; i++) {
        replaceText.push("" + i);
      }
      value.split("\u3010")[1];
      for (let i = 0; i < replaceText.length; i++) {
        var replaceString = `<span class='red'>` + replaceText[i] + `</span>`;
        strText = strText.replace(RegExp(replaceText[i], "g"), replaceString);
      }
      strText = strText.replace(RegExp("red", "g"), "red");
      return strText;
    };
    const getTrack = async () => {
      await pages_api_index.getTracks(users.detailsData.transportOrderId).then((res) => {
        if (res.code === 200) {
          markers.value = res.data.reverse();
          polyline[0].points = res.data.data;
        }
      });
    };
    const goBack = () => {
      common_vendor.index.redirectTo({
        url: "/pages/details/waybill"
      });
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(goBack),
        b: common_vendor.p({
          title: title.value
        }),
        c: common_vendor.f(markers.value, (item, index, i0) => {
          return common_vendor.e({
            a: ["\u5DF2\u62D2\u6536", "\u5DF2\u7B7E\u6536", "\u5DF2\u53D6\u4EF6"].includes(item.status)
          }, ["\u5DF2\u62D2\u6536", "\u5DF2\u7B7E\u6536", "\u5DF2\u53D6\u4EF6"].includes(item.status) ? {
            b: common_vendor.t(item.status === "\u5DF2\u62D2\u6536" ? "\u62D2" : item.status === "\u5DF2\u7B7E\u6536" ? "\u7B7E" : "\u53D6")
          } : index === 0 && ["\u8FD0\u9001\u4E2D", "\u6D3E\u9001\u4E2D"].includes(item.status) || index > 0 && markers.value[index - 1].status !== "\u8FD0\u9001\u4E2D" ? {
            d: common_vendor.n(item.status === "\u6D3E\u9001\u4E2D" ? "ys" : "ps")
          } : index > 0 && markers.value[index - 1].status === "\u8FD0\u9001\u4E2D" ? {} : {}, {
            c: index === 0 && ["\u8FD0\u9001\u4E2D", "\u6D3E\u9001\u4E2D"].includes(item.status) || index > 0 && markers.value[index - 1].status !== "\u8FD0\u9001\u4E2D",
            e: index > 0 && markers.value[index - 1].status === "\u8FD0\u9001\u4E2D",
            f: !(index === markers.value.length - 1)
          }, !(index === markers.value.length - 1) ? {
            g: common_vendor.n(item.status === "\u8FD0\u9001\u4E2D" ? "short" : "")
          } : {}, {
            h: !(index > 0 && markers.value[index - 1].status === "\u8FD0\u9001\u4E2D" && item.status === "\u8FD0\u9001\u4E2D")
          }, !(index > 0 && markers.value[index - 1].status === "\u8FD0\u9001\u4E2D" && item.status === "\u8FD0\u9001\u4E2D") ? {
            i: common_vendor.t(item.status)
          } : {}, {
            j: common_vendor.t(item.created),
            k: strInit(item.info),
            l: common_vendor.n(index === 0 ? "active" : ""),
            m: index
          });
        })
      };
    };
  }
};
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-d6902958"], ["__file", "E:/project/\u5C0F\u667A\u5E2E/project-xzb-app-uniapp-java\uFF08\u670D\u52A1\u7AEF\uFF09/pages/details/orderMap.vue"]]);
wx.createPage(MiniProgramPage);
