// this is a simple application to demonstrate the use of React Hooks 

import {useState} from 'react'; // useState is a hook that allows you to add state to functional components

function App() {// this is a functional component
  let [counter, counterset] =useState(8);// useState is a hook that returns an array with two elements: the current state and a function to update it

  const addvalue= ()=>{
    console.log("Button clicked for addition");
    if(counter===18){
      counter=18;
    }
    else{
    counterset(counter+1);
    }
  }
  const subvalue=()=>{
    console.log("button clicked for subtraction");
    if(counter===0){
      counter=0;
    }
    else{
      counterset(counter-1);
    }
    
  }

  return (
    <>
    <h3>Simple Application with React Hooks</h3>
    <h1>Counter Value: {counter}</h1>
    <button onClick={addvalue}>Increased Value: {counter} </button>
    <button onClick={subvalue}>Decreased Value: {counter} </button>
   </>
  );
}

export default App;
