import * as React from "react";
import Featured from "../components/molecules/Featured";
import Header from "../components/molecules/Header";
import NavBar from "../components/molecules/NavBar";
import Info from "../components/molecules/Info";

const IndexPage = () => {
  return (
    <div className="pt-4 px-8 sm:mx-auto max-w-screen-xl">
      <title>GEPTON | One stop to all your digital needs.</title>
      <NavBar />
      <Header />
      <Info />
      <Featured />
    </div>
  );
};

export default IndexPage;
