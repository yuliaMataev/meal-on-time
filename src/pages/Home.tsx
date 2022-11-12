import Card from "../components/Card";
import Title from "../components/Title";

function Home() {
  const data = [
    {
      id: 1,
      name: "Greek Salad",
      price: 30.5,
      description: "Great salad...",
      image:
        "https://cdn.pixabay.com/photo/2016/08/09/10/30/,tomatoes-1580273__340.jpg",
      category: "Vegetarian",
      rating: 4,
    },
    {
      id: 2,
      name: "Pad Thai",
      price: 42,
      description: "Tasty",
      image:
        "https://cdn.pixabay.com/photo/2017/02/25/15/23/pad-thai-2098017__340.jpg",
      category: "Asian",
      rating: 5,
    },
    {
      id: 3,
      name: "Fried Chicken",
      price: 98.6,
      description: "I like it",
      image:
        "https://cdn.pixabay.com/photo/2014/01/16/01/48/chicken-nuggets-246180__340.jpg",
      category: "Chicken",
      rating: 3,
    },
  ];

  return (
    <>
      <Title content="Order Delivery Or Takeaway" />

      <div className="d-flex">
        {data.map((card) => (
          <Card
            key={card.id}
            name={card.name}
            price={card.price}
            description={card.description}
            image={card.image}
            category={card.category}
            rating={card.rating}
          />
        ))}

        {/* <Card
                    name="Greek Salad"
                    price={30.5}
                    description="Great salad..."
                    image="https://cdn.pixabay.com/photo/2016/08/09/10/30/tomatoes-1580273__340.jpg"
                    category="Vegeterian"
                    rating={4}
                />

                <Card
                    name="Pad Thai"
                    price={42}
                    description="Yumi yumi"
                    image="https://cdn.pixabay.com/photo/2017/02/25/15/23/pad-thai-2098017__340.jpg"
                    category="Asian"
                    rating={5}
                />

                <Card
                    name="Fried Chicken"
                    price={98.60}
                    description="I like it"
                    image="https://cdn.pixabay.com/photo/2014/01/16/01/48/chicken-nuggets-246180__340.jpg"
                    category="Chicken"
                    rating={3}
                /> */}
      </div>
    </>
  );
}

export default Home;
