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
  (UniNav + _easycom_uni_easyinput + _easycom_uni_file_picker + SelectArea)();
}
const SelectArea = () => "./components/selectArea.js";
const UniNav = () => "../../components/uni-nav/index.js";
const _sfc_main = {
  __name: "index",
  setup(__props) {
    const title = common_vendor.ref("账户设置");
    const focusType = common_vendor.ref("");
    let provinceName = common_vendor.ref("");
    let cityName = common_vendor.ref("");
    let countyName = common_vendor.ref("");
    const selectArea = common_vendor.ref();
    const bankArray = common_vendor.ref([
      {
        label: "中国工商银行",
        value: "1"
      },
      {
        label: "中国建设银行",
        value: "2"
      },
      {
        label: "中国邮政储蓄银行",
        value: "3"
      },
      {
        label: "中国农业银行",
        value: "4"
      },
      {
        label: "北京农商银行",
        value: "5"
      },
      {
        label: "招商银行",
        value: "6"
      }
    ]);
    common_vendor.onMounted(() => {
      selectArea.value.getList();
    });
    const handleBank = (e) => {
      console.log(e.detail.value, "数组下标");
    };
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
    const handleOpenLocation = () => {
      selectArea.value.handleOpen();
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
          placeholder: "请输入户名",
          placeholderStyle: {
            fontSize: "16px"
          }
        }),
        f: common_vendor.n(focusType.value === "name" ? "active" : ""),
        g: common_vendor.o(handleBank),
        h: bankArray.value,
        i: common_vendor.n(focusType.value === "idCard" ? "active" : ""),
        j: common_vendor.o(handleOpenLocation),
        k: common_vendor.n(focusType.value === "idCard" ? "active" : ""),
        l: common_vendor.o(($event) => handleFocus("idCard")),
        m: common_vendor.o(handleBlur),
        n: common_vendor.p({
          placeholder: "请输入网点名称",
          placeholderStyle: {
            fontSize: "16px"
          }
        }),
        o: common_vendor.n(focusType.value === "idCard" ? "active" : ""),
        p: common_vendor.o(($event) => handleFocus("idCard")),
        q: common_vendor.o(handleBlur),
        r: common_vendor.p({
          placeholder: "请输入银行账号",
          placeholderStyle: {
            fontSize: "16px"
          }
        }),
        s: common_vendor.n(focusType.value === "idCard" ? "active" : ""),
        t: common_vendor.o(_ctx.handleSuccess),
        v: common_vendor.o(_ctx.handleSelect),
        w: common_vendor.o(_ctx.handleFail),
        x: common_vendor.o(_ctx.handleDelete),
        y: common_vendor.p({
          limit: "1",
          title: ""
        }),
        z: common_vendor.o((...args) => _ctx.handleSubmit && _ctx.handleSubmit(...args)),
        A: common_vendor.sr(selectArea, "3c1b446f-5", {
          "k": "selectArea"
        }),
        B: common_vendor.o(_ctx.getAreaData),
        C: common_vendor.p({
          provinceName: common_vendor.unref(provinceName),
          cityName: common_vendor.unref(cityName),
          countyName: common_vendor.unref(countyName)
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-3c1b446f"], ["__file", "E:/project/小智帮/project-xzb-app-uniapp-java（服务端）/pages/account/index.vue"]]);
wx.createPage(MiniProgramPage);
