import React,{useEffect} from  'react'
import ScriptTag from 'react-script-tag'
import './bank.css'
function Bank() {
 
    return (

        <div className='bank-container'>
            <h1>Donate Here</h1>
           
                 <form className='form-container'><ScriptTag src="https://checkout.razorpay.com/v1/payment-button.js" data-payment_button_id="pl_HVfTrCMBvYkyAQ" async> </ScriptTag> </form>       
     
           </div>
    )
}

export default Bank
