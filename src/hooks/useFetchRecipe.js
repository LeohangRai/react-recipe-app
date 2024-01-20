import axios from 'axios';
import { useState } from 'react';

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
  const [recipe, setRecipe] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);

  const fetchRecipe = async (id) => {
    setRecipe(null);
    setIsLoading(true);
    setErrorMsg(null);
    try {
      const requestOpts = { ...options };
      requestOpts.params.id = id;
      const response = await axios.request(requestOpts);
      setRecipe(response.data);
      setIsLoading(false);
    } catch (error) {
      setErrorMsg(error.message);
      setIsLoading(false);
    }
  };

  return [fetchRecipe, { data: recipe, isLoading, errorMsg }];
};

export default useFetchRecipe;
