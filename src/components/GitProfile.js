import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { userNameRedux } from '../redux/profile/ProfileActions'
import ContentPage from './ContentPage'
import NavBar from './Navbar'

function GitProfile(props) {
  const [user, setUser] = useState()
  const [repo,setRepo] = useState('')
  // const [fla]
  
    useEffect(()=> {
      if(props.User_Name){
        (async () => {
          let response = await fetch(`https://api.github.com/users/${props.User_Name}`, {
            method: "GET",
            headers: {
              Authorization: `Bearer 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`
            }
          })
          let result = await response.json();
          setUser(result)
        })();
      }
      else {
        props.userNameRedux(JSON.parse(sessionStorage.getItem('user')))
      }
    },[props.User_Name])
    React.useEffect(() => { fetchRepo() }, [props.data])
  const fetchRepo = async () => {
    let response = await fetch(`https://api.github.com/users/${props.User_Name}/repos`, {
      method: "GET",
      headers: {
        Authorization: `Bearer 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`
      }
    })
    let result = await response.json();
    setRepo(result);
  }

  return (
    <div style={{marginTop:'5rem'}}>
      <NavBar data={user} />
      <ContentPage data={user} repo={repo} />
    </div>
  )
}
const mapStateToProps = state => {
  return {
    ...state
  }
}
const mapStateToDispatch = dispatch => {
  return {
    userNameRedux: (e) => dispatch(userNameRedux(e))
  }
}
export default connect(mapStateToProps, mapStateToDispatch)(GitProfile)