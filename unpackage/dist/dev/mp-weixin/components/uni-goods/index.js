"use strict";
var common_vendor = require("../../common/vendor.js");
var pages_api_freight = require("../../pages/api/freight.js");
require("../../utils/request.js");
const _sfc_main = {
  __name: "index",
  props: {
    detailsData: {
      type: Object,
      default: () => ({})
    }
  },
  setup(__props, { expose, emit }) {
    const props = __props;
    let weight = common_vendor.ref(1);
    let volume = common_vendor.ref(0);
    let measureLong = common_vendor.ref(null);
    let measureWidth = common_vendor.ref(null);
    let measureHigh = common_vendor.ref(null);
    let isLessThan = common_vendor.ref(true);
    let isExceed = common_vendor.ref(false);
    let isLessThanVolume = common_vendor.ref(true);
    let isExceedVolume = common_vendor.ref(false);
    let freightData = common_vendor.ref(null);
    expose({
      weight,
      volume,
      measureLong,
      measureWidth,
      measureHigh,
      freightData
    });
    common_vendor.watch(weight, (newValue, oldValue) => {
      const val = Number(newValue);
      common_vendor.nextTick(() => {
        if (val < 0.1 && (val > 0 && val < 1)) {
          weight.value = 1;
        }
        if (val > 0.1) {
          weight.value = parseInt(val * 10) / 10;
        }
        if (val <= 1) {
          isLessThan.value = true;
        } else {
          isLessThan.value = false;
          if (val >= 9999) {
            weight.value = 9999;
            isExceed.value = true;
          } else {
            isExceed.value = false;
          }
        }
      });
    });
    common_vendor.watch(measureLong, (newValue, oldValue) => {
      const val = Number(newValue);
      common_vendor.nextTick(() => {
        measureLong.value = Math.floor(val);
        if (newValue <= 0) {
          measureLong.value = null;
        }
      });
    });
    common_vendor.watch(measureWidth, (newValue, oldValue) => {
      const val = Number(newValue);
      common_vendor.nextTick(() => {
        measureWidth.value = Math.floor(val);
        if (newValue <= 0) {
          measureWidth.value = null;
        }
      });
    });
    common_vendor.watch(measureHigh, (newValue, oldValue) => {
      const val = Number(newValue);
      common_vendor.nextTick(() => {
        measureHigh.value = Math.floor(val);
        if (newValue <= 0) {
          measureHigh.value = null;
        }
      });
    });
    const getfreight = async () => {
      const details = props.detailsData;
      let data = {
        senderCountyId: details.senderCountyId,
        receiverCountyId: details.receiverCountyId,
        volume: volume.value === 0 ? 1 : volume.value * 1e6,
        weight: weight.value
      };
      await pages_api_freight.calculateFreight(data).then((res) => {
        emit("getFreight", res.data.freight);
      });
    };
    const handleSymbol = (e) => {
      const value = e.detail.value;
      if (value < 0.1) {
        weight.value = 1;
        isLessThan.value = true;
      } else {
        if (value > 0.1 && value <= 1) {
          isLessThan.value = true;
        } else {
          isLessThan.value = false;
        }
        isDetails();
        if (value >= 9999) {
          isExceed.value = true;
          weight.value = 9999;
        } else {
          isExceed.value = false;
          isDetails();
        }
      }
    };
    const isDetails = () => {
      if (props.detailsData.id !== void 0) {
        getfreight();
      }
    };
    const handleMinus = () => {
      if (weight.value > 1) {
        weight.value--;
        isExceed.value = false;
        weight.value = weight.value.toFixed(1);
      }
      if (weight.value <= 0) {
        weight.value = 1;
        isLessThan.value = true;
      }
      isDetails();
    };
    const handleAdd = () => {
      if (weight.value < 9999) {
        ++weight.value;
        isLessThan.value = false;
      }
      if (weight.value === 9999) {
        isExceed.value = true;
      }
      isDetails();
    };
    const handleVolume = (e) => {
      const value = Number(e.detail.value);
      if (value < 1e-4) {
        volume.value = 0;
      } else {
        if (value > 99) {
          volume.value = 99;
          return common_vendor.index.showToast({
            title: "\u4F53\u79EF\u6700\u5927\u53EF\u4E0D\u80FD\u8D85\u8FC799m\xB3",
            duration: 1e3,
            icon: "none"
          });
        } else {
          volume.value = Number(e.detail.value);
        }
      }
      isDetails();
    };
    const handleVolumeMinus = () => {
      if (volume.value > 1) {
        volume.value--;
        volume.value = parseInt(volume.value * 1e4) / 1e4;
      }
      if (volume.value <= 0 || volume.value === 1) {
        volume.value = 0;
      }
      isDetails();
    };
    const handleVolumeAdd = () => {
      if (volume.value < 99) {
        ++volume.value;
        isLessThanVolume.value = false;
      }
      if (volume.value === 99) {
        isExceedVolume.value = true;
      }
      isDetails();
    };
    const handleCalculate = () => {
      const long = measureLong.value;
      const wide = measureWidth.value;
      const height = measureHigh.value;
      if (long >= 1 && wide >= 1 && height >= 1) {
        common_vendor.nextTick(() => {
          let val = long / 100 * (wide / 100) * (height / 100);
          if (val < 1e-4) {
            volume.value = 0;
          } else if (val > 99) {
            isExceedVolume.value = true;
            volume.value = 99;
            return common_vendor.index.showToast({
              title: "\u4F53\u79EF\u6700\u5927\u53EF\u4E0D\u80FD\u8D85\u8FC799m\xB3",
              duration: 1e3,
              icon: "none"
            });
          } else {
            volume.value = parseInt(val * 1e4) / 1e4;
            if (val > 1) {
              isLessThanVolume.value = false;
            } else {
              isLessThanVolume.value = true;
            }
            isExceedVolume.value = false;
          }
          isDetails();
        });
      }
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.n(common_vendor.unref(isLessThan) ? "active" : ""),
        b: common_vendor.o(handleMinus),
        c: common_vendor.o(handleSymbol),
        d: common_vendor.unref(weight),
        e: common_vendor.o(($event) => common_vendor.isRef(weight) ? weight.value = $event.detail.value : weight = $event.detail.value),
        f: common_vendor.n(common_vendor.unref(isExceed) ? "active" : ""),
        g: common_vendor.o(handleAdd),
        h: common_vendor.o(handleVolumeMinus),
        i: common_vendor.o(handleVolume),
        j: common_vendor.unref(volume),
        k: common_vendor.o(($event) => common_vendor.isRef(volume) ? volume.value = $event.detail.value : volume = $event.detail.value),
        l: common_vendor.o(handleVolumeAdd),
        m: common_vendor.o([($event) => common_vendor.isRef(measureLong) ? measureLong.value = $event.detail.value : measureLong = $event.detail.value, handleCalculate]),
        n: common_vendor.unref(measureLong),
        o: common_vendor.n(common_vendor.unref(measureLong) ? "active" : ""),
        p: common_vendor.o([($event) => common_vendor.isRef(measureWidth) ? measureWidth.value = $event.detail.value : measureWidth = $event.detail.value, handleCalculate]),
        q: common_vendor.unref(measureWidth),
        r: common_vendor.n(common_vendor.unref(measureWidth) ? "active" : ""),
        s: common_vendor.o([($event) => common_vendor.isRef(measureHigh) ? measureHigh.value = $event.detail.value : measureHigh = $event.detail.value, handleCalculate]),
        t: common_vendor.unref(measureHigh),
        v: common_vendor.n(common_vendor.unref(measureHigh) ? "active" : "")
      };
    };
  }
};
var Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "E:/project/\u5C0F\u667A\u5E2E/project-xzb-app-uniapp-java\uFF08\u670D\u52A1\u7AEF\uFF09/components/uni-goods/index.vue"]]);
wx.createComponent(Component);
