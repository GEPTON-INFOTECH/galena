import * as React from "react";
import Header from "../components/molecules/Header";
import NavBar from "../components/molecules/NavBar";

const IndexPage = () => {
  return (
    <div className="py-4 px-8 sm:mx-auto max-w-screen-xl">
      <title>GEPTON | One stop to all your digital needs.</title>
      <NavBar />
      <Header />
    </div>
  );
};

export default IndexPage;
