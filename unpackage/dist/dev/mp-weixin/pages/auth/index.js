"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_uni_easyinput2 = common_vendor.resolveComponent("uni-easyinput");
  const _easycom_uni_file_picker2 = common_vendor.resolveComponent("uni-file-picker");
  (_easycom_uni_easyinput2 + _easycom_uni_file_picker2)();
}
const _easycom_uni_easyinput = () => "../../uni_modules/uni-easyinput/components/uni-easyinput/uni-easyinput.js";
const _easycom_uni_file_picker = () => "../../uni_modules/uni-file-picker/components/uni-file-picker/uni-file-picker.js";
if (!Math) {
  (UniNav + _easycom_uni_easyinput + _easycom_uni_file_picker)();
}
const UniNav = () => "../../components/uni-nav/index.js";
const _sfc_main = {
  __name: "index",
  setup(__props) {
    const title = common_vendor.ref("实名认证");
    const focusType = common_vendor.ref("");
    const goBack = () => {
      common_vendor.index.navigateBack();
    };
    const handleBlur = () => {
      focusType.value = "";
    };
    const handleFocus = (val) => {
      console.log(val, "--------");
      focusType.value = val;
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(goBack),
        b: common_vendor.p({
          title: title.value
        }),
        c: common_vendor.o(($event) => handleFocus("name")),
        d: common_vendor.o(handleBlur),
        e: common_vendor.p({
          placeholder: "请输入",
          placeholderStyle: {
            fontSize: "16px"
          }
        }),
        f: common_vendor.n(focusType.value === "name" ? "active" : ""),
        g: common_vendor.o(($event) => handleFocus("idCard")),
        h: common_vendor.o(handleBlur),
        i: common_vendor.p({
          placeholder: "请输入",
          placeholderStyle: {
            fontSize: "16px"
          }
        }),
        j: common_vendor.n(focusType.value === "idCard" ? "active" : ""),
        k: common_vendor.o(_ctx.handleSuccess),
        l: common_vendor.o(_ctx.handleSelect),
        m: common_vendor.o(_ctx.handleFail),
        n: common_vendor.o(_ctx.handleDelete),
        o: common_vendor.p({
          limit: "1",
          title: ""
        }),
        p: common_vendor.o(_ctx.handleSuccess),
        q: common_vendor.o(_ctx.handleSelect),
        r: common_vendor.o(_ctx.handleFail),
        s: common_vendor.o(_ctx.handleDelete),
        t: common_vendor.p({
          limit: "1",
          title: ""
        }),
        v: common_vendor.o(_ctx.handleSuccess),
        w: common_vendor.o(_ctx.handleSelect),
        x: common_vendor.o(_ctx.handleFail),
        y: common_vendor.o(_ctx.handleDelete),
        z: common_vendor.p({
          limit: "1",
          title: ""
        }),
        A: common_vendor.o((...args) => _ctx.handleSubmit && _ctx.handleSubmit(...args))
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-3f748249"], ["__file", "E:/project/小智帮/project-xzb-app-uniapp-java（服务端）/pages/auth/index.vue"]]);
wx.createPage(MiniProgramPage);
