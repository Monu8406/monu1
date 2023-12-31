import "./Expenses.css";

import React from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";

let Expenses = (props) => {
  return (
    <Card className="expenses">
      {
        props.item.map( 
          expenses =>(
            <ExpenseItem

            date={expenses.date}
            title={expenses.title}
            amount={expenses.amount}
            />
    
          )
          
        )
      }

     
     
    </Card>
  );
};

export default Expenses;
