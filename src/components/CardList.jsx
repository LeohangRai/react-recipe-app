import { recipes } from '../data/recipes';
import Card from './Card';

export default function CardList() {
  return (
    <section className="cards">
      {recipes.map((recipe) => {
        return <Card key={recipe.id} recipeInfo={recipe} />;
      })}
    </section>
  );
}
