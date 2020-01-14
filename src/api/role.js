import request from '@/utils/request'

export function getRoutes() {
  return request({
    url: '/pandas/routes',
    method: 'get'
  })
}

export function getRoles() {
  return request({
    url: '/pandas/roles',
    method: 'get'
  })
}

export function addRole(data) {
  return request({
    url: '/pandas/role',
    method: 'post',
    data
  })
}

export function updateRole(id, data) {
  return request({
    url: `/pandas/role/${id}`,
    method: 'put',
    data
  })
}

export function deleteRole(id) {
  return request({
    url: `/pandas/role/${id}`,
    method: 'delete'
  })
}
