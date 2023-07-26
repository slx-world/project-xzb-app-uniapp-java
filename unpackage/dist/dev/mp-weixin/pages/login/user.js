"use strict";
var common_vendor = require("../../common/vendor.js");
var common_assets = require("../../common/assets.js");
var pages_api_user = require("../api/user.js");
var pages_api_setting = require("../api/setting.js");
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
  __name: "user",
  setup(__props) {
    const store = common_vendor.useStore();
    common_vendor.ref(false);
    const customForm = common_vendor.ref();
    let fromInfo = common_vendor.reactive({
      phone: "",
      veriryCode: "",
      userType: 2
    });
    const customRules = common_vendor.reactive({
      phone: {
        rules: [
          {
            required: true,
            errorMessage: "\u8BF7\u8F93\u5165\u624B\u673A\u53F7"
          },
          {
            validateFunction: function(rule, value, data, callback) {
              const reg = /^1[3-9]\d{9}$/;
              if (!reg.test(value)) {
                callback("\u624B\u673A\u53F7\u8F93\u5165\u9519\u8BEF\uFF01\u8BF7\u91CD\u65B0\u8F93\u5165");
              }
              return true;
            }
          }
        ]
      },
      veriryCode: {
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
    const handleSubmit = async () => {
      const valid = await customForm.value.validate();
      if (valid) {
        let times = setTimeout(() => {
          common_vendor.index.showLoading({
            title: "loading",
            mask: true
          });
        }, 500);
        await pages_api_user.phoneLogins(fromInfo).then(async (res) => {
          console.log(res, "\u767B\u5F55\u7ED3\u679C\u83B7\u53D6");
          if (res.code === 200) {
            setTimeout(function() {
              common_vendor.index.hideLoading();
            }, 500);
            clearTimeout(times);
            common_vendor.index.setStorageSync("token", res.data.token);
            store.commit("user/setToken", res.data.token);
            await pages_api_setting.getUserSetting().then((res2) => {
              console.log(res2, "getUserSetting");
              if (Boolean(res2.data.settingsStatus)) {
                common_vendor.index.redirectTo({
                  url: "/pages/index/index"
                });
              } else {
                common_vendor.index.redirectTo({
                  url: "/pages/setting/index"
                });
              }
            });
          } else {
            setTimeout(function() {
              common_vendor.index.hideLoading();
            }, 500);
            common_vendor.index.showToast({
              title: res.msg,
              duration: 1e3,
              icon: "none"
            });
          }
        }).catch((err) => {
          setTimeout(function() {
            common_vendor.index.hideLoading();
          }, 500);
          common_vendor.index.showToast({
            title: err.msg,
            duration: 1500,
            icon: "none"
          });
        });
      }
    };
    const handlePwd = async () => {
      const reg = /^1[3-9]\d{9}$/;
      if (!reg.test(fromInfo.phone)) {
        return common_vendor.index.showToast({
          title: "\u624B\u673A\u53F7\u8F93\u5165\u9519\u8BEF\uFF01\u8BF7\u91CD\u65B0\u8F93\u5165",
          duration: 2e3,
          icon: "none"
        });
      }
      pages_api_user.getsmsCode({
        bussinessType: 3,
        phone: fromInfo.phone
      }).then((res) => {
        fromInfo.veriryCode = "123456";
      }).catch((err) => {
        common_vendor.index.showToast({
          title: err.msg || "\u83B7\u53D6\u9A8C\u8BC1\u7801\u5931\u8D25",
          duration: 1500,
          icon: "none"
        });
      });
    };
    common_vendor.ref(common_vendor.index.getStorageSync("baseUrl"));
    common_vendor.ref(null);
    return (_ctx, _cache) => {
      return {
        a: common_assets._imports_0,
        b: common_vendor.o(($event) => common_vendor.unref(fromInfo).phone = $event),
        c: common_vendor.p({
          clearable: false,
          placeholder: "\u8BF7\u8F93\u5165\u624B\u673A\u53F7",
          modelValue: common_vendor.unref(fromInfo).phone
        }),
        d: common_vendor.p({
          name: "phone"
        }),
        e: common_vendor.o(($event) => common_vendor.unref(fromInfo).veriryCode = $event),
        f: common_vendor.p({
          clearable: false,
          placeholder: "\u8BF7\u8F93\u5165\u9A8C\u8BC1\u7801",
          modelValue: common_vendor.unref(fromInfo).veriryCode
        }),
        g: common_vendor.o(handlePwd),
        h: common_vendor.p({
          name: "veriryCode"
        }),
        i: common_vendor.sr(customForm, "55b32450-0", {
          "k": "customForm"
        }),
        j: common_vendor.p({
          rules: customRules,
          modelValue: common_vendor.unref(fromInfo)
        }),
        k: common_vendor.unref(fromInfo).phone.length === 0 || common_vendor.unref(fromInfo).veriryCode.length === 0,
        l: common_vendor.n(common_vendor.unref(fromInfo).phone.length === 0 || common_vendor.unref(fromInfo).veriryCode.length === 0 ? "disabled" : ""),
        m: common_vendor.o(handleSubmit)
      };
    };
  }
};
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "E:/project/\u5C0F\u667A\u5E2E/project-xzb-app-uniapp-java\uFF08\u670D\u52A1\u7AEF\uFF09/pages/login/user.vue"]]);
wx.createPage(MiniProgramPage);
