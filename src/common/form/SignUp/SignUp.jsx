import React from 'react'
import Button from '../../Button/Button'
import TextField from '../../TextField/TextField'

const SignUp = () => {
  return (
    <div style={{margin:"0px",padding:"20px"}}>
    <div style={{width:"450px",textAlign:"center",margin:"12px",backgroundColor:"#ffffff",borderRadius:"6px",padding:"20px 0px"}}>
        <div>
            
    <TextField type="email" placeholder="Email address or phone number"/>
        </div>
        <div>
    <TextField type="password" placeholder="Password"/>

        </div>
      <div>
     <Button text="Log in" width="395" fontsize="20" bgcolor="#1877F2"  />
      </div>
      <div>
        <a href='#' style={{color:"#1877F2",fontsize:"14px",fontFamily:"helvetica,sans-serif",lineHeight:"48px"}}>Forgotten Password?</a>
      </div>
      <div style={{borderTop:"2px solid #000000"}}>
        &nbsp;
      </div>
      <div>
     <Button text="Create new account"  fontsize="17" bgcolor="#42B72A"  />

      </div>

    </div>
    </div>
  )
}

export default SignUp