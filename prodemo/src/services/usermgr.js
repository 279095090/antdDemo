import request from '../utils/request';

export async function query() {
  return request('/api/mgr/users');
}

export async function addUser() {
  return request('/api/mgr/adduser');
}
