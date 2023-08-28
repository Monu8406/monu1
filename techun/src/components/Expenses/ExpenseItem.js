import "./ExpenseItem.css";
import Card from "../UI/Card";
//import React, { useState } from "react";

let ExpenseItem = (props) => {
  // Calculation of month and day.
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });

  return (

   <Card className="expense-item">
      <div className="date">
        <div>{month}</div>
        <div>show</div>
        <div></div>
        <div>{props.date.getFullYear()}</div>
        <div>{day}</div>
       </div>
       <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      </Card>
     );
};

                                 
export default ExpenseItem;      
                                 