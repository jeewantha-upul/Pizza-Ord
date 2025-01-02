/* eslint-disable react/react-in-jsx-scope */
import { getMenu } from "../../services/apiRestaurant.js";
import { useLoaderData } from "react-router-dom";
import MenuItem from "./MenuItem.jsx";

function Menu() {
  const menu = useLoaderData();

  return (
    <ul>
      {menu.map((menuItem) => (
        <MenuItem pizza={menuItem} key={menuItem.id} />
      ))}
    </ul>
  );
}

export const loader = async () => {
  const menu = await getMenu();
  console.log(menu);
  return menu;
};

export default Menu;
