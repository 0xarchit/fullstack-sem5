import { useState } from 'react'

export default function UserData() {
  const [data, setData] = useState({
    name: "AJ",
    age: -69,
    city: "Meowthra"
  })

  function updateName() {
    setData({
      ...data,
      name: "Arc"
    })
  }

  return (
    <>
      <h1>Name: {data.name}</h1>
      <h1>Age: {data.age}</h1>
      <h1>City: {data.city}</h1>

      <button onClick={updateName}>Update Name</button>
    </>
  )
}
