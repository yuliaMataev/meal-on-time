interface Props {
  name: string;
  price: number;
  description: string;
  image: string;
  category: string;
  rating: number;
}
function Card({ name, price, description, image, category, rating }: Props) {
  /* const name = props.name; */
  return (
    <div className="card">
      <img src={image} className="card-img-top" alt={name} />
      <div className="badge text-bg-info">{category}</div>
      <div className="card-body">
        <h5 className="card-title">
          <a href="#">{name}</a>
        </h5>
        <p className="card-text">{description}</p>
        <p className="card-text">{price}</p>
        <p className="card-text"> Rating: {rating}</p>

        <i className="bi-star "></i>
        <br></br>
        <a href="#" className="btn btn-primary">
          Order Now
        </a>
      </div>
    </div>
  );
}

export default Card;
