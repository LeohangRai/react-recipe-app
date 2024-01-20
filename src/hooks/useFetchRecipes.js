import { useEffect, useState } from 'react';
import axios from 'axios';

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
  const [recipes, setRecipes] = useState(null);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);

  const fetchRecipes = async (keyword) => {
    setLoading(true);
    setRecipes(null);
    setErrorMsg(null);
    try {
      const requestOpts = { ...options };
      if (keyword) {
        requestOpts.params.q = keyword;
      }
      const response = await axios.request(options);
      setRecipes(response.data.results);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setErrorMsg(error.message);
      setLoading(false);
    }
  };

  return [fetchRecipes, { data: recipes, loading, errorMsg }];
};

export default useFetchRecipes;
