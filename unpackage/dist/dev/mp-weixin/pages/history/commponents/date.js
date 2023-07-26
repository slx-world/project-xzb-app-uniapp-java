"use strict";
var common_vendor = require("../../../common/vendor.js");
var utils_index = require("../../../utils/index.js");
require("../../api/index.js");
require("../../../utils/request.js");
if (!Array) {
  const _easycom_uni_datetime_picker2 = common_vendor.resolveComponent("uni-datetime-picker");
  _easycom_uni_datetime_picker2();
}
const _easycom_uni_datetime_picker = () => "../../../uni_modules/uni-datetime-picker/components/uni-datetime-picker/uni-datetime-picker.js";
if (!Math) {
  _easycom_uni_datetime_picker();
}
const _sfc_main = {
  __name: "date",
  setup(__props, { emit }) {
    const store = common_vendor.useStore();
    const users = store.state.user;
    const popup = common_vendor.ref();
    let dates = common_vendor.ref();
    let isPreExceed = common_vendor.ref(false);
    let isNextExceed = common_vendor.ref(false);
    const monthData = common_vendor.reactive([]);
    common_vendor.ref(`height: 100rpx;`);
    let defaultValue = common_vendor.ref([0]);
    let times = common_vendor.ref(null);
    common_vendor.ref(null);
    let isToday = common_vendor.ref(true);
    let isActive = common_vendor.ref(null);
    const isTmClick = common_vendor.ref(false);
    const isAtClick = common_vendor.ref(false);
    common_vendor.watch(dates, (newValue, oldValue) => {
      isToday.value = utils_index.getNow(newValue) === utils_index.getNow(new Date());
      const obj = utils_index.getMonthDay(newValue);
      if (obj.timeNow === obj.timeStar) {
        isPreExceed.value = true;
      }
      if (obj.timeNow === obj.timeEnd) {
        isNextExceed.value = true;
      }
      monthData.value.map((val, index) => {
        if (utils_index.getTate(obj.timeNow) === val) {
          defaultValue.value = [index];
        }
      });
      if (users.timeData) {
        emit("getDateTime", utils_index.getTate(users.timeData));
        dates.value = users.timeData;
      } else {
        emit("getDateTime", utils_index.getTate(obj.timeNow));
      }
    });
    common_vendor.onMounted(() => {
      dates.value = utils_index.getTate(new Date());
      monthData.value = utils_index.getDay();
    });
    const hanleDay = (index) => {
      if (isToday.value) {
        if (index === 0) {
          isAtClick.value = false;
          isTmClick.value = !isTmClick.value;
          store.commit("user/setTimeData", utils_index.tomorrowDay());
          emit("getDateTime", utils_index.getTate(utils_index.tomorrowDay()));
          if (!isTmClick.value) {
            store.commit("user/setTimeData", utils_index.getTate(new Date()));
            emit("getDateTime", utils_index.getTate(utils_index.getTate(new Date())));
          }
        } else {
          isTmClick.value = false;
          isAtClick.value = !isAtClick.value;
          store.commit("user/setTimeData", utils_index.afterTomorrowDay());
          emit("getDateTime", utils_index.getTate(utils_index.afterTomorrowDay()));
          if (!isAtClick.value) {
            store.commit("user/setTimeData", utils_index.getTate(new Date()));
            emit("getDateTime", utils_index.getTate(utils_index.getTate(new Date())));
          }
        }
      }
    };
    const handleDate = (type) => {
      times.value = type;
      handleComplete();
    };
    const handleComplete = () => {
      isActive.value = null;
      if (times.value === dates.value) {
        isToday.value = true;
      } else {
        isToday.value = false;
      }
      if (times.value !== null) {
        dates.value = times.value;
        store.commit("user/setTimeData", times.value);
        handleCancel();
      } else {
        common_vendor.index.showToast({
          title: "\u8BF7\u9009\u62E9\u65E5\u671F",
          icon: "none"
        });
      }
    };
    const handleCancel = () => {
      popup.value.close();
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.t(common_vendor.unref(dates)),
        b: common_vendor.o(handleDate),
        c: common_vendor.p({
          type: "date",
          ["clear-icon"]: false
        }),
        d: common_vendor.n(!common_vendor.unref(isToday) ? "gray" : ""),
        e: common_vendor.n(isTmClick.value ? "red" : ""),
        f: common_vendor.o(($event) => hanleDay(0)),
        g: common_vendor.n(!common_vendor.unref(isToday) ? "gray" : ""),
        h: common_vendor.n(isAtClick.value ? "red" : ""),
        i: common_vendor.o(($event) => hanleDay(1))
      };
    };
  }
};
var Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "E:/project/\u5C0F\u667A\u5E2E/project-xzb-app-uniapp-java\uFF08\u670D\u52A1\u7AEF\uFF09/pages/history/commponents/date.vue"]]);
wx.createComponent(Component);
