import React, { useState } from 'react';
import './Expenses.css';
import Card from '../UI/Card';
import ExpenseFilter from './ExpenseFilter';
import ExpensesList from './ExpensesList';
import ExpenseChart from './ExpensesChart';

const Expenses = ( props ) => {
    
  const [filteredYear, setFilteredYear] = useState('2020');
  

  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
  };
      
  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  

  return (
    
    <Card className='expenses'>
      <ExpenseFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
      <ExpenseChart Expenses={filteredExpenses} />
      <ExpensesList items={filteredExpenses} />
      

      {/* <ExpenseItem
        amount={props.items[0].amount}  // Correctly pass the amount
        title={props.items[0].title}
        date={props.items[0].date}  // Correctly pass the date
      /> */}
     
    </Card>
  )
}

export default Expenses;

