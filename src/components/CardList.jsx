import Card from './Card';

const recipes = [
  {
    id: 1,
    name: 'Chicken Momo',
    image:
      'https://kitchenmai.com/wp-content/uploads/2019/03/chkn_momos2-e1564320413679.jpg',
    tag: 'steam',
    time: 50
  },
  {
    id: 2,
    name: 'C. Momo',
    image:
      'https://salasdaily.com/cdn/shop/files/chiliachickenmomos.jpg?v=1692185667',
    tag: 'dumplings',
    time: 60
  },
  {
    id: 3,
    name: 'Buff Chhoila',
    image:
      'https://mykathmandukitchen.com/wp-content/uploads/2022/06/lambchoila.jpg',
    tag: 'non-veg',
    time: 40
  },
  {
    id: 4,
    name: 'Haas Chhoila',
    image:
      'https://junifoods.com/wp-content/uploads/2023/03/Duck-Choila-1-1024x693.png',
    tag: 'non-veg',
    time: 50
  },
  {
    id: 5,
    name: 'Chicken Chowmein',
    image:
      'https://mykathmandukitchen.com/wp-content/uploads/2022/06/chowmein.jpg',
    tag: 'noodles',
    time: 30
  }
];

export default function CardList() {
  return (
    <section className="cards">
      {recipes.map((recipe) => {
        return <Card key={recipe.id} recipeInfo={recipe} />;
      })}
    </section>
  );
}
