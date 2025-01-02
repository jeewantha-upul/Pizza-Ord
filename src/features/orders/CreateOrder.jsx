/* eslint-disable react/react-in-jsx-scope */

import Button from "../../UI/Button";
import { Form, redirect, useActionData } from "react-router-dom";
import { createOrder } from "../../services/apiRestaurant";

// https://uibakery.io/regex-library/phone-number
const isValidPhone = (str) =>
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
    str,
  );

const fakeCart = [
  {
    pizzaId: 12,
    name: "Mediterranean",
    quantity: 2,
    unitPrice: 16,
    totalPrice: 32,
  },
  {
    pizzaId: 6,
    name: "Vegetale",
    quantity: 1,
    unitPrice: 13,
    totalPrice: 13,
  },
  {
    pizzaId: 11,
    name: "Spinach and Mushroom",
    quantity: 1,
    unitPrice: 15,
    totalPrice: 15,
  },
];

function CreateOrder() {
  // const [withPriority, setWithPriority] = useState(false);
  const cart = fakeCart;

  const formErrors = useActionData();
  const phoneNumberError = formErrors?.phone;

  return (
    <div>
      <h2>Ready to order? Let's go!</h2>

      <Form method="POST">
        <div>
          <label>First Name</label>
          <input type="text" name="customer" required />
        </div>

        <div>
          <label>Phone number</label>
          <div>
            <input type="tel" name="phone" required />
          </div>
          {phoneNumberError && <p>{phoneNumberError}</p>}
        </div>

        <div>
          <label>Address</label>
          <div>
            <input
              type="text"
              name="address"
              required
              className="w-full rounded-full border border-stone-200 px-4 py-2 text-sm transition-all duration-300 placeholder:text-stone-400 focus:outline-none focus:ring focus:ring-yellow-400 md:px-6 md:py-3"
            />
          </div>
        </div>

        <div>
          <input
            className="focus:rinf-offset-2 h-6 w-6 accent-yellow-400 focus:outline-none focus:ring focus:ring-yellow-400"
            type="checkbox"
            name="priority"
            id="priority"
            // value={withPriority}
            // onChange={(e) => setWithPriority(e.target.checked)}
          />
          <label htmlFor="priority">Want to yo give your order priority?</label>
        </div>

        <div>
          <input type="hidden" name="cart" value={JSON.stringify(cart)} />
          <Button>Order Now</Button>
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
    priority: formObj.priority === "on",
  };

  // error checking
  const errors = {};

  if (!isValidPhone(order.phone)) {
    errors.phone = "Please give us a correct phone Number";
  }
  if (Object.keys(errors).length > 0) return errors;

  const submitRequest = await createOrder(order);
  console.log(submitRequest);

  return redirect(`/order/${submitRequest.id}`);
};

export default CreateOrder;
