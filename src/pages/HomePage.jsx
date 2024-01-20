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

  const handleSearch = (keyword) => {
    if (keyword) {
      fetchRecipes(keyword);
    }
  };

  return (
    <>
      <Header handleSearch={handleSearch} />
      {loading && <Loading />}
      {data && <CardList recipes={data} />}
      {errorMsg && <p>{errorMsg}</p>}
    </>
  );
}
