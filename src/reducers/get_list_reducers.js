import { LOADING, SUCCESS, ERROR, RELOADING, NONE } from '../constants/misc.js';
import { GET_LIST_LOADING, GET_LIST_FAIL,GET_LIST_SUCCEED,GET_LIST_RELOAD} from '../constants/redux_constant';

export default function get_list_reducers(state = {}, action) {

  switch (action.type) {

    case GET_LIST_FAIL:
      return Object.assign({}, state, { status: ERROR, error: action.payload, });

    case 'AUTH_EXPIRE':
      return Object.assign({}, state, { status: 'AUTH_EXPIRE', value: 'AUTH_EXPIRE', });

    case GET_LIST_LOADING:
      return Object.assign({}, state, { status: LOADING });

    case GET_LIST_SUCCEED:
      return Object.assign({}, state, { status: SUCCESS, value: action.payload });

    case GET_LIST_RELOAD:
      return Object.assign({}, state, { status: RELOADING, value: action.payload });

    default:
      return Object.assign({}, state, { status: NONE });
  }
}