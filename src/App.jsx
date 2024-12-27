/* eslint-disable react/react-in-jsx-scope */
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./UI/Home";
import Menu from "./features/menu/Menu";
import CreateOrder from "./features/orders/CreateOrder";
import Order from "./features/orders/Order";
const App = () => {
  const routes = createBrowserRouter([
    { path: "/", element: <Home /> },
    { path: "/menu", element: <Menu /> },
    { path: "/order/new", element: <CreateOrder /> },
    { path: "/order/:orderId", element: <Order /> },
  ]);
  return <RouterProvider router={routes} />;
};

export default App;
