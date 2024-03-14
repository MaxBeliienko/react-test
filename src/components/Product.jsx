const Product = ({ name, price }) => {
  return (
    <div>
      <h2>{name}</h2>
      <img
        src="<https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640>"
        alt="Tacos With Lime"
        width="640"
      />
      {price !== 0 && <p>Price: {price} credits</p>}
    </div>
  );
};

export default Product;
