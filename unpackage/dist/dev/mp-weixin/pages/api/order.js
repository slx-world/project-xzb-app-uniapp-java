"use strict";
var utils_request = require("../../utils/request.js");
const getRobOrder = (params) => utils_request.request({
  url: params ? `/orders-seize/?serveTypeId=${params}` : "/orders-seize/",
  method: "get"
});
const getHomeFilter = () => utils_request.request({
  url: `/serve-type/simpleList`,
  method: "get"
});
exports.getHomeFilter = getHomeFilter;
exports.getRobOrder = getRobOrder;
