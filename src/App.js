import { useEffect, useState } from 'react';
import './App.css';

const App = () => {

const [cat, setCat] = useState("");

useEffect(() => 
{
  fetch("https://catfact.ninja/fact").then((res)=> res.json()).then((data) => { setCat(data.fact)});

}, []);


  return (
    <div className='App'>
     <h1>Fetching details from an API</h1>
     <p>{cat}</p>

    </div>
   
  );
}

export default App;
