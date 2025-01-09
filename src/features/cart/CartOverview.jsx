import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getTotalCartPrice, getTotalCartQuantity } from "./cartSlice";
import { formatCurrency } from "../../utils/helpers";

/* eslint-disable react/react-in-jsx-scope */
function CartOverview() {

  const totalCartQuantity = useSelector(getTotalCartQuantity);
  const totalCartPrice = useSelector(getTotalCartPrice);
  return (
    <div className="text-white-200 0-4 flex items-center justify-between bg-stone-500 px-4 py-4 text-sm uppercase sm:px-6 md:text-base">
      <p className="space-x-4 font-semibold text-stone-200 sm:space-x-6">
        <span> {totalCartQuantity}  </span>
        <span> {formatCurrency(totalCartPrice)}</span>
      </p>

      <Link to="/cart">Open Cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
