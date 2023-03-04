import React from "react";
import "../css/ExpenseFilter.css";

export default function ExpenseFilter(props) {
  function onChangeHandler(e) {
    props.onChangeFilter(e.target.value);
  }

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label htmlFor="year-option">Filter by year</label>
        <select
          value={props.selected}
          onChange={onChangeHandler}
          name=""
          id="year-option"
        >
          <option value="2023">2023</option>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
}
