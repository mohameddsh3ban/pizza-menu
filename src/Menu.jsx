import "./menu.css";
import Pizza from "./Pizza";
import data from "./utils";
export default function Menu() {
  console.log(data);
  return (
    <div className="menu">
      <h2>Our menu</h2>
      <p>
        Authentic Italian cuisine. 6 creative dishes to choose from. All from
        our stone oven, all organic, all delicious.
      </p>
      <ul className="pizzas">
        {data.map((e) => (
          <Pizza
            ingredients={e.ingredients}
            name={e.name}
            PhotoName={e.photoName}
            price={e.price}
            soldOut={e.soldOut}
            key={e.name}
          />
        ))}
      </ul>
    </div>
  );
}
