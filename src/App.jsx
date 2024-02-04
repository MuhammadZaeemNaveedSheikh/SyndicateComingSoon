import Gradient from "./assets/bg-gradient.svg";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

function App() {
  return (
    <main className="font-['Poppins'] text-white mx-5 flex flex-col min-h-screen justify-between">
      <img
        src={Gradient}
        className="absolute left-1/2 -translate-x-1/2 top-0 md:-top-32 -z-10"
      />
      <Navbar />
      <Body />
      <Footer />
    </main>
  );
}

export default App;
