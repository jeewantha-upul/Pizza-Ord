/* eslint-disable react/prop-types */
import React from 'react'
import Button from '../../UI/Button'
import { useDispatch } from 'react-redux'
import { decreaseItemQuantity, increaseItemQuantity } from './cartSlice';

function UpdateItemQuantity({pizzaId ,currentQuantity}) {
  const dispatch = useDispatch();
  return (
    <div className='flex items-center gap-2 md:gap-3'>
     <Button type="round" onClick={()=> dispatch(decreaseItemQuantity(pizzaId))}> - </Button>
     <span className='text-em font-medium'>{currentQuantity}</span>
    <Button type="round" onClick={()=> dispatch(increaseItemQuantity(pizzaId))}> + </Button>

   
    </div>
  )
}

export default UpdateItemQuantity