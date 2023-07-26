"use strict";
var utils_request = require("../../utils/request.js");
const calculateFreight = (params) => utils_request.request({
  url: "/tasks/calculate",
  method: "post",
  params
});
exports.calculateFreight = calculateFreight;
