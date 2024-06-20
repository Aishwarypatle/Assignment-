import React from "react";
import Sidebar from "./Sidebar";
import MainContainerData from "./MainContainerData";
import NameChangeRegister from "./NameChangeRegister";
import Header from "./Header";
import { Card } from "@mui/material";

const Home = () => {
  return (
    <>
      <Header />
      <Card sx={{display : "flex"}}>
        <Sidebar />
        <NameChangeRegister />
      </Card>
    </>
  );
};

export default Home;
