import React, { useEffect, useState } from "react";

import "../assets/styles/listExpenses.css";

import SingleExpense from "./SingleExpense";

const ListExpenses = ({ expenses = [], categories, selectedCategory }) => {
  const [filteredExpenses, setFilteredExpenses] = useState(expenses);

  useEffect(() => {
    if (selectedCategory.id === "0") {
      setFilteredExpenses(expenses);
    } else {
      let tempExpenses = expenses.filter(
        (item) => item.categoryId === selectedCategory.id
      );
      setFilteredExpenses(tempExpenses);
    }
  }, [selectedCategory]);
  return (
    <div className="expensesContainer">
      <div className="expensesWrapper">
        {filteredExpenses.length === 0 ? (
          <div className="emptyList">
            Aradığınız kategoride bir harcama yoktur
          </div>
        ) : (
          <>
            {filteredExpenses.map((expense) => (
              <SingleExpense
                categories={categories}
                key={expense.id}
                expense={expense}
              />
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default ListExpenses;