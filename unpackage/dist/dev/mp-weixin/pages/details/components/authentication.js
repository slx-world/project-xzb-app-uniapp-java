"use strict";
var common_vendor = require("../../../common/vendor.js");
var utils_validate = require("../../../utils/validate.js");
var pages_api_index = require("../../api/index.js");
require("../../../utils/request.js");
if (!Array) {
  const _easycom_uni_easyinput2 = common_vendor.resolveComponent("uni-easyinput");
  const _easycom_uni_forms_item2 = common_vendor.resolveComponent("uni-forms-item");
  const _easycom_uni_forms2 = common_vendor.resolveComponent("uni-forms");
  (_easycom_uni_easyinput2 + _easycom_uni_forms_item2 + _easycom_uni_forms2)();
}
const _easycom_uni_easyinput = () => "../../../uni_modules/uni-easyinput/components/uni-easyinput/uni-easyinput.js";
const _easycom_uni_forms_item = () => "../../../uni_modules/uni-forms/components/uni-forms-item/uni-forms-item.js";
const _easycom_uni_forms = () => "../../../uni_modules/uni-forms/components/uni-forms/uni-forms.js";
if (!Math) {
  (_easycom_uni_easyinput + _easycom_uni_forms_item + _easycom_uni_forms)();
}
const _sfc_main = {
  __name: "authentication",
  props: {
    detailsData: {
      type: Object,
      default: () => ({})
    }
  },
  setup(__props, { expose }) {
    const customForm = common_vendor.ref();
    const store = common_vendor.useStore();
    const users = store.state.user;
    let idCard = common_vendor.ref("");
    let name = common_vendor.ref("");
    let isValidate = common_vendor.ref(false);
    let flag = common_vendor.ref(null);
    common_vendor.onMounted(() => {
      if (users.cardData) {
        name.value = users.cardData.name;
        name.idCard = users.cardData.idCard;
        flag.value = true;
      }
    });
    const handleIdcard = () => {
      const validate = utils_validate.validateIdentityCard(idCard.value);
      if (validate) {
        isValidate.value = true;
      } else {
        return common_vendor.index.showToast({
          title: validate,
          duration: 1e3,
          icon: "none"
        });
      }
    };
    const handleCheck = async () => {
      const params = {
        name: name.value,
        idCard: idCard.value
      };
      store.commit("user/setCardData", params);
      await pages_api_index.idCardCheck(params).then((res) => {
        if (res.code === 200) {
          flag.value = res.data.flag;
          return common_vendor.index.showToast({
            title: "\u9A8C\u8BC1\u6210\u529F",
            duration: 1e3,
            icon: "none"
          });
        }
      });
    };
    expose({
      customForm,
      idCard,
      name,
      isValidate
    });
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: __props.detailsData.idCardNoVerify === 0 && !common_vendor.unref(flag)
      }, __props.detailsData.idCardNoVerify === 0 && !common_vendor.unref(flag) ? {} : __props.detailsData.idCardNoVerify === 1 || common_vendor.unref(flag) ? {} : {}, {
        b: __props.detailsData.idCardNoVerify === 1 || common_vendor.unref(flag),
        c: __props.detailsData.idCardNoVerify !== 1 && !common_vendor.unref(flag)
      }, __props.detailsData.idCardNoVerify !== 1 && !common_vendor.unref(flag) ? {
        d: common_vendor.o(($event) => common_vendor.isRef(name) ? name.value = $event : name = $event),
        e: common_vendor.p({
          placeholder: "\u8BF7\u8F93\u5165\u771F\u5B9E\u59D3\u540D",
          modelValue: common_vendor.unref(name)
        }),
        f: common_vendor.p({
          name: "name"
        }),
        g: common_vendor.o(handleIdcard),
        h: common_vendor.o(($event) => common_vendor.isRef(idCard) ? idCard.value = $event : idCard = $event),
        i: common_vendor.p({
          placeholder: "\u8BF7\u8F93\u5165\u8EAB\u4EFD\u8BC1\u53F7\u7801",
          modelValue: common_vendor.unref(idCard)
        }),
        j: common_vendor.p({
          name: "idCard"
        }),
        k: common_vendor.sr(customForm, "f47618a6-0", {
          "k": "customForm"
        }),
        l: common_vendor.o(handleCheck)
      } : common_vendor.e({
        m: common_vendor.unref(name) !== ""
      }, common_vendor.unref(name) !== "" ? {
        n: common_vendor.t(common_vendor.unref(name))
      } : {}, {
        o: common_vendor.t(common_vendor.unref(idCard) !== "" ? common_vendor.unref(idCard) : __props.detailsData.idCardNo)
      }));
    };
  }
};
var Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "E:/project/\u5C0F\u667A\u5E2E/project-xzb-app-uniapp-java\uFF08\u670D\u52A1\u7AEF\uFF09/pages/details/components/authentication.vue"]]);
wx.createComponent(Component);
