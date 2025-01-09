import React, {useState} from 'react'
import './ExpenseFilter.css'
import Card from '../UI/Card'


const ExpenseFilter = (props) => {

  
  const [year, setYear] = useState(2022) 
  const selectYearHandler = (event) => {
    setYear(event.target.value);
    props.onChangeFilter(year);
  }
  

  return (
    <Card className="expense-filter">
      <form className='expense-filter__control'>
      <label >Fiter by year</label>
      <select name='year' onChange={selectYearHandler}>
        <option>2021</option>
        <option>2022</option>
        <option>2023</option>
        <option>2024</option>
      </select>
      </form>
    </Card>
  )
}

export default ExpenseFilter
