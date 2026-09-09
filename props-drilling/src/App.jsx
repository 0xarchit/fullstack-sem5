import { useState } from 'react';
import './App.css'
import UserContext from './components/UserContext'
import UserData from './components/UserData';


function App() {
  const [user, setUser] = useState({
      name: "AJ",
      age: -69,
      city: "Meowthra"
  });
  return (
    <>
      <UserContext.Provider value={{user, setUser}}>
        <UserData />
      </UserContext.Provider>
    </>
  )
}

export default App
