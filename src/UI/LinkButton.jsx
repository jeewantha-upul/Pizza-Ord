/* eslint-disable react/prop-types */
import React from "react";
import { Link, useNavigate } from "react-router-dom";

function LinkButton({ children, to }) {
  const navigate = useNavigate();
  const classNAme = "text-sm text-blue-500 hover:text-blue-600 hover:underline";

  if (to === "-1")
    return (
      <button className={classNAme} onClick={() => navigate(-1)}>
        {children}
      </button>
    );

  return (
    <Link className={classNAme} to={to}>
      {children}
    </Link>
  );
}

export default LinkButton;
