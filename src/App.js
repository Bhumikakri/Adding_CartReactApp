import './App.css';
import { useState, useEffect } from 'react';
import Main from './component/main';
import Header from './component/header';

function App() {
  

  const [array,setarray]=useState([]);
  const [cartItem, setCartItem] = useState(4);

  function getarrayformainfile(arr){
    // console.log(arr)
    let getarr=[...arr];
    setarray(getarr); 
    
  }

  useEffect(() => {
    // Calculate total quantity whenever 'getingArray' changes
    let quantity = array.reduce((total, item) => total + item.quantity, 0);
    setCartItem(quantity);
  }, [array]);

  useEffect(() => {
    setCartItem(cartItem); // Trigger the calculation for cartItem value on initial load
  }, []);

  return (
    <div className="App">
      <Header val={cartItem}/>
      <Main pusingArray={getarrayformainfile}/>
    </div>
  );
}

export default App;
