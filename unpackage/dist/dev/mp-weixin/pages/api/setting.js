"use strict";
const utils_request = require("../../utils/request.js");
const getUserSetting = (params) => utils_request.request({
  url: `/customer/worker/serve-settings/status`,
  method: "get",
  params
});
const setPickUpStatus = (params) => utils_request.request({
  url: `/customer/worker/serve-settings/pick-up`,
  method: "put",
  params
});
const getServiceSkillAll = (params) => utils_request.request({
  url: `/customer/worker/serve-skill/category`,
  method: "get",
  params
});
const updateServiceSkill = (params) => utils_request.request({
  url: `/customer/worker/serve-skill/batchUpsert`,
  method: "post",
  params
});
const getSettingInfo = (params) => utils_request.request({
  url: `/customer/worker/serve-settings`,
  method: "get",
  params
});
const getOpenCity = (params) => utils_request.request({
  url: `/foundations/worker/region/activeRegionList`,
  method: "get",
  params
});
const setServiceSetting = (params) => utils_request.request({
  url: `/customer/worker/serve-settings/serve-scope`,
  method: "put",
  params
});
exports.getOpenCity = getOpenCity;
exports.getServiceSkillAll = getServiceSkillAll;
exports.getSettingInfo = getSettingInfo;
exports.getUserSetting = getUserSetting;
exports.setPickUpStatus = setPickUpStatus;
exports.setServiceSetting = setServiceSetting;
exports.updateServiceSkill = updateServiceSkill;
