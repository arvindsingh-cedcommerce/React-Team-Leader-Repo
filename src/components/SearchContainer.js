import {
  Card,
  ResourceList,
  ResourceItem,
  Avatar,
  Heading,
  TextField,
  Button,
  Spinner,
} from '@shopify/polaris';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './searchComponent.css'
import GitProfile from './GitProfile';
import { userNameRedux } from '../redux/profile/ProfileActions';
import { connect } from 'react-redux';

function SearchContainer(props) {
  const navigate = useNavigate();
  const [loader, setLoader] = useState(false)
  const [username, setUsername] = useState();
  const [users, setUsers] = useState([])
  const [matchedPerson, setmatchedPerson] = useState({});
  const handleChange = (value) => {
    if (value) {
      setUsername(value)
    }
    else {
      setUsername();
    }
  }
  useEffect(() => { fetchApi() }, [])
  const fetchApi = async () => {
    let response = await fetch('https://api.github.com/users', {
      method: "GET",
      headers: {
        Authorization: `Bearer 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`
      }
    })
    let result = await response.json();
    if (result.length) {
      setUsers(result);
    }
  }
  useEffect(() => { fetchUser() }, [username])
  const fetchUser = async () => {
    setLoader(true);
    let response = await fetch(`https://api.github.com/users/${username}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer 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`
      }
    })
    let result = await response.json();
    setLoader(false)
    setmatchedPerson(result);
  }
  const gitProfile = () => {
    sessionStorage.setItem('user', JSON.stringify(username))
    props.userNameRedux(username)
    navigate('/gitProfile')
  }

  return (
    <div className='search-panel'>
      <div className='heading'><Heading>Get Github Profile Cards!</Heading></div>
      <div className='search'>
        <TextField id='text'
          value={username}
          onChange={handleChange}
          placeholder='Search a Github User'
          autoComplete="off"
        />
      </div>
      <>
        {matchedPerson.message !== 'Not Found' ?
          <Card >
            <ResourceList
              resourceName={{ singular: 'customer', plural: 'customers' }}
              items={[
                {
                  id: 145,
                  url: 'customers/145',
                  avatarSource: matchedPerson.avatar_url
                  ,
                  name: matchedPerson.login,
                  location: 'Learning to Learn!!',
                  lastOrder: 'Emerald Silk Gown',
                },
              ]}
              renderItem={(item) => {
                const { id, url, avatarSource, name, location, lastOrder } = item;
                return (
                  <ResourceItem id="content"
                    verticalAlignment="center"
                    media={
                      <Avatar id='avatar'
                        customer
                        size='large'
                        name={name}
                        source={avatarSource}
                      />
                    }
                    accessibilityLabel={`View details for ${name}`}
                    name={name}
                  >

                    {loader ? <div><Spinner accessibilityLabel="Spinner example" size="large" /></div> : null}
                    <h1>
                      <Heading element='h1'>{name}</Heading>
                    </h1>
                    <div>{location}</div>
                    <div>&nbsp;</div>
                    <div className='details'><h4>{matchedPerson.followers} Followers</h4><h4>{matchedPerson.following} Following</h4><h4>{matchedPerson.public_repos} Repos</h4></div>
                    <Button size="slim" primary onClick={gitProfile}>View Profile</Button>
                  </ResourceItem>
                );
              }}
            />
          </Card>
          : null}
      </>
    </div>
  )
}
{/* <Card >
<ResourceList
  resourceName={{ singular: 'customer', plural: 'customers' }}
  items={[
    {
      id: 145,
      url: 'customers/145',
      avatarSource:
        'https://burst.shopifycdn.com/photos/freelance-designer-working-on-laptop.jpg?width=746',
      name: 'Khushi',
      location: 'Learning to Learn!!',
      lastOrder: 'Emerald Silk Gown',
    },
  ]}
  renderItem={(item) => {
    const { id, url, avatarSource, name, location, lastOrder } = item;
    return (
      <ResourceItem id="content"
        verticalAlignment="center"
        media={
          <Avatar id='avatar'
            customer
            size='large'
            name={name}
            source={avatarSource}
          />
        }
        accessibilityLabel={`View details for ${name}`}
        name={name}
      >
        <h1>
          <Heading element='h1'>{name}</Heading>
        </h1>
        <div>{location}</div>
        <div>&nbsp;</div>
        <div className='details'><h4>6 Followers</h4><h4>2 Following</h4><h4>18 Repos</h4></div>
        <Button size="slim" primary >View Profile</Button>
      </ResourceItem>
    );
  }}
/>
</Card> */}

const mapStateToProps = state => {
  return {
    ...state,
    User_Name: state.User_Name
  }
}

const mapDispatchToProps = dispatch => {
  return {
    userNameRedux: (e) => dispatch(userNameRedux(e))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchContainer)