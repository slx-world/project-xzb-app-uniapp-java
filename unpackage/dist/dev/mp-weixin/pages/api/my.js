"use strict";
var utils_request = require("../../utils/request.js");
const getUserScope = (params) => utils_request.request({
  url: `/users/scope`,
  method: "get",
  params
});
exports.getUserScope = getUserScope;
