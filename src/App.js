import './App.css';
import '@shopify/polaris/build/esm/styles.css';
import LoginContainer from './components/LoginContainer';
import { Provider } from 'react-redux';
import store from './redux/Store';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';

function App() {
  return (
    <Provider store={store}>
      <Routes>
        <Route path='/' element={<LoginContainer />} />
        <Route path='/home' element={<Home />} />
      </Routes>
    </Provider>
  );
}

export default App;
