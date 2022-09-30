import { Button, Card, DataTable, Frame, Heading, Loading, Page, Pagination, Select, Spinner, Stack, Text, TextField } from '@shopify/polaris';
import React, { useCallback, useEffect, useState } from 'react'
import './grid.css'

function GridPage() {
  const [data, setData] = useState([]);
  const [flag, setFlag] = useState(false);
  const [activePage, setActivePage] = useState(1);
  const [selected, setSelected] = useState(10)
  const [count, setCount] = useState(0);
  const [spin, setSpin] = useState(false);
  const [selectValues, setSelectValues] = useState([]);
  const [inputValue, setInputValue] = useState([]);
  const [key, setKey] = useState('');
  const [index, setIndex] = useState(1);
  const [value, setValue] = useState('');
  const [notFound, setNotFound] = useState(false);
  let columnNames = ["user_id", "catalog", "username", "shops.email", "shopify_plan", "updated_at", "created_at", "shop_url"];
  const handleSelectChange = useCallback((value) => {
    setSelected((value));
    setSpin(true);
  }, []);
  const handleSelectChange1 = (value, index) => {
    let temp = [...selectValues];
    temp[index] = value;
    setSelectValues(temp);
  };
  const handleInputValue = (value, index) => {
    if (value === '') {
      setFlag(false);
    }
    let temp = [...inputValue];
    temp[index] = value;
    setInputValue(temp);
    setKey(columnNames[index]);
    setIndex(selectValues[index]);
    setValue(value);
    setFlag(true);
  }

  useEffect(() => {
    if (value !== '' && selectValues.length !== 0) {
      setTimeout(() => {
        if (flag === true) {
          let url = new URL(`https://fbapi.sellernext.com/frontend/admin/getAllUsers?activePage=${activePage}&count=${selected}&filter[${key}][${index}]=${value}`);

          console.log(url);
          fetch(url, {
            method: 'POST',
            headers: {
              accept: 'application/json',
              authorization: `Bearer ${sessionStorage.getItem('myToken')}`
            },
          }).then((response) => response.json())
            .then(result => {
              if (result.data.rows.length) {
                setData(result.data.rows);
                setNotFound(false);
              }
              else
                setNotFound(true);
            }
            )
        }
      }, 5000)
    }
  }, [value, selectValues])

  const options = [
    { label: '10', value: '10' },
    { label: '20', value: '20' },
    { label: '30', value: '30' },
    { label: '40', value: '40' },
    { label: '50', value: '50' },
    { label: '60', value: '60' },
  ];
  const options1 = [
    { label: "Equals", value: "1" },
    { label: "Not Equals", value: "2" },
    { label: "Contains", value: "3" },
    { label: "Does Not Contains", value: "4" },
    { label: "Starts With", value: "5" },
    { label: "Ends With", value: "6" },
  ];

  useEffect(() => {
    let url = new URL(`https://fbapi.sellernext.com/frontend/admin/getAllUsers?activePage=${activePage}&count=${selected}`);

    fetch(url, {
      method: 'POST',
      headers: {
        accept: 'application/json',
        authorization: `Bearer ${sessionStorage.getItem('myToken')}`
      },
    }).then(response => response.json())
      .then(result => {
        if (result.data.rows.length) {
          setData(result.data.rows);
          setCount(result.data.count)
          console.log(result)
          setNotFound(false);
        }
      })
      .finally(() => {
        setSpin(false);
      })
  }, [selected, activePage]);

  const rows = data.map(myFunction);

  function myFunction(item) {
    return [item.user_id, item.catalog, item.username, item.email, item.shopify_plan, item.updated_at, item.created_at, item.shop_url]
  }
  const arr = columnNames.map((item, i) => {
    return (<div>
      <Select
        options={options1}
        onChange={(e) => handleSelectChange1(e, i)}
        value={selectValues[i]}
      /><TextField
        value={inputValue[i]}
        onChange={(e) => handleInputValue(e, i)}
        placeholder={item}
      />
    </div>)
  })

  const totals = [
    arr, ...rows
  ]
  console.log(data);
  return (
    <div className='main-div'>
      {spin === false ?
        null :
        <div style={{ height: '30px' }}>
          <Frame>
            <Loading />
          </Frame>
        </div>}
      <Heading>Showing from {1 + (activePage - 1) * selected} to {selected * activePage} of {count} users</Heading>
      <Card id='card'>
        <Card.Section  >
          <div id='card-section'>
            <div>
              <Pagination
                label={activePage}
                hasPrevious
                onPrevious={() => {
                  if (activePage >= 2) {
                    setActivePage(activePage - 1);
                    setSpin(true);
                  }
                }}
                hasNext
                onNext={() => {
                  setActivePage(activePage + 1);
                  setSpin(true);
                }}
              />
            </div>
            <div style={{ width: '150px' }}>
              <Select
                label="Row per page"
                labelInline
                options={options}
                onChange={handleSelectChange}
                value={selected}
              />
            </div>
            <div>
              <Button id='btn1' primary>View Columns</Button>
            </div>
          </div>

        </Card.Section>
        {notFound === false ?
          <>
            {data.length > 0 ?
              <Card.Section>
                <Page >
                  <Card>
                    <DataTable
                      columnContentTypes={[
                        'numeric',
                        'numeric',
                        'numeric',
                        'numeric',
                        'numeric',
                        'numeric',
                        'numeric'
                      ]}
                      headings={[
                        <p style={{ fontWeight: 'bold' }}>UserId</p>,
                        <p style={{ fontWeight: 'bold' }}>Catalog</p>,
                        <p style={{ fontWeight: 'bold' }}>Shop domain</p>,
                        <p style={{ fontWeight: 'bold' }}>Shop email</p>,
                        <p style={{ fontWeight: 'bold' }}>Shop Plan name</p>,
                        <p style={{ fontWeight: 'bold' }}> Updated at</p>,
                        <p style={{ fontWeight: 'bold' }}> Created at </p>,
                        <p style={{ fontWeight: 'bold' }}> Shops myshopify domain </p>
                      ]}
                      rows={totals}
                    />
                  </Card>
                </Page>
              </Card.Section> :
              <div id='spinner'>
                <Spinner accessibilityLabel="Spinner example" size="large" />
              </div>
            }
          </>
          :
          <div style={{ justifyContent: 'center', alignItems: 'center', textAlign: 'center', margin: '4rem' }}>
            <Stack vertical>
              <Text variant="heading2xl" >No Data Found</Text>
            </Stack>
          </div>
        }
      </Card>
    </div>
  )
}

export default GridPage