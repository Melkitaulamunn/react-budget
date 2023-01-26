import React, { useEffect, useState } from "react";

import Header from "./components/Header";
import CategoriesList from "./components/CategoriesList";
import ListExpenses from "./components/ListExpenses";

import "./assets/styles/general.css";

import axios from 'axios';
function App() {
  const [expenses, setExpenses] = useState(null);
  const [categories, setCategories] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState({
    id: "0",
    name: "Hepsi",
  });

  useEffect(() => {
    axios
      .get("http://localhost:3004/categories")
      .then((res) => {
        setCategories(res.data);
      })
      .catch((err) => {});
    axios
      .get("http://localhost:3004/expenses")
      .then((res) => {
        setExpenses(res.data);
      })
      .catch((err) => {});
  }, []);

  if (categories === null || expenses === null) return null;

  return (
    <div>
      <Header />
      <CategoriesList
        categories={categories}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <ListExpenses
        selectedCategory={selectedCategory}
        categories={categories}
        expenses={expenses}
      />
    </div>
  );
}

export default App;