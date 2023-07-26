"use strict";
var common_vendor = require("../../common/vendor.js");
var utils_index = require("../../utils/index.js");
var pages_api_index = require("../api/index.js");
require("../../utils/request.js");
if (!Math) {
  UniNav();
}
const UniNav = () => "../../components/uni-nav/index.js";
const _sfc_main = {
  __name: "index",
  setup(__props) {
    const store = common_vendor.useStore();
    const users = store.state.user;
    const taskId = users.taskId;
    const title = common_vendor.ref("\u8BA2\u5355\u53D6\u6D88\u539F\u56E0\u7533\u8BF7");
    let reasonDesc = common_vendor.ref("");
    let reason = users.reasonVal.label !== "" ? users.reasonVal.label : "";
    const detailsData = common_vendor.ref({});
    common_vendor.onMounted(() => {
      if (users.reasonDesc !== "") {
        reasonDesc.value = users.reasonDesc;
      }
      getDetails(taskId);
    });
    const getDetails = async (id) => {
      await pages_api_index.getDetail(id).then((res) => {
        detailsData.value = res.data;
      });
    };
    const monitorInput = () => {
      common_vendor.nextTick(() => {
        let leng = utils_index.validateTextLength(reasonDesc.value);
        if (leng > 100) {
          reasonDesc.value = reasonDesc.value.substring(0, 100);
        }
      });
    };
    const handleSubmit = async () => {
      if (reason !== "") {
        let times = setTimeout(() => {
          common_vendor.index.showLoading({
            title: "loading"
          });
        }, 500);
        const params = {
          id: taskId,
          reason: users.reasonVal.value,
          reasonDesc: reasonDesc.value
        };
        await pages_api_index.taskCancel(params).then((res) => {
          store.commit("user/setTabIndex", 0);
          common_vendor.index.redirectTo({
            url: "/pages/pickup/index"
          });
          if (res.code === 200) {
            setTimeout(function() {
              common_vendor.index.hideLoading();
            }, 500);
            clearTimeout(times);
            goBack();
            return common_vendor.index.showToast({
              title: "\u7533\u8BF7\u6210\u529F!",
              duration: 1e3,
              icon: "none"
            });
          }
        });
      } else {
        return common_vendor.index.showToast({
          title: "\u8BF7\u9009\u62E9\u53D6\u6D88\u539F\u56E0!",
          duration: 1e3,
          icon: "none"
        });
      }
    };
    const handleCause = () => {
      store.commit("user/setReasonDesc", reasonDesc.value);
      common_vendor.index.navigateTo({
        url: "/pages/cancel/cause"
      });
    };
    const goBack = () => {
      common_vendor.index.redirectTo({
        url: "/pages/pickup/index"
      });
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(goBack),
        b: common_vendor.p({
          title: title.value
        }),
        c: common_vendor.t(detailsData.value.senderName),
        d: common_vendor.t(detailsData.value.orderId),
        e: common_vendor.t(detailsData.value.senderAddress),
        f: common_vendor.t(common_vendor.unref(reason)),
        g: common_vendor.o(handleCause),
        h: _ctx.placeholderClass,
        i: common_vendor.o([($event) => common_vendor.isRef(reasonDesc) ? reasonDesc.value = $event.detail.value : reasonDesc = $event.detail.value, monitorInput]),
        j: common_vendor.unref(reasonDesc),
        k: common_vendor.o(handleSubmit),
        l: common_vendor.unref(reason) === "" || !common_vendor.unref(reason),
        m: common_vendor.n(common_vendor.unref(reason) === "" || !common_vendor.unref(reason) ? "disabled" : "")
      };
    };
  }
};
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-3ce92776"], ["__file", "E:/project/\u5C0F\u667A\u5E2E/project-xzb-app-uniapp-java\uFF08\u670D\u52A1\u7AEF\uFF09/pages/cancel/index.vue"]]);
wx.createPage(MiniProgramPage);
