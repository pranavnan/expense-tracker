import React from "react";
import ExpenseItem from "./ExpenseItem";
import "../css/ExpensesList.css";

export default function ExpensesList(props) {
  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback">Found no expenses</h2>;
  }

  if (props.items.length > 0) {
    return props.items.map((individualExpense) => {
      return (
        <ExpenseItem
          key={individualExpense.id}
          title={individualExpense.title}
          amount={individualExpense.amount}
          date={individualExpense.date}
        />
      );
    });
  }
}
