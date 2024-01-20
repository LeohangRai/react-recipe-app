import { useReducer } from 'react';
import axios from 'axios';
import fetchHookReducer from '../common/reducers/fetchHookReducer';
import {
  FetchHookActions,
  initialFetchState
} from '../common/constants/fetchHookConstants';

const options = {
  method: 'GET',
  url: 'https://tasty.p.rapidapi.com/recipes/list',
  params: {
    from: '0',
    size: '20'
  },
  headers: {
    'X-RapidAPI-Key': 'd21cb9fcaemshd1f2c08ec7a59a6p1b956fjsn61ae0a65a58e',
    'X-RapidAPI-Host': 'tasty.p.rapidapi.com'
  }
};

const useFetchRecipes = () => {
  const [{ data, isLoading, errorMsg }, dispatch] = useReducer(
    fetchHookReducer,
    initialFetchState
  );
  const fetchRecipes = async (keyword) => {
    dispatch({
      type: FetchHookActions.FETCHING_DATA
    });
    try {
      const requestOpts = { ...options };
      if (keyword) {
        requestOpts.params.q = keyword;
      }
      const response = await axios.request(requestOpts);
      dispatch({
        type: FetchHookActions.FETCH_SUCCESS,
        payload: response.data.results
      });
    } catch (error) {
      dispatch({
        type: FetchHookActions.FETCH_ERROR,
        payload: error.message
      });
    }
  };

  return [fetchRecipes, { data, isLoading, errorMsg }];
};

export default useFetchRecipes;
