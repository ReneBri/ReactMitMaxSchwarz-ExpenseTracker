import './ExpenseForm.css';

import { useState } from 'react';

const ExpenseForm = ({ onSaveExpenseData, setShowForm }) => {
    const [title, setTitle] = useState('')
    const [amount, setAmount] = useState('')
    const [date, setDate] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()

        const expenseData = {
            title,
            amount: +amount,
            date: new Date(date)
        }

        onSaveExpenseData(expenseData)
        setTitle('')
        setAmount('')
        setDate('')
        setShowForm(false)
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input 
                        type='text' 
                        onChange={(e) => setTitle(e.target.value)}
                        value={title}
                    />
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input 
                        type='number' 
                        min="0.01" 
                        step="0.01" 
                        onChange={(e) => setAmount(e.target.value)} 
                        value={amount}
                    />
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input 
                        type='date' 
                        min="2019-01-01" 
                        max="2022-12-31" 
                        onChange={(e) => setDate(e.target.value)} 
                        value={date}
                    />
                </div>
                <div className="new-expense__actions">
                    <button onClick={() => setShowForm(false)}>Cancel</button>
                    <button type="submit">Add Expense</button>
                </div>
            </div>
        </form>
    )
}

export default ExpenseForm;