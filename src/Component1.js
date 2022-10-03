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
import React, { useMemo, useState } from 'react';

export default function Component1() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [sum, setSum] = useState(0);
  const [toggle,setToggle] = useState(false);

  const Add = () => {
    setSum(num1 + num2);
  }
  const multiplication = useMemo(() => {
    console.log('first')
    return num1 * num2;
    
  },[num1,num2])

  const styledButton={
    backgroundColor: toggle ? 'black' : 'white',
    color: toggle ? 'white': 'black',
    padding:'5px',
    marginLeft:'3px',
    fontSize:'19px'
  }
  return (
    <div className='parent'>
      <Page >
        <Layout>
          <Layout.Section>
            <Card sectioned>
              <FormLayout>
                <TextField
                  label="Number 1"
                  value={num1}
                  onChange={(e) => setNum1(Number(e))}
                  autoComplete="off"
                />
                <TextField
                  label="Number 2"
                  value={num2}
                  onChange={(e) => setNum2(Number(e))}
                  autoComplete="email"
                />
              </FormLayout>
            </Card>
          </Layout.Section>
        </Layout>
        <Button primary id='btn' onClick={Add}>Add</Button>
        <button style={styledButton}  onClick={()=>setToggle(!toggle)}>Toggle</button>
        <Heading>Addition is : {sum}</Heading>
        <Heading>multiplication is : {multiplication}</Heading>
      </Page>
    </div>
  );
}