import {
  FetchHookActions,
  initialFetchState
} from '../constants/fetchHookConstants';

export default function (_, action) {
  switch (action.type) {
    case FetchHookActions.FETCHING_DATA:
      return {
        data: null,
        isLoading: true,
        errorMsg: null
      };
    case FetchHookActions.FETCH_SUCCESS:
      return {
        data: action.payload,
        isLoading: false,
        errorMsg: null
      };
    case FetchHookActions.FETCH_ERROR:
      return {
        data: null,
        isLoading: false,
        errorMsg: action.payload
      };
    default:
      return initialFetchState;
  }
}
