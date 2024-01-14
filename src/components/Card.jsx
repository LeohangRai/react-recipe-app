import { useNavigate } from 'react-router-dom';

export default function Card({ recipeInfo }) {
  const { id, name, thumbnail_url, topics, total_time_minutes } = recipeInfo;
  const navigate = useNavigate();
  const navigateToReceipePage = () => {
    navigate(`/recipe/${id}`);
  };
  return (
    <div className="card" onClick={navigateToReceipePage}>
      <img src={thumbnail_url} alt="" />
      <div className="card-content">
        <h3>{name}</h3>
        <div className="card-info">
          <div className="tag">
            <p>{topics[0]?.name}</p>
          </div>
          {total_time_minutes ? (
            <p className="time-text">{total_time_minutes} mins</p>
          ) : null}
        </div>
      </div>
    </div>
  );
}
