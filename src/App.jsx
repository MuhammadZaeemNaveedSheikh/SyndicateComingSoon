import Gradient from "./assets/bg-gradient.svg";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

import { initializeApp } from "firebase/app";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
  // ...
  // The value of `databaseURL` depends on the location of the database
  databaseURL: import.meta.env.VITE_DB_URL,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

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
