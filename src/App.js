import './App.css';
import { Route,  Routes } from 'react-router-dom';
import LoginPage from './LoginPage';
import Component from './Component';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<LoginPage/>} />
        <Route path='/component' element={<Component/>} />
      </Routes>
    </div>
  );
}

export default App;
