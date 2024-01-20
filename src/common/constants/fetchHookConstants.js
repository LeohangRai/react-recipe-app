export const initialFetchState = {
  data: null,
  isLoading: false,
  errorMsg: null
};

export const FetchHookActions = {
  FETCHING_DATA: 'FETCHING_DATA',
  FETCH_SUCCESS: 'FETCH_SUCCESS',
  FETCH_ERROR: 'FETCH_ERROR'
};
