import axios from 'axios'
import React, { useState } from 'react'

const VarifyEmail = () => {
    const [t,setT] = useState(true)
    const [text, setText] = useState(
      "Your Email is not verified. Please verify yourself using the link provided in your mailbox."
    );
    const varifyEmailID = async () => {

        const res = await axios.post(
          "https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=AIzaSyCbFTk4FsbWksp6ljbfam7dNwA4IyxJujU",
          {
            requestType: "VERIFY_EMAIL",
            idToken: localStorage.getItem("idToken"),
          } 
        );
        setText("Please check your mailbox and confirm the mail.");
        setT(false)
    }

    return (
      <div className='m-5'>
            <p className='display-3'>{text}</p>
      {t&&  <button onClick={()=>varifyEmailID()} className=" btn btn-lg btn-secondary">Verify Email</button>
     } </div>
    );
}

export default VarifyEmail