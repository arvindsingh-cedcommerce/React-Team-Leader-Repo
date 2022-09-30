import { Button, Heading, Spinner, TextField } from '@shopify/polaris'
import React, { useCallback, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './login.css'

function Login() {
  const navi = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [pressed,setPressed] = useState(false)
  const handleUsername = useCallback((newValue) => {setUsername(newValue);setPressed(false)}, []);
  const handlePassword = useCallback((newValue) => {setPassword(newValue); setPressed(false)}, []);

  const Submit = () =>{
    let url = new URL(`https://fbapi.sellernext.com/user/login`);
    const data = {username:username,password:password}
    for(let key in data){
      url.searchParams.append(key,data[key])
    }
    fetch(url,{
      method:'POST',
      headers:{
        accept:'application/json',
        authorization:'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJ1c2VyX2lkIjoiMSIsInJvbGUiOiJhcHAiLCJpYXQiOjE1MzkwNTk5NzgsImlzcyI6Imh0dHBzOlwvXC9hcHBzLmNlZGNvbW1lcmNlLmNvbSIsImF1ZCI6ImV4YW1wbGUuY29tIiwibmJmIjoxNTM5MDU5OTc4LCJ0b2tlbl9pZCI6MTUzOTA1OTk3OH0.GRSNBwvFrYe4H7FBkDISVee27fNfd1LiocugSntzxAUq_PIioj4-fDnuKYh-WHsTdIFMHIbtyt-uNI1uStVPJQ4K2oYrR_OmVe5_zW4fetHyFmoOuoulR1htZlX8pDXHeybRMYlkk95nKZZAYQDB0Lpq8gxnTCOSITTDES0Jbs9MENwZWVLfyZk6vkMhMoIAtETDXdElIdWjP6W_Q1kdzhwqatnUyzOBTdjd_pt9ZkbHHYnv6gUWiQV1bifWpMO5BYsSGR-MW3VzLqsH4QetZ-DC_AuF4W2FvdjMRpHrsCgqlDL4I4ZgHJVp-iXGfpug3sJKx_2AJ_2aT1k5sQYOMA'
      },
    }).then(response => response.json())
    .then(result=>{
      console.log(result.data.token)
      if(result.success){
       sessionStorage.setItem('myToken',result.data.token)
       alert("Login Authentication Successfull");
         navi('/gridpage');
      }
      else {
        alert("Login Authentication Failed")
        setPressed(false)
      }
    })
  }
  return (
    <div className='login'>
      <Heading id='head1' element='h1'>Login</Heading>
      <TextField id='text'
        label="Username"
        value={username}
        onChange={handleUsername}
        autoComplete="off"
      />
      <TextField id='text'
      type='password'
        label="Password"
        value={password}
        onChange={handlePassword}
        autoComplete="off"
      />
      {/* {pressed === false ? 
      <Button primary size="medium" pressed={pressed} onClick={()=>{setPressed(true);Submit()}} >Submit</Button>:
      <Button loading primary size="medium">Submit</Button>} */}
       <Button primary size="medium" pressed={pressed} onClick={()=>{setPressed(true);Submit()}} >Submit{pressed ?   <span id = 'spin'><Spinner  accessibilityLabel="Spinner example" size="small" /></span> : null}</Button>
    </div>
  )
}

export default Login