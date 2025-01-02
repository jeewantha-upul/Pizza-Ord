import React from "react";
import { Link } from "react-router-dom";
import UserName from "../features/users/UserName";
import SearchOrder from "../features/orders/SearchOrder";

function Header() {
  return (
    <header className="flex items-center justify-between border-b border-stone-200 bg-yellow-500 px-4 py-3 uppercase sm:px-6">
      <Link to="/" className="tracking-widest">
        Fast React Pizza
      </Link>
      <SearchOrder />
      <UserName />
    </header>
  );
}

export default Header;
