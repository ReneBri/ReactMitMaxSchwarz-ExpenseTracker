import './NewExpense.css';

import ExpenseForm from './ExpenseForm'

import { useState } from 'react';




const NewExpense = ({ addExpenseHandler }) => {

    const [showForm, setShowForm] = useState(false)

    const onSaveExpenseData = (enteredExpenseData) => {
        const expenseData = {
        ...enteredExpenseData,
        id: Math.random().toString()
        }
        addExpenseHandler(expenseData)
    }

    return (
        <div className='new-expense'>
            {!showForm && <button onClick={() => setShowForm(true)}>Add New Expense</button>}

            {showForm && <ExpenseForm onSaveExpenseData={onSaveExpenseData} setShowForm={setShowForm}/>}
        </div>
    )
}

export default NewExpense;