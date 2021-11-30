import * as React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import { StaticImage } from "gatsby-plugin-image";

const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 2.5rem auto;
  align-items: center;
  letter-spacing: 0.1rem;
  .navlinks {
    margin-left: 1.5rem;
    text-decoration: none;
    font-size: 1.5rem;
    font-weight: bold;
  }
`;
export default function Header() {
  return (
    <StyledHeader>
      <StaticImage src="../../images/gepton.png" height={60} />
      <nav>
        <Link className="navlinks" to="/">
          Home
        </Link>
        <Link className="navlinks" to="/">
          About
        </Link>
        <Link className="navlinks" to="/">
          Career
        </Link>
        <Link className="navlinks" to="/">
          Contact
        </Link>
        <Link className="navlinks" to="/">
          CTA
        </Link>
      </nav>
    </StyledHeader>
  );
}
