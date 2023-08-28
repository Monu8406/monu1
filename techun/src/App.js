import Expenses from "./components/Expenses/Expenses";

 
 import React ,{useState}from "react";

 import NewExpense from "./components/NewExpense/NewExpense";


       

   let DUMMY_EXPENSE =[
                 {
                  title:"School",
                  amount : 100,
                  date : new Date(2001 ,11,12 )

                 },
                 {
                  title:"Tution",
                  amount : 200,
                  date : new Date(2010 ,1,2 )

                 },
                 {
                  title:"Bus",
                  amount : 1000,
                  date : new Date(2020 ,10,2 )

                 },
  
  
   ];
   

   let App=() =>
   {
    
   const [expenses,setExpenses] = useState(DUMMY_EXPENSE);
  
  const addExpenseHandler =(expense)=>{
    
  const updatedExpense =[expense, ...expenses];

    setExpenses(updatedExpense);
   
    };


      return (
         <div>       
        <NewExpense  onAddExpense={addExpenseHandler}/>
      <Expenses item={expenses}/>
      
    </div>


    );

  }
   
  export default App;



