
import {
  request
} from "../../utils/request.js"

//获取配置状态
export const getUserSetting = (params) =>
  request({
    url: `/serve-settings/status`,
    method: 'get',
    params
  })

//修改接单设置
export const setPickUpStatus = (params) =>
  request({
    url: `/serve-settings/pick-up`,
    method: 'put',
    params
  })

//获取服务分类
export const getServiceClassify = (params) =>
  request({
    url: `/serve-skill/listServeType`,
    method: 'get',
    params
  })
//获取服务分类下的服务技能
export const getServiceSkillByClassify = (params) =>
  request({
    url: `/serve-skill/listByServeType`,
    method: 'get',
    params
  })
//获取服务技能及其下的服务技能所有数据
export const getServiceSkillAll = (params) =>
  request({
    url: `/serve-skill/category`,
    method: 'get',
    params
  })
//修改服务技能
export const updateServiceSkill = (params) =>
  request({
    url: `/serve-skill/batchUpsert`,
    method: 'post',
    params
  })
//获取配置详细信息
export const getSettingInfo = (params) =>
  request({
    url: `/serve-settings`,
    method: 'get',
    params
  })
//获取开通城市列表
export const getOpenCity = (params) =>
  request({
    url: `/region/listSimple`,
    method: 'get',
    params
  })
//修改服务范围
export const setServiceSetting = (params) =>
  request({
    url: `/serve-settings/serve-scope`,
    method: 'put',
    params
  })
