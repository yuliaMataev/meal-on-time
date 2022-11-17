import React, { useState } from "react";
import Card from "../../components/Card";
import Title from "../../components/Title";
import { data } from "./data";
import "./Home.css";
import { CardType, Categories } from "./types";

function Home() {
  const catgories = Object.values(Categories);

  const [display, setDisplay] = useState("grid");
  const [selectdCategory, setSelectdCategory] = useState(Categories.all);
  const [filtered, setFiltered] = useState([...data]);
  const [search, setSearch] = useState("");

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
    setSearch("");
    setFiltered(filteredData);
  }

  function handleSearch(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;
    let result = [...data];

    if (value.length > 0) {
      const stripVal = value.trim().toLowerCase();
      result = [...data].filter((card) =>
        card.name.toLowerCase().includes(stripVal)
      );
    }

    setSelectdCategory(Categories.all);
    setSearch(value);
    setFiltered(result);
  }

  if (data.length === 0) return <p>No dishes in menu</p>;

  return (
    <>
      <Title content="Order Delivery Or Takeaway" />

      <div className="d-flex px-5">
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
        </div>

        <div className="d-flex align-items-center">
          <label className="mx-3">Category:</label>
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

          <input
            value={search}
            onChange={(e) => handleSearch(e)}
            placeholder="Search"
            className="form-control ms-3"
          />
        </div>
      </div>

      {filtered.length === 0 ? (
        <p>No dishes to disaplay</p>
      ) : (
        <div className={`${display} p-5`}>
          {filtered.map((card) => (
            <Card key={card.id} {...card} />
          ))}
        </div>
      )}
    </>
  );
}

export default Home;
