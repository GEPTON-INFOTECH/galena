import * as React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
export default function Header() {
  return (
    <div>
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
    </div>
  );
}
