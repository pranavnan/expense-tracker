import Card from "../UI/Card";
import React, { useState } from "react";
import "../css/Expenses.css";
import ExpenseFilter from "./ExpenseFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2023");

  function filterChangeHandler(selectedYear) {
    setFilteredYear(selectedYear);
  }

  const filteredExpenses = props.expense.filter((individualExpense) => {
    const newDate = new Date(individualExpense.date);
    return newDate.getFullYear().toString() === filteredYear.toString();
  });

  // let messages = <p>No Expense found in year {filteredYear}</p>;

  // if (filteredExpenses.length > 0) {
  //   messages = filteredExpenses.map((individualExpense) => {
  //     return (
  //       <ExpenseItem
  //         key={individualExpense.id}
  //         title={individualExpense.title}
  //         amount={individualExpense.amount}
  //         date={individualExpense.date}
  //       />
  //     );
  //   });
  // }

  return (
    <>
      <Card className="expenses">
        <ExpenseFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />

        <ExpensesChart expenses={filteredExpenses} />

        <ExpensesList items={filteredExpenses} />
      </Card>
    </>
  );
}

export default Expenses;
