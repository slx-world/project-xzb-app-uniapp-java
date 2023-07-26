"use strict";
var common_vendor = require("../common/vendor.js");
function request({ url = "", params = {}, method = "GET" }) {
  if (!common_vendor.index.getStorageSync("baseUrl")) {
    common_vendor.index.setStorageSync("baseUrl", "http://172.17.2.58");
  }
  let baseUrl = "http://172.17.2.58/api";
  const token = common_vendor.index.getStorageSync("token");
  let header = {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json;charset=UTF-8",
    Authorization: token
  };
  if (url == "/track/upload") {
    header["Content-Type"] = "application/x-www-form-urlencoded";
  }
  const requestRes = new Promise((resolve, reject) => {
    common_vendor.index.request({
      url: baseUrl + url,
      data: params,
      header,
      method
    }).then((res) => {
      console.log(params, url, res, "header");
      const { data } = res;
      if (res.statusCode == 401) {
        common_vendor.index.showToast({
          title: "\u60A8\u7684\u767B\u5F55\u5DF2\u8FC7\u671F\uFF01\u8BF7\u91CD\u65B0\u767B\u5F55\u540E\u64CD\u4F5C\uFF01",
          duration: 2e3,
          icon: "none"
        });
        common_vendor.index.redirectTo({
          url: "/pages/login/user"
        });
        return false;
      }
      if (res.statusCode == 400) {
        common_vendor.index.showToast({
          title: "\u6743\u9650\u4E0D\u8DB3\uFF0C\u65E0\u6CD5\u767B\u5F55\uFF01",
          duration: 2e3,
          icon: "none"
        });
        common_vendor.index.redirectTo({
          url: "/pages/login/user"
        });
        return false;
      }
      if (data.code == 1) {
        common_vendor.index.showToast({
          title: data.msg,
          duration: 2e3,
          icon: "none"
        });
        return false;
      }
      if (data.code == 0 || data.code == 200) {
        resolve(res.data);
      } else {
        reject(res.data);
      }
    }).catch((err) => {
      const error = { data: { msg: err.data } };
      reject(error);
    });
  });
  return requestRes;
}
exports.request = request;
