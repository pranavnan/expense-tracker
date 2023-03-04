import "./App.css";
import React, { useEffect, useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import { DUMMY_EXPENSES } from "./contants/chart-data";

let firstTime = true;

function App() {
  const [expenses, setExpenses] = useState(
    localStorage.getItem("expenses")
      ? JSON.parse(localStorage.getItem("expenses"))
      : DUMMY_EXPENSES
  );

  useEffect(() => {
    if (firstTime) {
      firstTime = false;
      return;
    }
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }, [expenses]);

  useEffect(() => {}, []);

  function addExpenseHandler(expense) {
    setExpenses((prevState) => {
      return [expense, ...prevState];
    });
  }

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expense={expenses} />
    </div>
  );
}

export default App;
