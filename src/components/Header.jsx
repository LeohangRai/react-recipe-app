export default function Header() {
  return (
    <header className="main_header">
      <div className="text-container">
        <h1 className="header-title">
          Look for <span>Banger</span> Food
        </h1>
        <p className="header-description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
          omnis molestiae deleniti! Expedita cum ad ab labore laborum repellat
          qui id accusantium neque assumenda temporibus rem, inventore eveniet
          cumque atque.
        </p>
        <div className="header-input-container">
          <input type="text" name="" id="" placeholder="Find a recipe..." />
          <button>Search</button>
        </div>
      </div>
      <div>
        <img
          src="https://img.freepik.com/free-photo/pizza-pizza-filled-with-tomatoes-salami-olives_140725-1200.jpg?w=740&t=st=1701596041~exp=1701596641~hmac=7aba854ea79debc7092f6ca6dbdb5d42e7f63526ed4a3afc3fec742e005f9bd4"
          alt=""
          className="main_img"
        />
      </div>
    </header>
  );
}
