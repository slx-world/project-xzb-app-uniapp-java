
// 参数： url:请求地址  param：请求参数  method：请求方式 callBack：回调函数
export function request ({ url = "", params = {}, method = "GET" }) {
  // let baseUrl = '/api'//用于浏览器联调测试环境
  // let baseUrl = 'http://xzb-api-test.itheima.net'//用于模拟器和真机联调测试环境
  let baseUrl = 'http://172.17.2.58/api'//用于联调开发环境

  // 获取token
  const token = uni.getStorageSync("token");
  let header = {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json;charset=UTF-8",
    Authorization: token,
  };
  if (url == '/track/upload') {
    header['Content-Type'] = 'application/x-www-form-urlencoded'
  }
  const requestRes = new Promise((resolve, reject) => {
    console.log(params, baseUrl + url, '进来了么')
    uni.request({
      url: baseUrl + url,
      data: params,
      header: header,
      method: method,
      sslVerify: false
    }).then((res) => {
      console.log(params, url, res, 'header')
      const { data } = res
      if (res.statusCode == 401) {
        uni.showToast({
          title: '您的登录已过期！请重新登录后操作！',
          duration: 2000,
          icon: 'none',
        });
        uni.redirectTo({
          url: '/pages/login/user'
        });
        return false
      }
      if (res.statusCode == 400) {
        uni.showToast({
          title: '权限不足，无法登录！',
          duration: 2000,
          icon: 'none',

        });
        uni.redirectTo({
          url: '/pages/login/user'
        });
        return false
      }
      if (data.code == 1) {
        uni.showToast({
          title: data.msg,
          duration: 2000,
          icon: 'none',
        });
        return false
      }
      if (data.code == 0 || data.code == 200) {
        resolve(res.data);
      } else {
        reject(res.data);
      }
    }).catch((err) => {
      console.log(err, 'err')
      const error = { data: { msg: err.data } };
      reject(error);
    });
  });
  return requestRes;
}
