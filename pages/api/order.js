import {
  request
} from "../../utils/request.js"

//获取抢单列表
export const getRobOrder = (params) =>
  request({
    url: params ? `/orders-seize/?serveTypeId=${params}` : '/orders-seize/',
    method: 'get',
  })
//获取首页服务类型筛选数据
export const getHomeFilter = () =>
  request({
    url: `/serve-type/simpleList`,
    method: 'get',
  })
//抢单
export const robOrder = (params) =>
  request({
    url: `/orders-seize/`,
    method: 'post',
    params
  })