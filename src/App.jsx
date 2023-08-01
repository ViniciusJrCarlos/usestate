import './App.css';

import { useState } from 'react';

//gerenciar o estado de algum valor
//getter e setter

function App() {

  const [name, setName] = useState("Vinicius");

  const [number, setNumber] = useState(1);

  console.log(name);
  const changeNumber = () => {

    setNumber((prevNumber) => prevNumber + 1);
    setNumber((prevNumber) => prevNumber + 1);

  };
  
  return (  
  
  <div className="App"> 

    <h2>Meu nome é: {name} </h2>
    
    <input type="text" value={name} onChange={(e) => setName(e.target.value)}  />

    <div>
      <p> Número: {number} </p>
      <button onClick={changeNumber}> Mudar Numero </button>
    </div>
  </div>

  );

}

export default App;
