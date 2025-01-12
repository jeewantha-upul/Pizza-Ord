/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/react-in-jsx-scope */

import Button from "../../UI/Button";
import { Form, redirect, useActionData } from "react-router-dom";
import { createOrder } from "../../services/apiRestaurant";
import { useSelector } from "react-redux";
import { clearCart, getCart, getTotalCartPrice } from "../cart/cartSlice";
import EmptyCart from "../cart/EmptyCart";
import store from '../../store'
import { formatCurrency } from "../../utils/helpers";
import { useState } from "react";

// https://uibakery.io/regex-library/phone-number
const isValidPhone = (str) =>
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
    str,
  );


function CreateOrder() {
  const [withPriority, setWithPriority] = useState(false);
  const cart = useSelector(getCart);
  const totalPizzaPrice = useSelector(getTotalCartPrice);

  // if the order is priority, 20% of the bill value is charged
  let totalPrize;
  if(withPriority){
    totalPrize = totalPizzaPrice + (totalPizzaPrice/5);
  }
  else totalPrize = totalPizzaPrice;




  const formErrors = useActionData();
  const phoneNumberError = formErrors?.phone;

  const userName = useSelector( state => state.user.username);


  // if the Cart is empty,
if(!cart.length) return <EmptyCart/>

  return (
    <div className="px-4 py-6">
      <h2 className="mb-8 text-xl font-semibold">Ready to order? Let's go!</h2>

      <Form method="POST">
        <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
          <label className="sm:basis-40">First Name</label>

          <input className="input grow" type="text" name="customer" required defaultValue={userName} />
        </div>

        <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
          <label className="sm:basis-40">Phone number</label>
          <div className="grow">
            <input className="input w-full" type="tel" name="phone" required />
            {phoneNumberError && (
              <p className="mt-2 rounded bg-red-100 p-2 text-xs text-red-700">
                {phoneNumberError}
              </p>
            )}
          </div>
        </div>

        <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
          <label className="sm:basis-40">Address</label>
          <div className="grow">
            <input
              className="input w-full"
              type="text"
              name="address"
              required
            />
          </div>
        </div>

        <div className="mb-12 flex items-center gap-5">
          <input
            className="h-6 w-6 accent-yellow-400 focus:outline-none focus:ring focus:ring-yellow-400 focus:ring-offset-2"
            type="checkbox"
            name="priority"
            id="priority"
            value={withPriority}
            onChange={(e) => setWithPriority(e.target.checked)}
          />
          <label htmlFor="priority" className="font-medium">
            Want to yo give your order priority?
          </label>
        </div>

        <div>
          <input type="hidden" name="cart" value={JSON.stringify(cart)} />
          <Button type="primary">Order Now : {formatCurrency(totalPrize)}</Button>
        </div>
      </Form>
    </div>
  );
}

export const action = async ({ request }) => {
  const formData = await request.formData();
  const formObj = Object.fromEntries(formData);

  const order = {
    ...formObj,
    cart: JSON.parse(formObj.cart),
    priority: formObj.priority === "true",
  };

  // error checking
  const errors = {};

  if (!isValidPhone(order.phone)) {
    errors.phone = "Please give us a correct phone Number";
  }
  if (Object.keys(errors).length > 0) return errors;

  const submitRequest = await createOrder(order);
  console.log(submitRequest);

  // clearing the current cart when submitting the order
  store.dispatch(clearCart());

  return redirect(`/order/${submitRequest.id}`);
};

export default CreateOrder;
