import {
  request
} from "../../utils/request.js"

//获取派单列表
export const getDispatchOrder = (params) =>
  request({
    url: `/orders-dispatch/queryForList?serveTypeId=${params}`,
    method: 'get',
  })
//拒单
export const rejectOrder = (params) =>
  request({
    url: `/orders-dispatch/reject`,
    method: 'post',
    params
  })
//接单
export const receiveOrder = (params) =>
  request({
    url: `/orders-dispatch/receive`,
    method: 'post',
    params
  })
//获取派单详细信息
export const getDispatchOrderInfo = (params) =>
  request({
    url: `/orders-dispatch/${params}`,
    method: 'get',
  })
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
//获取订单列表
export const getOrder = (params, id) =>
  request({
    url: params ? `/orders-serve/queryForList?serveStatus=${params}&id=` + (id ? id : '') : `/orders-serve/queryForList?id=${id}`,
    method: 'get',
  })
//获取订单详情
export const getOrderInfo = (params) =>
  request({
    url: `/orders-serve/${params}`,
    method: 'get',
  })
//取消订单
export const cancelOrder = (params) =>
  request({
    url: `/orders-serve/cancel`,
    method: 'post',
    params
  })
//开始服务
export const startServe = (params) =>
  request({
    url: `/orders-serve/start`,
    method: 'post',
    params
  })
//完成服务
export const finishServe = (params) =>
  request({
    url: `/orders-serve/finish`,
    method: 'post',
    params
  })
//获取各个状态下的订单数量
export const getOrderStatusNum = (params) =>
  request({
    url: `/orders-serve/status/num`,
    method: 'get',
  })

// //文件上传
// export const uploadFile = (params) =>
//   request({
//     url: `/storage/upload`,
//     method: 'post',
//     params
//   })