import './App.css';
import {React,useState} from 'react';

function App() {
  const [count,setCount]=useState(0)

  const increment=()=>{
    let countVlu=count+1
    setCount(countVlu)
  }

  return (
    <div className='mainContainer'>
      <h1>{count}</h1>
      <button onClick={increment}>Clik me</button>
    </div>
  );
}

export default App;
