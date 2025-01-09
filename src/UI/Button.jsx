/* eslint-disable react/prop-types */
import React from "react";
import { Link } from "react-router-dom";

function Button({ children, disabled, to, type ,onClick}) {
  const base =
    "inline-block text-sm rounded-full bg-yellow-400   font-semibold uppercase tracking-wide text-stone-800 transition-colors duration-300 hover:bg-yellow-300 focus:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed  ";
  const styles = {
    primary: base + " px-4 py-3 md:py-4 md:px-6",
    small: base + " py-2 md:px-5 md:py-2.5 px-4 text-xs",
    secondary:
      "border-3 text-sm border-red-300 inline-block rounded-full font-semibold uppercase tracking-wide text-stone-400 transition-colors duration-300 hover:bg-stone-800 focus:bg-stone-300 focus:outline-none focus:ring focus:ring-stone-200 focus:ring-offset-2 disabled:cursor-not-allowed px-4 py-2.5 md:py-3.5 md:px-6 focus:text-stone-800",
  };

  if (to)
    return (
      <Link to={to} className={styles[type]}>
        {children}
      </Link>
    );

  if(onClick) 
    return (
    <button onClick={onClick} disabled={disabled} className={styles[type]}>
      {children}
    </button>
  );

  return (
    <button disabled={disabled} className={styles[type]}>
      {children}
    </button>
  );
}

export default Button;