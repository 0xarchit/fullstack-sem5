import { useContext } from 'react'
import UserContext from './UserContext'

export default function UserData() {
  const { user, setUser } = useContext(UserContext);
  return (
    <>
      <h1>User Data</h1>
      <p>Name: {user.name}</p>
      <p>Age: {user.age}</p>
      <p>City: {user.city}</p>
      <button onClick={() => setUser({...user, name: '0x'})}>Change Name</button>
    </>
  )
}
