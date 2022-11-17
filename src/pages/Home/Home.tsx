import React, { useState } from "react";
import Card from "../../components/Card";
import Title from "../../components/Title";
import "./Home.css";

interface CardType {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  category: string;
  rating: number;
}

enum Categories {
  all = "All",
  vegeterian = "Vegeterian",
  chicken = "Chicken",
  asian = "Asian",
}

function Home() {
  const data = [
    {
      id: 1,
      name: "Greek Salad",
      price: 30.5,
      description: "Great salad...",
      image:
        "https://cdn.pixabay.com/photo/2016/08/09/10/30/,tomatoes-1580273__340.jpg",
      category: "Vegeterian",
      rating: 4,
    },
    {
      id: 2,
      name: "Pad Thai",
      price: 42,
      description: "Yumi yumi",
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
        "https://cdn.pixabay.com/photo/2016/07/31/17/51/chicken-1559548__340.jpg",
      category: "Chicken",
      rating: 3,
    },
  ];

  const catgories = Object.values(Categories); //['All', 'Vegeterian', 'Asian', 'Chicken'];

  const [display, setDisplay] = useState("grid");
  const [selectdCategory, setSelectdCategory] = useState(Categories.all);
  const [filtered, setFiltered] = useState([...data]);

  function filterByCategory(
    category: Categories,
    cards: Array<CardType>
  ): Array<CardType> {
    if (category === Categories.all) {
      return cards;
    }

    return cards.filter((card) => card.category === category);
  }

  function handleCategoryChange(e: React.ChangeEvent<HTMLSelectElement>) {
    const value = e.target.value as Categories;
    const filteredData = filterByCategory(value, [...data]);

    setSelectdCategory(value);
    setFiltered(filteredData);
  }

  // function handleDisplayClick(displayType: string) {
  //     setDisplay(displayType);
  // }

  return (
    <>
      <Title content="Order Delivery Or Takeaway" />

      <div>
        <button
          onClick={() => setDisplay("grid")}
          className="btn btn-light mx-1"
        >
          <i className="bi-grid-3x3-gap-fill"></i>
        </button>

        <button onClick={() => setDisplay("list")} className="btn btn-light">
          <i className="bi-list-ul"></i>
        </button>

        <div>
          <label>Category:</label>
          <select
            value={selectdCategory}
            onChange={handleCategoryChange}
            className="form-select"
          >
            {catgories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className={`${display} p-5`}>
        {filtered.map((card) => (
          <Card key={card.id} {...card} />
        ))}
      </div>
    </>
  );
}

export default Home;
