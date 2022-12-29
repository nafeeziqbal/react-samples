import { useState } from "react";
import AnimalShow from './AnimalShow';
import './App.css';

const getRandomAnimal = () =>{
  const randomAnimal = ['cow', 'cat', 'dog', 'horse','gator','bird'];

  return randomAnimal[Math.floor(Math.random() * randomAnimal.length)];

}

function App() {


  const [animals, setAnimals] = useState([]);

  const handleClick = () => {
    setAnimals([...animals, getRandomAnimal()]);
  };

  const renderAnimals = animals.map((animal,index) =>{
    return <AnimalShow type={animal} key={index} />
  } );

  return (
    <div className="app">
      <button onClick={handleClick}>Add Animal</button>
      <div className="animal-list">{renderAnimals}</div>
    </div>
  );
}

export default App;
