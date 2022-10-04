import { Card, FormLayout, Heading, Layout, Page, TextContainer, TextField, TextStyle } from '@shopify/polaris';
import React, { memo, useCallback, useState } from 'react'
import Component2 from './Component2';

function Component1({name,changeName}) {
  
  console.log('Component1');

  return (
    <div>
    <Page >
      <Layout>
        <Layout.Section>
          <Card sectioned>
            <FormLayout>
              <TextField
                label="Enter Name"
                value={name}
                onChange={ changeName}
              />
            </FormLayout>
          </Card>
        </Layout.Section>
      </Layout>
    </Page>
    </div>
  )
}

export default memo(Component1)