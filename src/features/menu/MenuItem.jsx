/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
import { useDispatch, useSelector } from "react-redux";
import Button from "../../UI/Button";
import { formatCurrency } from "../../utils/helpers";
import {addItem, getCurrentQuantityById} from '../cart/cartSlice'
import DeleteItem from "../cart/DeleteItem";
import UpdateItemQuantity from "../cart/UpdateItemQuantity";

function MenuItem({ pizza }) {
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;
  console.log(pizza)
  const dispatch = useDispatch();

  // checking the availability of this pizza item in the cart
const itemAvailability = useSelector(getCurrentQuantityById(id));


  const addItemHandler = ()=>{
console.log(id);
const newPizza = {
  pizzaId:id,
  name,
  quantity:1,
  unitPrice,
  totalPrice:unitPrice *1
}
dispatch(addItem(newPizza))
    
  }
  return (
    <li className="flex gap-4 py-2">
      <img
        className={`h-24 ${soldOut ? "opacity-70 grayscale" : ""}`}
        src={imageUrl}
        alt={name}
      />
      <div className="flex grow flex-col pt-0.5">
        <p className="font-medium">{name}</p>
        <p className="text-sm capitalize italic text-stone-500">
          {ingredients.join(", ")}
        </p>
       
        <div className="mt-auto flex items-center justify-between">
     
          {!soldOut ? (
            <p className="text-sm">{formatCurrency(unitPrice)}</p>
          ) : (
            <p className="text-sm font-medium uppercase text-stone-500">
              Sold out
            </p>
          )}
          {!soldOut  &&   <UpdateItemQuantity pizzaId={id} currentQuantity={itemAvailability}></UpdateItemQuantity> }
      

         {itemAvailability !== 0 && <DeleteItem pizzaId={id}/> } 
          {!soldOut && (itemAvailability === 0) &&<Button onClick = {addItemHandler} type="small">Add To Cart</Button>}
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
