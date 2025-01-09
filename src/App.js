import React, {useState} from 'react';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

const INITIAL_EXPENSES = [
  { title: 'Car Insurance', amount: 294.67, date: new Date(2021, 2, 13) },
  { title: 'New Bike', amount: 94.67, date: new Date(2022, 5, 19) },
  { title: 'Car Repair', amount: 394.67, date: new Date(2023, 1, 8) },
  { title: 'Food', amount: 494.67, date: new Date(2021, 9, 22) }
];

const App = () => {

  const [expenses, setExpenses] = useState(INITIAL_EXPENSES);

  const addExpenseHandler = (expense) => {
          // setExpenses([expense, ...expenses])

          setExpenses(prevExpenses => {
            return [expense, ...prevExpenses]
          })
        }

  return (
    <div>
      <NewExpense onAddExpense = {addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
