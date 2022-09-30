import './App.css';
import '@shopify/polaris/build/esm/styles.css';
import { Route, Routes } from 'react-router-dom';
import Login from './Login';
import GridPage from './Grid';


function App() {
  return (
    <div className="">
      <Routes>
        <Route path='/' element={<Login/>} />
        <Route path='/gridpage' element={<GridPage/>} />
      </Routes>
    </div>
  );
}

export default App;
