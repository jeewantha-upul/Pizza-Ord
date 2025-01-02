/* eslint-disable react/react-in-jsx-scope */
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./UI/Home";
import Error from "./UI/Error";
import Menu from "./features/menu/Menu";
import CreateOrder from "./features/orders/CreateOrder";
import Order from "./features/orders/Order";
import Cart from "./features/cart/Cart";
import AppLayout from "./UI/AppLayout";
import { loader as menuLoader } from "./features/menu/Menu";
import { loader as orderLoader } from "./features/orders/Order";
import { action as orderAction } from "./features/orders/CreateOrder";

const App = () => {
  const routes = createBrowserRouter([
    {
      element: <AppLayout />,
      errorElement: <Error />,
      children: [
        { path: "/", element: <Home /> },
        {
          path: "/menu",
          element: <Menu />,
          loader: menuLoader,
          errorElement: <Error />,
        },
        { path: "/order/new", element: <CreateOrder />, action: orderAction },
        {
          path: "/order/:orderId",
          element: <Order />,
          loader: orderLoader,
          errorElement: <Error />,
        },
        { path: "/cart", element: <Cart /> },
      ],
    },
  ]);
  return <RouterProvider router={routes} />;
};

export default App;
