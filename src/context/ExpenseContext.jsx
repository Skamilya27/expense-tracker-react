import axios from 'axios'
import React, { createContext, useEffect, useState } from 'react'

export const expenseContext = createContext()

const ExpenseProvider = ({ children }) => {
  const [expenses, setExpenses] = useState([]);
  useEffect(() => {
  getExpenses()
  }, []);

      async function getExpenses() {
        const res = await axios.get(
          "https://expense-tracker-react-14d46-default-rtdb.firebaseio.com/expenses.json"
        );
        setExpenses([])
          for (let key in res.data) {
            setExpenses((prev) => [...prev, { id : key,...res.data[key] }])
        }

    }
  
  async function deleteExpense(id) {
    await axios.delete(
      `https://expense-tracker-react-14d46-default-rtdb.firebaseio.com/expenses/${id}.json`
    );
    getExpenses()
  }
  
    async function editExpense(id,item) {
      const res = await axios.put(
        `https://expense-tracker-react-14d46-default-rtdb.firebaseio.com/expenses/${id}.json`,
        item
      );
      console.log(res)
      getExpenses();
  }
  
     async function postExpense(item) {
      const res =  await axios.post(
         "https://expense-tracker-react-14d46-default-rtdb.firebaseio.com/expenses.json"
       ,item);
      // console.log(res)
        getExpenses()
     }

  return (
    <expenseContext.Provider
      value={{ deleteExpense, expenses, postExpense, editExpense }}
    >
      {children}
    </expenseContext.Provider>
  );
};

export default ExpenseProvider;