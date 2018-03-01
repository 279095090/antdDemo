import { query as queryUsers, addUser } from '../services/usermgr';

export default {
  namespace: 'usermgr',

  state: {
    users: [],
  },

  effects: {
    *query(payload, { call, put }) {
      const response = yield call(queryUsers,payload);
      yield put({
        type: 'queryuser',
        payload: response,
      });
    },
    *addUser(payload, { call, put }) {
      const response = yield call(addUser,payload);
      yield put({
        type: 'addUserd',
        payload: response,
      });
       // save successfully
       if (response.status === 'ok') {        
        yield put(routerRedux.push('/mgr/savesuccess'));
      }
    },
  },

  reducers: {    
    queryuser(state, action) {      
      return {
        ...state,
        users: action.payload,
      };
    },
  },
};
