import './App.css';
import '@shopify/polaris/build/esm/styles.css';
import useFetch from './Fetch';
import { Card, DataTable, Page } from '@shopify/polaris';


function App() {
  const [data] = useFetch("https://jsonplaceholder.typicode.com/users");
  console.log(data);
  let rows = [];
  if (data)
    rows = data.map(myFunction);
  function myFunction(user) {
    return [user.name, user.email, [user.address.street, ', ', user.address.city], user.company.name];
  }
  return (
    <div>
      <Page title="Users">
        <Card>
          <DataTable
            columnContentTypes={["text", "numeric", "numeric", "text"]}
            headings={[
              <p style={{ fontWeight: "bold" }}>Name</p>,
              <p style={{ fontWeight: "bold" }}>Email</p>,
              <p style={{ fontWeight: "bold" }}>Address</p>,
              <p style={{ fontWeight: "bold" }}>Company</p>,
            ]}
            rows={rows}
          />
        </Card>
      </Page>
    </div>
  );
}

export default App;