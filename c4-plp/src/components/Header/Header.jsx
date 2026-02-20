// import { useEffect } from "react"
import Links from "./Links";
import { Link } from "react-router-dom";

import "./Header.css";

export default function Header() {

  return (
    <header className="header">
      <Link to="/">
        <img className="img" src="/images/logo.png" alt="logo" />
      </Link>
      <nav id="navbar">
        <Links />
      </nav>
    </header>
  );
}
