import request from '@/utils/request'

export function getList(params) {
  return request({
    url: '/pandas-dashboard/table/list',
    method: 'get',
    params
  })
}
