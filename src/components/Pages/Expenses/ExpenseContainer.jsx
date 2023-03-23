// import React, { useContext, useState } from 'react'
// import { expenseContext } from '../../../context/ExpenseContext'
// import EditForm from './EditForm';

// function ExpenseContainer() {

//     const { expenses, deleteExpense } = useContext(expenseContext)
//     const [editShow, setEditShow] = useState(false);
//   return (
//     <>
//      {expenses.map((e, i) => 
//         <div className=' d-flex justify-content-around m-2 p-2 shadow' key={i}>
//             <p>Amount - {e.Amount}</p>
//             <p>Description - {e.Description}</p>
//             <p>Category - {e.Category}</p>

//             <div className='d-flex gap-2'>
//                 <EditForm item={e} />
//                 <button
//                     onClick={() => deleteExpense(e.id)}
//                     className='btn btn-danger'
//                 >
//                     Delete
//                 </button>
//             </div>
//         </div>
//      )} 
//     </>
//   )
// }

// export default ExpenseContainer

import React, { useContext, useEffect, useState } from 'react'
import { expenseContext } from '../../../context/ExpenseContext';
import EditForm from './EditForm';

const ExpenseContainer = () => {
    const { expenses, deleteExpense } = useContext(expenseContext);
    const [editShow,setEditShow] = useState(false)
    return (
      <div>
        {expenses.map((e, i) => (
          
        <div
            className=" d-flex justify-content-around m-2 p-2 shadow"
            key={i}
          >
            <p>Amount - {e.Amount}</p>
            <p>Description - {e.Description}</p>
            <p>Category - {e.Category}</p>
            <div className=" d-flex gap-2">
             <EditForm item={e} />
              <button
                onClick={() => deleteExpense(e.id)}
                className=" btn btn-danger"
              >
                DELETE
              </button>
            </div>
          </div>
        ))}
      </div>
    );
};

export default ExpenseContainer