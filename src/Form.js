import { Page, Layout, Card, FormLayout, TextField, Checkbox, ChoiceList, Icon, Button, Modal, Stack } from '@shopify/polaris';
import React, { useCallback, useReducer, useState } from 'react';
import { ArrowLeftMinor } from '@shopify/polaris-icons';
import reducer from './Reducer';
import { ACTIONS } from './Actions';

export default function Form() {
  const [active, setActive] = useState(false);
  const handleModalChange = useCallback(() => setActive(!active), [active]);

  const handleClose = () => {
    handleModalChange();
  };
  const initialState = { title: '', description: '', handling_time: '', amazon_parent_sku: '', barcode: '', add_amazon_category: '', image_selection: '' };

  const [state, dispatch] = useReducer(reducer, initialState)

  function handleChange(value, field) {
    dispatch({
      type: field,
      payload: value
    })
  }
  const activator = <Layout><Button primary onClick={handleModalChange}>Show Data</Button></Layout>

  console.log(state)
  return (
    <>
      <Page fullWidth>
        <Button><Icon source={ArrowLeftMinor} color="base" /></Button>
        <Layout>
          <Layout.AnnotatedSection
            id="storeDetails"
            title="Title *"
            description="Shopify and your customers will use this information to contact you."
          >
            <Card sectioned>
              <FormLayout>
                <TextField
                  value={state.title}
                  onChange={(value) => handleChange(value, ACTIONS.TITLE)}
                  placeholder='Title'
                  autoComplete="off"
                />
              </FormLayout>
            </Card>
          </Layout.AnnotatedSection>
          <Layout.AnnotatedSection
            id="storeDetails"
            title="Description"
            description="Shopify and your customers will use this information to contact you."
          >
            <Card sectioned>
              <FormLayout>
                <TextField
                  value={state.description}
                  onChange={(value) => handleChange(value, ACTIONS.DESCRIPTION)}
                  placeholder='Decription'
                  autoComplete="off"
                />
              </FormLayout>
            </Card>
          </Layout.AnnotatedSection>
          <Layout.AnnotatedSection
            id="storeDetails"
            title="Handling Time *"
            description="Shopify and your customers will use this information to contact you."
          >
            <Card sectioned>
              <FormLayout>
                <TextField
                  value={state.handling_time}
                  onChange={(value) => handleChange(value, ACTIONS.HANDLING_TIME)}
                  placeholder='Handling Time'
                  autoComplete="off"
                />
              </FormLayout>
            </Card>
          </Layout.AnnotatedSection>
          <Layout.AnnotatedSection
            id="storeDetails"
            title="Amazon Parent SKU"
            description="Shopify and your customers will use this information to contact you."
          >
            <Card sectioned>
              <FormLayout>
                <TextField
                  value={state.amazon_parent_sku}
                  onChange={(value) => handleChange(value, ACTIONS.AMAZON_PARENT_SKU)}
                  placeholder='Amazon Parent SKU'
                  autoComplete="off"
                />
              </FormLayout>
            </Card>
          </Layout.AnnotatedSection>
          <Layout.AnnotatedSection
            id="storeDetails"
            title="Barcode/GTIN Exemption"
            description="Shopify and your customers will use this information to contact you."
          >
            <Card sectioned>
              <FormLayout>
                <Checkbox
                  label="Barcode/GTIN Exemption"
                  checked={state.barcode}
                  onChange={(value) => handleChange(value, ACTIONS.BARCODE)}
                />
              </FormLayout>
            </Card>
          </Layout.AnnotatedSection>
          <Layout.AnnotatedSection
            id="storeDetails"
            title="Add Amazon Category"
            description="Shopify and your customers will use this information to contact you."
          >
            <Card sectioned>
              <FormLayout>
                <TextField
                  value={state.add_amazon_category}
                  onChange={(value) => handleChange(value, ACTIONS.ADD_AMAZON_CATEGORY)}
                  placeholder='Add Amazon Category'
                  autoComplete="off"
                />
              </FormLayout>
            </Card>
          </Layout.AnnotatedSection>
          <Layout.AnnotatedSection
            id="storeDetails"
            title="Image Selection"
            description="Shopify and your customers will use this information to contact you."
          >
            <Card sectioned>
              <FormLayout>
                <ChoiceList
                  choices={[
                    { label: 'Set product images as shown on Shopify', value: '1' },
                    { label: 'Set custome Amazon images', value: '2' },
                  ]}
                  selected={state.image_selection}
                  onChange={(value) => handleChange(value, ACTIONS.IMAGE_SELECTION)}
                />
              </FormLayout>
            </Card>
          </Layout.AnnotatedSection>
        </Layout>
      </Page>
      <div style={{ height: '0px' }}>
        <Modal
          activator={activator}
          open={active}
          onClose={handleClose}
          title="Data"
          primaryAction={{
            content: 'Cancel',
            onAction: handleClose,
          }}
        >
          <Modal.Section>
            <Stack vertical>
              <Stack.Item>
                Title:{state.title}
              </Stack.Item>
              <Stack.Item>
                Description:{state.description}
              </Stack.Item>
              <Stack.Item>
                Handling Time:{state.handling_time}
              </Stack.Item>
              <Stack.Item>
                Amazon Parent SKU:{state.amazon_parent_sku}
              </Stack.Item>
              <Stack.Item>
                Barcode/GTIN Exemption:{state.barcode === '' ? null : state.barcode ? 'True' : 'False'}
              </Stack.Item>
              <Stack.Item>
                Add Amazon Category:{state.add_amazon_category}
              </Stack.Item>
              <Stack.Item>
                Image Selection:{state.image_selection === '' ? null :
                  state.image_selection[0] === '1' ? 'Set product images as shown on Shopify' : 'Set custome Amazon images'}
              </Stack.Item>

            </Stack>
          </Modal.Section>
        </Modal>
      </div>
    </>
  );
}