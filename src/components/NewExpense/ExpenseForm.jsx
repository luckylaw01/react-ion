import React, { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredDate, setEnteredDate] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const [isFormVisible, setIsFormVisible] = useState(false); // State to toggle form visibility

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };

    props.onSaveExpenseData(expenseData);
    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');
    setIsFormVisible(false); // Hide the form after submission
  };

  const addAnExpenseClickHandler = () => {
    setIsFormVisible(true); // Show the form when button is clicked
  };

  return (
    <>
      {isFormVisible ? (
        <form onSubmit={submitHandler}>
          <div className='new-expense__controls'>
            <div className='new-expense__control'>
              <label>Title</label>
              <input value={enteredTitle} type='text' onChange={titleChangeHandler} />
            </div>
            <div className='new-expense__control'>
              <label>Amount</label>
              <input
                type='number'
                min='0.01'
                step='0.01'
                value={enteredAmount}
                onChange={amountChangeHandler}
              />
            </div>
            <div className='new-expense__control'>
              <label>Date</label>
              <input
                type='date'
                min='2019-01-01'
                max='2022-12-31'
                value={enteredDate}
                onChange={dateChangeHandler}
              />
            </div>
          </div>
          <div className='new-expense__actions'>
            <button type='button' onClick={() => setIsFormVisible(false)}>Cancel</button>
            <button type='submit'>Add Expense</button>
          </div>
        </form>
      ) : (
        <button onClick={addAnExpenseClickHandler}>Add a new Expense</button>
      )}
    </>
  );
};

export default ExpenseForm;
