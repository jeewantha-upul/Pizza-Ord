import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      {" "}
      <div>Header</div>
      <Link to="/">Back to Home</Link>
    </>
  );
}

export default Header;
