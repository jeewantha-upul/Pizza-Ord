/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import { useFetcher } from 'react-router-dom'
import Button from "../../UI/Button"
import { updateOrder } from '../../services/apiRestaurant';

function UpdateOrder({order}) {
  const fetcher = useFetcher();

  return (
 <fetcher.Form method="PATCH" className='text-right'>
  <Button type="primary">Make Priority</Button>
 </fetcher.Form>
  )
}

export default UpdateOrder

export const action = async({request , params})=>{

  const data = {priority : true};

  updateOrder(params.orderId , data)
return null
}