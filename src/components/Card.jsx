export default function Card({ recipeInfo }) {
  const { name, image, tag, time } = recipeInfo;
  return (
    <div className="card">
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
