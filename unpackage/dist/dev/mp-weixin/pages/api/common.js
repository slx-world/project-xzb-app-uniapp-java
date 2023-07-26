"use strict";
var utils_request = require("../../utils/request.js");
const getProvinces = (params) => utils_request.request({
  url: "/areas/children",
  method: "get",
  params
});
exports.getProvinces = getProvinces;
