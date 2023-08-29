import {
  request
} from "../../utils/request.js"

// 手机号登录
export const phoneLogins = (params) =>
  request({
    url: `/customer/open/login/worker`,
    method: 'post',
    params
  })
// 发送短信验证码
export const getsmsCode = (params) =>
  request({
    url: `/customer/open/sms-code/send`,
    method: 'post',
    params
  })
