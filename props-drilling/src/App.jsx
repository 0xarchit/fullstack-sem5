import './App.css'
import UserContext from './components/UserContext'
import UserData from './components/UserData';


function App() {
  const user = {
      name: "AJ",
      age: -69,
      city: "Meowthra"
  };
  return (
    <>
      <UserContext.Provider value={user}>
        <UserData />
      </UserContext.Provider>
    </>
  )
}

export default App
