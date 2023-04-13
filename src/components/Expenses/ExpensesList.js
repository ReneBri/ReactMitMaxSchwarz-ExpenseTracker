import './ExpensesList.css';

import ExpenseItem from './ExpenseItem';

const ExpensesList = ({ filteredResults }) => {
    return <div className='expenses.list'>
                {filteredResults.length === 0 && <h2 className='expenses-list__fallback'>No expenses found :(</h2>}
                {filteredResults !== 0 && filteredResults.map(expense => (
                    <ExpenseItem key={expense.id} expense={expense}/>
                ))}
            </div>
}

export default ExpensesList