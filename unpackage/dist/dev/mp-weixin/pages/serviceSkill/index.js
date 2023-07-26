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
    const activeId = common_vendor.ref(null);
    const activeIndex = common_vendor.ref(0);
    const serviceSkill = common_vendor.reactive({
      data: []
    });
    const rightItem = common_vendor.reactive({
      data: []
    });
    const status = common_vendor.ref("read");
    common_vendor.onMounted(() => {
      getServiceSkillAllFunc();
    });
    const getServiceSkillAllFunc = () => {
      pages_api_setting.getServiceSkillAll().then((res) => {
        if (res.code == 200) {
          serviceSkill.data = res.data;
          activeId.value = res.data[0].serveTypeId;
          rightItem.data = serviceSkill.data[0].serveSkillItemResDTOList;
          console.log(serviceSkill.data, "serviceSkill.data");
        }
      }).catch((err) => {
        common_vendor.index.showToast({
          title: err.msg || "\u63A5\u53E3\u8C03\u7528\u5931\u8D25",
          duration: 1500,
          icon: "none"
        });
      });
    };
    const handleSelect = (active) => {
      if (status.value === "read")
        return;
      serviceSkill.data[activeIndex.value].serveSkillItemResDTOList = serviceSkill.data[activeIndex.value].serveSkillItemResDTOList.map((item) => {
        if (active.serveItemId === item.serveItemId) {
          return Object.assign({}, item, { isSelected: !item.isSelected });
        } else {
          return item;
        }
      }), rightItem.data = [
        ...serviceSkill.data[activeIndex.value].serveSkillItemResDTOList
      ];
      console.log(serviceSkill.data, "\u70B9\u51FB\u540E ");
    };
    const handleSubmit = () => {
      const selectedList = [];
      serviceSkill.data.forEach((item, index) => {
        item.serveSkillItemResDTOList.forEach((item1, index1) => {
          if (item1.isSelected) {
            selectedList.push({
              serveItemId: item1.serveItemId,
              serveTypeId: item.serveTypeId
            });
          }
        });
      });
      console.log(selectedList, "selectedList");
      pages_api_setting.updateServiceSkill(selectedList).then((res) => {
        if (res.code === 200) {
          status.value = "read";
        }
      }).catch((err) => {
        common_vendor.index.showToast({
          title: err.msg || "\u63A5\u53E3\u8C03\u7528\u5931\u8D25",
          duration: 1500,
          icon: "none"
        });
      });
    };
    const handleCancel = () => {
      status.value = "read";
    };
    const handleEdit = () => {
      status.value = "edit";
      console.log("\u7F16\u8F91\u72B6\u6001");
    };
    const tabChange = (id, index) => {
      activeId.value = id;
      activeIndex.value = index;
      rightItem.data = serviceSkill.data[activeIndex.value].serveSkillItemResDTOList;
    };
    const goBack = () => {
      common_vendor.index.navigateBack();
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(goBack),
        b: common_vendor.o(handleEdit),
        c: common_vendor.p({
          title: "\u9009\u62E9\u670D\u52A1\u6280\u80FD",
          rithtText: status.value === "read" ? "\u7F16\u8F91" : ""
        }),
        d: common_vendor.f(serviceSkill.data, (item, index, i0) => {
          return common_vendor.e({
            a: common_vendor.t(item.serveTypeName),
            b: item.count
          }, item.count ? {
            c: common_vendor.t(item.count)
          } : {}, {
            d: index,
            e: common_vendor.n(activeId.value === item.serveTypeId ? "active tagBox" : "tagBox"),
            f: common_vendor.o(($event) => tabChange(item.serveTypeId, index), index)
          });
        }),
        e: common_vendor.f(rightItem.data, (item, index, i0) => {
          return {
            a: common_vendor.t(item.serveItemName),
            b: common_vendor.n(item.isSelected ? "active" : ""),
            c: index,
            d: common_vendor.o(($event) => handleSelect(item), index)
          };
        }),
        f: common_vendor.o(handleCancel),
        g: common_vendor.o(handleSubmit),
        h: status.value === "edit"
      };
    };
  }
};
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-f34db350"], ["__file", "E:/project/\u5C0F\u667A\u5E2E/project-xzb-app-uniapp-java\uFF08\u670D\u52A1\u7AEF\uFF09/pages/serviceSkill/index.vue"]]);
wx.createPage(MiniProgramPage);
