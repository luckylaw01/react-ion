
import ExpenseForm from "./ExpenseForm";
import './NewExpense.css';

import React from 'react'

const NewExpense = (props) => {

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    }
    // console.log(expenseData);
    props.onAddExpense(expenseData);
  };
  

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  )
}

export default NewExpense
