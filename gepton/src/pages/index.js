import * as React from "react";
import Featured from "../components/molecules/Featured";
import Header from "../components/molecules/Header";
import NavBar from "../components/molecules/NavBar";
import Info from "../components/molecules/Info";
import Cta from "../components/molecules/Cta";
import { f1, f2, f3 } from "../../configs/featured";
import Footer from "../components/molecules/Footer";

const IndexPage = () => {
  return (
    <div className="pt-4 px-8 sm:mx-auto max-w-screen-xl">
      <title>GEPTON | One stop to all your digital needs.</title>
      <NavBar />
      <Header />
      <Info />
      <Featured f={f1} />
      <Featured f={f2} reverse={true} />
      <Featured f={f3} />
      <Cta />
      <Footer />
    </div>
  );
};

export default IndexPage;
