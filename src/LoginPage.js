import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';


function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navi = useNavigate();
  const Submit = () => {
    let url = new URL('https://fbapi.sellernext.com/user/login');
    const data = { username: username, password: password }
    for (let i in data) {
      url.searchParams.append(i, data[i])
    }
    fetch(url, {
      method: "POST",
      headers: {
        accept: 'application/json',
        authorization: "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJ1c2VyX2lkIjoiMSIsInJvbGUiOiJhcHAiLCJpYXQiOjE1MzkwNTk5NzgsImlzcyI6Imh0dHBzOlwvXC9hcHBzLmNlZGNvbW1lcmNlLmNvbSIsImF1ZCI6ImV4YW1wbGUuY29tIiwibmJmIjoxNTM5MDU5OTc4LCJ0b2tlbl9pZCI6MTUzOTA1OTk3OH0.GRSNBwvFrYe4H7FBkDISVee27fNfd1LiocugSntzxAUq_PIioj4-fDnuKYh-WHsTdIFMHIbtyt-uNI1uStVPJQ4K2oYrR_OmVe5_zW4fetHyFmoOuoulR1htZlX8pDXHeybRMYlkk95nKZZAYQDB0Lpq8gxnTCOSITTDES0Jbs9MENwZWVLfyZk6vkMhMoIAtETDXdElIdWjP6W_Q1kdzhwqatnUyzOBTdjd_pt9ZkbHHYnv6gUWiQV1bifWpMO5BYsSGR-MW3VzLqsH4QetZ-DC_AuF4W2FvdjMRpHrsCgqlDL4I4ZgHJVp-iXGfpug3sJKx_2AJ_2aT1k5sQYOMA"
      },
    }).then(response => response.json()).then(result =>
      {
        console.log(result);
        console.log(result.data.token)
        if(result.success){
          sessionStorage.setItem('myToken',result.data.token)
         alert("Login Authentication Successfull");
         navi('/component');
        }
        else {
          alert("Login Authentication Failed")
        }
      }
  )}
  return (
    <div>
      <table>
        <tr><td>Username:</td><td><input type='text'
          value={username} onChange={(e) => setUsername(e.target.value)} /></td></tr>
        <tr><td>Password:</td><td><input type='text'
          value={password} onChange={(e) => setPassword(e.target.value)} /></td></tr>
        <tr><td></td><td><button onClick={Submit}>submit</button></td></tr>
      </table>


    </div>
  )
}

export default LoginPage