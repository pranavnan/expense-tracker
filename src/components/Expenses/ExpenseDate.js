import "../css/ExpenseDate.css";
import React from "react";

function ExpenseDate(props) {
  const newDate = new Date(props.date);
  const month = newDate.toLocaleString("en-us", { month: "long" });
  const year = newDate.getFullYear();
  const day = newDate.toLocaleString("en-us", { day: "2-digit" });

  return (
    <div className="expense-date">
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__year">{year}</div>
      <div className="expense-date__day">{day}</div>
    </div>
  );
}

export default ExpenseDate;
