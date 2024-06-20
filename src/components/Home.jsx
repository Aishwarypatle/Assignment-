import React from "react";
import Sidebar from "./Sidebar";
import MainContainerData from "./MainContainerData";
import NameChangeRegister from "./NameChangeRegister";
import Header from "./Header";

const Home = () => {
  return (
    <>
      <Header />
      <Sidebar />
      <NameChangeRegister />
    </>
  );
};

export default Home;
