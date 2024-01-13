import { useNavigate } from 'react-router-dom';

export default function Card({ recipeInfo }) {
  const { id, name, image, tag, time } = recipeInfo;
  const navigate = useNavigate();
  const navigateToReceipePage = () => {
    navigate(`/recipe/${id}`);
  };
  return (
    <div className="card" onClick={navigateToReceipePage}>
      <img src={image} alt="" />
      <div className="card-content">
        <h3>{name}</h3>
        <div className="card-info">
          <div className="tag">
            <p>{tag}</p>
          </div>
          <p className="time-text">{time} mins</p>
        </div>
      </div>
    </div>
  );
}
