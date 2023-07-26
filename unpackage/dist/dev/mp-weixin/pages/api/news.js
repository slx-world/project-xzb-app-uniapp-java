"use strict";
var utils_request = require("../../utils/request.js");
const getNewList = (type) => utils_request.request({
  url: `/messages/list?bussinessType=3&contentType=${type}`,
  method: "get"
});
const getMessagesList = (params) => utils_request.request({
  url: `/messages/page`,
  method: "get",
  params
});
const getNotice = (params) => utils_request.request({
  url: "/messages/notice/new/get",
  method: "get",
  params
});
const msgRead = (id) => utils_request.request({
  url: `/messages/${id}`,
  method: "put"
});
const msgAllRead = (params) => utils_request.request({
  url: `/messages/readAll/${params}`,
  method: "put",
  params
});
exports.getMessagesList = getMessagesList;
exports.getNewList = getNewList;
exports.getNotice = getNotice;
exports.msgAllRead = msgAllRead;
exports.msgRead = msgRead;
