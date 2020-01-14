import request from '@/utils/request'

export function login(data) {
  return request({
    url: '/pandas/user/login',
    method: 'post',
    data
  })
}

export function getInfo(token) {
  return request({
    url: '/pandas/user/info',
    method: 'get',
    params: { token }
  })
}

export function logout() {
  return request({
    url: '/pandas/user/logout',
    method: 'post'
  })
}
