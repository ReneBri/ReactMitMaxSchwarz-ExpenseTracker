import './Expenses.css';

import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';

import { useState } from 'react';


export default function Expenses({ expenses }) {

    const [pickedYear, setPickedYear] = useState('2020');

    const filteredResults = expenses.filter(expense => expense.date.getFullYear().toString() === pickedYear)

    return (

        <Card className='expenses'>
            <ExpensesFilter pickedYear={pickedYear} setPickedYear={setPickedYear} />
            <ExpensesChart filteredResults={filteredResults} />
            <ExpensesList filteredResults={filteredResults} />
        </Card>)
}