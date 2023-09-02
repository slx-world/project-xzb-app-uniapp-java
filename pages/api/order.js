import {
  request
} from "../../utils/request.js"

//获取派单列表
export const getDispatchOrder = (params) =>
  request({
    url: `/orders-dispatch/worker/queryForList?serveTypeId=${params}`,
    method: 'get',
  })
//拒单
export const rejectOrder = (params) =>
  request({
    url: `/orders-dispatch/worker/reject`,
    method: 'post',
    params
  })
//接单
export const receiveOrder = (params) =>
  request({
    url: `/orders-dispatch/worker/receive`,
    method: 'post',
    params
  })
//获取派单详细信息
export const getDispatchOrderInfo = (params) =>
  request({
    url: `/orders-dispatch/worker/${params}`,
    method: 'get',
  })
//获取抢单列表
export const getRobOrder = (params) =>
  request({
    url: params ? `/orders-seize/worker?${typeof params === 'number' ? 'serveDistance' : 'serveTypeId'}=${params}` : '/orders-seize/worker',
    method: 'get',
  })
//获取首页服务类型筛选数据
export const getHomeFilter = () =>
  request({
    url: `/foundations/operation/serve-type/queryServeTypeListByActiveStatus`,
    method: 'get',
  })
//抢单
export const robOrder = (params) =>
  request({
    url: `/orders-seize/worker`,
    method: 'post',
    params
  })
//获取订单列表
export const getOrder = (params, id) =>
  request({
    url: params ? `/orders-manager/worker/queryForList?serveStatus=${params}&sortBy=` + (id ? id : '') : `/orders-manager/worker/queryForList?sortBy=${id ? id : ''}`,
    method: 'get',
  })
//删除订单
export const deleteOrder = (params) =>
  request({
    url: `/orders-manager/worker/serve/${params}`,
    method: 'delete',
  })
//获取订单详情
export const getOrderInfo = (params) =>
  request({
    url: `/orders-manager/worker/${params}`,
    method: 'get',
  })
//取消订单
export const cancelOrder = (params) =>
  request({
    url: `/orders-manager/worker/cancel`,
    method: 'post',
    params
  })
//开始服务
export const startServe = (params) =>
  request({
    url: `/orders-manager/worker/start`,
    method: 'post',
    params
  })
//完成服务
export const finishServe = (params) =>
  request({
    url: `/orders-manager/worker/finish`,
    method: 'post',
    params
  })
//获取各个状态下的订单数量
export const getOrderStatusNum = (params) =>
  request({
    url: `/orders-manager/worker/status/num`,
    method: 'get',
  })

// //文件上传
// export const uploadFile = (params) =>
//   request({
//     url: `/storage/upload`,
//     method: 'post',
//     params
//   })