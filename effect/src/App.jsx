import { useEffect, useState } from 'react';
import './App.css'

function App() {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")

  useEffect(() => {
    console.log("useEffect init")
    async function getUsers() {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        console.log(data),
          setUsers(data)
      } catch (error) {
        setError(error.message)
      } finally {
        setLoading(false)
      }
    }
    getUsers()
  }, [])
  return (
    <>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
    <h1>Users</h1>
      {users.map(user => (
        <div key={user.id}>
          <b>{user.name}</b>
          <p>{user.username}</p>
          <p>{user.email}</p>
          <br />
        </div>
      ))}
    </>
  )
}

export default App
