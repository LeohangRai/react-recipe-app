import axios from 'axios';
import { useReducer } from 'react';

const options = {
  method: 'GET',
  url: 'https://tasty.p.rapidapi.com/recipes/get-more-info',
  params: {},
  headers: {
    'X-RapidAPI-Key': 'd21cb9fcaemshd1f2c08ec7a59a6p1b956fjsn61ae0a65a58e',
    'X-RapidAPI-Host': 'tasty.p.rapidapi.com'
  }
};

const initialState = {
  data: null,
  isLoading: false,
  errorMsg: null
};

const Actions = {
  FETCHING_DATA: 'FETCHING_DATA',
  FETCH_SUCCESS: 'FETCH_SUCCESS',
  FETCH_ERROR: 'FETCH_ERROR'
};

const reducer = (_, action) => {
  switch (action.type) {
    case Actions.FETCHING_DATA:
      return {
        data: null,
        isLoading: true,
        errorMsg: null
      };
    case Actions.FETCH_SUCCESS:
      return {
        data: action.payload,
        isLoading: false,
        errorMsg: null
      };
    case Actions.FETCH_ERROR:
      return {
        data: null,
        isLoading: false,
        errorMsg: action.payload
      };
    default:
      return initialState;
  }
};

const useFetchRecipe = () => {
  const [{ data, isLoading, errorMsg }, dispatch] = useReducer(
    reducer,
    initialState
  );
  const fetchRecipe = async (id) => {
    dispatch({
      type: Actions.FETCHING_DATA
    });
    try {
      const requestOpts = { ...options };
      requestOpts.params.id = id;
      const response = await axios.request(requestOpts);
      dispatch({
        type: Actions.FETCH_SUCCESS,
        payload: response.data
      });
    } catch (error) {
      dispatch({
        type: Actions.FETCH_ERROR,
        payload: error.message
      });
    }
  };

  return [fetchRecipe, { data, isLoading, errorMsg }];
};

export default useFetchRecipe;
