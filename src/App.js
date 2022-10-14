import logo from './logo.svg';
import './App.css';
import Container from './Container';
import { Provider } from 'react-redux';
import { store } from './redux/Store';

function App() {
  return (
    <Provider store={store} >
      <div className="App">
        <Container />
      </div>
    </Provider>
  );
}

export default App;
