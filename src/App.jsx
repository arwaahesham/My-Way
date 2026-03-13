import Navbar from "./components/Navbar"
import About from "./components/About"
import Products from "./components/Products"
import Contact from "./components/Contact"
import Home from "./components/Home"
import Footer from "./components/Footer"
import "./App.css"

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Products />
      <Contact />
      <Footer />
    </>
  )
}

export default App