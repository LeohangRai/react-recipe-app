import { useParams } from 'react-router-dom';
import useFetchRecipe from '../hooks/useFetchRecipe';
import { useEffect } from 'react';
import RecipeHeader from '../components/recipes/Header';
import Loading from '../components/Loading';
import RecipeInfo from '../components/recipes/Info';

export default function RecipePage() {
  const { id } = useParams();
  const [fetchRecipe, { data, isLoading, errorMsg }] = useFetchRecipe();

  useEffect(() => {
    fetchRecipe(id);
  }, []);

  if (isLoading) {
    return <Loading />;
  }
  if (errorMsg) {
    return <h1>{errorMsg}</h1>;
  }
  return (
    data && (
      <>
        <RecipeHeader nutritionalFacts={data.nutrition} name={data.name} />
        <RecipeInfo
          instructions={data.instructions}
          image={data.thumbnail_url}
        />
      </>
    )
  );
}
