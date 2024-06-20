import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import NameChangeRegister from "./components/NameChangeRegister";
import Header from "./components/Header";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Hello</h1>
      {/* <NameChangeRegister /> */}
      <h1>Hii</h1>
    </>
  );
}

export default App;
