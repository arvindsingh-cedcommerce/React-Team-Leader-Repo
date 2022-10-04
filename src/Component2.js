import { Card, FormLayout, Layout, Page, TextField } from '@shopify/polaris';
import React, { useState,memo } from 'react'
import Component3 from './Component3'
// import memo from './Component1';

function Component2({ name,age,changeAge }) {
  
  console.log('Component2');
  return (
    <>
    <Page >
      <Layout>
      <Layout.Section>
          <Card sectioned>
            Name is : {name}
          </Card>
        </Layout.Section>
        <Layout.Section>
          <Card sectioned>
            <FormLayout>
              <TextField
                label="Enter Age"
                value={age}
                onChange={ changeAge}
              />
            </FormLayout>
          </Card>
        </Layout.Section>
      </Layout>
    </Page>
    </>
  )
}

export default memo(Component2)