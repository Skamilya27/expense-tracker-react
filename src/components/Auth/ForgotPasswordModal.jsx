import React, { useContext, useRef } from 'react'
import { Button, Modal } from 'react-bootstrap'
// import {BsFillKeyFill} from 'react-icons/bs;'
import { AuthContext } from '../../context/AuthContext';
import axios from 'axios';
import { toast } from 'react-toastify';

function ForgotPasswordModal() {

    const {show, setShow} = useContext(AuthContext);
    const inputRef = useRef('');
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    async function handleSubmit() {
        try {
            const res = await axios.post(
                "https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=AIzaSyAcEPtUojmINWD51NeqF0UljCHCjEc2MxM",
                {requestType: "PASSWORD_RESET", email: inputRef.current.value }
            );
            toast('Link send successfully')
            handleClose()
        }
        catch(e) {
            toast(e.response.data.error.message);
        }
    };

  return (
    <>
        <Modal show={show} onHide={handleClose} className=''>
            <Modal.Header closeButton>
                <Modal.Title>
                    Forgot Password 
                    {/* <BsFillKeyFill style={{color: 'gold'}} /> */}
                </Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <div className='text-center'>
                    <input ref={inputRef} className='form-control' placeholder='Email' />

                    <button onClick={() => handleSubmit()} className='btn mt-3 btn-primary'>SEND A LINK</button>
                </div>
            </Modal.Body>

            <Modal.Footer>
                <Button variant='secondary' onClick={handleClose}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal> 
    </>
  );
}

export default ForgotPasswordModal
