

import  React from 'react';
import UserFavoriteAnimals from './UserFavoriteAnimals';
import Exercise from './exercices3'

const myelement= <h1>I Love JSX!</h1>
const a=5;
const b=6;
const sum = a+b
const user = {
  firstName: 'Bob',
  lastName: 'Dylan',
  favAnimals : ['Horse','Turtle','Elephant','Monkeyy']
};

function App(){
  return (
    <div className="App">
        <Exercise />
      <p>Hello World!</p>
    {myelement}
    <p>React is {sum} times better with JSX </p>
    <h3>First Name: {user.firstName}</h3>
    <h3>Last Name: {user.lastName}</h3>
        <UserFavoriteAnimals user={user} />




    </div>
  )  
}
export default App;