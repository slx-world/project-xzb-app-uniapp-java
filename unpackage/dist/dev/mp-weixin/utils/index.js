"use strict";
var common_vendor = require("../common/vendor.js");
var pages_api_index = require("../pages/api/index.js");
const taskTimeFormat = (val) => {
  const times = getTimeDate(val);
  return times.date;
};
const overTimeFormat = (val) => {
  const times = getTimeDate(val);
  return times.times;
};
const getTimeDate = (val) => {
  const date = new Date(val);
  date.setTime(date.getTime());
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const hour = date.getHours();
  const minute = date.getMinutes();
  date.getSeconds();
  const time = {
    date: addZero(month) + "-" + addZero(day) + " " + addZero(hour) + ":" + addZero(minute),
    times: addZero(hour) + ":" + addZero(minute),
    veryDayDate: addZero(year) + "-" + addZero(month) + "-" + addZero(day) + " 00:00:00"
  };
  return time;
};
function addZero(s) {
  return s < 10 ? "0" + s : s;
}
const getTate = (val) => {
  let date = new Date(val);
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const m = addZero(year) + "-" + addZero(month) + "-" + addZero(day) + " 00:00:00";
  return m;
};
const getNow = (val) => {
  let date = new Date(val);
  date.getFullYear();
  let m = date.getMonth() + 1;
  let d = date.getDate();
  return m + "\u6708" + d + "\u65E5";
};
const tomorrowDay = (date) => {
  let odata = new Date(new Date().getTime() + 24 * 60 * 60 * 1e3);
  return getTate(odata);
};
const afterTomorrowDay = (date) => {
  let odata = new Date(new Date().getTime() + 48 * 60 * 60 * 1e3);
  return getTate(odata);
};
const getDay = () => {
  const times = timeList();
  let arr = [];
  times.forEach((val) => {
    const obj = getTate(val);
    arr.push(obj);
  });
  return arr;
};
const getMonthDay = (val) => {
  const now = timeList();
  const timeNow = Date.parse(val);
  const timeStar = Date.parse(now[0]);
  const timeEnd = Date.parse(now[now.length - 1]);
  const times = {
    timeNow,
    timeStar,
    timeEnd
  };
  return times;
};
const validateTextLength = (value) => {
  if (value != void 0) {
    let cnReg = /([\u4e00-\u9fa5]|[\u3000-\u303F]|[\uFF00-\uFF60])/g;
    let mat = value.match(cnReg);
    let length;
    if (mat) {
      length = mat.length + (value.length - mat.length) * 0.5;
      return length;
    } else {
      return value.length * 0.5;
    }
  }
};
const timeList = () => {
  var thrityMonth = [];
  for (var i = 0; i < 30; i++) {
    thrityMonth.unshift(new Date(new Date().setDate(new Date().getDate() - i)).toLocaleDateString());
  }
  return thrityMonth;
};
const positionUploadHandle = (item) => {
  common_vendor.index.getLocation({
    type: "gcj02",
    isHighAccuracy: true,
    success: function(positions) {
      if (positions) {
        const posit = common_vendor.index.getStorageSync("positions");
        if (item) {
          positionUploadAdmin(positions);
          common_vendor.index.setStorageSync("positions", { timer: posit.timer, lastPoint: positions, countTime: 0, countDist: 0 });
          return;
        }
        if (!posit) {
          const timer = setInterval(() => {
            positionUploadHandle();
          }, 1e3 * 60);
          common_vendor.index.setStorageSync("positions", { timer, lastPoint: positions, countTime: 0, countDist: 0 });
          positionUploadAdmin(positions);
        } else {
          const dist = getDistance(posit.lastPoint.latitude, posit.lastPoint.longitude, positions.latitude, positions.longitude);
          common_vendor.index.setStorageSync("positions", { timer: posit.timer, lastPoint: positions, countTime: posit.countTime + 6e4, countDist: posit.countDist + dist });
          if (posit.countTime + 6e4 >= 3e5 || posit.countDist + dist >= 100) {
            positionUploadAdmin(positions);
            common_vendor.index.setStorageSync("positions", { timer: posit.timer, lastPoint: positions, countTime: 0, countDist: 0 });
          }
        }
      } else {
        common_vendor.index.showToast({
          title: "\u4F4D\u7F6E\u66F4\u65B0\u5931\u8D25\uFF0C\u8BF7\u68C0\u67E5\u5B9A\u4F4D\u529F\u80FD\u662F\u5426\u5F00\u542F\uFF0C\u6216\u5207\u7F51\u7EDC\u4E86\u91CD\u65B0\u4E0A\u4F20",
          duration: 3e3,
          icon: "none"
        });
      }
    },
    fail: function(err) {
      common_vendor.index.showToast({
        title: "\u4F4D\u7F6E\u83B7\u53D6\u5931\u8D25\uFF0C\u8BF7\u68C0\u67E5\u5B9A\u4F4D\u529F\u80FD\u662F\u5426\u5F00\u542F\uFF0C\u6216\u5207\u7F51\u7EDC\u4E86\u91CD\u65B0\u4E0A\u4F20",
        duration: 3e3,
        icon: "none"
      });
    }
  });
};
const getDistance = (lat1, lng1, lat2, lng2, lenType = 1, decimal = 2) => {
  const EARTH_RADIUS = 6378.137;
  const PI = 3.1415926;
  const radLat1 = lat1 * PI / 180;
  const radLat2 = lat2 * PI / 180;
  let a = radLat1 - radLat2;
  let b = lng1 * PI / 180 - lng2 * PI / 180;
  let s = 2 * Math.asin(Math.sqrt(Math.pow(Math.sin(a / 2), 2) + Math.cos(radLat1) * Math.cos(radLat2) * Math.pow(Math.sin(b / 2), 2)));
  s = s * EARTH_RADIUS;
  s = lenType == 1 ? Math.round(s * 1e3) / 1 : Math.round(s * 1e4) / 1e4;
  return s;
};
const positionUploadAdmin = (positions) => {
  pages_api_index.PositionUpload({ lat: positions.latitude.toString(), lng: positions.longitude.toString() }).then((res) => {
    if (res.code == 200)
      ;
    else {
      common_vendor.index.showToast({
        title: "\u4F4D\u7F6E\u4E0A\u62A5\u5931\u8D25\uFF0C\u8BF7\u68C0\u67E5\u5B9A\u4F4D\u529F\u80FD\u662F\u5426\u5F00\u542F\uFF0C\u6216\u5207\u7F51\u7EDC\u4E86\u91CD\u65B0\u4E0A\u4F20",
        duration: 3e3,
        icon: "none"
      });
    }
  });
};
exports.afterTomorrowDay = afterTomorrowDay;
exports.getDay = getDay;
exports.getMonthDay = getMonthDay;
exports.getNow = getNow;
exports.getTate = getTate;
exports.getTimeDate = getTimeDate;
exports.overTimeFormat = overTimeFormat;
exports.positionUploadHandle = positionUploadHandle;
exports.taskTimeFormat = taskTimeFormat;
exports.tomorrowDay = tomorrowDay;
exports.validateTextLength = validateTextLength;
