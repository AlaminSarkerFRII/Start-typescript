import React from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './Counter';



// typeScript  declared as objects with interface 


interface Person {
  name:String,
  job:String,
  age:number,
  location : string | number // u can say any = any type .
  
}

let person : Person ={
  name:"kamal",
  job:"developer",
  age :45,
  location : 55
}


// void means no return .






function App() {
  return (
    <div className="App">
 
<Counter/>

    </div>
  );
}

export default App;
