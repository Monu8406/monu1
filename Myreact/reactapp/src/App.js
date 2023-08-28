
  import React from 'react';
  import Expenses from './Component/Expenses';


let App =()=>
{

   let expense =[
    {
      id:'e1',
      title:'School Fee',
      amount: 300,
      date: new Date(2021,5,12),

    },
    {
      id:'e2',
      title:'Tution Fee',
      amount: 500,
      date: new Date(2022,6,20),

    },
    {
      id:'e3',
      title:'Bus Charge',
      amount: 1000,
      date: new Date(2020,1,11),

    },
    {
      id:'e4',
      title:'Teaching',
      amount: 2000,
      date: new Date(2023,10,29),

    },
   ];

    return(

      <div>
       <Expenses  item={expense}></Expenses>

      </div>
    );

}

export default App;
