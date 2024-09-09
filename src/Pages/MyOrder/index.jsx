import Layout from "../../Components/Layout"
import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";
import { Link } from 'react-router-dom';

import OrderCard from '../../Components/OrderCard';

import { FaChevronLeft } from "react-icons/fa6";

function MyOrder() {
    const context = useContext(ShoppingCartContext)
    const currentPath = window.location.pathname
    let index = currentPath.substring(currentPath.lastIndexOf('/')+1)
    if (index === 'last') index = context.order?.length -1
    return (
      <Layout>
         <div className="flex w-80 justify-center relative items-center mb-6">
            <Link to='/my-orders' className="absolute left-0">
                <FaChevronLeft />
            </Link>
            <h1>MyOrder</h1>
        </div>
         <div className='flex flex-col w-80'>
                {
                    context.order?.[index]?.products.map(product =>(
                        <OrderCard
                            key = {product.id} 
                            id = {product.id}
                            title = {product.title}
                            imageUrl = {product.images}
                            price = {product.price}
                        />
                    ))
                }
            </div>
      </Layout>
    )
}
  
export default MyOrder
