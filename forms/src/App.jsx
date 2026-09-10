import './App.css'
import { useState } from 'react'

function App() {
  const [name, setName] = useState('')

  function handleSubmit(e){
    e.preventDefault()
    console.log(name)
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" placeholder="Enter your name" value={name} onChange={(e) => setName(e.target.value)} />
        <button type="submit">Submit</button>
      </form>
      <h1>{name}</h1>
    </>
  )
}

export default App
