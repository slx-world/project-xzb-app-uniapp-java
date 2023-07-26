"use strict";
var common_vendor = require("../../common/vendor.js");
var pages_api_user = require("../api/user.js");
var utils_validate = require("../../utils/validate.js");
require("../../utils/request.js");
if (!Array) {
  const _easycom_uni_easyinput2 = common_vendor.resolveComponent("uni-easyinput");
  const _easycom_uni_forms_item2 = common_vendor.resolveComponent("uni-forms-item");
  const _easycom_uni_forms2 = common_vendor.resolveComponent("uni-forms");
  (_easycom_uni_easyinput2 + _easycom_uni_forms_item2 + _easycom_uni_forms2)();
}
const _easycom_uni_easyinput = () => "../../uni_modules/uni-easyinput/components/uni-easyinput/uni-easyinput.js";
const _easycom_uni_forms_item = () => "../../uni_modules/uni-forms/components/uni-forms-item/uni-forms-item.js";
const _easycom_uni_forms = () => "../../uni_modules/uni-forms/components/uni-forms/uni-forms.js";
if (!Math) {
  (_easycom_uni_easyinput + _easycom_uni_forms_item + _easycom_uni_forms)();
}
const _sfc_main = {
  __name: "index",
  setup(__props) {
    const store = common_vendor.useStore();
    const customForm = common_vendor.ref();
    let isVerifySuccess = common_vendor.ref(false);
    let fromInfo = common_vendor.reactive({
      phone: "",
      verifyCode: ""
    });
    let codeInfo = common_vendor.reactive({
      show: true,
      timer: null,
      times: 60
    });
    const customRules = common_vendor.reactive({
      phone: {
        rules: [
          {
            required: true,
            validateFunction: utils_validate.validatePhone,
            errorMessage: "\u8BF7\u8F93\u5165\u624B\u673A\u53F7"
          }
        ]
      },
      verifyCode: {
        rules: [
          {
            required: true,
            errorMessage: "\u8BF7\u8F93\u5165\u9A8C\u8BC1\u7801"
          }
        ]
      }
    });
    common_vendor.onMounted(() => {
    });
    const getCode = async () => {
      let p = fromInfo.phone;
      isVerifySuccess.value = utils_validate.isPhone(p);
      if (isVerifySuccess.value) {
        utils_validate.timeCountdown(codeInfo);
        ({
          phone: phone.value
        });
      } else {
        return common_vendor.index.showToast({
          title: "\u624B\u673A\u53F7\u8F93\u5165\u9519\u8BEF\uFF01\u8BF7\u91CD\u65B0\u8F93\u5165",
          duration: 1e3,
          icon: "none"
        });
      }
    };
    const handleSubmit = async () => {
      const valid = await customForm.value.validate();
      if (valid) {
        await pages_api_user.phoneLogins(fromInfo).then((res) => {
          if (res.code === 0) {
            store.commit("user/setToken", res.token);
            store.dispatch("user/GetUsersInfo");
            common_vendor.index.redirectTo({
              url: "/pages/index/index"
            });
          } else {
            return common_vendor.index.showToast({
              title: res.msg,
              duration: 1e3,
              icon: "none"
            });
          }
        });
      }
    };
    const goLogin = () => {
      common_vendor.index.redirectTo({
        url: "/pages/login/user"
      });
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(goLogin),
        b: common_vendor.o(($event) => common_vendor.unref(fromInfo).phone = $event),
        c: common_vendor.p({
          placeholder: "\u8BF7\u8F93\u5165\u624B\u673A\u53F7",
          modelValue: common_vendor.unref(fromInfo).phone
        }),
        d: common_vendor.p({
          name: "phone"
        }),
        e: common_vendor.o(($event) => common_vendor.unref(fromInfo).verifyCode = $event),
        f: common_vendor.p({
          placeholder: "\u8BF7\u8F93\u5165\u9A8C\u8BC1\u7801",
          modelValue: common_vendor.unref(fromInfo).verifyCode
        }),
        g: common_vendor.unref(codeInfo).show,
        h: common_vendor.o(getCode),
        i: common_vendor.t(common_vendor.unref(codeInfo).times),
        j: !common_vendor.unref(codeInfo).show,
        k: common_vendor.p({
          name: "verifyCode"
        }),
        l: common_vendor.sr(customForm, "4586967a-0", {
          "k": "customForm"
        }),
        m: common_vendor.p({
          rules: customRules,
          modelValue: common_vendor.unref(fromInfo)
        }),
        n: common_vendor.unref(fromInfo).phone.length === 0 || common_vendor.unref(fromInfo).verifyCode.length === 0,
        o: common_vendor.n(common_vendor.unref(fromInfo).phone.length === 0 || common_vendor.unref(fromInfo).verifyCode.length === 0 ? "disabled" : ""),
        p: common_vendor.o(handleSubmit)
      };
    };
  }
};
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-4586967a"], ["__file", "E:/project/\u5C0F\u667A\u5E2E/project-xzb-app-uniapp-java\uFF08\u670D\u52A1\u7AEF\uFF09/pages/login/index.vue"]]);
wx.createPage(MiniProgramPage);
