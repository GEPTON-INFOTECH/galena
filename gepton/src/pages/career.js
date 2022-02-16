import * as React from "react";
import { Link } from "gatsby";

// styles
const pageStyles = {
  color: "#232129",
  padding: "96px",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
};
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
};

const paragraphStyles = {
  marginBottom: 48,
};
const codeStyles = {
  color: "#8A6534",
  padding: 4,
  backgroundColor: "#FFF4DB",
  fontSize: "1.25rem",
  borderRadius: 4,
};

// markup
const CareerPage = () => {
  return (
    <main style={pageStyles}>
      <title>Career Gepton</title>
      <h1 style={headingStyles}>0 Openings</h1>
      <p style={paragraphStyles}>
        We are only taking applications through employee referrals as of now.
        Keep checking back for updates.
        <br />
        <br />
        <Link to="/">Go home</Link>.
      </p>
    </main>
  );
};

export default CareerPage;
