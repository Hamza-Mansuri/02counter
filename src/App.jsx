import { useState } from 'react' //hooks (chhote modules jo specific task krte he.) Jo UI ko 5 jagah update krne me help krta he.
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

//React ka advantage, at a time of UI updation, koi jagah references nahi lene padte.

// react Fibre Article link :- https://github.com/acdlite/react-fiber-architecture

//IMP's

//Diffing of lists is performed using keys. Keys should be "stable, predictable, and unique."
//Reconciliation is the algorithm behind what is popularly understood as the "virtual DOM."

function App() {
  
       //variable , method name
  let [counter, hamzaCounter] = useState(5) //hook he jo user ke state ko change krta he.
                              //usestate batches me bharta he chizo ko ek saath. aur specific task execute hote he.

  //let counter = 15//const nahi rakhege bcz counter ki value change krna he.

  const addValue = () => { //arrow function

    //console.log("Value added", Math.random);
    
    //counter = counter + 1

    if(counter >= 10)
    {
      console.log("Value cannot go abouve 10");
    }
    else
    {
      //hidden feature
      //call back accept krta he
      //prevCounter Last Updated State he uski wo, wo wapas se fetch krke mangwayi he.
      hamzaCounter( prevCounter => prevCounter + 1 )

      hamzaCounter(prevCounter => prevCounter + 1 ) //calling the method.s

      hamzaCounter(prevCounter => prevCounter + 1 ) //ye sb ek hi counter ko update kr rahe he.
      hamzaCounter(prevCounter => prevCounter + 1 )
      
      

      console.log("Clicked", counter);
    }

    
  }

  const removeValue = () => {

    if(counter <= 0)
    {
      console.log("cannot go in negative values");
      <>
        <p>cannot go in negative values</p>
      </>
      
    }
    else
    {
      hamzaCounter(counter - 1)

      console.log("value removed", counter);
    }

    

  }

  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Couter Value: {counter}</h2>

      <button onClick={addValue}>Add value {counter}</button>
      <br />
      <button onClick={removeValue}>Remove Value {counter}</button>

      <p>footer : {counter}</p>
    </>
  )
}

export default App
