import React, { useContext, useState } from 'react'
import { Button, Modal } from 'react-bootstrap'
import { expenseContext } from '../../../context/ExpenseContext';

const ExpenseForm = ({setExpenseArr}) => {
    const { postExpense } = useContext(expenseContext);
    const [show, setShow] = useState(false);
    const [data, setData] = useState({Amount: 0, Description: '', Category: 'Food'})

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleChange = (e) => {
        const {value, name} = e.target;
        setData({...data, [name]: value})
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // setExpenseArr(prev => [...prev, data])

        postExpense(data)
    }


  return (
    <div>
      <button className='m-5 btn btn-success' onClick={handleShow}>
        ADD NEW EXPENSE
      </button>

      <Modal show={show} onHide={handleClose} >
        <Modal.Header closeButton>
            <Modal.Title>Add Expense</Modal.Title>
        </Modal.Header>

        <Modal.Body>
            <div className='text-center'>
                <input
                    className='form-control'
                    type='number'
                    placeholder='Enter Amount'
                    name='Amount'
                    onChange={handleChange}
                    required
                />

                <textarea 
                    className='form-control mt-2'
                    type='text'
                    placeholder='Description'
                    name='Description'
                    onChange={handleChange}
                    style={{height: 200}}
                    required
                />

                <select
                    className='form-control mt-2'
                    onChange={handleChange}
                    name='Category'
                    required
                >
                    <option>Food</option>
                    <option>Bills</option>
                    <option>Travel</option>
                    <option>Grocery</option>
                </select>

                <button onClick={handleSubmit} className='btn mt-3 btn-primary'>
                    Add Expense
                </button>
            </div>
        </Modal.Body>

        <Modal.Footer>
            <Button variant='secondary' onClick={handleClose}>Close</Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default ExpenseForm
