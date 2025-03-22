import styles from "./App.module.css";
import SearchBar from "./SearchBar";
import AddItem from "./AddItem";
import ItemsDisplay from "./ItemsDisplay";
import { useState } from "react";
import { Container, Grid } from "@radix-ui/themes";

function App() {
  const [filters, setFilters] = useState({});
  const [data, setData] = useState({ items: [] });

  const updateFilters = (searchParams) => {
    setFilters(searchParams);
  };

  const addItemToData = (item) => {
    fetch("http://localhost:3000/items", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(item),
    })
      .then((response) => response.json())
      .then((newItem) => {
        setData((prevData) => ({
          items: [...prevData.items, newItem],
        }));
      })
      .catch((error) => console.error("Error adding item:", error));
  };

  const filterData = (data) => {
    const filteredData = [];

    if (!filters.name) {
      return data;
    }

    for (const item of data) {
      if (item.name !== filters.name && filters.name !== "") {
        continue;
      }

      if (item.price > filters.price && filters.name !== 0) {
        continue;
      }

      if (item.type !== filters.type && filters.type !== "") {
        continue;
      }

      if (item.brand !== filters.brand && filters.brand !== "") {
        continue;
      }

      filteredData.push(item);
    }

    return filteredData;
  };

  return (
    <div className="container">
      <div className="row mt-3">
        <ItemsDisplay items={filterData(data["items"])} />
      </div>
      <div className="row mt-3">
        <SearchBar updateSearchParams={updateFilters} />
      </div>
      <div className="row mt-3">
        <AddItem addItem={addItemToData} />
      </div>
    </div>
  );
}

export default App;
