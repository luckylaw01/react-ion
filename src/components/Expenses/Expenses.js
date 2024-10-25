import React from 'react';
import './Expenses.css';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';

const Expenses = () => {
    const expenses = [
        { title: 'Car Insurance', amount: 294.67, date: new Date(2021, 2, 13) },
        { title: 'New Bike', amount: 94.67, date: new Date(2022, 5, 19) },
        { title: 'Car Repair', amount: 394.67, date: new Date(2023, 1, 8) },
        { title: 'Food', amount: 494.67, date: new Date(2021, 9, 22) }
      ];

  return (
    <Card className='expenses'>
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
    </Card>
  )
}

export default Expenses;

