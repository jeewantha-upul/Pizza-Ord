import { Link } from "react-router-dom";

/* eslint-disable react/react-in-jsx-scope */
function CartOverview() {
  return (
    <div>
      <p>
        <span>23 pizzas</span>
        <span>$23.45</span>
      </p>
      <Link href="#">Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
