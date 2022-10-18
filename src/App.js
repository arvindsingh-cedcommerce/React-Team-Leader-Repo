import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Todo from './components/Todo';
import { Provider } from 'react-redux';
import { store } from './redux/Store';

function App() {
  return (
    <Provider store={store}>
      <div className="">
        <Navbar />
        <Todo />
      </div>
    </Provider>
  );
}

export default App;
