import request from '@/utils/request'

export function login(data) {
  return request({
    url: '/pandas-dashboard/user/login',
    method: 'post',
    data
  })
}

export function getInfo(token) {
  return request({
    url: '/pandas-dashboard/user/info',
    method: 'get',
    params: { token }
  })
}

export function logout() {
  return request({
    url: '/pandas-dashboard/user/logout',
    method: 'post'
  })
}
