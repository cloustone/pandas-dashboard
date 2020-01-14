import request from '@/utils/request'

export function getList(params) {
  return request({
    url: '/pandas/table/list',
    method: 'get',
    params
  })
}
