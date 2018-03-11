import request from '../utils/request';

export async function query() {
  return request('/api/users');
}

export async function queryCurrent() {
  return request('/api/currentUser');
}

export async function queryCurrentInfo() {
  return request('/api/currentUserInfo')
}

export async function saveCurrentUserInfo(params) {
  return request('/api/saveCurrentUserInfo',
    {
      method: 'POST',
      body: {
        ...params,        
      }
    });
}