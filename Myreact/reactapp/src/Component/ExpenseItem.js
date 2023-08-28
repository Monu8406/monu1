  import './ExpenseItem.css';
  import React, { useState } from "react";

  import Card from './Card';
   let ExpenseItem =(props)=>
   {
     const day =props.date.toLocaleString("en-US",{day:"2-digit"});
      const month =props.date.toLocaleString("en-US",{month: "long"});
      
    
    //  const month = props.date.toLocaleString("en-US", { month: "long" });
    //  const day = props.date.toLocaleString("en-US", { day: "2-digit" });
    
    let [newTitle, setNewTitle] = useState(props.title);
    let [title, setTitle] = useState(props.title);
  
    const clickHandler = () => {
      setTitle(newTitle);
    };


  
    const changeHandler = (event) => {
      setNewTitle(event.target.value);
    };
    
  
    
    return (

        <Card className="expense-item">
             <div className="date">
        <div>{month}</div>
        <div>{props.date.getFullYear()}</div>
        <div>{day}</div>
      </div>
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <input type="text" value={newTitle} onChange={changeHandler} />
      <button onClick={clickHandler}>Change Title</button>

        </Card>


    );
   }

    export default ExpenseItem;