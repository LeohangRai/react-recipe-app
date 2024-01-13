import { useParams } from 'react-router-dom';
import { recipes } from '../data/recipes';

export default function RecipePage() {
  const { id } = useParams();
  const recipe = recipes.find((r) => r.id === Number(id));
  return (
    <div>
      <h1>{recipe.name}</h1>
    </div>
  );
}
