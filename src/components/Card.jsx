export default function Card() {
  return (
    <div className="card">
      <img
        src="https://img.freepik.com/premium-photo/dum-handi-muttona-biryania-gosht-pilaf-is-prepared-earthen-clay-pot-called-haandi-1-kilo-size-popular-indian-non-vegetarian-fooda_466689-52328.jpg?w=740"
        alt=""
      />
      <div className="card-content">
        <h3>Mutton Biryani</h3>
        <div className="card-info">
          <div className="tag">
            <p>Dinner</p>
          </div>
          <p className="time-text">60 mins</p>
        </div>
      </div>
    </div>
  );
}
