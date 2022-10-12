import '@shopify/polaris/build/esm/styles.css';
import { Provider } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import GitProfile from './components/GitProfile';
import SearchContainer from './components/SearchContainer';
import store from './redux/Store';

function App() {
  return (
    <Provider store={store}>
      <div className="">
        <Routes>
          <Route path='/' element={<SearchContainer />} />
          <Route path='/gitProfile' element={<GitProfile />} />
        </Routes>
      </div>
    </Provider>
  );
}

export default App;
