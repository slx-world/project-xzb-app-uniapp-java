"use strict";
var utils_request = require("../../utils/request.js");
const phoneLogins = (params) => utils_request.request({
  url: `/login/worker`,
  method: "post",
  params
});
const getsmsCode = (params) => utils_request.request({
  url: `/sms-code/send`,
  method: "post",
  params
});
const getUserInfo = (params) => utils_request.request({
  url: `/users/get`,
  method: "get",
  params
});
exports.getUserInfo = getUserInfo;
exports.getsmsCode = getsmsCode;
exports.phoneLogins = phoneLogins;
