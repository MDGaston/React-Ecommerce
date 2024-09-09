import Layout from "../../Components/Layout"
import OrdersCard from "../../Components/OrdersCard"

import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";
import { Link } from 'react-router-dom';

function MyOrders() {
  const context = useContext(ShoppingCartContext)
  console.log(context.order)
  return (
    <Layout>
      <div className="flex w-80 justify-center relative items-center mb-6">
        <h1 className='font-medium'>MyOrders</h1>
      </div>
      {
        context.order.map((order,index) => (
          <Link key={index} to={`/my-orders/${index}`}>
            <OrdersCard totalPrice={order.totalPrice} totalProducts={order.totalProducts}/>
          </Link>
        ))
      }
    </Layout>
  )
}
  
export default MyOrders
  