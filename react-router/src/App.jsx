import { Route, Routes, Link } from "react-router-dom"
import ProductDetails from "./components/ProductDetails"

function Home() {
  return (
    <>
      <h1>Welcome to the Home Page</h1>
    </>
  )
}

function About() {
  return (
    <>
      <h1>About Us</h1>
    </>
  )
}

function Contact() {
  return (
    <>
      <h1>Contact Us</h1>
    </>
  )
}

function App() {
  return (
    <>
      <nav>
        <Link to="/">Home</Link><br />
        <Link to="/about">About</Link><br />
        <Link to="/contact">Contact</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/product/:id" element={<ProductDetails />} />
      </Routes>
    </>
  )
}

export default App
