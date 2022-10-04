import '@shopify/polaris/build/esm/styles.css';
import './App.css';
import Component1 from './Component1';
import Component2 from './Component2';
import Component3 from './Component3';
import { useCallback, useState } from 'react';

function App() {
  const [name, setName] = useState('');
  const handleName = useCallback((val) => {
    setName(val);
  }, [name]);
  const [age,setAge] = useState('');
  const handleAge = (val)=>{
    setAge(val)
  }
  return (
    <div className="">
      <Component1 name={name} changeName={handleName} />
      <Component2 name={name} age={age} changeAge={handleAge} />
      <Component3 age={age} />
    </div>
  );
}

export default App;
