import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import NameChangeRegister from "./components/NameChangeRegister";
import Home from "./components/Home";
// import MainContainerData from "./components/MainContainerData";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Home />
      {/* <MainContainerData /> */}
    </>
  );
}

export default App;
