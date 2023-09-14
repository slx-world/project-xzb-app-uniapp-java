"use strict";
const utils_request = require("../../utils/request.js");
const phoneLogins = (params) => utils_request.request({
  url: `/customer/open/login/worker`,
  method: "post",
  params
});
const getsmsCode = (params) => utils_request.request({
  url: `/customer/open/sms-code/send`,
  method: "post",
  params
});
exports.getsmsCode = getsmsCode;
exports.phoneLogins = phoneLogins;
