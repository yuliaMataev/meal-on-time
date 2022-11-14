interface Props {
  name: string;
  price: number;
  description: string;
  image: string;
  category: string;
  rating: number;
}

function Card({ name, price, description, image, category, rating }: Props) {
  function handleClick(name: string) {
    console.log(`Selected dish: ${name}`);
  }

  function handleCategoryClick(name: string) {
    console.log(`Selected category: ${name}`);
  }

  return (
    <div className="card m-4">
      <img src={image} className="card-img-top" alt={name} />
      <div
        onClick={() => handleCategoryClick(category)}
        className="badge text-bg-info"
      >
        {category}
      </div>
      <div className="card-body">
        <h5 className="card-title">
          <a href="#">{name}</a>
        </h5>
        <p className="card-text">{description}</p>
        <p className="card-text">{price}</p>
        <p className="card-text">
          Rating: {rating}
          <i className="bi-star"></i>
        </p>
        <a
          onClick={(e) => handleClick(name)}
          href="#"
          className="btn btn-primary"
        >
          Order Now
        </a>
      </div>
    </div>
  );
}

export default Card;
