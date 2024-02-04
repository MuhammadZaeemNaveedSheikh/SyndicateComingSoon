import Gradient from "./assets/bg-gradient.svg"
import Navbar from "./components/Navbar"

function App() {
  return (
    <main>
      <img src={Gradient} className="absolute left-1/2 -translate-x-1/2 top-0 md:-top-32" />
      <Navbar />
    </main>
  )
}

export default App
