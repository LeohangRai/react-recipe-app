import { useEffect } from 'react';
import CardList from '../components/CardList';
import Header from '../components/Header';
import Loading from '../components/Loading';
import useFetchRecipes from '../hooks/useFetchRecipes';

export default function HomePage() {
  const [fetchRecipes, { data, loading, errorMsg }] = useFetchRecipes();

  useEffect(() => {
    fetchRecipes();
  }, []);
  
  return (
    <>
      <Header />
      {loading && <Loading />}
      {data && <CardList recipes={data} />}
      {errorMsg && <p>{errorMsg}</p>}
    </>
  );
}
