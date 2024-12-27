/* eslint-disable react/react-in-jsx-scope */
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./UI/Home";
import Menu from "./features/menu/Menu";
import CreateOrder from "./features/orders/CreateOrder";
import Order from "./features/orders/Order";
import Cart from "./features/cart/Cart";
import AppLayout from "./UI/AppLayout";
import { loader as menuLoader } from "./features/menu/Menu";

const App = () => {
  const routes = createBrowserRouter([
    {
      element: <AppLayout />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/menu", element: <Menu />, loader: menuLoader },
        { path: "/order/new", element: <CreateOrder /> },
        { path: "/order/:orderId", element: <Order /> },
        { path: "/cart", element: <Cart /> },
      ],
    },
  ]);
  return <RouterProvider router={routes} />;
};

export default App;
