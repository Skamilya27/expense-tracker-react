import React, { useState } from 'react'
import ExpenseContainer from './ExpenseContainer';
import ExpenseForm from './ExpenseForm';

function Expenses() {
    const [expenseArr, setExpenseArr] = useState([]);
  return (
    <div>
        <ExpenseForm expenseArr={expenseArr} setExpenseArr={setExpenseArr} />
      <ExpenseContainer expenseArr={expenseArr} />
    </div>
  )
}

export default Expenses
