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
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { mapStateToDispatch, mapStateToProps } from './redux/ManageState';
// import { add,subtract,multiply,divide,clear } from './redux/Actions';

function Container(props) {
  const [num1, setNum1] = useState();
  const [num2, setNum2] = useState();
  const [flag, setFlag] = useState('');

  const handleChange = (num1, num2, type) => {
    switch (type) {
      case 'add':
        if (num1 && num2) {
          setFlag('add')
          props.add(num1, num2)
        }
        else
          alert('Both fields are required')
        break
      case 'subtract':
        if (num1 && num2) {
          setFlag('subtract')
          props.subtract(num1, num2)
        }
        else
          alert('Both fields are required')
        break
      case 'multiply':
        if (num1 && num2) {
          setFlag('multiply')
          props.multiply(num1, num2)
        }
        else
          alert('Both fields are required')
        break
      case 'divide':
        if (num1 && num2) {
          setFlag('divide')
          props.divide(num1, num2)
        }
        else
          alert('Both fields are required')
        break
      case 'clear':
        setFlag('clear')
        setNum1('')
        setNum2('')
        props.divide()
        break
      default:
        break
    }

  }
  return (
    <Page fullWidth>
      <Layout>
        <Layout.Section>
          <Card sectioned>
            <FormLayout>
              <TextField
                type='number'
                label="First Number"
                value={num1}
                onChange={(e) => setNum1(e)}
              />
              <TextField
                type="number"
                label="Second Number"
                value={num2}
                onChange={(e) => setNum2(e)}
              />
            </FormLayout>
            <Layout.Section>
              {flag === 'add' ?
                <Heading>Result: {props.addResult.result}</Heading> :
                flag === 'subtract' ?
                  <Heading>Result: {props.subResult.result}</Heading> :
                  flag === 'multiply' ?
                    <Heading>Result: {props.multiResult.result}</Heading> :
                    flag === 'divide' ?
                      <Heading>Result: {props.divideResult.result}</Heading> :
                      flag === 'clear' ?
                        <Heading>Result: {props.clearResult.result}</Heading> : ''}
            </Layout.Section>
            <Layout.Section>
              <Button primary
                onClick={() => handleChange(num1, num2, 'add')}>Add</Button>
              <Button primary
                onClick={() => handleChange(num1, num2, 'subtract')}>Subtract</Button>
              <Button primary
                onClick={() => handleChange(num1, num2, 'multiply')}>Multiply</Button>
              <Button primary
                onClick={() => handleChange(num1, num2, 'divide')}>Divide</Button>
              <Button primary
                onClick={() => handleChange(num1, num2, 'clear')}>Clear</Button>
            </Layout.Section>
          </Card>
        </Layout.Section>
      </Layout>
    </Page>
  );
}

export default connect(mapStateToProps, mapStateToDispatch)(Container)