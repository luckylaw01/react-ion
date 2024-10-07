import React from 'react';
import './Expenses.css';
import ExpenseItem from './ExpenseItem';

function Expenses() {
    const expenses = [
        { title: 'Car Insurance', amount: 294.67, date: new Date(2021, 2, 28) },
        { title: 'New Bike', amount: 94.67, date: new Date(2021, 2, 28) },
        { title: 'Car Repair', amount: 394.67, date: new Date(2021, 2, 28) },
        { title: 'Food', amount: 494.67, date: new Date(2021, 2, 28) }
      ];

  return (
    <div className='expenses'>
      <ExpenseItem
        amount={expenses[0].amount}  // Correctly pass the amount
        title={expenses[0].title}
        date={expenses[0].date}  // Correctly pass the date
      />
      <ExpenseItem
        amount={expenses[1].amount}  // Correctly pass the amount
        title={expenses[1].title}
        date={expenses[1].date}  // Correctly pass the date
      />
      <ExpenseItem
        amount={expenses[2].amount}  // Correctly pass the amount
        title={expenses[2].title}
        date={expenses[2].date}  // Correctly pass the date
      />
      <ExpenseItem
        amount={expenses[3].amount}
        title={expenses[3].title}
        date={expenses[3].date}
      />
    </div>
  )
}

export default Expenses;

