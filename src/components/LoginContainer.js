import {
  Page,
  Layout,
  Card,
  FormLayout,
  TextField,
  TextContainer,
  TextStyle,
  Heading,
  Button,
} from '@shopify/polaris';
import React from 'react';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { CustomerName, Username, Password } from '../redux/login/LoginActions';
import './loginContainer.css'

function LoginContainer(props) {
  const navigate = useNavigate();
  let url = new URL(`https://fbapi.sellernext.com/user/login?username=${props.username}&password=${props.password}`)
  const Submit = async () =>{
    let response = await fetch(url,{
      method:'POST',
      headers:{
        authorization: "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJ1c2VyX2lkIjoiMSIsInJvbGUiOiJhcHAiLCJpYXQiOjE1MzkwNTk5NzgsImlzcyI6Imh0dHBzOlwvXC9hcHBzLmNlZGNvbW1lcmNlLmNvbSIsImF1ZCI6ImV4YW1wbGUuY29tIiwibmJmIjoxNTM5MDU5OTc4LCJ0b2tlbl9pZCI6MTUzOTA1OTk3OH0.GRSNBwvFrYe4H7FBkDISVee27fNfd1LiocugSntzxAUq_PIioj4-fDnuKYh-WHsTdIFMHIbtyt-uNI1uStVPJQ4K2oYrR_OmVe5_zW4fetHyFmoOuoulR1htZlX8pDXHeybRMYlkk95nKZZAYQDB0Lpq8gxnTCOSITTDES0Jbs9MENwZWVLfyZk6vkMhMoIAtETDXdElIdWjP6W_Q1kdzhwqatnUyzOBTdjd_pt9ZkbHHYnv6gUWiQV1bifWpMO5BYsSGR-MW3VzLqsH4QetZ-DC_AuF4W2FvdjMRpHrsCgqlDL4I4ZgHJVp-iXGfpug3sJKx_2AJ_2aT1k5sQYOMA"
      }
    })
    let result = await response.json();
    console.log(result);
    if(result.success){
      sessionStorage.setItem('customerName',props.customerName);
      sessionStorage.setItem('username',props.username);
      console.log(sessionStorage.getItem('customerName'))
      console.log(sessionStorage.getItem('username'))
      alert('You are logged in Successfully') 
      navigate('/home')
    }
    else
      alert("You entered wrong credentials")
    
  }
  return (
    <Page fullWidth>
      <Layout>
        <Layout.Section>
          <Heading>Login</Heading>
          <Card sectioned>
            <FormLayout>
              <TextField
                label="Customer Name"
                value={props.customerName}
                onChange={(e) => { props.CustomerName(e) }}
                autoComplete="off"
              />
              <TextField
                label="Username"
                value={props.username}
                onChange={(e) => { props.Username(e) }}
              />
              <TextField
                type="password"
                label="Password"
                value={props.password}
                onChange={(e) => { props.Password(e) }}
                autoComplete="password"
              />
            </FormLayout>
            <div id='btn1'><Button primary onClick={Submit}>Submit</Button></div>
          </Card>
        </Layout.Section>
      </Layout>
    </Page>
  );
}

const mapStateToProps = state => {
  return {
    customerName: state.customerName,
    username: state.username,
    password: state.password
  }
}

const mapDispatchToProps = dispatch => {
  return {
    CustomerName: (e) => dispatch( CustomerName(e)),
    Username: (e) => dispatch(Username(e)),
    Password: (e) => dispatch(Password(e))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer)