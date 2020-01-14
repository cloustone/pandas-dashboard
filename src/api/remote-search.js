import request from '@/utils/request'

export function searchUser(name) {
  return request({
    url: '/pandas/search/user',
    method: 'get',
    params: { name }
  })
}

export function transactionList(query) {
  return request({
    url: '/pandas/transaction/list',
    method: 'get',
    params: query
  })
}
