
import { Button, Table } from 'antd';
import React, { useEffect, useState } from 'react';
//It will display column names
const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Email',
    dataIndex: 'email',
    key: 'email',
  },
  {
    title: 'Phone',
    dataIndex: 'phone',
    key: 'phone',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: 'Action',
    dataIndex: 'action',
    key: 'action',
  },
];

const Grid = () => {
  const [users, setUsers] = useState()
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((data) => data.json())
      .then((result) => {
        console.log(result)
        setUsers(result)
      })
  }, [])
  const Remove = (index) => {
    let localUsers = [...users]
    localUsers.splice(index, 1)
    setUsers(localUsers)
  }
  //data array will display contents of the columns
  const data = users && users.map((user, i) => {
    return {
      key: user.id,
      name: user.name,
      email: user.email,
      phone: user.phone,
      address: [user.address.street, ', ', user.address.city],
      description: ['Company: ', user.company.name + ', ', user.company.catchPhrase + ', ', user.company.catchPhrase],
      action: <Button type="link" onClick={() => Remove(i)}>Delete</Button>
    }
  })
  return (
    <Table
      columns={columns}
      expandable={{
        expandedRowRender: (record) => (
          <p
            style={{
              margin: 0,
            }}
          >
            {record.description}
          </p>
        ),
      }}
      dataSource={data}
    />
  )
}

export default Grid;