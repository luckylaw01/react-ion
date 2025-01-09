import React from 'react';
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';
import Card from '../UI/Card';

const ExpenseItem = (props) => {

    
    return (
        <Card className='expense-item'>
            <ExpenseDate date={props.date} />
            <li className='expense-item__description'>
                <h2>{props.title}</h2>
                <div className='expense-item__price'>Ksh {props.amount}</div>
            </li>
        </Card>
    );
}

export default ExpenseItem;