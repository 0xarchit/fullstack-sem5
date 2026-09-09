import { useContext } from 'react'
import UserContext from './UserContext'

export default function UserData() {
  const user = useContext(UserContext);
  return (
    <>
      <h1>User Data</h1>
      <p>Name: {user.name}</p>
      <p>Age: {user.age}</p>
      <p>City: {user.city}</p>
    </>
  )
}
