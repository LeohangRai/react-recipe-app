export default function RecipeNutritionalFact({ fact, children }) {
  const { amount, category } = fact;
  return (
    <div className="recipe-fact-container">
      {children}
      <h3>{amount}</h3>
      <p>{category}</p>
    </div>
  );
}
