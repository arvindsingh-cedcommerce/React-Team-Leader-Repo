import { Button, Card, FormLayout, Heading, InlineError, Layout, Page, ResourceList, Select, SkeletonBodyText, SkeletonPage, Spinner, Stack, TextContainer, TextField, TextStyle, Thumbnail } from '@shopify/polaris';
import React, { useCallback, useEffect, useState } from 'react'
import './component1.css'

function Component1() {
  const [loading, setLoading] = useState(false)
  const [selected, setSelected] = useState([])
  const [selected2, setSelected2] = useState([])
  const [categories, setCategories] = useState([''])
  const [data, setData] = useState([])
  const [data2, setData2] = useState([])
  const [boxArray, setBoxArray] = useState([])
  const [hasChild, setHasChild] = useState(true)
  const [spin, setSpin] = useState(false)
  const [text, setText] = useState('');
  const [mainoptions, setMainoptions] = useState([]);
  const [options2, setOptions2] = useState([]);
  const [buttonDisabled, setButtonDisabled] = useState(false)
  const [payLoad, setPayload] = useState({
    target_marketplace: "eyJtYXJrZXRwbGFjZSI6ImFsbCIsInNob3BfaWQiOm51bGx9",
    selected: [],
    user_id: "63329d7f0451c074aa0e15a8",
    target: {
      marketplace: "amazon",
      shopId: "530"
    }
  })
  const [payLoad2, setPayLoad2] = useState({
    data: { category: "major_appliances", sub_category: "microwaveoven", browser_node_id: "1380072031", barcode_exemption: false },
    user_id: "63329d7f0451c074aa0e15a8",
    source: { marketplace: "shopify", shopId: "500" },
    target: { marketplace: "amazon", shopId: "530" },
    target_marketplace: "eyJtYXJrZXRwbGFjZSI6ImFsbCIsInNob3BfaWQiOm51bGx9",
  })

  const handleSelectChange = (value, i) => {
    console.log(value)
    data[i].map((item) => {
      if (item.name === value && item.hasChildren === true) {
        let temp = { ...payLoad }
        temp.selected = item.parent_id;
        setPayload(temp);
        temp = [...selected]
        temp[i] = value
        setSelected(temp)
        temp = [...categories]
        temp.push(value)
        setCategories(temp);
      }
      if (item.name === value && item.hasChildren === false) {
        console.log("khatam")
        setHasChild(false);
      }
    })
  }

  const AddBox = () => {
    setBoxArray([...boxArray, 1]);
  }

  const Remove = (index) => {
    let temp = [...boxArray]
    temp.splice(index, 1)
    setBoxArray(temp)
    temp = [...selected2]
    options2.map((option, i) => {
      if (option.value === temp[index]) {
        option.disabled = false
        let tempOptions = [...options2]
        tempOptions[i] = option
        setOptions2(tempOptions)
      }
    })
    temp.splice(index, 1)
    setSelected2(temp);
  }

  let options = [];
  data.map((item, i) => {
    options[i] = item.map(myFunction);
  })
  function myFunction(item) {
    return {
      label: item.name,
      value: item.name,
      p_id: String(item.parent_id)
    }
  }
  let tempOptions = []


  const handleSelectChange2 = (value, i) => {
    let temp = [...selected2]
    let temp2 = [...mainoptions]
    temp[i] = value
    setMainoptions(temp)
    setSelected2(temp)
    // options2.map((item, i) => {
    //   if (item.value === value) {
    //     alert(item.label + 'yes')
    //     item.disabled = true
    //     console.log(item);
    //   }
    // })
    for (let i = 0; i <= temp2.length; i++) {
      if (temp.includes(temp2[i].label)) {
        temp2[i].disabled = true
      }
      else { temp2[i].disabled = false }
    }
    setOptions2(temp2)
  }
  console.log(options2);

  // Calling Api
  let url = new URL("https://multi-account.sellernext.com/home/public/connector/profile/getAllCategory/")
  const fetchApi = async () => {
    setSpin(true)
    let response = await fetch(url, {
      method: 'POST',
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        appTag: "amazon_sales_channel",
        Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJ1c2VyX2lkIjoiNjI5MGRiYjIzOGUyOWExYjIzMzYwY2E5Iiwicm9sZSI6ImFkbWluIiwiZXhwIjoxNjk2NTY4MDE3LCJpc3MiOiJodHRwczpcL1wvYXBwcy5jZWRjb21tZXJjZS5jb20iLCJ0b2tlbl9pZCI6IjYzM2U1ZjUxYWRkZGFlMjIyNjczN2E5MiJ9.m5LW1XQ_w6E8Y_ZAWV-SqoqLUpgyeQXe3R7aGKhCfkxA0h0i2oESFxS3NXvsqU2zBWO9iPa5vobjXypZCEo7ZbjieaowfryVym-Yc2Kc-SkfHJfr7a2QrXxfKql0nBX0SvgEfVdWKxmVb3AK7MyT60gVUCCh82H7ExXntXA46oTvIQkK2rMTC1pCAFxFcWPTUEvz2yfuyLf62533dDfbdWwnYBxOYXrTUBN9E6aOsbl8MDfglV7bRIiKCXF1hTRjyOzUzqp_Tns4kg3oT2zXKpv7mLFcPpEPnYveRP4TGi_N5gRjfyA4o7xAxTHIxmhlRrY7ZEFUx-BcW6aZz7tYNw `,
        "Ced-Source-Id": 500,
        "Ced-Source-Name": "shopify",
        "Ced-Target-Id": 530,
        "Ced-Target-Name": "amazon"
      },
      body: JSON.stringify(payLoad)
    })
    let result = await response.json();
    if (result)
      setSpin(false)
    console.log(result);
    // if(payLoad.selected.length)
    let temp = [...data]
    temp.push(result.data)
    setData(temp)
    setLoading(false)
  }
  useEffect(() => { fetchApi() }, [selected]);

  let url2 = new URL("https://multi-account.sellernext.com/home/public/connector/profile/getCategoryAttributes/")
  const fetchApi2 = async () => {
    let response = await fetch(url2, {
      method: 'POST',
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        appTag: "amazon_sales_channel",
        Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJ1c2VyX2lkIjoiNjI5MGRiYjIzOGUyOWExYjIzMzYwY2E5Iiwicm9sZSI6ImFkbWluIiwiZXhwIjoxNjk2NTY4MDE3LCJpc3MiOiJodHRwczpcL1wvYXBwcy5jZWRjb21tZXJjZS5jb20iLCJ0b2tlbl9pZCI6IjYzM2U1ZjUxYWRkZGFlMjIyNjczN2E5MiJ9.m5LW1XQ_w6E8Y_ZAWV-SqoqLUpgyeQXe3R7aGKhCfkxA0h0i2oESFxS3NXvsqU2zBWO9iPa5vobjXypZCEo7ZbjieaowfryVym-Yc2Kc-SkfHJfr7a2QrXxfKql0nBX0SvgEfVdWKxmVb3AK7MyT60gVUCCh82H7ExXntXA46oTvIQkK2rMTC1pCAFxFcWPTUEvz2yfuyLf62533dDfbdWwnYBxOYXrTUBN9E6aOsbl8MDfglV7bRIiKCXF1hTRjyOzUzqp_Tns4kg3oT2zXKpv7mLFcPpEPnYveRP4TGi_N5gRjfyA4o7xAxTHIxmhlRrY7ZEFUx-BcW6aZz7tYNw`,
        "Ced-Source-Id": 500,
        "Ced-Source-Name": "shopify",
        "Ced-Target-Id": 530,
        "Ced-Target-Name": "amazon"
      },
      body: JSON.stringify(payLoad2)
    })
    let result = await response.json()
    // .then(res => res.json())
    // .then(result => {
    let temp = [...data2]
    temp.push(result.data)
    setData2(temp);
    console.log(result.data);
    // result.data.map((value, index) => {
    for (const [key1, value1] of Object.entries(result.data)) {
      for (const [key2, value2] of Object.entries(value1)) {
        for (const [key3, value3] of Object.entries(value2)) {
          if (key3 === 'label') {
            tempOptions.push({ label: value3, value: value3, disabled: false })
          }
        }
      }
    }
    // })
    setOptions2(tempOptions)
    // })
  }

  useEffect(() => { fetchApi2() }, [])

  return (
    <>
      <Page fullWidth>
        <Layout>
          {options.map((option, i) => (
            <Layout.Section key={i}>

              <Card title={i === 0 ? "Products" : categories[i]}>
                <Card.Section>
                  <TextStyle variation="subdued">{option.length} products available</TextStyle>
                </Card.Section>
                <Card.Section >
                  <Select key={i}
                    placeholder="--Select--"
                    options={option}
                    onChange={(value) => handleSelectChange(value, i)}
                    value={selected[i]}
                  />
                </Card.Section>
              </Card>
            </Layout.Section>
          ))}
        </Layout>
      </Page>
      {spin ?
        <SkeletonPage primaryAction>
          <Layout>
            <Layout.Section secondary>
              <Card title="Products">
                <Card.Section>
                  <SkeletonBodyText lines={3} />
                </Card.Section>
                <Card.Section>
                  <SkeletonBodyText lines={1} />
                </Card.Section>
              </Card>
            </Layout.Section>
          </Layout>
        </SkeletonPage>
        : null}
      {hasChild ? null :
        <>
          {boxArray.length ?
            <Page fullWidth>
              <Layout>
                <Layout.Section>
                  <Card sectioned>
                    {boxArray.map((item, i) => (
                      <Stack vertical spacing="extraTight">
                        {console.log("option is ", options2)};
                        <div className='delete'><Button plain onClick={() => Remove(i)}>Delete</Button></div>
                        <FormLayout>
                          <FormLayout.Group condensed>
                            <Select
                              label="Amazon Attribut *"
                              placeholder='--select--'
                              options={options2}
                              value={selected2[i]}
                              onChange={(value) => handleSelectChange2(value, i)}
                            // disabled={option.disabled}
                            />
                            <TextField
                              label="Shopify Attribute "
                              value={text}
                              onChange={(e) => setText(e)}
                              autoComplete="off"
                            />
                          </FormLayout.Group>
                        </FormLayout>
                        <hr style={{ margin: '1rem 0 2rem 0' }} />
                      </Stack>
                    ))}

                  </Card>
                </Layout.Section>
              </Layout>
            </Page>
            : null}
          {/* Add Attributes Button */}
          <Page fullWidth>
            <Layout>
              <Layout.Section>
                <Card title="Optional Attributes" sectioned>
                  <Button primary onClick={AddBox}>Add Attributes</Button>
                </Card>
              </Layout.Section>
            </Layout>
          </Page>
        </>
      }
    </>

  )
}

export default Component1
