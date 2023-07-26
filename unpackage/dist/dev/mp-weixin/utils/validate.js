"use strict";
function validatePhone(rule, value, data, callback) {
  const reg = /^[1][3-9][0-9]{9}$/;
  if (value === "" || value === void 0 || value === null) {
    if (rule.required) {
      callback("\u8BF7\u8F93\u5165\u7535\u8BDD\u53F7\u7801");
    } else {
      callback();
    }
  } else if (!Number.isInteger(value)) {
    callback("\u7535\u8BDD\u53F7\u7801\u5FC5\u987B\u5168\u4E3A\u6570\u5B57");
  } else if (value.trim().length < 11) {
    callback("\u7535\u8BDD\u53F7\u7801\u957F\u5EA6\u5FC5\u987B\u662F11\u4F4D");
  } else {
    if (!reg.test(value) && value !== "") {
      callback("\u8BF7\u8F93\u5165\u6B63\u786E\u7684\u7535\u8BDD\u53F7\u7801");
    } else {
      callback();
    }
  }
}
const isPhone = (value) => {
  const reg = /^[1][3-9][0-9]{9}$/;
  if (!reg.test(value) || value === "") {
    return false;
  } else {
    return true;
  }
};
const timeCountdown = (obj) => {
  const TIME_COUNT = 60;
  if (!obj.timer) {
    obj.times = TIME_COUNT;
    obj.show = false;
    obj.timer = setInterval(() => {
      if (obj.times > 0 && obj.times <= TIME_COUNT) {
        obj.times--;
      } else {
        obj.show = true;
        clearInterval(obj.timer);
        obj.timer = null;
      }
    }, 1e3);
  }
  return {
    timer: obj.timer,
    show: obj.show,
    times: obj.times
  };
};
const validateIdentityCard = (value) => {
  const accountreg = /(^\d{15}$)|(^\d{17}(\d|X|x)$)/g;
  if (value === void 0 || value === "") {
    return "\u8BF7\u8F93\u5165\u8EAB\u4EFD\u8BC1\u53F7";
  } else if (!accountreg.test(value)) {
    return "\u8EAB\u4EFD\u8BC1\u957F\u5EA6\u6216\u683C\u5F0F\u9519\u8BEF";
  } else {
    return true;
  }
};
exports.isPhone = isPhone;
exports.timeCountdown = timeCountdown;
exports.validateIdentityCard = validateIdentityCard;
exports.validatePhone = validatePhone;
