import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Test from "./Components/Test";
import PW from "./Components/PW";
import Header from "./Components/Header";
import StudentsDetails from "./Components/StudentsDetails";
import Footer from "./Components/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <PW />
      <Header />
      <StudentsDetails />
      <Footer />
    </>
  );
}

export default App;
