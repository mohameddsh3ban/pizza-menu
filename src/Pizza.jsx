import './pizza.css'
export default function Pizza({ soldOut, PhotoName, price, ingredients, name }) {
  return (
    <div className={`pizza ${soldOut ? "sold-out" : ""}`}>
      <img src={PhotoName} alt={name} />
      <h3>{name}</h3>
      <p>{ingredients}</p>
      <span>{soldOut ? "SOLD OUT" : price}</span>
    </div>
  );
}