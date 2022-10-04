import { Card, FormLayout, Layout, Page, TextField } from '@shopify/polaris';
import React,{memo} from 'react'
// import memo from './Component1';

function Component3({age}) {
  console.log('Componet3');
  return (
    <Page >
      <Layout>
      <Layout.Section>
          <Card sectioned>
            Age is : {age}
          </Card>
        </Layout.Section>
      </Layout>
    </Page>
  )
}

export default memo(Component3)