import styles from "./App.module.css";
import SearchBar from "./SearchBar";
import AddItem from "./AddItem";
import ItemsDisplay from "./ItemsDisplay";
import { useState, useEffect } from "react";
import { Container, Grid } from "@radix-ui/themes";
import Test from "./Class";

function App() {
  const [filters, setFilters] = useState({});
  const [data, setData] = useState({ items: [] });

  useEffect(() => {
    fetch("http://localhost:3000/items")
      .then((response) => response.json())
      .then((data) => setData({ items: data }));
  }, []);

  const updateFilters = (searchParams) => {
    setFilters(searchParams);
  };

  const deleteItem = (item) => {
    const items = data["items"];
    const requestOptions = {
      method: "DELETE",
    };

    fetch(`http://localhost:3000/items/${item.id}`, requestOptions).then(
      (response) => {
        if (response.ok) {
          const idx = items.indexOf(item);
          items.splice(idx, 1);
          setData({ items: items });
        }
      }
    );
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

    const hasFilters =
      filters.name || filters.price || filters.type || filters.brand;

    if (!hasFilters) {
      return data;
    }

    for (const item of data) {
      console.log("Item Price:", item.price, "Type:", typeof item.price);

      if (item.name !== filters.name && filters.name !== "") {
        continue;
      }

      if (
        filters.price !== undefined &&
        filters.price !== "" &&
        item.price > Number(filters.price)
      ) {
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
        <ItemsDisplay
          deleteItem={deleteItem}
          items={filterData(data["items"])}
        />
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
