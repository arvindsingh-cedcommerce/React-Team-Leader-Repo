import '@shopify/polaris/build/esm/styles.css';
import { Provider } from 'react-redux';
import './App.css';
import Container from './components/Container';
import { store } from './redux/Store';

function App() {
  return (
    <Provider store={store}>
   <div className='App'>
    <Container />
   </div>
    </Provider>
  );
}

export default App;
