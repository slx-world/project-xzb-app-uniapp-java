"use strict";
var utils_request = require("../../utils/request.js");
const getDeliveryList = (params) => utils_request.request({
  url: "/tasks/page",
  method: "get",
  params
});
const transferBatch = (params) => utils_request.request({
  url: "/tasks/transfer/batch",
  method: "post",
  params
});
const taskDelete = (id) => utils_request.request({
  url: `/tasks/${id}`,
  method: "delete"
});
const taskCancel = (params) => utils_request.request({
  url: `/tasks/cancel`,
  method: "post",
  params
});
const getDetail = (id) => utils_request.request({
  url: `/tasks/get/${id}`,
  method: "get"
});
const idCardCheck = (params) => utils_request.request({
  url: `/tasks/idCard/check`,
  method: "post",
  params
});
const getPickup = (params) => utils_request.request({
  url: `/tasks/pickup`,
  method: "put",
  params
});
const getSameAgency = (params) => utils_request.request({
  url: `/users/sameAgency`,
  method: "get",
  params
});
const rejection = (id) => utils_request.request({
  url: `/tasks/reject/${id}`,
  method: "put"
});
const tasksSign = (params) => utils_request.request({
  url: `/tasks/sign`,
  method: "put",
  params
});
const getQrCode = (params) => utils_request.request({
  url: `/pays/qrCode/get`,
  method: "post",
  params
});
const paySucceed = (id) => utils_request.request({
  url: `/pays/status/${id}`,
  method: "get"
});
const getTracks = (id) => utils_request.request({
  url: `/tasks/tracks/${id}`,
  method: "get"
});
const getSearch = (params) => utils_request.request({
  url: `/tasks/search`,
  method: "post",
  params
});
const getRecentSearch = () => utils_request.request({
  url: `/tasks/recentSearch`,
  method: "get"
});
const setMarkRecent = (transportOrderId) => utils_request.request({
  url: `/tasks/markRecent/${transportOrderId}`,
  method: "get"
});
const clearRecentSearch = () => utils_request.request({
  url: `/tasks/recentSearch`,
  method: "delete"
});
const PositionUpload = (params) => utils_request.request({
  url: `/track/upload`,
  method: "put",
  data: params,
  params
});
exports.PositionUpload = PositionUpload;
exports.clearRecentSearch = clearRecentSearch;
exports.getDeliveryList = getDeliveryList;
exports.getDetail = getDetail;
exports.getPickup = getPickup;
exports.getQrCode = getQrCode;
exports.getRecentSearch = getRecentSearch;
exports.getSameAgency = getSameAgency;
exports.getSearch = getSearch;
exports.getTracks = getTracks;
exports.idCardCheck = idCardCheck;
exports.paySucceed = paySucceed;
exports.rejection = rejection;
exports.setMarkRecent = setMarkRecent;
exports.taskCancel = taskCancel;
exports.taskDelete = taskDelete;
exports.tasksSign = tasksSign;
exports.transferBatch = transferBatch;
