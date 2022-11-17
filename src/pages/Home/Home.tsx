import React, { useState } from "react";
import ButtonsBar from "../../components/ButtonsBar";
import Card from "../../components/Card";
import Title from "../../components/Title";
import { data } from "./data";
import "./Home.css";
import { CardType, Categories } from "./types";

function Home() {
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
    categoryChange(value);
  }

  function categoryChange(value: Categories) {
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

      <ButtonsBar
        updateDiaplay={setDisplay}
        selectdCategory={selectdCategory}
        handleCategoryChange={handleCategoryChange}
        search={search}
        handleSearch={handleSearch}
      />

      {filtered.length === 0 ? (
        <p>No dishes to disaplay</p>
      ) : (
        <div className={`${display} p-5`}>
          {filtered.map((card) => (
            <Card key={card.id} {...card} categoryClick={categoryChange} />
          ))}
        </div>
      )}
    </>
  );
}

export default Home;
