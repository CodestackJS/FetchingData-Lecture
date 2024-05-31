import { useEffect, useState } from "react";

const UseEffectExamples = () => {
  // create useState here
  const [count, setCount] = useState(0);

//UseEffect - In React the useEffect hook is used to manage side effects in functional component
//fetching data, manually update DOM, setting timers 
//useEffect takes in a call back function and takes in two arguments
useEffect(() => { 
console.log('This count is');
//This is the effect function. Code will run after every render.
//optional clean up function. Code here runs before the component is unmounted or before the effect runs again.
// return () => {
//     console.log('clean up function');
// }

//whatever in our [] is our dependency. it will make our useEffect fire every time this changes
//if you provide an empty array[], the effect will only run once after the initial render
}, [/*dependency array */  ]);

//you can have multiple useEffects

//clean useEffect not for notes purposes
useEffect(() => {
    console.log('This will re-run everytime our dependency has changed The count is ', count);

  return () => {
    
  }
}, [count])

//clean up function
useEffect(() => {
  console.log('Subscribe inside our useEffect');

  return () => {
  console.log('unsubscribe from our clean up function', count);
  }
}, [])


  // handle increment function
  const handleIncrement = () => {
    setCount((prevCount) => prevCount + 1);
  };

  //handle decrement function
  const handleDecrement = () => {
    setCount((prevCount) => prevCount - 1);
  };

  //start of jsx below
  return (
    <>
      <h1 className="text-center">UseEffect Example</h1>
      <div className="row justify-content-center">
        <div className="col-6 d-flex flex-column align-items-center">
          <p>Count: {count}</p>
          <div>
          <button
            className="btn btn-outline-primary mx-3 m-2"
            onClick={handleIncrement}
          >
            Increment
          </button>
          <button
            className="btn btn-outline-secondary mx-3 m-2"
            onClick={handleDecrement}
          >
            Decrement
          </button>
          </div>
        
        </div>
      </div>
    </>
  );
};

export default UseEffectExamples;
