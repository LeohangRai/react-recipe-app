import axios from 'axios';
import { useReducer } from 'react';
import {
  FetchHookActions,
  initialFetchState
} from '../common/constants/fetchHookConstants';
import fetchHookReducer from '../common/reducers/fetchHookReducer';

const options = {
  method: 'GET',
  url: 'https://tasty.p.rapidapi.com/recipes/get-more-info',
  params: {},
  headers: {
    'X-RapidAPI-Key': 'd21cb9fcaemshd1f2c08ec7a59a6p1b956fjsn61ae0a65a58e',
    'X-RapidAPI-Host': 'tasty.p.rapidapi.com'
  }
};

const useFetchRecipe = () => {
  const [{ data, isLoading, errorMsg }, dispatch] = useReducer(
    fetchHookReducer,
    initialFetchState
  );
  const fetchRecipe = async (id) => {
    dispatch({
      type: FetchHookActions.FETCHING_DATA
    });
    try {
      const requestOpts = { ...options };
      requestOpts.params.id = id;
      const response = await axios.request(requestOpts);
      dispatch({
        type: FetchHookActions.FETCH_SUCCESS,
        payload: response.data
      });
    } catch (error) {
      dispatch({
        type: FetchHookActions.FETCH_ERROR,
        payload: error.message
      });
    }
  };

  return [fetchRecipe, { data, isLoading, errorMsg }];
};

export default useFetchRecipe;
