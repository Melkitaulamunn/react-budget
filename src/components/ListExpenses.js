import React, { useEffect, useState } from "react";

import "../assets/styles/listExpenses.css";

import SingleExpense from "./SingleExpense";
import addIcon from "../assets/imgs/add.png";
import addIconHover from "../assets/imgs/addHover.png";

import { useNavigate } from "react-router-dom";

const ListExpenses = ({ expenses = [], categories, selectedCategory }) => {
  const [filteredExpenses, setFilteredExpenses] = useState(expenses);
  const [addBtnHovered, setAddBtnHovered] = useState(false);
  const navigate = useNavigate();
  var total=0
  for(let i=0;i<expenses.length;i++){
    total+=Number(expenses[i].price)
  }

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
    <div>
      <div className="expensesContainer">
        <div className="totalPriceWrapper">
          <p><span>Toplam: </span><span>{total} &#8378;</span></p>
        </div>
        <button
          onMouseEnter={() => setAddBtnHovered(true)}
          onMouseLeave={() => setAddBtnHovered(false)}
          onClick={() => navigate("/add-expense")}
          className="addBtn">
          {addBtnHovered === true ? (
            <img src={addIconHover} />
          ) : (
            <img src={addIcon} />
          )}
        </button>
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
    </div>
  );
};

export default ListExpenses;