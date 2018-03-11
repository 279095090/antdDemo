import { query as queryUsers, queryCurrent,queryCurrentInfo,saveCurrentUserInfo } from '../services/user';

export default {
  namespace: 'user',

  state: {
    list: [],
    currentUser: {},
    currentUserInfo:{}
  },

  effects: {
    *fetch(_, { call, put }) {
      const response = yield call(queryUsers);
      yield put({
        type: 'save',
        payload: response,
      });
    },
    *fetchCurrent(_, { call, put }) {
      const response = yield call(queryCurrent);
      yield put({
        type: 'saveCurrentUser',
        payload: response,
      });
    },
    *fetchCurrentInfo(_,{call,put}){
      const response = yield call(queryCurrentInfo);
      yield put({
        type:'sSaveCurrentUserInfo',
        payload:response,
      });
    },
    *aChangeCurrentUserInfo({payload},{call,put}){
      debugger
      const response = yield call(saveCurrentUserInfo,payload);
      yield put({
        type:'sSaveCurrentUserInfo',
        payload:response,
      });
    }
  },

  reducers: {
    save(state, action) {
      return {
        ...state,
        list: action.payload,
      };
    },
    saveCurrentUser(state, action) {
      return {
        ...state,
        currentUser: action.payload.data,
      };
    },
    changeNotifyCount(state, action) {
      return {
        ...state,
        currentUser: {
          ...state.currentUser,
          notifyCount: action.payload,
        },
      };
    },
    sSaveCurrentUserInfo(state,action){
      return{
        ...state,
        currentUserInfo:action.payload.data             
      }
    }
  },
};
