import { useState } from "react";

export default function Counter(){
  const [count, setCount] = useState(0);
  function increase() {
    setCount(count + 1);
  }
  function decrease() {
    if(count>0) setCount(count - 1);
  }
  function reset() {
    setCount(0);
  }

  return (
    <>
      <h1>Count: {count}</h1>
      <h1><button onClick={increase}><b>Increase</b></button></h1>
      <h1><button onClick={decrease}><b>Decrease</b></button></h1>
      <h1><button onClick={reset}><b>Reset</b></button></h1>
    </>
  )
}
