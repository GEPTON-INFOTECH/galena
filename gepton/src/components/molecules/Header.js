import * as React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 2.5rem auto;
  .navlinks {
    margin-left: 1.5rem;
    text-decoration: none;
  }
`;
export default function Header() {
  return (
    <StyledHeader>
      <logo>GEPTON</logo>
      <nav>
        <Link className="navlinks">Home</Link>
        <Link className="navlinks">About</Link>
        <Link className="navlinks">Career</Link>
        <Link className="navlinks">Contact</Link>
        <Link className="navlinks">CTA</Link>
      </nav>
    </StyledHeader>
  );
}
