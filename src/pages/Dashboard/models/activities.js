import { queryActivities, fakeSubmitForm ,queryRule} from '@/services/api';
import { message } from 'antd';
export default {
  namespace: 'activities',

  state: {
    data: {
      list: [],
      pagination: {},
    },
    test:'OK'
  },

  effects: {
    *fetchList(_, { call, put }) {
      const response = yield call(queryActivities);
      yield put({
        type: 'saveList',
        payload: Array.isArray(response) ? response : [],
      });
    },
    *submitRegularForm(_, { call,put }) {
      const response = yield call(queryRule);
      yield put({
        type: 'save',
        payload: response,
      });
      message.success('OK')
    },
  },

  reducers: {
    saveList(state, action) {
      return {
        ...state,
        list: action.payload,
      };
    },
    save(state, action) {
      return {
        ...state,
        data: action.payload,
        status:'ERROR'
      };
    },
  },
};
