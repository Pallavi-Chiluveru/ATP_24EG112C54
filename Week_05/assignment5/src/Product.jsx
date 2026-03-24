

function Product({ image, title, price, category }) {
  return (
    <div className="product">
      <img src={image} />
      <h4>{title}</h4>
      <p>{category}</p>
      <h3>₹ {price}</h3>
    </div>
  );
}

export default Product;